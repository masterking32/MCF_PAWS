# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot
import sys
import os
import random
import time

from .Core.HttpRequest import HttpRequest
from .Core.Auth import Auth
from .Core.User import User
from .Core.Quests import Quests

MasterCryptoFarmBot_Dir = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__ + "/../../"))
)
sys.path.append(MasterCryptoFarmBot_Dir)

from utilities.utilities import getConfig


class FarmBot:
    def __init__(
        self,
        log,
        bot_globals,
        account_name,
        web_app_query,
        proxy=None,
        user_agent=None,
        isPyrogram=False,
        tgAccount=None,
    ):
        self.log = log
        self.bot_globals = bot_globals
        self.account_name = account_name
        self.web_app_query = web_app_query
        self.proxy = proxy
        self.user_agent = user_agent
        self.isPyrogram = isPyrogram
        self.tgAccount = tgAccount

    async def run(self):
        try:
            self.log.info(
                f"<g>🐾 PAWS is starting for account <cyan>{self.account_name}</cyan>...</g>"
            )

            self.http = HttpRequest(
                self.log, self.proxy, self.user_agent, self.account_name
            )
            
            start_param = ""
            if self.tgAccount is not None and self.tgAccount.NewStart:
                start_param = "/?tgWebAppStartParam=" + self.tgAccount.ReferralToken

            auth = Auth(self.log, self.http, self.account_name, start_param)

            if not auth.authorize(self.web_app_query):
                self.log.error(
                    f"<r>❌ Failed to authorize for account <c>{self.account_name}</c>!</r>"
                )
                return

            balance = auth.get_balance()
            badge = auth.getBadge()
            rank = auth.get_avatarId()
            invite_count = auth.get_referralsCount()
            wallet = auth.get_wallet()
            
            wallet_address = (
                f"<c>{wallet}</c>"
                if wallet is not None
                else "<y>Not Connected</y>"
            )

            self.log.info(f"<g>┌─ 💲 Balance: <c>{balance}</c></g>")
            self.log.info(f"<g>├─ 🏆 Badge Tier: <c>{badge}</c></g>")
            self.log.info(f"<g>├─ 🥇 Rank: <c>{rank}</c></g>")
            self.log.info(f"<g>├─ 👥 Friends: <c>{invite_count}</c></g>")
            self.log.info(f"<g>└─ 💳 Wallet Address: {wallet_address}</g>")

            self.log.info(
                f"<g>Overal token allocation info for <c>{self.account_name}</c>:</g>"
            )
            
            hamster = auth.get_hamster_converted()
            telegram = auth.get_telegram_converted()
            paws = auth.get_paws_converted()
            dogs = auth.get_dogs_converted()
            notcoin = auth.get_notcoin_converted()
            empire = auth.get_xempire_converted()
            bums = auth.get_bums_converted()

            self.log.info(f"<g>┌─ 🐭 Hamester Kombat: <c>{hamster}</c></g>")
            self.log.info(f"<g>├─ ✈️ Telegram Register Days: <c>{telegram}</c></g>")
            self.log.info(f"<g>├─ 🐾 Paws: <c>{paws}</c></g>")
            self.log.info(f"<g>├─ 🦴 Dogs: <c>{dogs}</c></g>")
            self.log.info(f"<g>├─ 🪙 NotCoin: <c>{notcoin}</c></g>")
            self.log.info(f"<g>├─ 👑 Empire: <c>{empire}</c></g>")
            self.log.info(f"<g>└─ 📦 Bums: <c>{bums}</c></g>")

            user = User(self.log, self.http, self.account_name)
            user.Complete_Requests()

            quests = Quests(self.log, self.http, self.tgAccount, self.account_name)
            quests_list = quests.get_quests()

            if quests_list is not None:
                total_quests = quests.get_total_quests()
                remaining_quest = quests.get_unclaimed_quests()
                claimed_quests = total_quests - remaining_quest

                self.log.info(
                    f"<g>┌─ 🔢 Total Quests: <c>{total_quests}</c></g>"
                )

                self.log.info(
                    f"<g>├─ ✅ Claimed Quests: <c>{claimed_quests}</c></g>"
                )

                self.log.info(
                    f"<g>└─ 📋 Remaining Quests: <c>{remaining_quest}</c></g>"
                )

                if getConfig("start_quests", True):
                    await quests.complete_and_claim_all_quests()

        except Exception as e:
            self.log.error(
                f"⭕ <r>Failed to farm for account <c>{self.account_name}</c>!</r>"
            )
            self.log.error(f"❌ <r>{str(e)}</r>")
            return

        finally:
            delay_between_accounts = getConfig("delay_between_accounts", 60)
            random_sleep = random.randint(5, 15) + delay_between_accounts
            self.log.info(
                f"⌛ <g>Farming for account <c>{self.account_name}</c> completed. Waiting for <c>{random_sleep}</c> seconds before running the next account...</g>"
            )
            time.sleep(random_sleep)
