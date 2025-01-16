self.__BUILD_MANIFEST = function(s, c) {
  return {
    __rewrites: {
      afterFiles: [],
      beforeFiles: [],
      fallback: []
    },
    "/": [s, "static/chunks/797-581af5e09d812c61.js", c, "static/css/1b3c9e10ee34c7b8.css", "static/chunks/pages/index-3e3a6a5ed979be6f.js"],
    "/404": ["static/chunks/pages/404-3906dc2650dbee03.js"],
    "/_error": ["static/chunks/pages/_error-5842153508ff243d.js"],
    "/app": [s, c, "static/css/ccd1ca9b597585eb.css", "static/chunks/pages/app-1d3f51c936e7f7c4.js"],
    "/phantom-connect": ["static/css/1bef9805c4b5cd05.css", "static/chunks/pages/phantom-connect-0f84872630a9a76a.js"],
    sortedPages: ["/", "/404", "/_app", "/_error", "/app", "/phantom-connect"]
  }
}("static/chunks/645-4bcdb234b6812d1c.js", "static/chunks/956-b1f1bf608cc36245.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();