import json
import time
import random
import asyncio

from utilities.utilities import getConfig


class Quests:
    def __init__(self, log, httpRequest, tgAccount, account_name):
        self.log = log
        self.http = httpRequest
        self.tgAccount = tgAccount
        self.account_name = account_name
        self.quests = []

    def get_quests(self):
        try:
            self.log.info(
                f"<y>⌛ Fetching quests for <c>{self.account_name}</c>...</y>"
            )
            response = self.http.get("v1/quests/list")
            if (
                response is None
                or not response.get("success", False)
                or "data" not in response
            ):
                self.log.error(
                    f"<r>❌ Failed to fetch quests for user <c>{self.account_name}</c>! NULL_RESPONSE</r>"
                )
                self.quests = []
                return None
            self.quests = response["data"]
            return True
        except Exception as e:
            self.log.error(
                f"<r>❌ Failed to fetch quests for user <c>{self.account_name}</c>!</r>"
            )
            self.log.error(f"<r>❌ {str(e)}</r>")
            return None

    async def complete_quest(self, quest):
        try:
            quest_id = quest.get("_id", "")
            quest_code = quest.get("code", "")
            quest_data = quest.get("data", "")
            quest_title = quest.get("title", "N/A")

            if quest_code == "telegram":
                if (
                    getConfig("join_channels", True)
                    and self.tgAccount is not None
                    and not "+" in quest_data
                    and not quest_data.endswith("bot")
                ):
                    channel = quest_data.replace("https://t.me/", "")
                    await self.tgAccount.joinChat(channel)
                    await asyncio.sleep(random.randint(5, 10))
                else:
                    return False

            payload = {"questId": quest_id}

            response = self.http.post(
                url="v1/quests/completed",
                data=json.dumps(payload),
                valid_response_code=[200, 201],
            )
            if response is None:
                self.log.error(
                    f"<r>❌ Failed to complete quest <c>{quest_title}</c>! NULL_RESPONSE</r>"
                )
                return False
            if quest_data == "vote" and response.get("success", False) == False:
                return False
            elif response.get("data", False) == False:
                self.log.error(
                    f"<y>⚠️ Quest <c>{quest_title}</c> bugged and cannot complete now! (SERVER SIDE)</y>"
                )
                return False

            self.log.info(
                f"<g>✅ Completed quest <c>{quest_title}</c> successfully!</g>"
            )
            return True
        except Exception as e:
            self.log.error(f"<r>❌ Failed to complete quest <c>{quest_title}</c>!</r>")
            self.log.error(f"<r>❌ {str(e)}</r>")
            return False

    def get_transactions(self):
        try:
            self.http.get("v1/transactions?page=0&limit=10", display_errors=False)
        except:
            pass

    def claim_quest(self, quest):
        try:
            quest_id = quest.get("_id", "N/A")
            quest_title = quest.get("title", "N/A")

            payload = {"questId": quest_id}

            response = self.http.post(
                url="v1/quests/claim",
                data=json.dumps(payload),
                valid_response_code=[200, 201],
            )

            if response is None:
                self.log.error(
                    f"<r>❌ Failed to claim quest <c>{quest_title}</c>! NULL_RESPONSE</r>"
                )
                return False

            # self.get_transactions() #NO NEEDS

            return True

        except Exception as e:

            self.log.error(f"<r>❌ Failed to claim quest <c>{quest_title}</c>!</r>")
            self.log.error(f"<r>❌ {str(e)}</r>")

            return False

    async def complete_and_claim_all_quests(self):
        self.log.info(f"<y>⌛ Checking remaining quests...</y>")

        for quest in self.quests:
            isClaimed = quest.get("progress", {}).get("claimed", False)
            if isClaimed:
                continue
            currentState = quest.get("progress", {}).get("current", 0)
            totalStates = quest.get("progress", {}).get("total", 0)
            questStatus = quest.get("progress", {}).get("status", None)

            questTitle = quest.get("title", "N/A")
            rewards_amount = quest.get("rewards", [{}])[0].get("amount", 0)
            if (
                currentState >= totalStates
            ) or questStatus == "claimable":  # just claim if it's possible
                if self.claim_quest(quest):
                    self.log.info(
                        f"<g>🎉 Quest <c>{questTitle}</c> claimed successfully! Reward Amount: {rewards_amount}</g>"
                    )
            questCode = quest.get("code", None)
            questType = quest.get("action", None)
            if questType is None or questCode is None:
                continue
            if questType == "wallet":  # should be auto completed
                continue
            if questCode == "boost":  # ???
                continue
            if questType == "copy":  # should be auto completed
                continue
            if questTitle == "Mystery Quest":  # let's skip this one
                continue

            if currentState == 0:
                if questStatus == "pending":
                    self.log.info(
                        f"<y>⌛ Pending quest <c>{questTitle}</c> needs to be completed from bot's server...</y>"
                    )
                    continue
                if await self.complete_quest(quest):
                    currentState = 1
                    sleep_duration = random.randint(5, 10)
                    self.log.info(
                        f"<y>⌛ Claiming quest <c>{questTitle}</c> after {sleep_duration}s...</y>"
                    )
                    await asyncio.sleep(sleep_duration)
            if currentState == 1:
                if self.claim_quest(quest):
                    self.log.info(
                        f"<g>🎉 Quest <c>{questTitle}</c> claimed successfully! Reward Amount: {rewards_amount}</g>"
                    )

    def get_total_quests(self):
        return len(self.quests)

    def get_unclaimed_quests(self):
        unclaimed_quests = [
            quest
            for quest in self.quests
            if not quest.get("progress", {}).get("claimed")
        ]
        return len(unclaimed_quests)
