self.__BUILD_MANIFEST = function(s, a, c) {
  return {
    __rewrites: {
      afterFiles: [],
      beforeFiles: [],
      fallback: []
    },
    "/": [s, a, "static/chunks/672-bf7fd5bfc134fd93.js", "static/css/ed6ea74e52b2ed7d.css", "static/chunks/pages/index-92fdaa93530cc743.js"],
    "/404": ["static/chunks/pages/404-4a56c4a84de1afeb.js"],
    "/_error": ["static/chunks/pages/_error-4037c84fe3f5cc3c.js"],
    "/app": [s, "static/css/b62cf4e58b6cf28d.css", "static/chunks/pages/app-cbe308017d21601d.js"],
    "/app/dashboard": [s, a, "static/chunks/293-4e61cc5d98a408bc.js", "static/css/21f459841b6d8c7f.css", "static/chunks/pages/app/dashboard-06ca524c39f762f6.js"],
    "/app/exchange": ["static/css/460834952e658187.css", "static/chunks/pages/app/exchange-ea92ca736e0dbb49.js"],
    "/app/solana-og": ["static/css/968a6c73304dfb42.css", "static/chunks/pages/app/solana-og-9cbc4f23350657bb.js"],
    "/discord-verify": [c, "static/chunks/pages/discord-verify-bfa362c23f4d2a74.js"],
    "/phantom-connect": [c, "static/chunks/pages/phantom-connect-64f01712227bdb5f.js"],
    sortedPages: ["/", "/404", "/_app", "/_error", "/app", "/app/dashboard", "/app/exchange", "/app/solana-og", "/discord-verify", "/phantom-connect"]
  }
}("static/chunks/66-bd82e9faf1151a56.js", "static/chunks/291-cc3551d5565a7f82.js", "static/css/1bef9805c4b5cd05.css"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();