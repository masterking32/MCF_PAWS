class User:
    def __init__(self, log, httpRequest, account_name):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name

    def get_my_referral(self):
        try:
            response = self.http.get("v1/referral/my?page=0&limit=10")
            if response is not None and response.get("success", None):
                self.log.info(
                    f"<g>🔃 Successfully fetched referral info for <c>{self.account_name}</c>.</g>"
                )
                return response
            else:
                self.log.error(
                    f"<r>❌ Failed to fetch referral info for <c>{self.account_name}</c>! RESPONSE_SECTION</r>"
                )
        except Exception as e:
            self.log.error(
                f"<r>❌ Failed to fetch referral info for user <c>{self.account_name}</c>!</r>"
            )
            self.log.error(f"<r>❌ {str(e)}</r>")
            return False

    def get_leaderboard(self):
        try:
            response = self.http.get("v1/user/leaderboard?page=0&limit=100")
            if (
                response is not None
                and response.get("success", None)
                and "data" in response
            ):
                self.log.info(
                    f"<g>🔃 Successfully fetched leaderboard info for <c>{self.account_name}</c>.</g>"
                )
                return response
            else:
                self.log.error(
                    f"<r>❌ Failed to fetch leaderboard info for <c>{self.account_name}</c>! RESPONSE_SECTION</r>"
                )
        except Exception as e:
            self.log.error(
                f"<r>❌ Failed to fetch leaderboard info for user <c>{self.account_name}</c>!</r>"
            )
            self.log.error(f"<r>❌ {str(e)}</r>")
            return False

    def get_vote_list(self):
        try:
            response = self.http.get("v1/voting/list")
            if (
                response is not None
                and response.get("success", None)
                and "data" in response
            ):
                self.log.info(
                    f"<g>🔃 Successfully fetched vote info for <c>{self.account_name}</c>.</g>"
                )
                return response
            else:
                self.log.error(
                    f"<r>❌ Failed to fetch vote info for <c>{self.account_name}</c>! RESPONSE_SECTION</r>"
                )
        except Exception as e:
            self.log.error(
                f"<r>❌ Failed to fetch vote info for <c>{self.account_name}</c>!</r>"
            )
            self.log.error(f"<r>❌ {str(e)}</r>")
            return False
        
    def get_transactions(self):
        try:
            response = self.http.get("v1/transactions?page=0&limit=10")
            if (
                response is not None
                and response.get("success", None)
                and "data" in response
            ):
                self.log.info(
                    f"<g>🔃 Successfully fetched transactions info for <c>{self.account_name}</c>.</g>"
                )
                return response["data"]
            else:
                self.log.error(
                    f"<r>❌ Failed to fetch transactions info for <c>{self.account_name}</c>! RESPONSE_SECTION</r>"
                )
                return None
        except Exception as e:
            self.log.error(
                f"<r>❌ Failed to fetch transactions info for <c>{self.account_name}</c>!</r>"
            )
            self.log.error(f"<r>❌ {str(e)}</r>")
            return None

    def Complete_Requests(self):
        self.log.info(f"<y>⌛ Fetching requests for <c>{self.account_name}</c>...</y>")

        return self.get_leaderboard(), self.get_transactions()
