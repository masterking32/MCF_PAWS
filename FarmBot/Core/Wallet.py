import json

class Wallet:
    def __init__(self, log, httpRequest, account_name):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
    
    def add(self, address):  # FOR DISCONNECT WALLET SET ADDR TO "" (Null)
        try:
            payload = { "wallet" : address }

            response = self.http.post(
                url="v1/user/wallet",
                data=json.dumps(payload),
                valid_response_code=[200, 201]
            )
            
            if response is not None and response.get("success", None) and "data" in response:
                self.log.info(
                    f"<g>✅ Successfully added wallet to <c>{self.account_name}</c>!</g>"
                )
                return True
            else:
                self.log.error(
                    f"<r>❌ Failed to add wallet for <c>{self.account_name}</c>! RESPONSE_SECTION</r>"
                )
                return False
        except Exception as e:
            self.log.error(
                f"<r>❌ Failed to add wallet for <c>{self.account_name}</c>!</r>"
            )
            self.log.error(f"<r>❌ {str(e)}</r>")
            return False
