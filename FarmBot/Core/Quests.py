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
                
            # elif quest_code == "emojiName":

            #     if (
            #         getConfig("change_name", True) is False
            #         or self.tgAccount is None
            #     ):
            #         return False
                
            #     tgMe = self.tgAccount.me

            #     if tgMe is None:
            #         return False

            #     paws_emoji = "🐾"

            #     try:
            #         tgMe.first_name = tgMe.first_name or ""
            #         tgMe.last_name = tgMe.last_name or ""
                    
            #         await self.tgAccount.setName(
            #             tgMe.first_name, tgMe.last_name + paws_emoji
            #         )
                    
            #         self.log.info(
            #             f"<g>✔️ <c>{paws_emoji}</c> added to <c>{self.account_name}</c> name!</g>"
            #         )

            #     except:
            #         self.log.info(
            #             f"<y>⚠️ Failed to change <c>{self.account_name}</c> name!</y>"
            #         )
            #         return False
                    

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

            #self.get_transactions() #NO NEEDS

            return True

        except Exception as e:

            self.log.error(f"<r>❌ Failed to claim quest <c>{quest_title}</c>!</r>")
            self.log.error(f"<r>❌ {str(e)}</r>")

            return False

    async def complete_and_claim_all_quests(self, invited_10_user, wallet_connected):
        self.log.info(f"<y>⌛ Checking remaining quests...</y>")

        for quest in self.quests:
            progress_claimed = quest.get("progress", {}).get("claimed", False)
            progress_completed = quest.get("progress", {}).get(
                "current", 0
            )  # 0 means not clicked, 1 clicked but not claimed, and 2 means completed !

            quest_code = quest.get("code", "")
            quest_title = quest.get("title", "N/A")

            if (not progress_claimed
                and (quest_code == "invite" and invited_10_user)
                or (quest_code == "wallet" and wallet_connected)
                or quest_code not in ["boost", "vote", "votedown", "voteup", "mystery"]
            ):
                if progress_completed == 0:
                    if await self.complete_quest(quest):

                        progress_completed = 1

                        sleep_duration = random.randint(5, 10)
                        self.log.info(
                            f"<y>⌛ Claiming quest <c>{quest_title}</c> after {sleep_duration}s...</y>"
                        )
                        await asyncio.sleep(sleep_duration)

                if progress_completed == 1:
                    rewards_amount = quest.get("rewards", [{}])[0].get("amount", 0)
                    if self.claim_quest(quest):
                        self.log.info(
                            f"<g>🎉 Quest <c>{quest_title}</c> claimed successfully! Reward Amount: {rewards_amount}</g>"
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
