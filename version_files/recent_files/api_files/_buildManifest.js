self.__BUILD_MANIFEST = function(s, c) {
  return {
    __rewrites: {
      afterFiles: [],
      beforeFiles: [],
      fallback: []
    },
    "/": [s, "static/chunks/797-581af5e09d812c61.js", c, "static/css/ed6ea74e52b2ed7d.css", "static/chunks/pages/index-632fceca9e32975a.js"],
    "/404": ["static/chunks/pages/404-3906dc2650dbee03.js"],
    "/_error": ["static/chunks/pages/_error-5842153508ff243d.js"],
    "/app": ["static/chunks/8015bd09-2cee2227272f3c6c.js", s, "static/chunks/918-58d5479ffee08c9d.js", c, "static/css/faa9c97bc7878419.css", "static/chunks/pages/app-684ca777e107ae5b.js"],
    "/phantom-connect": ["static/css/1bef9805c4b5cd05.css", "static/chunks/pages/phantom-connect-0f84872630a9a76a.js"],
    sortedPages: ["/", "/404", "/_app", "/_error", "/app", "/phantom-connect"]
  }
}("static/chunks/645-555c03db7eb19725.js", "static/chunks/471-9a297a9d225c7fbb.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();