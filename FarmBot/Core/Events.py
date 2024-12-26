import json
import time
import random
import asyncio

from utilities.utilities import getConfig


class Events:
    def __init__(self, log, httpRequest, account_name):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
        self.tasks = []

    def complete_task(self, task):
        try:
            task_id = task.get("_id")
            task_title = task.get("title")

            payload = {"questId": task_id}

            response = self.http.post(
                url="v1/quests/completed",
                data=json.dumps(payload),
                valid_response_code=[200, 201],
            )

            if response is None:
                self.log.error(
                    f"<r>❌ Failed to complete task <c>{task_title}</c>! NULL_RESPONSE</r>"
                )
                return False
            
            self.log.info(
                f"<g>🍭 Completed task <c>{task_title}</c> successfully!</g>"
            )

            return True
        except Exception as e:
            self.log.error(f"<r>┌─ ❌ Failed to complete task <c>{task_title}</c>!</r>")
            self.log.error(f"<r>└─ ❌ {str(e)}</r>")
            return None

    def claim_task(self, task):
        try:
            task_id = task.get("_id")
            task_title = task.get("title")

            payload = {"questId": task_id}

            response = self.http.post(
                url="v1/quests/claim",
                data=json.dumps(payload),
                valid_response_code=[200, 201],
            )

            if response is None:
                self.log.error(
                    f"<r>└─ ❌ Failed to claim task <c>{task_title}</c>! NULL_RESPONSE</r>"
                )
                return False

            rewards_amount = response.get("data", [{}]).get("amount", 0)

            data = f" Reward Amount: <c>{rewards_amount}</c>" if rewards_amount != 0 else ""

            self.log.info(
                f"<g>🎁 Task <c>{task_title}</c> claimed successfully!{data}</g>"
            )
            return True

        except Exception as e:
            self.log.error(f"<r>├─ ❌ Failed to claim task <c>{task_title}</c>!</r>")
            self.log.error(f"<r>└─ ❌ {str(e)}</r>")
            return None
        
    def PAWSMAS(self):
        self.log.info(f"<y>🎄 Checking pawsmas tasks...</y>")

        try:
            response = self.http.get("v1/quests/list?type=christmas")

            if (
                response is None
                or "data" not in response
            ):
                self.log.error(
                    f"<r>❌ Failed to pawsmas tasks for user <c>{self.account_name}</c>! RESPONSE_SECTION</r>"
                )
                return
            

            self.log.info(
                f"<g>🪄 Successfully fetched pawsmas tasks for <c>{self.account_name}</c>.</g>"
            )

            self.tasks = response["data"]

            for task in self.tasks:
                task_claimed = task.get("progress", [{}]).get("claimed", False)

                if task_claimed:
                    continue

                self.complete_task(task)
                self.claim_task(task)

        except Exception as e:
            self.log.error(
                f"<r>❌ Failed to fetch pawsmas tasks for user <c>{self.account_name}</c>!</r>"
            )
            self.log.error(f"<r>❌ {str(e)}</r>")
        