import json

from utilities.utilities import getConfig
from urllib.parse import parse_qs, urlencode


class Auth:
    def __init__(self, log, httpRequest, account_name, start_param=""):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
        self.data = None
        self.start_param = start_param

    def authorize(self, web_app_query):
        try:
            self.log.info(
                f"<y>Authorizing user <c>{self.account_name}</c> to <c>PAWS</c>...</y>"
            )

            ref_code = ""
            try:
                if self.start_param != "":
                    ref_code = self.start_param.split("=")[1]
                else:
                    self.start_param = "/"

                self.http.get(
                    self.start_param,
                    domain="app",
                    send_option_request=False,
                    auth_header=False,
                    only_json_response=False,
                )
            except Exception as e:
                pass

            payload = {"data": web_app_query}
            if ref_code != "":
                payload["referralCode"] = ref_code

            res = self.http.post(
                url="v1/user/auth",
                data=json.dumps(payload),
                valid_response_code=[200, 201],
            )

            if res is None or not res.get("success", False) or "data" not in res:
                self.log.error(
                    f"<r>❌ Failed to authorize user <c>{self.account_name}</c>! RESPONSE_IS_NULL</r>"
                )
                return False

            self.data = res["data"]
            self.http.authToken = self.get_token()

            self.log.info(
                f"<g>└─ ✅ Authorization complete for <c>{self.account_name}</c>!</g>"
            )
            return True
        except Exception as e:
            self.log.error(
                f"<r>❌ Failed to authorize user <c>{self.account_name}</c>!</r>"
            )
            self.log.error(f"<r>❌ {str(e)}</r>")
            return False

    def get_token(self):
        return self.data[0]

    def get_userData(self):
        return self.data[1].get("userData", {})

    def get_avatarId(self):
        return self.get_userData().get("avatarId", 0)

    def mask_wallet_address(self, wallet_address):
        start = wallet_address[:6]
        end = wallet_address[-6:]
        masked = start + "************" + end
        return masked

    def get_wallet(self):
        wallet = self.get_userData().get("wallet", None)
        if wallet is not None and wallet != "":
            masked_address = self.mask_wallet_address(wallet)
            return masked_address
        else:
            return None

    def get_referralData(self):
        return self.data[1].get("referralData", {})

    def get_referralsCount(self):
        return self.get_referralData().get("referralsCount", 0)

    def get_gameData(self):
        return self.data[1].get("gameData", {})

    def get_balance(self):
        return self.get_gameData().get("balance", 0)

    def get_today_Balance(self):
        return self.get_gameData().get("todayBalance", 0)

    def get_claimStreakData(self):
        return self.data[1].get("claimStreakData", {})

    def get_lastClaimDate(self):
        return self.get_claimStreakData().get("lastClaimDate", "N/A")

    def get_claimStreak(self):
        return self.get_claimStreakData().get("claimStreak", 0)

    def get_allocationData(self):
        return self.data[1].get("allocationData", {})

    def get_hamster_converted(self):
        return self.get_allocationData().get("hamster", {}).get("converted", 0)

    def get_telegram_converted(self):
        return self.get_allocationData().get("telegram", {}).get("converted", 0)

    def get_paws_converted(self):
        return self.get_allocationData().get("paws", {}).get("converted", 0)

    def get_dogs_converted(self):
        return self.get_allocationData().get("dogs", {}).get("converted", 0)

    def get_notcoin_converted(self):
        return self.get_allocationData().get("notcoin", {}).get("converted", 0)

    def get_xempire_converted(self):
        return self.get_allocationData().get("empire", {}).get("converted", 0)

    def getBadge(self):
        return self.data[1].get("badgeTier", 0)

    def get_total_allocation(self):
        return self.get_allocationData().get("total", 0)
