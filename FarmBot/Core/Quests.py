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
        self.whitelist_quests = ["674dcb4b30dc53f7e9aec470", "N/A"]  # id's
        self.blacklist_quests = ["675067faaae81a10ba5a3c4f", "N/A"]

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
                return None
            
            self.log.info(
                f"<g>🔃 Successfully fetched quests info for <c>{self.account_name}</c>.</g>"
            )
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
            quest_type = quest.get("type", "")
            quest_data = quest.get("data", "")
            quest_title = quest.get("title", "N/A")

            if quest_code == "telegram" or quest_type == "partner-channel":
                if (
                    getConfig("join_channels", False) == True
                    and self.tgAccount is not None
                    and not "+" in quest_data
                    and not quest_data.endswith("bot")
                ):
                    channel = quest_data.replace("https://t.me/", "")
                    await self.tgAccount.joinChat(channel)
                    await asyncio.sleep(random.randint(5, 10))
                else:
                    return False
                
            elif quest_code == "emojiName":

                if (
                    getConfig("change_name", False) == False
                    or self.tgAccount is None
                ):
                    return False

                tgMe = self.tgAccount.me

                if tgMe is None:
                    return False

                paws_emoji = "🐾"

                try:
                    tgMe.first_name = tgMe.first_name or ""
                    tgMe.last_name = tgMe.last_name or ""

                    if paws_emoji not in [tgMe.first_name, tgMe.last_name]:
                        await self.tgAccount.setName(
                            tgMe.first_name, tgMe.last_name + paws_emoji
                        )

                        self.log.info(
                            f"<g>✔️ <c>{paws_emoji}</c> added to <c>{self.account_name}</c> name! next start quest will be finish</g>"
                        )
                        return None
                except:
                    self.log.info(
                        f"<y>⚠️ Failed to change <c>{self.account_name}</c> name!</y>"
                    )
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
            
            data = f" <c>({quest_data}/10M TAPS)</c>" if quest_id in self.blacklist_quests else ""

            self.log.info(
                f"<g>✅ Completed quest <c>{quest_title}</c> successfully!{data}</g>"
            )

            return True
        except Exception as e:
            self.log.error(f"<r>┌─ ❌ Failed to complete quest <c>{quest_title}</c>!</r>")
            self.log.error(f"<r>└─ ❌ {str(e)}</r>")
            return False

    def claim_quest(self, quest):
        try:
            quest_id = quest.get("_id", "N/A")
            quest_title = quest.get("title", "N/A")
            quest_data = quest.get("data", "0")

            if (
                quest_id in self.blacklist_quests
                and quest_data != "10000000"
            ):
                self.log.info(
                    f"<y>⚠️ Cannot claim quest <c>{quest_title}</c> right now! wait for server allow it for all users. <c>({quest_data}/10M TAPS)</c></y>"
                )
                return None

            rewards_amount = quest.get("rewards", [{}])[0].get("amount", 0)

            payload = {"questId": quest_id}

            response = self.http.post(
                url="v1/quests/claim",
                data=json.dumps(payload),
                valid_response_code=[200, 201],
            )

            if response is None:
                self.log.error(
                    f"<r>└─ ❌ Failed to claim quest <c>{quest_title}</c>! NULL_RESPONSE</r>"
                )
                return False

            if rewards_amount == 0:
                rewards_amount = response.get("data", [{}]).get("amount", 0)

            self.log.info(
                f"<g>🎉 Quest <c>{quest_title}</c> claimed successfully! Reward Amount: <c>{rewards_amount}</c></g>"
            )
            return True

        except Exception as e:

            self.log.error(f"<r>├─ ❌ Failed to claim quest <c>{quest_title}</c>!</r>")
            self.log.error(f"<r>└─ ❌ {str(e)}</r>")

            return False

    async def complete_and_claim_all_quests(self):
        self.log.info(f"<y>⌛ Checking remaining quests...</y>")

        for quest in self.quests:
            is_claimed = quest.get("progress", [{}]).get("claimed", False)

            if is_claimed:
                continue

            current_state = quest.get("progress", [{}]).get("current", 0)
            total_states = quest.get("progress", [{}]).get("total", 0)
            quest_status = quest.get("progress", [{}]).get("status", None)
            
            if (
                current_state >= total_states
                or quest_status == "claimable"
            ):
                self.claim_quest(quest)
                continue

            quest_title = quest.get("title", "N/A")
            quest_code = quest.get("code", None)
            quest_id = quest.get("_id", "N/A")

            if (
                quest_code is None
                or quest_code in ["wallet", "boost", "invite"]
            ):
                continue

            if (
                quest_code == "emoji"
                and getConfig("premium_quest", False) == False
            ):
                continue

            if quest_title == "Mystery Quest":
                if quest_id not in self.whitelist_quests:
                    continue

            if quest_status == "pending":
                self.log.info(
                    f"<y>└─ ⌛ Pending quest <c>{quest_title}</c> needs to be completed from bot's server...</y>"
                )
                continue

            if current_state == 0:
                if await self.complete_quest(quest) and quest_id not in self.blacklist_quests:
                    current_state = 1
                    sleep_duration = random.randint(5, 10)
                    self.log.info(
                        f"<y>├─ ⌛ Claiming quest after {sleep_duration}s...</y>"
                    )
                    await asyncio.sleep(sleep_duration)

            if current_state == 1:
                self.claim_quest(quest)

    def get_total_quests(self):
        return len(self.quests)

    def get_unclaimed_quests(self):
        unclaimed_quests = [
            quest
            for quest in self.quests
            if not quest.get("progress", {}).get("claimed")
        ]
        return len(unclaimed_quests)
