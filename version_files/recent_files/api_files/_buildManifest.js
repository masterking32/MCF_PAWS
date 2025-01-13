self.__BUILD_MANIFEST = function(s, c) {
  return {
    __rewrites: {
      afterFiles: [],
      beforeFiles: [],
      fallback: []
    },
    "/": [s, "static/chunks/797-581af5e09d812c61.js", c, "static/css/ddca092bc4837d3a.css", "static/chunks/pages/index-d9c2c1ceaa21d2ca.js"],
    "/404": ["static/chunks/pages/404-3906dc2650dbee03.js"],
    "/_error": ["static/chunks/pages/_error-5842153508ff243d.js"],
    "/app": [s, c, "static/css/81ed0b70c1f19852.css", "static/chunks/pages/app-a2989676d969732c.js"],
    "/phantom-connect": ["static/css/088adeff40e15ab7.css", "static/chunks/pages/phantom-connect-bbac7ed9a94256b4.js"],
    sortedPages: ["/", "/404", "/_app", "/_error", "/app", "/phantom-connect"]
  }
}("static/chunks/645-4bcdb234b6812d1c.js", "static/chunks/609-5b4a1a3b7752f5fe.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();