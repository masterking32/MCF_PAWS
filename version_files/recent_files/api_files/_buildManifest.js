self.__BUILD_MANIFEST = function(s, c) {
  return {
    __rewrites: {
      afterFiles: [],
      beforeFiles: [],
      fallback: []
    },
    "/": [s, "static/chunks/797-581af5e09d812c61.js", c, "static/css/e3be8496247efcf3.css", "static/chunks/pages/index-96289c3bef0bc2d3.js"],
    "/404": ["static/chunks/pages/404-3906dc2650dbee03.js"],
    "/_error": ["static/chunks/pages/_error-5842153508ff243d.js"],
    "/app": [s, c, "static/css/0eb299b8b0beda53.css", "static/chunks/pages/app-20100c6c5900383e.js"],
    "/phantom-connect": ["static/css/1bef9805c4b5cd05.css", "static/chunks/pages/phantom-connect-0f84872630a9a76a.js"],
    sortedPages: ["/", "/404", "/_app", "/_error", "/app", "/phantom-connect"]
  }
}("static/chunks/645-4bcdb234b6812d1c.js", "static/chunks/471-9a297a9d225c7fbb.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();