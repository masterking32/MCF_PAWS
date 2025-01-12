self.__BUILD_MANIFEST = function(s, c) {
  return {
    __rewrites: {
      afterFiles: [],
      beforeFiles: [],
      fallback: []
    },
    "/": [s, "static/chunks/797-581af5e09d812c61.js", c, "static/css/ddca092bc4837d3a.css", "static/chunks/pages/index-83a7a775186abb50.js"],
    "/404": ["static/chunks/pages/404-3906dc2650dbee03.js"],
    "/_error": ["static/chunks/pages/_error-5842153508ff243d.js"],
    "/app": [s, c, "static/css/81ed0b70c1f19852.css", "static/chunks/pages/app-de2cc6f27ffe4fdb.js"],
    "/phantom-connect": ["static/css/088adeff40e15ab7.css", "static/chunks/pages/phantom-connect-bbac7ed9a94256b4.js"],
    sortedPages: ["/", "/404", "/_app", "/_error", "/app", "/phantom-connect"]
  }
}("static/chunks/645-1d5b8d45aa00a007.js", "static/chunks/609-3b54a5e19b08f433.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();