self.__BUILD_MANIFEST = function(s, c) {
  return {
    __rewrites: {
      afterFiles: [],
      beforeFiles: [],
      fallback: []
    },
    "/": [s, "static/chunks/433-9ea3dd9fe7c716db.js", c, "static/css/541f110a3a99d0df.css", "static/chunks/pages/index-3b507f727a5a30b3.js"],
    "/404": ["static/chunks/pages/404-3906dc2650dbee03.js"],
    "/_error": ["static/chunks/pages/_error-5842153508ff243d.js"],
    "/app": [s, c, "static/css/72061440053ed054.css", "static/chunks/pages/app-9ef708189adab969.js"],
    "/phantom-connect": ["static/css/088adeff40e15ab7.css", "static/chunks/pages/phantom-connect-bbac7ed9a94256b4.js"],
    sortedPages: ["/", "/404", "/_app", "/_error", "/app", "/phantom-connect"]
  }
}("static/chunks/727-3a504d8eff1b82c1.js", "static/chunks/428-6b404590da9f4cbc.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();