import json

from utilities.utilities import getConfig


class Eligibility:
    def __init__(self, log, httpRequest, account_name):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name

    def get_eligibility(self):
        self.log.info(
            f"<y>🔍 Checking eligibility for user <c>{self.account_name}</c>...</y>"
        )

        res = self.http.get(
            url="v1/eligibility",
            valid_response_code=[200, 201],
        )

        if res is None:
            self.log.error(
                f"<r>❌ Failed to check eligibility for user <c>{self.account_name}</c>! RESPONSE_IS_NULL</r>"
            )
            return False

        if not res.get("success", False) or "data" not in res:
            self.log.error(
                f"<r>❌ Failed to check eligibility for user <c>{self.account_name}</c>! {res}</r>"
            )
            return False

        return res["data"]
