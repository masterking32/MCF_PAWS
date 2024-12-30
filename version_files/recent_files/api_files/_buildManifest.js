self.__BUILD_MANIFEST = function(s, c) {
  return {
    __rewrites: {
      afterFiles: [],
      beforeFiles: [],
      fallback: []
    },
    "/": [s, "static/chunks/433-9ea3dd9fe7c716db.js", c, "static/css/716f4ae5c546c908.css", "static/chunks/pages/index-e160663aac7b3ea0.js"],
    "/404": ["static/chunks/pages/404-3906dc2650dbee03.js"],
    "/_error": ["static/chunks/pages/_error-5842153508ff243d.js"],
    "/app": [s, c, "static/css/e2cb307f42673b24.css", "static/chunks/pages/app-874e9e5e35a37b59.js"],
    "/phantom-connect": ["static/css/088adeff40e15ab7.css", "static/chunks/pages/phantom-connect-bbac7ed9a94256b4.js"],
    sortedPages: ["/", "/404", "/_app", "/_error", "/app", "/phantom-connect"]
  }
}("static/chunks/650-619dcabc37a05f8c.js", "static/chunks/428-47e250218f089129.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();