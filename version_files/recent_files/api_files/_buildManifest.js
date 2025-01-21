self.__BUILD_MANIFEST = function(s, e) {
  return {
    __rewrites: {
      afterFiles: [],
      beforeFiles: [],
      fallback: []
    },
    "/": [s, "static/chunks/797-581af5e09d812c61.js", e, "static/css/e3be8496247efcf3.css", "static/chunks/pages/index-26cd176ab86bff3a.js"],
    "/404": ["static/chunks/pages/404-3906dc2650dbee03.js"],
    "/_error": ["static/chunks/pages/_error-5842153508ff243d.js"],
    "/app": [s, e, "static/css/ff65fe615e7b2ad9.css", "static/chunks/pages/app-5a19ccf115915ed7.js"],
    "/phantom-connect": ["static/css/1bef9805c4b5cd05.css", "static/chunks/pages/phantom-connect-0f84872630a9a76a.js"],
    sortedPages: ["/", "/404", "/_app", "/_error", "/app", "/phantom-connect"]
  }
}("static/chunks/645-1d5b8d45aa00a007.js", "static/chunks/956-112490d28246cb57.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();