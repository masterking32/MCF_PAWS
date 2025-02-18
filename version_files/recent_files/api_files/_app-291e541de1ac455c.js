(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888, 38], {
    9108: function(e, t, n) {
      var r;
      ! function(i, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          l = "object",
          c = "string",
          u = "major",
          d = "model",
          p = "name",
          h = "type",
          f = "vendor",
          g = "version",
          m = "architecture",
          y = "console",
          b = "mobile",
          v = "tablet",
          w = "smarttv",
          x = "wearable",
          k = "embedded",
          C = "Amazon",
          S = "Apple",
          E = "ASUS",
          O = "BlackBerry",
          _ = "Browser",
          T = "Chrome",
          A = "Firefox",
          P = "Google",
          R = "Huawei",
          j = "Microsoft",
          L = "Motorola",
          M = "Opera",
          N = "Samsung",
          D = "Sharp",
          I = "Sony",
          $ = "Xiaomi",
          B = "Zebra",
          U = "Facebook",
          V = "Chromium OS",
          W = "Mac OS",
          F = function(e, t) {
            var n = {};
            for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
            return n
          },
          G = function(e) {
            for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
            return t
          },
          H = function(e, t) {
            return typeof e === c && -1 !== K(t).indexOf(K(e))
          },
          K = function(e) {
            return e.toLowerCase()
          },
          z = function(e, t) {
            if (typeof e === c) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
          },
          q = function(e, t) {
            for (var n, r, i, s, c, u, d = 0; d < t.length && !c;) {
              var p = t[d],
                h = t[d + 1];
              for (n = r = 0; n < p.length && !c && p[n];)
                if (c = p[n++].exec(e))
                  for (i = 0; i < h.length; i++) u = c[++r], typeof(s = h[i]) === l && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : o : this[s[0]] = u ? s[1].call(this, u, s[2]) : o : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : o) : this[s] = u || o;
              d += 2
            }
          },
          Z = function(e, t) {
            for (var n in t)
              if (typeof t[n] === l && t[n].length > 0) {
                for (var r = 0; r < t[n].length; r++)
                  if (H(t[n][r], e)) return "?" === n ? o : n
              } else if (H(t[n], e)) return "?" === n ? o : n;
            return e
          },
          Y = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            "8.1": "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          },
          J = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [g, [p, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [g, [p, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [p, g],
              [/opios[\/ ]+([\w\.]+)/i],
              [g, [p, M + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [g, [p, M + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [g, [p, M]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [g, [p, "Baidu"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [p, g],
              [/\bddg\/([\w\.]+)/i],
              [g, [p, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [g, [p, "UC" + _]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [g, [p, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [g, [p, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [g, [p, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [g, [p, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [g, [p, "Smart Lenovo " + _]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [p, /(.+)/, "$1 Secure " + _], g
              ],
              [/\bfocus\/([\w\.]+)/i],
              [g, [p, A + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [g, [p, M + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [g, [p, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [g, [p, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [g, [p, M + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [g, [p, "MIUI " + _]],
              [/fxios\/([-\w\.]+)/i],
              [g, [p, A]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [
                [p, "360 " + _]
              ],
              [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
              [
                [p, /(.+)/, "$1 " + _], g
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [g, [p, N + " Internet"]],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [
                [p, /_/g, " "], g
              ],
              [/metasr[\/ ]?([\d\.]+)/i],
              [g, [p, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [p, "Sogou Mobile"], g
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
              [p, g],
              [/(lbbrowser)/i, /\[(linkedin)app\]/i],
              [p],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [p, U], g
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [p, g],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [g, [p, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [g, [p, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [g, [p, T + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [p, T + " WebView"], g
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [g, [p, "Android " + _]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [p, g],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [g, [p, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [g, p],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [p, [g, Z, {
                "1.0": "/8",
                "1.2": "/1",
                "1.3": "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
              }]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [p, g],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [p, "Netscape"], g
              ],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [g, [p, A + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
              [p, g],
              [/(cobalt)\/([\w\.]+)/i],
              [p, [g, /master.|lts./, ""]]
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [
                [m, "amd64"]
              ],
              [/(ia32(?=;))/i],
              [
                [m, K]
              ],
              [/((?:i[346]|x)86)[;\)]/i],
              [
                [m, "ia32"]
              ],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [
                [m, "arm64"]
              ],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [
                [m, "armhf"]
              ],
              [/windows (ce|mobile); ppc;/i],
              [
                [m, "arm"]
              ],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [
                [m, /ower/, "", K]
              ],
              [/(sun4\w)[;\)]/i],
              [
                [m, "sparc"]
              ],
              [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
              [
                [m, K]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [d, [f, N],
                [h, v]
              ],
              [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
              [d, [f, N],
                [h, b]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [f, S],
                [h, b]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [d, [f, S],
                [h, v]
              ],
              [/(macintosh);/i],
              [d, [f, S]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [f, D],
                [h, b]
              ],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [d, [f, R],
                [h, v]
              ],
              [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [d, [f, R],
                [h, b]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
              [
                [d, /_/g, " "],
                [f, $],
                [h, b]
              ],
              [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [d, /_/g, " "],
                [f, $],
                [h, v]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [d, [f, "OPPO"],
                [h, b]
              ],
              [/\b(opd2\d{3}a?) bui/i],
              [d, [f, "OPPO"],
                [h, v]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [f, "Vivo"],
                [h, b]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [f, "Realme"],
                [h, b]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [d, [f, L],
                [h, b]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [f, L],
                [h, v]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [f, "LG"],
                [h, v]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [d, [f, "LG"],
                [h, b]
              ],
              [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
              [d, [f, "Lenovo"],
                [h, v]
              ],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [d, /_/g, " "],
                [f, "Nokia"],
                [h, b]
              ],
              [/(pixel c)\b/i],
              [d, [f, P],
                [h, v]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [f, P],
                [h, b]
              ],
              [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [d, [f, I],
                [h, b]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [f, I],
                [h, v]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [d, [f, "OnePlus"],
                [h, b]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [d, [f, C],
                [h, v]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [f, C],
                [h, b]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, f, [h, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [f, O],
                [h, b]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [d, [f, E],
                [h, v]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [f, E],
                [h, b]
              ],
              [/(nexus 9)/i],
              [d, [f, "HTC"],
                [h, v]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [f, [d, /_/g, " "],
                [h, b]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [f, "Acer"],
                [h, v]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [f, "Meizu"],
                [h, b]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [f, "Ulefone"],
                [h, b]
              ],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
              [f, d, [h, b]],
              [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [f, d, [h, v]],
              [/(surface duo)/i],
              [d, [f, j],
                [h, v]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [f, "Fairphone"],
                [h, b]
              ],
              [/(u304aa)/i],
              [d, [f, "AT&T"],
                [h, b]
              ],
              [/\bsie-(\w*)/i],
              [d, [f, "Siemens"],
                [h, b]
              ],
              [/\b(rct\w+) b/i],
              [d, [f, "RCA"],
                [h, v]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [f, "Dell"],
                [h, v]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [f, "Verizon"],
                [h, v]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [f, "Barnes & Noble"],
                [h, v]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [d, [f, "NuVision"],
                [h, v]
              ],
              [/\b(k88) b/i],
              [d, [f, "ZTE"],
                [h, v]
              ],
              [/\b(nx\d{3}j) b/i],
              [d, [f, "ZTE"],
                [h, b]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [f, "Swiss"],
                [h, b]
              ],
              [/\b(zur\d{3}) b/i],
              [d, [f, "Swiss"],
                [h, v]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [f, "Zeki"],
                [h, v]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [f, "Dragon Touch"], d, [h, v]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [f, "Insignia"],
                [h, v]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [f, "NextBook"],
                [h, v]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [f, "Voice"], d, [h, b]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [f, "LvTel"], d, [h, b]
              ],
              [/\b(ph-1) /i],
              [d, [f, "Essential"],
                [h, b]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [f, "Envizen"],
                [h, v]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [f, "MachSpeed"],
                [h, v]
              ],
              [/\btu_(1491) b/i],
              [d, [f, "Rotor"],
                [h, v]
              ],
              [/(shield[\w ]+) b/i],
              [d, [f, "Nvidia"],
                [h, v]
              ],
              [/(sprint) (\w+)/i],
              [f, d, [h, b]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [f, j],
                [h, b]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [f, B],
                [h, v]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [f, B],
                [h, b]
              ],
              [/smart-tv.+(samsung)/i],
              [f, [h, w]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [f, N],
                [h, w]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [f, "LG"],
                [h, w]
              ],
              [/(apple) ?tv/i],
              [f, [d, S + " TV"],
                [h, w]
              ],
              [/crkey/i],
              [
                [d, T + "cast"],
                [f, P],
                [h, w]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [f, C],
                [h, w]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [f, D],
                [h, w]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [f, I],
                [h, w]
              ],
              [/(mitv-\w{5}) bui/i],
              [d, [f, $],
                [h, w]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [f, d, [h, w]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [f, z],
                [d, z],
                [h, w]
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [h, w]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [f, d, [h, y]],
              [/droid.+; (shield) bui/i],
              [d, [f, "Nvidia"],
                [h, y]
              ],
              [/(playstation [345portablevi]+)/i],
              [d, [f, I],
                [h, y]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [f, j],
                [h, y]
              ],
              [/((pebble))app/i],
              [f, d, [h, x]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [f, S],
                [h, x]
              ],
              [/droid.+; (glass) \d/i],
              [d, [f, P],
                [h, x]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [f, B],
                [h, x]
              ],
              [/(quest( \d| pro)?)/i],
              [d, [f, U],
                [h, x]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [f, [h, k]],
              [/(aeobc)\b/i],
              [d, [f, C],
                [h, k]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [d, [h, b]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [h, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [h, v]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [h, b]
              ],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [d, [f, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [g, [p, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [g, [p, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [p, g],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [g, p]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [p, g],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [p, [g, Z, Y]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [g, Z, Y],
                [p, "Windows"]
              ],
              [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [g, /_/g, "."],
                [p, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [p, W],
                [g, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [g, p],
              [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
              [p, g],
              [/\(bb(10);/i],
              [g, [p, O]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [g, [p, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [g, [p, A + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [g, [p, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [g, [p, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [g, [p, T + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [p, V], g
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [p, g],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [p, "Solaris"], g
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [p, g]
            ]
          },
          Q = function(e, t) {
            if (typeof e === l && (t = e, e = o), !(this instanceof Q)) return new Q(e, t).getResult();
            var n = typeof i !== s && i.navigator ? i.navigator : o,
              r = e || (n && n.userAgent ? n.userAgent : ""),
              y = n && n.userAgentData ? n.userAgentData : o,
              w = t ? F(J, t) : J,
              x = n && n.userAgent == r;
            return this.getBrowser = function() {
              var e, t = {};
              return t[p] = o, t[g] = o, q.call(t, r, w.browser), t[u] = typeof(e = t[g]) === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, x && n && n.brave && typeof n.brave.isBrave == a && (t[p] = "Brave"), t
            }, this.getCPU = function() {
              var e = {};
              return e[m] = o, q.call(e, r, w.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[f] = o, e[d] = o, e[h] = o, q.call(e, r, w.device), x && !e[h] && y && y.mobile && (e[h] = b), x && "Macintosh" == e[d] && n && typeof n.standalone !== s && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[d] = "iPad", e[h] = v), e
            }, this.getEngine = function() {
              var e = {};
              return e[p] = o, e[g] = o, q.call(e, r, w.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[p] = o, e[g] = o, q.call(e, r, w.os), x && !e[p] && y && y.platform && "Unknown" != y.platform && (e[p] = y.platform.replace(/chrome os/i, V).replace(/macos/i, W)), e
            }, this.getResult = function() {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
              }
            }, this.getUA = function() {
              return r
            }, this.setUA = function(e) {
              return r = typeof e === c && e.length > 500 ? z(e, 500) : e, this
            }, this.setUA(r), this
          };
        Q.VERSION = "1.0.38", Q.BROWSER = G([p, g, u]), Q.CPU = G([m]), Q.DEVICE = G([d, f, h, y, b, w, v, x, k]), Q.ENGINE = Q.OS = G([p, g]), typeof t !== s ? (e.exports && (t = e.exports = Q), t.UAParser = Q) : n.amdO ? o !== (r = (function() {
          return Q
        }).call(t, n, t, e)) && (e.exports = r) : typeof i !== s && (i.UAParser = Q);
        var X = typeof i !== s && (i.jQuery || i.Zepto);
        if (X && !X.ua) {
          var ee = new Q;
          X.ua = ee.getResult(), X.ua.get = function() {
            return ee.getUA()
          }, X.ua.set = function(e) {
            ee.setUA(e);
            var t = ee.getResult();
            for (var n in t) X.ua[n] = t[n]
          }
        }
      }("object" == typeof window ? window : this)
    },
    6489: function(e, t) {
      "use strict";
      /*!
       * cookie
       * Copyright(c) 2012-2014 Roman Shtylman
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */
      t.parse = function(e, t) {
        if ("string" != typeof e) throw TypeError("argument str must be a string");
        for (var n = {}, r = (t || {}).decode || i, o = 0; o < e.length;) {
          var a = e.indexOf("=", o);
          if (-1 === a) break;
          var s = e.indexOf(";", o);
          if (-1 === s) s = e.length;
          else if (s < a) {
            o = e.lastIndexOf(";", a - 1) + 1;
            continue
          }
          var l = e.slice(o, a).trim();
          if (void 0 === n[l]) {
            var c = e.slice(a + 1, s).trim();
            34 === c.charCodeAt(0) && (c = c.slice(1, -1)), n[l] = function(e, t) {
              try {
                return t(e)
              } catch (t) {
                return e
              }
            }(c, r)
          }
          o = s + 1
        }
        return n
      }, t.serialize = function(e, t, i) {
        var a = i || {},
          s = a.encode || o;
        if ("function" != typeof s) throw TypeError("option encode is invalid");
        if (!r.test(e)) throw TypeError("argument name is invalid");
        var l = s(t);
        if (l && !r.test(l)) throw TypeError("argument val is invalid");
        var c = e + "=" + l;
        if (null != a.maxAge) {
          var u = a.maxAge - 0;
          if (isNaN(u) || !isFinite(u)) throw TypeError("option maxAge is invalid");
          c += "; Max-Age=" + Math.floor(u)
        }
        if (a.domain) {
          if (!r.test(a.domain)) throw TypeError("option domain is invalid");
          c += "; Domain=" + a.domain
        }
        if (a.path) {
          if (!r.test(a.path)) throw TypeError("option path is invalid");
          c += "; Path=" + a.path
        }
        if (a.expires) {
          var d = a.expires;
          if ("[object Date]" !== n.call(d) && !(d instanceof Date) || isNaN(d.valueOf())) throw TypeError("option expires is invalid");
          c += "; Expires=" + d.toUTCString()
        }
        if (a.httpOnly && (c += "; HttpOnly"), a.secure && (c += "; Secure"), a.partitioned && (c += "; Partitioned"), a.priority) switch ("string" == typeof a.priority ? a.priority.toLowerCase() : a.priority) {
          case "low":
            c += "; Priority=Low";
            break;
          case "medium":
            c += "; Priority=Medium";
            break;
          case "high":
            c += "; Priority=High";
            break;
          default:
            throw TypeError("option priority is invalid")
        }
        if (a.sameSite) switch ("string" == typeof a.sameSite ? a.sameSite.toLowerCase() : a.sameSite) {
          case !0:
          case "strict":
            c += "; SameSite=Strict";
            break;
          case "lax":
            c += "; SameSite=Lax";
            break;
          case "none":
            c += "; SameSite=None";
            break;
          default:
            throw TypeError("option sameSite is invalid")
        }
        return c
      };
      var n = Object.prototype.toString,
        r = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

      function i(e) {
        return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e
      }

      function o(e) {
        return encodeURIComponent(e)
      }
    },
    7041: function(e, t, n) {
      "use strict";
      var r = this && this.__assign || function() {
          return (r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
          }).apply(this, arguments)
        },
        i = this && this.__rest || function(e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
          return n
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.hasCookie = t.deleteCookie = t.setCookie = t.getCookie = t.getCookies = void 0;
      var o = n(6489),
        a = function() {
          return "undefined" != typeof window
        },
        s = function(e) {
          return !!e && "getAll" in e && "set" in e && "function" == typeof e.getAll && "function" == typeof e.set
        },
        l = function(e) {
          return !!(null == e ? void 0 : e.req) && "cookies" in e.req && s(null == e ? void 0 : e.req.cookies) || !!(null == e ? void 0 : e.res) && "cookies" in e.res && s(null == e ? void 0 : e.res.cookies) || !!(null == e ? void 0 : e.cookies) && s(e.cookies())
        },
        c = function(e) {
          var t = {};
          return e.getAll().forEach(function(e) {
            var n = e.name,
              r = e.value;
            t[n] = r
          }), t
        },
        u = function(e) {
          void 0 === e && (e = "");
          try {
            var t = JSON.stringify(e);
            return /^[\{\[]/.test(t) ? t : e
          } catch (t) {
            return e
          }
        };
      t.getCookies = function(e) {
        if (l(e)) {
          if (null == e ? void 0 : e.req) return c(e.req.cookies);
          if (null == e ? void 0 : e.cookies) return c(e.cookies())
        }
        if (e && (t = e.req), !a()) return t && t.cookies ? t.cookies : t && t.headers.cookie ? (0, o.parse)(t.headers.cookie) : {};
        for (var t, n = {}, r = document.cookie ? document.cookie.split("; ") : [], i = 0, s = r.length; i < s; i++) {
          var u = r[i].split("="),
            d = u.slice(1).join("=");
          n[u[0]] = d
        }
        return n
      }, t.getCookie = function(e, n) {
        var r = (0, t.getCookies)(n)[e];
        if (void 0 !== r) return r ? r.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : r
      }, t.setCookie = function(e, t, n) {
        if (l(n)) {
          var s, c, d, p = n.req,
            h = n.res,
            f = n.cookies,
            g = i(n, ["req", "res", "cookies"]),
            m = r({
              name: e,
              value: t
            }, g);
          p && p.cookies.set(m), h && h.cookies.set(m), f && f().set(m);
          return
        }
        if (n) {
          var p = n.req,
            h = n.res,
            y = i(n, ["req", "res"]);
          c = p, d = h, s = y
        }
        var b = (0, o.serialize)(e, u(t), r({
          path: "/"
        }, s));
        if (a()) document.cookie = b;
        else if (d && c) {
          var v = d.getHeader("Set-Cookie");
          if (Array.isArray(v) || (v = v ? [String(v)] : []), d.setHeader("Set-Cookie", v.concat(b)), c && c.cookies) {
            var w = c.cookies;
            "" === t ? delete w[e] : w[e] = u(t)
          }
          if (c && c.headers && c.headers.cookie) {
            var w = (0, o.parse)(c.headers.cookie);
            "" === t ? delete w[e] : w[e] = u(t), c.headers.cookie = Object.entries(w).reduce(function(e, t) {
              return e.concat("".concat(t[0], "=").concat(t[1], ";"))
            }, "")
          }
        }
      }, t.deleteCookie = function(e, n) {
        return (0, t.setCookie)(e, "", r(r({}, n), {
          maxAge: -1
        }))
      }, t.hasCookie = function(e, n) {
        return !!e && (0, t.getCookies)(n).hasOwnProperty(e)
      }
    },
    9996: function(e) {
      "use strict";
      var t = function(e) {
          var t;
          return !!e && "object" == typeof e && "[object RegExp]" !== (t = Object.prototype.toString.call(e)) && "[object Date]" !== t && e.$$typeof !== n
        },
        n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function r(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? s(Array.isArray(e) ? [] : {}, e, t) : e
      }

      function i(e, t, n) {
        return e.concat(t).map(function(e) {
          return r(e, n)
        })
      }

      function o(e) {
        return Object.keys(e).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
          return Object.propertyIsEnumerable.call(e, t)
        }) : [])
      }

      function a(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function s(e, n, l) {
        (l = l || {}).arrayMerge = l.arrayMerge || i, l.isMergeableObject = l.isMergeableObject || t, l.cloneUnlessOtherwiseSpecified = r;
        var c, u, d = Array.isArray(n);
        return d !== Array.isArray(e) ? r(n, l) : d ? l.arrayMerge(e, n, l) : (u = {}, (c = l).isMergeableObject(e) && o(e).forEach(function(t) {
          u[t] = r(e[t], c)
        }), o(n).forEach(function(t) {
          (!a(e, t) || Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)) && (a(e, t) && c.isMergeableObject(n[t]) ? u[t] = (function(e, t) {
            if (!t.customMerge) return s;
            var n = t.customMerge(e);
            return "function" == typeof n ? n : s
          })(t, c)(e[t], n[t], c) : u[t] = r(n[t], c))
        }), u)
      }
      s.all = function(e, t) {
        if (!Array.isArray(e)) throw Error("first argument should be an array");
        return e.reduce(function(e, n) {
          return s(e, n, t)
        }, {})
      }, e.exports = s
    },
    8679: function(e, t, n) {
      "use strict";
      var r = n(9864),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        s = {};

      function l(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || i
      }
      s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[r.Memo] = a;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        f = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (f) {
            var i = h(n);
            i && i !== f && e(t, i, r)
          }
          var a = u(n);
          d && (a = a.concat(d(n)));
          for (var s = l(t), g = l(n), m = 0; m < a.length; ++m) {
            var y = a[m];
            if (!o[y] && !(r && r[y]) && !(g && g[y]) && !(s && s[y])) {
              var b = p(n, y);
              try {
                c(t, y, b)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    4301: function(e, t, n) {
      n(6477), e.exports = self.fetch.bind(self)
    },
    8010: function(e, t, n) {
      "use strict";
      var r = n(2238),
        i = (n(7294), ["\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/", "googlebot", "baiduspider", "gurujibot", "yandexbot", "slurp", "msnbot", "bingbot", "facebookexternalhit", "linkedinbot", "twitterbot", "slackbot", "telegrambot", "applebot", "pingdom", "tumblr"]);

      function o(e) {
        var t = new r.UAParser(e).getResult(),
          n = RegExp("(" + i.join("|") + ")", "ig"),
          o = !!e && n.test(e.toLowerCase()),
          a = t.browser.name,
          s = t.device.type || null,
          l = t.os.name,
          c = t.engine.name,
          u = "mobile" === s,
          d = "tablet" === s,
          p = "iOS" === l;
        return Object.freeze({
          browser: a,
          deviceType: s,
          os: l,
          engine: c,
          isMobile: u,
          isTablet: d,
          isIos: p,
          source: e,
          deviceVendor: t.device.vendor || null,
          osVersion: parseInt(t.os.version, 10),
          browserVersion: parseFloat(t.browser.version),
          engineVersion: parseFloat(t.engine.version),
          isIphone: u && p,
          isIpad: d && p,
          isDesktop: !u && !d,
          isChrome: "Chrome" === a,
          isFirefox: "Firefox" === a,
          isSafari: "Safari" === a,
          isIE: "IE" === a,
          isEdge: "Edge" === a,
          isOpera: "Opera" === a,
          isMac: "Mac OS" === l,
          isChromeOS: "Chromium OS" === l,
          isWindows: "Windows" === l,
          isAndroid: "Android" === l,
          isBot: o
        })
      }
      t.Qc = o, t.FS = function(e) {
        return o(e)
      }
    },
    7544: function(e, t, n) {
      e.exports = n(9038)
    },
    7403: function(e, t, n) {
      "use strict";
      var r = n(4836),
        i = r(n(215)),
        o = r(n(8416));
      let a = ["src", "srcSet", "sizes", "height", "width", "decoding", "className", "style", "fetchPriority", "placeholder", "loading", "unoptimized", "fill", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"];

      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(n), !0).forEach(function(t) {
            (0, o.default)(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "Image", {
        enumerable: !0,
        get: function() {
          return E
        }
      });
      let c = n(8754),
        u = n(1757),
        d = n(5893),
        p = u._(n(7294)),
        h = c._(n(3935)),
        f = c._(n(90)),
        g = n(852),
        m = n(2011),
        y = n(8681);
      n(3696);
      let b = n(7318),
        v = c._(n(5437)),
        w = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1
        };

      function x(e, t, n, r, i, o) {
        let a = null == e ? void 0 : e.src;
        e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if ("empty" !== t && i(!0), null == n ? void 0 : n.current) {
              let t = new Event("load");
              Object.defineProperty(t, "target", {
                writable: !1,
                value: e
              });
              let r = !1,
                i = !1;
              n.current(l(l({}, t), {}, {
                nativeEvent: t,
                currentTarget: e,
                target: e,
                isDefaultPrevented: () => r,
                isPropagationStopped: () => i,
                persist: () => {},
                preventDefault: () => {
                  r = !0, t.preventDefault()
                },
                stopPropagation: () => {
                  i = !0, t.stopPropagation()
                }
              }))
            }(null == r ? void 0 : r.current) && r.current(e)
          }
        }))
      }

      function k(e) {
        let [t, n] = p.version.split(".", 2), r = parseInt(t, 10), i = parseInt(n, 10);
        return r > 18 || 18 === r && i >= 3 ? {
          fetchPriority: e
        } : {
          fetchpriority: e
        }
      }
      let C = (0, p.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: o,
          height: s,
          width: c,
          decoding: u,
          className: h,
          style: f,
          fetchPriority: g,
          placeholder: m,
          loading: y,
          unoptimized: b,
          fill: v,
          onLoadRef: w,
          onLoadingCompleteRef: C,
          setBlurComplete: S,
          setShowAltText: E,
          onLoad: O,
          onError: _
        } = e, T = (0, i.default)(e, a);
        return (0, d.jsx)("img", l(l(l({}, T), k(g)), {}, {
          loading: y,
          width: c,
          height: s,
          decoding: u,
          "data-nimg": v ? "fill" : "1",
          className: h,
          style: f,
          sizes: o,
          srcSet: r,
          src: n,
          ref: (0, p.useCallback)(e => {
            t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (_ && (e.src = e.src), e.complete && x(e, m, w, C, S, b))
          }, [n, m, w, C, S, _, b, t]),
          onLoad: e => {
            x(e.currentTarget, m, w, C, S, b)
          },
          onError: e => {
            E(!0), "empty" !== m && S(!0), _ && _(e)
          }
        }))
      });

      function S(e) {
        let {
          isAppRouter: t,
          imgAttributes: n
        } = e, r = l({
          as: "image",
          imageSrcSet: n.srcSet,
          imageSizes: n.sizes,
          crossOrigin: n.crossOrigin,
          referrerPolicy: n.referrerPolicy
        }, k(n.fetchPriority));
        return t && h.default.preload ? (h.default.preload(n.src, r), null) : (0, d.jsx)(f.default, {
          children: (0, d.jsx)("link", l({
            rel: "preload",
            href: n.srcSet ? void 0 : n.src
          }, r), "__nimg-" + n.src + n.srcSet + n.sizes)
        })
      }
      let E = (0, p.forwardRef)((e, t) => {
        let n = (0, p.useContext)(b.RouterContext),
          r = (0, p.useContext)(y.ImageConfigContext),
          i = (0, p.useMemo)(() => {
            let e = w || r || m.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return l(l({}, e), {}, {
              allSizes: t,
              deviceSizes: n
            })
          }, [r]),
          {
            onLoad: o,
            onLoadingComplete: a
          } = e,
          s = (0, p.useRef)(o);
        (0, p.useEffect)(() => {
          s.current = o
        }, [o]);
        let c = (0, p.useRef)(a);
        (0, p.useEffect)(() => {
          c.current = a
        }, [a]);
        let [u, h] = (0, p.useState)(!1), [f, x] = (0, p.useState)(!1), {
          props: k,
          meta: E
        } = (0, g.getImgProps)(e, {
          defaultLoader: v.default,
          imgConf: i,
          blurComplete: u,
          showAltText: f
        });
        return (0, d.jsxs)(d.Fragment, {
          children: [(0, d.jsx)(C, l(l({}, k), {}, {
            unoptimized: E.unoptimized,
            placeholder: E.placeholder,
            fill: E.fill,
            onLoadRef: s,
            onLoadingCompleteRef: c,
            setBlurComplete: h,
            setShowAltText: x,
            ref: t
          })), E.priority ? (0, d.jsx)(S, {
            isAppRouter: !n,
            imgAttributes: k
          }) : null]
        })
      });
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    9038: function(e, t, n) {
      "use strict";
      var r = n(4836)(n(8416));

      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return u
        }
      });
      let o = n(8754),
        a = n(5893),
        s = o._(n(7294)),
        l = n(9090);
      async function c(e) {
        let {
          Component: t,
          ctx: n
        } = e;
        return {
          pageProps: await (0, l.loadGetInitialProps)(t, n)
        }
      }
      class u extends s.default.Component {
        render() {
          let {
            Component: e,
            pageProps: t
          } = this.props;
          return (0, a.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? i(Object(n), !0).forEach(function(t) {
                (0, r.default)(e, t, n[t])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
            }
            return e
          }({}, t))
        }
      }
      u.origGetInitialProps = c, u.getInitialProps = c, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    8925: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "AmpStateContext", {
        enumerable: !0,
        get: function() {
          return r
        }
      });
      let r = n(8754)._(n(7294)).default.createContext({})
    },
    6452: function(e, t) {
      "use strict";

      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1
        } = void 0 === e ? {} : e;
        return t || n && r
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "isInAmpMode", {
        enumerable: !0,
        get: function() {
          return n
        }
      })
    },
    9666: function(e, t, n) {
      "use strict";
      var r = n(4836)(n(8416));

      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i(Object(n), !0).forEach(function(t) {
            (0, r.default)(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var n in t) Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
          })
        }(t, {
          noSSR: function() {
            return c
          },
          default: function() {
            return u
          }
        });
      let a = n(8754);
      n(5893), n(7294);
      let s = a._(n(6887));

      function l(e) {
        return {
          default: (null == e ? void 0 : e.default) || e
        }
      }

      function c(e, t) {
        return delete t.webpack, delete t.modules, e(t)
      }

      function u(e, t) {
        let n = s.default,
          r = {
            loading: e => {
              let {
                error: t,
                isLoading: n,
                pastDelay: r
              } = e;
              return null
            }
          };
        e instanceof Promise ? r.loader = () => e : "function" == typeof e ? r.loader = e : "object" == typeof e && (r = o(o({}, r), e));
        let i = (r = o(o({}, r), t)).loader;
        return (r.loadableGenerated && (r = o(o({}, r), r.loadableGenerated), delete r.loadableGenerated), "boolean" != typeof r.ssr || r.ssr) ? n(o(o({}, r), {}, {
          loader: () => null != i ? i().then(l) : Promise.resolve(l(() => null))
        })) : (delete r.webpack, delete r.modules, c(n, r))
      }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    852: function(e, t, n) {
      "use strict";
      var r = n(4836),
        i = r(n(8416)),
        o = r(n(215));
      let a = ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "fetchPriority", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"],
        s = ["config"];

      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(n), !0).forEach(function(t) {
            (0, i.default)(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "getImgProps", {
        enumerable: !0,
        get: function() {
          return f
        }
      }), n(3696);
      let u = n(6492),
        d = n(2011);

      function p(e) {
        return void 0 !== e.default
      }

      function h(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
      }

      function f(e, t) {
        var n;
        let r, i, l, {
            src: f,
            sizes: g,
            unoptimized: m = !1,
            priority: y = !1,
            loading: b,
            className: v,
            quality: w,
            width: x,
            height: k,
            fill: C = !1,
            style: S,
            onLoad: E,
            onLoadingComplete: O,
            placeholder: _ = "empty",
            blurDataURL: T,
            fetchPriority: A,
            layout: P,
            objectFit: R,
            objectPosition: j,
            lazyBoundary: L,
            lazyRoot: M
          } = e,
          N = (0, o.default)(e, a),
          {
            imgConf: D,
            showAltText: I,
            blurComplete: $,
            defaultLoader: B
          } = t,
          U = D || d.imageConfigDefault;
        if ("allSizes" in U) r = U;
        else {
          let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
            t = U.deviceSizes.sort((e, t) => e - t);
          r = c(c({}, U), {}, {
            allSizes: e,
            deviceSizes: t
          })
        }
        let V = N.loader || B;
        delete N.loader, delete N.srcSet;
        let W = "__next_img_default" in V;
        if (W) {
          if ("custom" === r.loader) throw Error('Image with src "' + f + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
        } else {
          let e = V;
          V = t => {
            let {
              config: n
            } = t;
            return e((0, o.default)(t, s))
          }
        }
        if (P) {
          "fill" === P && (C = !0);
          let e = {
            intrinsic: {
              maxWidth: "100%",
              height: "auto"
            },
            responsive: {
              width: "100%",
              height: "auto"
            }
          } [P];
          e && (S = c(c({}, S), e));
          let t = {
            responsive: "100vw",
            fill: "100vw"
          } [P];
          t && !g && (g = t)
        }
        let F = "",
          G = h(x),
          H = h(k);
        if ("object" == typeof(n = f) && (p(n) || void 0 !== n.src)) {
          let e = p(f) ? f.default : f;
          if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
          if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
          if (i = e.blurWidth, l = e.blurHeight, T = T || e.blurDataURL, F = e.src, !C) {
            if (G || H) {
              if (G && !H) {
                let t = G / e.width;
                H = Math.round(e.height * t)
              } else if (!G && H) {
                let t = H / e.height;
                G = Math.round(e.width * t)
              }
            } else G = e.width, H = e.height
          }
        }
        let K = !y && ("lazy" === b || void 0 === b);
        (!(f = "string" == typeof f ? f : F) || f.startsWith("data:") || f.startsWith("blob:")) && (m = !0, K = !1), r.unoptimized && (m = !0), W && f.endsWith(".svg") && !r.dangerouslyAllowSVG && (m = !0), y && (A = "high");
        let z = h(w),
          q = Object.assign(C ? {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: R,
            objectPosition: j
          } : {}, I ? {} : {
            color: "transparent"
          }, S),
          Z = $ || "empty" === _ ? null : "blur" === _ ? 'url("data:image/svg+xml;charset=utf-8,' + (0, u.getImageBlurSvg)({
            widthInt: G,
            heightInt: H,
            blurWidth: i,
            blurHeight: l,
            blurDataURL: T || "",
            objectFit: q.objectFit
          }) + '")' : 'url("' + _ + '")',
          Y = Z ? {
            backgroundSize: q.objectFit || "cover",
            backgroundPosition: q.objectPosition || "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundImage: Z
          } : {},
          J = function(e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: i,
              quality: o,
              sizes: a,
              loader: s
            } = e;
            if (r) return {
              src: n,
              srcSet: void 0,
              sizes: void 0
            };
            let {
              widths: l,
              kind: c
            } = function(e, t, n) {
              let {
                deviceSizes: r,
                allSizes: i
              } = e;
              if (n) {
                let e = /(^|\s)(1?\d?\d)vw/g,
                  t = [];
                for (let r; r = e.exec(n); r) t.push(parseInt(r[2]));
                if (t.length) {
                  let e = .01 * Math.min(...t);
                  return {
                    widths: i.filter(t => t >= r[0] * e),
                    kind: "w"
                  }
                }
                return {
                  widths: i,
                  kind: "w"
                }
              }
              return "number" != typeof t ? {
                widths: r,
                kind: "w"
              } : {
                widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
                kind: "x"
              }
            }(t, i, a), u = l.length - 1;
            return {
              sizes: a || "w" !== c ? a : "100vw",
              srcSet: l.map((e, r) => s({
                config: t,
                src: n,
                quality: o,
                width: e
              }) + " " + ("w" === c ? e : r + 1) + c).join(", "),
              src: s({
                config: t,
                src: n,
                quality: o,
                width: l[u]
              })
            }
          }({
            config: r,
            src: f,
            unoptimized: m,
            width: G,
            quality: z,
            sizes: g,
            loader: V
          });
        return {
          props: c(c({}, N), {}, {
            loading: K ? "lazy" : b,
            fetchPriority: A,
            width: G,
            height: H,
            decoding: "async",
            className: v,
            style: c(c({}, q), Y),
            sizes: J.sizes,
            srcSet: J.srcSet,
            src: J.src
          }),
          meta: {
            unoptimized: m,
            priority: y,
            placeholder: _,
            fill: C
          }
        }
      }
    },
    90: function(e, t, n) {
      "use strict";
      var r = n(4836)(n(8416));

      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var n in t) Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
          })
        }(t, {
          defaultHead: function() {
            return h
          },
          default: function() {
            return y
          }
        });
      let o = n(8754),
        a = n(1757),
        s = n(5893),
        l = a._(n(7294)),
        c = o._(n(6807)),
        u = n(8925),
        d = n(1295),
        p = n(6452);

      function h(e) {
        void 0 === e && (e = !1);
        let t = [(0, s.jsx)("meta", {
          charSet: "utf-8"
        })];
        return e || t.push((0, s.jsx)("meta", {
          name: "viewport",
          content: "width=device-width"
        })), t
      }

      function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
      }
      n(3696);
      let g = ["name", "httpEquiv", "charSet", "itemProp"];

      function m(e, t) {
        let {
          inAmpMode: n
        } = t;
        return e.reduce(f, []).reverse().concat(h(n).reverse()).filter(function() {
          let e = new Set,
            t = new Set,
            n = new Set,
            r = {};
          return i => {
            let o = !0,
              a = !1;
            if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
              a = !0;
              let t = i.key.slice(i.key.indexOf("$") + 1);
              e.has(t) ? o = !1 : e.add(t)
            }
            switch (i.type) {
              case "title":
              case "base":
                t.has(i.type) ? o = !1 : t.add(i.type);
                break;
              case "meta":
                for (let e = 0, t = g.length; e < t; e++) {
                  let t = g[e];
                  if (i.props.hasOwnProperty(t)) {
                    if ("charSet" === t) n.has(t) ? o = !1 : n.add(t);
                    else {
                      let e = i.props[t],
                        n = r[t] || new Set;
                      ("name" !== t || !a) && n.has(e) ? o = !1 : (n.add(e), r[t] = n)
                    }
                  }
                }
            }
            return o
          }
        }()).reverse().map((e, t) => {
          let o = e.key || t;
          if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
            let t = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                  (0, r.default)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
              }
              return e
            }({}, e.props || {});
            return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, l.default.cloneElement(e, t)
          }
          return l.default.cloneElement(e, {
            key: o
          })
        })
      }
      let y = function(e) {
        let {
          children: t
        } = e, n = (0, l.useContext)(u.AmpStateContext), r = (0, l.useContext)(d.HeadManagerContext);
        return (0, s.jsx)(c.default, {
          reduceComponentsToState: m,
          headManager: r,
          inAmpMode: (0, p.isInAmpMode)(n),
          children: t
        })
      };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    6492: function(e, t) {
      "use strict";

      function n(e) {
        let {
          widthInt: t,
          heightInt: n,
          blurWidth: r,
          blurHeight: i,
          blurDataURL: o,
          objectFit: a
        } = e, s = r ? 40 * r : t, l = i ? 40 * i : n, c = s && l ? "viewBox='0 0 " + s + " " + l + "'" : "";
        return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + c + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (c ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
          return n
        }
      })
    },
    4031: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e, t) {
          for (var n in t) Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
          })
        }(t, {
          getImageProps: function() {
            return s
          },
          default: function() {
            return l
          }
        });
      let r = n(8754),
        i = n(852),
        o = n(7403),
        a = r._(n(5437)),
        s = e => {
          let {
            props: t
          } = (0, i.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1
            }
          });
          for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
          return {
            props: t
          }
        },
        l = o.Image
    },
    5437: function(e, t) {
      "use strict";

      function n(e) {
        let {
          config: t,
          src: n,
          width: r,
          quality: i
        } = e;
        return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (i || 75)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return r
        }
      }), n.__next_img_default = !0;
      let r = n
    },
    5808: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "LoadableContext", {
        enumerable: !0,
        get: function() {
          return r
        }
      });
      let r = n(8754)._(n(7294)).default.createContext(null)
    },
    6887: function(e, t, n) {
      "use strict";
      var r = n(4836)(n(8416));

      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i(Object(n), !0).forEach(function(t) {
            (0, r.default)(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return g
        }
      });
      let a = n(8754)._(n(7294)),
        s = n(5808),
        l = [],
        c = [],
        u = !1;

      function d(e) {
        let t = e(),
          n = {
            loading: !0,
            loaded: null,
            error: null
          };
        return n.promise = t.then(e => (n.loading = !1, n.loaded = e, e)).catch(e => {
          throw n.loading = !1, n.error = e, e
        }), n
      }
      class p {
        promise() {
          return this._res.promise
        }
        retry() {
          this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
            pastDelay: !1,
            timedOut: !1
          };
          let {
            _res: e,
            _opts: t
          } = this;
          e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
            this._update({
              pastDelay: !0
            })
          }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
            this._update({
              timedOut: !0
            })
          }, t.timeout))), this._res.promise.then(() => {
            this._update({}), this._clearTimeouts()
          }).catch(e => {
            this._update({}), this._clearTimeouts()
          }), this._update({})
        }
        _update(e) {
          this._state = o(o({}, this._state), {}, {
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading
          }, e), this._callbacks.forEach(e => e())
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout)
        }
        getCurrentValue() {
          return this._state
        }
        subscribe(e) {
          return this._callbacks.add(e), () => {
            this._callbacks.delete(e)
          }
        }
        constructor(e, t) {
          this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
        }
      }

      function h(e) {
        return function(e, t) {
          let n = Object.assign({
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              webpack: null,
              modules: null
            }, t),
            r = null;

          function i() {
            if (!r) {
              let t = new p(e, n);
              r = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t)
              }
            }
            return r.promise()
          }
          if (!u) {
            let e = n.webpack ? n.webpack() : n.modules;
            e && c.push(t => {
              for (let n of e)
                if (t.includes(n)) return i()
            })
          }

          function o(e, t) {
            ! function() {
              i();
              let e = a.default.useContext(s.LoadableContext);
              e && Array.isArray(n.modules) && n.modules.forEach(t => {
                e(t)
              })
            }();
            let o = a.default.useSyncExternalStore(r.subscribe, r.getCurrentValue, r.getCurrentValue);
            return a.default.useImperativeHandle(t, () => ({
              retry: r.retry
            }), []), a.default.useMemo(() => {
              var t;
              return o.loading || o.error ? a.default.createElement(n.loading, {
                isLoading: o.loading,
                pastDelay: o.pastDelay,
                timedOut: o.timedOut,
                error: o.error,
                retry: r.retry
              }) : o.loaded ? a.default.createElement((t = o.loaded) && t.default ? t.default : t, e) : null
            }, [e, o])
          }
          return o.preload = () => i(), o.displayName = "LoadableComponent", a.default.forwardRef(o)
        }(d, e)
      }

      function f(e, t) {
        let n = [];
        for (; e.length;) {
          let r = e.pop();
          n.push(r(t))
        }
        return Promise.all(n).then(() => {
          if (e.length) return f(e, t)
        })
      }
      h.preloadAll = () => new Promise((e, t) => {
        f(l).then(e, t)
      }), h.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
        let n = () => (u = !0, t());
        f(c, e).then(n, n)
      })), window.__NEXT_PRELOADREADY = h.preloadReady;
      let g = h
    },
    6807: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return a
        }
      });
      let r = n(7294),
        i = r.useLayoutEffect,
        o = r.useEffect;

      function a(e) {
        let {
          headManager: t,
          reduceComponentsToState: n
        } = e;

        function a() {
          if (t && t.mountedInstances) {
            let i = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
            t.updateHead(n(i, e))
          }
        }
        return i(() => {
          var n;
          return null == t || null == (n = t.mountedInstances) || n.add(e.children), () => {
            var n;
            null == t || null == (n = t.mountedInstances) || n.delete(e.children)
          }
        }), i(() => (t && (t._pendingUpdate = a), () => {
          t && (t._pendingUpdate = a)
        })), o(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
          t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
      }
    },
    3696: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "warnOnce", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      let n = e => {}
    },
    2894: function(e, t, n) {
      "use strict";
      n.d(t, {
        Eo: function() {
          return c
        },
        fW: function() {
          return u
        }
      });
      var r = n(7294),
        i = n(4298),
        o = n.n(i),
        a = n(1163),
        s = n(2585);
      n(9722);
      let l = (0, r.createContext)({}),
        c = e => {
          var t, n;
          let {
            children: i
          } = e, [c, u] = (0, r.useState)(null), [d, p] = (0, r.useState)(!1), [h, f] = (0, r.useState)(!1), [g, m] = (0, r.useState)(!1), {
            pathname: y,
            push: b
          } = (0, a.useRouter)();
          (0, r.useEffect)(() => {
            var e;
            let t = null === (e = window.Telegram) || void 0 === e ? void 0 : e.WebApp,
              n = null;
            if (!(null != t && t.initData)) return b("/app", void 0, {
              shallow: !0
            }), () => {};
            m(!0);
            let r = () => {
              t && !t.isExpanded && t.expand()
            };
            return t && (t.ready(), u(t), t.expand(), t.onEvent("viewportChanged", r), t.setBackgroundColor("#0D0D0D"), t.setHeaderColor("#0D0D0D"), t.disableVerticalSwipes(), t.BackButton.onClick(() => {
              window.history.back()
            }), n = setTimeout(() => {
              p(!0)
            }, 150)), () => {
              t.offEvent("viewportChanged", r), clearTimeout(n)
            }
          }, []), (0, r.useEffect)(() => {
            c && "/" === y ? c.BackButton.hide() : c && "/" !== y && c.BackButton.show()
          }, [c, y]);
          let v = async () => {
            await b(y, void 0, {
              shallow: !0
            }), f(!0)
          };
          (0, r.useEffect)(() => {
            d && v()
          }, [d]);
          let w = (0, r.useMemo)(() => c ? {
            webApp: c,
            unsafeData: c.initDataUnsafe,
            user: c.initDataUnsafe.user
          } : {}, [c]);
          return r.createElement(l.Provider, {
            value: w
          }, r.createElement(o(), {
            src: "/telegram-web-app.js",
            strategy: "beforeInteractive"
          }), h && !g && i, h && g && r.createElement("div", {
            className: "continue-website-con"
          }, r.createElement("div", {
            className: "descr"
          }, "Account verified"), r.createElement(s.Z, {
            href: "".concat("https://paws.community", "/app?initData=").concat(window.btoa(null === (t = window.Telegram) || void 0 === t ? void 0 : null === (n = t.WebApp) || void 0 === n ? void 0 : n.initData)),
            onRedirect: () => {
              var e, t;
              null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t || t.close()
            }
          }, r.createElement("div", {
            className: "btn-item main"
          }, "Continue in website"))))
        },
        u = () => (0, r.useContext)(l)
    },
    2585: function(e, t, n) {
      "use strict";
      n.d(t, {
        Z: function() {
          return c
        }
      });
      var r = n(7294),
        i = n(5675),
        o = n.n(i),
        a = n(4441),
        s = n(861);
      n(7247);
      let l = [{
        name: "Chrome",
        icon: {
          src: "/_next/static/media/chrome.f08ff89a.svg",
          height: 190,
          width: 190,
          blurWidth: 0,
          blurHeight: 0
        },
        code: "chrome"
      }, {
        name: "Firefox",
        icon: {
          src: "/_next/static/media/firefox.fe9e01bf.svg",
          height: 51500,
          width: 51500,
          blurWidth: 0,
          blurHeight: 0
        },
        code: "firefox"
      }, {
        name: "Brave",
        icon: {
          src: "/_next/static/media/brave.9f423d93.svg",
          height: 2770,
          width: 2770,
          blurWidth: 0,
          blurHeight: 0
        },
        code: "brave"
      }, {
        name: "Edge",
        icon: {
          src: "/_next/static/media/edge.65cbcc22.svg",
          height: 27600,
          width: 27600,
          blurWidth: 0,
          blurHeight: 0
        },
        code: "edge"
      }, {
        name: "Opera",
        icon: {
          src: "/_next/static/media/opera.b268f238.svg",
          height: 1090,
          width: 1090,
          blurWidth: 0,
          blurHeight: 0
        },
        code: "opera"
      }, {
        name: "Samsung",
        icon: {
          src: "/_next/static/media/samsung.5000c7fe.svg",
          height: 525,
          width: 525,
          blurWidth: 0,
          blurHeight: 0
        },
        code: "samsung"
      }, {
        name: "Vivaldi",
        icon: {
          src: "/_next/static/media/vivaldi.00180ef7.svg",
          height: 1900,
          width: 1900,
          blurWidth: 0,
          blurHeight: 0
        },
        code: "vivaldi"
      }];
      var c = e => {
        let {
          href: t,
          children: n,
          onRedirect: i,
          wrapperClassName: c = ""
        } = e, [u, d] = (0, r.useState)(!1), p = (e, n) => {
          var r, o;
          null === (r = window.Telegram) || void 0 === r || null === (o = r.WebApp) || void 0 === o || o.openLink(t, {
            try_instant_view: !1,
            try_browser: n
          }), d(!1), i && i(e)
        };
        return r.createElement(r.Fragment, null, r.createElement("div", {
          onClick: e => {
            var n, r, o, a, s;
            (null === (n = window) || void 0 === n ? void 0 : null === (r = n.Telegram) || void 0 === r ? void 0 : null === (o = r.WebApp) || void 0 === o ? void 0 : o.platform) === "android" ? d(!0): (null === (a = window.Telegram) || void 0 === a || null === (s = a.WebApp) || void 0 === s || s.openLink(t, {
              try_instant_view: !1
            }), i && i(e))
          },
          className: c
        }, n), r.createElement(s.Z, {
          isOpen: u,
          close: () => d(!1)
        }, r.createElement("div", {
          className: "choose-browser-con"
        }, r.createElement("div", {
          className: "title"
        }, "Open in"), r.createElement("div", {
          className: "descr"
        }, "Choose your default"), r.createElement("div", {
          className: "cross-con",
          onClick: () => d(!1)
        }, r.createElement(o(), {
          src: a.Z,
          alt: "",
          width: 24,
          height: 24
        })), r.createElement("div", {
          className: "items-list"
        }, l.map((e, t) => r.createElement("div", {
          className: "browser-item",
          key: t
        }, r.createElement("div", {
          className: "icon-con",
          onClick: t => {
            p(t, e.code)
          }
        }, r.createElement(o(), {
          src: e.icon,
          alt: e.name,
          width: 40,
          height: 40
        })))), r.createElement("div", {
          className: "browser-item"
        })))))
      }
    },
    861: function(e, t, n) {
      "use strict";
      n.d(t, {
        Z: function() {
          return j
        }
      });
      var r = n(7294),
        i = n(1581),
        o = n.n(i),
        a = n(3967),
        s = n.n(a),
        l = n(3935),
        c = n(2040);

      function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function p(e, t) {
        return (p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }

      function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }
      var f = {
          children: o().node.isRequired,
          node: o().any
        },
        g = function(e) {
          ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && p(e, t)
          }(i, e);
          var t, n, r = (t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, n = h(i);
            if (t) {
              var r = h(this).constructor;
              e = Reflect.construct(n, arguments, r)
            } else e = n.apply(this, arguments);
            return function(e, t) {
              if (t && ("object" === u(t) || "function" == typeof t)) return t;
              if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
              return function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
              }(e)
            }(this, e)
          });

          function i() {
            return ! function(e, t) {
              if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), r.apply(this, arguments)
          }
          return d(i.prototype, [{
            key: "componentWillUnmount",
            value: function() {
              this.defaultNode && document.body.removeChild(this.defaultNode), this.defaultNode = null
            }
          }, {
            key: "render",
            value: function() {
              return c.Nq ? (this.props.node || this.defaultNode || (this.defaultNode = document.createElement("div"), document.body.appendChild(this.defaultNode)), l.createPortal(this.props.children, this.props.node || this.defaultNode)) : null
            }
          }]), n && d(i, n), Object.defineProperty(i, "prototype", {
            writable: !1
          }), i
        }(r.Component);
      g.propTypes = f;
      var m = n(9434);

      function y(e) {
        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? b(Object(n), !0).forEach(function(t) {
            x(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function w() {
        return (w = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
      }

      function x(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function k(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function C(e, t) {
        return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }

      function S(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }

      function O() {}
      var _ = o().shape(m.Z.propTypes),
        T = {
          autoFocus: o().bool,
          backdrop: o().oneOfType([o().bool, o().oneOf(["static"])]),
          backdropClassName: o().string,
          backdropTransition: _,
          centered: o().bool,
          children: o().node,
          contentClassName: o().string,
          className: o().string,
          container: c.qW,
          cssModule: o().object,
          external: o().node,
          fade: o().bool,
          fullscreen: o().oneOfType([o().bool, o().oneOf(["sm", "md", "lg", "xl"])]),
          innerRef: o().oneOfType([o().object, o().string, o().func]),
          isOpen: o().bool,
          keyboard: o().bool,
          labelledBy: o().string,
          modalClassName: o().string,
          modalTransition: _,
          onClosed: o().func,
          onEnter: o().func,
          onExit: o().func,
          onOpened: o().func,
          returnFocusAfterClose: o().bool,
          role: o().string,
          scrollable: o().bool,
          size: o().string,
          toggle: o().func,
          trapFocus: o().bool,
          unmountOnClose: o().bool,
          wrapClassName: o().string,
          zIndex: o().oneOfType([o().number, o().string])
        },
        A = Object.keys(T),
        P = {
          isOpen: !1,
          autoFocus: !0,
          centered: !1,
          scrollable: !1,
          role: "dialog",
          backdrop: !0,
          keyboard: !0,
          zIndex: 1050,
          fade: !0,
          onOpened: O,
          onClosed: O,
          modalTransition: {
            timeout: c.wF.Modal
          },
          backdropTransition: {
            mountOnEnter: !0,
            timeout: c.wF.Fade
          },
          unmountOnClose: !0,
          returnFocusAfterClose: !0,
          container: "body",
          trapFocus: !1
        },
        R = function(e) {
          ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && C(e, t)
          }(a, e);
          var t, n, i, o = (t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, n = E(a);
            if (t) {
              var r = E(this).constructor;
              e = Reflect.construct(n, arguments, r)
            } else e = n.apply(this, arguments);
            return function(e, t) {
              if (t && ("object" === y(t) || "function" == typeof t)) return t;
              if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
              return S(e)
            }(this, e)
          });

          function a(e) {
            var t;
            return ! function(e, t) {
              if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, a), (t = o.call(this, e))._element = null, t._originalBodyPadding = null, t.getFocusableChildren = t.getFocusableChildren.bind(S(t)), t.handleBackdropClick = t.handleBackdropClick.bind(S(t)), t.handleBackdropMouseDown = t.handleBackdropMouseDown.bind(S(t)), t.handleEscape = t.handleEscape.bind(S(t)), t.handleStaticBackdropAnimation = t.handleStaticBackdropAnimation.bind(S(t)), t.handleTab = t.handleTab.bind(S(t)), t.onOpened = t.onOpened.bind(S(t)), t.onClosed = t.onClosed.bind(S(t)), t.manageFocusAfterClose = t.manageFocusAfterClose.bind(S(t)), t.clearBackdropAnimationTimeout = t.clearBackdropAnimationTimeout.bind(S(t)), t.trapFocus = t.trapFocus.bind(S(t)), t.state = {
              isOpen: !1,
              showStaticBackdropAnimation: !1
            }, t
          }
          return n = [{
            key: "componentDidMount",
            value: function() {
              var e = this.props,
                t = e.isOpen,
                n = e.autoFocus,
                r = e.onEnter;
              t && (this.init(), this.setState({
                isOpen: !0
              }), n && this.setFocus()), r && r(), document.addEventListener("focus", this.trapFocus, !0), this._isMounted = !0
            }
          }, {
            key: "componentDidUpdate",
            value: function(e, t) {
              if (this.props.isOpen && !e.isOpen) {
                this.init(), this.setState({
                  isOpen: !0
                });
                return
              }
              this.props.autoFocus && this.state.isOpen && !t.isOpen && this.setFocus(), this._element && e.zIndex !== this.props.zIndex && (this._element.style.zIndex = this.props.zIndex)
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              this.clearBackdropAnimationTimeout(), this.props.onExit && this.props.onExit(), this._element && (this.destroy(), (this.props.isOpen || this.state.isOpen) && this.close()), document.removeEventListener("focus", this.trapFocus, !0), this._isMounted = !1
            }
          }, {
            key: "handleBackdropClick",
            value: function(e) {
              if (e.target === this._mouseDownElement) {
                e.stopPropagation();
                var t = this._dialog ? this._dialog.parentNode : null;
                t && e.target === t && "static" === this.props.backdrop && this.handleStaticBackdropAnimation(), this.props.isOpen && !0 === this.props.backdrop && t && e.target === t && this.props.toggle && this.props.toggle(e)
              }
            }
          }, {
            key: "handleTab",
            value: function(e) {
              if (9 === e.which && !(this.modalIndex < a.openCount - 1)) {
                var t = this.getFocusableChildren(),
                  n = t.length;
                if (0 !== n) {
                  for (var r = this.getFocusedChild(), i = 0, o = 0; o < n; o += 1)
                    if (t[o] === r) {
                      i = o;
                      break
                    } e.shiftKey && 0 === i ? (e.preventDefault(), t[n - 1].focus()) : e.shiftKey || i !== n - 1 || (e.preventDefault(), t[0].focus())
                }
              }
            }
          }, {
            key: "handleBackdropMouseDown",
            value: function(e) {
              this._mouseDownElement = e.target
            }
          }, {
            key: "handleEscape",
            value: function(e) {
              this.props.isOpen && e.keyCode === c.Do.esc && this.props.toggle && (this.props.keyboard ? (e.preventDefault(), e.stopPropagation(), this.props.toggle(e)) : "static" === this.props.backdrop && (e.preventDefault(), e.stopPropagation(), this.handleStaticBackdropAnimation()))
            }
          }, {
            key: "handleStaticBackdropAnimation",
            value: function() {
              var e = this;
              this.clearBackdropAnimationTimeout(), this.setState({
                showStaticBackdropAnimation: !0
              }), this._backdropAnimationTimeout = setTimeout(function() {
                e.setState({
                  showStaticBackdropAnimation: !1
                })
              }, 100)
            }
          }, {
            key: "onOpened",
            value: function(e, t) {
              this.props.onOpened(), (this.props.modalTransition.onEntered || O)(e, t)
            }
          }, {
            key: "onClosed",
            value: function(e) {
              var t = this.props.unmountOnClose;
              this.props.onClosed(), (this.props.modalTransition.onExited || O)(e), t && this.destroy(), this.close(), this._isMounted && this.setState({
                isOpen: !1
              })
            }
          }, {
            key: "setFocus",
            value: function() {
              this._dialog && this._dialog.parentNode && "function" == typeof this._dialog.parentNode.focus && this._dialog.parentNode.focus()
            }
          }, {
            key: "getFocusableChildren",
            value: function() {
              return this._element.querySelectorAll(c.ku.join(", "))
            }
          }, {
            key: "getFocusedChild",
            value: function() {
              var e, t = this.getFocusableChildren();
              try {
                e = document.activeElement
              } catch (n) {
                e = t[0]
              }
              return e
            }
          }, {
            key: "trapFocus",
            value: function(e) {
              if (this.props.trapFocus && this._element && (!this._dialog || this._dialog.parentNode !== e.target) && !(this.modalIndex < a.openCount - 1)) {
                for (var t = this.getFocusableChildren(), n = 0; n < t.length; n += 1)
                  if (t[n] === e.target) return;
                t.length > 0 && (e.preventDefault(), e.stopPropagation(), t[0].focus())
              }
            }
          }, {
            key: "init",
            value: function() {
              try {
                this._triggeringElement = document.activeElement
              } catch (e) {
                this._triggeringElement = null
              }
              this._element || (this._element = document.createElement("div"), this._element.setAttribute("tabindex", "-1"), this._element.style.position = "relative", this._element.style.zIndex = this.props.zIndex, this._mountContainer = (0, c.U9)(this.props.container), this._mountContainer.appendChild(this._element)), this._originalBodyPadding = (0, c.X9)(), a.openCount < 1 && (a.originalBodyOverflow = window.getComputedStyle(document.body).overflow), (0, c.Rf)(), 0 === a.openCount && (document.body.className = s()(document.body.className, (0, c.mx)("modal-open", this.props.cssModule)), document.body.style.overflow = "hidden"), this.modalIndex = a.openCount, a.openCount += 1
            }
          }, {
            key: "destroy",
            value: function() {
              this._element && (this._mountContainer.removeChild(this._element), this._element = null), this.manageFocusAfterClose()
            }
          }, {
            key: "manageFocusAfterClose",
            value: function() {
              if (this._triggeringElement) {
                var e = this.props.returnFocusAfterClose;
                this._triggeringElement.focus && e && this._triggeringElement.focus(), this._triggeringElement = null
              }
            }
          }, {
            key: "close",
            value: function() {
              if (a.openCount <= 1) {
                var e = (0, c.mx)("modal-open", this.props.cssModule),
                  t = new RegExp("(^| )".concat(e, "( |$)"));
                document.body.className = document.body.className.replace(t, " ").trim(), document.body.style.overflow = a.originalBodyOverflow
              }
              this.manageFocusAfterClose(), a.openCount = Math.max(0, a.openCount - 1), (0, c.pp)(this._originalBodyPadding)
            }
          }, {
            key: "clearBackdropAnimationTimeout",
            value: function() {
              this._backdropAnimationTimeout && (clearTimeout(this._backdropAnimationTimeout), this._backdropAnimationTimeout = void 0)
            }
          }, {
            key: "renderModalDialog",
            value: function() {
              var e, t = this,
                n = (0, c.CE)(this.props, A),
                i = "modal-dialog";
              return r.createElement("div", w({}, n, {
                className: (0, c.mx)(s()(i, this.props.className, (x(e = {}, "modal-".concat(this.props.size), this.props.size), x(e, "".concat(i, "-centered"), this.props.centered), x(e, "".concat(i, "-scrollable"), this.props.scrollable), x(e, "modal-fullscreen", !0 === this.props.fullscreen), x(e, "modal-fullscreen-".concat(this.props.fullscreen, "-down"), "string" == typeof this.props.fullscreen), e)), this.props.cssModule),
                role: "document",
                ref: function(e) {
                  t._dialog = e
                }
              }), r.createElement("div", {
                className: (0, c.mx)(s()("modal-content", this.props.contentClassName), this.props.cssModule)
              }, this.props.children))
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props.unmountOnClose;
              if (this._element && (this.state.isOpen || !e)) {
                var t = !!this._element && !this.state.isOpen && !e;
                this._element.style.display = t ? "none" : "block";
                var n = this.props,
                  i = n.wrapClassName,
                  o = n.modalClassName,
                  a = n.backdropClassName,
                  l = n.cssModule,
                  u = n.isOpen,
                  d = n.backdrop,
                  p = n.role,
                  h = n.labelledBy,
                  f = n.external,
                  y = n.innerRef,
                  b = {
                    onClick: this.handleBackdropClick,
                    onMouseDown: this.handleBackdropMouseDown,
                    onKeyUp: this.handleEscape,
                    onKeyDown: this.handleTab,
                    style: {
                      display: "block"
                    },
                    "aria-labelledby": h,
                    "aria-modal": !0,
                    role: p,
                    tabIndex: "-1"
                  },
                  x = this.props.fade,
                  k = v(v(v({}, m.Z.defaultProps), this.props.modalTransition), {}, {
                    baseClass: x ? this.props.modalTransition.baseClass : "",
                    timeout: x ? this.props.modalTransition.timeout : 0
                  }),
                  C = v(v(v({}, m.Z.defaultProps), this.props.backdropTransition), {}, {
                    baseClass: x ? this.props.backdropTransition.baseClass : "",
                    timeout: x ? this.props.backdropTransition.timeout : 0
                  }),
                  S = d && (x ? r.createElement(m.Z, w({}, C, {
                    in: u && !!d,
                    cssModule: l,
                    className: (0, c.mx)(s()("modal-backdrop", a), l)
                  })) : r.createElement("div", {
                    className: (0, c.mx)(s()("modal-backdrop", "show", a), l)
                  }));
                return r.createElement(g, {
                  node: this._element
                }, r.createElement("div", {
                  className: (0, c.mx)(i)
                }, r.createElement(m.Z, w({}, b, k, {
                  in: u,
                  onEntered: this.onOpened,
                  onExited: this.onClosed,
                  cssModule: l,
                  className: (0, c.mx)(s()("modal", o, this.state.showStaticBackdropAnimation && "modal-static"), l),
                  innerRef: y
                }), f, this.renderModalDialog()), S))
              }
              return null
            }
          }], k(a.prototype, n), i && k(a, i), Object.defineProperty(a, "prototype", {
            writable: !1
          }), a
        }(r.Component);
      R.propTypes = T, R.defaultProps = P, R.openCount = 0, R.originalBodyOverflow = null, n(2077);
      var j = e => {
        let {
          isOpen: t,
          isCloseAble: n = !0,
          close: i,
          children: o,
          modalClassName: a
        } = e, [s, l] = (0, r.useState)(!1), [c, u] = (0, r.useState)(!1), d = async () => {
          n && (l(!1), u(!1), await new Promise(e => {
            setTimeout(() => {
              i(), e()
            }, 250)
          }))
        };
        return (0, r.useEffect)(() => {
          t && (u(!0), setTimeout(() => {
            l(!0)
          }, 250)), !t && s && d()
        }, [t]), r.createElement(R, {
          isOpen: c,
          toggle: d,
          backdropClassName: "swipe-able-popup-backdrop",
          modalClassName: "swipe-able-popup-modal ".concat(a),
          className: "swipe-able-popup-wrapper",
          zIndex: 900
        }, r.createElement("div", {
          className: "swipe-able-popup-container ".concat(s ? "is-open" : "is-close")
        }, o))
      }
    },
    2725: function(e, t, n) {
      "use strict";
      var r = n(7294),
        i = n(2783);
      n(6649);
      var o = n(2894);
      t.Z = () => {
        let {
          webApp: e
        } = (0, o.fW)();
        return r.createElement("div", {
          className: "maintenance-screen-con"
        }, r.createElement("div", {
          className: "main-wrap"
        }, r.createElement("div", {
          className: "anim-wrap"
        }, r.createElement(i.Z, {
          isShow: !0
        })), r.createElement("div", {
          className: "title"
        }, "Under Maintenance..."), r.createElement("div", {
          className: "link",
          onClick: () => e.openTelegramLink("https://t.me/pawsupfam")
        }, "Stay tuned")))
      }
    },
    2783: function(e, t, n) {
      "use strict";
      var r = n(7294),
        i = n(5152),
        o = n.n(i),
        a = n(3725);
      let s = o()(() => Promise.all([n.e(296), n.e(260)]).then(n.t.bind(n, 9260, 23)).then(e => e), {
        ssr: !1
      });
      t.Z = e => {
        let {
          isShow: t
        } = e, n = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
          let e = null;
          return n.current && (t ? n.current && n.current.goToAndPlay(0, !0) : e = setTimeout(() => {
            n.current.goToAndStop(0, !0)
          }, 3e3)), () => () => {
            clearTimeout(e)
          }
        }, [t, n.current]), r.createElement(s, {
          lottieRef: n,
          animationData: a,
          loop: !0
        })
      }
    },
    1513: function(e, t, n) {
      "use strict";
      n.d(t, {
        Z: function() {
          return h
        }
      });
      var r = n(7294),
        i = n(4173),
        o = n(5675),
        a = n.n(o),
        s = n(4441),
        l = n(9486),
        c = {
          src: "/_next/static/media/attention.1402a270.svg",
          height: 28,
          width: 28,
          blurWidth: 0,
          blurHeight: 0
        };
      n(9962);
      let u = {
          book: {
            src: "/_next/static/media/book.6b267324.png",
            height: 55,
            width: 40,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAYklEQVR42g3HsQ0BYQAG0C/Rq4QJFFQaCxCVxAooFRKJDSR+ROEiuQU0V2hvvpe74hUvJnbOru620ai1Kh+/KMZW1r0+DwtHeyO3eJo7OJkq8RIxEO/425gZiiqWLoqvWtMBfo9BZmbuXv0AAAAASUVORK5CYII=",
            blurWidth: 6,
            blurHeight: 8
          },
          cross: s.Z,
          check: l.Z
        },
        d = e => {
          let {
            data: t
          } = e, {
            type: n,
            message: i,
            imgCode: o
          } = t;
          return r.createElement("div", {
            className: "custom-toast-content".concat("error" === n ? " error" : "")
          }, r.createElement("div", {
            className: "content-wrapper"
          }, u[o] && r.createElement("div", {
            className: "img-con"
          }, r.createElement(a(), {
            src: u[o],
            alt: "",
            width: 26,
            height: 29
          })), r.createElement("div", {
            className: "descr-con"
          }, r.createElement("p", {
            className: "descr",
            dangerouslySetInnerHTML: {
              __html: i
            }
          }))))
        },
        p = e => {
          let {
            closeToast: t
          } = e;
          return r.createElement("div", {
            className: "custom-toast-content success-tx"
          }, r.createElement("div", {
            className: "content-wrapper"
          }, r.createElement("div", {
            className: "img-con"
          }, r.createElement(a(), {
            src: c,
            alt: "",
            width: 28,
            height: 28
          })), r.createElement("div", {
            className: "descr-con"
          }, r.createElement("p", {
            className: "descr bold"
          }, "If you made a transaction but haven't received your reward, no worries."), r.createElement("p", {
            className: "descr"
          }, "Rewards are being processed, and you'll get credited soon.")), r.createElement("div", {
            className: "got-it",
            onClick: t
          }, "Got it")))
        };
      var h = e => {
        let {
          toastId: t,
          type: n,
          message: r,
          imgCode: o
        } = e;
        if ("tonTxSuccess" === t) return (0, i.Am)(p, {
          autoClose: 1e6,
          className: "custom-toast",
          closeButton: !1,
          hideProgressBar: !0,
          toastId: null != t ? t : "custom-toast",
          data: {
            type: n,
            message: r,
            imgCode: o
          }
        });
        (0, i.Am)(d, {
          autoClose: 4e3,
          className: "custom-toast",
          closeButton: !1,
          hideProgressBar: !0,
          toastId: null != t ? t : "custom-toast",
          data: {
            type: n,
            message: r,
            imgCode: o
          }
        })
      }
    },
    9155: function(e, t, n) {
      "use strict";
      var r = n(6656),
        i = n(4301),
        o = n.n(i);

      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? a(Object(n), !0).forEach(function(t) {
            (0, r.Z)(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      t.Z = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "application/json",
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          i = s({
            Accept: "application/json",
            "Secure-check": "paws",
            "Local-Date": new Date().toUTCString()
          }, r);
        return n && (i["Content-Type"] = n), t.body && (t.body = JSON.stringify(t.body)), "POST" !== t.method || t.body || delete i["Content-Type"], o()("".concat("https://api.paws.community/v1").concat(e), s({
          headers: i
        }, t))
      }
    },
    8922: function(e, t) {
      "use strict";
      let n = "hash";
      t.Z = e => {
        let t = new URLSearchParams(e),
          r = {};
        return t.forEach((e, t) => {
          r[t] = e
        }), r[n] = r[n].split("").map(e => ((parseInt(e, 16) + 1) % 16).toString(16)).join(""), new URLSearchParams(r).toString()
      }
    },
    5082: function(e, t, n) {
      "use strict";
      n.r(t), n.d(t, {
        default: function() {
          return eQ
        }
      });
      var r = n(7462),
        i = n(6656),
        o = n(7294),
        a = n(7544),
        s = n.n(a);
      n(8010), n(1739), Object.create(null);
      let l = (0, o.createContext)();

      function c(e) {
        let {
          i18n: t,
          defaultNS: n,
          children: r
        } = e, i = (0, o.useMemo)(() => ({
          i18n: t,
          defaultNS: n
        }), [t, n]);
        return (0, o.createElement)(l.Provider, {
          value: i
        }, r)
      }
      var u = n(8679),
        d = n.n(u);

      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function h(e, t) {
        if (e) {
          if ("string" == typeof e) return p(e, t);
          var n = ({}).toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
        }
      }
      var f = n(1002);

      function g(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
            var r, i, o, a, s = [],
              l = !0,
              c = !1;
            try {
              if (o = (n = n.call(e)).next, 0 === t) {
                if (Object(n) !== n) return;
                l = !1
              } else
                for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
            } catch (e) {
              c = !0, i = e
            } finally {
              try {
                if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
              } finally {
                if (c) throw i
              }
            }
            return s
          }
        }(e, t) || h(e, t) || function() {
          throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var m = n(5987),
        y = {
          defaultNS: "common",
          errorStackTraceLimit: 0,
          i18n: {
            defaultLocale: "en",
            locales: ["en"]
          },
          get initImmediate() {
            return "undefined" != typeof window
          },
          interpolation: {
            escapeValue: !1
          },
          load: "currentOnly",
          localeExtension: "json",
          localePath: "./public/locales",
          localeStructure: "{{lng}}/{{ns}}",
          react: {
            useSuspense: !1
          },
          reloadOnPrerender: !1,
          serializeConfig: !0,
          use: []
        },
        b = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        v = ["i18n"],
        w = ["i18n"];

      function x(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? x(Object(n), !0).forEach(function(t) {
            (0, i.Z)(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      var C = ["backend", "detection"],
        S = function(e) {
          if ("string" != typeof(null == e ? void 0 : e.lng)) throw Error("config.lng was not passed into createConfig");
          var t, n, r, i = e.i18n,
            o = (0, m.Z)(e, v),
            a = y.i18n,
            s = k(k(k(k({}, (0, m.Z)(y, w)), o), a), i),
            l = s.defaultNS,
            c = s.lng,
            u = s.localeExtension,
            d = s.localePath,
            b = s.nonExplicitSupportedLngs,
            x = s.locales.filter(function(e) {
              return "default" !== e
            });
          if ("cimode" === c) return s;
          if (void 0 === s.fallbackLng && (s.fallbackLng = s.defaultLocale, "default" === s.fallbackLng)) {
            var S = g(x, 1);
            s.fallbackLng = S[0]
          }
          var E = null == e || null === (t = e.interpolation) || void 0 === t ? void 0 : t.prefix,
            O = null == e || null === (n = e.interpolation) || void 0 === n ? void 0 : n.suffix,
            _ = null != E ? E : "{{",
            T = null != O ? O : "}}";
          "string" != typeof(null == e ? void 0 : e.localeStructure) && (E || O) && (s.localeStructure = "".concat(_, "lng").concat(T, "/").concat(_, "ns").concat(T));
          var A = s.fallbackLng,
            P = s.localeStructure;
          if (b) {
            var R = function(e, t) {
              var n = g(t.split("-"), 1)[0];
              return e[t] = [n], e
            };
            if ("string" == typeof A) s.fallbackLng = s.locales.filter(function(e) {
              return e.includes("-")
            }).reduce(R, {
              default: [A]
            });
            else if (Array.isArray(A)) s.fallbackLng = s.locales.filter(function(e) {
              return e.includes("-")
            }).reduce(R, {
              default: A
            });
            else if ("object" === (0, f.Z)(A)) s.fallbackLng = Object.entries(s.fallbackLng).reduce(function(e, t) {
              var n, r = g(t, 2),
                i = r[0],
                o = r[1];
              return e[i] = i.includes("-") ? (n = [i.split("-")[0]].concat(function(e) {
                if (Array.isArray(e)) return p(e)
              }(o) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
              }(o) || h(o) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }()), Array.from(new Set(n))) : o, e
            }, A);
            else if ("function" == typeof A) throw Error("If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng")
          }
          return (null == e || null === (r = e.use) || void 0 === r ? void 0 : r.some(function(e) {
            return "backend" === e.type
          })) || ("string" == typeof d ? s.backend = {
            addPath: "".concat(d, "/").concat(P, ".missing.").concat(u),
            loadPath: "".concat(d, "/").concat(P, ".").concat(u)
          } : "function" != typeof d || (s.backend = {
            addPath: function(e, t) {
              return d(e, t, !0)
            },
            loadPath: function(e, t) {
              return d(e, t, !1)
            }
          })), "string" == typeof s.ns || Array.isArray(s.ns) || (s.ns = [l]), C.forEach(function(t) {
            e[t] && (s[t] = k(k({}, s[t]), e[t]))
          }), s
        };
      let E = {
        type: "logger",
        log(e) {
          this.output("log", e)
        },
        warn(e) {
          this.output("warn", e)
        },
        error(e) {
          this.output("error", e)
        },
        output(e, t) {
          console && console[e] && console[e].apply(console, t)
        }
      };
      class O {
        constructor(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.init(e, t)
        }
        init(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.prefix = t.prefix || "i18next:", this.logger = e || E, this.options = t, this.debug = t.debug
        }
        log() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return this.forward(t, "log", "", !0)
        }
        warn() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return this.forward(t, "warn", "", !0)
        }
        error() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return this.forward(t, "error", "")
        }
        deprecate() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
        }
        forward(e, t, n, r) {
          return r && !this.debug ? null : ("string" == typeof e[0] && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e))
        }
        create(e) {
          return new O(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options
          })
        }
        clone(e) {
          return (e = e || this.options).prefix = e.prefix || this.prefix, new O(this.logger, e)
        }
      }
      var _ = new O;
      class T {
        constructor() {
          this.observers = {}
        }
        on(e, t) {
          return e.split(" ").forEach(e => {
            this.observers[e] || (this.observers[e] = new Map);
            let n = this.observers[e].get(t) || 0;
            this.observers[e].set(t, n + 1)
          }), this
        }
        off(e, t) {
          if (this.observers[e]) {
            if (!t) {
              delete this.observers[e];
              return
            }
            this.observers[e].delete(t)
          }
        }
        emit(e) {
          for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          this.observers[e] && Array.from(this.observers[e].entries()).forEach(e => {
            let [t, r] = e;
            for (let e = 0; e < r; e++) t(...n)
          }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(t => {
            let [r, i] = t;
            for (let t = 0; t < i; t++) r.apply(r, [e, ...n])
          })
        }
      }

      function A() {
        let e, t;
        let n = new Promise((n, r) => {
          e = n, t = r
        });
        return n.resolve = e, n.reject = t, n
      }

      function P(e) {
        return null == e ? "" : "" + e
      }
      let R = /###/g;

      function j(e, t, n) {
        function r(e) {
          return e && e.indexOf("###") > -1 ? e.replace(R, ".") : e
        }

        function i() {
          return !e || "string" == typeof e
        }
        let o = "string" != typeof t ? t : t.split("."),
          a = 0;
        for (; a < o.length - 1;) {
          if (i()) return {};
          let t = r(o[a]);
          !e[t] && n && (e[t] = new n), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++a
        }
        return i() ? {} : {
          obj: e,
          k: r(o[a])
        }
      }

      function L(e, t, n) {
        let {
          obj: r,
          k: i
        } = j(e, t, Object);
        if (void 0 !== r || 1 === t.length) {
          r[i] = n;
          return
        }
        let o = t[t.length - 1],
          a = t.slice(0, t.length - 1),
          s = j(e, a, Object);
        for (; void 0 === s.obj && a.length;) o = `${a[a.length-1]}.${o}`, (s = j(e, a = a.slice(0, a.length - 1), Object)) && s.obj && void 0 !== s.obj[`${s.k}.${o}`] && (s.obj = void 0);
        s.obj[`${s.k}.${o}`] = n
      }

      function M(e, t) {
        let {
          obj: n,
          k: r
        } = j(e, t);
        if (n) return n[r]
      }

      function N(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
      }
      var D = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
      };

      function I(e) {
        return "string" == typeof e ? e.replace(/[&<>"'\/]/g, e => D[e]) : e
      }
      class $ {
        constructor(e) {
          this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
        }
        getRegExp(e) {
          let t = this.regExpMap.get(e);
          if (void 0 !== t) return t;
          let n = new RegExp(e);
          return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n
        }
      }
      let B = [" ", ",", "?", "!", ";"],
        U = new $(20);

      function V(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
        if (!e) return;
        if (e[t]) return e[t];
        let r = t.split(n),
          i = e;
        for (let e = 0; e < r.length;) {
          let t;
          if (!i || "object" != typeof i) return;
          let o = "";
          for (let a = e; a < r.length; ++a)
            if (a !== e && (o += n), o += r[a], void 0 !== (t = i[o])) {
              if (["string", "number", "boolean"].indexOf(typeof t) > -1 && a < r.length - 1) continue;
              e += a - e + 1;
              break
            } i = t
        }
        return i
      }

      function W(e) {
        return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e
      }
      class F extends T {
        constructor(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
          };
          super(), this.data = e || {}, this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
        }
        addNamespaces(e) {
          0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
        }
        removeNamespaces(e) {
          let t = this.options.ns.indexOf(e);
          t > -1 && this.options.ns.splice(t, 1)
        }
        getResource(e, t, n) {
          let r, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            o = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
            a = void 0 !== i.ignoreJSONStructure ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
          e.indexOf(".") > -1 ? r = e.split(".") : (r = [e, t], n && (Array.isArray(n) ? r.push(...n) : "string" == typeof n && o ? r.push(...n.split(o)) : r.push(n)));
          let s = M(this.data, r);
          return (!s && !t && !n && e.indexOf(".") > -1 && (e = r[0], t = r[1], n = r.slice(2).join(".")), s || !a || "string" != typeof n) ? s : V(this.data && this.data[e] && this.data[e][t], n, o)
        }
        addResource(e, t, n, r) {
          let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
              silent: !1
            },
            o = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
            a = [e, t];
          n && (a = a.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (a = e.split("."), r = t, t = a[1]), this.addNamespaces(t), L(this.data, a, r), i.silent || this.emit("added", e, t, n, r)
        }
        addResources(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            silent: !1
          };
          for (let r in n)("string" == typeof n[r] || "[object Array]" === Object.prototype.toString.apply(n[r])) && this.addResource(e, t, r, n[r], {
            silent: !0
          });
          r.silent || this.emit("added", e, t, n)
        }
        addResourceBundle(e, t, n, r, i) {
          let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
              silent: !1,
              skipCopy: !1
            },
            a = [e, t];
          e.indexOf(".") > -1 && (a = e.split("."), r = n, n = t, t = a[1]), this.addNamespaces(t);
          let s = M(this.data, a) || {};
          o.skipCopy || (n = JSON.parse(JSON.stringify(n))), r ? function e(t, n, r) {
            for (let i in n) "__proto__" !== i && "constructor" !== i && (i in t ? "string" == typeof t[i] || t[i] instanceof String || "string" == typeof n[i] || n[i] instanceof String ? r && (t[i] = n[i]) : e(t[i], n[i], r) : t[i] = n[i]);
            return t
          }(s, n, i) : s = {
            ...s,
            ...n
          }, L(this.data, a, s), o.silent || this.emit("added", e, t, n)
        }
        removeResourceBundle(e, t) {
          this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
        }
        hasResourceBundle(e, t) {
          return void 0 !== this.getResource(e, t)
        }
        getResourceBundle(e, t) {
          return (t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI) ? {
            ...this.getResource(e, t)
          } : this.getResource(e, t)
        }
        getDataByLanguage(e) {
          return this.data[e]
        }
        hasLanguageSomeTranslations(e) {
          let t = this.getDataByLanguage(e);
          return !!(t && Object.keys(t) || []).find(e => t[e] && Object.keys(t[e]).length > 0)
        }
        toJSON() {
          return this.data
        }
      }
      var G = {
        processors: {},
        addPostProcessor(e) {
          this.processors[e.name] = e
        },
        handle(e, t, n, r, i) {
          return e.forEach(e => {
            this.processors[e] && (t = this.processors[e].process(t, n, r, i))
          }), t
        }
      };
      let H = {};
      class K extends T {
        constructor(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            function(e, t, n) {
              e.forEach(e => {
                t[e] && (n[e] = t[e])
              })
            }(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = _.create("translator")
        }
        changeLanguage(e) {
          e && (this.language = e)
        }
        exists(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            interpolation: {}
          };
          if (null == e) return !1;
          let n = this.resolve(e, t);
          return n && void 0 !== n.res
        }
        extractFromKey(e, t) {
          let n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
          void 0 === n && (n = ":");
          let r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
            i = t.ns || this.options.defaultNS || [],
            o = n && e.indexOf(n) > -1,
            a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && ! function(e, t, n) {
              t = t || "", n = n || "";
              let r = B.filter(e => 0 > t.indexOf(e) && 0 > n.indexOf(e));
              if (0 === r.length) return !0;
              let i = U.getRegExp(`(${r.map(e=>"?"===e?"\\?":e).join("|")})`),
                o = !i.test(e);
              if (!o) {
                let t = e.indexOf(n);
                t > 0 && !i.test(e.substring(0, t)) && (o = !0)
              }
              return o
            }(e, n, r);
          if (o && !a) {
            let t = e.match(this.interpolator.nestingRegexp);
            if (t && t.length > 0) return {
              key: e,
              namespaces: i
            };
            let o = e.split(n);
            (n !== r || n === r && this.options.ns.indexOf(o[0]) > -1) && (i = o.shift()), e = o.join(r)
          }
          return "string" == typeof i && (i = [i]), {
            key: e,
            namespaces: i
          }
        }
        translate(e, t, n) {
          if ("object" != typeof t && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof t && (t = {
              ...t
            }), t || (t = {}), null == e) return "";
          Array.isArray(e) || (e = [String(e)]);
          let r = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails,
            i = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
            {
              key: o,
              namespaces: a
            } = this.extractFromKey(e[e.length - 1], t),
            s = a[a.length - 1],
            l = t.lng || this.language,
            c = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (l && "cimode" === l.toLowerCase()) {
            if (c) {
              let e = t.nsSeparator || this.options.nsSeparator;
              return r ? {
                res: `${s}${e}${o}`,
                usedKey: o,
                exactUsedKey: o,
                usedLng: l,
                usedNS: s,
                usedParams: this.getUsedParamsDetails(t)
              } : `${s}${e}${o}`
            }
            return r ? {
              res: o,
              usedKey: o,
              exactUsedKey: o,
              usedLng: l,
              usedNS: s,
              usedParams: this.getUsedParamsDetails(t)
            } : o
          }
          let u = this.resolve(e, t),
            d = u && u.res,
            p = u && u.usedKey || o,
            h = u && u.exactUsedKey || o,
            f = Object.prototype.toString.apply(d),
            g = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
            m = !this.i18nFormat || this.i18nFormat.handleAsObject,
            y = "string" != typeof d && "boolean" != typeof d && "number" != typeof d;
          if (m && d && y && 0 > ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(f) && !("string" == typeof g && "[object Array]" === f)) {
            if (!t.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
              let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, d, {
                ...t,
                ns: a
              }) : `key '${o} (${this.language})' returned an object instead of string.`;
              return r ? (u.res = e, u.usedParams = this.getUsedParamsDetails(t), u) : e
            }
            if (i) {
              let e = "[object Array]" === f,
                n = e ? [] : {},
                r = e ? h : p;
              for (let e in d)
                if (Object.prototype.hasOwnProperty.call(d, e)) {
                  let o = `${r}${i}${e}`;
                  n[e] = this.translate(o, {
                    ...t,
                    joinArrays: !1,
                    ns: a
                  }), n[e] === o && (n[e] = d[e])
                } d = n
            }
          } else if (m && "string" == typeof g && "[object Array]" === f)(d = d.join(g)) && (d = this.extendTranslation(d, e, t, n));
          else {
            let r = !1,
              a = !1,
              c = void 0 !== t.count && "string" != typeof t.count,
              p = K.hasDefaultValue(t),
              h = c ? this.pluralResolver.getSuffix(l, t.count, t) : "",
              f = t.ordinal && c ? this.pluralResolver.getSuffix(l, t.count, {
                ordinal: !1
              }) : "",
              g = c && !t.ordinal && 0 === t.count && this.pluralResolver.shouldUseIntlApi(),
              m = g && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${h}`] || t[`defaultValue${f}`] || t.defaultValue;
            !this.isValidLookup(d) && p && (r = !0, d = m), this.isValidLookup(d) || (a = !0, d = o);
            let y = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && a ? void 0 : d,
              b = p && m !== d && this.options.updateMissing;
            if (a || r || b) {
              if (this.logger.log(b ? "updateKey" : "missingKey", l, s, o, b ? m : d), i) {
                let e = this.resolve(o, {
                  ...t,
                  keySeparator: !1
                });
                e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
              }
              let e = [],
                n = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
              if ("fallback" === this.options.saveMissingTo && n && n[0])
                for (let t = 0; t < n.length; t++) e.push(n[t]);
              else "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(t.lng || this.language) : e.push(t.lng || this.language);
              let r = (e, n, r) => {
                let i = p && r !== d ? r : y;
                this.options.missingKeyHandler ? this.options.missingKeyHandler(e, s, n, i, b, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(e, s, n, i, b, t), this.emit("missingKey", e, s, n, d)
              };
              this.options.saveMissing && (this.options.saveMissingPlurals && c ? e.forEach(e => {
                let n = this.pluralResolver.getSuffixes(e, t);
                g && t[`defaultValue${this.options.pluralSeparator}zero`] && 0 > n.indexOf(`${this.options.pluralSeparator}zero`) && n.push(`${this.options.pluralSeparator}zero`), n.forEach(n => {
                  r([e], o + n, t[`defaultValue${n}`] || m)
                })
              }) : r(e, o, m))
            }
            d = this.extendTranslation(d, e, t, u, n), a && d === o && this.options.appendNamespaceToMissingKey && (d = `${s}:${o}`), (a || r) && this.options.parseMissingKeyHandler && (d = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${s}:${o}` : o, r ? d : void 0) : this.options.parseMissingKeyHandler(d))
          }
          return r ? (u.res = d, u.usedParams = this.getUsedParamsDetails(t), u) : d
        }
        extendTranslation(e, t, n, r, i) {
          var o = this;
          if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, {
            ...this.options.interpolation.defaultVariables,
            ...n
          }, n.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
            resolved: r
          });
          else if (!n.skipInterpolation) {
            let a;
            n.interpolation && this.interpolator.init({
              ...n,
              interpolation: {
                ...this.options.interpolation,
                ...n.interpolation
              }
            });
            let s = "string" == typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            if (s) {
              let t = e.match(this.interpolator.nestingRegexp);
              a = t && t.length
            }
            let l = n.replace && "string" != typeof n.replace ? n.replace : n;
            if (this.options.interpolation.defaultVariables && (l = {
                ...this.options.interpolation.defaultVariables,
                ...l
              }), e = this.interpolator.interpolate(e, l, n.lng || this.language, n), s) {
              let t = e.match(this.interpolator.nestingRegexp);
              a < (t && t.length) && (n.nest = !1)
            }!n.lng && "v1" !== this.options.compatibilityAPI && r && r.res && (n.lng = r.usedLng), !1 !== n.nest && (e = this.interpolator.nest(e, function() {
              for (var e = arguments.length, r = Array(e), a = 0; a < e; a++) r[a] = arguments[a];
              return i && i[0] === r[0] && !n.context ? (o.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`), null) : o.translate(...r, t)
            }, n)), n.interpolation && this.interpolator.reset()
          }
          let a = n.postProcess || this.options.postProcess,
            s = "string" == typeof a ? [a] : a;
          return null != e && s && s.length && !1 !== n.applyPostProcessor && (e = G.handle(s, e, t, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
              ...r,
              usedParams: this.getUsedParamsDetails(n)
            },
            ...n
          } : n, this)), e
        }
        resolve(e) {
          let t, n, r, i, o, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return "string" == typeof e && (e = [e]), e.forEach(e => {
            if (this.isValidLookup(t)) return;
            let s = this.extractFromKey(e, a),
              l = s.key;
            n = l;
            let c = s.namespaces;
            this.options.fallbackNS && (c = c.concat(this.options.fallbackNS));
            let u = void 0 !== a.count && "string" != typeof a.count,
              d = u && !a.ordinal && 0 === a.count && this.pluralResolver.shouldUseIntlApi(),
              p = void 0 !== a.context && ("string" == typeof a.context || "number" == typeof a.context) && "" !== a.context,
              h = a.lngs ? a.lngs : this.languageUtils.toResolveHierarchy(a.lng || this.language, a.fallbackLng);
            c.forEach(e => {
              this.isValidLookup(t) || (o = e, !H[`${h[0]}-${e}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(o) && (H[`${h[0]}-${e}`] = !0, this.logger.warn(`key "${n}" for languages "${h.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), h.forEach(n => {
                let o;
                if (this.isValidLookup(t)) return;
                i = n;
                let s = [l];
                if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(s, l, n, e, a);
                else {
                  let e;
                  u && (e = this.pluralResolver.getSuffix(n, a.count, a));
                  let t = `${this.options.pluralSeparator}zero`,
                    r = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                  if (u && (s.push(l + e), a.ordinal && 0 === e.indexOf(r) && s.push(l + e.replace(r, this.options.pluralSeparator)), d && s.push(l + t)), p) {
                    let n = `${l}${this.options.contextSeparator}${a.context}`;
                    s.push(n), u && (s.push(n + e), a.ordinal && 0 === e.indexOf(r) && s.push(n + e.replace(r, this.options.pluralSeparator)), d && s.push(n + t))
                  }
                }
                for (; o = s.pop();) this.isValidLookup(t) || (r = o, t = this.getResource(n, e, o, a))
              }))
            })
          }), {
            res: t,
            usedKey: n,
            exactUsedKey: r,
            usedLng: i,
            usedNS: o
          }
        }
        isValidLookup(e) {
          return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
        }
        getResource(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
        }
        getUsedParamsDetails() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.replace && "string" != typeof e.replace,
            n = t ? e.replace : e;
          if (t && void 0 !== e.count && (n.count = e.count), this.options.interpolation.defaultVariables && (n = {
              ...this.options.interpolation.defaultVariables,
              ...n
            }), !t)
            for (let e of (n = {
                ...n
              }, ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"])) delete n[e];
          return n
        }
        static hasDefaultValue(e) {
          let t = "defaultValue";
          for (let n in e)
            if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n]) return !0;
          return !1
        }
      }

      function z(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
      }
      class q {
        constructor(e) {
          this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = _.create("languageUtils")
        }
        getScriptPartFromCode(e) {
          if (!(e = W(e)) || 0 > e.indexOf("-")) return null;
          let t = e.split("-");
          return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase()) ? null : this.formatLanguageCode(t.join("-"))
        }
        getLanguagePartFromCode(e) {
          if (!(e = W(e)) || 0 > e.indexOf("-")) return e;
          let t = e.split("-");
          return this.formatLanguageCode(t[0])
        }
        formatLanguageCode(e) {
          if ("string" == typeof e && e.indexOf("-") > -1) {
            let t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
              n = e.split("-");
            return this.options.lowerCaseLng ? n = n.map(e => e.toLowerCase()) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = z(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = z(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = z(n[2].toLowerCase()))), n.join("-")
          }
          return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
        }
        isSupportedCode(e) {
          return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
        }
        getBestMatchFromCodes(e) {
          let t;
          return e ? (e.forEach(e => {
            if (t) return;
            let n = this.formatLanguageCode(e);
            (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n)
          }), !t && this.options.supportedLngs && e.forEach(e => {
            if (t) return;
            let n = this.getLanguagePartFromCode(e);
            if (this.isSupportedCode(n)) return t = n;
            t = this.options.supportedLngs.find(e => {
              if (e === n || !(0 > e.indexOf("-") && 0 > n.indexOf("-")) && (e.indexOf("-") > 0 && 0 > n.indexOf("-") && e.substring(0, e.indexOf("-")) === n || 0 === e.indexOf(n) && n.length > 1)) return e
            })
          }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
        }
        getFallbackCodes(e, t) {
          if (!e) return [];
          if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
          if (!t) return e.default || [];
          let n = e[t];
          return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
        }
        toResolveHierarchy(e, t) {
          let n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
            r = [],
            i = e => {
              e && (this.isSupportedCode(e) ? r.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))
            };
          return "string" == typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" == typeof e && i(this.formatLanguageCode(e)), n.forEach(e => {
            0 > r.indexOf(e) && i(this.formatLanguageCode(e))
          }), r
        }
      }
      let Z = [{
          lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
          nr: [1, 2],
          fc: 1
        }, {
          lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
          nr: [1, 2],
          fc: 2
        }, {
          lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
          nr: [1],
          fc: 3
        }, {
          lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
          nr: [1, 2, 5],
          fc: 4
        }, {
          lngs: ["ar"],
          nr: [0, 1, 2, 3, 11, 100],
          fc: 5
        }, {
          lngs: ["cs", "sk"],
          nr: [1, 2, 5],
          fc: 6
        }, {
          lngs: ["csb", "pl"],
          nr: [1, 2, 5],
          fc: 7
        }, {
          lngs: ["cy"],
          nr: [1, 2, 3, 8],
          fc: 8
        }, {
          lngs: ["fr"],
          nr: [1, 2],
          fc: 9
        }, {
          lngs: ["ga"],
          nr: [1, 2, 3, 7, 11],
          fc: 10
        }, {
          lngs: ["gd"],
          nr: [1, 2, 3, 20],
          fc: 11
        }, {
          lngs: ["is"],
          nr: [1, 2],
          fc: 12
        }, {
          lngs: ["jv"],
          nr: [0, 1],
          fc: 13
        }, {
          lngs: ["kw"],
          nr: [1, 2, 3, 4],
          fc: 14
        }, {
          lngs: ["lt"],
          nr: [1, 2, 10],
          fc: 15
        }, {
          lngs: ["lv"],
          nr: [1, 2, 0],
          fc: 16
        }, {
          lngs: ["mk"],
          nr: [1, 2],
          fc: 17
        }, {
          lngs: ["mnk"],
          nr: [0, 1, 2],
          fc: 18
        }, {
          lngs: ["mt"],
          nr: [1, 2, 11, 20],
          fc: 19
        }, {
          lngs: ["or"],
          nr: [2, 1],
          fc: 2
        }, {
          lngs: ["ro"],
          nr: [1, 2, 20],
          fc: 20
        }, {
          lngs: ["sl"],
          nr: [5, 1, 2, 3],
          fc: 21
        }, {
          lngs: ["he", "iw"],
          nr: [1, 2, 20, 21],
          fc: 22
        }],
        Y = {
          1: function(e) {
            return Number(e > 1)
          },
          2: function(e) {
            return Number(1 != e)
          },
          3: function(e) {
            return 0
          },
          4: function(e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
          },
          5: function(e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
          },
          6: function(e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
          },
          7: function(e) {
            return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
          },
          8: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
          },
          9: function(e) {
            return Number(e >= 2)
          },
          10: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
          },
          11: function(e) {
            return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
          },
          12: function(e) {
            return Number(e % 10 != 1 || e % 100 == 11)
          },
          13: function(e) {
            return Number(0 !== e)
          },
          14: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
          },
          15: function(e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
          },
          16: function(e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
          },
          17: function(e) {
            return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
          },
          18: function(e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2)
          },
          19: function(e) {
            return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
          },
          20: function(e) {
            return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
          },
          21: function(e) {
            return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
          },
          22: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
          }
        },
        J = ["v1", "v2", "v3"],
        Q = ["v4"],
        X = {
          zero: 0,
          one: 1,
          two: 2,
          few: 3,
          many: 4,
          other: 5
        };
      class ee {
        constructor(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.languageUtils = e, this.options = t, this.logger = _.create("pluralResolver"), (!this.options.compatibilityJSON || Q.includes(this.options.compatibilityJSON)) && ("undefined" == typeof Intl || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = function() {
            let e = {};
            return Z.forEach(t => {
              t.lngs.forEach(n => {
                e[n] = {
                  numbers: t.nr,
                  plurals: Y[t.fc]
                }
              })
            }), e
          }()
        }
        addRule(e, t) {
          this.rules[e] = t
        }
        getRule(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.shouldUseIntlApi()) try {
            return new Intl.PluralRules(W("dev" === e ? "en" : e), {
              type: t.ordinal ? "ordinal" : "cardinal"
            })
          } catch (e) {
            return
          }
          return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
        }
        needsPlural(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = this.getRule(e, t);
          return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
        }
        getPluralFormsOfKey(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.getSuffixes(e, n).map(e => `${t}${e}`)
        }
        getSuffixes(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = this.getRule(e, t);
          return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((e, t) => X[e] - X[t]).map(e => `${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`) : n.numbers.map(n => this.getSuffix(e, n, t)) : []
        }
        getSuffix(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = this.getRule(e, n);
          return r ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}` : this.getSuffixRetroCompatible(r, t) : (this.logger.warn(`no plural rule found for: ${e}`), "")
        }
        getSuffixRetroCompatible(e, t) {
          let n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
            r = e.numbers[n];
          this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = ""));
          let i = () => this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
          return "v1" === this.options.compatibilityJSON ? 1 === r ? "" : "number" == typeof r ? `_plural_${r.toString()}` : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? i() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
        }
        shouldUseIntlApi() {
          return !J.includes(this.options.compatibilityJSON)
        }
      }

      function et(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
          i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          o = function(e, t, n) {
            let r = M(e, n);
            return void 0 !== r ? r : M(t, n)
          }(e, t, n);
        return !o && i && "string" == typeof n && void 0 === (o = V(e, n, r)) && (o = V(t, n, r)), o
      }
      class en {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.logger = _.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || (e => e), this.init(e)
        }
        init() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.interpolation || (e.interpolation = {
            escapeValue: !0
          });
          let t = e.interpolation;
          this.escape = void 0 !== t.escape ? t.escape : I, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? N(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? N(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? N(t.nestingPrefix) : t.nestingPrefixEscaped || N("$t("), this.nestingSuffix = t.nestingSuffix ? N(t.nestingSuffix) : t.nestingSuffixEscaped || N(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
        }
        reset() {
          this.options && this.init(this.options)
        }
        resetRegExp() {
          let e = (e, t) => e && e.source === t ? (e.lastIndex = 0, e) : RegExp(t, "g");
          this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
        }
        interpolate(e, t, n, r) {
          let i, o, a;
          let s = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

          function l(e) {
            return e.replace(/\$/g, "$$$$")
          }
          let c = e => {
            if (0 > e.indexOf(this.formatSeparator)) {
              let i = et(t, s, e, this.options.keySeparator, this.options.ignoreJSONStructure);
              return this.alwaysFormat ? this.format(i, void 0, n, {
                ...r,
                ...t,
                interpolationkey: e
              }) : i
            }
            let i = e.split(this.formatSeparator),
              o = i.shift().trim(),
              a = i.join(this.formatSeparator).trim();
            return this.format(et(t, s, o, this.options.keySeparator, this.options.ignoreJSONStructure), a, n, {
              ...r,
              ...t,
              interpolationkey: o
            })
          };
          this.resetRegExp();
          let u = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler,
            d = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
          return [{
            regex: this.regexpUnescape,
            safeValue: e => l(e)
          }, {
            regex: this.regexp,
            safeValue: e => this.escapeValue ? l(this.escape(e)) : l(e)
          }].forEach(t => {
            for (a = 0; i = t.regex.exec(e);) {
              let n = i[1].trim();
              if (void 0 === (o = c(n))) {
                if ("function" == typeof u) {
                  let t = u(e, i, r);
                  o = "string" == typeof t ? t : ""
                } else if (r && Object.prototype.hasOwnProperty.call(r, n)) o = "";
                else if (d) {
                  o = i[0];
                  continue
                } else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`), o = ""
              } else "string" == typeof o || this.useRawValueToEscape || (o = P(o));
              let s = t.safeValue(o);
              if (e = e.replace(i[0], s), d ? (t.regex.lastIndex += o.length, t.regex.lastIndex -= i[0].length) : t.regex.lastIndex = 0, ++a >= this.maxReplaces) break
            }
          }), e
        }
        nest(e, t) {
          let n, r, i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};

          function a(e, t) {
            let n = this.nestingOptionsSeparator;
            if (0 > e.indexOf(n)) return e;
            let r = e.split(RegExp(`${n}[ ]*{`)),
              o = `{${r[1]}`;
            e = r[0];
            let a = (o = this.interpolate(o, i)).match(/'/g),
              s = o.match(/"/g);
            (a && a.length % 2 == 0 && !s || s.length % 2 != 0) && (o = o.replace(/'/g, '"'));
            try {
              i = JSON.parse(o), t && (i = {
                ...t,
                ...i
              })
            } catch (t) {
              return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${n}${o}`
            }
            return delete i.defaultValue, e
          }
          for (; n = this.nestingRegexp.exec(e);) {
            let s = [];
            (i = (i = {
              ...o
            }).replace && "string" != typeof i.replace ? i.replace : i).applyPostProcessor = !1, delete i.defaultValue;
            let l = !1;
            if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
              let e = n[1].split(this.formatSeparator).map(e => e.trim());
              n[1] = e.shift(), s = e, l = !0
            }
            if ((r = t(a.call(this, n[1].trim(), i), i)) && n[0] === e && "string" != typeof r) return r;
            "string" != typeof r && (r = P(r)), r || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), r = ""), l && (r = s.reduce((e, t) => this.format(e, t, o.lng, {
              ...o,
              interpolationkey: n[1].trim()
            }), r.trim())), e = e.replace(n[0], r), this.regexp.lastIndex = 0
          }
          return e
        }
      }

      function er(e) {
        let t = {};
        return function(n, r, i) {
          let o = r + JSON.stringify(i),
            a = t[o];
          return a || (a = e(W(r), i), t[o] = a), a(n)
        }
      }
      class ei {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.logger = _.create("formatter"), this.options = e, this.formats = {
            number: er((e, t) => {
              let n = new Intl.NumberFormat(e, {
                ...t
              });
              return e => n.format(e)
            }),
            currency: er((e, t) => {
              let n = new Intl.NumberFormat(e, {
                ...t,
                style: "currency"
              });
              return e => n.format(e)
            }),
            datetime: er((e, t) => {
              let n = new Intl.DateTimeFormat(e, {
                ...t
              });
              return e => n.format(e)
            }),
            relativetime: er((e, t) => {
              let n = new Intl.RelativeTimeFormat(e, {
                ...t
              });
              return e => n.format(e, t.range || "day")
            }),
            list: er((e, t) => {
              let n = new Intl.ListFormat(e, {
                ...t
              });
              return e => n.format(e)
            })
          }, this.init(e)
        }
        init(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
              interpolation: {}
            },
            n = t.interpolation;
          this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
        }
        add(e, t) {
          this.formats[e.toLowerCase().trim()] = t
        }
        addCached(e, t) {
          this.formats[e.toLowerCase().trim()] = er(t)
        }
        format(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return t.split(this.formatSeparator).reduce((e, t) => {
            let {
              formatName: i,
              formatOptions: o
            } = function(e) {
              let t = e.toLowerCase().trim(),
                n = {};
              if (e.indexOf("(") > -1) {
                let r = e.split("(");
                t = r[0].toLowerCase().trim();
                let i = r[1].substring(0, r[1].length - 1);
                "currency" === t && 0 > i.indexOf(":") ? n.currency || (n.currency = i.trim()) : "relativetime" === t && 0 > i.indexOf(":") ? n.range || (n.range = i.trim()) : i.split(";").forEach(e => {
                  if (!e) return;
                  let [t, ...r] = e.split(":"), i = r.join(":").trim().replace(/^'+|'+$/g, "");
                  n[t.trim()] || (n[t.trim()] = i), "false" === i && (n[t.trim()] = !1), "true" === i && (n[t.trim()] = !0), isNaN(i) || (n[t.trim()] = parseInt(i, 10))
                })
              }
              return {
                formatName: t,
                formatOptions: n
              }
            }(t);
            if (this.formats[i]) {
              let t = e;
              try {
                let a = r && r.formatParams && r.formatParams[r.interpolationkey] || {},
                  s = a.locale || a.lng || r.locale || r.lng || n;
                t = this.formats[i](e, s, {
                  ...o,
                  ...r,
                  ...a
                })
              } catch (e) {
                this.logger.warn(e)
              }
              return t
            }
            return this.logger.warn(`there was no format function for ${i}`), e
          }, e)
        }
      }
      class eo extends T {
        constructor(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = r, this.logger = _.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, r.backend, r)
        }
        queueLoad(e, t, n, r) {
          let i = {},
            o = {},
            a = {},
            s = {};
          return e.forEach(e => {
            let r = !0;
            t.forEach(t => {
              let a = `${e}|${t}`;
              !n.reload && this.store.hasResourceBundle(e, t) ? this.state[a] = 2 : this.state[a] < 0 || (1 === this.state[a] ? void 0 === o[a] && (o[a] = !0) : (this.state[a] = 1, r = !1, void 0 === o[a] && (o[a] = !0), void 0 === i[a] && (i[a] = !0), void 0 === s[t] && (s[t] = !0)))
            }), r || (a[e] = !0)
          }), (Object.keys(i).length || Object.keys(o).length) && this.queue.push({
            pending: o,
            pendingCount: Object.keys(o).length,
            loaded: {},
            errors: [],
            callback: r
          }), {
            toLoad: Object.keys(i),
            pending: Object.keys(o),
            toLoadLanguages: Object.keys(a),
            toLoadNamespaces: Object.keys(s)
          }
        }
        loaded(e, t, n) {
          let r = e.split("|"),
            i = r[0],
            o = r[1];
          t && this.emit("failedLoading", i, o, t), n && this.store.addResourceBundle(i, o, n, void 0, void 0, {
            skipCopy: !0
          }), this.state[e] = t ? -1 : 2;
          let a = {};
          this.queue.forEach(n => {
            (function(e, t, n, r) {
              let {
                obj: i,
                k: o
              } = j(e, t, Object);
              i[o] = i[o] || [], r && (i[o] = i[o].concat(n)), r || i[o].push(n)
            })(n.loaded, [i], o), void 0 !== n.pending[e] && (delete n.pending[e], n.pendingCount--), t && n.errors.push(t), 0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach(e => {
              a[e] || (a[e] = {});
              let t = n.loaded[e];
              t.length && t.forEach(t => {
                void 0 === a[e][t] && (a[e][t] = !0)
              })
            }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
          }), this.emit("loaded", a), this.queue = this.queue.filter(e => !e.done)
        }
        read(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
            o = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return o(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng: e,
              ns: t,
              fcName: n,
              tried: r,
              wait: i,
              callback: o
            });
            return
          }
          this.readingCalls++;
          let a = (a, s) => {
              if (this.readingCalls--, this.waitingReads.length > 0) {
                let e = this.waitingReads.shift();
                this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
              }
              if (a && s && r < this.maxRetries) {
                setTimeout(() => {
                  this.read.call(this, e, t, n, r + 1, 2 * i, o)
                }, i);
                return
              }
              o(a, s)
            },
            s = this.backend[n].bind(this.backend);
          if (2 === s.length) {
            try {
              let n = s(e, t);
              n && "function" == typeof n.then ? n.then(e => a(null, e)).catch(a) : a(null, n)
            } catch (e) {
              a(e)
            }
            return
          }
          return s(e, t, a)
        }
        prepareLoading(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
          "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
          let i = this.queueLoad(e, t, n, r);
          if (!i.toLoad.length) return i.pending.length || r(), null;
          i.toLoad.forEach(e => {
            this.loadOne(e)
          })
        }
        load(e, t, n) {
          this.prepareLoading(e, t, {}, n)
        }
        reload(e, t, n) {
          this.prepareLoading(e, t, {
            reload: !0
          }, n)
        }
        loadOne(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = e.split("|"),
            r = n[0],
            i = n[1];
          this.read(r, i, "read", void 0, void 0, (n, o) => {
            n && this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`, n), !n && o && this.logger.log(`${t}loaded namespace ${i} for language ${r}`, o), this.loaded(e, n, o)
          })
        }
        saveMissing(e, t, n, r, i) {
          let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {};
          if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
            this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
          }
          if (null != n && "" !== n) {
            if (this.backend && this.backend.create) {
              let s = {
                  ...o,
                  isUpdate: i
                },
                l = this.backend.create.bind(this.backend);
              if (l.length < 6) try {
                let i;
                (i = 5 === l.length ? l(e, t, n, r, s) : l(e, t, n, r)) && "function" == typeof i.then ? i.then(e => a(null, e)).catch(a) : a(null, i)
              } catch (e) {
                a(e)
              } else l(e, t, n, r, a, s)
            }
            e && e[0] && this.store.addResource(e[0], t, n, r)
          }
        }
      }

      function ea() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !1,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function(e) {
            let t = {};
            if ("object" == typeof e[1] && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" == typeof e[2] || "object" == typeof e[3]) {
              let n = e[3] || e[2];
              Object.keys(n).forEach(e => {
                t[e] = n[e]
              })
            }
            return t
          },
          interpolation: {
            escapeValue: !0,
            format: e => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
          }
        }
      }

      function es(e) {
        return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && 0 > e.supportedLngs.indexOf("cimode") && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
      }

      function el() {}
      class ec extends T {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (super(), this.options = es(e), this.services = {}, this.logger = _, this.modules = {
              external: []
            }, ! function(e) {
              Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t => {
                "function" == typeof e[t] && (e[t] = e[t].bind(e))
              })
            }(this), t && !this.isInitialized && !e.isClone) {
            if (!this.options.initImmediate) return this.init(e, t), this;
            setTimeout(() => {
              this.init(e, t)
            }, 0)
          }
        }
        init() {
          var e = this;
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
          this.isInitializing = !0, "function" == typeof t && (n = t, t = {}), !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" == typeof t.ns ? t.defaultNS = t.ns : 0 > t.ns.indexOf("translation") && (t.defaultNS = t.ns[0]));
          let r = ea();

          function i(e) {
            return e ? "function" == typeof e ? new e : e : null
          }
          if (this.options = {
              ...r,
              ...this.options,
              ...es(t)
            }, "v1" !== this.options.compatibilityAPI && (this.options.interpolation = {
              ...r.interpolation,
              ...this.options.interpolation
            }), void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator), void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator), !this.options.isClone) {
            let t;
            this.modules.logger ? _.init(i(this.modules.logger), this.options) : _.init(null, this.options), this.modules.formatter ? t = this.modules.formatter : "undefined" != typeof Intl && (t = ei);
            let n = new q(this.options);
            this.store = new F(this.options.resources, this.options);
            let o = this.services;
            o.logger = _, o.resourceStore = this.store, o.languageUtils = n, o.pluralResolver = new ee(n, {
              prepend: this.options.pluralSeparator,
              compatibilityJSON: this.options.compatibilityJSON,
              simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }), t && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (o.formatter = i(t), o.formatter.init(o, this.options), this.options.interpolation.format = o.formatter.format.bind(o.formatter)), o.interpolator = new en(this.options), o.utils = {
              hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            }, o.backendConnector = new eo(i(this.modules.backend), o.resourceStore, o, this.options), o.backendConnector.on("*", function(t) {
              for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
              e.emit(t, ...r)
            }), this.modules.languageDetector && (o.languageDetector = i(this.modules.languageDetector), o.languageDetector.init && o.languageDetector.init(o, this.options.detection, this.options)), this.modules.i18nFormat && (o.i18nFormat = i(this.modules.i18nFormat), o.i18nFormat.init && o.i18nFormat.init(this)), this.translator = new K(this.services, this.options), this.translator.on("*", function(t) {
              for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
              e.emit(t, ...r)
            }), this.modules.external.forEach(e => {
              e.init && e.init(this)
            })
          }
          if (this.format = this.options.interpolation.format, n || (n = el), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
          }
          this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(t => {
            this[t] = function() {
              return e.store[t](...arguments)
            }
          }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(t => {
            this[t] = function() {
              return e.store[t](...arguments), e
            }
          });
          let o = A(),
            a = () => {
              let e = (e, t) => {
                this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), o.resolve(t), n(e, t)
              };
              if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized) return e(null, this.t.bind(this));
              this.changeLanguage(this.options.lng, e)
            };
          return this.options.resources || !this.options.initImmediate ? a() : setTimeout(a, 0), o
        }
        loadResources(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el,
            n = t,
            r = "string" == typeof e ? e : this.language;
          if ("function" == typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
            if (r && "cimode" === r.toLowerCase() && (!this.options.preload || 0 === this.options.preload.length)) return n();
            let e = [],
              t = t => {
                t && "cimode" !== t && this.services.languageUtils.toResolveHierarchy(t).forEach(t => {
                  "cimode" !== t && 0 > e.indexOf(t) && e.push(t)
                })
              };
            r ? t(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e => t(e)), this.options.preload && this.options.preload.forEach(e => t(e)), this.services.backendConnector.load(e, this.options.ns, e => {
              e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), n(e)
            })
          } else n(null)
        }
        reloadResources(e, t, n) {
          let r = A();
          return e || (e = this.languages), t || (t = this.options.ns), n || (n = el), this.services.backendConnector.reload(e, t, e => {
            r.resolve(), n(e)
          }), r
        }
        use(e) {
          if (!e) throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
          if (!e.type) throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
          return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && G.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
        }
        setResolvedLanguage(e) {
          if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
            for (let e = 0; e < this.languages.length; e++) {
              let t = this.languages[e];
              if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                this.resolvedLanguage = t;
                break
              }
            }
        }
        changeLanguage(e, t) {
          var n = this;
          this.isLanguageChangingTo = e;
          let r = A();
          this.emit("languageChanging", e);
          let i = e => {
              this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e)
            },
            o = (e, o) => {
              o ? (i(o), this.translator.changeLanguage(o), this.isLanguageChangingTo = void 0, this.emit("languageChanged", o), this.logger.log("languageChanged", o)) : this.isLanguageChangingTo = void 0, r.resolve(function() {
                return n.t(...arguments)
              }), t && t(e, function() {
                return n.t(...arguments)
              })
            },
            a = t => {
              e || t || !this.services.languageDetector || (t = []);
              let n = "string" == typeof t ? t : this.services.languageUtils.getBestMatchFromCodes(t);
              n && (this.language || i(n), this.translator.language || this.translator.changeLanguage(n), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(n)), this.loadResources(n, e => {
                o(e, n)
              })
            };
          return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e) : a(this.services.languageDetector.detect()), r
        }
        getFixedT(e, t, n) {
          var r = this;
          let i = function(e, t) {
            let o, a;
            if ("object" != typeof t) {
              for (var s = arguments.length, l = Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++) l[c - 2] = arguments[c];
              o = r.options.overloadTranslationOptionHandler([e, t].concat(l))
            } else o = {
              ...t
            };
            o.lng = o.lng || i.lng, o.lngs = o.lngs || i.lngs, o.ns = o.ns || i.ns, o.keyPrefix = o.keyPrefix || n || i.keyPrefix;
            let u = r.options.keySeparator || ".";
            return a = o.keyPrefix && Array.isArray(e) ? e.map(e => `${o.keyPrefix}${u}${e}`) : o.keyPrefix ? `${o.keyPrefix}${u}${e}` : e, r.t(a, o)
          };
          return "string" == typeof e ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = n, i
        }
        t() {
          return this.translator && this.translator.translate(...arguments)
        }
        exists() {
          return this.translator && this.translator.exists(...arguments)
        }
        setDefaultNamespace(e) {
          this.options.defaultNS = e
        }
        hasLoadedNamespace(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
          if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
          let n = t.lng || this.resolvedLanguage || this.languages[0],
            r = !!this.options && this.options.fallbackLng,
            i = this.languages[this.languages.length - 1];
          if ("cimode" === n.toLowerCase()) return !0;
          let o = (e, t) => {
            let n = this.services.backendConnector.state[`${e}|${t}`];
            return -1 === n || 2 === n
          };
          if (t.precheck) {
            let e = t.precheck(this, o);
            if (void 0 !== e) return e
          }
          return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(n, e) && (!r || o(i, e)))
        }
        loadNamespaces(e, t) {
          let n = A();
          return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(e => {
            0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
          }), this.loadResources(e => {
            n.resolve(), t && t(e)
          }), n) : (t && t(), Promise.resolve())
        }
        loadLanguages(e, t) {
          let n = A();
          "string" == typeof e && (e = [e]);
          let r = this.options.preload || [],
            i = e.filter(e => 0 > r.indexOf(e));
          return i.length ? (this.options.preload = r.concat(i), this.loadResources(e => {
            n.resolve(), t && t(e)
          }), n) : (t && t(), Promise.resolve())
        }
        dir(e) {
          return (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), e) ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf((this.services && this.services.languageUtils || new q(ea())).getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr" : "rtl"
        }
        static createInstance() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return new ec(e, t)
        }
        cloneInstance() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : el,
            n = e.forkResourceStore;
          n && delete e.forkResourceStore;
          let r = {
              ...this.options,
              ...e,
              isClone: !0
            },
            i = new ec(r);
          return (void 0 !== e.debug || void 0 !== e.prefix) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach(e => {
            i[e] = this[e]
          }), i.services = {
            ...this.services
          }, i.services.utils = {
            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
          }, n && (i.store = new F(this.store.data, r), i.services.resourceStore = i.store), i.translator = new K(i.services, r), i.translator.on("*", function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            i.emit(e, ...n)
          }), i.init(r, t), i.translator.options = r, i.translator.backendConnector.services.utils = {
            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
          }, i
        }
        toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
          }
        }
      }
      let eu = ec.createInstance();
      eu.createInstance = ec.createInstance, eu.createInstance, eu.dir, eu.init, eu.loadResources, eu.reloadResources, eu.use, eu.changeLanguage, eu.getFixedT, eu.t, eu.exists, eu.setDefaultNamespace, eu.hasLoadedNamespace, eu.loadNamespaces, eu.loadLanguages;
      var ed = function(e) {
          void 0 === e.ns && (e.ns = []);
          var t, n, r = eu.createInstance(e);
          return r.isInitialized ? t = Promise.resolve(eu.t) : (null == e || null === (n = e.use) || void 0 === n || n.forEach(function(e) {
            return r.use(e)
          }), "function" == typeof e.onPreInitI18next && e.onPreInitI18next(r), t = r.init(e)), {
            i18n: r,
            initPromise: t
          }
        },
        ep = o.createElement;

      function eh(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function ef(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? eh(Object(n), !0).forEach(function(t) {
            (0, i.Z)(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eh(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      var eg = function(e, t) {
          if (t && e.isInitialized)
            for (var n = 0, r = Object.keys(t); n < r.length; n++)
              for (var i = r[n], o = 0, a = Object.keys(t[i]); o < a.length; o++) {
                var s, l = a[o];
                null != e && null !== (s = e.store) && void 0 !== s && s.data && e.store.data[i] && e.store.data[i][l] || e.addResourceBundle(i, l, t[i][l], !0, !0)
              }
        },
        em = n(7041),
        ey = n(4173),
        eb = n(2959),
        ev = n(6139),
        ew = n(9195),
        ex = n(5007),
        ek = e => {
          let {
            children: t,
            initialReduxState: n,
            clientSideDispatches: r
          } = e, i = (0, o.useRef)();
          return i.current || (i.current = (0, ew.h)(n)), r.length && r.forEach(e => i.current.dispatch(e)), o.createElement(ex.zt, {
            store: i.current
          }, t)
        },
        eC = n(9008),
        eS = n.n(eC);

      function eE() {
        return (eE = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
      }

      function eO(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }
      var e_ = ["keyOverride"],
        eT = ["crossOrigin"],
        eA = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          norobots: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0
        },
        eP = function(e, t, n) {
          void 0 === t && (t = []);
          var r = void 0 === n ? {} : n,
            i = r.defaultWidth,
            a = r.defaultHeight;
          return t.reduce(function(t, n, r) {
            return t.push(o.createElement("meta", {
              key: "og:" + e + ":0" + r,
              property: "og:" + e,
              content: n.url
            })), n.alt && t.push(o.createElement("meta", {
              key: "og:" + e + ":alt0" + r,
              property: "og:" + e + ":alt",
              content: n.alt
            })), n.secureUrl && t.push(o.createElement("meta", {
              key: "og:" + e + ":secure_url0" + r,
              property: "og:" + e + ":secure_url",
              content: n.secureUrl.toString()
            })), n.type && t.push(o.createElement("meta", {
              key: "og:" + e + ":type0" + r,
              property: "og:" + e + ":type",
              content: n.type.toString()
            })), n.width ? t.push(o.createElement("meta", {
              key: "og:" + e + ":width0" + r,
              property: "og:" + e + ":width",
              content: n.width.toString()
            })) : i && t.push(o.createElement("meta", {
              key: "og:" + e + ":width0" + r,
              property: "og:" + e + ":width",
              content: i.toString()
            })), n.height ? t.push(o.createElement("meta", {
              key: "og:" + e + ":height" + r,
              property: "og:" + e + ":height",
              content: n.height.toString()
            })) : a && t.push(o.createElement("meta", {
              key: "og:" + e + ":height" + r,
              property: "og:" + e + ":height",
              content: a.toString()
            })), t
          }, [])
        },
        eR = function(e) {
          var t, n, r, i, a, s = [];
          e.titleTemplate && (eA.templateTitle = e.titleTemplate);
          var l = "";
          e.title ? (l = e.title, eA.templateTitle && (l = eA.templateTitle.replace(/%s/g, function() {
            return l
          }))) : e.defaultTitle && (l = e.defaultTitle), l && s.push(o.createElement("title", {
            key: "title"
          }, l));
          var c = void 0 === e.noindex ? eA.noindex || e.dangerouslySetAllPagesToNoIndex : e.noindex,
            u = void 0 === e.nofollow ? eA.nofollow || e.dangerouslySetAllPagesToNoFollow : e.nofollow,
            d = e.norobots || eA.norobots,
            p = "";
          if (e.robotsProps) {
            var h = e.robotsProps,
              f = h.nosnippet,
              g = h.maxSnippet,
              m = h.maxImagePreview,
              y = h.maxVideoPreview,
              b = h.noarchive,
              v = h.noimageindex,
              w = h.notranslate,
              x = h.unavailableAfter;
            p = (f ? ",nosnippet" : "") + (g ? ",max-snippet:" + g : "") + (m ? ",max-image-preview:" + m : "") + (b ? ",noarchive" : "") + (x ? ",unavailable_after:" + x : "") + (v ? ",noimageindex" : "") + (y ? ",max-video-preview:" + y : "") + (w ? ",notranslate" : "")
          }
          if (e.norobots && (eA.norobots = !0), c || u ? (e.dangerouslySetAllPagesToNoIndex && (eA.noindex = !0), e.dangerouslySetAllPagesToNoFollow && (eA.nofollow = !0), s.push(o.createElement("meta", {
              key: "robots",
              name: "robots",
              content: (c ? "noindex" : "index") + "," + (u ? "nofollow" : "follow") + p
            }))) : (!d || p) && s.push(o.createElement("meta", {
              key: "robots",
              name: "robots",
              content: "index,follow" + p
            })), e.description && s.push(o.createElement("meta", {
              key: "description",
              name: "description",
              content: e.description
            })), e.themeColor && s.push(o.createElement("meta", {
              key: "theme-color",
              name: "theme-color",
              content: e.themeColor
            })), e.mobileAlternate && s.push(o.createElement("link", {
              rel: "alternate",
              key: "mobileAlternate",
              media: e.mobileAlternate.media,
              href: e.mobileAlternate.href
            })), e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach(function(e) {
              s.push(o.createElement("link", {
                rel: "alternate",
                key: "languageAlternate-" + e.hrefLang,
                hrefLang: e.hrefLang,
                href: e.href
              }))
            }), e.twitter && (e.twitter.cardType && s.push(o.createElement("meta", {
              key: "twitter:card",
              name: "twitter:card",
              content: e.twitter.cardType
            })), e.twitter.site && s.push(o.createElement("meta", {
              key: "twitter:site",
              name: "twitter:site",
              content: e.twitter.site
            })), e.twitter.handle && s.push(o.createElement("meta", {
              key: "twitter:creator",
              name: "twitter:creator",
              content: e.twitter.handle
            }))), e.facebook && e.facebook.appId && s.push(o.createElement("meta", {
              key: "fb:app_id",
              property: "fb:app_id",
              content: e.facebook.appId
            })), (null != (t = e.openGraph) && t.title || l) && s.push(o.createElement("meta", {
              key: "og:title",
              property: "og:title",
              content: (null == (i = e.openGraph) ? void 0 : i.title) || l
            })), (null != (n = e.openGraph) && n.description || e.description) && s.push(o.createElement("meta", {
              key: "og:description",
              property: "og:description",
              content: (null == (a = e.openGraph) ? void 0 : a.description) || e.description
            })), e.openGraph) {
            if ((e.openGraph.url || e.canonical) && s.push(o.createElement("meta", {
                key: "og:url",
                property: "og:url",
                content: e.openGraph.url || e.canonical
              })), e.openGraph.type) {
              var k = e.openGraph.type.toLowerCase();
              s.push(o.createElement("meta", {
                key: "og:type",
                property: "og:type",
                content: k
              })), "profile" === k && e.openGraph.profile ? (e.openGraph.profile.firstName && s.push(o.createElement("meta", {
                key: "profile:first_name",
                property: "profile:first_name",
                content: e.openGraph.profile.firstName
              })), e.openGraph.profile.lastName && s.push(o.createElement("meta", {
                key: "profile:last_name",
                property: "profile:last_name",
                content: e.openGraph.profile.lastName
              })), e.openGraph.profile.username && s.push(o.createElement("meta", {
                key: "profile:username",
                property: "profile:username",
                content: e.openGraph.profile.username
              })), e.openGraph.profile.gender && s.push(o.createElement("meta", {
                key: "profile:gender",
                property: "profile:gender",
                content: e.openGraph.profile.gender
              }))) : "book" === k && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach(function(e, t) {
                s.push(o.createElement("meta", {
                  key: "book:author:0" + t,
                  property: "book:author",
                  content: e
                }))
              }), e.openGraph.book.isbn && s.push(o.createElement("meta", {
                key: "book:isbn",
                property: "book:isbn",
                content: e.openGraph.book.isbn
              })), e.openGraph.book.releaseDate && s.push(o.createElement("meta", {
                key: "book:release_date",
                property: "book:release_date",
                content: e.openGraph.book.releaseDate
              })), e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach(function(e, t) {
                s.push(o.createElement("meta", {
                  key: "book:tag:0" + t,
                  property: "book:tag",
                  content: e
                }))
              })) : "article" === k && e.openGraph.article ? (e.openGraph.article.publishedTime && s.push(o.createElement("meta", {
                key: "article:published_time",
                property: "article:published_time",
                content: e.openGraph.article.publishedTime
              })), e.openGraph.article.modifiedTime && s.push(o.createElement("meta", {
                key: "article:modified_time",
                property: "article:modified_time",
                content: e.openGraph.article.modifiedTime
              })), e.openGraph.article.expirationTime && s.push(o.createElement("meta", {
                key: "article:expiration_time",
                property: "article:expiration_time",
                content: e.openGraph.article.expirationTime
              })), e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach(function(e, t) {
                s.push(o.createElement("meta", {
                  key: "article:author:0" + t,
                  property: "article:author",
                  content: e
                }))
              }), e.openGraph.article.section && s.push(o.createElement("meta", {
                key: "article:section",
                property: "article:section",
                content: e.openGraph.article.section
              })), e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach(function(e, t) {
                s.push(o.createElement("meta", {
                  key: "article:tag:0" + t,
                  property: "article:tag",
                  content: e
                }))
              })) : ("video.movie" === k || "video.episode" === k || "video.tv_show" === k || "video.other" === k) && e.openGraph.video && (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach(function(e, t) {
                e.profile && s.push(o.createElement("meta", {
                  key: "video:actor:0" + t,
                  property: "video:actor",
                  content: e.profile
                })), e.role && s.push(o.createElement("meta", {
                  key: "video:actor:role:0" + t,
                  property: "video:actor:role",
                  content: e.role
                }))
              }), e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach(function(e, t) {
                s.push(o.createElement("meta", {
                  key: "video:director:0" + t,
                  property: "video:director",
                  content: e
                }))
              }), e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach(function(e, t) {
                s.push(o.createElement("meta", {
                  key: "video:writer:0" + t,
                  property: "video:writer",
                  content: e
                }))
              }), e.openGraph.video.duration && s.push(o.createElement("meta", {
                key: "video:duration",
                property: "video:duration",
                content: e.openGraph.video.duration.toString()
              })), e.openGraph.video.releaseDate && s.push(o.createElement("meta", {
                key: "video:release_date",
                property: "video:release_date",
                content: e.openGraph.video.releaseDate
              })), e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach(function(e, t) {
                s.push(o.createElement("meta", {
                  key: "video:tag:0" + t,
                  property: "video:tag",
                  content: e
                }))
              }), e.openGraph.video.series && s.push(o.createElement("meta", {
                key: "video:series",
                property: "video:series",
                content: e.openGraph.video.series
              })))
            }
            e.defaultOpenGraphImageWidth && (eA.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth), e.defaultOpenGraphImageHeight && (eA.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight), e.openGraph.images && e.openGraph.images.length && s.push.apply(s, eP("image", e.openGraph.images, {
              defaultWidth: eA.defaultOpenGraphImageWidth,
              defaultHeight: eA.defaultOpenGraphImageHeight
            })), e.defaultOpenGraphVideoWidth && (eA.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth), e.defaultOpenGraphVideoHeight && (eA.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight), e.openGraph.videos && e.openGraph.videos.length && s.push.apply(s, eP("video", e.openGraph.videos, {
              defaultWidth: eA.defaultOpenGraphVideoWidth,
              defaultHeight: eA.defaultOpenGraphVideoHeight
            })), e.openGraph.audio && s.push.apply(s, eP("audio", e.openGraph.audio)), e.openGraph.locale && s.push(o.createElement("meta", {
              key: "og:locale",
              property: "og:locale",
              content: e.openGraph.locale
            })), (e.openGraph.siteName || e.openGraph.site_name) && s.push(o.createElement("meta", {
              key: "og:site_name",
              property: "og:site_name",
              content: e.openGraph.siteName || e.openGraph.site_name
            }))
          }
          return e.canonical && s.push(o.createElement("link", {
            rel: "canonical",
            href: e.canonical,
            key: "canonical"
          })), e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach(function(e) {
            var t, n, r = e.keyOverride,
              i = eO(e, e_);
            s.push(o.createElement("meta", eE({
              key: "meta:" + (null != (t = null != (n = null != r ? r : i.name) ? n : i.property) ? t : i.httpEquiv)
            }, i)))
          }), null != (r = e.additionalLinkTags) && r.length && e.additionalLinkTags.forEach(function(e) {
            var t, n = e.crossOrigin,
              r = eO(e, eT);
            s.push(o.createElement("link", eE({
              key: "link" + (null != (t = r.keyOverride) ? t : r.href) + r.rel
            }, r, {
              crossOrigin: "anonymous" === n || "use-credentials" === n || "" === n ? n : void 0
            })))
          }), s
        },
        ej = function(e) {
          return o.createElement(eS(), null, eR(e))
        },
        eL = function(e) {
          var t = e.title,
            n = e.themeColor,
            r = e.noindex,
            i = e.nofollow,
            a = e.robotsProps,
            s = e.description,
            l = e.canonical,
            c = e.openGraph,
            u = e.facebook,
            d = e.twitter,
            p = e.additionalMetaTags,
            h = e.titleTemplate,
            f = e.defaultTitle,
            g = e.mobileAlternate,
            m = e.languageAlternates,
            y = e.additionalLinkTags;
          return o.createElement(o.Fragment, null, o.createElement(ej, {
            title: t,
            themeColor: n,
            noindex: r,
            nofollow: i,
            robotsProps: a,
            description: s,
            canonical: l,
            facebook: u,
            openGraph: c,
            additionalMetaTags: p,
            twitter: d,
            titleTemplate: h,
            defaultTitle: f,
            mobileAlternate: g,
            languageAlternates: m,
            additionalLinkTags: y
          }))
        };
      RegExp("[" + Object.keys(Object.freeze({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
      })).join("") + "]", "g");
      var eM = e => {
          let {
            title: t,
            description: n,
            keywords: r,
            previewImg: i,
            canonical: a
          } = e;
          return o.createElement(eL, {
            title: t || "PAWS | Home",
            description: n || "Animals are done! It’s PAWS Season",
            canonical: a,
            openGraph: {
              type: "website",
              url: "".concat(a),
              title: "".concat(t || "PAWS | Home"),
              description: "".concat(n || "Animals are done! It’s PAWS Season"),
              images: [{
                url: "".concat(i || "".concat("https://paws.community", "/static/page-preview.png")),
                alt: "preview"
              }]
            },
            additionalMetaTags: [{
              httpEquiv: "X-UA-Compatible",
              content: "IE=edge"
            }, {
              name: "viewport",
              content: "width=device-width, user-scalable=no, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
            }, {
              name: "x-ua-compatible",
              content: "IE=edge; chrome=1"
            }, {
              name: "description",
              content: "".concat(n || "Animals are done! It’s PAWS Season")
            }, {
              name: "title",
              content: "".concat(t || "PAWS | Home")
            }, {
              name: "keywords",
              content: "!"
            }, {
              name: "twitter:image",
              content: "".concat(i || "".concat("https://paws.community", "/static/page-preview.png"))
            }, {
              property: "twitter:title",
              content: "PAWS"
            }, {
              property: "twitter:description",
              content: "Animals are done! It’s PAWS Season"
            }, {
              property: "application-name",
              content: "PAWS"
            }, {
              property: "apple-mobile-web-app-capable",
              content: "yes"
            }, {
              property: "apple-mobile-web-app-status-bar-style",
              content: "default"
            }, {
              property: "apple-mobile-web-app-title",
              content: "PAWS"
            }, {
              property: "format-detection",
              content: "telephone=no"
            }, {
              property: "mobile-web-app-capable",
              content: "yes"
            }, {
              property: "msapplication-config",
              content: "/icons/browserconfig.xml"
            }, {
              property: "msapplication-tap-highlight",
              content: "no"
            }, {
              property: "theme-color",
              content: "#0D0D0D"
            }, {
              property: "msapplication-TileImage",
              content: "/icons/144.png"
            }],
            additionalLinkTags: [{
              rel: "dns-prefetch",
              href: "https://fonts.googleapis.com"
            }, {
              rel: "preconnect",
              href: "https://www.google-analytics.com"
            }, {
              rel: "preconnect",
              href: "https://www.googletagmanager.com"
            }, {
              rel: "preconnect",
              href: "https://fonts.googleapis.com"
            }, {
              rel: "icon",
              href: "/favicon.ico"
            }, {
              rel: "icon",
              href: "/static/favicon-32x32.png",
              sizes: "32x32"
            }, {
              rel: "icon",
              href: "/icons/72.png",
              sizes: "72x72"
            }, {
              rel: "icon",
              href: "/icons/96.png",
              sizes: "96x96"
            }, {
              rel: "icon",
              href: "/icons/144.png",
              sizes: "144x144"
            }, {
              rel: "icon",
              href: "/icons/192.png",
              sizes: "192x192"
            }, {
              rel: "apple-touch-icon",
              href: "/icons/512.png",
              sizes: "512x512"
            }, {
              rel: "manifest",
              href: "/manifest.json"
            }],
            twitter: {
              site: "@pawsuplabs",
              cardType: "summary",
              card: "summary",
              creator: "@pawsuplabs"
            }
          })
        },
        eN = n(4298),
        eD = n.n(eN),
        eI = () => o.createElement("div", null, o.createElement(eD(), {
          async: !0,
          src: "https://scripts.simpleanalyticscdn.com/latest.js"
        }), o.createElement(eD(), {
          src: "https://www.google.com/recaptcha/enterprise.js",
          async: !0,
          defer: !0
        }));
      n(1522);
      var e$ = n(2894),
        eB = n(1163),
        eU = n(9155),
        eV = n(1513),
        eW = n(2725),
        eF = n(8922);
      let eG = ["Component"];
      var eH = e => {
        let {
          Component: t
        } = e, n = (0, m.Z)(e, eG), r = (0, ew.TL)(), {
          pathname: i
        } = (0, eB.useRouter)(), [a, s] = (0, o.useState)(!1), [l, c] = (0, o.useState)(!1), u = async () => {
          try {
            var e, t, n, i, o, a, l, u;
            let d = await (0, eU.Z)("/user/auth", {
                method: "POST",
                body: {
                  data: (0, eF.Z)(null === (e = window) || void 0 === e ? void 0 : null === (t = e.Telegram) || void 0 === t ? void 0 : null === (n = t.WebApp) || void 0 === n ? void 0 : n.initData),
                  referralCode: (null === (i = window) || void 0 === i ? void 0 : null === (o = i.Telegram) || void 0 === o ? void 0 : null === (a = o.WebApp) || void 0 === a ? void 0 : null === (l = a.initDataUnsafe) || void 0 === l ? void 0 : l.start_param) || void 0
                }
              }),
              p = await d.json();
            if (!p || !p.success || "Maintenance" === p.error) return c(!0);
            if (!p.success || !(null != p && null !== (u = p.data) && void 0 !== u && u.length)) return (0, eV.Z)({
              type: "error",
              imgCode: "cross",
              message: "Something went wrong while log in. Please try again later."
            });
            s(!0);
            let [h, f, g, m] = p.data;
            r((0, ev.av)(f)), r((0, ev.tR)(!0)), g && r((0, ev.x5)({
              isShowing: !0
            })), m && m.isShowBumsModal && r((0, ev.UD)(!0)), window.sessionStorage.setItem("accessToken", h)
          } catch (e) {
            (0, eV.Z)({
              type: "error",
              imgCode: "cross",
              message: "Something went wrong while log in. Please try again later."
            }), console.error(e)
          }
        };
        return (0, o.useEffect)(() => {
          if ("/" === i) return u(), () => {};
          s(!0)
        }, []), o.createElement(o.Fragment, null, l && o.createElement(eW.Z, null), a && !l && o.createElement(o.Fragment, null, o.createElement(t, n)))
      };
      n(8231), n(1691), n(5389), n(5889);
      var eK = () => {
          let e = (0, ew.TL)(),
            {
              asPath: t
            } = (0, eB.useRouter)(),
            n = () => {
              e((0, ev.Ep)(window.innerWidth < 768))
            };
          return (0, o.useEffect)(() => (n(), window.addEventListener("resize", n), () => {
            window.removeEventListener("resize", n)
          }), [t]), o.createElement(o.Fragment, null)
        },
        ez = e => {
          let {
            children: t
          } = e;
          return (0, o.useEffect)(() => {
            navigator.serviceWorker && navigator.serviceWorker.register("/sw.js", {
              scope: "/"
            })
          }, []), o.createElement(o.Fragment, null, t)
        },
        eq = n(3454);

      function eZ(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function eY(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? eZ(Object(n), !0).forEach(function(t) {
            (0, i.Z)(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eZ(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      class eJ extends s() {
        constructor(e) {
          super(e), (0, i.Z)(this, "appWrapper", () => {
            let {
              pathname: e
            } = this.props;
            return "/" === e ? e$.Eo : ez
          }), this.state = {
            isLoading: !0,
            url: ""
          }
        }
        render() {
          let {
            Component: e,
            pageProps: t,
            initialReduxState: n,
            clientSideDispatches: i
          } = this.props, a = this.appWrapper();
          return o.createElement(ek, {
            initialReduxState: n,
            clientSideDispatches: i
          }, o.createElement(eb.LD, {
            manifestUrl: "https://cdn.paws.community/tonconnect-manifest-production.json"
          }, o.createElement(eM, t), o.createElement(a, null, o.createElement("div", {
            id: "next-app"
          }, o.createElement(eK, null), o.createElement(eH, (0, r.Z)({
            Component: e
          }, t)), o.createElement(eI, null), o.createElement(ey.Ix, null)))))
        }
      }
      eJ.getInitialProps = async e => {
        let {
          ctx: t
        } = e;
        window.innerWidth < 768 || window && "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints;
        let {
          accessToken: n,
          refreshToken: r
        } = t.query;
        return (n || r) && (await (0, em.setCookie)("".concat("paws", "-accessToken"), n, eY(eY({}, t), {}, {
          domain: eq.env.APP_DOMAIN
        })), await (0, em.setCookie)("".concat("paws", "-refreshToken"), r, eY(eY({}, t), {}, {
          domain: eq.env.APP_DOMAIN
        }))), eY(eY({}, await s().getInitialProps(e)), {}, {
          pathname: t.pathname,
          initialReduxState: null,
          clientSideDispatches: []
        })
      };
      var eQ = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return d()(function(n) {
          var i, a, s = (n.pageProps || {})._nextI18Next,
            l = null !== (i = null == s ? void 0 : s.initialLocale) && void 0 !== i ? i : null == n || null === (a = n.router) || void 0 === a ? void 0 : a.locale,
            u = null == s ? void 0 : s.ns,
            d = (0, o.useRef)(null),
            p = (0, o.useMemo)(function() {
              if (!s && !t) return null;
              var e, n = null != t ? t : null == s ? void 0 : s.userConfig;
              if (!n) throw Error("appWithTranslation was called without a next-i18next config");
              if (!(null != n && n.i18n)) throw Error("appWithTranslation was called without config.i18n");
              if (!(null != n && null !== (e = n.i18n) && void 0 !== e && e.defaultLocale)) throw Error("config.i18n does not include a defaultLocale property");
              var r = (s || {}).initialI18nStore,
                i = null != t && t.resources ? t.resources : r;
              l || (l = n.i18n.defaultLocale);
              var o = d.current;
              return o ? eg(o, i) : (eg(o = ed(ef(ef({}, S(ef(ef({}, n), {}, {
                lng: l
              }))), {}, {
                lng: l,
                ns: u,
                resources: i
              })).i18n, i), d.current = o), o
            }, [s, l, u]);
          return b(function() {
            p && l && p.changeLanguage(l)
          }, [p, l]), null !== p ? ep(c, {
            i18n: p
          }, ep(e, n)) : ep(e, (0, r.Z)({
            key: l
          }, n))
        }, e)
      }(eJ)
    },
    9195: function(e, t, n) {
      "use strict";
      n.d(t, {
        h: function() {
          return l
        },
        TL: function() {
          return c
        },
        CG: function() {
          return u
        }
      });
      var r = n(7471),
        i = n(5007),
        o = n(5849),
        a = n(6139),
        s = (0, o.UY)({
          [a.PL.name]: a.PL.reducer
        });
      let l = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, r.xC)({
            reducer: s,
            preloadedState: e
          })
        },
        c = i.I0,
        u = i.v9
    },
    6139: function(e, t, n) {
      "use strict";
      n.d(t, {
        Ep: function() {
          return s
        },
        M: function() {
          return c
        },
        OJ: function() {
          return l
        },
        PL: function() {
          return a
        },
        UD: function() {
          return f
        },
        W2: function() {
          return d
        },
        av: function() {
          return b
        },
        r7: function() {
          return v
        },
        tR: function() {
          return u
        },
        x5: function() {
          return w
        },
        x7: function() {
          return m
        }
      });
      var r = n(6656);

      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i(Object(n), !0).forEach(function(t) {
            (0, r.Z)(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      let a = (0, n(7471).oM)({
          name: "main",
          initialState: {
            isAuth: !1,
            isMobile: !1,
            isTonTxModalOpen: !1,
            isSolWalletModalOpen: !1,
            chatId: 0,
            user: {
              userData: {
                username: "",
                firstname: "",
                avatarId: "",
                wallet: "",
                golden: !1,
                proofTonWallet: ""
              },
              referralData: {
                code: "",
                referralsCount: 0
              },
              gameData: {
                balance: 0,
                wPaws: 0,
                badgeTier: 0
              },
              allocationData: {
                hamster: {
                  initial: 0,
                  converted: 0
                },
                telegram: {
                  premium: !1,
                  age: 0,
                  year: 0,
                  converted: 0
                },
                paws: {
                  converted: 0
                },
                dogs: {
                  initial: 0,
                  converted: 0,
                  percent: 0
                },
                notcoin: {
                  initial: 0,
                  converted: 0,
                  createdAt: 0
                },
                empire: {
                  initial: 0,
                  isHolder: 0,
                  tierType: 0,
                  converted: 0
                },
                bums: {
                  initial: 0,
                  converted: 0,
                  skinNumInitial: 0,
                  skinNumConverted: 0,
                  levelInitial: 0,
                  levelConverted: 0
                },
                total: 0
              }
            },
            onboarding: {
              isShowing: !1,
              isShowVoteWinner: !1,
              total: 0,
              dogs: 0,
              base: 0,
              year: 0,
              premium: 0,
              dogsAllocation: 0
            },
            tabsHistory: []
          },
          reducers: {
            setIsMobile: (e, t) => {
              e.isMobile = t.payload
            },
            setIsAuth: (e, t) => {
              e.isAuth = t.payload
            },
            setIsSolWalletModalOpen: (e, t) => {
              e.isSolWalletModalOpen = t.payload
            },
            setUser: (e, t) => {
              e.user = o(o({}, e.user), t.payload)
            },
            setUserWPaws: (e, t) => {
              e.user.gameData.wpaws = t.payload
            },
            setGameData: (e, t) => {
              e.user.gameData = o(o({}, e.user.gameData), t.payload)
            },
            setUserWallet: (e, t) => {
              e.user.userData.wallet = t.payload
            },
            setUserSolWallet: (e, t) => {
              e.user.userData.solanaWallet = t.payload
            },
            setUserData: (e, t) => {
              e.user.userData = o(o({}, e.user.userData), t.payload)
            },
            setOnboarding: (e, t) => {
              e.onboarding = o(o({}, e.onboarding), t.payload)
            },
            incBalance: (e, t) => {
              e.user.gameData.balance += t.payload
            },
            setIsTonTxModalOpen: (e, t) => {
              e.isTonTxModalOpen = t.payload
            },
            setIsWinnerModalModalOpen: (e, t) => {
              e.onboarding.isShowVoteWinner = t.payload
            },
            pushTabHistory: (e, t) => {
              e.tabsHistory.push(t.payload)
            }
          }
        }),
        {
          setIsMobile: s,
          setGameData: l,
          setUserData: c,
          setIsAuth: u,
          setIsSolWalletModalOpen: d,
          setUserSolWallet: p,
          pushTabHistory: h,
          setIsWinnerModalModalOpen: f,
          setIsTonTxModalOpen: g,
          incBalance: m,
          setUserWallet: y,
          setUser: b,
          setUserWPaws: v,
          setOnboarding: w
        } = a.actions
    },
    6477: function(e, t) {
      "use strict";
      t.Headers = self.Headers, t.Request = self.Request, t.Response = self.Response, t.fetch = self.fetch
    },
    3454: function(e, t, n) {
      "use strict";
      var r, i;
      e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof(null == (i = n.g.process) ? void 0 : i.env) ? n.g.process : n(7663)
    },
    1118: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
        return n(5082)
      }])
    },
    9486: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/check.8fba744c.svg",
        height: 15,
        width: 17,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    4441: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/cross.ac8f2f14.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    1691: function() {},
    5889: function() {},
    5389: function() {},
    1522: function() {},
    7247: function() {},
    2077: function() {},
    9962: function() {},
    6649: function() {},
    9722: function() {},
    8231: function() {},
    7663: function(e) {
      ! function() {
        var t = {
            229: function(e) {
              var t, n, r, i = e.exports = {};

              function o() {
                throw Error("setTimeout has not been defined")
              }

              function a() {
                throw Error("clearTimeout has not been defined")
              }

              function s(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                  return t(e, 0)
                } catch (n) {
                  try {
                    return t.call(null, e, 0)
                  } catch (n) {
                    return t.call(this, e, 0)
                  }
                }
              }! function() {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : o
                } catch (e) {
                  t = o
                }
                try {
                  n = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                  n = a
                }
              }();
              var l = [],
                c = !1,
                u = -1;

              function d() {
                c && r && (c = !1, r.length ? l = r.concat(l) : u = -1, l.length && p())
              }

              function p() {
                if (!c) {
                  var e = s(d);
                  c = !0;
                  for (var t = l.length; t;) {
                    for (r = l, l = []; ++u < t;) r && r[u].run();
                    u = -1, t = l.length
                  }
                  r = null, c = !1,
                    function(e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                      try {
                        n(e)
                      } catch (t) {
                        try {
                          return n.call(null, e)
                        } catch (t) {
                          return n.call(this, e)
                        }
                      }
                    }(e)
                }
              }

              function h(e, t) {
                this.fun = e, this.array = t
              }

              function f() {}
              i.nextTick = function(e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                l.push(new h(e, t)), 1 !== l.length || c || s(p)
              }, h.prototype.run = function() {
                this.fun.apply(null, this.array)
              }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function(e) {
                return []
              }, i.binding = function(e) {
                throw Error("process.binding is not supported")
              }, i.cwd = function() {
                return "/"
              }, i.chdir = function(e) {
                throw Error("process.chdir is not supported")
              }, i.umask = function() {
                return 0
              }
            }
          },
          n = {};

        function r(e) {
          var i = n[e];
          if (void 0 !== i) return i.exports;
          var o = n[e] = {
              exports: {}
            },
            a = !0;
          try {
            t[e](o, o.exports, r), a = !1
          } finally {
            a && delete n[e]
          }
          return o.exports
        }
        r.ab = "//";
        var i = r(229);
        e.exports = i
      }()
    },
    5152: function(e, t, n) {
      e.exports = n(9666)
    },
    9008: function(e, t, n) {
      e.exports = n(90)
    },
    5675: function(e, t, n) {
      e.exports = n(4031)
    },
    1163: function(e, t, n) {
      e.exports = n(4285)
    },
    4298: function(e, t, n) {
      e.exports = n(8834)
    },
    2703: function(e, t, n) {
      "use strict";
      var r = n(414);

      function i() {}

      function o() {}
      o.resetWarningCache = i, e.exports = function() {
        function e(e, t, n, i, o, a) {
          if (a !== r) {
            var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw s.name = "Invariant Violation", s
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var n = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: o,
          resetWarningCache: i
        };
        return n.PropTypes = n, n
      }
    },
    1581: function(e, t, n) {
      e.exports = n(2703)()
    },
    414: function(e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    9921: function(e, t) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        u = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        f = n ? Symbol.for("react.suspense_list") : 60120,
        g = n ? Symbol.for("react.memo") : 60115,
        m = n ? Symbol.for("react.lazy") : 60116,
        y = n ? Symbol.for("react.block") : 60121,
        b = n ? Symbol.for("react.fundamental") : 60117,
        v = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;

      function x(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case u:
                case d:
                case o:
                case s:
                case a:
                case h:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case p:
                    case m:
                    case g:
                    case l:
                      return e;
                    default:
                      return t
                  }
              }
            case i:
              return t
          }
        }
      }

      function k(e) {
        return x(e) === d
      }
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = p, t.Fragment = o, t.Lazy = m, t.Memo = g, t.Portal = i, t.Profiler = s, t.StrictMode = a, t.Suspense = h, t.isAsyncMode = function(e) {
        return k(e) || x(e) === u
      }, t.isConcurrentMode = k, t.isContextConsumer = function(e) {
        return x(e) === c
      }, t.isContextProvider = function(e) {
        return x(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return x(e) === p
      }, t.isFragment = function(e) {
        return x(e) === o
      }, t.isLazy = function(e) {
        return x(e) === m
      }, t.isMemo = function(e) {
        return x(e) === g
      }, t.isPortal = function(e) {
        return x(e) === i
      }, t.isProfiler = function(e) {
        return x(e) === s
      }, t.isStrictMode = function(e) {
        return x(e) === a
      }, t.isSuspense = function(e) {
        return x(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === o || e === d || e === s || e === a || e === h || e === f || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p || e.$$typeof === b || e.$$typeof === v || e.$$typeof === w || e.$$typeof === y)
      }, t.typeOf = x
    },
    9864: function(e, t, n) {
      "use strict";
      e.exports = n(9921)
    },
    4527: function(e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function() {
          return m
        }
      });
      var r = n(3366);

      function i(e, t) {
        return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }
      var o = n(7294),
        a = n(3935),
        s = {
          disabled: !1
        },
        l = o.createContext(null),
        c = "unmounted",
        u = "exited",
        d = "entering",
        p = "entered",
        h = "exiting",
        f = function(e) {
          function t(t, n) {
            r = e.call(this, t, n) || this;
            var r, i, o = n && !n.isMounting ? t.enter : t.appear;
            return r.appearStatus = null, t.in ? o ? (i = u, r.appearStatus = d) : i = p : i = t.unmountOnExit || t.mountOnEnter ? c : u, r.state = {
              status: i
            }, r.nextCallback = null, r
          }
          t.prototype = Object.create(e.prototype), t.prototype.constructor = t, i(t, e), t.getDerivedStateFromProps = function(e, t) {
            return e.in && t.status === c ? {
              status: u
            } : null
          };
          var n = t.prototype;
          return n.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
          }, n.componentDidUpdate = function(e) {
            var t = null;
            if (e !== this.props) {
              var n = this.state.status;
              this.props.in ? n !== d && n !== p && (t = d) : (n === d || n === p) && (t = h)
            }
            this.updateStatus(!1, t)
          }, n.componentWillUnmount = function() {
            this.cancelNextCallback()
          }, n.getTimeouts = function() {
            var e, t, n, r = this.props.timeout;
            return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
              exit: e,
              enter: t,
              appear: n
            }
          }, n.updateStatus = function(e, t) {
            if (void 0 === e && (e = !1), null !== t) {
              if (this.cancelNextCallback(), t === d) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                  var n = this.props.nodeRef ? this.props.nodeRef.current : a.findDOMNode(this);
                  n && n.scrollTop
                }
                this.performEnter(e)
              } else this.performExit()
            } else this.props.unmountOnExit && this.state.status === u && this.setState({
              status: c
            })
          }, n.performEnter = function(e) {
            var t = this,
              n = this.props.enter,
              r = this.context ? this.context.isMounting : e,
              i = this.props.nodeRef ? [r] : [a.findDOMNode(this), r],
              o = i[0],
              l = i[1],
              c = this.getTimeouts(),
              u = r ? c.appear : c.enter;
            if (!e && !n || s.disabled) {
              this.safeSetState({
                status: p
              }, function() {
                t.props.onEntered(o)
              });
              return
            }
            this.props.onEnter(o, l), this.safeSetState({
              status: d
            }, function() {
              t.props.onEntering(o, l), t.onTransitionEnd(u, function() {
                t.safeSetState({
                  status: p
                }, function() {
                  t.props.onEntered(o, l)
                })
              })
            })
          }, n.performExit = function() {
            var e = this,
              t = this.props.exit,
              n = this.getTimeouts(),
              r = this.props.nodeRef ? void 0 : a.findDOMNode(this);
            if (!t || s.disabled) {
              this.safeSetState({
                status: u
              }, function() {
                e.props.onExited(r)
              });
              return
            }
            this.props.onExit(r), this.safeSetState({
              status: h
            }, function() {
              e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
                e.safeSetState({
                  status: u
                }, function() {
                  e.props.onExited(r)
                })
              })
            })
          }, n.cancelNextCallback = function() {
            null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
          }, n.safeSetState = function(e, t) {
            t = this.setNextCallback(t), this.setState(e, t)
          }, n.setNextCallback = function(e) {
            var t = this,
              n = !0;
            return this.nextCallback = function(r) {
              n && (n = !1, t.nextCallback = null, e(r))
            }, this.nextCallback.cancel = function() {
              n = !1
            }, this.nextCallback
          }, n.onTransitionEnd = function(e, t) {
            this.setNextCallback(t);
            var n = this.props.nodeRef ? this.props.nodeRef.current : a.findDOMNode(this),
              r = null == e && !this.props.addEndListener;
            if (!n || r) {
              setTimeout(this.nextCallback, 0);
              return
            }
            if (this.props.addEndListener) {
              var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                o = i[0],
                s = i[1];
              this.props.addEndListener(o, s)
            }
            null != e && setTimeout(this.nextCallback, e)
          }, n.render = function() {
            var e = this.state.status;
            if (e === c) return null;
            var t = this.props,
              n = t.children,
              i = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, (0, r.Z)(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
            return o.createElement(l.Provider, {
              value: null
            }, "function" == typeof n ? n(e, i) : o.cloneElement(o.Children.only(n), i))
          }, t
        }(o.Component);

      function g() {}
      f.contextType = l, f.propTypes = {}, f.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: g,
        onEntering: g,
        onEntered: g,
        onExit: g,
        onExiting: g,
        onExited: g
      }, f.UNMOUNTED = c, f.EXITED = u, f.ENTERING = d, f.ENTERED = p, f.EXITING = h;
      var m = f
    },
    9434: function(e, t, n) {
      "use strict";
      var r = n(7294),
        i = n(1581),
        o = n.n(i),
        a = n(3967),
        s = n.n(a),
        l = n(4527),
        c = n(2040),
        u = ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"];

      function d() {
        return (d = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
      }

      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p(Object(n), !0).forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      var f = h(h({}, l.ZP.propTypes), {}, {
          children: o().oneOfType([o().arrayOf(o().node), o().node]),
          tag: c.iC,
          baseClass: o().string,
          baseClassActive: o().string,
          className: o().string,
          cssModule: o().object,
          innerRef: o().oneOfType([o().object, o().string, o().func])
        }),
        g = h(h({}, l.ZP.defaultProps), {}, {
          timeout: c.wF.Fade,
          appear: !0,
          enter: !0,
          exit: !0,
          in: !0
        });

      function m(e) {
        var t = (0, r.useRef)(null),
          n = e.tag,
          i = void 0 === n ? "div" : n,
          o = e.baseClass,
          a = void 0 === o ? "fade" : o,
          p = e.baseClassActive,
          f = void 0 === p ? "show" : p,
          m = e.className,
          y = e.cssModule,
          b = e.children,
          v = e.innerRef,
          w = void 0 === v ? t : v,
          x = function(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }(e, u),
          k = (0, c.ei)(h({
            defaultProps: g
          }, x), c.rb),
          C = (0, c.CE)(x, c.rb);
        return r.createElement(l.ZP, d({
          nodeRef: w
        }, k), function(e) {
          var t = (0, c.mx)(s()(m, a, "entered" === e && f), y);
          return r.createElement(i, d({
            className: t
          }, C, {
            ref: w
          }), b)
        })
      }
      m.propTypes = f, m.defaultProps = g, t.Z = m
    },
    2040: function(e, t, n) {
      "use strict";
      n.d(t, {
        CE: function() {
          return d
        },
        Do: function() {
          return k
        },
        E5: function() {
          return x
        },
        JL: function() {
          return C
        },
        Kn: function() {
          return E
        },
        Nq: function() {
          return S
        },
        Rf: function() {
          return c
        },
        U9: function() {
          return _
        },
        X9: function() {
          return l
        },
        ei: function() {
          return p
        },
        iC: function() {
          return b
        },
        ku: function() {
          return T
        },
        mx: function() {
          return u
        },
        n5: function() {
          return m
        },
        pp: function() {
          return s
        },
        qW: function() {
          return y
        },
        rb: function() {
          return w
        },
        wF: function() {
          return v
        },
        x9: function() {
          return f
        }
      });
      var r, i = n(1581),
        o = n.n(i);

      function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function s(e) {
        document.body.style.paddingRight = e > 0 ? "".concat(e, "px") : null
      }

      function l() {
        var e = window.getComputedStyle(document.body, null);
        return parseInt(e && e.getPropertyValue("padding-right") || 0, 10)
      }

      function c() {
        var e, t, n = ((e = document.createElement("div")).style.position = "absolute", e.style.top = "-9999px", e.style.width = "50px", e.style.height = "50px", e.style.overflow = "scroll", document.body.appendChild(e), t = e.offsetWidth - e.clientWidth, document.body.removeChild(e), t),
          r = document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],
          i = r ? parseInt(r.style.paddingRight || 0, 10) : 0;
        document.body.clientWidth < window.innerWidth && s(i + n)
      }

      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        return t ? e.split(" ").map(function(e) {
          return t[e] || e
        }).join(" ") : e
      }

      function d(e, t) {
        var n = {};
        return Object.keys(e).forEach(function(r) {
          -1 === t.indexOf(r) && (n[r] = e[r])
        }), n
      }

      function p(e, t) {
        for (var n, r = Array.isArray(t) ? t : [t], i = r.length, o = {}; i > 0;) i -= 1, o[n = r[i]] = e[n];
        return o
      }
      var h = {};

      function f(e, t) {
        return function(n, r, i) {
          if (null !== n[r] && void 0 !== n[r]) {
            var o;
            h[o = '"'.concat(r, '" property of "').concat(i, '" has been deprecated.\n').concat(t)] || ("undefined" != typeof console && console.error(o), h[o] = !0)
          }
          for (var a = arguments.length, s = Array(a > 3 ? a - 3 : 0), l = 3; l < a; l++) s[l - 3] = arguments[l];
          return e.apply(void 0, [n, r, i].concat(s))
        }
      }
      var g = ("undefined" == typeof window ? "undefined" : a(window)) === "object" && window.Element || function() {};

      function m(e, t, n) {
        if (!(e[t] instanceof g)) return Error("Invalid prop `" + t + "` supplied to `" + n + "`. Expected prop to be an instance of Element. Validation failed.")
      }
      var y = o().oneOfType([o().string, o().func, m, o().shape({
          current: o().any
        })]),
        b = o().oneOfType([o().func, o().string, o().shape({
          $$typeof: o().symbol,
          render: o().func
        }), o().arrayOf(o().oneOfType([o().func, o().string, o().shape({
          $$typeof: o().symbol,
          render: o().func
        })]))]),
        v = {
          Fade: 150,
          Collapse: 350,
          Modal: 300,
          Carousel: 600,
          Offcanvas: 300
        },
        w = ["in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"],
        x = {
          ENTERING: "entering",
          ENTERED: "entered",
          EXITING: "exiting",
          EXITED: "exited"
        },
        k = {
          esc: 27,
          space: 32,
          enter: 13,
          tab: 9,
          up: 38,
          down: 40,
          home: 36,
          end: 35,
          n: 78,
          p: 80
        },
        C = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        S = !!("undefined" != typeof window && window.document && window.document.createElement);

      function E(e) {
        var t = a(e);
        return null != e && ("object" === t || "function" === t)
      }

      function O(e) {
        return null !== e && (Array.isArray(e) || S && "number" == typeof e.length)
      }

      function _(e, t) {
        var n = function(e) {
          if (e && "object" === a(e) && "current" in e) return e.current;
          if (function(e) {
              if (!E(e)) return !1;
              var t = null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
              return "[object Function]" === t || "[object AsyncFunction]" === t || "[object GeneratorFunction]" === t || "[object Proxy]" === t
            }(e)) return e();
          if ("string" == typeof e && S) {
            var t = document.querySelectorAll(e);
            if (t.length || (t = document.querySelectorAll("#".concat(e))), !t.length) throw Error("The target '".concat(e, "' could not be identified in the dom, tip: check spelling"));
            return t
          }
          return e
        }(e);
        return t ? O(n) ? n : null === n ? [] : [n] : O(n) ? n[0] : n
      }
      var T = ["a[href]", "area[href]", "input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "object", "embed", "[tabindex]:not(.modal):not(.offcanvas)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])']
    },
    6885: function(e, t, n) {
      var r, i = n(8924).Buffer;
      r = function() {
        "use strict";
        var e = {};

        function t(e) {
          if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)) throw TypeError("invalid encoding")
        }
        return e.decodeUTF8 = function(e) {
          if ("string" != typeof e) throw TypeError("expected string");
          var t, n = unescape(encodeURIComponent(e)),
            r = new Uint8Array(n.length);
          for (t = 0; t < n.length; t++) r[t] = n.charCodeAt(t);
          return r
        }, e.encodeUTF8 = function(e) {
          var t, n = [];
          for (t = 0; t < e.length; t++) n.push(String.fromCharCode(e[t]));
          return decodeURIComponent(escape(n.join("")))
        }, "undefined" == typeof atob ? void 0 !== i.from ? (e.encodeBase64 = function(e) {
          return i.from(e).toString("base64")
        }, e.decodeBase64 = function(e) {
          return t(e), new Uint8Array(Array.prototype.slice.call(i.from(e, "base64"), 0))
        }) : (e.encodeBase64 = function(e) {
          return new i(e).toString("base64")
        }, e.decodeBase64 = function(e) {
          return t(e), new Uint8Array(Array.prototype.slice.call(new i(e, "base64"), 0))
        }) : (e.encodeBase64 = function(e) {
          var t, n = [],
            r = e.length;
          for (t = 0; t < r; t++) n.push(String.fromCharCode(e[t]));
          return btoa(n.join(""))
        }, e.decodeBase64 = function(e) {
          t(e);
          var n, r = atob(e),
            i = new Uint8Array(r.length);
          for (n = 0; n < r.length; n++) i[n] = r.charCodeAt(n);
          return i
        }), e
      }, e.exports ? e.exports = r() : (this.nacl || (this.nacl = {}), this.nacl.util = r())
    },
    780: function(e, t, n) {
      ! function(e) {
        "use strict";
        var t, r = function(e) {
            var t, n = new Float64Array(16);
            if (e)
              for (t = 0; t < e.length; t++) n[t] = e[t];
            return n
          },
          i = function() {
            throw Error("no PRNG")
          },
          o = new Uint8Array(16),
          a = new Uint8Array(32);
        a[0] = 9;
        var s = r(),
          l = r([1]),
          c = r([56129, 1]),
          u = r([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
          d = r([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
          p = r([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
          h = r([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
          f = r([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

        function g(e, t, n, r) {
          e[t] = n >> 24 & 255, e[t + 1] = n >> 16 & 255, e[t + 2] = n >> 8 & 255, e[t + 3] = 255 & n, e[t + 4] = r >> 24 & 255, e[t + 5] = r >> 16 & 255, e[t + 6] = r >> 8 & 255, e[t + 7] = 255 & r
        }

        function m(e, t, n, r, i) {
          var o, a = 0;
          for (o = 0; o < i; o++) a |= e[t + o] ^ n[r + o];
          return (1 & a - 1 >>> 8) - 1
        }

        function y(e, t, n, r) {
          return m(e, t, n, r, 16)
        }

        function b(e, t, n, r) {
          return m(e, t, n, r, 32)
        }

        function v(e, t, n, r) {
          ! function(e, t, n, r) {
            for (var i, o = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, a = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, s = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, l = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, c = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, u = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, d = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24, p = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24, h = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24, f = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24, g = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, m = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, y = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, b = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, v = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, w = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, x = o, k = a, C = s, S = l, E = c, O = u, _ = d, T = p, A = h, P = f, R = g, j = m, L = y, M = b, N = v, D = w, I = 0; I < 20; I += 2) E ^= (i = x + L | 0) << 7 | i >>> 25, A ^= (i = E + x | 0) << 9 | i >>> 23, L ^= (i = A + E | 0) << 13 | i >>> 19, x ^= (i = L + A | 0) << 18 | i >>> 14, P ^= (i = O + k | 0) << 7 | i >>> 25, M ^= (i = P + O | 0) << 9 | i >>> 23, k ^= (i = M + P | 0) << 13 | i >>> 19, O ^= (i = k + M | 0) << 18 | i >>> 14, N ^= (i = R + _ | 0) << 7 | i >>> 25, C ^= (i = N + R | 0) << 9 | i >>> 23, _ ^= (i = C + N | 0) << 13 | i >>> 19, R ^= (i = _ + C | 0) << 18 | i >>> 14, S ^= (i = D + j | 0) << 7 | i >>> 25, T ^= (i = S + D | 0) << 9 | i >>> 23, j ^= (i = T + S | 0) << 13 | i >>> 19, D ^= (i = j + T | 0) << 18 | i >>> 14, k ^= (i = x + S | 0) << 7 | i >>> 25, C ^= (i = k + x | 0) << 9 | i >>> 23, S ^= (i = C + k | 0) << 13 | i >>> 19, x ^= (i = S + C | 0) << 18 | i >>> 14, _ ^= (i = O + E | 0) << 7 | i >>> 25, T ^= (i = _ + O | 0) << 9 | i >>> 23, E ^= (i = T + _ | 0) << 13 | i >>> 19, O ^= (i = E + T | 0) << 18 | i >>> 14, j ^= (i = R + P | 0) << 7 | i >>> 25, A ^= (i = j + R | 0) << 9 | i >>> 23, P ^= (i = A + j | 0) << 13 | i >>> 19, R ^= (i = P + A | 0) << 18 | i >>> 14, L ^= (i = D + N | 0) << 7 | i >>> 25, M ^= (i = L + D | 0) << 9 | i >>> 23, N ^= (i = M + L | 0) << 13 | i >>> 19, D ^= (i = N + M | 0) << 18 | i >>> 14;
            x = x + o | 0, k = k + a | 0, C = C + s | 0, S = S + l | 0, E = E + c | 0, O = O + u | 0, _ = _ + d | 0, T = T + p | 0, A = A + h | 0, P = P + f | 0, R = R + g | 0, j = j + m | 0, L = L + y | 0, M = M + b | 0, N = N + v | 0, D = D + w | 0, e[0] = x >>> 0 & 255, e[1] = x >>> 8 & 255, e[2] = x >>> 16 & 255, e[3] = x >>> 24 & 255, e[4] = k >>> 0 & 255, e[5] = k >>> 8 & 255, e[6] = k >>> 16 & 255, e[7] = k >>> 24 & 255, e[8] = C >>> 0 & 255, e[9] = C >>> 8 & 255, e[10] = C >>> 16 & 255, e[11] = C >>> 24 & 255, e[12] = S >>> 0 & 255, e[13] = S >>> 8 & 255, e[14] = S >>> 16 & 255, e[15] = S >>> 24 & 255, e[16] = E >>> 0 & 255, e[17] = E >>> 8 & 255, e[18] = E >>> 16 & 255, e[19] = E >>> 24 & 255, e[20] = O >>> 0 & 255, e[21] = O >>> 8 & 255, e[22] = O >>> 16 & 255, e[23] = O >>> 24 & 255, e[24] = _ >>> 0 & 255, e[25] = _ >>> 8 & 255, e[26] = _ >>> 16 & 255, e[27] = _ >>> 24 & 255, e[28] = T >>> 0 & 255, e[29] = T >>> 8 & 255, e[30] = T >>> 16 & 255, e[31] = T >>> 24 & 255, e[32] = A >>> 0 & 255, e[33] = A >>> 8 & 255, e[34] = A >>> 16 & 255, e[35] = A >>> 24 & 255, e[36] = P >>> 0 & 255, e[37] = P >>> 8 & 255, e[38] = P >>> 16 & 255, e[39] = P >>> 24 & 255, e[40] = R >>> 0 & 255, e[41] = R >>> 8 & 255, e[42] = R >>> 16 & 255, e[43] = R >>> 24 & 255, e[44] = j >>> 0 & 255, e[45] = j >>> 8 & 255, e[46] = j >>> 16 & 255, e[47] = j >>> 24 & 255, e[48] = L >>> 0 & 255, e[49] = L >>> 8 & 255, e[50] = L >>> 16 & 255, e[51] = L >>> 24 & 255, e[52] = M >>> 0 & 255, e[53] = M >>> 8 & 255, e[54] = M >>> 16 & 255, e[55] = M >>> 24 & 255, e[56] = N >>> 0 & 255, e[57] = N >>> 8 & 255, e[58] = N >>> 16 & 255, e[59] = N >>> 24 & 255, e[60] = D >>> 0 & 255, e[61] = D >>> 8 & 255, e[62] = D >>> 16 & 255, e[63] = D >>> 24 & 255
          }(e, t, n, r)
        }

        function w(e, t, n, r) {
          ! function(e, t, n, r) {
            for (var i, o = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, a = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, s = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, l = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, c = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, u = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, d = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24, p = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24, h = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24, f = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24, g = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, m = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, y = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, b = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, v = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, w = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, x = o, k = a, C = s, S = l, E = c, O = u, _ = d, T = p, A = h, P = f, R = g, j = m, L = y, M = b, N = v, D = w, I = 0; I < 20; I += 2) E ^= (i = x + L | 0) << 7 | i >>> 25, A ^= (i = E + x | 0) << 9 | i >>> 23, L ^= (i = A + E | 0) << 13 | i >>> 19, x ^= (i = L + A | 0) << 18 | i >>> 14, P ^= (i = O + k | 0) << 7 | i >>> 25, M ^= (i = P + O | 0) << 9 | i >>> 23, k ^= (i = M + P | 0) << 13 | i >>> 19, O ^= (i = k + M | 0) << 18 | i >>> 14, N ^= (i = R + _ | 0) << 7 | i >>> 25, C ^= (i = N + R | 0) << 9 | i >>> 23, _ ^= (i = C + N | 0) << 13 | i >>> 19, R ^= (i = _ + C | 0) << 18 | i >>> 14, S ^= (i = D + j | 0) << 7 | i >>> 25, T ^= (i = S + D | 0) << 9 | i >>> 23, j ^= (i = T + S | 0) << 13 | i >>> 19, D ^= (i = j + T | 0) << 18 | i >>> 14, k ^= (i = x + S | 0) << 7 | i >>> 25, C ^= (i = k + x | 0) << 9 | i >>> 23, S ^= (i = C + k | 0) << 13 | i >>> 19, x ^= (i = S + C | 0) << 18 | i >>> 14, _ ^= (i = O + E | 0) << 7 | i >>> 25, T ^= (i = _ + O | 0) << 9 | i >>> 23, E ^= (i = T + _ | 0) << 13 | i >>> 19, O ^= (i = E + T | 0) << 18 | i >>> 14, j ^= (i = R + P | 0) << 7 | i >>> 25, A ^= (i = j + R | 0) << 9 | i >>> 23, P ^= (i = A + j | 0) << 13 | i >>> 19, R ^= (i = P + A | 0) << 18 | i >>> 14, L ^= (i = D + N | 0) << 7 | i >>> 25, M ^= (i = L + D | 0) << 9 | i >>> 23, N ^= (i = M + L | 0) << 13 | i >>> 19, D ^= (i = N + M | 0) << 18 | i >>> 14;
            e[0] = x >>> 0 & 255, e[1] = x >>> 8 & 255, e[2] = x >>> 16 & 255, e[3] = x >>> 24 & 255, e[4] = O >>> 0 & 255, e[5] = O >>> 8 & 255, e[6] = O >>> 16 & 255, e[7] = O >>> 24 & 255, e[8] = R >>> 0 & 255, e[9] = R >>> 8 & 255, e[10] = R >>> 16 & 255, e[11] = R >>> 24 & 255, e[12] = D >>> 0 & 255, e[13] = D >>> 8 & 255, e[14] = D >>> 16 & 255, e[15] = D >>> 24 & 255, e[16] = _ >>> 0 & 255, e[17] = _ >>> 8 & 255, e[18] = _ >>> 16 & 255, e[19] = _ >>> 24 & 255, e[20] = T >>> 0 & 255, e[21] = T >>> 8 & 255, e[22] = T >>> 16 & 255, e[23] = T >>> 24 & 255, e[24] = A >>> 0 & 255, e[25] = A >>> 8 & 255, e[26] = A >>> 16 & 255, e[27] = A >>> 24 & 255, e[28] = P >>> 0 & 255, e[29] = P >>> 8 & 255, e[30] = P >>> 16 & 255, e[31] = P >>> 24 & 255
          }(e, t, n, r)
        }
        var x = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

        function k(e, t, n, r, i, o, a) {
          var s, l, c = new Uint8Array(16),
            u = new Uint8Array(64);
          for (l = 0; l < 16; l++) c[l] = 0;
          for (l = 0; l < 8; l++) c[l] = o[l];
          for (; i >= 64;) {
            for (v(u, c, a, x), l = 0; l < 64; l++) e[t + l] = n[r + l] ^ u[l];
            for (l = 8, s = 1; l < 16; l++) s = s + (255 & c[l]) | 0, c[l] = 255 & s, s >>>= 8;
            i -= 64, t += 64, r += 64
          }
          if (i > 0)
            for (v(u, c, a, x), l = 0; l < i; l++) e[t + l] = n[r + l] ^ u[l];
          return 0
        }

        function C(e, t, n, r, i) {
          var o, a, s = new Uint8Array(16),
            l = new Uint8Array(64);
          for (a = 0; a < 16; a++) s[a] = 0;
          for (a = 0; a < 8; a++) s[a] = r[a];
          for (; n >= 64;) {
            for (v(l, s, i, x), a = 0; a < 64; a++) e[t + a] = l[a];
            for (a = 8, o = 1; a < 16; a++) o = o + (255 & s[a]) | 0, s[a] = 255 & o, o >>>= 8;
            n -= 64, t += 64
          }
          if (n > 0)
            for (v(l, s, i, x), a = 0; a < n; a++) e[t + a] = l[a];
          return 0
        }

        function S(e, t, n, r, i) {
          var o = new Uint8Array(32);
          w(o, r, i, x);
          for (var a = new Uint8Array(8), s = 0; s < 8; s++) a[s] = r[s + 16];
          return C(e, t, n, a, o)
        }

        function E(e, t, n, r, i, o, a) {
          var s = new Uint8Array(32);
          w(s, o, a, x);
          for (var l = new Uint8Array(8), c = 0; c < 8; c++) l[c] = o[c + 16];
          return k(e, t, n, r, i, l, s)
        }
        var O = function(e) {
          var t, n, r, i, o, a, s, l;
          this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, t = 255 & e[0] | (255 & e[1]) << 8, this.r[0] = 8191 & t, n = 255 & e[2] | (255 & e[3]) << 8, this.r[1] = (t >>> 13 | n << 3) & 8191, r = 255 & e[4] | (255 & e[5]) << 8, this.r[2] = (n >>> 10 | r << 6) & 7939, i = 255 & e[6] | (255 & e[7]) << 8, this.r[3] = (r >>> 7 | i << 9) & 8191, o = 255 & e[8] | (255 & e[9]) << 8, this.r[4] = (i >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, a = 255 & e[10] | (255 & e[11]) << 8, this.r[6] = (o >>> 14 | a << 2) & 8191, s = 255 & e[12] | (255 & e[13]) << 8, this.r[7] = (a >>> 11 | s << 5) & 8065, l = 255 & e[14] | (255 & e[15]) << 8, this.r[8] = (s >>> 8 | l << 8) & 8191, this.r[9] = l >>> 5 & 127, this.pad[0] = 255 & e[16] | (255 & e[17]) << 8, this.pad[1] = 255 & e[18] | (255 & e[19]) << 8, this.pad[2] = 255 & e[20] | (255 & e[21]) << 8, this.pad[3] = 255 & e[22] | (255 & e[23]) << 8, this.pad[4] = 255 & e[24] | (255 & e[25]) << 8, this.pad[5] = 255 & e[26] | (255 & e[27]) << 8, this.pad[6] = 255 & e[28] | (255 & e[29]) << 8, this.pad[7] = 255 & e[30] | (255 & e[31]) << 8
        };

        function _(e, t, n, r, i, o) {
          var a = new O(o);
          return a.update(n, r, i), a.finish(e, t), 0
        }

        function T(e, t, n, r, i, o) {
          var a = new Uint8Array(16);
          return _(a, 0, n, r, i, o), y(e, t, a, 0)
        }

        function A(e, t, n, r, i) {
          var o;
          if (n < 32) return -1;
          for (E(e, 0, t, 0, n, r, i), _(e, 16, e, 32, n - 32, e), o = 0; o < 16; o++) e[o] = 0;
          return 0
        }

        function P(e, t, n, r, i) {
          var o, a = new Uint8Array(32);
          if (n < 32 || (S(a, 0, 32, r, i), 0 !== T(t, 16, t, 32, n - 32, a))) return -1;
          for (E(e, 0, t, 0, n, r, i), o = 0; o < 32; o++) e[o] = 0;
          return 0
        }

        function R(e, t) {
          var n;
          for (n = 0; n < 16; n++) e[n] = 0 | t[n]
        }

        function j(e) {
          var t, n, r = 1;
          for (t = 0; t < 16; t++) r = Math.floor((n = e[t] + r + 65535) / 65536), e[t] = n - 65536 * r;
          e[0] += r - 1 + 37 * (r - 1)
        }

        function L(e, t, n) {
          for (var r, i = ~(n - 1), o = 0; o < 16; o++) r = i & (e[o] ^ t[o]), e[o] ^= r, t[o] ^= r
        }

        function M(e, t) {
          var n, i, o, a = r(),
            s = r();
          for (n = 0; n < 16; n++) s[n] = t[n];
          for (j(s), j(s), j(s), i = 0; i < 2; i++) {
            for (n = 1, a[0] = s[0] - 65517; n < 15; n++) a[n] = s[n] - 65535 - (a[n - 1] >> 16 & 1), a[n - 1] &= 65535;
            a[15] = s[15] - 32767 - (a[14] >> 16 & 1), o = a[15] >> 16 & 1, a[14] &= 65535, L(s, a, 1 - o)
          }
          for (n = 0; n < 16; n++) e[2 * n] = 255 & s[n], e[2 * n + 1] = s[n] >> 8
        }

        function N(e, t) {
          var n = new Uint8Array(32),
            r = new Uint8Array(32);
          return M(n, e), M(r, t), b(n, 0, r, 0)
        }

        function D(e) {
          var t = new Uint8Array(32);
          return M(t, e), 1 & t[0]
        }

        function I(e, t) {
          var n;
          for (n = 0; n < 16; n++) e[n] = t[2 * n] + (t[2 * n + 1] << 8);
          e[15] &= 32767
        }

        function $(e, t, n) {
          for (var r = 0; r < 16; r++) e[r] = t[r] + n[r]
        }

        function B(e, t, n) {
          for (var r = 0; r < 16; r++) e[r] = t[r] - n[r]
        }

        function U(e, t, n) {
          var r, i, o = 0,
            a = 0,
            s = 0,
            l = 0,
            c = 0,
            u = 0,
            d = 0,
            p = 0,
            h = 0,
            f = 0,
            g = 0,
            m = 0,
            y = 0,
            b = 0,
            v = 0,
            w = 0,
            x = 0,
            k = 0,
            C = 0,
            S = 0,
            E = 0,
            O = 0,
            _ = 0,
            T = 0,
            A = 0,
            P = 0,
            R = 0,
            j = 0,
            L = 0,
            M = 0,
            N = 0,
            D = n[0],
            I = n[1],
            $ = n[2],
            B = n[3],
            U = n[4],
            V = n[5],
            W = n[6],
            F = n[7],
            G = n[8],
            H = n[9],
            K = n[10],
            z = n[11],
            q = n[12],
            Z = n[13],
            Y = n[14],
            J = n[15];
          o += (r = t[0]) * D, a += r * I, s += r * $, l += r * B, c += r * U, u += r * V, d += r * W, p += r * F, h += r * G, f += r * H, g += r * K, m += r * z, y += r * q, b += r * Z, v += r * Y, w += r * J, a += (r = t[1]) * D, s += r * I, l += r * $, c += r * B, u += r * U, d += r * V, p += r * W, h += r * F, f += r * G, g += r * H, m += r * K, y += r * z, b += r * q, v += r * Z, w += r * Y, x += r * J, s += (r = t[2]) * D, l += r * I, c += r * $, u += r * B, d += r * U, p += r * V, h += r * W, f += r * F, g += r * G, m += r * H, y += r * K, b += r * z, v += r * q, w += r * Z, x += r * Y, k += r * J, l += (r = t[3]) * D, c += r * I, u += r * $, d += r * B, p += r * U, h += r * V, f += r * W, g += r * F, m += r * G, y += r * H, b += r * K, v += r * z, w += r * q, x += r * Z, k += r * Y, C += r * J, c += (r = t[4]) * D, u += r * I, d += r * $, p += r * B, h += r * U, f += r * V, g += r * W, m += r * F, y += r * G, b += r * H, v += r * K, w += r * z, x += r * q, k += r * Z, C += r * Y, S += r * J, u += (r = t[5]) * D, d += r * I, p += r * $, h += r * B, f += r * U, g += r * V, m += r * W, y += r * F, b += r * G, v += r * H, w += r * K, x += r * z, k += r * q, C += r * Z, S += r * Y, E += r * J, d += (r = t[6]) * D, p += r * I, h += r * $, f += r * B, g += r * U, m += r * V, y += r * W, b += r * F, v += r * G, w += r * H, x += r * K, k += r * z, C += r * q, S += r * Z, E += r * Y, O += r * J, p += (r = t[7]) * D, h += r * I, f += r * $, g += r * B, m += r * U, y += r * V, b += r * W, v += r * F, w += r * G, x += r * H, k += r * K, C += r * z, S += r * q, E += r * Z, O += r * Y, _ += r * J, h += (r = t[8]) * D, f += r * I, g += r * $, m += r * B, y += r * U, b += r * V, v += r * W, w += r * F, x += r * G, k += r * H, C += r * K, S += r * z, E += r * q, O += r * Z, _ += r * Y, T += r * J, f += (r = t[9]) * D, g += r * I, m += r * $, y += r * B, b += r * U, v += r * V, w += r * W, x += r * F, k += r * G, C += r * H, S += r * K, E += r * z, O += r * q, _ += r * Z, T += r * Y, A += r * J, g += (r = t[10]) * D, m += r * I, y += r * $, b += r * B, v += r * U, w += r * V, x += r * W, k += r * F, C += r * G, S += r * H, E += r * K, O += r * z, _ += r * q, T += r * Z, A += r * Y, P += r * J, m += (r = t[11]) * D, y += r * I, b += r * $, v += r * B, w += r * U, x += r * V, k += r * W, C += r * F, S += r * G, E += r * H, O += r * K, _ += r * z, T += r * q, A += r * Z, P += r * Y, R += r * J, y += (r = t[12]) * D, b += r * I, v += r * $, w += r * B, x += r * U, k += r * V, C += r * W, S += r * F, E += r * G, O += r * H, _ += r * K, T += r * z, A += r * q, P += r * Z, R += r * Y, j += r * J, b += (r = t[13]) * D, v += r * I, w += r * $, x += r * B, k += r * U, C += r * V, S += r * W, E += r * F, O += r * G, _ += r * H, T += r * K, A += r * z, P += r * q, R += r * Z, j += r * Y, L += r * J, v += (r = t[14]) * D, w += r * I, x += r * $, k += r * B, C += r * U, S += r * V, E += r * W, O += r * F, _ += r * G, T += r * H, A += r * K, P += r * z, R += r * q, j += r * Z, L += r * Y, M += r * J, w += (r = t[15]) * D, x += r * I, k += r * $, C += r * B, S += r * U, E += r * V, O += r * W, _ += r * F, T += r * G, A += r * H, P += r * K, R += r * z, j += r * q, L += r * Z, M += r * Y, N += r * J, o += 38 * x, a += 38 * k, s += 38 * C, l += 38 * S, c += 38 * E, u += 38 * O, d += 38 * _, p += 38 * T, h += 38 * A, f += 38 * P, g += 38 * R, m += 38 * j, y += 38 * L, b += 38 * M, v += 38 * N, i = Math.floor((r = o + (i = 1) + 65535) / 65536), o = r - 65536 * i, i = Math.floor((r = a + i + 65535) / 65536), a = r - 65536 * i, i = Math.floor((r = s + i + 65535) / 65536), s = r - 65536 * i, i = Math.floor((r = l + i + 65535) / 65536), l = r - 65536 * i, i = Math.floor((r = c + i + 65535) / 65536), c = r - 65536 * i, i = Math.floor((r = u + i + 65535) / 65536), u = r - 65536 * i, i = Math.floor((r = d + i + 65535) / 65536), d = r - 65536 * i, i = Math.floor((r = p + i + 65535) / 65536), p = r - 65536 * i, i = Math.floor((r = h + i + 65535) / 65536), h = r - 65536 * i, i = Math.floor((r = f + i + 65535) / 65536), f = r - 65536 * i, i = Math.floor((r = g + i + 65535) / 65536), g = r - 65536 * i, i = Math.floor((r = m + i + 65535) / 65536), m = r - 65536 * i, i = Math.floor((r = y + i + 65535) / 65536), y = r - 65536 * i, i = Math.floor((r = b + i + 65535) / 65536), b = r - 65536 * i, i = Math.floor((r = v + i + 65535) / 65536), v = r - 65536 * i, i = Math.floor((r = w + i + 65535) / 65536), w = r - 65536 * i, o += i - 1 + 37 * (i - 1), i = Math.floor((r = o + (i = 1) + 65535) / 65536), o = r - 65536 * i, i = Math.floor((r = a + i + 65535) / 65536), a = r - 65536 * i, i = Math.floor((r = s + i + 65535) / 65536), s = r - 65536 * i, i = Math.floor((r = l + i + 65535) / 65536), l = r - 65536 * i, i = Math.floor((r = c + i + 65535) / 65536), c = r - 65536 * i, i = Math.floor((r = u + i + 65535) / 65536), u = r - 65536 * i, i = Math.floor((r = d + i + 65535) / 65536), d = r - 65536 * i, i = Math.floor((r = p + i + 65535) / 65536), p = r - 65536 * i, i = Math.floor((r = h + i + 65535) / 65536), h = r - 65536 * i, i = Math.floor((r = f + i + 65535) / 65536), f = r - 65536 * i, i = Math.floor((r = g + i + 65535) / 65536), g = r - 65536 * i, i = Math.floor((r = m + i + 65535) / 65536), m = r - 65536 * i, i = Math.floor((r = y + i + 65535) / 65536), y = r - 65536 * i, i = Math.floor((r = b + i + 65535) / 65536), b = r - 65536 * i, i = Math.floor((r = v + i + 65535) / 65536), v = r - 65536 * i, i = Math.floor((r = w + i + 65535) / 65536), w = r - 65536 * i, o += i - 1 + 37 * (i - 1), e[0] = o, e[1] = a, e[2] = s, e[3] = l, e[4] = c, e[5] = u, e[6] = d, e[7] = p, e[8] = h, e[9] = f, e[10] = g, e[11] = m, e[12] = y, e[13] = b, e[14] = v, e[15] = w
        }

        function V(e, t) {
          U(e, t, t)
        }

        function W(e, t) {
          var n, i = r();
          for (n = 0; n < 16; n++) i[n] = t[n];
          for (n = 253; n >= 0; n--) V(i, i), 2 !== n && 4 !== n && U(i, i, t);
          for (n = 0; n < 16; n++) e[n] = i[n]
        }

        function F(e, t) {
          var n, i = r();
          for (n = 0; n < 16; n++) i[n] = t[n];
          for (n = 250; n >= 0; n--) V(i, i), 1 !== n && U(i, i, t);
          for (n = 0; n < 16; n++) e[n] = i[n]
        }

        function G(e, t, n) {
          var i, o, a = new Uint8Array(32),
            s = new Float64Array(80),
            l = r(),
            u = r(),
            d = r(),
            p = r(),
            h = r(),
            f = r();
          for (o = 0; o < 31; o++) a[o] = t[o];
          for (a[31] = 127 & t[31] | 64, a[0] &= 248, I(s, n), o = 0; o < 16; o++) u[o] = s[o], p[o] = l[o] = d[o] = 0;
          for (o = 254, l[0] = p[0] = 1; o >= 0; --o) L(l, u, i = a[o >>> 3] >>> (7 & o) & 1), L(d, p, i), $(h, l, d), B(l, l, d), $(d, u, p), B(u, u, p), V(p, h), V(f, l), U(l, d, l), U(d, u, h), $(h, l, d), B(l, l, d), V(u, l), B(d, p, f), U(l, d, c), $(l, l, p), U(d, d, l), U(l, p, f), U(p, u, s), V(u, h), L(l, u, i), L(d, p, i);
          for (o = 0; o < 16; o++) s[o + 16] = l[o], s[o + 32] = d[o], s[o + 48] = u[o], s[o + 64] = p[o];
          var g = s.subarray(32),
            m = s.subarray(16);
          return W(g, g), U(m, m, g), M(e, m), 0
        }

        function H(e, t) {
          return G(e, t, a)
        }

        function K(e, t) {
          return i(t, 32), H(e, t)
        }

        function z(e, t, n) {
          var r = new Uint8Array(32);
          return G(r, n, t), w(e, o, r, x)
        }
        O.prototype.blocks = function(e, t, n) {
          for (var r, i, o, a, s, l, c, u, d, p, h, f, g, m, y, b, v, w, x, k = this.fin ? 0 : 2048, C = this.h[0], S = this.h[1], E = this.h[2], O = this.h[3], _ = this.h[4], T = this.h[5], A = this.h[6], P = this.h[7], R = this.h[8], j = this.h[9], L = this.r[0], M = this.r[1], N = this.r[2], D = this.r[3], I = this.r[4], $ = this.r[5], B = this.r[6], U = this.r[7], V = this.r[8], W = this.r[9]; n >= 16;) C += 8191 & (r = 255 & e[t + 0] | (255 & e[t + 1]) << 8), S += (r >>> 13 | (i = 255 & e[t + 2] | (255 & e[t + 3]) << 8) << 3) & 8191, E += (i >>> 10 | (o = 255 & e[t + 4] | (255 & e[t + 5]) << 8) << 6) & 8191, O += (o >>> 7 | (a = 255 & e[t + 6] | (255 & e[t + 7]) << 8) << 9) & 8191, _ += (a >>> 4 | (s = 255 & e[t + 8] | (255 & e[t + 9]) << 8) << 12) & 8191, T += s >>> 1 & 8191, A += (s >>> 14 | (l = 255 & e[t + 10] | (255 & e[t + 11]) << 8) << 2) & 8191, P += (l >>> 11 | (c = 255 & e[t + 12] | (255 & e[t + 13]) << 8) << 5) & 8191, R += (c >>> 8 | (u = 255 & e[t + 14] | (255 & e[t + 15]) << 8) << 8) & 8191, j += u >>> 5 | k, d = (p = (d = 0) + C * L + 5 * W * S + 5 * V * E + 5 * U * O + 5 * B * _) >>> 13, p &= 8191, p += 5 * $ * T + 5 * I * A + 5 * D * P + 5 * N * R + 5 * M * j, d += p >>> 13, p &= 8191, d = (h = d + C * M + S * L + 5 * W * E + 5 * V * O + 5 * U * _) >>> 13, h &= 8191, h += 5 * B * T + 5 * $ * A + 5 * I * P + 5 * D * R + 5 * N * j, d += h >>> 13, h &= 8191, d = (f = d + C * N + S * M + E * L + 5 * W * O + 5 * V * _) >>> 13, f &= 8191, f += 5 * U * T + 5 * B * A + 5 * $ * P + 5 * I * R + 5 * D * j, d += f >>> 13, f &= 8191, d = (g = d + C * D + S * N + E * M + O * L + 5 * W * _) >>> 13, g &= 8191, g += 5 * V * T + 5 * U * A + 5 * B * P + 5 * $ * R + 5 * I * j, d += g >>> 13, g &= 8191, d = (m = d + C * I + S * D + E * N + O * M + _ * L) >>> 13, m &= 8191, m += 5 * W * T + 5 * V * A + 5 * U * P + 5 * B * R + 5 * $ * j, d += m >>> 13, m &= 8191, d = (y = d + C * $ + S * I + E * D + O * N + _ * M) >>> 13, y &= 8191, y += T * L + 5 * W * A + 5 * V * P + 5 * U * R + 5 * B * j, d += y >>> 13, y &= 8191, d = (b = d + C * B + S * $ + E * I + O * D + _ * N) >>> 13, b &= 8191, b += T * M + A * L + 5 * W * P + 5 * V * R + 5 * U * j, d += b >>> 13, b &= 8191, d = (v = d + C * U + S * B + E * $ + O * I + _ * D) >>> 13, v &= 8191, v += T * N + A * M + P * L + 5 * W * R + 5 * V * j, d += v >>> 13, v &= 8191, d = (w = d + C * V + S * U + E * B + O * $ + _ * I) >>> 13, w &= 8191, w += T * D + A * N + P * M + R * L + 5 * W * j, d += w >>> 13, w &= 8191, d = (x = d + C * W + S * V + E * U + O * B + _ * $) >>> 13, x &= 8191, x += T * I + A * D + P * N + R * M + j * L, d += x >>> 13, x &= 8191, p = 8191 & (d = (d = (d << 2) + d | 0) + p | 0), d >>>= 13, h += d, C = p, S = h, E = f, O = g, _ = m, T = y, A = b, P = v, R = w, j = x, t += 16, n -= 16;
          this.h[0] = C, this.h[1] = S, this.h[2] = E, this.h[3] = O, this.h[4] = _, this.h[5] = T, this.h[6] = A, this.h[7] = P, this.h[8] = R, this.h[9] = j
        }, O.prototype.finish = function(e, t) {
          var n, r, i, o, a = new Uint16Array(10);
          if (this.leftover) {
            for (o = this.leftover, this.buffer[o++] = 1; o < 16; o++) this.buffer[o] = 0;
            this.fin = 1, this.blocks(this.buffer, 0, 16)
          }
          for (n = this.h[1] >>> 13, this.h[1] &= 8191, o = 2; o < 10; o++) this.h[o] += n, n = this.h[o] >>> 13, this.h[o] &= 8191;
          for (this.h[0] += 5 * n, n = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += n, n = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += n, a[0] = this.h[0] + 5, n = a[0] >>> 13, a[0] &= 8191, o = 1; o < 10; o++) a[o] = this.h[o] + n, n = a[o] >>> 13, a[o] &= 8191;
          for (a[9] -= 8192, r = (1 ^ n) - 1, o = 0; o < 10; o++) a[o] &= r;
          for (o = 0, r = ~r; o < 10; o++) this.h[o] = this.h[o] & r | a[o];
          for (o = 1, this.h[0] = (this.h[0] | this.h[1] << 13) & 65535, this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535, this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535, this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535, this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535, this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535, this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535, this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535, i = this.h[0] + this.pad[0], this.h[0] = 65535 & i; o < 8; o++) i = (this.h[o] + this.pad[o] | 0) + (i >>> 16) | 0, this.h[o] = 65535 & i;
          e[t + 0] = this.h[0] >>> 0 & 255, e[t + 1] = this.h[0] >>> 8 & 255, e[t + 2] = this.h[1] >>> 0 & 255, e[t + 3] = this.h[1] >>> 8 & 255, e[t + 4] = this.h[2] >>> 0 & 255, e[t + 5] = this.h[2] >>> 8 & 255, e[t + 6] = this.h[3] >>> 0 & 255, e[t + 7] = this.h[3] >>> 8 & 255, e[t + 8] = this.h[4] >>> 0 & 255, e[t + 9] = this.h[4] >>> 8 & 255, e[t + 10] = this.h[5] >>> 0 & 255, e[t + 11] = this.h[5] >>> 8 & 255, e[t + 12] = this.h[6] >>> 0 & 255, e[t + 13] = this.h[6] >>> 8 & 255, e[t + 14] = this.h[7] >>> 0 & 255, e[t + 15] = this.h[7] >>> 8 & 255
        }, O.prototype.update = function(e, t, n) {
          var r, i;
          if (this.leftover) {
            for ((i = 16 - this.leftover) > n && (i = n), r = 0; r < i; r++) this.buffer[this.leftover + r] = e[t + r];
            if (n -= i, t += i, this.leftover += i, this.leftover < 16) return;
            this.blocks(this.buffer, 0, 16), this.leftover = 0
          }
          if (n >= 16 && (i = n - n % 16, this.blocks(e, t, i), t += i, n -= i), n) {
            for (r = 0; r < n; r++) this.buffer[this.leftover + r] = e[t + r];
            this.leftover += n
          }
        };
        var q = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

        function Z(e, t, n, r) {
          for (var i, o, a, s, l, c, u, d, p, h, f, g, m, y, b, v, w, x, k, C, S, E, O, _, T, A, P = new Int32Array(16), R = new Int32Array(16), j = e[0], L = e[1], M = e[2], N = e[3], D = e[4], I = e[5], $ = e[6], B = e[7], U = t[0], V = t[1], W = t[2], F = t[3], G = t[4], H = t[5], K = t[6], z = t[7], Z = 0; r >= 128;) {
            for (k = 0; k < 16; k++) C = 8 * k + Z, P[k] = n[C + 0] << 24 | n[C + 1] << 16 | n[C + 2] << 8 | n[C + 3], R[k] = n[C + 4] << 24 | n[C + 5] << 16 | n[C + 6] << 8 | n[C + 7];
            for (k = 0; k < 80; k++)
              if (i = j, o = L, a = M, s = N, l = D, c = I, u = $, d = B, p = U, h = V, f = W, g = F, m = G, y = H, b = K, v = z, S = B, O = 65535 & (E = z), _ = E >>> 16, T = 65535 & S, A = S >>> 16, S = (D >>> 14 | G << 18) ^ (D >>> 18 | G << 14) ^ (G >>> 9 | D << 23), O += 65535 & (E = (G >>> 14 | D << 18) ^ (G >>> 18 | D << 14) ^ (D >>> 9 | G << 23)), _ += E >>> 16, T += 65535 & S, A += S >>> 16, S = D & I ^ ~D & $, O += 65535 & (E = G & H ^ ~G & K), _ += E >>> 16, T += 65535 & S, A += S >>> 16, S = q[2 * k], O += 65535 & (E = q[2 * k + 1]), _ += E >>> 16, T += 65535 & S, A += S >>> 16, S = P[k % 16], O += 65535 & (E = R[k % 16]), _ += E >>> 16, T += 65535 & S, A += S >>> 16, _ += O >>> 16, T += _ >>> 16, A += T >>> 16, w = 65535 & T | A << 16, x = 65535 & O | _ << 16, S = w, O = 65535 & (E = x), _ = E >>> 16, T = 65535 & S, A = S >>> 16, S = (j >>> 28 | U << 4) ^ (U >>> 2 | j << 30) ^ (U >>> 7 | j << 25), O += 65535 & (E = (U >>> 28 | j << 4) ^ (j >>> 2 | U << 30) ^ (j >>> 7 | U << 25)), _ += E >>> 16, T += 65535 & S, A += S >>> 16, S = j & L ^ j & M ^ L & M, O += 65535 & (E = U & V ^ U & W ^ V & W), _ += E >>> 16, T += 65535 & S, A += S >>> 16, _ += O >>> 16, T += _ >>> 16, A += T >>> 16, d = 65535 & T | A << 16, v = 65535 & O | _ << 16, S = s, O = 65535 & (E = g), _ = E >>> 16, T = 65535 & S, A = S >>> 16, S = w, O += 65535 & (E = x), _ += E >>> 16, T += 65535 & S, A += S >>> 16, _ += O >>> 16, T += _ >>> 16, A += T >>> 16, s = 65535 & T | A << 16, g = 65535 & O | _ << 16, L = i, M = o, N = a, D = s, I = l, $ = c, B = u, j = d, V = p, W = h, F = f, G = g, H = m, K = y, z = b, U = v, k % 16 == 15)
                for (C = 0; C < 16; C++) S = P[C], O = 65535 & (E = R[C]), _ = E >>> 16, T = 65535 & S, A = S >>> 16, S = P[(C + 9) % 16], O += 65535 & (E = R[(C + 9) % 16]), _ += E >>> 16, T += 65535 & S, A += S >>> 16, S = ((w = P[(C + 1) % 16]) >>> 1 | (x = R[(C + 1) % 16]) << 31) ^ (w >>> 8 | x << 24) ^ w >>> 7, O += 65535 & (E = (x >>> 1 | w << 31) ^ (x >>> 8 | w << 24) ^ (x >>> 7 | w << 25)), _ += E >>> 16, T += 65535 & S, A += S >>> 16, S = ((w = P[(C + 14) % 16]) >>> 19 | (x = R[(C + 14) % 16]) << 13) ^ (x >>> 29 | w << 3) ^ w >>> 6, O += 65535 & (E = (x >>> 19 | w << 13) ^ (w >>> 29 | x << 3) ^ (x >>> 6 | w << 26)), _ += E >>> 16, T += 65535 & S, A += S >>> 16, _ += O >>> 16, T += _ >>> 16, A += T >>> 16, P[C] = 65535 & T | A << 16, R[C] = 65535 & O | _ << 16;
            S = j, O = 65535 & (E = U), _ = E >>> 16, T = 65535 & S, A = S >>> 16, S = e[0], O += 65535 & (E = t[0]), _ += E >>> 16, T += 65535 & S, A += S >>> 16, _ += O >>> 16, T += _ >>> 16, A += T >>> 16, e[0] = j = 65535 & T | A << 16, t[0] = U = 65535 & O | _ << 16, S = L, O = 65535 & (E = V), _ = E >>> 16, T = 65535 & S, A = S >>> 16, S = e[1], O += 65535 & (E = t[1]), _ += E >>> 16, T += 65535 & S, A += S >>> 16, _ += O >>> 16, T += _ >>> 16, A += T >>> 16, e[1] = L = 65535 & T | A << 16, t[1] = V = 65535 & O | _ << 16, S = M, O = 65535 & (E = W), _ = E >>> 16, T = 65535 & S, A = S >>> 16, S = e[2], O += 65535 & (E = t[2]), _ += E >>> 16, T += 65535 & S, A += S >>> 16, _ += O >>> 16, T += _ >>> 16, A += T >>> 16, e[2] = M = 65535 & T | A << 16, t[2] = W = 65535 & O | _ << 16, S = N, O = 65535 & (E = F), _ = E >>> 16, T = 65535 & S, A = S >>> 16, S = e[3], O += 65535 & (E = t[3]), _ += E >>> 16, T += 65535 & S, A += S >>> 16, _ += O >>> 16, T += _ >>> 16, A += T >>> 16, e[3] = N = 65535 & T | A << 16, t[3] = F = 65535 & O | _ << 16, S = D, O = 65535 & (E = G), _ = E >>> 16, T = 65535 & S, A = S >>> 16, S = e[4], O += 65535 & (E = t[4]), _ += E >>> 16, T += 65535 & S, A += S >>> 16, _ += O >>> 16, T += _ >>> 16, A += T >>> 16, e[4] = D = 65535 & T | A << 16, t[4] = G = 65535 & O | _ << 16, S = I, O = 65535 & (E = H), _ = E >>> 16, T = 65535 & S, A = S >>> 16, S = e[5], O += 65535 & (E = t[5]), _ += E >>> 16, T += 65535 & S, A += S >>> 16, _ += O >>> 16, T += _ >>> 16, A += T >>> 16, e[5] = I = 65535 & T | A << 16, t[5] = H = 65535 & O | _ << 16, S = $, O = 65535 & (E = K), _ = E >>> 16, T = 65535 & S, A = S >>> 16, S = e[6], O += 65535 & (E = t[6]), _ += E >>> 16, T += 65535 & S, A += S >>> 16, _ += O >>> 16, T += _ >>> 16, A += T >>> 16, e[6] = $ = 65535 & T | A << 16, t[6] = K = 65535 & O | _ << 16, S = B, O = 65535 & (E = z), _ = E >>> 16, T = 65535 & S, A = S >>> 16, S = e[7], O += 65535 & (E = t[7]), _ += E >>> 16, T += 65535 & S, A += S >>> 16, _ += O >>> 16, T += _ >>> 16, A += T >>> 16, e[7] = B = 65535 & T | A << 16, t[7] = z = 65535 & O | _ << 16, Z += 128, r -= 128
          }
          return r
        }

        function Y(e, t, n) {
          var r, i = new Int32Array(8),
            o = new Int32Array(8),
            a = new Uint8Array(256),
            s = n;
          for (i[0] = 1779033703, i[1] = 3144134277, i[2] = 1013904242, i[3] = 2773480762, i[4] = 1359893119, i[5] = 2600822924, i[6] = 528734635, i[7] = 1541459225, o[0] = 4089235720, o[1] = 2227873595, o[2] = 4271175723, o[3] = 1595750129, o[4] = 2917565137, o[5] = 725511199, o[6] = 4215389547, o[7] = 327033209, Z(i, o, t, n), n %= 128, r = 0; r < n; r++) a[r] = t[s - n + r];
          for (a[n] = 128, a[(n = 256 - 128 * (n < 112 ? 1 : 0)) - 9] = 0, g(a, n - 8, s / 536870912 | 0, s << 3), Z(i, o, a, n), r = 0; r < 8; r++) g(e, 8 * r, i[r], o[r]);
          return 0
        }

        function J(e, t) {
          var n = r(),
            i = r(),
            o = r(),
            a = r(),
            s = r(),
            l = r(),
            c = r(),
            u = r(),
            p = r();
          B(n, e[1], e[0]), B(p, t[1], t[0]), U(n, n, p), $(i, e[0], e[1]), $(p, t[0], t[1]), U(i, i, p), U(o, e[3], t[3]), U(o, o, d), U(a, e[2], t[2]), $(a, a, a), B(s, i, n), B(l, a, o), $(c, a, o), $(u, i, n), U(e[0], s, l), U(e[1], u, c), U(e[2], c, l), U(e[3], s, u)
        }

        function Q(e, t, n) {
          var r;
          for (r = 0; r < 4; r++) L(e[r], t[r], n)
        }

        function X(e, t) {
          var n = r(),
            i = r(),
            o = r();
          W(o, t[2]), U(n, t[0], o), U(i, t[1], o), M(e, i), e[31] ^= D(n) << 7
        }

        function ee(e, t, n) {
          var r, i;
          for (R(e[0], s), R(e[1], l), R(e[2], l), R(e[3], s), i = 255; i >= 0; --i) Q(e, t, r = n[i / 8 | 0] >> (7 & i) & 1), J(t, e), J(e, e), Q(e, t, r)
        }

        function et(e, t) {
          var n = [r(), r(), r(), r()];
          R(n[0], p), R(n[1], h), R(n[2], l), U(n[3], p, h), ee(e, n, t)
        }

        function en(e, t, n) {
          var o, a = new Uint8Array(64),
            s = [r(), r(), r(), r()];
          for (n || i(t, 32), Y(a, t, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64, et(s, a), X(e, s), o = 0; o < 32; o++) t[o + 32] = e[o];
          return 0
        }
        var er = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

        function ei(e, t) {
          var n, r, i, o;
          for (r = 63; r >= 32; --r) {
            for (n = 0, i = r - 32, o = r - 12; i < o; ++i) t[i] += n - 16 * t[r] * er[i - (r - 32)], n = Math.floor((t[i] + 128) / 256), t[i] -= 256 * n;
            t[i] += n, t[r] = 0
          }
          for (i = 0, n = 0; i < 32; i++) t[i] += n - (t[31] >> 4) * er[i], n = t[i] >> 8, t[i] &= 255;
          for (i = 0; i < 32; i++) t[i] -= n * er[i];
          for (r = 0; r < 32; r++) t[r + 1] += t[r] >> 8, e[r] = 255 & t[r]
        }

        function eo(e) {
          var t, n = new Float64Array(64);
          for (t = 0; t < 64; t++) n[t] = e[t];
          for (t = 0; t < 64; t++) e[t] = 0;
          ei(e, n)
        }

        function ea(e, t, n, i) {
          var o, a, s = new Uint8Array(64),
            l = new Uint8Array(64),
            c = new Uint8Array(64),
            u = new Float64Array(64),
            d = [r(), r(), r(), r()];
          for (Y(s, i, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64, o = 0; o < n; o++) e[64 + o] = t[o];
          for (o = 0; o < 32; o++) e[32 + o] = s[32 + o];
          for (Y(c, e.subarray(32), n + 32), eo(c), et(d, c), X(e, d), o = 32; o < 64; o++) e[o] = i[o];
          for (Y(l, e, n + 64), eo(l), o = 0; o < 64; o++) u[o] = 0;
          for (o = 0; o < 32; o++) u[o] = c[o];
          for (o = 0; o < 32; o++)
            for (a = 0; a < 32; a++) u[o + a] += l[o] * s[a];
          return ei(e.subarray(32), u), n + 64
        }

        function es(e, t, n, i) {
          var o, a, c, d, p, h, g, m, y = new Uint8Array(32),
            v = new Uint8Array(64),
            w = [r(), r(), r(), r()],
            x = [r(), r(), r(), r()];
          if (n < 64 || (o = r(), a = r(), c = r(), d = r(), p = r(), h = r(), g = r(), (R(x[2], l), I(x[1], i), V(c, x[1]), U(d, c, u), B(c, c, x[2]), $(d, x[2], d), V(p, d), V(h, p), U(g, h, p), U(o, g, c), U(o, o, d), F(o, o), U(o, o, c), U(o, o, d), U(o, o, d), U(x[0], o, d), V(a, x[0]), U(a, a, d), N(a, c) && U(x[0], x[0], f), V(a, x[0]), U(a, a, d), N(a, c)) ? -1 : (D(x[0]) === i[31] >> 7 && B(x[0], s, x[0]), U(x[3], x[0], x[1]), 0))) return -1;
          for (m = 0; m < n; m++) e[m] = t[m];
          for (m = 0; m < 32; m++) e[m + 32] = i[m];
          if (Y(v, e, n), eo(v), ee(w, x, v), et(x, t.subarray(32)), J(w, x), X(y, w), n -= 64, b(t, 0, y, 0)) {
            for (m = 0; m < n; m++) e[m] = 0;
            return -1
          }
          for (m = 0; m < n; m++) e[m] = t[m + 64];
          return n
        }

        function el(e, t) {
          if (32 !== e.length) throw Error("bad key size");
          if (24 !== t.length) throw Error("bad nonce size")
        }

        function ec() {
          for (var e = 0; e < arguments.length; e++)
            if (!(arguments[e] instanceof Uint8Array)) throw TypeError("unexpected type, use Uint8Array")
        }

        function eu(e) {
          for (var t = 0; t < e.length; t++) e[t] = 0
        }
        e.lowlevel = {
          crypto_core_hsalsa20: w,
          crypto_stream_xor: E,
          crypto_stream: S,
          crypto_stream_salsa20_xor: k,
          crypto_stream_salsa20: C,
          crypto_onetimeauth: _,
          crypto_onetimeauth_verify: T,
          crypto_verify_16: y,
          crypto_verify_32: b,
          crypto_secretbox: A,
          crypto_secretbox_open: P,
          crypto_scalarmult: G,
          crypto_scalarmult_base: H,
          crypto_box_beforenm: z,
          crypto_box_afternm: A,
          crypto_box: function(e, t, n, r, i, o) {
            var a = new Uint8Array(32);
            return z(a, i, o), A(e, t, n, r, a)
          },
          crypto_box_open: function(e, t, n, r, i, o) {
            var a = new Uint8Array(32);
            return z(a, i, o), P(e, t, n, r, a)
          },
          crypto_box_keypair: K,
          crypto_hash: Y,
          crypto_sign: ea,
          crypto_sign_keypair: en,
          crypto_sign_open: es,
          crypto_secretbox_KEYBYTES: 32,
          crypto_secretbox_NONCEBYTES: 24,
          crypto_secretbox_ZEROBYTES: 32,
          crypto_secretbox_BOXZEROBYTES: 16,
          crypto_scalarmult_BYTES: 32,
          crypto_scalarmult_SCALARBYTES: 32,
          crypto_box_PUBLICKEYBYTES: 32,
          crypto_box_SECRETKEYBYTES: 32,
          crypto_box_BEFORENMBYTES: 32,
          crypto_box_NONCEBYTES: 24,
          crypto_box_ZEROBYTES: 32,
          crypto_box_BOXZEROBYTES: 16,
          crypto_sign_BYTES: 64,
          crypto_sign_PUBLICKEYBYTES: 32,
          crypto_sign_SECRETKEYBYTES: 64,
          crypto_sign_SEEDBYTES: 32,
          crypto_hash_BYTES: 64,
          gf: r,
          D: u,
          L: er,
          pack25519: M,
          unpack25519: I,
          M: U,
          A: $,
          S: V,
          Z: B,
          pow2523: F,
          add: J,
          set25519: R,
          modL: ei,
          scalarmult: ee,
          scalarbase: et
        }, e.randomBytes = function(e) {
          var t = new Uint8Array(e);
          return i(t, e), t
        }, e.secretbox = function(e, t, n) {
          ec(e, t, n), el(n, t);
          for (var r = new Uint8Array(32 + e.length), i = new Uint8Array(r.length), o = 0; o < e.length; o++) r[o + 32] = e[o];
          return A(i, r, r.length, t, n), i.subarray(16)
        }, e.secretbox.open = function(e, t, n) {
          ec(e, t, n), el(n, t);
          for (var r = new Uint8Array(16 + e.length), i = new Uint8Array(r.length), o = 0; o < e.length; o++) r[o + 16] = e[o];
          return r.length < 32 || 0 !== P(i, r, r.length, t, n) ? null : i.subarray(32)
        }, e.secretbox.keyLength = 32, e.secretbox.nonceLength = 24, e.secretbox.overheadLength = 16, e.scalarMult = function(e, t) {
          if (ec(e, t), 32 !== e.length) throw Error("bad n size");
          if (32 !== t.length) throw Error("bad p size");
          var n = new Uint8Array(32);
          return G(n, e, t), n
        }, e.scalarMult.base = function(e) {
          if (ec(e), 32 !== e.length) throw Error("bad n size");
          var t = new Uint8Array(32);
          return H(t, e), t
        }, e.scalarMult.scalarLength = 32, e.scalarMult.groupElementLength = 32, e.box = function(t, n, r, i) {
          var o = e.box.before(r, i);
          return e.secretbox(t, n, o)
        }, e.box.before = function(e, t) {
          ec(e, t),
            function(e, t) {
              if (32 !== e.length) throw Error("bad public key size");
              if (32 !== t.length) throw Error("bad secret key size")
            }(e, t);
          var n = new Uint8Array(32);
          return z(n, e, t), n
        }, e.box.after = e.secretbox, e.box.open = function(t, n, r, i) {
          var o = e.box.before(r, i);
          return e.secretbox.open(t, n, o)
        }, e.box.open.after = e.secretbox.open, e.box.keyPair = function() {
          var e = new Uint8Array(32),
            t = new Uint8Array(32);
          return K(e, t), {
            publicKey: e,
            secretKey: t
          }
        }, e.box.keyPair.fromSecretKey = function(e) {
          if (ec(e), 32 !== e.length) throw Error("bad secret key size");
          var t = new Uint8Array(32);
          return H(t, e), {
            publicKey: t,
            secretKey: new Uint8Array(e)
          }
        }, e.box.publicKeyLength = 32, e.box.secretKeyLength = 32, e.box.sharedKeyLength = 32, e.box.nonceLength = 24, e.box.overheadLength = e.secretbox.overheadLength, e.sign = function(e, t) {
          if (ec(e, t), 64 !== t.length) throw Error("bad secret key size");
          var n = new Uint8Array(64 + e.length);
          return ea(n, e, e.length, t), n
        }, e.sign.open = function(e, t) {
          if (ec(e, t), 32 !== t.length) throw Error("bad public key size");
          var n = new Uint8Array(e.length),
            r = es(n, e, e.length, t);
          if (r < 0) return null;
          for (var i = new Uint8Array(r), o = 0; o < i.length; o++) i[o] = n[o];
          return i
        }, e.sign.detached = function(t, n) {
          for (var r = e.sign(t, n), i = new Uint8Array(64), o = 0; o < i.length; o++) i[o] = r[o];
          return i
        }, e.sign.detached.verify = function(e, t, n) {
          if (ec(e, t, n), 64 !== t.length) throw Error("bad signature size");
          if (32 !== n.length) throw Error("bad public key size");
          var r, i = new Uint8Array(64 + e.length),
            o = new Uint8Array(64 + e.length);
          for (r = 0; r < 64; r++) i[r] = t[r];
          for (r = 0; r < e.length; r++) i[r + 64] = e[r];
          return es(o, i, i.length, n) >= 0
        }, e.sign.keyPair = function() {
          var e = new Uint8Array(32),
            t = new Uint8Array(64);
          return en(e, t), {
            publicKey: e,
            secretKey: t
          }
        }, e.sign.keyPair.fromSecretKey = function(e) {
          if (ec(e), 64 !== e.length) throw Error("bad secret key size");
          for (var t = new Uint8Array(32), n = 0; n < t.length; n++) t[n] = e[32 + n];
          return {
            publicKey: t,
            secretKey: new Uint8Array(e)
          }
        }, e.sign.keyPair.fromSeed = function(e) {
          if (ec(e), 32 !== e.length) throw Error("bad seed size");
          for (var t = new Uint8Array(32), n = new Uint8Array(64), r = 0; r < 32; r++) n[r] = e[r];
          return en(t, n, !0), {
            publicKey: t,
            secretKey: n
          }
        }, e.sign.publicKeyLength = 32, e.sign.secretKeyLength = 64, e.sign.seedLength = 32, e.sign.signatureLength = 64, e.hash = function(e) {
          ec(e);
          var t = new Uint8Array(64);
          return Y(t, e, e.length), t
        }, e.hash.hashLength = 64, e.verify = function(e, t) {
          return ec(e, t), 0 !== e.length && 0 !== t.length && e.length === t.length && 0 === m(e, 0, t, 0, e.length)
        }, e.setPRNG = function(e) {
          i = e
        }, (t = "undefined" != typeof self ? self.crypto || self.msCrypto : null) && t.getRandomValues ? e.setPRNG(function(e, n) {
          var r, i = new Uint8Array(n);
          for (r = 0; r < n; r += 65536) t.getRandomValues(i.subarray(r, r + Math.min(n - r, 65536)));
          for (r = 0; r < n; r++) e[r] = i[r];
          eu(i)
        }) : (t = n(5024)) && t.randomBytes && e.setPRNG(function(e, n) {
          var r, i = t.randomBytes(n);
          for (r = 0; r < n; r++) e[r] = i[r];
          eu(i)
        })
      }(e.exports ? e.exports : self.nacl = self.nacl || {})
    },
    2238: function(e, t, n) {
      var r;
      ! function(i, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          l = "object",
          c = "string",
          u = "major",
          d = "model",
          p = "name",
          h = "type",
          f = "vendor",
          g = "version",
          m = "architecture",
          y = "console",
          b = "mobile",
          v = "tablet",
          w = "smarttv",
          x = "wearable",
          k = "embedded",
          C = "Amazon",
          S = "Apple",
          E = "ASUS",
          O = "BlackBerry",
          _ = "Browser",
          T = "Chrome",
          A = "Firefox",
          P = "Google",
          R = "Huawei",
          j = "Microsoft",
          L = "Motorola",
          M = "Opera",
          N = "Samsung",
          D = "Sharp",
          I = "Sony",
          $ = "Xiaomi",
          B = "Zebra",
          U = "Facebook",
          V = "Chromium OS",
          W = "Mac OS",
          F = function(e, t) {
            var n = {};
            for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
            return n
          },
          G = function(e) {
            for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
            return t
          },
          H = function(e, t) {
            return typeof e === c && -1 !== K(t).indexOf(K(e))
          },
          K = function(e) {
            return e.toLowerCase()
          },
          z = function(e, t) {
            if (typeof e === c) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
          },
          q = function(e, t) {
            for (var n, r, i, s, c, u, d = 0; d < t.length && !c;) {
              var p = t[d],
                h = t[d + 1];
              for (n = r = 0; n < p.length && !c && p[n];)
                if (c = p[n++].exec(e))
                  for (i = 0; i < h.length; i++) u = c[++r], typeof(s = h[i]) === l && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : o : this[s[0]] = u ? s[1].call(this, u, s[2]) : o : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : o) : this[s] = u || o;
              d += 2
            }
          },
          Z = function(e, t) {
            for (var n in t)
              if (typeof t[n] === l && t[n].length > 0) {
                for (var r = 0; r < t[n].length; r++)
                  if (H(t[n][r], e)) return "?" === n ? o : n
              } else if (H(t[n], e)) return "?" === n ? o : n;
            return e
          },
          Y = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            "8.1": "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          },
          J = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [g, [p, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [g, [p, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [p, g],
              [/opios[\/ ]+([\w\.]+)/i],
              [g, [p, M + " Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [g, [p, M]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [g, [p, "Baidu"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [p, g],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [g, [p, "UC" + _]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [g, [p, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [g, [p, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [g, [p, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [g, [p, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [g, [p, "Smart Lenovo " + _]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [p, /(.+)/, "$1 Secure " + _], g
              ],
              [/\bfocus\/([\w\.]+)/i],
              [g, [p, A + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [g, [p, M + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [g, [p, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [g, [p, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [g, [p, M + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [g, [p, "MIUI " + _]],
              [/fxios\/([-\w\.]+)/i],
              [g, [p, A]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [
                [p, "360 " + _]
              ],
              [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
              [
                [p, /(.+)/, "$1 " + _], g
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [g, [p, N + " Internet"]],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [
                [p, /_/g, " "], g
              ],
              [/metasr[\/ ]?([\d\.]+)/i],
              [g, [p, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [p, "Sogou Mobile"], g
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
              [p, g],
              [/(lbbrowser)/i, /\[(linkedin)app\]/i],
              [p],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [p, U], g
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [p, g],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [g, [p, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [g, [p, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [g, [p, T + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [p, T + " WebView"], g
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [g, [p, "Android " + _]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [p, g],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [g, [p, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [g, p],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [p, [g, Z, {
                "1.0": "/8",
                "1.2": "/1",
                "1.3": "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
              }]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [p, g],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [p, "Netscape"], g
              ],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [g, [p, A + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
              [p, g],
              [/(cobalt)\/([\w\.]+)/i],
              [p, [g, /master.|lts./, ""]]
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [
                [m, "amd64"]
              ],
              [/(ia32(?=;))/i],
              [
                [m, K]
              ],
              [/((?:i[346]|x)86)[;\)]/i],
              [
                [m, "ia32"]
              ],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [
                [m, "arm64"]
              ],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [
                [m, "armhf"]
              ],
              [/windows (ce|mobile); ppc;/i],
              [
                [m, "arm"]
              ],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [
                [m, /ower/, "", K]
              ],
              [/(sun4\w)[;\)]/i],
              [
                [m, "sparc"]
              ],
              [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
              [
                [m, K]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [d, [f, N],
                [h, v]
              ],
              [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
              [d, [f, N],
                [h, b]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [f, S],
                [h, b]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [d, [f, S],
                [h, v]
              ],
              [/(macintosh);/i],
              [d, [f, S]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [f, D],
                [h, b]
              ],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [d, [f, R],
                [h, v]
              ],
              [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [d, [f, R],
                [h, b]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
              [
                [d, /_/g, " "],
                [f, $],
                [h, b]
              ],
              [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [d, /_/g, " "],
                [f, $],
                [h, v]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [d, [f, "OPPO"],
                [h, b]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [f, "Vivo"],
                [h, b]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [f, "Realme"],
                [h, b]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [d, [f, L],
                [h, b]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [f, L],
                [h, v]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [f, "LG"],
                [h, v]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [d, [f, "LG"],
                [h, b]
              ],
              [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
              [d, [f, "Lenovo"],
                [h, v]
              ],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [d, /_/g, " "],
                [f, "Nokia"],
                [h, b]
              ],
              [/(pixel c)\b/i],
              [d, [f, P],
                [h, v]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [f, P],
                [h, b]
              ],
              [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [d, [f, I],
                [h, b]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [f, I],
                [h, v]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [d, [f, "OnePlus"],
                [h, b]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [d, [f, C],
                [h, v]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [f, C],
                [h, b]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, f, [h, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [f, O],
                [h, b]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [d, [f, E],
                [h, v]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [f, E],
                [h, b]
              ],
              [/(nexus 9)/i],
              [d, [f, "HTC"],
                [h, v]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [f, [d, /_/g, " "],
                [h, b]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [f, "Acer"],
                [h, v]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [f, "Meizu"],
                [h, b]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [f, "Ulefone"],
                [h, b]
              ],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
              [f, d, [h, b]],
              [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [f, d, [h, v]],
              [/(surface duo)/i],
              [d, [f, j],
                [h, v]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [f, "Fairphone"],
                [h, b]
              ],
              [/(u304aa)/i],
              [d, [f, "AT&T"],
                [h, b]
              ],
              [/\bsie-(\w*)/i],
              [d, [f, "Siemens"],
                [h, b]
              ],
              [/\b(rct\w+) b/i],
              [d, [f, "RCA"],
                [h, v]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [f, "Dell"],
                [h, v]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [f, "Verizon"],
                [h, v]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [f, "Barnes & Noble"],
                [h, v]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [d, [f, "NuVision"],
                [h, v]
              ],
              [/\b(k88) b/i],
              [d, [f, "ZTE"],
                [h, v]
              ],
              [/\b(nx\d{3}j) b/i],
              [d, [f, "ZTE"],
                [h, b]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [f, "Swiss"],
                [h, b]
              ],
              [/\b(zur\d{3}) b/i],
              [d, [f, "Swiss"],
                [h, v]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [f, "Zeki"],
                [h, v]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [f, "Dragon Touch"], d, [h, v]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [f, "Insignia"],
                [h, v]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [f, "NextBook"],
                [h, v]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [f, "Voice"], d, [h, b]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [f, "LvTel"], d, [h, b]
              ],
              [/\b(ph-1) /i],
              [d, [f, "Essential"],
                [h, b]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [f, "Envizen"],
                [h, v]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [f, "MachSpeed"],
                [h, v]
              ],
              [/\btu_(1491) b/i],
              [d, [f, "Rotor"],
                [h, v]
              ],
              [/(shield[\w ]+) b/i],
              [d, [f, "Nvidia"],
                [h, v]
              ],
              [/(sprint) (\w+)/i],
              [f, d, [h, b]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [f, j],
                [h, b]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [f, B],
                [h, v]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [f, B],
                [h, b]
              ],
              [/smart-tv.+(samsung)/i],
              [f, [h, w]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [f, N],
                [h, w]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [f, "LG"],
                [h, w]
              ],
              [/(apple) ?tv/i],
              [f, [d, S + " TV"],
                [h, w]
              ],
              [/crkey/i],
              [
                [d, T + "cast"],
                [f, P],
                [h, w]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [f, C],
                [h, w]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [f, D],
                [h, w]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [f, I],
                [h, w]
              ],
              [/(mitv-\w{5}) bui/i],
              [d, [f, $],
                [h, w]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [f, d, [h, w]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [f, z],
                [d, z],
                [h, w]
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [h, w]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [f, d, [h, y]],
              [/droid.+; (shield) bui/i],
              [d, [f, "Nvidia"],
                [h, y]
              ],
              [/(playstation [345portablevi]+)/i],
              [d, [f, I],
                [h, y]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [f, j],
                [h, y]
              ],
              [/((pebble))app/i],
              [f, d, [h, x]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [f, S],
                [h, x]
              ],
              [/droid.+; (glass) \d/i],
              [d, [f, P],
                [h, x]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [f, B],
                [h, x]
              ],
              [/(quest( 2| pro)?)/i],
              [d, [f, U],
                [h, x]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [f, [h, k]],
              [/(aeobc)\b/i],
              [d, [f, C],
                [h, k]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [d, [h, b]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [h, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [h, v]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [h, b]
              ],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [d, [f, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [g, [p, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [g, [p, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [p, g],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [g, p]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [p, g],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [p, [g, Z, Y]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [g, Z, Y],
                [p, "Windows"]
              ],
              [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [g, /_/g, "."],
                [p, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [p, W],
                [g, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [g, p],
              [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
              [p, g],
              [/\(bb(10);/i],
              [g, [p, O]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [g, [p, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [g, [p, A + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [g, [p, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [g, [p, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [g, [p, T + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [p, V], g
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [p, g],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [p, "Solaris"], g
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [p, g]
            ]
          },
          Q = function(e, t) {
            if (typeof e === l && (t = e, e = o), !(this instanceof Q)) return new Q(e, t).getResult();
            var n = typeof i !== s && i.navigator ? i.navigator : o,
              r = e || (n && n.userAgent ? n.userAgent : ""),
              y = n && n.userAgentData ? n.userAgentData : o,
              w = t ? F(J, t) : J,
              x = n && n.userAgent == r;
            return this.getBrowser = function() {
              var e, t = {};
              return t[p] = o, t[g] = o, q.call(t, r, w.browser), t[u] = typeof(e = t[g]) === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, x && n && n.brave && typeof n.brave.isBrave == a && (t[p] = "Brave"), t
            }, this.getCPU = function() {
              var e = {};
              return e[m] = o, q.call(e, r, w.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[f] = o, e[d] = o, e[h] = o, q.call(e, r, w.device), x && !e[h] && y && y.mobile && (e[h] = b), x && "Macintosh" == e[d] && n && typeof n.standalone !== s && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[d] = "iPad", e[h] = v), e
            }, this.getEngine = function() {
              var e = {};
              return e[p] = o, e[g] = o, q.call(e, r, w.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[p] = o, e[g] = o, q.call(e, r, w.os), x && !e[p] && y && "Unknown" != y.platform && (e[p] = y.platform.replace(/chrome os/i, V).replace(/macos/i, W)), e
            }, this.getResult = function() {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
              }
            }, this.getUA = function() {
              return r
            }, this.setUA = function(e) {
              return r = typeof e === c && e.length > 500 ? z(e, 500) : e, this
            }, this.setUA(r), this
          };
        Q.VERSION = "0.7.37", Q.BROWSER = G([p, g, u]), Q.CPU = G([m]), Q.DEVICE = G([d, f, h, y, b, w, v, x, k]), Q.ENGINE = Q.OS = G([p, g]), typeof t !== s ? (e.exports && (t = e.exports = Q), t.UAParser = Q) : n.amdO ? o !== (r = (function() {
          return Q
        }).call(t, n, t, e)) && (e.exports = r) : typeof i !== s && (i.UAParser = Q);
        var X = typeof i !== s && (i.jQuery || i.Zepto);
        if (X && !X.ua) {
          var ee = new Q;
          X.ua = ee.getResult(), X.ua.get = function() {
            return ee.getUA()
          }, X.ua.set = function(e) {
            ee.setUA(e);
            var t = ee.getResult();
            for (var n in t) X.ua[n] = t[n]
          }
        }
      }("object" == typeof window ? window : this)
    },
    3771: function(e, t, n) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var r = n(7294),
        i = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        o = r.useSyncExternalStore,
        a = r.useRef,
        s = r.useEffect,
        l = r.useMemo,
        c = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
        var d = a(null);
        if (null === d.current) {
          var p = {
            hasValue: !1,
            value: null
          };
          d.current = p
        } else p = d.current;
        var h = o(e, (d = l(function() {
          function e(e) {
            if (!s) {
              if (s = !0, o = e, e = r(e), void 0 !== u && p.hasValue) {
                var t = p.value;
                if (u(t, e)) return a = t
              }
              return a = e
            }
            if (t = a, i(o, e)) return t;
            var n = r(e);
            return void 0 !== u && u(t, n) ? t : (o = e, a = n)
          }
          var o, a, s = !1,
            l = void 0 === n ? null : n;
          return [function() {
            return e(t())
          }, null === l ? void 0 : function() {
            return e(l())
          }]
        }, [t, n, r, u]))[0], d[1]);
        return s(function() {
          p.hasValue = !0, p.value = h
        }, [h]), c(h), h
      }
    },
    1103: function(e, t, n) {
      "use strict";
      e.exports = n(3771)
    },
    1739: function(e) {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      }
    },
    8924: function() {},
    5024: function() {},
    3967: function(e, t) {
      var n;
      /*!
      	Copyright (c) 2018 Jed Watson.
      	Licensed under the MIT License (MIT), see
      	http://jedwatson.github.io/classnames
      */
      ! function() {
        "use strict";
        var r = {}.hasOwnProperty;

        function i() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n && (e = o(e, function(e) {
              if ("string" == typeof e || "number" == typeof e) return e;
              if ("object" != typeof e) return "";
              if (Array.isArray(e)) return i.apply(null, e);
              if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
              var t = "";
              for (var n in e) r.call(e, n) && e[n] && (t = o(t, n));
              return t
            }(n)))
          }
          return e
        }

        function o(e, t) {
          return t ? e ? e + " " + t : e + t : e
        }
        e.exports ? (i.default = i, e.exports = i) : void 0 !== (n = (function() {
          return i
        }).apply(t, [])) && (e.exports = n)
      }()
    },
    6656: function(e, t, n) {
      "use strict";
      n.d(t, {
        Z: function() {
          return i
        }
      });
      var r = n(1002);

      function i(e, t, n) {
        var i;
        return (i = function(e, t) {
          if ("object" != (0, r.Z)(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != (0, r.Z)(i)) return i;
            throw TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(t, "string"), (t = "symbol" == (0, r.Z)(i) ? i : i + "") in e) ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
    },
    7462: function(e, t, n) {
      "use strict";

      function r() {
        return (r = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(null, arguments)
      }
      n.d(t, {
        Z: function() {
          return r
        }
      })
    },
    5987: function(e, t, n) {
      "use strict";
      n.d(t, {
        Z: function() {
          return i
        }
      });
      var r = n(3366);

      function i(e, t) {
        if (null == e) return {};
        var n, i, o = (0, r.Z)(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++) n = a[i], t.includes(n) || ({}).propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
      }
    },
    3366: function(e, t, n) {
      "use strict";

      function r(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if (({}).hasOwnProperty.call(e, r)) {
            if (t.includes(r)) continue;
            n[r] = e[r]
          } return n
      }
      n.d(t, {
        Z: function() {
          return r
        }
      })
    },
    1002: function(e, t, n) {
      "use strict";

      function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }
      n.d(t, {
        Z: function() {
          return r
        }
      })
    },
    7471: function(e, t, n) {
      "use strict";
      n.d(t, {
        xC: function() {
          return eE
        },
        oM: function() {
          return eP
        }
      });
      var r, i, o = Symbol.for("immer-nothing"),
        a = Symbol.for("immer-draftable"),
        s = Symbol.for("immer-state");

      function l(e, ...t) {
        throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
      }
      var c = Object.getPrototypeOf;

      function u(e) {
        return !!e && !!e[s]
      }

      function d(e) {
        return !!e && (h(e) || Array.isArray(e) || !!e[a] || !!e.constructor?.[a] || b(e) || v(e))
      }
      var p = Object.prototype.constructor.toString();

      function h(e) {
        if (!e || "object" != typeof e) return !1;
        let t = c(e);
        if (null === t) return !0;
        let n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        return n === Object || "function" == typeof n && Function.toString.call(n) === p
      }

      function f(e, t) {
        0 === g(e) ? Reflect.ownKeys(e).forEach(n => {
          t(n, e[n], e)
        }) : e.forEach((n, r) => t(r, n, e))
      }

      function g(e) {
        let t = e[s];
        return t ? t.type_ : Array.isArray(e) ? 1 : b(e) ? 2 : v(e) ? 3 : 0
      }

      function m(e, t) {
        return 2 === g(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
      }

      function y(e, t, n) {
        let r = g(e);
        2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
      }

      function b(e) {
        return e instanceof Map
      }

      function v(e) {
        return e instanceof Set
      }

      function w(e) {
        return e.copy_ || e.base_
      }

      function x(e, t) {
        if (b(e)) return new Map(e);
        if (v(e)) return new Set(e);
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        if (!t && h(e)) return c(e) ? {
          ...e
        } : Object.assign(Object.create(null), e);
        let n = Object.getOwnPropertyDescriptors(e);
        delete n[s];
        let r = Reflect.ownKeys(n);
        for (let t = 0; t < r.length; t++) {
          let i = r[t],
            o = n[i];
          !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (n[i] = {
            configurable: !0,
            writable: !0,
            enumerable: o.enumerable,
            value: e[i]
          })
        }
        return Object.create(c(e), n)
      }

      function k(e, t = !1) {
        return S(e) || u(e) || !d(e) || (g(e) > 1 && (e.set = e.add = e.clear = e.delete = C), Object.freeze(e), t && Object.entries(e).forEach(([e, t]) => k(t, !0))), e
      }

      function C() {
        l(2)
      }

      function S(e) {
        return Object.isFrozen(e)
      }
      var E = {};

      function O(e) {
        let t = E[e];
        return t || l(0, e), t
      }

      function _(e, t) {
        t && (O("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
      }

      function T(e) {
        A(e), e.drafts_.forEach(R), e.drafts_ = null
      }

      function A(e) {
        e === i && (i = e.parent_)
      }

      function P(e) {
        return i = {
          drafts_: [],
          parent_: i,
          immer_: e,
          canAutoFreeze_: !0,
          unfinalizedDrafts_: 0
        }
      }

      function R(e) {
        let t = e[s];
        0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0
      }

      function j(e, t) {
        t.unfinalizedDrafts_ = t.drafts_.length;
        let n = t.drafts_[0];
        return void 0 !== e && e !== n ? (n[s].modified_ && (T(t), l(4)), d(e) && (e = L(t, e), t.parent_ || N(t, e)), t.patches_ && O("Patches").generateReplacementPatches_(n[s].base_, e, t.patches_, t.inversePatches_)) : e = L(t, n, []), T(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== o ? e : void 0
      }

      function L(e, t, n) {
        if (S(t)) return t;
        let r = t[s];
        if (!r) return f(t, (i, o) => M(e, r, t, i, o, n)), t;
        if (r.scope_ !== e) return t;
        if (!r.modified_) return N(e, r.base_, !0), r.base_;
        if (!r.finalized_) {
          r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
          let t = r.copy_,
            i = t,
            o = !1;
          3 === r.type_ && (i = new Set(t), t.clear(), o = !0), f(i, (i, a) => M(e, r, t, i, a, n, o)), N(e, t, !1), n && e.patches_ && O("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_)
        }
        return r.copy_
      }

      function M(e, t, n, r, i, o, a) {
        if (u(i)) {
          let a = L(e, i, o && t && 3 !== t.type_ && !m(t.assigned_, r) ? o.concat(r) : void 0);
          if (y(n, r, a), !u(a)) return;
          e.canAutoFreeze_ = !1
        } else a && n.add(i);
        if (d(i) && !S(i)) {
          if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
          L(e, i), (!t || !t.scope_.parent_) && "symbol" != typeof r && Object.prototype.propertyIsEnumerable.call(n, r) && N(e, i)
        }
      }

      function N(e, t, n = !1) {
        !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && k(t, n)
      }
      var D = {
          get(e, t) {
            if (t === s) return e;
            let n = w(e);
            if (!m(n, t)) return function(e, t, n) {
              let r = B(t, n);
              return r ? "value" in r ? r.value : r.get?.call(e.draft_) : void 0
            }(e, n, t);
            let r = n[t];
            return e.finalized_ || !d(r) ? r : r === $(e.base_, t) ? (V(e), e.copy_[t] = W(r, e)) : r
          },
          has: (e, t) => t in w(e),
          ownKeys: e => Reflect.ownKeys(w(e)),
          set(e, t, n) {
            let r = B(w(e), t);
            if (r?.set) return r.set.call(e.draft_, n), !0;
            if (!e.modified_) {
              let r = $(w(e), t),
                i = r?.[s];
              if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_[t] = !1, !0;
              if ((n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r) && (void 0 !== n || m(e.base_, t))) return !0;
              V(e), U(e)
            }
            return !!(e.copy_[t] === n && (void 0 !== n || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = n, e.assigned_[t] = !0, !0)
          },
          deleteProperty: (e, t) => (void 0 !== $(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, V(e), U(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
          getOwnPropertyDescriptor(e, t) {
            let n = w(e),
              r = Reflect.getOwnPropertyDescriptor(n, t);
            return r ? {
              writable: !0,
              configurable: 1 !== e.type_ || "length" !== t,
              enumerable: r.enumerable,
              value: n[t]
            } : r
          },
          defineProperty() {
            l(11)
          },
          getPrototypeOf: e => c(e.base_),
          setPrototypeOf() {
            l(12)
          }
        },
        I = {};

      function $(e, t) {
        let n = e[s];
        return (n ? w(n) : e)[t]
      }

      function B(e, t) {
        if (!(t in e)) return;
        let n = c(e);
        for (; n;) {
          let e = Object.getOwnPropertyDescriptor(n, t);
          if (e) return e;
          n = c(n)
        }
      }

      function U(e) {
        !e.modified_ && (e.modified_ = !0, e.parent_ && U(e.parent_))
      }

      function V(e) {
        e.copy_ || (e.copy_ = x(e.base_, e.scope_.immer_.useStrictShallowCopy_))
      }

      function W(e, t) {
        let n = b(e) ? O("MapSet").proxyMap_(e, t) : v(e) ? O("MapSet").proxySet_(e, t) : function(e, t) {
          let n = Array.isArray(e),
            r = {
              type_: n ? 1 : 0,
              scope_: t ? t.scope_ : i,
              modified_: !1,
              finalized_: !1,
              assigned_: {},
              parent_: t,
              base_: e,
              draft_: null,
              copy_: null,
              revoke_: null,
              isManual_: !1
            },
            o = r,
            a = D;
          n && (o = [r], a = I);
          let {
            revoke: s,
            proxy: l
          } = Proxy.revocable(o, a);
          return r.draft_ = l, r.revoke_ = s, l
        }(e, t);
        return (t ? t.scope_ : i).drafts_.push(n), n
      }

      function F(e) {
        return u(e) || l(10, e),
          function e(t) {
            let n;
            if (!d(t) || S(t)) return t;
            let r = t[s];
            if (r) {
              if (!r.modified_) return r.base_;
              r.finalized_ = !0, n = x(t, r.scope_.immer_.useStrictShallowCopy_)
            } else n = x(t, !0);
            return f(n, (t, r) => {
              y(n, t, e(r))
            }), r && (r.finalized_ = !1), n
          }(e)
      }
      f(D, (e, t) => {
        I[e] = function() {
          return arguments[0] = arguments[0][0], t.apply(this, arguments)
        }
      }), I.deleteProperty = function(e, t) {
        return I.set.call(this, e, t, void 0)
      }, I.set = function(e, t, n) {
        return D.set.call(this, e[0], t, n, e[0])
      };
      var G = new class {
          constructor(e) {
            this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, n) => {
              let r;
              if ("function" == typeof e && "function" != typeof t) {
                let n = t;
                t = e;
                let r = this;
                return function(e = n, ...i) {
                  return r.produce(e, e => t.call(this, e, ...i))
                }
              }
              if ("function" != typeof t && l(6), void 0 !== n && "function" != typeof n && l(7), d(e)) {
                let i = P(this),
                  o = W(e, void 0),
                  a = !0;
                try {
                  r = t(o), a = !1
                } finally {
                  a ? T(i) : A(i)
                }
                return _(i, n), j(r, i)
              }
              if (e && "object" == typeof e) l(1, e);
              else {
                if (void 0 === (r = t(e)) && (r = e), r === o && (r = void 0), this.autoFreeze_ && k(r, !0), n) {
                  let t = [],
                    i = [];
                  O("Patches").generateReplacementPatches_(e, r, t, i), n(t, i)
                }
                return r
              }
            }, this.produceWithPatches = (e, t) => {
              let n, r;
              return "function" == typeof e ? (t, ...n) => this.produceWithPatches(t, t => e(t, ...n)) : [this.produce(e, t, (e, t) => {
                n = e, r = t
              }), n, r]
            }, "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e?.useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
          }
          createDraft(e) {
            d(e) || l(8), u(e) && (e = F(e));
            let t = P(this),
              n = W(e, void 0);
            return n[s].isManual_ = !0, A(t), n
          }
          finishDraft(e, t) {
            let n = e && e[s];
            n && n.isManual_ || l(9);
            let {
              scope_: r
            } = n;
            return _(r, t), j(void 0, r)
          }
          setAutoFreeze(e) {
            this.autoFreeze_ = e
          }
          setUseStrictShallowCopy(e) {
            this.useStrictShallowCopy_ = e
          }
          applyPatches(e, t) {
            let n;
            for (n = t.length - 1; n >= 0; n--) {
              let r = t[n];
              if (0 === r.path.length && "replace" === r.op) {
                e = r.value;
                break
              }
            }
            n > -1 && (t = t.slice(n + 1));
            let r = O("Patches").applyPatches_;
            return u(e) ? r(e, t) : this.produce(e, e => r(e, t))
          }
        },
        H = G.produce;
      G.produceWithPatches.bind(G), G.setAutoFreeze.bind(G), G.setUseStrictShallowCopy.bind(G), G.applyPatches.bind(G), G.createDraft.bind(G), G.finishDraft.bind(G);
      var K = e => Array.isArray(e) ? e : [e],
        z = 0,
        q = class {
          revision = z;
          _value;
          _lastValue;
          _isEqual = Z;
          constructor(e, t = Z) {
            this._value = this._lastValue = e, this._isEqual = t
          }
          get value() {
            return this._value
          }
          set value(e) {
            this.value !== e && (this._value = e, this.revision = ++z)
          }
        };

      function Z(e, t) {
        return e === t
      }

      function Y(e) {
        return e instanceof q || console.warn("Not a valid cell! ", e), e.value
      }
      var J = (e, t) => !1;

      function Q() {
        return function(e, t = Z) {
          return new q(null, t)
        }(0, J)
      }
      var X = e => {
        let t = e.collectionTag;
        null === t && (t = e.collectionTag = Q()), Y(t)
      };
      Symbol();
      var ee = 0,
        et = Object.getPrototypeOf({}),
        en = class {
          constructor(e) {
            this.value = e, this.value = e, this.tag.value = e
          }
          proxy = new Proxy(this, er);
          tag = Q();
          tags = {};
          children = {};
          collectionTag = null;
          id = ee++
        },
        er = {
          get: (e, t) => (function() {
            let {
              value: n
            } = e, r = Reflect.get(n, t);
            if ("symbol" == typeof t || t in et) return r;
            if ("object" == typeof r && null !== r) {
              let n = e.children[t];
              return void 0 === n && (n = e.children[t] = Array.isArray(r) ? new ei(r) : new en(r)), n.tag && Y(n.tag), n.proxy
            } {
              let n = e.tags[t];
              return void 0 === n && ((n = e.tags[t] = Q()).value = r), Y(n), r
            }
          })(),
          ownKeys: e => (X(e), Reflect.ownKeys(e.value)),
          getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e.value, t),
          has: (e, t) => Reflect.has(e.value, t)
        },
        ei = class {
          constructor(e) {
            this.value = e, this.value = e, this.tag.value = e
          }
          proxy = new Proxy([this], eo);
          tag = Q();
          tags = {};
          children = {};
          collectionTag = null;
          id = ee++
        },
        eo = {
          get: ([e], t) => ("length" === t && X(e), er.get(e, t)),
          ownKeys: ([e]) => er.ownKeys(e),
          getOwnPropertyDescriptor: ([e], t) => er.getOwnPropertyDescriptor(e, t),
          has: ([e], t) => er.has(e, t)
        },
        ea = "undefined" != typeof WeakRef ? WeakRef : class {
          constructor(e) {
            this.value = e
          }
          deref() {
            return this.value
          }
        };

      function es() {
        return {
          s: 0,
          v: void 0,
          o: null,
          p: null
        }
      }

      function el(e, t = {}) {
        let n, r = es(),
          {
            resultEqualityCheck: i
          } = t,
          o = 0;

        function a() {
          let t, a = r,
            {
              length: s
            } = arguments;
          for (let e = 0; e < s; e++) {
            let t = arguments[e];
            if ("function" == typeof t || "object" == typeof t && null !== t) {
              let e = a.o;
              null === e && (a.o = e = new WeakMap);
              let n = e.get(t);
              void 0 === n ? (a = es(), e.set(t, a)) : a = n
            } else {
              let e = a.p;
              null === e && (a.p = e = new Map);
              let n = e.get(t);
              void 0 === n ? (a = es(), e.set(t, a)) : a = n
            }
          }
          let l = a;
          if (1 === a.s ? t = a.v : (t = e.apply(null, arguments), o++), l.s = 1, i) {
            let e = n?.deref?.() ?? n;
            null != e && i(e, t) && (t = e, 0 !== o && o--), n = "object" == typeof t && null !== t || "function" == typeof t ? new ea(t) : t
          }
          return l.v = t, t
        }
        return a.clearCache = () => {
          r = es(), a.resetResultsCount()
        }, a.resultsCount = () => o, a.resetResultsCount = () => {
          o = 0
        }, a
      }

      function ec(e, ...t) {
        let n = "function" == typeof e ? {
            memoize: e,
            memoizeOptions: t
          } : e,
          r = (...e) => {
            let t, r = 0,
              i = 0,
              o = {},
              a = e.pop();
            "object" == typeof a && (o = a, a = e.pop()),
              function(e, t = `expected a function, instead received ${typeof e}`) {
                if ("function" != typeof e) throw TypeError(t)
              }(a, `createSelector expects an output function after the inputs, but received: [${typeof a}]`);
            let {
              memoize: s,
              memoizeOptions: l = [],
              argsMemoize: c = el,
              argsMemoizeOptions: u = [],
              devModeChecks: d = {}
            } = {
              ...n,
              ...o
            }, p = K(l), h = K(u), f = function(e) {
              let t = Array.isArray(e[0]) ? e[0] : e;
              return ! function(e, t = "expected all items to be functions, instead received the following types: ") {
                if (!e.every(e => "function" == typeof e)) {
                  let n = e.map(e => "function" == typeof e ? `function ${e.name||"unnamed"}()` : typeof e).join(", ");
                  throw TypeError(`${t}[${n}]`)
                }
              }(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t
            }(e), g = s(function() {
              return r++, a.apply(null, arguments)
            }, ...p);
            return Object.assign(c(function() {
              i++;
              let e = function(e, t) {
                let n = [],
                  {
                    length: r
                  } = e;
                for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
                return n
              }(f, arguments);
              return t = g.apply(null, e)
            }, ...h), {
              resultFunc: a,
              memoizedResultFunc: g,
              dependencies: f,
              dependencyRecomputations: () => i,
              resetDependencyRecomputations: () => {
                i = 0
              },
              lastResult: () => t,
              recomputations: () => r,
              resetRecomputations: () => {
                r = 0
              },
              memoize: s,
              argsMemoize: c
            })
          };
        return Object.assign(r, {
          withTypes: () => r
        }), r
      }
      var eu = ec(el),
        ed = Object.assign((e, t = eu) => {
          ! function(e, t = `expected an object, instead received ${typeof e}`) {
            if ("object" != typeof e) throw TypeError(t)
          }(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
          let n = Object.keys(e);
          return t(n.map(t => e[t]), (...e) => e.reduce((e, t, r) => (e[n[r]] = t, e), {}))
        }, {
          withTypes: () => ed
        }),
        ep = n(5849);

      function eh(e) {
        return ({
          dispatch: t,
          getState: n
        }) => r => i => "function" == typeof i ? i(t, n, e) : r(i)
      }
      var ef = eh();
      n(3454), ((...e) => {
        let t = ec(...e),
          n = Object.assign((...e) => {
            let n = t(...e),
              r = (e, ...t) => n(u(e) ? F(e) : e, ...t);
            return Object.assign(r, n), r
          }, {
            withTypes: () => n
          })
      })(el);
      var eg = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (0 != arguments.length) return "object" == typeof arguments[0] ? ep.qC : ep.qC.apply(null, arguments)
      };
      "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;

      function em(e, t) {
        function n(...r) {
          if (t) {
            let n = t(...r);
            if (!n) throw Error(eB(0));
            return {
              type: e,
              payload: n.payload,
              ..."meta" in n && {
                meta: n.meta
              },
              ..."error" in n && {
                error: n.error
              }
            }
          }
          return {
            type: e,
            payload: r[0]
          }
        }
        return n.toString = () => `${e}`, n.type = e, n.match = t => (0, ep.LG)(t) && t.type === e, n
      }
      var ey = class e extends Array {
        constructor(...t) {
          super(...t), Object.setPrototypeOf(this, e.prototype)
        }
        static get[Symbol.species]() {
          return e
        }
        concat(...e) {
          return super.concat.apply(this, e)
        }
        prepend(...t) {
          return 1 === t.length && Array.isArray(t[0]) ? new e(...t[0].concat(this)) : new e(...t.concat(this))
        }
      };

      function eb(e) {
        return d(e) ? H(e, () => {}) : e
      }

      function ev(e, t, n) {
        if (e.has(t)) {
          let r = e.get(t);
          return n.update && (r = n.update(r, t, e), e.set(t, r)), r
        }
        if (!n.insert) throw Error(eB(10));
        let r = n.insert(t, e);
        return e.set(t, r), r
      }
      var ew = () => function(e) {
          let {
            thunk: t = !0,
            immutableCheck: n = !0,
            serializableCheck: r = !0,
            actionCreatorCheck: i = !0
          } = e ?? {}, o = new ey;
          return t && ("boolean" == typeof t ? o.push(ef) : o.push(eh(t.extraArgument))), o
        },
        ex = e => t => {
          setTimeout(t, e)
        },
        ek = "undefined" != typeof window && window.requestAnimationFrame ? window.requestAnimationFrame : ex(10),
        eC = (e = {
          type: "raf"
        }) => t => (...n) => {
          let r = t(...n),
            i = !0,
            o = !1,
            a = !1,
            s = new Set,
            l = "tick" === e.type ? queueMicrotask : "raf" === e.type ? ek : "callback" === e.type ? e.queueNotification : ex(e.timeout),
            c = () => {
              a = !1, o && (o = !1, s.forEach(e => e()))
            };
          return Object.assign({}, r, {
            subscribe(e) {
              let t = r.subscribe(() => i && e());
              return s.add(e), () => {
                t(), s.delete(e)
              }
            },
            dispatch(e) {
              try {
                return (o = !(i = !e?.meta?.RTK_autoBatch)) && !a && (a = !0, l(c)), r.dispatch(e)
              } finally {
                i = !0
              }
            }
          })
        },
        eS = e => function(t) {
          let {
            autoBatch: n = !0
          } = t ?? {}, r = new ey(e);
          return n && r.push(eC("object" == typeof n ? n : void 0)), r
        };

      function eE(e) {
        let t, n;
        let r = ew(),
          {
            reducer: i,
            middleware: o,
            devTools: a = !0,
            preloadedState: s,
            enhancers: l
          } = e || {};
        if ("function" == typeof i) t = i;
        else if ((0, ep.PO)(i)) t = (0, ep.UY)(i);
        else throw Error(eB(1));
        n = "function" == typeof o ? o(r) : r();
        let c = ep.qC;
        a && (c = eg({
          trace: !1,
          ..."object" == typeof a && a
        }));
        let u = eS((0, ep.md)(...n)),
          d = c(..."function" == typeof l ? l(u) : u());
        return (0, ep.MT)(t, s, d)
      }

      function eO(e) {
        let t;
        let n = {},
          r = [],
          i = {
            addCase(e, t) {
              let r = "string" == typeof e ? e : e.type;
              if (!r) throw Error(eB(28));
              if (r in n) throw Error(eB(29));
              return n[r] = t, i
            },
            addMatcher: (e, t) => (r.push({
              matcher: e,
              reducer: t
            }), i),
            addDefaultCase: e => (t = e, i)
          };
        return e(i), [n, r, t]
      }
      var e_ = (e = 21) => {
          let t = "",
            n = e;
          for (; n--;) t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW" [64 * Math.random() | 0];
          return t
        },
        eT = Symbol.for("rtk-slice-createasyncthunk"),
        eA = ((r = eA || {}).reducer = "reducer", r.reducerWithPrepare = "reducerWithPrepare", r.asyncThunk = "asyncThunk", r),
        eP = function({
          creators: e
        } = {}) {
          let t = e?.asyncThunk?.[eT];
          return function(e) {
            let n;
            let {
              name: r,
              reducerPath: i = r
            } = e;
            if (!r) throw Error(eB(11));
            let o = ("function" == typeof e.reducers ? e.reducers(function() {
                function e(e, t) {
                  return {
                    _reducerDefinitionType: "asyncThunk",
                    payloadCreator: e,
                    ...t
                  }
                }
                return e.withTypes = () => e, {
                  reducer: e => Object.assign({
                    [e.name]: (...t) => e(...t)
                  } [e.name], {
                    _reducerDefinitionType: "reducer"
                  }),
                  preparedReducer: (e, t) => ({
                    _reducerDefinitionType: "reducerWithPrepare",
                    prepare: e,
                    reducer: t
                  }),
                  asyncThunk: e
                }
              }()) : e.reducers) || {},
              a = Object.keys(o),
              s = {
                sliceCaseReducersByName: {},
                sliceCaseReducersByType: {},
                actionCreators: {},
                sliceMatchers: []
              },
              l = {
                addCase(e, t) {
                  let n = "string" == typeof e ? e : e.type;
                  if (!n) throw Error(eB(12));
                  if (n in s.sliceCaseReducersByType) throw Error(eB(13));
                  return s.sliceCaseReducersByType[n] = t, l
                },
                addMatcher: (e, t) => (s.sliceMatchers.push({
                  matcher: e,
                  reducer: t
                }), l),
                exposeAction: (e, t) => (s.actionCreators[e] = t, l),
                exposeCaseReducer: (e, t) => (s.sliceCaseReducersByName[e] = t, l)
              };

            function c() {
              let [t = {}, n = [], r] = "function" == typeof e.extraReducers ? eO(e.extraReducers) : [e.extraReducers], i = {
                ...t,
                ...s.sliceCaseReducersByType
              };
              return function(e, t) {
                let n;
                let [r, i, o] = eO(t);
                if ("function" == typeof e) n = () => eb(e());
                else {
                  let t = eb(e);
                  n = () => t
                }

                function a(e = n(), t) {
                  let a = [r[t.type], ...i.filter(({
                    matcher: e
                  }) => e(t)).map(({
                    reducer: e
                  }) => e)];
                  return 0 === a.filter(e => !!e).length && (a = [o]), a.reduce((e, n) => {
                    if (n) {
                      if (u(e)) {
                        let r = n(e, t);
                        return void 0 === r ? e : r
                      }
                      if (d(e)) return H(e, e => n(e, t));
                      {
                        let r = n(e, t);
                        if (void 0 === r) {
                          if (null === e) return e;
                          throw Error(eB(9))
                        }
                        return r
                      }
                    }
                    return e
                  }, e)
                }
                return a.getInitialState = n, a
              }(e.initialState, e => {
                for (let t in i) e.addCase(t, i[t]);
                for (let t of s.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
                for (let t of n) e.addMatcher(t.matcher, t.reducer);
                r && e.addDefaultCase(r)
              })
            }
            a.forEach(n => {
              let i = o[n],
                a = {
                  reducerName: n,
                  type: `${r}/${n}`,
                  createNotation: "function" == typeof e.reducers
                };
              "asyncThunk" === i._reducerDefinitionType ? function({
                type: e,
                reducerName: t
              }, n, r, i) {
                if (!i) throw Error(eB(18));
                let {
                  payloadCreator: o,
                  fulfilled: a,
                  pending: s,
                  rejected: l,
                  settled: c,
                  options: u
                } = n, d = i(e, o, u);
                r.exposeAction(t, d), a && r.addCase(d.fulfilled, a), s && r.addCase(d.pending, s), l && r.addCase(d.rejected, l), c && r.addMatcher(d.settled, c), r.exposeCaseReducer(t, {
                  fulfilled: a || eR,
                  pending: s || eR,
                  rejected: l || eR,
                  settled: c || eR
                })
              }(a, i, l, t) : function({
                type: e,
                reducerName: t,
                createNotation: n
              }, r, i) {
                let o, a;
                if ("reducer" in r) {
                  if (n && "reducerWithPrepare" !== r._reducerDefinitionType) throw Error(eB(17));
                  o = r.reducer, a = r.prepare
                } else o = r;
                i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, a ? em(e, a) : em(e))
              }(a, i, l)
            });
            let p = e => e,
              h = new Map;

            function f(e, t) {
              return n || (n = c()), n(e, t)
            }

            function g() {
              return n || (n = c()), n.getInitialState()
            }

            function m(t, n = !1) {
              function r(e) {
                let r = e[t];
                return void 0 === r && n && (r = g()), r
              }

              function i(t = p) {
                let r = ev(h, n, {
                  insert: () => new WeakMap
                });
                return ev(r, t, {
                  insert: () => {
                    let r = {};
                    for (let [i, o] of Object.entries(e.selectors ?? {})) r[i] = function(e, t, n, r) {
                      function i(o, ...a) {
                        let s = t(o);
                        return void 0 === s && r && (s = n()), e(s, ...a)
                      }
                      return i.unwrapped = e, i
                    }(o, t, g, n);
                    return r
                  }
                })
              }
              return {
                reducerPath: t,
                getSelectors: i,
                get selectors() {
                  return i(r)
                },
                selectSlice: r
              }
            }
            let y = {
              name: r,
              reducer: f,
              actions: s.actionCreators,
              caseReducers: s.sliceCaseReducersByName,
              getInitialState: g,
              ...m(i),
              injectInto(e, {
                reducerPath: t,
                ...n
              } = {}) {
                let r = t ?? i;
                return e.inject({
                  reducerPath: r,
                  reducer: f
                }, n), {
                  ...y,
                  ...m(r, !0)
                }
              }
            };
            return y
          }
        }();

      function eR() {}
      var ej = (e, t) => {
          if ("function" != typeof e) throw Error(eB(32))
        },
        {
          assign: eL
        } = Object,
        eM = "listenerMiddleware",
        eN = e => {
          let {
            type: t,
            actionCreator: n,
            matcher: r,
            predicate: i,
            effect: o
          } = e;
          if (t) i = em(t).match;
          else if (n) t = n.type, i = n.match;
          else if (r) i = r;
          else if (i);
          else throw Error(eB(21));
          return ej(o, "options.listener"), {
            predicate: i,
            type: t,
            effect: o
          }
        },
        eD = Object.assign(e => {
          let {
            type: t,
            predicate: n,
            effect: r
          } = eN(e);
          return {
            id: e_(),
            effect: r,
            type: t,
            predicate: n,
            pending: new Set,
            unsubscribe: () => {
              throw Error(eB(22))
            }
          }
        }, {
          withTypes: () => eD
        }),
        eI = Object.assign(em(`${eM}/add`), {
          withTypes: () => eI
        });
      em(`${eM}/removeAll`);
      var e$ = Object.assign(em(`${eM}/remove`), {
        withTypes: () => e$
      });

      function eB(e) {
        return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
      }
      Symbol.for("rtk-state-proxy-original")
    },
    2959: function(e, t, n) {
      "use strict";
      let r, i;
      n.d(t, {
        LD: function() {
          return l8
        },
        dG: function() {
          return l7
        }
      });
      var o, a, s, l, c, u, d, p, h, f, g, m, y, b, v, w, x, k, C, S, E, O, _, T = n(7294),
        A = n(6885),
        P = n(780);
      n(3454), (o = h || (h = {}))[o.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", o[o.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", o[o.MANIFEST_NOT_FOUND_ERROR = 2] = "MANIFEST_NOT_FOUND_ERROR", o[o.MANIFEST_CONTENT_ERROR = 3] = "MANIFEST_CONTENT_ERROR", o[o.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", o[o.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", o[o.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED", (a = f || (f = {}))[a.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", a[a.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED", (s = g || (g = {}))[s.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", s[s.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", s[s.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", s[s.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", s[s.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED", (l = m || (m = {}))[l.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", l[l.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", l[l.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", l[l.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", l[l.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED", (c = y || (y = {}))[c.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", c[c.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", c[c.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", c[c.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED", (u = b || (b = {})).MAINNET = "-239", u.TESTNET = "-3";
      let R = {
        encode: function(e, t = !1) {
          let n;
          return e instanceof Uint8Array ? n = e : ("string" != typeof e && (e = JSON.stringify(e)), n = A.decodeUTF8(e)),
            function(e, t) {
              let n = A.encodeBase64(e);
              return t ? encodeURIComponent(n) : n
            }(n, t)
        },
        decode: function(e, t = !1) {
          var n;
          let r = (n = e, t && (n = decodeURIComponent(n)), A.decodeBase64(n));
          return {
            toString: () => A.encodeUTF8(r),
            toObject() {
              try {
                return JSON.parse(A.encodeUTF8(r))
              } catch (e) {
                return null
              }
            },
            toUint8Array: () => r
          }
        }
      };

      function j(e) {
        let t = "";
        return e.forEach(e => {
          t += ("0" + (255 & e).toString(16)).slice(-2)
        }), t
      }

      function L(e) {
        if (e.length % 2 != 0) throw Error(`Cannot convert ${e} to bytesArray`);
        let t = new Uint8Array(e.length / 2);
        for (let n = 0; n < e.length; n += 2) t[n / 2] = parseInt(e.slice(n, n + 2), 16);
        return t
      }
      class M {
        constructor(e) {
          this.nonceLength = 24, this.keyPair = e ? this.createKeypairFromString(e) : this.createKeypair(), this.sessionId = j(this.keyPair.publicKey)
        }
        createKeypair() {
          return P.box.keyPair()
        }
        createKeypairFromString(e) {
          return {
            publicKey: L(e.publicKey),
            secretKey: L(e.secretKey)
          }
        }
        createNonce() {
          return P.randomBytes(this.nonceLength)
        }
        encrypt(e, t) {
          let n = new TextEncoder().encode(e),
            r = this.createNonce(),
            i = P.box(n, r, t, this.keyPair.secretKey);
          return function(e, t) {
            let n = new Uint8Array(e.length + t.length);
            return n.set(e), n.set(t, e.length), n
          }(r, i)
        }
        decrypt(e, t) {
          let [n, r] = function(e, t) {
            if (t >= e.length) throw Error("Index is out of buffer");
            return [e.slice(0, t), e.slice(t)]
          }(e, this.nonceLength), i = P.box.open(r, n, t, this.keyPair.secretKey);
          if (!i) throw Error(`Decryption error: 
 message: ${e.toString()} 
 sender pubkey: ${t.toString()} 
 keypair pubkey: ${this.keyPair.publicKey.toString()} 
 keypair secretkey: ${this.keyPair.secretKey.toString()}`);
          return new TextDecoder().decode(i)
        }
        stringifyKeypair() {
          return {
            publicKey: j(this.keyPair.publicKey),
            secretKey: j(this.keyPair.secretKey)
          }
        }
      }
      var N = n(3454);

      function D(e, t, n, r) {
        return new(n || (n = Promise))(function(i, o) {
          function a(e) {
            try {
              l(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function s(e) {
            try {
              l(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function l(e) {
            var t;
            e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
              e(t)
            })).then(a, s)
          }
          l((r = r.apply(e, t || [])).next())
        })
      }
      class I extends Error {
        constructor(e, t) {
          super(e, t), this.message = `${I.prefix} ${this.constructor.name}${this.info?": "+this.info:""}${e?"\n"+e:""}`, Object.setPrototypeOf(this, I.prototype)
        }
        get info() {
          return ""
        }
      }
      I.prefix = "[TON_CONNECT_SDK_ERROR]";
      class $ extends I {
        get info() {
          return "Passed DappMetadata is in incorrect format."
        }
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, $.prototype)
        }
      }
      class B extends I {
        get info() {
          return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
        }
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, B.prototype)
        }
      }
      class U extends I {
        get info() {
          return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
        }
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, U.prototype)
        }
      }
      class V extends I {
        get info() {
          return "Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection."
        }
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, V.prototype)
        }
      }
      class W extends I {
        get info() {
          return "Send transaction or other protocol methods called while wallet is not connected."
        }
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, W.prototype)
        }
      }
      class F extends I {
        get info() {
          return "User rejects the action in the wallet."
        }
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, F.prototype)
        }
      }
      class G extends I {
        get info() {
          return "Request to the wallet contains errors."
        }
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, G.prototype)
        }
      }
      class H extends I {
        get info() {
          return "App tries to send rpc request to the injected wallet while not connected."
        }
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, H.prototype)
        }
      }
      class K extends I {
        get info() {
          return "There is an attempt to connect to the injected wallet while it is not exists in the webpage."
        }
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, K.prototype)
        }
      }
      class z extends I {
        get info() {
          return "An error occurred while fetching the wallets list."
        }
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, z.prototype)
        }
      }
      class q extends I {
        get info() {
          return "Passed address is in incorrect format."
        }
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, q.prototype)
        }
      }
      class Z extends I {
        get info() {
          return "Passed hex is in incorrect format."
        }
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, Z.prototype)
        }
      }
      class Y extends I {
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, Y.prototype)
        }
      }
      let J = {
        [h.UNKNOWN_ERROR]: Y,
        [h.USER_REJECTS_ERROR]: F,
        [h.BAD_REQUEST_ERROR]: G,
        [h.UNKNOWN_APP_ERROR]: H,
        [h.MANIFEST_NOT_FOUND_ERROR]: U,
        [h.MANIFEST_CONTENT_ERROR]: B
      };
      class Q {
        parseError(e) {
          let t = Y;
          return e.code in J && (t = J[e.code] || Y), new t(e.message)
        }
      }
      let X = new Q;
      class ee {
        isError(e) {
          return "error" in e
        }
      }
      let et = {
        [g.UNKNOWN_ERROR]: Y,
        [g.USER_REJECTS_ERROR]: F,
        [g.BAD_REQUEST_ERROR]: G,
        [g.UNKNOWN_APP_ERROR]: H
      };
      class en extends ee {
        convertToRpcRequest(e) {
          return {
            method: "sendTransaction",
            params: [JSON.stringify(e)]
          }
        }
        parseAndThrowError(e) {
          let t = Y;
          throw e.error.code in et && (t = et[e.error.code] || Y), new t(e.error.message)
        }
        convertFromRpcResponse(e) {
          return {
            boc: e.result
          }
        }
      }
      let er = new en;
      class ei {
        constructor(e, t) {
          this.storage = e, this.storeKey = "ton-connect-storage_http-bridge-gateway::" + t
        }
        storeLastEventId(e) {
          return D(this, void 0, void 0, function*() {
            return this.storage.setItem(this.storeKey, e)
          })
        }
        removeLastEventId() {
          return D(this, void 0, void 0, function*() {
            return this.storage.removeItem(this.storeKey)
          })
        }
        getLastEventId() {
          return D(this, void 0, void 0, function*() {
            return (yield this.storage.getItem(this.storeKey)) || null
          })
        }
      }

      function eo(e, t) {
        return ("/" === e.slice(-1) ? e.slice(0, -1) : e) + "/" + t
      }

      function ea(e) {
        if (!e) return !1;
        let t = new URL(e);
        return "tg:" === t.protocol || "t.me" === t.hostname
      }

      function es(e) {
        return e.replaceAll(".", "%2E").replaceAll("-", "%2D").replaceAll("_", "%5F").replaceAll("&", "-").replaceAll("=", "__").replaceAll("%", "--")
      }

      function el(e, t) {
        return D(this, void 0, void 0, function*() {
          return new Promise((n, r) => {
            var i, o;
            if (null === (i = null == t ? void 0 : t.signal) || void 0 === i ? void 0 : i.aborted) {
              r(new I("Delay aborted"));
              return
            }
            let a = setTimeout(() => n(), e);
            null === (o = null == t ? void 0 : t.signal) || void 0 === o || o.addEventListener("abort", () => {
              clearTimeout(a), r(new I("Delay aborted"))
            })
          })
        })
      }

      function ec(e) {
        let t = new AbortController;
        return (null == e ? void 0 : e.aborted) ? t.abort() : null == e || e.addEventListener("abort", () => t.abort(), {
          once: !0
        }), t
      }

      function eu(e, t) {
        var n, r;
        return D(this, void 0, void 0, function*() {
          let i;
          let o = null !== (n = null == t ? void 0 : t.attempts) && void 0 !== n ? n : 10,
            a = null !== (r = null == t ? void 0 : t.delayMs) && void 0 !== r ? r : 200,
            s = ec(null == t ? void 0 : t.signal);
          if ("function" != typeof e) throw new I(`Expected a function, got ${typeof e}`);
          let l = 0;
          for (; l < o;) {
            if (s.signal.aborted) throw new I(`Aborted after attempts ${l}`);
            try {
              return yield e({
                signal: s.signal
              })
            } catch (e) {
              i = e, ++l < o && (yield el(a))
            }
          }
          throw i
        })
      }

      function ed(...e) {
        try {
          console.debug("[TON_CONNECT_SDK]", ...e)
        } catch (e) {}
      }

      function ep(...e) {
        try {
          console.error("[TON_CONNECT_SDK]", ...e)
        } catch (e) {}
      }
      class eh {
        constructor(e, t, n, r, i) {
          this.bridgeUrl = t, this.sessionId = n, this.listener = r, this.errorsListener = i, this.ssePath = "events", this.postPath = "message", this.heartbeatMessage = "heartbeat", this.defaultTtl = 300, this.defaultReconnectDelay = 2e3, this.defaultResendDelay = 5e3, this.eventSource = function(e, t) {
            let n = null,
              r = null,
              i = null,
              o = null,
              a = null,
              s = (s, ...l) => D(this, void 0, void 0, function*() {
                if (o = null != s ? s : null, null == a || a.abort(), (a = ec(s)).signal.aborted) throw new I("Resource creation was aborted");
                r = null != l ? l : null;
                let c = e(a.signal, ...l);
                i = c;
                let u = yield c;
                if (i !== c && u !== n) throw yield t(u), new I("Resource creation was aborted by a new resource creation");
                return n = u
              });
            return {
              create: s,
              current: () => null != n ? n : null,
              dispose: () => D(this, void 0, void 0, function*() {
                try {
                  let e = n;
                  n = null;
                  let r = i;
                  i = null;
                  try {
                    null == a || a.abort()
                  } catch (e) {}
                  yield Promise.allSettled([e ? t(e) : Promise.resolve(), r ? t((yield r)) : Promise.resolve()])
                } catch (e) {}
              }),
              recreate: e => D(this, void 0, void 0, function*() {
                let t = n,
                  a = i,
                  l = r,
                  c = o;
                if (yield el(e), t === n && a === i && l === r && c === o) return yield s(o, ...null != l ? l : []);
                throw new I("Resource recreation was aborted by a new resource creation")
              })
            }
          }((e, t) => D(this, void 0, void 0, function*() {
            let n = {
              bridgeUrl: this.bridgeUrl,
              ssePath: this.ssePath,
              sessionId: this.sessionId,
              bridgeGatewayStorage: this.bridgeGatewayStorage,
              errorHandler: this.errorsHandler.bind(this),
              messageHandler: this.messagesHandler.bind(this),
              signal: e,
              openingDeadlineMS: t
            };
            return yield function(e) {
              return D(this, void 0, void 0, function*() {
                return yield function(e, t) {
                  let n = null == t ? void 0 : t.timeout,
                    r = ec(null == t ? void 0 : t.signal);
                  return new Promise((t, i) => D(this, void 0, void 0, function*() {
                    let o;
                    if (r.signal.aborted) {
                      i(new I("Operation aborted"));
                      return
                    }
                    void 0 !== n && (o = setTimeout(() => {
                      r.abort(), i(new I(`Timeout after ${n}ms`))
                    }, n)), r.signal.addEventListener("abort", () => {
                      clearTimeout(o), i(new I("Operation aborted"))
                    }, {
                      once: !0
                    });
                    let a = {
                      timeout: n,
                      abort: r.signal
                    };
                    yield e((...e) => {
                      clearTimeout(o), t(...e)
                    }, () => {
                      clearTimeout(o), i()
                    }, a)
                  }))
                }((t, n, r) => D(this, void 0, void 0, function*() {
                  var i;
                  let o = ec(r.signal).signal;
                  if (o.aborted) {
                    n(new I("Bridge connection aborted"));
                    return
                  }
                  let a = new URL(eo(e.bridgeUrl, e.ssePath));
                  a.searchParams.append("client_id", e.sessionId);
                  let s = yield e.bridgeGatewayStorage.getLastEventId();
                  if (s && a.searchParams.append("last_event_id", s), o.aborted) {
                    n(new I("Bridge connection aborted"));
                    return
                  }
                  let l = new EventSource(a.toString());
                  l.onerror = r => D(this, void 0, void 0, function*() {
                    if (o.aborted) {
                      l.close(), n(new I("Bridge connection aborted"));
                      return
                    }
                    try {
                      let n = yield e.errorHandler(l, r);
                      n !== l && l.close(), n && n !== l && t(n)
                    } catch (e) {
                      l.close(), n(e)
                    }
                  }), l.onopen = () => {
                    if (o.aborted) {
                      l.close(), n(new I("Bridge connection aborted"));
                      return
                    }
                    t(l)
                  }, l.onmessage = t => {
                    if (o.aborted) {
                      l.close(), n(new I("Bridge connection aborted"));
                      return
                    }
                    e.messageHandler(t)
                  }, null === (i = e.signal) || void 0 === i || i.addEventListener("abort", () => {
                    l.close(), n(new I("Bridge connection aborted"))
                  })
                }), {
                  timeout: e.openingDeadlineMS,
                  signal: e.signal
                })
              })
            }(n)
          }), e => D(this, void 0, void 0, function*() {
            e.close()
          })), this.bridgeGatewayStorage = new ei(e, t)
        }
        get isReady() {
          let e = this.eventSource.current();
          return (null == e ? void 0 : e.readyState) === EventSource.OPEN
        }
        get isClosed() {
          let e = this.eventSource.current();
          return (null == e ? void 0 : e.readyState) !== EventSource.OPEN
        }
        get isConnecting() {
          let e = this.eventSource.current();
          return (null == e ? void 0 : e.readyState) === EventSource.CONNECTING
        }
        registerSession(e) {
          return D(this, void 0, void 0, function*() {
            yield this.eventSource.create(null == e ? void 0 : e.signal, null == e ? void 0 : e.openingDeadlineMS)
          })
        }
        send(e, t, n, r) {
          var i;
          return D(this, void 0, void 0, function*() {
            let o = {};
            "number" == typeof r ? o.ttl = r : (o.ttl = null == r ? void 0 : r.ttl, o.signal = null == r ? void 0 : r.signal, o.attempts = null == r ? void 0 : r.attempts);
            let a = new URL(eo(this.bridgeUrl, this.postPath));
            a.searchParams.append("client_id", this.sessionId), a.searchParams.append("to", t), a.searchParams.append("ttl", ((null == o ? void 0 : o.ttl) || this.defaultTtl).toString()), a.searchParams.append("topic", n);
            let s = R.encode(e);
            yield eu(e => D(this, void 0, void 0, function*() {
              let t = yield this.post(a, s, e.signal);
              if (!t.ok) throw new I(`Bridge send failed, status ${t.status}`)
            }), {
              attempts: null !== (i = null == o ? void 0 : o.attempts) && void 0 !== i ? i : Number.MAX_SAFE_INTEGER,
              delayMs: this.defaultResendDelay,
              signal: null == o ? void 0 : o.signal
            })
          })
        }
        pause() {
          this.eventSource.dispose().catch(e => ep(`Bridge pause failed, ${e}`))
        }
        unPause() {
          return D(this, void 0, void 0, function*() {
            yield this.eventSource.recreate(0)
          })
        }
        close() {
          return D(this, void 0, void 0, function*() {
            yield this.eventSource.dispose().catch(e => ep(`Bridge close failed, ${e}`))
          })
        }
        setListener(e) {
          this.listener = e
        }
        setErrorsListener(e) {
          this.errorsListener = e
        }
        post(e, t, n) {
          return D(this, void 0, void 0, function*() {
            let r = yield fetch(e, {
              method: "post",
              body: t,
              signal: n
            });
            if (!r.ok) throw new I(`Bridge send failed, status ${r.status}`);
            return r
          })
        }
        errorsHandler(e, t) {
          return D(this, void 0, void 0, function*() {
            if (this.isConnecting) throw e.close(), new I("Bridge error, failed to connect");
            if (this.isReady) {
              try {
                this.errorsListener(t)
              } catch (e) {}
              return
            }
            if (this.isClosed) return e.close(), ed(`Bridge reconnecting, ${this.defaultReconnectDelay}ms delay`), yield this.eventSource.recreate(this.defaultReconnectDelay);
            throw new I("Bridge error, unknown state")
          })
        }
        messagesHandler(e) {
          return D(this, void 0, void 0, function*() {
            let t;
            if (e.data !== this.heartbeatMessage && (yield this.bridgeGatewayStorage.storeLastEventId(e.lastEventId), !this.isClosed)) {
              try {
                t = JSON.parse(e.data)
              } catch (e) {
                throw new I(`Bridge message parse failed, message ${e.data}`)
              }
              this.listener(t)
            }
          })
        }
      }

      function ef(e) {
        return !("connectEvent" in e)
      }
      class eg {
        constructor(e) {
          this.storage = e, this.storeKey = "ton-connect-storage_bridge-connection"
        }
        storeConnection(e) {
          return D(this, void 0, void 0, function*() {
            if ("injected" === e.type) return this.storage.setItem(this.storeKey, JSON.stringify(e));
            if (!ef(e)) {
              let t = {
                  sessionKeyPair: e.session.sessionCrypto.stringifyKeypair(),
                  walletPublicKey: e.session.walletPublicKey,
                  bridgeUrl: e.session.bridgeUrl
                },
                n = {
                  type: "http",
                  connectEvent: e.connectEvent,
                  session: t,
                  lastWalletEventId: e.lastWalletEventId,
                  nextRpcRequestId: e.nextRpcRequestId
                };
              return this.storage.setItem(this.storeKey, JSON.stringify(n))
            }
            let t = {
              type: "http",
              connectionSource: e.connectionSource,
              sessionCrypto: e.sessionCrypto.stringifyKeypair()
            };
            return this.storage.setItem(this.storeKey, JSON.stringify(t))
          })
        }
        removeConnection() {
          return D(this, void 0, void 0, function*() {
            return this.storage.removeItem(this.storeKey)
          })
        }
        getConnection() {
          return D(this, void 0, void 0, function*() {
            let e = yield this.storage.getItem(this.storeKey);
            if (!e) return null;
            let t = JSON.parse(e);
            if ("injected" === t.type) return t;
            if ("connectEvent" in t) {
              let e = new M(t.session.sessionKeyPair);
              return {
                type: "http",
                connectEvent: t.connectEvent,
                lastWalletEventId: t.lastWalletEventId,
                nextRpcRequestId: t.nextRpcRequestId,
                session: {
                  sessionCrypto: e,
                  bridgeUrl: t.session.bridgeUrl,
                  walletPublicKey: t.session.walletPublicKey
                }
              }
            }
            return {
              type: "http",
              sessionCrypto: new M(t.sessionCrypto),
              connectionSource: t.connectionSource
            }
          })
        }
        getHttpConnection() {
          return D(this, void 0, void 0, function*() {
            let e = yield this.getConnection();
            if (!e) throw new I("Trying to read HTTP connection source while nothing is stored");
            if ("injected" === e.type) throw new I("Trying to read HTTP connection source while injected connection is stored");
            return e
          })
        }
        getHttpPendingConnection() {
          return D(this, void 0, void 0, function*() {
            let e = yield this.getConnection();
            if (!e) throw new I("Trying to read HTTP connection source while nothing is stored");
            if ("injected" === e.type) throw new I("Trying to read HTTP connection source while injected connection is stored");
            if (!ef(e)) throw new I("Trying to read HTTP-pending connection while http connection is stored");
            return e
          })
        }
        getInjectedConnection() {
          return D(this, void 0, void 0, function*() {
            let e = yield this.getConnection();
            if (!e) throw new I("Trying to read Injected bridge connection source while nothing is stored");
            if ((null == e ? void 0 : e.type) === "http") throw new I("Trying to read Injected bridge connection source while HTTP connection is stored");
            return e
          })
        }
        storedConnectionType() {
          return D(this, void 0, void 0, function*() {
            let e = yield this.storage.getItem(this.storeKey);
            return e ? JSON.parse(e).type : null
          })
        }
        storeLastWalletEventId(e) {
          return D(this, void 0, void 0, function*() {
            let t = yield this.getConnection();
            if (t && "http" === t.type && !ef(t)) return t.lastWalletEventId = e, this.storeConnection(t)
          })
        }
        getLastWalletEventId() {
          return D(this, void 0, void 0, function*() {
            let e = yield this.getConnection();
            if (e && "lastWalletEventId" in e) return e.lastWalletEventId
          })
        }
        increaseNextRpcRequestId() {
          return D(this, void 0, void 0, function*() {
            let e = yield this.getConnection();
            if (e && "nextRpcRequestId" in e) {
              let t = e.nextRpcRequestId || 0;
              return e.nextRpcRequestId = t + 1, this.storeConnection(e)
            }
          })
        }
        getNextRpcRequestId() {
          return D(this, void 0, void 0, function*() {
            let e = yield this.getConnection();
            return e && "nextRpcRequestId" in e && e.nextRpcRequestId || 0
          })
        }
      }
      class em {
        constructor(e, t) {
          this.storage = e, this.walletConnectionSource = t, this.type = "http", this.standardUniversalLink = "tc://", this.pendingRequests = new Map, this.session = null, this.gateway = null, this.pendingGateways = [], this.listeners = [], this.defaultOpeningDeadlineMS = 12e3, this.defaultRetryTimeoutMS = 2e3, this.connectionStorage = new eg(e)
        }
        static fromStorage(e) {
          return D(this, void 0, void 0, function*() {
            let t = new eg(e),
              n = yield t.getHttpConnection();
            return ef(n) ? new em(e, n.connectionSource) : new em(e, {
              bridgeUrl: n.session.bridgeUrl
            })
          })
        }
        connect(e, t) {
          var n;
          let r = ec(null == t ? void 0 : t.signal);
          null === (n = this.abortController) || void 0 === n || n.abort(), this.abortController = r, this.closeGateways();
          let i = new M;
          this.session = {
            sessionCrypto: i,
            bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
          }, this.connectionStorage.storeConnection({
            type: "http",
            connectionSource: this.walletConnectionSource,
            sessionCrypto: i
          }).then(() => D(this, void 0, void 0, function*() {
            r.signal.aborted || (yield eu(e => {
              var n;
              return this.openGateways(i, {
                openingDeadlineMS: null !== (n = null == t ? void 0 : t.openingDeadlineMS) && void 0 !== n ? n : this.defaultOpeningDeadlineMS,
                signal: null == e ? void 0 : e.signal
              })
            }, {
              attempts: Number.MAX_SAFE_INTEGER,
              delayMs: this.defaultRetryTimeoutMS,
              signal: r.signal
            }))
          }));
          let o = "universalLink" in this.walletConnectionSource && this.walletConnectionSource.universalLink ? this.walletConnectionSource.universalLink : this.standardUniversalLink;
          return this.generateUniversalLink(o, e)
        }
        restoreConnection(e) {
          var t, n;
          return D(this, void 0, void 0, function*() {
            let r = ec(null == e ? void 0 : e.signal);
            if (null === (t = this.abortController) || void 0 === t || t.abort(), this.abortController = r, r.signal.aborted) return;
            this.closeGateways();
            let i = yield this.connectionStorage.getHttpConnection();
            if (!i || r.signal.aborted) return;
            let o = null !== (n = null == e ? void 0 : e.openingDeadlineMS) && void 0 !== n ? n : this.defaultOpeningDeadlineMS;
            if (ef(i)) return this.session = {
              sessionCrypto: i.sessionCrypto,
              bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
            }, yield this.openGateways(i.sessionCrypto, {
              openingDeadlineMS: o,
              signal: null == r ? void 0 : r.signal
            });
            if (Array.isArray(this.walletConnectionSource)) throw new I("Internal error. Connection source is array while WalletConnectionSourceHTTP was expected.");
            if (this.session = i.session, this.gateway && (ed("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.gateway = new eh(this.storage, this.walletConnectionSource.bridgeUrl, i.session.sessionCrypto.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)), !r.signal.aborted) {
              this.listeners.forEach(e => e(i.connectEvent));
              try {
                yield eu(e => this.gateway.registerSession({
                  openingDeadlineMS: o,
                  signal: e.signal
                }), {
                  attempts: Number.MAX_SAFE_INTEGER,
                  delayMs: this.defaultRetryTimeoutMS,
                  signal: r.signal
                })
              } catch (e) {
                yield this.disconnect({
                  signal: r.signal
                });
                return
              }
            }
          })
        }
        sendRequest(e, t) {
          let n = {};
          return "function" == typeof t ? n.onRequestSent = t : (n.onRequestSent = null == t ? void 0 : t.onRequestSent, n.signal = null == t ? void 0 : t.signal, n.attempts = null == t ? void 0 : t.attempts), new Promise((t, r) => D(this, void 0, void 0, function*() {
            var i;
            if (!this.gateway || !this.session || !("walletPublicKey" in this.session)) throw new I("Trying to send bridge request without session");
            let o = (yield this.connectionStorage.getNextRpcRequestId()).toString();
            yield this.connectionStorage.increaseNextRpcRequestId(), ed("Send http-bridge request:", Object.assign(Object.assign({}, e), {
              id: o
            }));
            let a = this.session.sessionCrypto.encrypt(JSON.stringify(Object.assign(Object.assign({}, e), {
              id: o
            })), L(this.session.walletPublicKey));
            try {
              yield this.gateway.send(a, this.session.walletPublicKey, e.method, {
                attempts: null == n ? void 0 : n.attempts,
                signal: null == n ? void 0 : n.signal
              }), null === (i = null == n ? void 0 : n.onRequestSent) || void 0 === i || i.call(n), this.pendingRequests.set(o.toString(), t)
            } catch (e) {
              r(e)
            }
          }))
        }
        closeConnection() {
          this.closeGateways(), this.listeners = [], this.session = null, this.gateway = null
        }
        disconnect(e) {
          return D(this, void 0, void 0, function*() {
            return new Promise(t => D(this, void 0, void 0, function*() {
              let n = !1,
                r = null,
                i = () => {
                  n || (n = !0, this.removeBridgeAndSession().then(t))
                };
              try {
                this.closeGateways();
                let t = ec(null == e ? void 0 : e.signal);
                r = setTimeout(() => {
                  t.abort()
                }, this.defaultOpeningDeadlineMS), yield this.sendRequest({
                  method: "disconnect",
                  params: []
                }, {
                  onRequestSent: i,
                  signal: t.signal,
                  attempts: 1
                })
              } catch (e) {
                ed("Disconnect error:", e), n || this.removeBridgeAndSession().then(t)
              } finally {
                r && clearTimeout(r), i()
              }
            }))
          })
        }
        listen(e) {
          return this.listeners.push(e), () => this.listeners = this.listeners.filter(t => t !== e)
        }
        pause() {
          var e;
          null === (e = this.gateway) || void 0 === e || e.pause(), this.pendingGateways.forEach(e => e.pause())
        }
        unPause() {
          return D(this, void 0, void 0, function*() {
            let e = this.pendingGateways.map(e => e.unPause());
            this.gateway && e.push(this.gateway.unPause()), yield Promise.all(e)
          })
        }
        pendingGatewaysListener(e, t, n) {
          return D(this, void 0, void 0, function*() {
            if (!this.pendingGateways.includes(e)) {
              yield e.close();
              return
            }
            return this.closeGateways({
              except: e
            }), this.gateway && (ed("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.session.bridgeUrl = t, this.gateway = e, this.gateway.setErrorsListener(this.gatewayErrorsListener.bind(this)), this.gateway.setListener(this.gatewayListener.bind(this)), this.gatewayListener(n)
          })
        }
        gatewayListener(e) {
          return D(this, void 0, void 0, function*() {
            let t = JSON.parse(this.session.sessionCrypto.decrypt(R.decode(e.message).toUint8Array(), L(e.from)));
            if (ed("Wallet message received:", t), !("event" in t)) {
              let e = t.id.toString(),
                n = this.pendingRequests.get(e);
              if (!n) {
                ed(`Response id ${e} doesn't match any request's id`);
                return
              }
              n(t), this.pendingRequests.delete(e);
              return
            }
            if (void 0 !== t.id) {
              let e = yield this.connectionStorage.getLastWalletEventId();
              if (void 0 !== e && t.id <= e) {
                ep(`Received event id (=${t.id}) must be greater than stored last wallet event id (=${e}) `);
                return
              }
              "connect" !== t.event && (yield this.connectionStorage.storeLastWalletEventId(t.id))
            }
            let n = this.listeners;
            "connect" === t.event && (yield this.updateSession(t, e.from)), "disconnect" === t.event && (ed("Removing bridge and session: received disconnect event"), yield this.removeBridgeAndSession()), n.forEach(e => e(t))
          })
        }
        gatewayErrorsListener(e) {
          return D(this, void 0, void 0, function*() {
            throw new I(`Bridge error ${JSON.stringify(e)}`)
          })
        }
        updateSession(e, t) {
          return D(this, void 0, void 0, function*() {
            this.session = Object.assign(Object.assign({}, this.session), {
              walletPublicKey: t
            });
            let n = e.payload.items.find(e => "ton_addr" === e.name),
              r = Object.assign(Object.assign({}, e), {
                payload: Object.assign(Object.assign({}, e.payload), {
                  items: [n]
                })
              });
            yield this.connectionStorage.storeConnection({
              type: "http",
              session: this.session,
              lastWalletEventId: e.id,
              connectEvent: r,
              nextRpcRequestId: 0
            })
          })
        }
        removeBridgeAndSession() {
          return D(this, void 0, void 0, function*() {
            this.closeConnection(), yield this.connectionStorage.removeConnection()
          })
        }
        generateUniversalLink(e, t) {
          return ea(e) ? this.generateTGUniversalLink(e, t) : this.generateRegularUniversalLink(e, t)
        }
        generateRegularUniversalLink(e, t) {
          let n = new URL(e);
          return n.searchParams.append("v", "2"), n.searchParams.append("id", this.session.sessionCrypto.sessionId), n.searchParams.append("r", JSON.stringify(t)), n.toString()
        }
        generateTGUniversalLink(e, t) {
          let n = "tonconnect-" + es(this.generateRegularUniversalLink("about:blank", t).split("?")[1]),
            r = this.convertToDirectLink(e),
            i = new URL(r);
          return i.searchParams.append("startapp", n), i.toString()
        }
        convertToDirectLink(e) {
          let t = new URL(e);
          return t.searchParams.has("attach") && (t.searchParams.delete("attach"), t.pathname += "/start"), t.toString()
        }
        openGateways(e, t) {
          return D(this, void 0, void 0, function*() {
            if (!Array.isArray(this.walletConnectionSource)) return this.gateway && (ed("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.gateway = new eh(this.storage, this.walletConnectionSource.bridgeUrl, e.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)), yield this.gateway.registerSession({
              openingDeadlineMS: null == t ? void 0 : t.openingDeadlineMS,
              signal: null == t ? void 0 : t.signal
            });
            this.pendingGateways.map(e => e.close().catch()), this.pendingGateways = this.walletConnectionSource.map(t => {
              let n = new eh(this.storage, t.bridgeUrl, e.sessionId, () => {}, () => {});
              return n.setListener(e => this.pendingGatewaysListener(n, t.bridgeUrl, e)), n
            }), yield Promise.allSettled(this.pendingGateways.map(e => eu(n => {
              var r;
              return this.pendingGateways.some(t => t === e) ? e.registerSession({
                openingDeadlineMS: null !== (r = null == t ? void 0 : t.openingDeadlineMS) && void 0 !== r ? r : this.defaultOpeningDeadlineMS,
                signal: n.signal
              }) : e.close()
            }, {
              attempts: Number.MAX_SAFE_INTEGER,
              delayMs: this.defaultRetryTimeoutMS,
              signal: null == t ? void 0 : t.signal
            })))
          })
        }
        closeGateways(e) {
          var t;
          null === (t = this.gateway) || void 0 === t || t.close(), this.pendingGateways.filter(t => t !== (null == e ? void 0 : e.except)).forEach(e => e.close()), this.pendingGateways = []
        }
      }

      function ey(e, t) {
        return !!e && "object" == typeof e && t.every(t => t in e)
      }
      class eb {
        constructor() {
          this.storage = {}
        }
        static getInstance() {
          return eb.instance || (eb.instance = new eb), eb.instance
        }
        get length() {
          return Object.keys(this.storage).length
        }
        clear() {
          this.storage = {}
        }
        getItem(e) {
          var t;
          return null !== (t = this.storage[e]) && void 0 !== t ? t : null
        }
        key(e) {
          var t;
          let n = Object.keys(this.storage);
          return e < 0 || e >= n.length ? null : null !== (t = n[e]) && void 0 !== t ? t : null
        }
        removeItem(e) {
          delete this.storage[e]
        }
        setItem(e, t) {
          this.storage[e] = t
        }
      }

      function ev() {
        if ("undefined" != typeof window) return window
      }
      class ew {
        constructor(e, t) {
          this.injectedWalletKey = t, this.type = "injected", this.unsubscribeCallback = null, this.listenSubscriptions = !1, this.listeners = [];
          let n = ew.window;
          if (!ew.isWindowContainsWallet(n, t)) throw new K;
          this.connectionStorage = new eg(e), this.injectedWallet = n[t].tonconnect
        }
        static fromStorage(e) {
          return D(this, void 0, void 0, function*() {
            let t = new eg(e);
            return new ew(e, (yield t.getInjectedConnection()).jsBridgeKey)
          })
        }
        static isWalletInjected(e) {
          return ew.isWindowContainsWallet(this.window, e)
        }
        static isInsideWalletBrowser(e) {
          return !!ew.isWindowContainsWallet(this.window, e) && this.window[e].tonconnect.isWalletBrowser
        }
        static getCurrentlyInjectedWallets() {
          return this.window ? (function() {
            let e = ev();
            if (!e) return [];
            try {
              return Object.keys(e)
            } catch (e) {
              return []
            }
          })().filter(([e, t]) => (function(e) {
            try {
              var t;
              if (!ey(e, ["tonconnect"]) || (t = e.tonconnect, !ey(t, ["walletInfo"]))) return !1;
              return ey(e.tonconnect.walletInfo, ["name", "app_name", "image", "about_url", "platforms"])
            } catch (e) {
              return !1
            }
          })(t)).map(([e, t]) => ({
            name: t.tonconnect.walletInfo.name,
            appName: t.tonconnect.walletInfo.app_name,
            aboutUrl: t.tonconnect.walletInfo.about_url,
            imageUrl: t.tonconnect.walletInfo.image,
            tondns: t.tonconnect.walletInfo.tondns,
            jsBridgeKey: e,
            injected: !0,
            embedded: t.tonconnect.isWalletBrowser,
            platforms: t.tonconnect.walletInfo.platforms
          })) : []
        }
        static isWindowContainsWallet(e, t) {
          return !!e && t in e && "object" == typeof e[t] && "tonconnect" in e[t]
        }
        connect(e) {
          this._connect(2, e)
        }
        restoreConnection() {
          return D(this, void 0, void 0, function*() {
            try {
              ed("Injected Provider restoring connection...");
              let e = yield this.injectedWallet.restoreConnection();
              ed("Injected Provider restoring connection response", e), "connect" === e.event ? (this.makeSubscriptions(), this.listeners.forEach(t => t(e))) : yield this.connectionStorage.removeConnection()
            } catch (e) {
              yield this.connectionStorage.removeConnection(), console.error(e)
            }
          })
        }
        closeConnection() {
          this.listenSubscriptions && this.injectedWallet.disconnect(), this.closeAllListeners()
        }
        disconnect() {
          return D(this, void 0, void 0, function*() {
            return new Promise(e => {
              let t = () => {
                this.closeAllListeners(), this.connectionStorage.removeConnection().then(e)
              };
              try {
                this.injectedWallet.disconnect(), t()
              } catch (e) {
                ed(e), this.sendRequest({
                  method: "disconnect",
                  params: []
                }, t)
              }
            })
          })
        }
        closeAllListeners() {
          var e;
          this.listenSubscriptions = !1, this.listeners = [], null === (e = this.unsubscribeCallback) || void 0 === e || e.call(this)
        }
        listen(e) {
          return this.listeners.push(e), () => this.listeners = this.listeners.filter(t => t !== e)
        }
        sendRequest(e, t) {
          var n;
          return D(this, void 0, void 0, function*() {
            let r = {};
            "function" == typeof t ? r.onRequestSent = t : (r.onRequestSent = null == t ? void 0 : t.onRequestSent, r.signal = null == t ? void 0 : t.signal);
            let i = (yield this.connectionStorage.getNextRpcRequestId()).toString();
            yield this.connectionStorage.increaseNextRpcRequestId(), ed("Send injected-bridge request:", Object.assign(Object.assign({}, e), {
              id: i
            }));
            let o = this.injectedWallet.send(Object.assign(Object.assign({}, e), {
              id: i
            }));
            return o.then(e => ed("Wallet message received:", e)), null === (n = null == r ? void 0 : r.onRequestSent) || void 0 === n || n.call(r), o
          })
        }
        _connect(e, t) {
          return D(this, void 0, void 0, function*() {
            try {
              ed(`Injected Provider connect request: protocolVersion: ${e}, message:`, t);
              let n = yield this.injectedWallet.connect(e, t);
              ed("Injected Provider connect response:", n), "connect" === n.event && (yield this.updateSession(), this.makeSubscriptions()), this.listeners.forEach(e => e(n))
            } catch (t) {
              ed("Injected Provider connect error:", t);
              let e = {
                event: "connect_error",
                payload: {
                  code: 0,
                  message: null == t ? void 0 : t.toString()
                }
              };
              this.listeners.forEach(t => t(e))
            }
          })
        }
        makeSubscriptions() {
          this.listenSubscriptions = !0, this.unsubscribeCallback = this.injectedWallet.listen(e => {
            ed("Wallet message received:", e), this.listenSubscriptions && this.listeners.forEach(t => t(e)), "disconnect" === e.event && this.disconnect()
          })
        }
        updateSession() {
          return this.connectionStorage.storeConnection({
            type: "injected",
            jsBridgeKey: this.injectedWalletKey,
            nextRpcRequestId: 0
          })
        }
      }
      ew.window = ev();
      class ex {
        constructor() {
          this.localStorage = function() {
            if (function() {
                try {
                  return "undefined" != typeof localStorage
                } catch (e) {
                  return !1
                }
              }()) return localStorage;
            if (void 0 !== N && null != N.versions && null != N.versions.node) throw new I("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
            return eb.getInstance()
          }()
        }
        getItem(e) {
          return D(this, void 0, void 0, function*() {
            return this.localStorage.getItem(e)
          })
        }
        removeItem(e) {
          return D(this, void 0, void 0, function*() {
            this.localStorage.removeItem(e)
          })
        }
        setItem(e, t) {
          return D(this, void 0, void 0, function*() {
            this.localStorage.setItem(e, t)
          })
        }
      }

      function ek(e) {
        return "jsBridgeKey" in e && e.injected
      }

      function eC(e) {
        return ek(e) && e.embedded
      }

      function eS(e) {
        return "bridgeUrl" in e
      }
      let eE = [{
        app_name: "telegram-wallet",
        name: "Wallet",
        image: "https://wallet.tg/images/logo-288.png",
        about_url: "https://wallet.tg/",
        universal_url: "https://t.me/wallet?attach=wallet",
        bridge: [{
          type: "sse",
          url: "https://bridge.ton.space/bridge"
        }],
        platforms: ["ios", "android", "macos", "windows", "linux"]
      }, {
        app_name: "tonkeeper",
        name: "Tonkeeper",
        image: "https://tonkeeper.com/assets/tonconnect-icon.png",
        tondns: "tonkeeper.ton",
        about_url: "https://tonkeeper.com",
        universal_url: "https://app.tonkeeper.com/ton-connect",
        deepLink: "tonkeeper-tc://",
        bridge: [{
          type: "sse",
          url: "https://bridge.tonapi.io/bridge"
        }, {
          type: "js",
          key: "tonkeeper"
        }],
        platforms: ["ios", "android", "chrome", "firefox", "macos"]
      }, {
        app_name: "mytonwallet",
        name: "MyTonWallet",
        image: "https://static.mytonwallet.io/icon-256.png",
        about_url: "https://mytonwallet.io",
        universal_url: "https://connect.mytonwallet.org",
        bridge: [{
          type: "js",
          key: "mytonwallet"
        }, {
          type: "sse",
          url: "https://tonconnectbridge.mytonwallet.org/bridge/"
        }],
        platforms: ["chrome", "windows", "macos", "linux", "ios", "android", "firefox"]
      }, {
        app_name: "openmask",
        name: "OpenMask",
        image: "https://raw.githubusercontent.com/OpenProduct/openmask-extension/main/public/openmask-logo-288.png",
        about_url: "https://www.openmask.app/",
        bridge: [{
          type: "js",
          key: "openmask"
        }],
        platforms: ["chrome"]
      }, {
        app_name: "tonhub",
        name: "Tonhub",
        image: "https://tonhub.com/tonconnect_logo.png",
        about_url: "https://tonhub.com",
        universal_url: "https://tonhub.com/ton-connect",
        bridge: [{
          type: "js",
          key: "tonhub"
        }, {
          type: "sse",
          url: "https://connect.tonhubapi.com/tonconnect"
        }],
        platforms: ["ios", "android"]
      }, {
        app_name: "dewallet",
        name: "DeWallet",
        image: "https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png",
        about_url: "https://delabwallet.com",
        universal_url: "https://t.me/dewallet?attach=wallet",
        bridge: [{
          type: "sse",
          url: "https://sse-bridge.delab.team/bridge"
        }],
        platforms: ["ios", "android"]
      }, {
        app_name: "xtonwallet",
        name: "XTONWallet",
        image: "https://xtonwallet.com/assets/img/icon-256-back.png",
        about_url: "https://xtonwallet.com",
        bridge: [{
          type: "js",
          key: "xtonwallet"
        }],
        platforms: ["chrome", "firefox"]
      }, {
        app_name: "tonwallet",
        name: "TON Wallet",
        image: "https://wallet.ton.org/assets/ui/qr-logo.png",
        about_url: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
        bridge: [{
          type: "js",
          key: "tonwallet"
        }],
        platforms: ["chrome"]
      }, {
        app_name: "bitgetTonWallet",
        name: "Bitget Wallet",
        image: "https://raw.githubusercontent.com/bitkeepwallet/download/main/logo/png/bitget_wallet_logo_0_gas_fee.png",
        about_url: "https://web3.bitget.com",
        deepLink: "bitkeep://",
        bridge: [{
          type: "js",
          key: "bitgetTonWallet"
        }, {
          type: "sse",
          url: "https://bridge.tonapi.io/bridge"
        }],
        platforms: ["ios", "android", "chrome"],
        universal_url: "https://bkcode.vip/ton-connect"
      }, {
        app_name: "safepalwallet",
        name: "SafePal",
        image: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
        tondns: "",
        about_url: "https://www.safepal.com",
        universal_url: "https://link.safepal.io/ton-connect",
        deepLink: "safepal-tc://",
        bridge: [{
          type: "sse",
          url: "https://ton-bridge.safepal.com/tonbridge/v1/bridge"
        }, {
          type: "js",
          key: "safepalwallet"
        }],
        platforms: ["ios", "android", "chrome", "firefox"]
      }, {
        app_name: "okxTonWallet",
        name: "OKX Wallet",
        image: "https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png",
        about_url: "https://www.okx.com/web3",
        universal_url: "https://www.okx.com/download?appendQuery=true&deeplink=okx://web3/wallet/tonconnect",
        bridge: [{
          type: "js",
          key: "okxTonWallet"
        }, {
          type: "sse",
          url: "https://www.okx.com/tonbridge/discover/rpc/bridge"
        }],
        platforms: ["chrome", "safari", "firefox", "ios", "android"]
      }, {
        app_name: "okxTonWalletTr",
        name: "OKX TR Wallet",
        image: "https://static.okx.com/cdn/assets/imgs/247/587A8296F0BB640F.png",
        about_url: "https://tr.okx.com/web3",
        universal_url: "https://tr.okx.com/download?appendQuery=true&deeplink=okxtr://web3/wallet/tonconnect",
        bridge: [{
          type: "js",
          key: "okxTonWallet"
        }, {
          type: "sse",
          url: "https://www.okx.com/tonbridge/discover/rpc/bridge"
        }],
        platforms: ["chrome", "safari", "firefox", "ios", "android"]
      }];
      class eO {
        constructor(e) {
          this.walletsListCache = null, this.walletsListCacheCreationTimestamp = null, this.walletsListSource = "https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json", (null == e ? void 0 : e.walletsListSource) && (this.walletsListSource = e.walletsListSource), (null == e ? void 0 : e.cacheTTLMs) && (this.cacheTTLMs = e.cacheTTLMs)
        }
        getWallets() {
          return D(this, void 0, void 0, function*() {
            return this.cacheTTLMs && this.walletsListCacheCreationTimestamp && Date.now() > this.walletsListCacheCreationTimestamp + this.cacheTTLMs && (this.walletsListCache = null), this.walletsListCache || (this.walletsListCache = this.fetchWalletsList(), this.walletsListCache.then(() => {
              this.walletsListCacheCreationTimestamp = Date.now()
            }).catch(() => {
              this.walletsListCache = null, this.walletsListCacheCreationTimestamp = null
            })), this.walletsListCache
          })
        }
        getEmbeddedWallet() {
          return D(this, void 0, void 0, function*() {
            let e = (yield this.getWallets()).filter(eC);
            return 1 !== e.length ? null : e[0]
          })
        }
        fetchWalletsList() {
          return D(this, void 0, void 0, function*() {
            let e = [];
            try {
              let t = yield fetch(this.walletsListSource);
              if (e = yield t.json(), !Array.isArray(e)) throw new z("Wrong wallets list format, wallets list must be an array.");
              let n = e.filter(e => !this.isCorrectWalletConfigDTO(e));
              n.length && (ep(`Wallet(s) ${n.map(e=>e.name).join(", ")} config format is wrong. They were removed from the wallets list.`), e = e.filter(e => this.isCorrectWalletConfigDTO(e)))
            } catch (t) {
              ep(t), e = eE
            }
            let t = [];
            try {
              t = ew.getCurrentlyInjectedWallets()
            } catch (e) {
              ep(e)
            }
            return this.mergeWalletsLists(this.walletConfigDTOListToWalletConfigList(e), t)
          })
        }
        walletConfigDTOListToWalletConfigList(e) {
          return e.map(e => {
            let t = {
              name: e.name,
              appName: e.app_name,
              imageUrl: e.image,
              aboutUrl: e.about_url,
              tondns: e.tondns,
              platforms: e.platforms
            };
            return e.bridge.forEach(n => {
              if ("sse" === n.type && (t.bridgeUrl = n.url, t.universalLink = e.universal_url, t.deepLink = e.deepLink), "js" === n.type) {
                let e = n.key;
                t.jsBridgeKey = e, t.injected = ew.isWalletInjected(e), t.embedded = ew.isInsideWalletBrowser(e)
              }
            }), t
          })
        }
        mergeWalletsLists(e, t) {
          return [...new Set(e.concat(t).map(e => e.name)).values()].map(n => {
            let r = e.find(e => e.name === n),
              i = t.find(e => e.name === n);
            return Object.assign(Object.assign({}, r && Object.assign({}, r)), i && Object.assign({}, i))
          })
        }
        isCorrectWalletConfigDTO(e) {
          if (!e || "object" != typeof e || !("name" in e) || !("image" in e) || !("about_url" in e) || !("platforms" in e) || !("app_name" in e) || !e.platforms || !Array.isArray(e.platforms) || !e.platforms.length || !("bridge" in e) || !Array.isArray(e.bridge) || !e.bridge.length) return !1;
          let t = e.bridge;
          if (t.some(e => !e || "object" != typeof e || !("type" in e))) return !1;
          let n = t.find(e => "sse" === e.type);
          if (n && (!("url" in n) || !n.url || !e.universal_url)) return !1;
          let r = t.find(e => "js" === e.type);
          return !r || "key" in r && !!r.key
        }
      }
      class e_ extends I {
        get info() {
          return "Wallet doesn't support requested feature method."
        }
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, e_.prototype)
        }
      }

      function eT() {
        return {
          type: "request-version"
        }
      }

      function eA(e) {
        return {
          type: "response-version",
          version: e
        }
      }

      function eP(e) {
        return {
          ton_connect_sdk_lib: e.ton_connect_sdk_lib,
          ton_connect_ui_lib: e.ton_connect_ui_lib
        }
      }

      function eR(e, t) {
        var n, r, i, o, a, s, l, c;
        let u = (null === (n = null == t ? void 0 : t.connectItems) || void 0 === n ? void 0 : n.tonProof) && "proof" in t.connectItems.tonProof;
        return {
          wallet_address: null !== (i = null === (r = null == t ? void 0 : t.account) || void 0 === r ? void 0 : r.address) && void 0 !== i ? i : null,
          wallet_type: null !== (o = null == t ? void 0 : t.device.appName) && void 0 !== o ? o : null,
          wallet_version: null !== (a = null == t ? void 0 : t.device.appVersion) && void 0 !== a ? a : null,
          auth_type: u ? "ton_proof" : "ton_addr",
          custom_data: Object.assign({
            chain_id: null !== (l = null === (s = null == t ? void 0 : t.account) || void 0 === s ? void 0 : s.chain) && void 0 !== l ? l : null,
            provider: null !== (c = null == t ? void 0 : t.provider) && void 0 !== c ? c : null
          }, eP(e))
        }
      }

      function ej(e) {
        return {
          type: "connection-started",
          custom_data: eP(e)
        }
      }

      function eL(e, t) {
        return Object.assign({
          type: "connection-completed",
          is_success: !0
        }, eR(e, t))
      }

      function eM(e, t, n) {
        return {
          type: "connection-error",
          is_success: !1,
          error_message: t,
          error_code: null != n ? n : null,
          custom_data: eP(e)
        }
      }

      function eN(e) {
        return {
          type: "connection-restoring-started",
          custom_data: eP(e)
        }
      }

      function eD(e, t) {
        return Object.assign({
          type: "connection-restoring-completed",
          is_success: !0
        }, eR(e, t))
      }

      function eI(e, t) {
        return {
          type: "connection-restoring-error",
          is_success: !1,
          error_message: t,
          custom_data: eP(e)
        }
      }

      function e$(e, t) {
        var n, r, i, o;
        return {
          valid_until: null !== (n = String(t.validUntil)) && void 0 !== n ? n : null,
          from: null !== (o = null !== (r = t.from) && void 0 !== r ? r : null === (i = null == e ? void 0 : e.account) || void 0 === i ? void 0 : i.address) && void 0 !== o ? o : null,
          messages: t.messages.map(e => {
            var t, n;
            return {
              address: null !== (t = e.address) && void 0 !== t ? t : null,
              amount: null !== (n = e.amount) && void 0 !== n ? n : null
            }
          })
        }
      }

      function eB(e, t, n) {
        return Object.assign(Object.assign({
          type: "transaction-sent-for-signature"
        }, eR(e, t)), e$(t, n))
      }

      function eU(e, t, n, r) {
        return Object.assign(Object.assign({
          type: "transaction-signed",
          is_success: !0,
          signed_transaction: r.boc
        }, eR(e, t)), e$(t, n))
      }

      function eV(e, t, n, r, i) {
        return Object.assign(Object.assign({
          type: "transaction-signing-failed",
          is_success: !1,
          error_message: r,
          error_code: null != i ? i : null
        }, eR(e, t)), e$(t, n))
      }

      function eW(e, t, n) {
        return Object.assign({
          type: "disconnection",
          scope: n
        }, eR(e, t))
      }
      class eF {
        constructor() {
          this.window = ev()
        }
        dispatchEvent(e, t) {
          var n;
          return D(this, void 0, void 0, function*() {
            let r = new CustomEvent(e, {
              detail: t
            });
            null === (n = this.window) || void 0 === n || n.dispatchEvent(r)
          })
        }
        addEventListener(e, t, n) {
          var r;
          return D(this, void 0, void 0, function*() {
            return null === (r = this.window) || void 0 === r || r.addEventListener(e, t, n), () => {
              var n;
              return null === (n = this.window) || void 0 === n ? void 0 : n.removeEventListener(e, t)
            }
          })
        }
      }
      class eG {
        constructor(e) {
          var t;
          this.eventPrefix = "ton-connect-", this.tonConnectUiVersion = null, this.eventDispatcher = null !== (t = null == e ? void 0 : e.eventDispatcher) && void 0 !== t ? t : new eF, this.tonConnectSdkVersion = e.tonConnectSdkVersion, this.init().catch()
        }
        get version() {
          return eP({
            ton_connect_sdk_lib: this.tonConnectSdkVersion,
            ton_connect_ui_lib: this.tonConnectUiVersion
          })
        }
        init() {
          return D(this, void 0, void 0, function*() {
            try {
              yield this.setRequestVersionHandler(), this.tonConnectUiVersion = yield this.requestTonConnectUiVersion()
            } catch (e) {}
          })
        }
        setRequestVersionHandler() {
          return D(this, void 0, void 0, function*() {
            yield this.eventDispatcher.addEventListener("ton-connect-request-version", () => D(this, void 0, void 0, function*() {
              yield this.eventDispatcher.dispatchEvent("ton-connect-response-version", eA(this.tonConnectSdkVersion))
            }))
          })
        }
        requestTonConnectUiVersion() {
          return D(this, void 0, void 0, function*() {
            return new Promise((e, t) => D(this, void 0, void 0, function*() {
              try {
                yield this.eventDispatcher.addEventListener("ton-connect-ui-response-version", t => {
                  e(t.detail.version)
                }, {
                  once: !0
                }), yield this.eventDispatcher.dispatchEvent("ton-connect-ui-request-version", eT())
              } catch (e) {
                t(e)
              }
            }))
          })
        }
        dispatchUserActionEvent(e) {
          try {
            this.eventDispatcher.dispatchEvent(`${this.eventPrefix}${e.type}`, e).catch()
          } catch (e) {}
        }
        trackConnectionStarted(...e) {
          try {
            let t = ej(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackConnectionCompleted(...e) {
          try {
            let t = eL(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackConnectionError(...e) {
          try {
            let t = eM(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackConnectionRestoringStarted(...e) {
          try {
            let t = eN(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackConnectionRestoringCompleted(...e) {
          try {
            let t = eD(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackConnectionRestoringError(...e) {
          try {
            let t = eI(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackDisconnection(...e) {
          try {
            let t = eW(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackTransactionSentForSignature(...e) {
          try {
            let t = eB(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackTransactionSigned(...e) {
          try {
            let t = eU(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackTransactionSigningFailed(...e) {
          try {
            let t = eV(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
      }
      class eH {
        constructor(e) {
          if (this.walletsList = new eO, this._wallet = null, this.provider = null, this.statusChangeSubscriptions = [], this.statusChangeErrorSubscriptions = [], this.dappSettings = {
              manifestUrl: (null == e ? void 0 : e.manifestUrl) || function() {
                var e;
                let t = null === (e = ev()) || void 0 === e ? void 0 : e.location.origin;
                return t ? t + "/tonconnect-manifest.json" : ""
              }(),
              storage: (null == e ? void 0 : e.storage) || new ex
            }, this.walletsList = new eO({
              walletsListSource: null == e ? void 0 : e.walletsListSource,
              cacheTTLMs: null == e ? void 0 : e.walletsListCacheTTLMs
            }), this.tracker = new eG({
              eventDispatcher: null == e ? void 0 : e.eventDispatcher,
              tonConnectSdkVersion: "3.0.5"
            }), !this.dappSettings.manifestUrl) throw new $("Dapp tonconnect-manifest.json must be specified if window.location.origin is undefined. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest");
          this.bridgeConnectionStorage = new eg(this.dappSettings.storage), (null == e ? void 0 : e.disableAutoPauseConnection) || this.addWindowFocusAndBlurSubscriptions()
        }
        static getWallets() {
          return this.walletsList.getWallets()
        }
        get connected() {
          return null !== this._wallet
        }
        get account() {
          var e;
          return (null === (e = this._wallet) || void 0 === e ? void 0 : e.account) || null
        }
        get wallet() {
          return this._wallet
        }
        set wallet(e) {
          this._wallet = e, this.statusChangeSubscriptions.forEach(e => e(this._wallet))
        }
        getWallets() {
          return this.walletsList.getWallets()
        }
        onStatusChange(e, t) {
          return this.statusChangeSubscriptions.push(e), t && this.statusChangeErrorSubscriptions.push(t), () => {
            this.statusChangeSubscriptions = this.statusChangeSubscriptions.filter(t => t !== e), t && (this.statusChangeErrorSubscriptions = this.statusChangeErrorSubscriptions.filter(e => e !== t))
          }
        }
        connect(e, t) {
          var n, r;
          let i = {};
          if ("object" == typeof t && "tonProof" in t && (i.request = t), "object" == typeof t && ("openingDeadlineMS" in t || "signal" in t || "request" in t) && (i.request = null == t ? void 0 : t.request, i.openingDeadlineMS = null == t ? void 0 : t.openingDeadlineMS, i.signal = null == t ? void 0 : t.signal), this.connected) throw new V;
          let o = ec(null == i ? void 0 : i.signal);
          if (null === (n = this.abortController) || void 0 === n || n.abort(), this.abortController = o, o.signal.aborted) throw new I("Connection was aborted");
          return null === (r = this.provider) || void 0 === r || r.closeConnection(), this.provider = this.createProvider(e), o.signal.addEventListener("abort", () => {
            var e;
            null === (e = this.provider) || void 0 === e || e.closeConnection(), this.provider = null
          }), this.tracker.trackConnectionStarted(), this.provider.connect(this.createConnectRequest(null == i ? void 0 : i.request), {
            openingDeadlineMS: null == i ? void 0 : i.openingDeadlineMS,
            signal: o.signal
          })
        }
        restoreConnection(e) {
          var t, n;
          return D(this, void 0, void 0, function*() {
            this.tracker.trackConnectionRestoringStarted();
            let r = ec(null == e ? void 0 : e.signal);
            if (null === (t = this.abortController) || void 0 === t || t.abort(), this.abortController = r, r.signal.aborted) {
              this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
              return
            }
            let [i, o] = yield Promise.all([this.bridgeConnectionStorage.storedConnectionType(), this.walletsList.getEmbeddedWallet()]);
            if (r.signal.aborted) {
              this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
              return
            }
            let a = null;
            try {
              switch (i) {
                case "http":
                  a = yield em.fromStorage(this.dappSettings.storage);
                  break;
                case "injected":
                  a = yield ew.fromStorage(this.dappSettings.storage);
                  break;
                default:
                  if (!o) return;
                  a = this.createProvider(o)
              }
            } catch (e) {
              this.tracker.trackConnectionRestoringError("Provider is not restored"), yield this.bridgeConnectionStorage.removeConnection(), null == a || a.closeConnection(), a = null;
              return
            }
            if (r.signal.aborted) {
              null == a || a.closeConnection(), this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
              return
            }
            if (!a) {
              ep("Provider is not restored"), this.tracker.trackConnectionRestoringError("Provider is not restored");
              return
            }
            null === (n = this.provider) || void 0 === n || n.closeConnection(), this.provider = a, a.listen(this.walletEventsListener.bind(this));
            let s = () => {
              this.tracker.trackConnectionRestoringError("Connection restoring was aborted"), null == a || a.closeConnection(), a = null
            };
            return r.signal.addEventListener("abort", s), Promise.race([eu(t => D(this, void 0, void 0, function*() {
              yield null == a ? void 0 : a.restoreConnection({
                openingDeadlineMS: null == e ? void 0 : e.openingDeadlineMS,
                signal: t.signal
              }), r.signal.removeEventListener("abort", s), this.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : this.tracker.trackConnectionRestoringError("Connection restoring failed")
            }), {
              attempts: Number.MAX_SAFE_INTEGER,
              delayMs: 2e3,
              signal: null == e ? void 0 : e.signal
            }), new Promise(e => setTimeout(() => e(), 12e3))])
          })
        }
        sendTransaction(e, t) {
          return D(this, void 0, void 0, function*() {
            let n = {};
            "function" == typeof t ? n.onRequestSent = t : (n.onRequestSent = null == t ? void 0 : t.onRequestSent, n.signal = null == t ? void 0 : t.signal);
            let r = ec(null == n ? void 0 : n.signal);
            if (r.signal.aborted) throw new I("Transaction sending was aborted");
            this.checkConnection(),
              function(e, t) {
                let n = e.includes("SendTransaction"),
                  r = e.find(e => e && "object" == typeof e && "SendTransaction" === e.name);
                if (!n && !r) throw new e_("Wallet doesn't support SendTransaction feature.");
                if (r && void 0 !== r.maxMessages) {
                  if (r.maxMessages < t.requiredMessagesNumber) throw new e_(`Wallet is not able to handle such SendTransaction request. Max support messages number is ${r.maxMessages}, but ${t.requiredMessagesNumber} is required.`);
                  return
                }! function(...e) {
                  try {
                    console.warn("[TON_CONNECT_SDK]", ...e)
                  } catch (e) {}
                }("Connected wallet didn't provide information about max allowed messages in the SendTransaction request. Request may be rejected by the wallet.")
              }(this.wallet.device.features, {
                requiredMessagesNumber: e.messages.length
              }), this.tracker.trackTransactionSentForSignature(this.wallet, e);
            let {
              validUntil: i
            } = e, o =
              /*! *****************************************************************************
              Copyright (c) Microsoft Corporation.

              Permission to use, copy, modify, and/or distribute this software for any
              purpose with or without fee is hereby granted.

              THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
              REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
              AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
              INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
              LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
              OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
              PERFORMANCE OF THIS SOFTWARE.
              ***************************************************************************** */
              function(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                  for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                return n
              }(e, ["validUntil"]), a = e.from || this.account.address, s = e.network || this.account.chain, l = yield this.provider.sendRequest(er.convertToRpcRequest(Object.assign(Object.assign({}, o), {
                valid_until: i,
                from: a,
                network: s
              })), {
                onRequestSent: n.onRequestSent,
                signal: r.signal
              });
            if (er.isError(l)) return this.tracker.trackTransactionSigningFailed(this.wallet, e, l.error.message, l.error.code), er.parseAndThrowError(l);
            let c = er.convertFromRpcResponse(l);
            return this.tracker.trackTransactionSigned(this.wallet, e, c), c
          })
        }
        disconnect(e) {
          var t;
          return D(this, void 0, void 0, function*() {
            if (!this.connected) throw new W;
            let n = ec(null == e ? void 0 : e.signal),
              r = this.abortController;
            if (this.abortController = n, n.signal.aborted) throw new I("Disconnect was aborted");
            this.onWalletDisconnected("dapp"), yield null === (t = this.provider) || void 0 === t ? void 0 : t.disconnect({
              signal: n.signal
            }), null == r || r.abort()
          })
        }
        pauseConnection() {
          var e;
          (null === (e = this.provider) || void 0 === e ? void 0 : e.type) === "http" && this.provider.pause()
        }
        unPauseConnection() {
          var e;
          return (null === (e = this.provider) || void 0 === e ? void 0 : e.type) !== "http" ? Promise.resolve() : this.provider.unPause()
        }
        addWindowFocusAndBlurSubscriptions() {
          let e = function() {
            if ("undefined" != typeof document) return document
          }();
          if (e) try {
            e.addEventListener("visibilitychange", () => {
              e.hidden ? this.pauseConnection() : this.unPauseConnection().catch()
            })
          } catch (e) {
            ep("Cannot subscribe to the document.visibilitychange: ", e)
          }
        }
        createProvider(e) {
          let t;
          return (t = !Array.isArray(e) && "jsBridgeKey" in e ? new ew(this.dappSettings.storage, e.jsBridgeKey) : new em(this.dappSettings.storage, e)).listen(this.walletEventsListener.bind(this)), t
        }
        walletEventsListener(e) {
          switch (e.event) {
            case "connect":
              this.onWalletConnected(e.payload);
              break;
            case "connect_error":
              this.onWalletConnectError(e.payload);
              break;
            case "disconnect":
              this.onWalletDisconnected("wallet")
          }
        }
        onWalletConnected(e) {
          let t = e.items.find(e => "ton_addr" === e.name),
            n = e.items.find(e => "ton_proof" === e.name);
          if (!t) throw new I("ton_addr connection item was not found");
          let r = {
            device: e.device,
            provider: this.provider.type,
            account: {
              address: t.address,
              chain: t.network,
              walletStateInit: t.walletStateInit,
              publicKey: t.publicKey
            }
          };
          n && (r.connectItems = {
            tonProof: n
          }), this.wallet = r, this.tracker.trackConnectionCompleted(r)
        }
        onWalletConnectError(e) {
          let t = X.parseError(e);
          if (this.statusChangeErrorSubscriptions.forEach(e => e(t)), ed(t), this.tracker.trackConnectionError(e.message, e.code), t instanceof U || t instanceof B) throw ep(t), t
        }
        onWalletDisconnected(e) {
          this.tracker.trackDisconnection(this.wallet, e), this.wallet = null
        }
        checkConnection() {
          if (!this.connected) throw new W
        }
        createConnectRequest(e) {
          let t = [{
            name: "ton_addr"
          }];
          return (null == e ? void 0 : e.tonProof) && t.push({
            name: "ton_proof",
            payload: e.tonProof
          }), {
            manifestUrl: this.dappSettings.manifestUrl,
            items: t
          }
        }
      }

      function eK(e, t = !1) {
        let {
          wc: n,
          hex: r
        } = function(e) {
          if (!e.includes(":")) throw new q(`Wrong address ${e}. Address must include ":".`);
          let t = e.split(":");
          if (2 !== t.length) throw new q(`Wrong address ${e}. Address must include ":" only once.`);
          let n = parseInt(t[0]);
          if (0 !== n && -1 !== n) throw new q(`Wrong address ${e}. WC must be eq 0 or -1, but ${n} received.`);
          let r = t[1];
          if ((null == r ? void 0 : r.length) !== 64) throw new q(`Wrong address ${e}. Hex part must be 64bytes length, but ${null==r?void 0:r.length} received.`);
          return {
            wc: n,
            hex: function(e) {
              let t = (e = e.toLowerCase()).length;
              if (t % 2 != 0) throw new Z("Hex string must have length a multiple of 2: " + e);
              let n = t / 2,
                r = new Uint8Array(n);
              for (let t = 0; t < n; t++) {
                let n = 2 * t,
                  i = e.substring(n, n + 2);
                if (!ez.hasOwnProperty(i)) throw new Z("Invalid hex character: " + i);
                r[t] = ez[i]
              }
              return r
            }(r)
          }
        }(e), i = 81;
        t && (i |= 128);
        let o = new Int8Array(34);
        o[0] = i, o[1] = n, o.set(r, 2);
        let a = new Uint8Array(36);
        return a.set(o), a.set(function(e) {
          let t = 0,
            n = new Uint8Array(e.length + 2);
          for (let r of (n.set(e), n)) {
            let e = 128;
            for (; e > 0;) t <<= 1, r & e && (t += 1), e >>= 1, t > 65535 && (t &= 65535, t ^= 4129)
          }
          return new Uint8Array([Math.floor(t / 256), t % 256])
        }(o), 34), R.encode(a).replace(/\+/g, "-").replace(/\//g, "_")
      }
      eH.walletsList = new eO, eH.isWalletInjected = e => ew.isWalletInjected(e), eH.isInsideWalletBrowser = e => ew.isInsideWalletBrowser(e);
      let ez = {};
      for (let e = 0; e <= 255; e++) {
        let t = e.toString(16);
        t.length < 2 && (t = "0" + t), ez[t] = e
      }
      var eq = n(9108),
        eZ = n(9996),
        eY = n(3967),
        eJ = n(3454),
        eQ = Object.defineProperty,
        eX = Object.defineProperties,
        e1 = Object.getOwnPropertyDescriptors,
        e0 = Object.getOwnPropertySymbols,
        e2 = Object.prototype.hasOwnProperty,
        e5 = Object.prototype.propertyIsEnumerable,
        e3 = (e, t, n) => t in e ? eQ(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n
        }) : e[t] = n,
        e8 = (e, t) => {
          for (var n in t || (t = {})) e2.call(t, n) && e3(e, n, t[n]);
          if (e0)
            for (var n of e0(t)) e5.call(t, n) && e3(e, n, t[n]);
          return e
        },
        e6 = (e, t) => eX(e, e1(t)),
        e4 = (e, t, n) => (e3(e, "symbol" != typeof t ? t + "" : t, n), n),
        e7 = (e, t, n) => new Promise((r, i) => {
          var o = e => {
              try {
                s(n.next(e))
              } catch (e) {
                i(e)
              }
            },
            a = e => {
              try {
                s(n.throw(e))
              } catch (e) {
                i(e)
              }
            },
            s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(o, a);
          s((n = n.apply(e, t)).next())
        });
      let e9 = {},
        te = Symbol("solid-proxy"),
        tt = Symbol("solid-track"),
        tn = {
          equals: (e, t) => e === t
        },
        tr = tT,
        ti = {
          owned: null,
          cleanups: null,
          context: null,
          owner: null
        },
        to = {};
      var ta = null;
      let ts = null,
        tl = null,
        tc = null,
        tu = 0;

      function td(e, t) {
        let n = ts,
          r = ta,
          i = 0 === e.length,
          o = i ? ti : {
            owned: null,
            cleanups: null,
            context: null,
            owner: void 0 === t ? r : t
          };
        ta = o, ts = null;
        try {
          return t_(i ? e : () => e(() => ty(() => tR(o))), !0)
        } finally {
          ts = n, ta = r
        }
      }

      function tp(e, t) {
        let n = {
          value: e,
          observers: null,
          observerSlots: null,
          comparator: (t = t ? Object.assign({}, tn, t) : tn).equals || void 0
        };
        return [tk.bind(n), e => ("function" == typeof e && (e = e(n.value)), tC(n, e))]
      }

      function th(e, t, n) {
        tS(tE(e, t, !0, 1))
      }

      function tf(e, t, n) {
        tS(tE(e, t, !1, 1))
      }

      function tg(e, t, n) {
        tr = tA;
        let r = tE(e, t, !1, 1);
        r.user = !0, tc ? tc.push(r) : tS(r)
      }

      function tm(e, t, n) {
        n = n ? Object.assign({}, tn, n) : tn;
        let r = tE(e, t, !0, 0);
        return r.observers = null, r.observerSlots = null, r.comparator = n.equals || void 0, tS(r), tk.bind(r)
      }

      function ty(e) {
        if (null === ts) return e();
        let t = ts;
        ts = null;
        try {
          return e()
        } finally {
          ts = t
        }
      }

      function tb(e) {
        return null === ta || (null === ta.cleanups ? ta.cleanups = [e] : ta.cleanups.push(e)), e
      }

      function tv(e, t) {
        let n = Symbol("context");
        return {
          id: n,
          Provider: function(e) {
            let t;
            return tf(() => t = ty(() => (ta.context = {
              [n]: e.value
            }, tx(() => e.children))), void 0), t
          },
          defaultValue: e
        }
      }

      function tw(e) {
        let t;
        return void 0 !== (t = function e(t, n) {
          return t ? t.context && void 0 !== t.context[n] ? t.context[n] : e(t.owner, n) : void 0
        }(ta, e.id)) ? t : e.defaultValue
      }

      function tx(e) {
        let t = tm(e),
          n = tm(() => (function e(t) {
            if ("function" == typeof t && !t.length) return e(t());
            if (Array.isArray(t)) {
              let n = [];
              for (let r = 0; r < t.length; r++) {
                let i = e(t[r]);
                Array.isArray(i) ? n.push.apply(n, i) : n.push(i)
              }
              return n
            }
            return t
          })(t()));
        return n.toArray = () => {
          let e = n();
          return Array.isArray(e) ? e : null != e ? [e] : []
        }, n
      }

      function tk() {
        if (this.sources && this.state) {
          if (1 === this.state) tS(this);
          else {
            let e = tl;
            tl = null, t_(() => tP(this), !1), tl = e
          }
        }
        if (ts) {
          let e = this.observers ? this.observers.length : 0;
          ts.sources ? (ts.sources.push(this), ts.sourceSlots.push(e)) : (ts.sources = [this], ts.sourceSlots = [e]), this.observers ? (this.observers.push(ts), this.observerSlots.push(ts.sources.length - 1)) : (this.observers = [ts], this.observerSlots = [ts.sources.length - 1])
        }
        return this.value
      }

      function tC(e, t, n) {
        let r = e.value;
        return (!e.comparator || !e.comparator(r, t)) && (e.value = t, e.observers && e.observers.length && t_(() => {
          for (let t = 0; t < e.observers.length; t += 1) {
            let n = e.observers[t];
            n.state || (n.pure ? tl.push(n) : tc.push(n), n.observers && function e(t) {
              for (let n = 0; n < t.observers.length; n += 1) {
                let r = t.observers[n];
                !r.state && (r.state = 2, r.pure ? tl.push(r) : tc.push(r), r.observers && e(r))
              }
            }(n)), n.state = 1
          }
          if (tl.length > 1e6) throw tl = [], Error()
        }, !1)), t
      }

      function tS(e) {
        if (!e.fn) return;
        tR(e);
        let t = ta,
          n = ts,
          r = tu;
        ts = ta = e,
          function(e, t, n) {
            let r;
            try {
              r = e.fn(t)
            } catch (t) {
              e.pure && (e.state = 1, e.owned && e.owned.forEach(tR), e.owned = null), tL(t)
            }(!e.updatedAt || e.updatedAt <= n) && (null != e.updatedAt && "observers" in e ? tC(e, r) : e.value = r, e.updatedAt = n)
          }(e, e.value, r), ts = n, ta = t
      }

      function tE(e, t, n, r = 1, i) {
        let o = {
          fn: e,
          state: r,
          updatedAt: null,
          owned: null,
          sources: null,
          sourceSlots: null,
          cleanups: null,
          value: t,
          owner: ta,
          context: null,
          pure: n
        };
        return null === ta || ta !== ti && (ta.owned ? ta.owned.push(o) : ta.owned = [o]), o
      }

      function tO(e) {
        if (0 === e.state) return;
        if (2 === e.state) return tP(e);
        if (e.suspense && ty(e.suspense.inFallback)) return e.suspense.effects.push(e);
        let t = [e];
        for (;
          (e = e.owner) && (!e.updatedAt || e.updatedAt < tu);) e.state && t.push(e);
        for (let n = t.length - 1; n >= 0; n--)
          if (1 === (e = t[n]).state) tS(e);
          else if (2 === e.state) {
          let n = tl;
          tl = null, t_(() => tP(e, t[0]), !1), tl = n
        }
      }

      function t_(e, t) {
        if (tl) return e();
        let n = !1;
        t || (tl = []), tc ? n = !0 : tc = [], tu++;
        try {
          let t = e();
          return function(e) {
            if (tl && (tT(tl), tl = null), e) return;
            let t = tc;
            tc = null, t.length && t_(() => tr(t), !1)
          }(n), t
        } catch (e) {
          n || (tc = null), tl = null, tL(e)
        }
      }

      function tT(e) {
        for (let t = 0; t < e.length; t++) tO(e[t])
      }

      function tA(e) {
        let t, n = 0;
        for (t = 0; t < e.length; t++) {
          let r = e[t];
          r.user ? e[n++] = r : tO(r)
        }
        for (e9.context && (e9.context = void 0), t = 0; t < n; t++) tO(e[t])
      }

      function tP(e, t) {
        e.state = 0;
        for (let n = 0; n < e.sources.length; n += 1) {
          let r = e.sources[n];
          r.sources && (1 === r.state ? r !== t && tO(r) : (2 === r.state || null) && tP(r, t))
        }
      }

      function tR(e) {
        let t;
        if (e.sources)
          for (; e.sources.length;) {
            let t = e.sources.pop(),
              n = e.sourceSlots.pop(),
              r = t.observers;
            if (r && r.length) {
              let e = r.pop(),
                i = t.observerSlots.pop();
              n < r.length && (e.sourceSlots[i] = n, r[n] = e, t.observerSlots[n] = i)
            }
          }
        if (e.owned) {
          for (t = 0; t < e.owned.length; t++) tR(e.owned[t]);
          e.owned = null
        }
        if (e.cleanups) {
          for (t = 0; t < e.cleanups.length; t++) e.cleanups[t]();
          e.cleanups = null
        }
        e.state = 0, e.context = null
      }

      function tj(e) {
        return e instanceof Error || "string" == typeof e ? e : Error("Unknown error")
      }

      function tL(e) {
        throw e = tj(e)
      }
      let tM = Symbol("fallback");

      function tN(e) {
        for (let t = 0; t < e.length; t++) e[t]()
      }

      function tD(e, t) {
        return ty(() => e(t || {}))
      }

      function tI() {
        return !0
      }
      let t$ = {
        get: (e, t, n) => t === te ? n : e.get(t),
        has: (e, t) => t === te || e.has(t),
        set: tI,
        deleteProperty: tI,
        getOwnPropertyDescriptor: (e, t) => ({
          configurable: !0,
          enumerable: !0,
          get: () => e.get(t),
          set: tI,
          deleteProperty: tI
        }),
        ownKeys: e => e.keys()
      };

      function tB(e) {
        return (e = "function" == typeof e ? e() : e) ? e : {}
      }

      function tU(...e) {
        let t = !1;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          t = t || !!r && te in r, e[n] = "function" == typeof r ? (t = !0, tm(r)) : r
        }
        if (t) return new Proxy({
          get(t) {
            for (let n = e.length - 1; n >= 0; n--) {
              let r = tB(e[n])[t];
              if (void 0 !== r) return r
            }
          },
          has(t) {
            for (let n = e.length - 1; n >= 0; n--)
              if (t in tB(e[n])) return !0;
            return !1
          },
          keys() {
            let t = [];
            for (let n = 0; n < e.length; n++) t.push(...Object.keys(tB(e[n])));
            return [...new Set(t)]
          }
        }, t$);
        let n = {};
        for (let t = e.length - 1; t >= 0; t--)
          if (e[t]) {
            let r = Object.getOwnPropertyDescriptors(e[t]);
            for (let t in r) t in n || Object.defineProperty(n, t, {
              enumerable: !0,
              get() {
                for (let n = e.length - 1; n >= 0; n--) {
                  let r = (e[n] || {})[t];
                  if (void 0 !== r) return r
                }
              }
            })
          } return n
      }

      function tV(e, ...t) {
        let n = new Set(t.flat());
        if (te in e) {
          let r = t.map(t => new Proxy({
            get: n => t.includes(n) ? e[n] : void 0,
            has: n => t.includes(n) && n in e,
            keys: () => t.filter(t => t in e)
          }, t$));
          return r.push(new Proxy({
            get: t => n.has(t) ? void 0 : e[t],
            has: t => !n.has(t) && t in e,
            keys: () => Object.keys(e).filter(e => !n.has(e))
          }, t$)), r
        }
        let r = Object.getOwnPropertyDescriptors(e);
        return t.push(Object.keys(r).filter(e => !n.has(e))), t.map(t => {
          let n = {};
          for (let i = 0; i < t.length; i++) {
            let o = t[i];
            o in e && Object.defineProperty(n, o, r[o] ? r[o] : {
              get: () => e[o],
              set: () => !0,
              enumerable: !0
            })
          }
          return n
        })
      }

      function tW(e) {
        return tm(function(e, t, n = {}) {
          let r = [],
            i = [],
            o = [],
            a = 0,
            s = t.length > 1 ? [] : null;
          return tb(() => tN(o)), () => {
            let l = e() || [],
              c, u;
            return l[tt], ty(() => {
              let e = l.length,
                t, p, h, f, g, m, y, b, v;
              if (0 === e) 0 !== a && (tN(o), o = [], r = [], i = [], a = 0, s && (s = [])), n.fallback && (r = [tM], i[0] = td(e => (o[0] = e, n.fallback())), a = 1);
              else if (0 === a) {
                for (u = 0, i = Array(e); u < e; u++) r[u] = l[u], i[u] = td(d);
                a = e
              } else {
                for (h = Array(e), f = Array(e), s && (g = Array(e)), m = 0, y = Math.min(a, e); m < y && r[m] === l[m]; m++);
                for (y = a - 1, b = e - 1; y >= m && b >= m && r[y] === l[b]; y--, b--) h[b] = i[y], f[b] = o[y], s && (g[b] = s[y]);
                for (t = new Map, p = Array(b + 1), u = b; u >= m; u--) v = l[u], c = t.get(v), p[u] = void 0 === c ? -1 : c, t.set(v, u);
                for (c = m; c <= y; c++) v = r[c], void 0 !== (u = t.get(v)) && -1 !== u ? (h[u] = i[c], f[u] = o[c], s && (g[u] = s[c]), u = p[u], t.set(v, u)) : o[c]();
                for (u = m; u < e; u++) u in h ? (i[u] = h[u], o[u] = f[u], s && (s[u] = g[u], s[u](u))) : i[u] = td(d);
                i = i.slice(0, a = e), r = l.slice(0)
              }
              return i
            });

            function d(e) {
              if (o[u] = e, s) {
                let [e, n] = tp(u);
                return s[u] = n, t(l[u], e)
              }
              return t(l[u])
            }
          }
        }(() => e.each, e.children, "fallback" in e && {
          fallback: () => e.fallback
        } || void 0))
      }

      function tF(e) {
        let t = !1,
          n = e.keyed,
          r = tm(() => e.when, void 0, {
            equals: (e, n) => t ? e === n : !e == !n
          });
        return tm(() => {
          let i = r();
          if (i) {
            let r = e.children,
              o = "function" == typeof r && r.length > 0;
            return t = n || o, o ? ty(() => r(i)) : r
          }
          return e.fallback
        }, void 0, void 0)
      }

      function tG(e) {
        let t = !1,
          n = !1,
          r = tx(() => e.children),
          i = tm(() => {
            let e = r();
            Array.isArray(e) || (e = [e]);
            for (let t = 0; t < e.length; t++) {
              let r = e[t].when;
              if (r) return n = !!e[t].keyed, [t, r, e[t]]
            }
            return [-1]
          }, void 0, {
            equals: (e, n) => e[0] === n[0] && (t ? e[1] === n[1] : !e[1] == !n[1]) && e[2] === n[2]
          });
        return tm(() => {
          let [r, o, a] = i();
          if (r < 0) return e.fallback;
          let s = a.children,
            l = "function" == typeof s && s.length > 0;
          return t = n || l, l ? ty(() => s(o)) : s
        }, void 0, void 0)
      }

      function tH(e) {
        return e
      }
      let tK = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", "allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"]),
        tz = new Set(["innerHTML", "textContent", "innerText", "children"]),
        tq = Object.assign(Object.create(null), {
          className: "class",
          htmlFor: "for"
        }),
        tZ = Object.assign(Object.create(null), {
          class: "className",
          formnovalidate: "formNoValidate",
          ismap: "isMap",
          nomodule: "noModule",
          playsinline: "playsInline",
          readonly: "readOnly"
        }),
        tY = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]),
        tJ = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]),
        tQ = {
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace"
        },
        tX = "_$DX_DELEGATE";

      function t1(e, t, n) {
        if ("undefined" == typeof window) return null;
        let r = document.createElement("template");
        r.innerHTML = e;
        let i = r.content.firstChild;
        return n && (i = i.firstChild), i
      }

      function t0(e, t, n) {
        null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
      }

      function t2(e, t) {
        null == t ? e.removeAttribute("class") : e.className = t
      }

      function t5(e, t = {}, n, r) {
        let i = {};
        return r || tf(() => i.children = t9(e, t.children, i.children)), tf(() => t.ref && t.ref(e)), tf(() => (function(e, t, n, r, i = {}, o = !1) {
          for (let r in t || (t = {}), i)
            if (!(r in t)) {
              if ("children" === r) continue;
              i[r] = t4(e, r, null, i[r], n, o)
            } for (let a in t) {
            if ("children" === a) {
              r || t9(e, t.children);
              continue
            }
            let s = t[a];
            i[a] = t4(e, a, s, i[a], n, o)
          }
        })(e, t, n, !0, i, !0)), i
      }

      function t3(e, t, n) {
        return ty(() => e(t, n))
      }

      function t8(e, t, n, r) {
        if (void 0 === n || r || (r = []), "function" != typeof t) return t9(e, t, r, n);
        tf(r => t9(e, t(), r, n), r)
      }

      function t6(e, t, n) {
        let r = t.trim().split(/\s+/);
        for (let t = 0, i = r.length; t < i; t++) e.classList.toggle(r[t], n)
      }

      function t4(e, t, n, r, i, o) {
        let a, s, l;
        if ("style" === t) return function(e, t, n) {
          let r, i;
          if (!t) return n ? t0(e, "style") : t;
          let o = e.style;
          if ("string" == typeof t) return o.cssText = t;
          for (i in "string" == typeof n && (o.cssText = n = void 0), n || (n = {}), t || (t = {}), n) null == t[i] && o.removeProperty(i), delete n[i];
          for (i in t)(r = t[i]) !== n[i] && (o.setProperty(i, r), n[i] = r);
          return n
        }(e, n, r);
        if ("classList" === t) return function(e, t, n = {}) {
          let r, i;
          let o = Object.keys(t || {}),
            a = Object.keys(n);
          for (r = 0, i = a.length; r < i; r++) {
            let i = a[r];
            i && "undefined" !== i && !t[i] && (t6(e, i, !1), delete n[i])
          }
          for (r = 0, i = o.length; r < i; r++) {
            let i = o[r],
              a = !!t[i];
            i && "undefined" !== i && n[i] !== a && a && (t6(e, i, !0), n[i] = a)
          }
          return n
        }(e, n, r);
        if (n === r) return r;
        if ("ref" === t) o || n(e);
        else if ("on:" === t.slice(0, 3)) {
          let i = t.slice(3);
          r && e.removeEventListener(i, r), n && e.addEventListener(i, n)
        } else if ("oncapture:" === t.slice(0, 10)) {
          let i = t.slice(10);
          r && e.removeEventListener(i, r, !0), n && e.addEventListener(i, n, !0)
        } else if ("on" === t.slice(0, 2)) {
          let i = t.slice(2).toLowerCase(),
            o = tY.has(i);
          if (!o && r) {
            let t = Array.isArray(r) ? r[0] : r;
            e.removeEventListener(i, t)
          }(o || n) && (! function(e, t, n, r) {
            if (r) Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
            else if (Array.isArray(n)) {
              let r = n[0];
              e.addEventListener(t, n[0] = t => r.call(e, n[1], t))
            } else e.addEventListener(t, n)
          }(e, i, n, o), o && function(e, t = window.document) {
            let n = t[tX] || (t[tX] = new Set);
            for (let r = 0, i = e.length; r < i; r++) {
              let i = e[r];
              n.has(i) || (n.add(i), t.addEventListener(i, t7))
            }
          }([i]))
        } else if ((l = tz.has(t)) || !i && (tZ[t] || (s = tK.has(t))) || (a = e.nodeName.includes("-"))) "class" === t || "className" === t ? t2(e, n) : !a || s || l ? e[tZ[t] || t] = n : e[t.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase())] = n;
        else {
          let r = i && t.indexOf(":") > -1 && tQ[t.split(":")[0]];
          r ? null == n ? e.removeAttributeNS(r, t) : e.setAttributeNS(r, t, n) : t0(e, tq[t] || t, n)
        }
        return n
      }

      function t7(e) {
        let t = `$$${e.type}`,
          n = e.composedPath && e.composedPath()[0] || e.target;
        for (e.target !== n && Object.defineProperty(e, "target", {
            configurable: !0,
            value: n
          }), Object.defineProperty(e, "currentTarget", {
            configurable: !0,
            get: () => n || document
          }), e9.registry && !e9.done && (e9.done = !0, document.querySelectorAll("[id^=pl-]").forEach(t => {
            for (; t && 8 !== t.nodeType && t.nodeValue !== "pl-" + e;) {
              let e = t.nextSibling;
              t.remove(), t = e
            }
            t && t.remove()
          })); n;) {
          let r = n[t];
          if (r && !n.disabled) {
            let i = n[`${t}Data`];
            if (void 0 !== i ? r.call(n, i, e) : r.call(n, e), e.cancelBubble) return
          }
          n = n._$host || n.parentNode || n.host
        }
      }

      function t9(e, t, n, r, i) {
        for (e9.context && !n && (n = [...e.childNodes]);
          "function" == typeof n;) n = n();
        if (t === n) return n;
        let o = typeof t,
          a = void 0 !== r;
        if (e = a && n[0] && n[0].parentNode || e, "string" === o || "number" === o) {
          if (e9.context) return n;
          if ("number" === o && (t = t.toString()), a) {
            let i = n[0];
            i && 3 === i.nodeType ? i.data = t : i = document.createTextNode(t), n = nt(e, n, r, i)
          } else n = "" !== n && "string" == typeof n ? e.firstChild.data = t : e.textContent = t
        } else if (null == t || "boolean" === o) {
          if (e9.context) return n;
          n = nt(e, n, r)
        } else if ("function" === o) return tf(() => {
          let i = t();
          for (;
            "function" == typeof i;) i = i();
          n = t9(e, i, n, r)
        }), () => n;
        else if (Array.isArray(t)) {
          let o = [],
            s = n && Array.isArray(n);
          if (function e(t, n, r, i) {
              let o = !1;
              for (let a = 0, s = n.length; a < s; a++) {
                let s = n[a],
                  l = r && r[a];
                if (s instanceof Node) t.push(s);
                else if (null == s || !0 === s || !1 === s);
                else if (Array.isArray(s)) o = e(t, s, l) || o;
                else if ("function" == typeof s) {
                  if (i) {
                    for (;
                      "function" == typeof s;) s = s();
                    o = e(t, Array.isArray(s) ? s : [s], Array.isArray(l) ? l : [l]) || o
                  } else t.push(s), o = !0
                } else {
                  let e = String(s);
                  l && 3 === l.nodeType && l.data === e ? t.push(l) : t.push(document.createTextNode(e))
                }
              }
              return o
            }(o, t, n, i)) return tf(() => n = t9(e, o, n, r, !0)), () => n;
          if (e9.context) {
            if (!o.length) return n;
            for (let e = 0; e < o.length; e++)
              if (o[e].parentNode) return n = o
          }
          if (0 === o.length) {
            if (n = nt(e, n, r), a) return n
          } else s ? 0 === n.length ? ne(e, o, r) : function(e, t, n) {
            let r = n.length,
              i = t.length,
              o = r,
              a = 0,
              s = 0,
              l = t[i - 1].nextSibling,
              c = null;
            for (; a < i || s < o;) {
              if (t[a] === n[s]) {
                a++, s++;
                continue
              }
              for (; t[i - 1] === n[o - 1];) i--, o--;
              if (i === a) {
                let t = o < r ? s ? n[s - 1].nextSibling : n[o - s] : l;
                for (; s < o;) e.insertBefore(n[s++], t)
              } else if (o === s)
                for (; a < i;) c && c.has(t[a]) || t[a].remove(), a++;
              else if (t[a] === n[o - 1] && n[s] === t[i - 1]) {
                let r = t[--i].nextSibling;
                e.insertBefore(n[s++], t[a++].nextSibling), e.insertBefore(n[--o], r), t[i] = n[o]
              } else {
                if (!c) {
                  c = new Map;
                  let e = s;
                  for (; e < o;) c.set(n[e], e++)
                }
                let r = c.get(t[a]);
                if (null != r) {
                  if (s < r && r < o) {
                    let l = a,
                      u = 1,
                      d;
                    for (; ++l < i && l < o && null != (d = c.get(t[l])) && d === r + u;) u++;
                    if (u > r - s) {
                      let i = t[a];
                      for (; s < r;) e.insertBefore(n[s++], i)
                    } else e.replaceChild(n[s++], t[a++])
                  } else a++
                } else t[a++].remove()
              }
            }
          }(e, n, o) : (n && nt(e), ne(e, o));
          n = o
        } else if (t instanceof Node) {
          if (e9.context && t.parentNode) return n = a ? [t] : t;
          if (Array.isArray(n)) {
            if (a) return n = nt(e, n, r, t);
            nt(e, n, null, t)
          } else null != n && "" !== n && e.firstChild ? e.replaceChild(t, e.firstChild) : e.appendChild(t);
          n = t
        }
        return n
      }

      function ne(e, t, n = null) {
        for (let r = 0, i = t.length; r < i; r++) e.insertBefore(t[r], n)
      }

      function nt(e, t, n, r) {
        if (void 0 === n) return e.textContent = "";
        let i = r || document.createTextNode("");
        if (t.length) {
          let r = !1;
          for (let o = t.length - 1; o >= 0; o--) {
            let a = t[o];
            if (i !== a) {
              let t = a.parentNode === e;
              r || o ? t && a.remove() : t ? e.replaceChild(i, a) : e.insertBefore(i, n)
            } else r = !0
          }
        } else e.insertBefore(i, n);
        return [i]
      }

      function nn(e, t = !1) {
        return t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e)
      }

      function nr(e) {
        let {
          useShadow: t
        } = e, n = document.createTextNode(""), r = e.mount || document.body;

        function i() {
          if (!e9.context) return () => e.children;
          {
            let [t, n] = tp(!1);
            return queueMicrotask(() => n(!0)), () => t() && e.children
          }
        }
        if (r instanceof HTMLHeadElement) {
          let [e, t] = tp(!1), n = () => t(!0);
          td(t => t8(r, () => e() ? t() : i()(), null)), tb(() => {
            e9.context ? queueMicrotask(n) : n()
          })
        } else {
          let o = nn(e.isSVG ? "g" : "div", e.isSVG),
            a = t && o.attachShadow ? o.attachShadow({
              mode: "open"
            }) : o;
          Object.defineProperty(o, "_$host", {
            get: () => n.parentNode,
            configurable: !0
          }), t8(a, i()), r.appendChild(o), e.ref && e.ref(o), tb(() => r.removeChild(o))
        }
        return n
      }

      function ni(e) {
        let [t, n] = tV(e, ["component"]), r = tm(() => t.component);
        return tm(() => {
          let e = r();
          switch (typeof e) {
            case "function":
              return ty(() => e(n));
            case "string":
              let t, i;
              let o = tJ.has(e),
                a = e9.context ? e9.context && (t = e9.registry.get(i = function() {
                  let e = e9.context;
                  return `${e.id}${e.count++}`
                }())) ? (e9.completed && e9.completed.add(t), e9.registry.delete(i), t) : (void 0).cloneNode(!0) : nn(e, o);
              return t5(a, n, o), a
          }
        })
      }
      var no = ((d = no || {}).DARK = "DARK", d.LIGHT = "LIGHT", d);
      let na = {
          data: ""
        },
        ns = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
          innerHTML: " ",
          id: "_goober"
        })).firstChild : e || na,
        nl = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
        nc = /\/\*[^]*?\*\/|  +/g,
        nu = /\n+/g,
        nd = (e, t) => {
          let n = "",
            r = "",
            i = "";
          for (let o in e) {
            let a = e[o];
            "@" == o[0] ? "i" == o[1] ? n = o + " " + a + ";" : r += "f" == o[1] ? nd(a, o) : o + "{" + nd(a, "k" == o[1] ? "" : t) + "}" : "object" == typeof a ? r += nd(a, t ? t.replace(/([^,])+/g, e => o.replace(/(^:.*)|([^,])+/g, t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : o) : null != a && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), i += nd.p ? nd.p(o, a) : o + ":" + a + ";")
          }
          return n + (t && i ? t + "{" + i + "}" : i) + r
        },
        np = {},
        nh = e => {
          if ("object" == typeof e) {
            let t = "";
            for (let n in e) t += n + nh(e[n]);
            return t
          }
          return e
        },
        nf = (e, t, n, r, i) => {
          var o;
          let a = nh(e),
            s = np[a] || (np[a] = (e => {
              let t = 0,
                n = 11;
              for (; t < e.length;) n = 101 * n + e.charCodeAt(t++) >>> 0;
              return "go" + n
            })(a));
          if (!np[s]) {
            let t = a !== e ? e : (e => {
              let t, n, r = [{}];
              for (; t = nl.exec(e.replace(nc, ""));) t[4] ? r.shift() : t[3] ? (n = t[3].replace(nu, " ").trim(), r.unshift(r[0][n] = r[0][n] || {})) : r[0][t[1]] = t[2].replace(nu, " ").trim();
              return r[0]
            })(e);
            np[s] = nd(i ? {
              ["@keyframes " + s]: t
            } : t, n ? "" : "." + s)
          }
          let l = n && np.g ? np.g : null;
          return n && (np.g = np[s]), o = np[s], l ? t.data = t.data.replace(l, o) : -1 === t.data.indexOf(o) && (t.data = r ? o + t.data : t.data + o), s
        },
        ng = (e, t, n) => e.reduce((e, r, i) => {
          let o = t[i];
          if (o && o.call) {
            let e = o(n),
              t = e && e.props && e.props.className || /^go/.test(e) && e;
            o = t ? "." + t : e && "object" == typeof e ? e.props ? "" : nd(e, "") : !1 === e ? "" : e
          }
          return e + r + (null == o ? "" : o)
        }, "");

      function nm(e) {
        let t = this || {},
          n = e.call ? e(t.p) : e;
        return nf(n.unshift ? n.raw ? ng(n, [].slice.call(arguments, 1), t.p) : n.reduce((e, n) => Object.assign(e, n && n.call ? n(t.p) : n), {}) : n, ns(t.target), t.g, t.o, t.k)
      }
      nm.bind({
        g: 1
      });
      let ny = nm.bind({
          k: 1
        }),
        nb = tv();

      function nv(e) {
        return tD(nb.Provider, {
          value: e.theme,
          get children() {
            return e.children
          }
        })
      }

      function nw() {
        return tw(nb)
      }

      function nx(e) {
        let t = this || {};
        return (...n) => {
          let r = r => {
            let i;
            let o = tU(r, {
                theme: tw(nb)
              }),
              [a, s] = tV(tU(o, {
                get class() {
                  let e = o.class,
                    r = "class" in o && /^go[0-9]+/.test(e);
                  return [e, nm.apply({
                    target: t.target,
                    o: r,
                    p: o,
                    g: t.g
                  }, n)].filter(Boolean).join(" ")
                }
              }), ["as", "theme"]),
              l = a.as || e;
            return "function" == typeof l ? i = l(s) : 1 == t.g ? t5(i = document.createElement(l), s) : i = ni(tU({
              component: l
            }, s)), i
          };
          return r.class = e => ty(() => nm.apply({
            target: t.target,
            p: e,
            g: t.g
          }, n)), r
        }
      }
      let nk = new Proxy(nx, {
        get: (e, t) => e(t)
      });

      function nC() {
        let e = nx.call({
          g: 1
        }, "div").apply(null, arguments);
        return function(t) {
          return e(t), null
        }
      }
      let nS = "tc-root",
        nE = "tc-disable-scroll",
        nO = "tc-using-mouse",
        n_ = () => (document.body.addEventListener("mousedown", () => document.body.classList.add(nO)), document.body.addEventListener("keydown", e => {
          "Tab" === e.key && document.body.classList.remove(nO)
        }), tD(nC`
    ${nS} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${nS} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${nS} *:focus {
        outline: #08f auto 2px;
    }
    
    ${nS} li {
        list-style: none;
    }
    
    ${nS} button {
        outline: none;
    }
    
    body.${nE} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${nO} ${nS} *:focus {
        outline: none;
    }
`, {}));

      function nT(e, t) {
        return "#" === e[0] && (e = function(e) {
          "#" === e[0] && (e = e.slice(1));
          let t = parseInt(e, 16);
          return [t >> 16 & 255, t >> 8 & 255, 255 & t].join(",")
        }(e)), `rgba(${e}, ${t})`
      }

      function nA(e) {
        return e.toString() + "px"
      }
      let nP = class {
        constructor() {
          e4(this, "storage", {})
        }
        static getInstance() {
          return nP.instance || (nP.instance = new nP), nP.instance
        }
        get length() {
          return Object.keys(this.storage).length
        }
        clear() {
          this.storage = {}
        }
        getItem(e) {
          var t;
          return null != (t = this.storage[e]) ? t : null
        }
        key(e) {
          var t;
          let n = Object.keys(this.storage);
          return e < 0 || e >= n.length ? null : null != (t = n[e]) ? t : null
        }
        removeItem(e) {
          delete this.storage[e]
        }
        setItem(e, t) {
          this.storage[e] = t
        }
      };
      e4(nP, "instance");
      class nR extends I {
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, nR.prototype)
        }
      }

      function nj(...e) {
        try {
          console.debug("[TON_CONNECT_UI]", ...e)
        } catch (e) {}
      }

      function nL(e, t = "_self") {
        nj("openLink", e, t), window.open(e, t, "noopener noreferrer")
      }

      function nM(e) {
        nL(e, "_blank")
      }

      function nN(e, t) {
        let n = () => {
            nV("safari") || nU("android") && nV("firefox") || t()
          },
          r = setTimeout(() => n(), 200);
        window.addEventListener("blur", () => clearTimeout(r), {
          once: !0
        }), nL(e, "_self")
      }

      function nD(e) {
        return e7(this, null, function*() {
          yield new Promise(e => requestAnimationFrame(e)), e()
        })
      }

      function nI() {
        if ("undefined" != typeof window) return window
      }

      function n$() {
        if (function() {
            try {
              return "undefined" != typeof localStorage
            } catch (e) {
              return !1
            }
          }()) return localStorage;
        if (void 0 !== eJ && null != eJ.versions && null != eJ.versions.node) throw new nR("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
        return nP.getInstance()
      }

      function nB() {
        var e, t, n;
        let r, i;
        let o = new eq().getResult(),
          a = null == (e = o.os.name) ? void 0 : e.toLowerCase(),
          s = null == (t = o.device.model) ? void 0 : t.toLowerCase();
        switch (!0) {
          case "ipad" === s:
            r = "ipad";
            break;
          case "ios" === a:
            r = "ios";
            break;
          case "android" === a:
            r = "android";
            break;
          case "mac os" === a:
            r = "macos";
            break;
          case "linux" === a:
            r = "linux";
            break;
          case null == a ? void 0:
            a.includes("windows"): r = "windows"
        }
        let l = null == (n = o.browser.name) ? void 0 : n.toLowerCase();
        switch (!0) {
          case "chrome" === l:
            i = "chrome";
            break;
          case "firefox" === l:
            i = "firefox";
            break;
          case null == l ? void 0:
            l.includes("safari"): i = "safari";
            break;
          case null == l ? void 0:
            l.includes("opera"): i = "opera"
        }
        return {
          os: r,
          browser: i
        }
      }

      function nU(...e) {
        return e.includes(nB().os)
      }

      function nV(...e) {
        return e.includes(nB().browser)
      }

      function nW(e, t) {
        return t + new URL(e).search
      }
      class nF {
        constructor() {
          e4(this, "localStorage"), e4(this, "storageKey", "ton-connect-ui_wallet-info"), this.localStorage = n$()
        }
        setWalletInfo(e) {
          this.localStorage.setItem(this.storageKey, JSON.stringify(e))
        }
        getWalletInfo() {
          let e = this.localStorage.getItem(this.storageKey);
          return e ? JSON.parse(e) : null
        }
        removeWalletInfo() {
          this.localStorage.removeItem(this.storageKey)
        }
      }
      class nG {
        constructor() {
          e4(this, "localStorage"), e4(this, "storageKey", "ton-connect-ui_preferred-wallet"), this.localStorage = n$()
        }
        setPreferredWalletAppName(e) {
          this.localStorage.setItem(this.storageKey, e)
        }
        getPreferredWalletAppName() {
          return this.localStorage.getItem(this.storageKey) || void 0
        }
      }
      class nH {
        constructor() {
          e4(this, "localStorage"), e4(this, "storageKey", "ton-connect-ui_last-selected-wallet-info"), this.localStorage = n$()
        }
        setLastSelectedWalletInfo(e) {
          this.localStorage.setItem(this.storageKey, JSON.stringify(e))
        }
        getLastSelectedWalletInfo() {
          let e = this.localStorage.getItem(this.storageKey);
          return e ? JSON.parse(e) : null
        }
        removeLastSelectedWalletInfo() {
          this.localStorage.removeItem(this.storageKey)
        }
      }
      let [nK, nz] = tp({
        status: "closed",
        closeReason: null
      }), nq = tm(() => "opened" === nK().status), [nZ, nY] = tp({
        status: "closed",
        closeReason: null
      }), nJ = tm(() => "opened" === nZ().status), nQ = tm(() => {
        let e = nZ();
        return "opened" === e.status ? e.walletInfo : null
      }), nX = "undefined" != typeof window ? new nH : void 0, [n1, n0] = tp((null == nX ? void 0 : nX.getLastSelectedWalletInfo()) || null), n2 = e => {
        nX || (nX = new nH), e ? nX.setLastSelectedWalletInfo(e) : nX.removeLastSelectedWalletInfo(), n0(e)
      }, [n5, n3] = tp(null), n8 = {
        en: n6({
          common: {
            close: "Close",
            openWallet: "Open wallet",
            copyLink: "Copy Link",
            linkCopied: "Link Copied",
            copied: "Copied",
            yourWallet: "Your Wallet",
            retry: "Retry",
            get: "GET",
            mobile: "Mobile",
            browserExtension: "Browser Extension",
            desktop: "Desktop"
          },
          button: {
            connectWallet: "Connect Wallet",
            dropdown: {
              copy: "Copy address",
              copied: "Address copied!",
              disconnect: "Disconnect"
            }
          },
          notifications: {
            confirm: {
              header: "Open {{ name }} to\xa0confirm the\xa0transaction."
            },
            transactionSent: {
              header: "Transaction sent",
              text: "Your transaction\xa0will be\xa0processed in\xa0a\xa0few seconds."
            },
            transactionCanceled: {
              header: "Transaction canceled",
              text: "There will be no changes to\xa0your account."
            }
          },
          walletItem: {
            walletOn: "Wallet On",
            recent: "Recent",
            installed: "Installed",
            popular: "Popular"
          },
          walletModal: {
            loading: "Loading wallets",
            wallets: "Wallets",
            mobileUniversalModal: {
              connectYourWallet: "Connect your wallet",
              openWalletOnTelegramOrSelect: "Open Wallet in Telegram or select your wallet to connect",
              openWalletOnTelegram: "Open Wallet in Telegram",
              openLink: "Open Link",
              scan: "Scan with your mobile wallet"
            },
            desktopUniversalModal: {
              connectYourWallet: "Connect your wallet",
              scan: "Scan with your mobile wallet",
              availableWallets: "Available wallets"
            },
            mobileConnectionModal: {
              showQR: "Show QR Code",
              scanQR: "Scan the\xa0QR code below with your phone’s\xa0or\xa0{{ name }}’s camera",
              continueIn: "Continue in {{ name }}…",
              connectionDeclined: "Connection declined"
            },
            desktopConnectionModal: {
              scanQR: "Scan the\xa0QR code below with your phone’s\xa0or\xa0{{ name }}’s camera",
              continueInExtension: "Continue in\xa0{{ name }} browser extension…",
              dontHaveExtension: "Seems you don't have installed {{ name }}\xa0browser\xa0extension",
              getWallet: "Get {{ name }}",
              continueOnDesktop: "Continue in\xa0{{ name }} on desktop…",
              openWalletOnTelegram: "Open Wallet in Telegram on desktop",
              connectionDeclined: "Connection declined"
            },
            infoModal: {
              whatIsAWallet: "What is a wallet",
              secureDigitalAssets: "Secure digital assets storage",
              walletProtects: "A wallet protects and manages your digital assets\xa0including TON, tokens and collectables.",
              controlIdentity: "Control your Web3 identity",
              manageIdentity: "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in\xa0the\xa0blockchain ecosystem.",
              effortlessCryptoTransactions: "Effortless crypto transactions",
              easilySend: "Easily send, receive, monitor your cryptocurrencies.\xa0Streamline your operations with\xa0decentralized applications.",
              getAWallet: "Get a Wallet"
            }
          },
          actionModal: {
            confirmTransaction: {
              header: "Confirm the\xa0transaction in\xa0{{ name }}",
              text: "It will only take a\xa0moment."
            },
            transactionSent: "$notifications.transactionSent",
            transactionCanceled: "$notifications.transactionCanceled"
          }
        }),
        ru: n6({
          common: {
            close: "Закрыть",
            openWallet: "Открыть кошелёк",
            copyLink: "Копировать ссылку",
            linkCopied: "Ссылка скопирована",
            copied: "Ссылка скопирована",
            yourWallet: "Ваш кошелёк",
            retry: "Повторить",
            get: "Скачать",
            mobile: "Мобильный",
            browserExtension: "Расширение",
            desktop: "Десктоп"
          },
          button: {
            connectWallet: "Подключить кошелёк",
            dropdown: {
              copy: "Скопировать адрес",
              copied: "Адрес скопирован!",
              disconnect: "Отключить кошелёк"
            }
          },
          notifications: {
            confirm: {
              header: "Откройте {{ name }}, чтобы\xa0подтвердить транзакцию."
            },
            transactionSent: {
              header: "Транзакция отправлена",
              text: "Ваша транзакция\xa0будет обработана через\xa0несколько секунд."
            },
            transactionCanceled: {
              header: "Транзакция отменена",
              text: "Состояние вашего счёта не\xa0изменится."
            }
          },
          walletItem: {
            walletOn: "Wallet в",
            recent: "Недавний",
            installed: "Установлен",
            popular: "Популярен"
          },
          walletModal: {
            loading: "Кошельки загружаются",
            wallets: "Кошельки",
            mobileUniversalModal: {
              connectYourWallet: "Подключите кошелёк",
              openWalletOnTelegramOrSelect: "Подключите Wallet в\xa0Telegram или\xa0выберете кошелёк для\xa0подключения",
              openWalletOnTelegram: "Открыть Wallet в Telegram",
              openLink: "Открыть ссылку",
              scan: "Отсканируйте камерой вашего\xa0телефона"
            },
            desktopUniversalModal: {
              connectYourWallet: "Подключите кошелёк",
              scan: "Отсканируйте QR-код камерой вашего\xa0телефона",
              availableWallets: "Доступные кошельки"
            },
            mobileConnectionModal: {
              showQR: "Показать QR-код",
              scanQR: "Отсканируйте QR-код ниже камерой в\xa0приложении {{ name }}, или\xa0камерой телефона",
              continueIn: "Продолжите в {{ name }}…",
              connectionDeclined: "Подключение отклонено"
            },
            desktopConnectionModal: {
              scanQR: "Отсканируйте QR-код ниже камерой в\xa0приложении {{ name }}, или\xa0камерой телефона",
              continueInExtension: "Откройте браузерное расширение {{ name }}",
              dontHaveExtension: "Похоже, у вас не\xa0установлено браузерное\xa0расширение\xa0{{ name }}",
              getWallet: "Скачать {{ name }}",
              continueOnDesktop: "Откройте {{ name }} на\xa0компьютере…",
              openWalletOnTelegram: "Открыть Wallet в\xa0Telegram",
              connectionDeclined: "Подключение отклонено"
            },
            infoModal: {
              whatIsAWallet: "Что такое кошелёк?",
              secureDigitalAssets: "Надежное хранилище цифровых активов",
              walletProtects: "Кошелёк защищает ваши цифровые активы, включая TON, токены и\xa0предметы коллекционирования, и\xa0управляет ими.",
              controlIdentity: "Контроль своей личности Web3",
              manageIdentity: "Управляйте своей цифровой идентификацией и\xa0с\xa0легкостью получайте доступ к\xa0децентрализованным приложениям. Сохраняйте контроль над\xa0своими данными и\xa0безопасно участвуйте в\xa0экосистеме\xa0блокчейна.",
              effortlessCryptoTransactions: "Простые криптотранзакции",
              easilySend: "Легко отправляйте, получайте и\xa0отслеживайте свои криптовалюты. Оптимизируйте свои операции с\xa0помощью децентрализованных приложений.",
              getAWallet: "Скачать кошелёк"
            }
          },
          actionModal: {
            confirmTransaction: {
              header: "Подтвердите действие в\xa0{{ name }}",
              text: "Это займет пару секунд."
            },
            transactionSent: "$notifications.transactionSent",
            transactionCanceled: "$notifications.transactionCanceled"
          }
        })
      };

      function n6(e) {
        let t = n => {
          Object.entries(n).forEach(([r, i]) => {
            if ("object" == typeof i && i) return t(i);
            if ("string" == typeof i) {
              if ("$" === i[0]) {
                let t = i.slice(1).split("."),
                  o = e;
                t.forEach(e => {
                  if (e in o) o = o[e];
                  else throw Error(`Cannot parse translations: there is no property ${e} in translation`)
                }), n[r] = o
              }
              "\\\\$" === i.slice(0, 2) && (n[r] = i.slice(1))
            }
          })
        };
        return t(e), e
      }
      let n4 = tv(),
        n7 = Symbol("store-raw"),
        n9 = Symbol("store-node"),
        re = Symbol("store-name");

      function rt(e, t) {
        let n = e[te];
        if (!n && (Object.defineProperty(e, te, {
            value: n = new Proxy(e, rl)
          }), !Array.isArray(e))) {
          let t = Object.keys(e),
            r = Object.getOwnPropertyDescriptors(e);
          for (let i = 0, o = t.length; i < o; i++) {
            let o = t[i];
            r[o].get && Object.defineProperty(e, o, {
              enumerable: r[o].enumerable,
              get: r[o].get.bind(n)
            })
          }
        }
        return n
      }

      function rn(e) {
        let t;
        return null != e && "object" == typeof e && (e[te] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e))
      }

      function rr(e, t = new Set) {
        let n, r, i, o;
        if (n = null != e && e[n7]) return n;
        if (!rn(e) || t.has(e)) return e;
        if (Array.isArray(e)) {
          Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
          for (let n = 0, o = e.length; n < o; n++)(r = rr(i = e[n], t)) !== i && (e[n] = r)
        } else {
          Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
          let n = Object.keys(e),
            a = Object.getOwnPropertyDescriptors(e);
          for (let s = 0, l = n.length; s < l; s++) a[o = n[s]].get || (r = rr(i = e[o], t)) === i || (e[o] = r)
        }
        return e
      }

      function ri(e) {
        let t = e[n9];
        return t || Object.defineProperty(e, n9, {
          value: t = {}
        }), t
      }

      function ro(e, t, n) {
        return e[t] || (e[t] = rs(n))
      }

      function ra(e) {
        if (ts) {
          let t = ri(e);
          (t._ || (t._ = rs()))()
        }
      }

      function rs(e) {
        let [t, n] = tp(e, {
          equals: !1,
          internal: !0
        });
        return t.$ = n, t
      }
      let rl = {
        get(e, t, n) {
          if (t === n7) return e;
          if (t === te) return n;
          if (t === tt) return ra(e), n;
          let r = ri(e),
            i = r.hasOwnProperty(t),
            o = i ? r[t]() : e[t];
          if (t === n9 || "__proto__" === t) return o;
          if (!i) {
            let n = Object.getOwnPropertyDescriptor(e, t);
            ts && ("function" != typeof o || e.hasOwnProperty(t)) && !(n && n.get) && (o = ro(r, t, o)())
          }
          return rn(o) ? rt(o) : o
        },
        has(e, t) {
          return t === n7 || t === te || t === tt || t === n9 || "__proto__" === t || (this.get(e, t, e), t in e)
        },
        set: () => !0,
        deleteProperty: () => !0,
        ownKeys: function(e) {
          return ra(e), Reflect.ownKeys(e)
        },
        getOwnPropertyDescriptor: function(e, t) {
          let n = Reflect.getOwnPropertyDescriptor(e, t);
          return n && !n.get && n.configurable && t !== te && t !== n9 && t !== re && (delete n.value, delete n.writable, n.get = () => e[te][t]), n
        }
      };

      function rc(e, t, n, r = !1) {
        if (!r && e[t] === n) return;
        let i = e[t],
          o = e.length;
        void 0 === n ? delete e[t] : e[t] = n;
        let a = ri(e),
          s;
        (s = ro(a, t, i)) && s.$(() => n), Array.isArray(e) && e.length !== o && (s = ro(a, "length", o)) && s.$(e.length), (s = a._) && s.$()
      }

      function ru(e, t) {
        let n = Object.keys(t);
        for (let r = 0; r < n.length; r += 1) {
          let i = n[r];
          rc(e, i, t[i])
        }
      }

      function rd(...[e, t]) {
        let n = rr(e || {}),
          r = Array.isArray(n);
        return [rt(n), function(...e) {
          t_(() => {
            r && 1 === e.length ? function(e, t) {
              if ("function" == typeof t && (t = t(e)), Array.isArray(t = rr(t))) {
                if (e === t) return;
                let n = 0,
                  r = t.length;
                for (; n < r; n++) {
                  let r = t[n];
                  e[n] !== r && rc(e, n, r)
                }
                rc(e, "length", r)
              } else ru(e, t)
            }(n, e[0]) : function e(t, n, r = []) {
              let i, o = t;
              if (n.length > 1) {
                let a = typeof(i = n.shift()),
                  s = Array.isArray(t);
                if (Array.isArray(i)) {
                  for (let o = 0; o < i.length; o++) e(t, [i[o]].concat(n), r);
                  return
                }
                if (s && "function" === a) {
                  for (let o = 0; o < t.length; o++) i(t[o], o) && e(t, [o].concat(n), r);
                  return
                }
                if (s && "object" === a) {
                  let {
                    from: o = 0,
                    to: a = t.length - 1,
                    by: s = 1
                  } = i;
                  for (let i = o; i <= a; i += s) e(t, [i].concat(n), r);
                  return
                }
                if (n.length > 1) {
                  e(t[i], n, [i].concat(r));
                  return
                }
                o = t[i], r = [i].concat(r)
              }
              let a = n[0];
              ("function" != typeof a || (a = a(o, r)) !== o) && (void 0 !== i || void 0 != a) && (a = rr(a), void 0 === i || rn(o) && rn(a) && !Array.isArray(a) ? ru(o, a) : rc(t, i, a))
            }(n, e)
          }, !1)
        }]
      }
      let rp = {
        constant: {
          black: "#000000",
          white: "#FFFFFF"
        },
        connectButton: {
          background: "#0098EA",
          foreground: "#FFFFFF"
        },
        accent: "#0098EA",
        telegramButton: "#0098EA",
        icon: {
          primary: "#0F0F0F",
          secondary: "#7A8999",
          tertiary: "#C1CAD2",
          success: "#29CC6A",
          error: "#F5A73B"
        },
        background: {
          primary: "#FFFFFF",
          secondary: "#F1F3F5",
          segment: "#FFFFFF",
          tint: "#F1F3F5",
          qr: "#F1F3F5"
        },
        text: {
          primary: "#0F0F0F",
          secondary: "#6A7785"
        }
      };
      /*!
       * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */
      function rh(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function rf(e) {
        var t, n;
        return !1 !== rh(e) && (void 0 === (t = e.constructor) || !1 !== rh(n = t.prototype) && !1 !== n.hasOwnProperty("isPrototypeOf"))
      }

      function rg(e, t) {
        return e ? eZ(t, e, {
          arrayMerge: (e, t, n) => t,
          isMergeableObject: rf
        }) : t
      }
      let [rm, ry] = rd({
        theme: no.LIGHT,
        colors: rp,
        borderRadius: "m"
      }), rb = {
        [no.LIGHT]: rp,
        [no.DARK]: {
          constant: {
            black: "#000000",
            white: "#FFFFFF"
          },
          connectButton: {
            background: "#0098EA",
            foreground: "#FFFFFF"
          },
          accent: "#E5E5EA",
          telegramButton: "#31A6F5",
          icon: {
            primary: "#E5E5EA",
            secondary: "#909099",
            tertiary: "#434347",
            success: "#29CC6A",
            error: "#F5A73B"
          },
          background: {
            primary: "#121214",
            secondary: "#18181A",
            segment: "#262629",
            tint: "#222224",
            qr: "#FFFFFF"
          },
          text: {
            primary: "#E5E5EA",
            secondary: "#7D7D85"
          }
        }
      }, rv = {
        [no.LIGHT]: void 0,
        [no.DARK]: void 0
      };

      function rw(e, t) {
        t && (rv[no.DARK] = rg(t[no.DARK], rv[no.DARK]), rv[no.LIGHT] = rg(t[no.LIGHT], rv[no.LIGHT])), ry({
          theme: e,
          colors: rg(rv[e], rb[e])
        })
      }
      let rx = nk.div`
    background-color: ${e=>e.theme.colors.background.secondary};
`,
        rk = e => {
          let t;
          let [n, r] = tp(null);
          return tg(() => {
            let t = new window.Image;
            return (t.src = e.src, t.alt = e.alt || "", t.setAttribute("draggable", "false"), e.class && t.classList.add(e.class), t.complete) ? r(t) : (t.addEventListener("load", () => r(t)), () => t.removeEventListener("load", () => r(t)))
          }), [tD(tF, {
            get when() {
              return n()
            },
            get children() {
              return n()
            }
          }), tD(tF, {
            get when() {
              return !n()
            },
            get children() {
              return tD(rx, {
                get class() {
                  return e.class
                },
                ref(e) {
                  let n = t;
                  "function" == typeof n ? n(e) : t = e
                }
              })
            }
          })]
        },
        rC = {};
      try {
        let e = location.hash.toString();
        rC = function(e) {
          e = e.replace(/^#/, "");
          let t = {};
          if (!e.length) return t;
          if (0 > e.indexOf("=") && 0 > e.indexOf("?")) return t._path = rL(e), t;
          let n = e.indexOf("?");
          if (n >= 0) {
            let r = e.substr(0, n);
            t._path = rL(r), e = e.substr(n + 1)
          }
          let r = function(e) {
            let t, n, r, i, o = {};
            if (!e.length) return o;
            let a = e.split("&");
            for (t = 0; t < a.length; t++) r = rL((n = a[t].split("="))[0]), i = null == n[1] ? null : rL(n[1]), o[r] = i;
            return o
          }(e);
          for (let e in r) t[e] = r[e];
          return t
        }(e)
      } catch (e) {}
      let rS = "unknown";
      if ((null == rC ? void 0 : rC.tgWebAppPlatform) && (rS = null != (v = rC.tgWebAppPlatform) ? v : "unknown"), "unknown" === rS) {
        let e = nI();
        rS = null != (k = null == (x = null == (w = null == e ? void 0 : e.Telegram) ? void 0 : w.WebApp) ? void 0 : x.platform) ? k : "unknown"
      }
      let rE = "6.0";
      if ((null == rC ? void 0 : rC.tgWebAppVersion) && (rE = rC.tgWebAppVersion), !rE) {
        let e = nI();
        rE = null != (E = null == (S = null == (C = null == e ? void 0 : e.Telegram) ? void 0 : C.WebApp) ? void 0 : S.version) ? E : "6.0"
      }

      function rO(...e) {
        return e.includes(rS)
      }

      function r_() {
        var e;
        return "unknown" !== rS || !!(null == (e = nI()) ? void 0 : e.TelegramWebviewProxy)
      }

      function rT() {
        var e;
        let t = !!(null == (e = nI()) ? void 0 : e.TelegramWebview);
        return (r_() || t) && "unknown" === rS
      }

      function rA() {
        rj("web_app_expand", {})
      }

      function rP(e, t) {
        let n = new URL(e);
        if ("http:" !== n.protocol && "https:" !== n.protocol) {
          if (t) return t();
          throw new nR(`Url protocol is not supported: ${n}`)
        }
        if ("t.me" !== n.hostname) {
          if (t) return t();
          throw new nR(`Url host is not supported: ${n}`)
        }
        let r = n.pathname + n.search;
        rR() || function(e, t) {
          let n, r, i, o;
          "string" != typeof e && (e = ""), "string" != typeof t && (t = "");
          let a = e.replace(/^\s+|\s+$/g, "").split("."),
            s = t.replace(/^\s+|\s+$/g, "").split(".");
          for (r = 0, n = Math.max(a.length, s.length); r < n; r++)
            if ((i = parseInt(a[r]) || 0) !== (o = parseInt(s[r]) || 0)) {
              if (i > o) return 1;
              return -1
            } return 0
        }(rE, "6.1") >= 0 ? rj("web_app_open_tg_link", {
          path_full: r
        }) : nM("https://t.me" + r)
      }

      function rR() {
        try {
          let e = nI();
          if (!e) return !1;
          return null != e.parent && e !== e.parent
        } catch (e) {
          return !1
        }
      }

      function rj(e, t) {
        try {
          let n = nI();
          if (!n) throw new nR("Can't post event to parent window: window is not defined");
          if (void 0 !== n.TelegramWebviewProxy) nj("postEvent", e, t), n.TelegramWebviewProxy.postEvent(e, JSON.stringify(t));
          else if (n.external && "notify" in n.external) nj("postEvent", e, t), n.external.notify(JSON.stringify({
            eventType: e,
            eventData: t
          }));
          else if (rR()) {
            let r = JSON.stringify({
              eventType: e,
              eventData: t
            });
            nj("postEvent", e, t), n.parent.postMessage(r, "*")
          } else throw new nR("Can't post event to TMA")
        } catch (e) {
          ! function(...e) {
            try {
              console.error("[TON_CONNECT_UI]", ...e)
            } catch (e) {}
          }(`Can't post event to parent window: ${e}`)
        }
      }

      function rL(e) {
        try {
          return e = e.replace(/\+/g, "%20"), decodeURIComponent(e)
        } catch (t) {
          return e
        }
      }
      let rM = {
        mobile: 440,
        tablet: 1020
      };

      function rN(e) {
        let t = nI();
        if (!t) return "desktop" === e;
        if (rO("weba")) return !0;
        let n = t.innerWidth;
        switch (e) {
          case "desktop":
            return n > rM.tablet;
          case "tablet":
            return n > rM.mobile;
          default:
            return n <= rM.mobile || nU("ios", "android", "ipad")
        }
      }

      function rD(e) {
        switch (e) {
          case "mobile":
            return `@media (max-width: ${rM.mobile}px)`;
          case "tablet":
            return `@media (max-width: ${rM.tablet}px) (min-width: ${rM.mobile}px)`;
          default:
            return `@media (min-width: ${rM.tablet}px)`
        }
      }
      let rI = "@media (hover: none)",
        r$ = "@media not all and (hover: none)",
        rB = {
          m: "100vh",
          s: "8px",
          none: "0"
        },
        rU = {
          s: .02,
          m: .04
        },
        rV = nk.button`
    display: ${e=>e.leftIcon||e.rightIcon?"flex":"inline-block"};
    gap: ${e=>e.leftIcon||e.rightIcon?"6px":"unset"};
    align-items: ${e=>e.leftIcon||e.rightIcon?"center":"unset"};
    justify-content: ${e=>e.leftIcon||e.rightIcon?"space-between":"unset"};
    background-color: ${e=>"flat"===e.appearance?"transparent":"secondary"===e.appearance?e.theme.colors.background.tint:nT(e.theme.colors.accent,.12)};
    color: ${e=>"secondary"===e.appearance?e.theme.colors.text.primary:e.theme.colors.accent};

    padding: ${e=>"flat"===e.appearance?"0":"9px 16px"};
    padding-left: ${e=>e.leftIcon&&"flat"!==e.appearance?"12px":"16px"};
    padding-right: ${e=>e.rightIcon&&"flat"!==e.appearance?"12px":"16px"};
    border: none;
    border-radius: ${e=>rB[e.theme.borderRadius]};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    font-size: 14px;
    font-weight: 510;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${r$} {
        &:hover {
            transform: ${e=>e.disabled?"unset":`scale(${1+rU[e.scale]})`};
        }
    }

    &:active {
        transform: ${e=>e.disabled?"unset":`scale(${1-rU[e.scale]})`};
    }

    ${rI} {
        &:active {
            transform: ${e=>e.disabled?"unset":`scale(${1-2*rU[e.scale]})`};
        }
    }
`;

      function rW(e) {
        let t = ty(() => Object.keys(e).filter(e => e.startsWith("data-"))),
          [n] = tV(e, t);
        return n
      }
      let rF = e => {
        let t = rW(e);
        return tD(rV, tU({
          get appearance() {
            return e.appearance || "primary"
          },
          get class() {
            return e.class
          },
          onClick: t => {
            var n;
            return null == (n = e.onClick) ? void 0 : n.call(e, t)
          },
          onMouseEnter: t => {
            var n;
            return null == (n = e.onMouseEnter) ? void 0 : n.call(e, t)
          },
          onMouseLeave: t => {
            var n;
            return null == (n = e.onMouseLeave) ? void 0 : n.call(e, t)
          },
          ref(t) {
            let n = e.ref;
            "function" == typeof n ? n(t) : e.ref = t
          },
          get disabled() {
            return e.disabled
          },
          get scale() {
            return e.scale || "m"
          },
          get leftIcon() {
            return !!e.leftIcon
          },
          get rightIcon() {
            return !!e.rightIcon
          },
          "data-tc-button": "true"
        }, t, {
          get children() {
            return [tm(() => e.leftIcon), tm(() => e.children), tm(() => e.rightIcon)]
          }
        }))
      };

      function rG(e) {
        requestAnimationFrame(() => {
          requestAnimationFrame(e)
        })
      }
      let rH = e => {
        let t;
        let n = !0,
          [r, i] = tp(),
          [o, a] = tp(),
          s = tx(() => e.children),
          {
            onBeforeEnter: l,
            onEnter: c,
            onAfterEnter: u,
            onBeforeExit: d,
            onExit: p,
            onAfterExit: h
          } = e,
          f = tm(() => {
            let t = e.name || "s";
            return {
              enterActiveClass: e.enterActiveClass || t + "-enter-active",
              enterClass: e.enterClass || t + "-enter",
              enterToClass: e.enterToClass || t + "-enter-to",
              exitActiveClass: e.exitActiveClass || t + "-exit-active",
              exitClass: e.exitClass || t + "-exit",
              exitToClass: e.exitToClass || t + "-exit-to"
            }
          });

        function g(t, s) {
          if (!n || e.appear) {
            let n = function(l) {
                t && (!l || l.target === t) && (t.removeEventListener("transitionend", n), t.removeEventListener("animationend", n), t.classList.remove(...p), t.classList.remove(...h), t_(() => {
                  r() !== t && i(t), o() === t && a(void 0)
                }, !1), u && u(t), "inout" === e.mode && m(t, s))
              },
              d = f().enterClass.split(" "),
              p = f().enterActiveClass.split(" "),
              h = f().enterToClass.split(" ");
            l && l(t), t.classList.add(...d), t.classList.add(...p), rG(() => {
              t.classList.remove(...d), t.classList.add(...h), c && c(t, () => n()), (!c || c.length < 2) && (t.addEventListener("transitionend", n), t.addEventListener("animationend", n))
            })
          }
          s && !e.mode ? a(t) : i(t)
        }

        function m(t, n) {
          let o = f().exitClass.split(" "),
            a = f().exitActiveClass.split(" "),
            s = f().exitToClass.split(" ");
          if (!n.parentNode) return l();

          function l(o) {
            o && o.target !== n || (n.removeEventListener("transitionend", l), n.removeEventListener("animationend", l), n.classList.remove(...a), n.classList.remove(...s), r() === n && i(void 0), h && h(n), "outin" === e.mode && g(t, n))
          }
          d && d(n), n.classList.add(...o), n.classList.add(...a), rG(() => {
            n.classList.remove(...o), n.classList.add(...s)
          }), p && p(n, () => l()), (!p || p.length < 2) && (n.addEventListener("transitionend", l), n.addEventListener("animationend", l))
        }
        return th(r => {
          for (t = s();
            "function" == typeof t;) t = t();
          return ty(() => (t && t !== r && ("outin" !== e.mode ? g(t, r) : n && i(t)), r && r !== t && "inout" !== e.mode && m(t, r), n = !1, t))
        }), [r, o]
      };

      function rK(e) {
        let {
          top: t,
          bottom: n,
          left: r,
          right: i,
          width: o,
          height: a
        } = e.getBoundingClientRect(), s = e.parentNode.getBoundingClientRect();
        return {
          top: t - s.top,
          bottom: n,
          left: r - s.left,
          right: i,
          width: o,
          height: a
        }
      }
      let rz = e => {
          let t = tx(() => e.children),
            n = tm(() => {
              let t = e.name || "s";
              return {
                enterActiveClass: e.enterActiveClass || t + "-enter-active",
                enterClass: e.enterClass || t + "-enter",
                enterToClass: e.enterToClass || t + "-enter-to",
                exitActiveClass: e.exitActiveClass || t + "-exit-active",
                exitClass: e.exitClass || t + "-exit",
                exitToClass: e.exitToClass || t + "-exit-to",
                moveClass: e.moveClass || t + "-move"
              }
            }),
            {
              onBeforeEnter: r,
              onEnter: i,
              onAfterEnter: o,
              onBeforeExit: a,
              onExit: s,
              onAfterExit: l
            } = e,
            [c, u] = tp(),
            d = [],
            p = !0;
          return th(() => {
            let e = t(),
              c = [...e],
              h = new Set(e),
              f = new Set(d),
              g = n().enterClass.split(" "),
              m = n().enterActiveClass.split(" "),
              y = n().enterToClass.split(" "),
              b = n().exitClass.split(" "),
              v = n().exitActiveClass.split(" "),
              w = n().exitToClass.split(" ");
            for (let t = 0; t < e.length; t++) {
              let n = e[t];
              if (!p && !f.has(n)) {
                let e = function(t) {
                  n && (!t || t.target === n) && (n.removeEventListener("transitionend", e), n.removeEventListener("animationend", e), n.classList.remove(...m), n.classList.remove(...y), o && o(n))
                };
                r && r(n), n.classList.add(...g), n.classList.add(...m), rG(() => {
                  n.classList.remove(...g), n.classList.add(...y), i && i(n, () => e()), (!i || i.length < 2) && (n.addEventListener("transitionend", e), n.addEventListener("animationend", e))
                })
              }
            }
            for (let e = 0; e < d.length; e++) {
              let t = d[e];
              if (!h.has(t) && t.parentNode) {
                let n = function(e) {
                  e && e.target !== t || (t.removeEventListener("transitionend", n), t.removeEventListener("animationend", n), t.classList.remove(...v), t.classList.remove(...w), l && l(t), u(d = d.filter(e => e !== t)))
                };
                c.splice(e, 0, t), a && a(t), t.classList.add(...b), t.classList.add(...v), rG(() => {
                  t.classList.remove(...b), t.classList.add(...w)
                }), s && s(t, () => n()), (!s || s.length < 2) && (t.addEventListener("transitionend", n), t.addEventListener("animationend", n))
              }
            }
            d = c, u(c)
          }), tg(e => {
            let t = c();
            return (t.forEach(t => {
              let n;
              (n = e.get(t)) ? n.new && (n.new = !1, n.newPos = rK(t)): e.set(t, n = {
                pos: rK(t),
                new: !p
              }), n.new && t.addEventListener("transitionend", () => {
                n.new = !1, t.parentNode && (n.newPos = rK(t))
              }, {
                once: !0
              }), n.newPos && (n.pos = n.newPos), n.newPos = rK(t)
            }), p) ? p = !1 : (t.forEach(t => {
              let n = e.get(t),
                r = n.pos,
                i = n.newPos,
                o = r.left - i.left,
                a = r.top - i.top;
              if (o || a) {
                n.moved = !0;
                let e = t.style;
                e.transform = `translate(${o}px,${a}px)`, e.transitionDuration = "0s"
              }
            }), document.body.offsetHeight, t.forEach(t => {
              let r = e.get(t);
              if (r.moved) {
                let e = function(n) {
                  (!n || n.target === t) && t.parentNode && (!n || /transform$/.test(n.propertyName)) && (t.removeEventListener("transitionend", e), t.classList.remove(...o))
                };
                r.moved = !1;
                let i = t.style,
                  o = n().moveClass.split(" ");
                t.classList.add(...o), i.transform = i.transitionDuration = "", t.addEventListener("transitionend", e)
              }
            })), e
          }, new Map), c
        },
        rq = "androidBackHandler",
        rZ = {
          [rq]: !0
        },
        rY = t1('<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>', 4, !0),
        rJ = {
          left: 0,
          top: 90,
          right: 180,
          bottom: 270
        },
        rQ = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.secondary,
            r = () => e.direction || "left";
          return tD(nk("svg")`
        transform: rotate(${e=>rJ[e.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            get svgDirection() {
              return r()
            },
            get children() {
              let e = rY.cloneNode(!0);
              return tf(() => t0(e, "fill", n())), e
            }
          })
        },
        rX = t1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>'),
        r1 = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.secondary;
          return (() => {
            let e = rX.cloneNode(!0),
              t = e.firstChild;
            return tf(() => t0(t, "fill", n())), e
          })()
        },
        r0 = nk.button`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${e=>e.theme.colors.background.tint};
    border: none;
    cursor: pointer;

    transition: transform 0.125s ease-in-out;

    ${r$} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${rI} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
        r2 = e => {
          let t = rW(e),
            n = () => e.icon || "close";
          return tD(r0, tU({
            get class() {
              return e.class
            },
            onClick: () => e.onClick(),
            "data-tc-icon-button": "true"
          }, t, {
            get children() {
              return [tD(tF, {
                get when() {
                  return !!e.children
                },
                get children() {
                  return e.children
                }
              }), tD(tF, {
                get when() {
                  return !e.children
                },
                get children() {
                  return tD(tG, {
                    get children() {
                      return [tD(tH, {
                        get when() {
                          return "close" === n()
                        },
                        get children() {
                          return tD(r1, {
                            get fill() {
                              return e.fill
                            }
                          })
                        }
                      }), tD(tH, {
                        get when() {
                          return "arrow" === n()
                        },
                        get children() {
                          return tD(rQ, {
                            get fill() {
                              return e.fill
                            }
                          })
                        }
                      }), tD(tH, {
                        get when() {
                          return "question" === n()
                        },
                        get children() {
                          return tD(oc, {
                            get fill() {
                              return e.fill
                            }
                          })
                        }
                      }), tD(tH, {
                        get when() {
                          return "string" != typeof n()
                        },
                        get children() {
                          return n()
                        }
                      })]
                    }
                  })
                }
              })]
            }
          }))
        },
        r5 = {
          m: "24px",
          s: "16px",
          none: "0"
        },
        r3 = nk.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    overflow-y: auto;

    ${rD("mobile")} {
        padding-bottom: 0;
    }
`,
        r8 = nm`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${rD("mobile")} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`,
        r6 = nk.div`
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>r5[e.theme.borderRadius]};

    ${rD("mobile")} {
        width: 100%;
    }
`,
        r4 = nk(r2)`
    position: absolute;
    right: 16px;
    top: 16px;
`,
        r7 = nk.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${e=>r5[e.theme.borderRadius]}
        ${e=>r5[e.theme.borderRadius]};
`,
        r9 = nk(r2)`
    background-color: ${e=>nT(e.theme.colors.icon.secondary,.12)};
`;
      class ie {
        constructor() {
          e4(this, "currentTime", 0)
        }
      }
      let it = class {
        constructor() {
          e4(this, "currentTime", 0), e4(this, "playbackRate", 1), e4(this, "startTime", null), e4(this, "timeline", new ie), e4(this, "finished", Promise.resolve(this)), e4(this, "effect", null), e4(this, "id", ""), e4(this, "pending", !1), e4(this, "playState", "finished"), e4(this, "replaceState", "active"), e4(this, "ready", Promise.resolve(this)), e4(this, "oncancel", null), e4(this, "onfinish", null), e4(this, "onremove", null)
        }
        static create() {
          return it._instance || (function(...e) {
            try {
              console.warn("[TON_CONNECT_UI]", ...e)
            } catch (e) {}
          }("Animation is not supported in this environment: please consider using the `web-animations-js` polyfill to provide a fallback implementation of the Web Animations API."), it._instance = new it), it._instance
        }
        cancel() {}
        finish() {}
        pause() {}
        play() {}
        reverse() {}
        addEventListener(e, t, n) {}
        dispatchEvent(e) {
          return !1
        }
        removeEventListener(e, t, n) {}
        updatePlaybackRate(e) {}
        commitStyles() {}
        persist() {}
      };

      function ir(e, t, n) {
        return "animate" in e ? e.animate(t, n) : it.create()
      }
      e4(it, "_instance", null);
      let ii = t1("<div></div>"),
        io = function(e, t) {
          let n = n => {
            var r;
            return !e.contains(n.target) && (null == (r = t()) ? void 0 : r())
          };
          document.body.addEventListener("click", n), tb(() => document.body.removeEventListener("click", n))
        },
        ia = function(e, t) {
          let n = e => {
            var n, r;
            "Escape" === e.key && (null == (n = document.activeElement) || n.blur(), null == (r = t()) || r())
          };
          document.body.addEventListener("keydown", n), tb(() => document.body.removeEventListener("keydown", n))
        },
        is = function(e, t) {
          let {
            isEnabled: n,
            onClose: r
          } = t();
          if (!n || "android" !== nB().os) return;
          window.history.pushState(rZ, "");
          let i = e => {
            e.preventDefault(), r()
          };
          window.addEventListener("popstate", i, {
            once: !0
          }), tb(() => {
            window.removeEventListener("popstate", i), nD(() => {
              var e;
              (null == (e = window.history.state) ? void 0 : e[rq]) === !0 && window.history.back()
            })
          })
        },
        il = e => {
          let t = nw(),
            n = rW(e);
          return tg(() => {
            e.opened ? document.documentElement.scrollHeight !== document.documentElement.clientHeight && (document.body.style.top = nA(-document.documentElement.scrollTop), document.body.classList.add(nE)) : (document.body.classList.remove(nE), document.documentElement.scrollTo({
              top: -parseFloat(getComputedStyle(document.body).top)
            }), document.body.style.top = "auto")
          }), tD(rH, {
            onBeforeEnter: e => {
              let t = rN("mobile") ? 200 : 100;
              ir(e, [{
                opacity: 0
              }, {
                opacity: 1
              }], {
                duration: t
              }), rN("mobile") && ir(e.firstElementChild, [{
                transform: "translateY(390px)"
              }, {
                transform: "translateY(0)"
              }], {
                duration: t
              })
            },
            onExit: (e, t) => {
              let n = rN("mobile") ? 200 : 100,
                r = ir(e, [{
                  opacity: 1
                }, {
                  opacity: 0
                }], {
                  duration: n
                });
              if (rN("mobile")) {
                let i = ir(e.firstElementChild, [{
                  transform: "translateY(0)"
                }, {
                  transform: "translateY(390px)"
                }], {
                  duration: n
                });
                Promise.all([r.finished, i.finished]).then(t)
              } else r.finished.then(t)
            },
            get children() {
              return tD(tF, {
                get when() {
                  return e.opened
                },
                get children() {
                  return tD(r3, tU({
                    "data-tc-modal": "true"
                  }, n, {
                    get children() {
                      let n = ii.cloneNode(!0);
                      return t3(is, n, () => ({
                        isEnabled: e.enableAndroidBackHandler,
                        onClose: () => e.onClose()
                      })), t3(ia, n, () => () => e.onClose()), t3(io, n, () => () => e.onClose()), t8(n, tD(r6, {
                        get class() {
                          return e.class
                        },
                        get children() {
                          return [tD(r4, {
                            icon: "close",
                            onClick: () => e.onClose()
                          }), tm(() => e.children)]
                        }
                      }), null), t8(n, tD(tF, {
                        get when() {
                          return e.onClickQuestion
                        },
                        get children() {
                          return tD(r7, {
                            get children() {
                              return [tD(os, {}), tD(r9, {
                                get onClick() {
                                  return e.onClickQuestion
                                },
                                icon: "question"
                              })]
                            }
                          })
                        }
                      }), null), tf(() => t2(n, eY(r8, nm`
                                border-radius: ${r5[t.borderRadius]};
                                background-color: ${t.colors.background.tint};

                                ${rD("mobile")} {
                                    border-radius: ${r5[t.borderRadius]}
                                        ${r5[t.borderRadius]} 0 0;
                                }
                            `))), n
                    }
                  }))
                }
              })
            }
          })
        },
        ic = {
          m: "22px",
          s: "12px",
          none: "0"
        },
        iu = {
          m: "18px",
          s: "8px",
          none: "0"
        },
        id = nk.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${e=>ic[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.secondary};
`,
        ip = nk.div`
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${e=>iu[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.segment};

    transform: ${e=>e.right?"translateX(100%)":"translateX(0)"};

    transition: transform 0.13s ease-in-out;
`,
        ih = nk.input`
    display: none;
`,
        ig = nk.label`
    padding: 9px 12px;
    z-index: 1;

    cursor: ${e=>e.isActive?"default":"pointer"};

    transition: transform 0.13s ease-in-out;

    &:hover {
        transform: ${e=>e.isActive?"none":"scale(1.025)"};
    }

    > * {
        ${e=>e.isActive?"":`color: ${e.theme.colors.text.secondary};`}
    }
`,
        im = {
          m: "16px",
          s: "12px",
          none: "0"
        },
        iy = {
          m: "12px",
          s: "8px",
          none: "0"
        },
        ib = nk.div`
    width: 52px;
    height: 52px;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.125s ease-in-out;
`,
        iv = nk.button`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${e=>e.theme.colors.background.qr};
    border-radius: ${e=>im[e.theme.borderRadius]};
    padding: ${nA(24)} 0;
    height: ${nA(304)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${r$} {
        &:hover {
            ${ib.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${ib.class} {
            transform: scale(0.96);
        }
    }

    ${rI} {
        &:active {
            ${ib.class} {
                transform: scale(0.92);
            }
        }
    }
`,
        iw = nk.div`
    position: relative;

    width: fit-content;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    rect {
        fill: transparent;
    }

    path {
        fill: ${e=>e.theme.colors.constant.black};
    }
`,
        ix = nk.div`
    position: absolute;
    width: ${nA(60)};
    height: ${nA(60)};
    background: ${e=>e.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`,
        ik = nk(rk)`
    width: ${e=>nA(e.size)};
    height: ${e=>nA(e.size)};
    border-radius: ${e=>iy[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.qr};
`,
        iC = nk.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${e=>e.theme.colors.background.segment};
`;
      var iS = {
        exports: {}
      };
      (p = function() {
        var e, t, n, r, i, o, a, s = function(e, t) {
          var n = e,
            r = c[t],
            i = null,
            o = 0,
            a = null,
            s = [],
            l = {},
            u = function(e, t) {
              i = function(e) {
                for (var t = Array(e), n = 0; n < e; n += 1) {
                  t[n] = Array(e);
                  for (var r = 0; r < e; r += 1) t[n][r] = null
                }
                return t
              }(o = 4 * n + 17), p(0, 0), p(o - 7, 0), p(0, o - 7), k(), x(), E(e, t), n >= 7 && C(e), null == a && (a = T(n, r, s)), O(a, t)
            },
            p = function(e, t) {
              for (var n = -1; n <= 7; n += 1)
                if (!(e + n <= -1) && !(o <= e + n))
                  for (var r = -1; r <= 7; r += 1) t + r <= -1 || o <= t + r || (0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4 ? i[e + n][t + r] = !0 : i[e + n][t + r] = !1)
            },
            w = function() {
              for (var e = 0, t = 0, n = 0; n < 8; n += 1) {
                u(!0, n);
                var r = d.getLostPoint(l);
                (0 == n || e > r) && (e = r, t = n)
              }
              return t
            },
            x = function() {
              for (var e = 8; e < o - 8; e += 1) null == i[e][6] && (i[e][6] = e % 2 == 0);
              for (var t = 8; t < o - 8; t += 1) null == i[6][t] && (i[6][t] = t % 2 == 0)
            },
            k = function() {
              for (var e = d.getPatternPosition(n), t = 0; t < e.length; t += 1)
                for (var r = 0; r < e.length; r += 1) {
                  var o = e[t],
                    a = e[r];
                  if (null == i[o][a])
                    for (var s = -2; s <= 2; s += 1)
                      for (var l = -2; l <= 2; l += 1) - 2 == s || 2 == s || -2 == l || 2 == l || 0 == s && 0 == l ? i[o + s][a + l] = !0 : i[o + s][a + l] = !1
                }
            },
            C = function(e) {
              for (var t = d.getBCHTypeNumber(n), r = 0; r < 18; r += 1) {
                var a = !e && (t >> r & 1) == 1;
                i[Math.floor(r / 3)][r % 3 + o - 8 - 3] = a
              }
              for (var r = 0; r < 18; r += 1) {
                var a = !e && (t >> r & 1) == 1;
                i[r % 3 + o - 8 - 3][Math.floor(r / 3)] = a
              }
            },
            E = function(e, t) {
              for (var n = r << 3 | t, a = d.getBCHTypeInfo(n), s = 0; s < 15; s += 1) {
                var l = !e && (a >> s & 1) == 1;
                s < 6 ? i[s][8] = l : s < 8 ? i[s + 1][8] = l : i[o - 15 + s][8] = l
              }
              for (var s = 0; s < 15; s += 1) {
                var l = !e && (a >> s & 1) == 1;
                s < 8 ? i[8][o - s - 1] = l : s < 9 ? i[8][15 - s - 1 + 1] = l : i[8][15 - s - 1] = l
              }
              i[o - 8][8] = !e
            },
            O = function(e, t) {
              for (var n = -1, r = o - 1, a = 7, s = 0, l = d.getMaskFunction(t), c = o - 1; c > 0; c -= 2)
                for (6 == c && (c -= 1);;) {
                  for (var u = 0; u < 2; u += 1)
                    if (null == i[r][c - u]) {
                      var p = !1;
                      s < e.length && (p = (e[s] >>> a & 1) == 1), l(r, c - u) && (p = !p), i[r][c - u] = p, -1 == (a -= 1) && (s += 1, a = 7)
                    } if ((r += n) < 0 || o <= r) {
                    r -= n, n = -n;
                    break
                  }
                }
            },
            _ = function(e, t) {
              for (var n = 0, r = 0, i = 0, o = Array(t.length), a = Array(t.length), s = 0; s < t.length; s += 1) {
                var l = t[s].dataCount,
                  c = t[s].totalCount - l;
                r = Math.max(r, l), i = Math.max(i, c), o[s] = Array(l);
                for (var u = 0; u < o[s].length; u += 1) o[s][u] = 255 & e.getBuffer()[u + n];
                n += l;
                var p = d.getErrorCorrectPolynomial(c),
                  f = h(o[s], p.getLength() - 1).mod(p);
                a[s] = Array(p.getLength() - 1);
                for (var u = 0; u < a[s].length; u += 1) {
                  var g = u + f.getLength() - a[s].length;
                  a[s][u] = g >= 0 ? f.getAt(g) : 0
                }
              }
              for (var m = 0, u = 0; u < t.length; u += 1) m += t[u].totalCount;
              for (var y = Array(m), b = 0, u = 0; u < r; u += 1)
                for (var s = 0; s < t.length; s += 1) u < o[s].length && (y[b] = o[s][u], b += 1);
              for (var u = 0; u < i; u += 1)
                for (var s = 0; s < t.length; s += 1) u < a[s].length && (y[b] = a[s][u], b += 1);
              return y
            },
            T = function(e, t, n) {
              for (var r = f.getRSBlocks(e, t), i = g(), o = 0; o < n.length; o += 1) {
                var a = n[o];
                i.put(a.getMode(), 4), i.put(a.getLength(), d.getLengthInBits(a.getMode(), e)), a.write(i)
              }
              for (var s = 0, o = 0; o < r.length; o += 1) s += r[o].dataCount;
              if (i.getLengthInBits() > 8 * s) throw "code length overflow. (" + i.getLengthInBits() + ">" + 8 * s + ")";
              for (i.getLengthInBits() + 4 <= 8 * s && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(!1);
              for (; !(i.getLengthInBits() >= 8 * s) && (i.put(236, 8), !(i.getLengthInBits() >= 8 * s));) i.put(17, 8);
              return _(i, r)
            };
          l.addData = function(e, t) {
            var n = null;
            switch (t = t || "Byte") {
              case "Numeric":
                n = m(e);
                break;
              case "Alphanumeric":
                n = y(e);
                break;
              case "Byte":
                n = b(e);
                break;
              case "Kanji":
                n = v(e);
                break;
              default:
                throw "mode:" + t
            }
            s.push(n), a = null
          }, l.isDark = function(e, t) {
            if (e < 0 || o <= e || t < 0 || o <= t) throw e + "," + t;
            return i[e][t]
          }, l.getModuleCount = function() {
            return o
          }, l.make = function() {
            if (n < 1) {
              for (var e = 1; e < 40; e++) {
                for (var t = f.getRSBlocks(e, r), i = g(), o = 0; o < s.length; o++) {
                  var a = s[o];
                  i.put(a.getMode(), 4), i.put(a.getLength(), d.getLengthInBits(a.getMode(), e)), a.write(i)
                }
                for (var l = 0, o = 0; o < t.length; o++) l += t[o].dataCount;
                if (i.getLengthInBits() <= 8 * l) break
              }
              n = e
            }
            u(!1, w())
          }, l.createTableTag = function(e, t) {
            e = e || 2;
            var n = "";
            n += '<table style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: ' + (t = void 0 === t ? 4 * e : t) + 'px;"><tbody>';
            for (var r = 0; r < l.getModuleCount(); r += 1) {
              n += "<tr>";
              for (var i = 0; i < l.getModuleCount(); i += 1) n += '<td style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: 0px; width: ' + e + "px; height: " + e + "px; background-color: " + (l.isDark(r, i) ? "#000000" : "#ffffff") + ';"/>';
              n += "</tr>"
            }
            return n + "</tbody></table>"
          }, l.createSvgTag = function(e, t, n, r) {
            var i = {};
            "object" == typeof arguments[0] && (i = arguments[0], e = i.cellSize, t = i.margin, n = i.alt, r = i.title), e = e || 2, t = void 0 === t ? 4 * e : t, (n = "string" == typeof n ? {
              text: n
            } : n || {}).text = n.text || null, n.id = n.text ? n.id || "qrcode-description" : null, (r = "string" == typeof r ? {
              text: r
            } : r || {}).text = r.text || null, r.id = r.text ? r.id || "qrcode-title" : null;
            var o, a, s, c, u = l.getModuleCount() * e + 2 * t,
              d = "";
            for (c = "l" + e + ",0 0," + e + " -" + e + ",0 0,-" + e + "z ", d += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"' + (i.scalable ? "" : ' width="' + u + 'px" height="' + u + 'px"') + (' viewBox="0 0 ' + u + " ") + u + '"  preserveAspectRatio="xMinYMin meet"' + (r.text || n.text ? ' role="img" aria-labelledby="' + A([r.id, n.id].join(" ").trim()) + '"' : "") + ">" + (r.text ? '<title id="' + A(r.id) + '">' + A(r.text) + "</title>" : "") + (n.text ? '<description id="' + A(n.id) + '">' + A(n.text) + "</description>" : "") + '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/><path d="', a = 0; a < l.getModuleCount(); a += 1)
              for (o = 0, s = a * e + t; o < l.getModuleCount(); o += 1) l.isDark(a, o) && (d += "M" + (o * e + t) + "," + s + c);
            return d + '" stroke="transparent" fill="black"/></svg>'
          }, l.createDataURL = function(e, t) {
            e = e || 2, t = void 0 === t ? 4 * e : t;
            var n = l.getModuleCount() * e + 2 * t,
              r = t,
              i = n - t;
            return S(n, n, function(t, n) {
              if (!(r <= t) || !(t < i) || !(r <= n) || !(n < i)) return 1;
              var o = Math.floor((t - r) / e),
                a = Math.floor((n - r) / e);
              return l.isDark(a, o) ? 0 : 1
            })
          }, l.createImgTag = function(e, t, n) {
            e = e || 2, t = void 0 === t ? 4 * e : t;
            var r = l.getModuleCount() * e + 2 * t,
              i = "";
            return i += '<img src="' + l.createDataURL(e, t) + '" width="' + r + '" height="' + r + '"', n && (i += ' alt="' + A(n) + '"'), i += "/>"
          };
          var A = function(e) {
              for (var t = "", n = 0; n < e.length; n += 1) {
                var r = e.charAt(n);
                switch (r) {
                  case "<":
                    t += "&lt;";
                    break;
                  case ">":
                    t += "&gt;";
                    break;
                  case "&":
                    t += "&amp;";
                    break;
                  case '"':
                    t += "&quot;";
                    break;
                  default:
                    t += r
                }
              }
              return t
            },
            P = function(e) {
              e = void 0 === e ? 2 : e;
              var t, n, r, i, o, a = 1 * l.getModuleCount() + 2 * e,
                s = e,
                c = a - e,
                u = {
                  "██": "█",
                  "█ ": "▀",
                  " █": "▄",
                  "  ": " "
                },
                d = {
                  "██": "▀",
                  "█ ": "▀",
                  " █": " ",
                  "  ": " "
                },
                p = "";
              for (t = 0; t < a; t += 2) {
                for (n = 0, r = Math.floor((t - s) / 1), i = Math.floor((t + 1 - s) / 1); n < a; n += 1) o = "█", s <= n && n < c && s <= t && t < c && l.isDark(r, Math.floor((n - s) / 1)) && (o = " "), s <= n && n < c && s <= t + 1 && t + 1 < c && l.isDark(i, Math.floor((n - s) / 1)) ? o += " " : o += "█", p += e < 1 && t + 1 >= c ? d[o] : u[o];
                p += "\n"
              }
              return a % 2 && e > 0 ? p.substring(0, p.length - a - 1) + Array(a + 1).join("▀") : p.substring(0, p.length - 1)
            };
          return l.createASCII = function(e, t) {
            if ((e = e || 1) < 2) return P(t);
            e -= 1, t = void 0 === t ? 2 * e : t;
            var n, r, i, o, a = l.getModuleCount() * e + 2 * t,
              s = t,
              c = a - t,
              u = Array(e + 1).join("██"),
              d = Array(e + 1).join("  "),
              p = "",
              h = "";
            for (n = 0; n < a; n += 1) {
              for (r = 0, i = Math.floor((n - s) / e), h = ""; r < a; r += 1) o = 1, s <= r && r < c && s <= n && n < c && l.isDark(i, Math.floor((r - s) / e)) && (o = 0), h += o ? u : d;
              for (i = 0; i < e; i += 1) p += h + "\n"
            }
            return p.substring(0, p.length - 1)
          }, l.renderTo2dContext = function(e, t) {
            t = t || 2;
            for (var n = l.getModuleCount(), r = 0; r < n; r++)
              for (var i = 0; i < n; i++) e.fillStyle = l.isDark(r, i) ? "black" : "white", e.fillRect(r * t, i * t, t, t)
          }, l
        };
        s.stringToBytesFuncs = {
          default: function(e) {
            for (var t = [], n = 0; n < e.length; n += 1) {
              var r = e.charCodeAt(n);
              t.push(255 & r)
            }
            return t
          }
        }, s.stringToBytes = s.stringToBytesFuncs.default, s.createStringToBytes = function(e, t) {
          var n = function() {
            for (var n = k(e), r = function() {
                var e = n.read();
                if (-1 == e) throw "eof";
                return e
              }, i = 0, o = {};;) {
              var a = n.read();
              if (-1 == a) break;
              var s = r(),
                l = r(),
                c = r(),
                u = String.fromCharCode(a << 8 | s),
                d = l << 8 | c;
              o[u] = d, i += 1
            }
            if (i != t) throw i + " != " + t;
            return o
          }();
          return function(e) {
            for (var t = [], r = 0; r < e.length; r += 1) {
              var i = e.charCodeAt(r);
              if (i < 128) t.push(i);
              else {
                var o = n[e.charAt(r)];
                "number" == typeof o ? (255 & o) == o ? t.push(o) : (t.push(o >>> 8), t.push(255 & o)) : t.push(63)
              }
            }
            return t
          }
        };
        var l = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
          },
          c = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
          },
          u = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
          },
          d = (e = [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
          ], t = {}, n = function(e) {
            for (var t = 0; 0 != e;) t += 1, e >>>= 1;
            return t
          }, t.getBCHTypeInfo = function(e) {
            for (var t = e << 10; n(t) - n(1335) >= 0;) t ^= 1335 << n(t) - n(1335);
            return (e << 10 | t) ^ 21522
          }, t.getBCHTypeNumber = function(e) {
            for (var t = e << 12; n(t) - n(7973) >= 0;) t ^= 7973 << n(t) - n(7973);
            return e << 12 | t
          }, t.getPatternPosition = function(t) {
            return e[t - 1]
          }, t.getMaskFunction = function(e) {
            switch (e) {
              case u.PATTERN000:
                return function(e, t) {
                  return (e + t) % 2 == 0
                };
              case u.PATTERN001:
                return function(e, t) {
                  return e % 2 == 0
                };
              case u.PATTERN010:
                return function(e, t) {
                  return t % 3 == 0
                };
              case u.PATTERN011:
                return function(e, t) {
                  return (e + t) % 3 == 0
                };
              case u.PATTERN100:
                return function(e, t) {
                  return (Math.floor(e / 2) + Math.floor(t / 3)) % 2 == 0
                };
              case u.PATTERN101:
                return function(e, t) {
                  return e * t % 2 + e * t % 3 == 0
                };
              case u.PATTERN110:
                return function(e, t) {
                  return (e * t % 2 + e * t % 3) % 2 == 0
                };
              case u.PATTERN111:
                return function(e, t) {
                  return (e * t % 3 + (e + t) % 2) % 2 == 0
                };
              default:
                throw "bad maskPattern:" + e
            }
          }, t.getErrorCorrectPolynomial = function(e) {
            for (var t = h([1], 0), n = 0; n < e; n += 1) t = t.multiply(h([1, p.gexp(n)], 0));
            return t
          }, t.getLengthInBits = function(e, t) {
            if (1 <= t && t < 10) switch (e) {
              case l.MODE_NUMBER:
                return 10;
              case l.MODE_ALPHA_NUM:
                return 9;
              case l.MODE_8BIT_BYTE:
              case l.MODE_KANJI:
                return 8;
              default:
                throw "mode:" + e
            } else if (t < 27) switch (e) {
              case l.MODE_NUMBER:
                return 12;
              case l.MODE_ALPHA_NUM:
                return 11;
              case l.MODE_8BIT_BYTE:
                return 16;
              case l.MODE_KANJI:
                return 10;
              default:
                throw "mode:" + e
            } else if (t < 41) switch (e) {
              case l.MODE_NUMBER:
                return 14;
              case l.MODE_ALPHA_NUM:
                return 13;
              case l.MODE_8BIT_BYTE:
                return 16;
              case l.MODE_KANJI:
                return 12;
              default:
                throw "mode:" + e
            } else throw "type:" + t
          }, t.getLostPoint = function(e) {
            for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r += 1)
              for (var i = 0; i < t; i += 1) {
                for (var o = 0, a = e.isDark(r, i), s = -1; s <= 1; s += 1)
                  if (!(r + s < 0) && !(t <= r + s))
                    for (var l = -1; l <= 1; l += 1) i + l < 0 || t <= i + l || 0 == s && 0 == l || a != e.isDark(r + s, i + l) || (o += 1);
                o > 5 && (n += 3 + o - 5)
              }
            for (var r = 0; r < t - 1; r += 1)
              for (var i = 0; i < t - 1; i += 1) {
                var c = 0;
                e.isDark(r, i) && (c += 1), e.isDark(r + 1, i) && (c += 1), e.isDark(r, i + 1) && (c += 1), e.isDark(r + 1, i + 1) && (c += 1), (0 == c || 4 == c) && (n += 3)
              }
            for (var r = 0; r < t; r += 1)
              for (var i = 0; i < t - 6; i += 1) e.isDark(r, i) && !e.isDark(r, i + 1) && e.isDark(r, i + 2) && e.isDark(r, i + 3) && e.isDark(r, i + 4) && !e.isDark(r, i + 5) && e.isDark(r, i + 6) && (n += 40);
            for (var i = 0; i < t; i += 1)
              for (var r = 0; r < t - 6; r += 1) e.isDark(r, i) && !e.isDark(r + 1, i) && e.isDark(r + 2, i) && e.isDark(r + 3, i) && e.isDark(r + 4, i) && !e.isDark(r + 5, i) && e.isDark(r + 6, i) && (n += 40);
            for (var u = 0, i = 0; i < t; i += 1)
              for (var r = 0; r < t; r += 1) e.isDark(r, i) && (u += 1);
            return n + Math.abs(100 * u / t / t - 50) / 5 * 10
          }, t),
          p = function() {
            for (var e = Array(256), t = Array(256), n = 0; n < 8; n += 1) e[n] = 1 << n;
            for (var n = 8; n < 256; n += 1) e[n] = e[n - 4] ^ e[n - 5] ^ e[n - 6] ^ e[n - 8];
            for (var n = 0; n < 255; n += 1) t[e[n]] = n;
            var r = {};
            return r.glog = function(e) {
              if (e < 1) throw "glog(" + e + ")";
              return t[e]
            }, r.gexp = function(t) {
              for (; t < 0;) t += 255;
              for (; t >= 256;) t -= 255;
              return e[t]
            }, r
          }();

        function h(e, t) {
          if (void 0 === e.length) throw e.length + "/" + t;
          var n = function() {
              for (var n = 0; n < e.length && 0 == e[n];) n += 1;
              for (var r = Array(e.length - n + t), i = 0; i < e.length - n; i += 1) r[i] = e[i + n];
              return r
            }(),
            r = {};
          return r.getAt = function(e) {
            return n[e]
          }, r.getLength = function() {
            return n.length
          }, r.multiply = function(e) {
            for (var t = Array(r.getLength() + e.getLength() - 1), n = 0; n < r.getLength(); n += 1)
              for (var i = 0; i < e.getLength(); i += 1) t[n + i] ^= p.gexp(p.glog(r.getAt(n)) + p.glog(e.getAt(i)));
            return h(t, 0)
          }, r.mod = function(e) {
            if (r.getLength() - e.getLength() < 0) return r;
            for (var t = p.glog(r.getAt(0)) - p.glog(e.getAt(0)), n = Array(r.getLength()), i = 0; i < r.getLength(); i += 1) n[i] = r.getAt(i);
            for (var i = 0; i < e.getLength(); i += 1) n[i] ^= p.gexp(p.glog(e.getAt(i)) + t);
            return h(n, 0).mod(e)
          }, r
        }
        var f = (r = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12, 7, 37, 13],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16]
          ], i = function(e, t) {
            var n = {};
            return n.totalCount = e, n.dataCount = t, n
          }, o = {}, a = function(e, t) {
            switch (t) {
              case c.L:
                return r[(e - 1) * 4 + 0];
              case c.M:
                return r[(e - 1) * 4 + 1];
              case c.Q:
                return r[(e - 1) * 4 + 2];
              case c.H:
                return r[(e - 1) * 4 + 3];
              default:
                return
            }
          }, o.getRSBlocks = function(e, t) {
            var n = a(e, t);
            if (void 0 === n) throw "bad rs block @ typeNumber:" + e + "/errorCorrectionLevel:" + t;
            for (var r = n.length / 3, o = [], s = 0; s < r; s += 1)
              for (var l = n[3 * s + 0], c = n[3 * s + 1], u = n[3 * s + 2], d = 0; d < l; d += 1) o.push(i(c, u));
            return o
          }, o),
          g = function() {
            var e = [],
              t = 0,
              n = {};
            return n.getBuffer = function() {
              return e
            }, n.getAt = function(t) {
              return (e[Math.floor(t / 8)] >>> 7 - t % 8 & 1) == 1
            }, n.put = function(e, t) {
              for (var r = 0; r < t; r += 1) n.putBit((e >>> t - r - 1 & 1) == 1)
            }, n.getLengthInBits = function() {
              return t
            }, n.putBit = function(n) {
              var r = Math.floor(t / 8);
              e.length <= r && e.push(0), n && (e[r] |= 128 >>> t % 8), t += 1
            }, n
          },
          m = function(e) {
            var t = l.MODE_NUMBER,
              n = {};
            n.getMode = function() {
              return t
            }, n.getLength = function(t) {
              return e.length
            }, n.write = function(t) {
              for (var n = 0; n + 2 < e.length;) t.put(r(e.substring(n, n + 3)), 10), n += 3;
              n < e.length && (e.length - n == 1 ? t.put(r(e.substring(n, n + 1)), 4) : e.length - n == 2 && t.put(r(e.substring(n, n + 2)), 7))
            };
            var r = function(e) {
                for (var t = 0, n = 0; n < e.length; n += 1) t = 10 * t + i(e.charAt(n));
                return t
              },
              i = function(e) {
                if ("0" <= e && e <= "9") return e.charCodeAt(0) - 48;
                throw "illegal char :" + e
              };
            return n
          },
          y = function(e) {
            var t = l.MODE_ALPHA_NUM,
              n = {};
            n.getMode = function() {
              return t
            }, n.getLength = function(t) {
              return e.length
            }, n.write = function(t) {
              for (var n = 0; n + 1 < e.length;) t.put(45 * r(e.charAt(n)) + r(e.charAt(n + 1)), 11), n += 2;
              n < e.length && t.put(r(e.charAt(n)), 6)
            };
            var r = function(e) {
              if ("0" <= e && e <= "9") return e.charCodeAt(0) - 48;
              if ("A" <= e && e <= "Z") return e.charCodeAt(0) - 65 + 10;
              switch (e) {
                case " ":
                  return 36;
                case "$":
                  return 37;
                case "%":
                  return 38;
                case "*":
                  return 39;
                case "+":
                  return 40;
                case "-":
                  return 41;
                case ".":
                  return 42;
                case "/":
                  return 43;
                case ":":
                  return 44;
                default:
                  throw "illegal char :" + e
              }
            };
            return n
          },
          b = function(e) {
            var t = l.MODE_8BIT_BYTE,
              n = s.stringToBytes(e),
              r = {};
            return r.getMode = function() {
              return t
            }, r.getLength = function(e) {
              return n.length
            }, r.write = function(e) {
              for (var t = 0; t < n.length; t += 1) e.put(n[t], 8)
            }, r
          },
          v = function(e) {
            var t = l.MODE_KANJI,
              n = s.stringToBytesFuncs.SJIS;
            if (!n) throw "sjis not supported.";
            ! function(e, t) {
              var r = n("友");
              if (2 != r.length || (r[0] << 8 | r[1]) != 38726) throw "sjis not supported."
            }(0, 0);
            var r = n(e),
              i = {};
            return i.getMode = function() {
              return t
            }, i.getLength = function(e) {
              return ~~(r.length / 2)
            }, i.write = function(e) {
              for (var t = 0; t + 1 < r.length;) {
                var n = (255 & r[t]) << 8 | 255 & r[t + 1];
                if (33088 <= n && n <= 40956) n -= 33088;
                else if (57408 <= n && n <= 60351) n -= 49472;
                else throw "illegal char at " + (t + 1) + "/" + n;
                n = (n >>> 8 & 255) * 192 + (255 & n), e.put(n, 13), t += 2
              }
              if (t < r.length) throw "illegal char at " + (t + 1)
            }, i
          },
          w = function() {
            var e = [],
              t = {};
            return t.writeByte = function(t) {
              e.push(255 & t)
            }, t.writeShort = function(e) {
              t.writeByte(e), t.writeByte(e >>> 8)
            }, t.writeBytes = function(e, n, r) {
              n = n || 0, r = r || e.length;
              for (var i = 0; i < r; i += 1) t.writeByte(e[i + n])
            }, t.writeString = function(e) {
              for (var n = 0; n < e.length; n += 1) t.writeByte(e.charCodeAt(n))
            }, t.toByteArray = function() {
              return e
            }, t.toString = function() {
              var t = "";
              t += "[";
              for (var n = 0; n < e.length; n += 1) n > 0 && (t += ","), t += e[n];
              return t + "]"
            }, t
          },
          x = function() {
            var e = 0,
              t = 0,
              n = 0,
              r = "",
              i = {},
              o = function(e) {
                r += String.fromCharCode(a(63 & e))
              },
              a = function(e) {
                if (e < 0);
                else if (e < 26) return 65 + e;
                else if (e < 52) return 97 + (e - 26);
                else if (e < 62) return 48 + (e - 52);
                else if (62 == e) return 43;
                else if (63 == e) return 47;
                throw "n:" + e
              };
            return i.writeByte = function(r) {
              for (e = e << 8 | 255 & r, t += 8, n += 1; t >= 6;) o(e >>> t - 6), t -= 6
            }, i.flush = function() {
              if (t > 0 && (o(e << 6 - t), e = 0, t = 0), n % 3 != 0)
                for (var i = 3 - n % 3, a = 0; a < i; a += 1) r += "="
            }, i.toString = function() {
              return r
            }, i
          },
          k = function(e) {
            var t = 0,
              n = 0,
              r = 0,
              i = {};
            i.read = function() {
              for (; r < 8;) {
                if (t >= e.length) {
                  if (0 == r) return -1;
                  throw "unexpected end of file./" + r
                }
                var i = e.charAt(t);
                if (t += 1, "=" == i) return r = 0, -1;
                i.match(/^\s$/) || (n = n << 6 | o(i.charCodeAt(0)), r += 6)
              }
              var a = n >>> r - 8 & 255;
              return r -= 8, a
            };
            var o = function(e) {
              if (65 <= e && e <= 90) return e - 65;
              if (97 <= e && e <= 122) return e - 97 + 26;
              if (48 <= e && e <= 57) return e - 48 + 52;
              if (43 == e) return 62;
              if (47 == e) return 63;
              throw "c:" + e
            };
            return i
          },
          C = function(e, t) {
            var n = Array(e * t),
              r = {};
            r.setPixel = function(t, r, i) {
              n[r * e + t] = i
            }, r.write = function(n) {
              n.writeString("GIF87a"), n.writeShort(e), n.writeShort(t), n.writeByte(128), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(255), n.writeByte(255), n.writeByte(255), n.writeString(","), n.writeShort(0), n.writeShort(0), n.writeShort(e), n.writeShort(t), n.writeByte(0);
              var r = o(2);
              n.writeByte(2);
              for (var i = 0; r.length - i > 255;) n.writeByte(255), n.writeBytes(r, i, 255), i += 255;
              n.writeByte(r.length - i), n.writeBytes(r, i, r.length - i), n.writeByte(0), n.writeString(";")
            };
            var i = function(e) {
                var t = 0,
                  n = 0,
                  r = {};
                return r.write = function(r, i) {
                  if (r >>> i != 0) throw "length over";
                  for (; t + i >= 8;) e.writeByte(255 & (r << t | n)), i -= 8 - t, r >>>= 8 - t, n = 0, t = 0;
                  n = r << t | n, t += i
                }, r.flush = function() {
                  t > 0 && e.writeByte(n)
                }, r
              },
              o = function(e) {
                for (var t = 1 << e, r = (1 << e) + 1, o = e + 1, s = a(), l = 0; l < t; l += 1) s.add(String.fromCharCode(l));
                s.add(String.fromCharCode(t)), s.add(String.fromCharCode(r));
                var c = w(),
                  u = i(c);
                u.write(t, o);
                var d = 0,
                  p = String.fromCharCode(n[0]);
                for (d += 1; d < n.length;) {
                  var h = String.fromCharCode(n[d]);
                  d += 1, s.contains(p + h) ? p += h : (u.write(s.indexOf(p), o), 4095 > s.size() && (s.size() == 1 << o && (o += 1), s.add(p + h)), p = h)
                }
                return u.write(s.indexOf(p), o), u.write(r, o), u.flush(), c.toByteArray()
              },
              a = function() {
                var e = {},
                  t = 0,
                  n = {};
                return n.add = function(r) {
                  if (n.contains(r)) throw "dup key:" + r;
                  e[r] = t, t += 1
                }, n.size = function() {
                  return t
                }, n.indexOf = function(t) {
                  return e[t]
                }, n.contains = function(t) {
                  return void 0 !== e[t]
                }, n
              };
            return r
          },
          S = function(e, t, n) {
            for (var r = C(e, t), i = 0; i < t; i += 1)
              for (var o = 0; o < e; o += 1) r.setPixel(o, i, n(o, i));
            var a = w();
            r.write(a);
            for (var s = x(), l = a.toByteArray(), c = 0; c < l.length; c += 1) s.writeByte(l[c]);
            return s.flush(), "data:image/gif;base64," + s
          };
        return s
      }()).stringToBytesFuncs["UTF-8"] = function(e) {
        return function(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            r < 128 ? t.push(r) : r < 2048 ? t.push(192 | r >> 6, 128 | 63 & r) : r < 55296 || r >= 57344 ? t.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r) : (n++, r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(n)), t.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r))
          }
          return t
        }(e)
      }, iS.exports = p;
      let iE = iS.exports;

      function iO(e) {
        return e7(this, null, function*() {
          try {
            if (!(null == navigator ? void 0 : navigator.clipboard)) throw new nR("Clipboard API not available");
            return yield navigator.clipboard.writeText(e)
          } catch (e) {}! function(e) {
            let t = document.createElement("textarea");
            t.value = e, t.style.top = "0", t.style.left = "0", t.style.position = "fixed", document.body.appendChild(t), t.focus(), t.select();
            try {
              document.execCommand("copy")
            } finally {
              document.body.removeChild(t)
            }
          }(e)
        })
      }
      let i_ = t1("<div></div>"),
        iT = e => {
          let t, n, r;
          let [i, o] = tp(!1), [a, s] = tp(48);
          tg(() => {
            let i = iE(0, "L");
            i.addData(e.sourceUrl), i.make(), t.innerHTML = i.createSvgTag(4, 0);
            let o = t.firstElementChild.clientWidth,
              a = Math.round(256 / o * 1e5) / 1e5;
            if (r) {
              let e = 4 * Math.ceil(60 / (4 * a)),
                t = nA(4 * Math.ceil((o - e) / 8));
              r.style.top = t, r.style.left = t, r.style.height = nA(e), r.style.width = nA(e), s(Math.round(48 / a))
            }
            n.style.transform = `scale(${a})`
          });
          let l = null;
          return tD(iv, {
            get class() {
              return e.class
            },
            onClick: () => {
              o(!0), iO(e.sourceUrl), null != l && clearTimeout(l), l = setTimeout(() => o(!1), 1500)
            },
            get children() {
              return [tD(iw, {
                ref(e) {
                  let t = n;
                  "function" == typeof t ? t(e) : n = e
                },
                get children() {
                  return [(() => {
                    let e = i_.cloneNode(!0),
                      n = t;
                    return "function" == typeof n ? t3(n, e) : t = e, e
                  })(), tD(tF, {
                    get when() {
                      return e.imageUrl
                    },
                    get children() {
                      return tD(ix, {
                        ref(e) {
                          let t = r;
                          "function" == typeof t ? t(e) : r = e
                        },
                        get children() {
                          return tD(ik, {
                            get src() {
                              return e.imageUrl
                            },
                            alt: "",
                            get size() {
                              return a()
                            }
                          })
                        }
                      })
                    }
                  })]
                }
              }), tD(rH, {
                onBeforeEnter: e => {
                  ir(e, [{
                    opacity: 0,
                    transform: "translate(-50%, 44px)"
                  }, {
                    opacity: 1,
                    transform: "translate(-50%, 0)"
                  }], {
                    duration: 150,
                    easing: "ease-out"
                  })
                },
                onExit: (e, t) => {
                  ir(e, [{
                    opacity: 1,
                    transform: "translate(-50%, 0)"
                  }, {
                    opacity: 0,
                    transform: "translate(-50%, 44px)"
                  }], {
                    duration: 150,
                    easing: "ease-out"
                  }).finished.then(() => {
                    t()
                  })
                },
                get children() {
                  return tD(tF, {
                    get when() {
                      return i() && !e.disableCopy
                    },
                    get children() {
                      return tD(iC, {
                        get children() {
                          return [tD(i4, {
                            size: "xs"
                          }), tD(iN, {
                            translationKey: "common.linkCopied",
                            children: "Link Copied"
                          })]
                        }
                      })
                    }
                  })
                }
              }), tD(tF, {
                get when() {
                  return !e.disableCopy
                },
                get children() {
                  return tD(ib, {
                    get children() {
                      return tD(oL, {})
                    }
                  })
                }
              })]
            }
          })
        };
      var iA = (e, t, n) => {
          let r = t.trim().split(".").reduce((e, t) => e ? e[t] : void 0, e);
          return void 0 !== r ? r : n
        },
        iP = (e, t, n = /{{(.*?)}}/g) => e.replace(n, (e, n) => iA(t, n, "")),
        iR = (e = {}, t = navigator.language in e ? navigator.language : Object.keys(e)[0]) => {
          let [n, r] = tp(t), [i, o] = rd(e);
          return [(e, t, r) => {
            let o = iA(i[n()], e, r || "");
            return "function" == typeof o ? o(t) : "string" == typeof o ? iP(o, t || {}) : o
          }, {
            add(e, t) {
              o(e, e => Object.assign(e || {}, t))
            },
            locale: e => e ? r(e) : n(),
            dict: e => iA(i, e)
          }]
        },
        ij = tv({}),
        iL = () => tw(ij);
      let iM = nk.div`
    font-style: normal;
    font-weight: ${e=>e.fontWeight};
    font-size: ${e=>e.fontSize};
    line-height: ${e=>e.lineHeight};

    color: ${e=>e.color};
`,
        iN = e => {
          let t;
          let n = nw(),
            [r] = iL(),
            i = () => e.color || n.colors.text.primary,
            o = tU({
              fontSize: "14px",
              fontWeight: "510",
              lineHeight: "130%"
            }, e);
          return tg(() => {
            t && "unset" !== o.cursor && "pointer" !== getComputedStyle(t).cursor && (t.style.cursor = "default")
          }), tD(iM, {
            get fontSize() {
              return o.fontSize
            },
            get fontWeight() {
              return o.fontWeight
            },
            get lineHeight() {
              return o.lineHeight
            },
            get color() {
              return i()
            },
            get class() {
              return o.class
            },
            ref(e) {
              let n = t;
              "function" == typeof n ? n(e) : t = e
            },
            "data-tc-text": "true",
            get children() {
              var a;
              return tm(() => !!o.translationKey)() ? r(o.translationKey, o.translationValues, null == (a = o.children) ? void 0 : a.toString()) : o.children
            }
          })
        },
        iD = nk.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0.5px solid rgba(0, 0, 0, 0.08);

        border-radius: inherit;
    }
`,
        iI = nk(rk)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`,
        i$ = e => tD(iD, {
          get class() {
            return e.class
          },
          get children() {
            return tD(iI, {
              get src() {
                return e.src
              }
            })
          }
        }),
        iB = {
          m: "16px",
          s: "12px",
          none: "0"
        },
        iU = {
          m: "6px",
          s: "6px",
          none: "0"
        },
        iV = nk.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${r$} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${rD("mobile")} {
        padding: 8px 4px;
        width: 82px;
    }

    ${rI} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
        iW = nk(i$)`
    width: 60px;
    height: 60px;
    border-radius: ${e=>iB[e.theme.borderRadius]};

    margin-bottom: 8px;
`,
        iF = nk(rk)`
    position: absolute;
    right: 10px;
    top: 50px;
    width: 24px;
    height: 24px;
    border-radius: ${e=>iU[e.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`,
        iG = nk(iN)`
    max-width: 90px;
    font-weight: 510;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${rD("mobile")} {
        max-width: 80px;
    }
`,
        iH = nk(iN)`
    font-weight: ${e=>e.colorPrimary?"510":"400"};
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${e=>e.colorPrimary?e.theme.colors.text.primary:e.theme.colors.text.secondary};

    ${rD("mobile")} {
        max-width: 80px;
    }
`,
        iK = t1("<div></div>"),
        iz = e => {
          var t;
          let n = null,
            r = () => {
              let e = null == n ? void 0 : n.querySelector("div");
              if (e && e.scrollWidth > e.clientWidth) {
                let t = 0;
                for (; e.scrollWidth > e.clientWidth && t >= -.4;) t -= .05, e.style.letterSpacing = `${t}px`;
                0 !== t && (t -= .05, e.style.letterSpacing = `${t}px`)
              }
            };
          return t = () => r(), tg(() => ty(t)), tg(() => {
            r()
          }), tD(iV, {
            get class() {
              return e.class
            },
            onClick: () => e.onClick(),
            "data-tc-wallet-item": "true",
            get children() {
              return [tm(() => tm(() => "string" == typeof e.icon)() ? tD(iW, {
                get src() {
                  return e.icon
                }
              }) : e.icon), tm(() => tm(() => !!e.badgeUrl)() && tD(iF, {
                get src() {
                  return e.badgeUrl
                }
              })), (() => {
                let t = iK.cloneNode(!0);
                return t3(e => n = e, t), t8(t, tD(iG, {
                  get children() {
                    return e.name
                  }
                })), t
              })(), tm(() => tm(() => !!e.secondLine)() && tD(iH, {
                get colorPrimary() {
                  var t;
                  return null == (t = e.secondLineColorPrimary) || t
                },
                get children() {
                  return e.secondLine
                }
              }))]
            }
          })
        },
        iq = nk.h1`
    font-style: normal;
    font-weight: 590;
    font-size: 20px;
    line-height: 28px;

    text-align: center;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,
        iZ = e => {
          let [t] = iL();
          return tD(iq, {
            get class() {
              return e.class
            },
            "data-tc-h1": "true",
            get children() {
              var n;
              return tm(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, null == (n = e.children) ? void 0 : n.toString()) : e.children
            }
          })
        },
        iY = nk.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    text-align: center;

    color: ${e=>e.theme.colors.text.secondary};

    margin-top: 0;
    margin-bottom: 32px;

    cursor: default;
`,
        iJ = e => {
          let [t] = iL();
          return tD(iY, {
            get class() {
              return e.class
            },
            "data-tc-h2": "true",
            get children() {
              var n;
              return tm(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, null == (n = e.children) ? void 0 : n.toString()) : e.children
            }
          })
        },
        iQ = nk.h3`
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,
        iX = e => {
          let [t] = iL();
          return tD(iQ, {
            "data-tc-h3": "true",
            get class() {
              return e.class
            },
            get children() {
              var n;
              return tm(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, null == (n = e.children) ? void 0 : n.toString()) : e.children
            }
          })
        },
        i1 = t1('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 7.5C9.33579 7.5 9 7.16421 9 6.75C9 6.33579 9.33579 6 9.75 6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 18.6642 21.6642 19 21.25 19C20.8358 19 20.5 18.6642 20.5 18.25V8.56066L6.28033 22.7803C5.98744 23.0732 5.51256 23.0732 5.21967 22.7803C4.92678 22.4874 4.92678 22.0126 5.21967 21.7197L19.4393 7.5H9.75Z"></path></svg>'),
        i0 = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.secondary;
          return (() => {
            let e = i1.cloneNode(!0),
              t = e.firstChild;
            return tf(r => {
              let i = n(),
                o = n();
              return i !== r._v$ && t0(e, "fill", r._v$ = i), o !== r._v$2 && t0(t, "fill", r._v$2 = o), r
            }, {
              _v$: void 0,
              _v$2: void 0
            }), e
          })()
        },
        i2 = t1('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>'),
        i5 = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.primary;
          return (() => {
            let e = i2.cloneNode(!0),
              t = e.firstChild;
            return tf(() => t0(t, "fill", n())), e
          })()
        },
        i3 = t1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>'),
        i8 = t1('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>'),
        i6 = t1('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>'),
        i4 = e => {
          let t = nw(),
            n = () => e.size || "s",
            r = () => e.fill || t.colors.icon.success;
          return tm((() => {
            let i = tm(() => "xs" === n());
            return () => i() ? (() => {
              let n = i3.cloneNode(!0),
                i = n.firstChild.firstChild,
                o = i.nextSibling;
              return tf(a => {
                let s = e.class,
                  l = r(),
                  c = t.colors.constant.white;
                return s !== a._v$ && t0(n, "class", a._v$ = s), l !== a._v$2 && t0(i, "fill", a._v$2 = l), c !== a._v$3 && t0(o, "stroke", a._v$3 = c), a
              }, {
                _v$: void 0,
                _v$2: void 0,
                _v$3: void 0
              }), n
            })() : (() => {
              let i = tm(() => "s" === n());
              return () => i() ? (() => {
                let n = i8.cloneNode(!0),
                  i = n.firstChild,
                  o = i.nextSibling;
                return tf(a => {
                  let s = e.class,
                    l = r(),
                    c = t.colors.constant.white;
                  return s !== a._v$4 && t0(n, "class", a._v$4 = s), l !== a._v$5 && t0(i, "fill", a._v$5 = l), c !== a._v$6 && t0(o, "fill", a._v$6 = c), a
                }, {
                  _v$4: void 0,
                  _v$5: void 0,
                  _v$6: void 0
                }), n
              })() : (() => {
                let n = i6.cloneNode(!0),
                  i = n.firstChild,
                  o = i.nextSibling;
                return tf(a => {
                  let s = e.class,
                    l = r(),
                    c = t.colors.constant.white;
                  return s !== a._v$7 && t0(n, "class", a._v$7 = s), l !== a._v$8 && t0(i, "fill", a._v$8 = l), c !== a._v$9 && t0(o, "fill", a._v$9 = c), a
                }, {
                  _v$7: void 0,
                  _v$8: void 0,
                  _v$9: void 0
                }), n
              })()
            })()
          })())
        },
        i7 = t1('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>'),
        i9 = t1('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),
        oe = t1('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>'),
        ot = e => {
          let t = nw(),
            n = () => e.size || "m",
            r = () => e.fill || t.colors.icon.error;
          return tm((() => {
            let i = tm(() => "m" === n());
            return () => i() ? (() => {
              let n = i7.cloneNode(!0),
                i = n.firstChild,
                o = i.nextSibling;
              return tf(a => {
                let s = e.class,
                  l = r(),
                  c = t.colors.constant.white;
                return s !== a._v$ && t0(n, "class", a._v$ = s), l !== a._v$2 && t0(i, "fill", a._v$2 = l), c !== a._v$3 && t0(o, "fill", a._v$3 = c), a
              }, {
                _v$: void 0,
                _v$2: void 0,
                _v$3: void 0
              }), n
            })() : (() => {
              let i = tm(() => "s" === n());
              return () => i() ? (() => {
                let n = i9.cloneNode(!0),
                  i = n.firstChild,
                  o = i.nextSibling;
                return tf(a => {
                  let s = e.class,
                    l = r(),
                    c = t.colors.constant.white;
                  return s !== a._v$4 && t0(n, "class", a._v$4 = s), l !== a._v$5 && t0(i, "fill", a._v$5 = l), c !== a._v$6 && t0(o, "stroke", a._v$6 = c), a
                }, {
                  _v$4: void 0,
                  _v$5: void 0,
                  _v$6: void 0
                }), n
              })() : (() => {
                let n = oe.cloneNode(!0),
                  i = n.firstChild,
                  o = i.nextSibling;
                return tf(a => {
                  let s = e.class,
                    l = r(),
                    c = t.colors.constant.white;
                  return s !== a._v$7 && t0(n, "class", a._v$7 = s), l !== a._v$8 && t0(i, "fill", a._v$8 = l), c !== a._v$9 && t0(o, "fill", a._v$9 = c), a
                }, {
                  _v$7: void 0,
                  _v$8: void 0,
                  _v$9: void 0
                }), n
              })()
            })()
          })())
        },
        on = t1('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>'),
        or = t1('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>'),
        oi = t1('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),
        oo = e => {
          let t = nw(),
            n = () => e.size || "xs",
            r = () => e.fill || t.colors.icon.tertiary,
            i = ny`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `,
            o = nm`
        animation: ${i} 1s linear infinite;
    `;
          return tm((() => {
            let t = tm(() => "xs" === n());
            return () => t() ? (() => {
              let t = on.cloneNode(!0),
                n = t.firstChild;
              return tf(i => {
                let a = eY(o, e.class),
                  s = r();
                return a !== i._v$ && t0(t, "class", i._v$ = a), s !== i._v$2 && t0(n, "fill", i._v$2 = s), i
              }, {
                _v$: void 0,
                _v$2: void 0
              }), t
            })() : (() => {
              let t = tm(() => "s" === n());
              return () => t() ? (() => {
                let t = or.cloneNode(!0),
                  n = t.firstChild;
                return tf(i => {
                  let a = eY(o, e.class),
                    s = r();
                  return a !== i._v$3 && t0(t, "class", i._v$3 = a), s !== i._v$4 && t0(n, "fill", i._v$4 = s), i
                }, {
                  _v$3: void 0,
                  _v$4: void 0
                }), t
              })() : (() => {
                let t = oi.cloneNode(!0),
                  n = t.firstChild;
                return tf(i => {
                  let a = eY(o, e.class),
                    s = r();
                  return a !== i._v$5 && t0(t, "class", i._v$5 = a), s !== i._v$6 && t0(n, "stroke", i._v$6 = s), i
                }, {
                  _v$5: void 0,
                  _v$6: void 0
                }), t
              })()
            })()
          })())
        },
        oa = t1('<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>'),
        os = () => {
          let e = nw(),
            t = () => e.theme === no.DARK ? e.colors.constant.white : e.colors.constant.black;
          return (() => {
            let e = oa.cloneNode(!0),
              n = e.firstChild.nextSibling.nextSibling;
            return tf(() => t0(n, "fill", t())), e
          })()
        },
        ol = t1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>'),
        oc = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.secondary;
          return (() => {
            let e = ol.cloneNode(!0),
              t = e.firstChild;
            return tf(() => t0(t, "fill", n())), e
          })()
        },
        ou = t1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>'),
        od = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.primary;
          return (() => {
            let e = ou.cloneNode(!0),
              t = e.firstChild;
            return tf(() => t0(t, "fill", n())), e
          })()
        },
        op = t1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>'),
        oh = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.primary;
          return (() => {
            let e = op.cloneNode(!0),
              t = e.firstChild;
            return tf(() => t0(t, "fill", n())), e
          })()
        },
        of = t1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>'),
        og = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.primary;
          return (() => {
            let e = of.cloneNode(!0),
              t = e.firstChild;
            return tf(() => t0(t, "fill", n())), e
          })()
        },
        om = t1('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>'),
        oy = e => {
          let t = nw(),
            n = () => e.fill || t.colors.accent;
          return (() => {
            let e = om.cloneNode(!0),
              t = e.firstChild.firstChild;
            return tf(() => t0(t, "fill", n())), e
          })()
        },
        ob = t1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>'),
        ov = e => {
          let t = nw(),
            n = () => e.fill || t.colors.accent;
          return (() => {
            let e = ob.cloneNode(!0),
              t = e.firstChild;
            return tf(() => t0(t, "fill", n())), e
          })()
        },
        ow = t1('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>'),
        ox = e => {
          let t = nw(),
            n = () => e.fill || t.colors.accent;
          return (() => {
            let e = ow.cloneNode(!0),
              t = e.firstChild.firstChild;
            return tf(() => t0(t, "fill", n())), e
          })()
        },
        ok = t1('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>'),
        oC = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.secondary;
          return (() => {
            let t = ok.cloneNode(!0),
              r = t.firstChild;
            return tf(i => {
              let o = e.class,
                a = n();
              return o !== i._v$ && t0(t, "class", i._v$ = o), a !== i._v$2 && t0(r, "fill", i._v$2 = a), i
            }, {
              _v$: void 0,
              _v$2: void 0
            }), t
          })()
        },
        oS = t1('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>'),
        oE = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.secondary;
          return (() => {
            let t = oS.cloneNode(!0),
              r = t.firstChild;
            return tf(i => {
              let o = e.class,
                a = n();
              return o !== i._v$ && t0(t, "class", i._v$ = o), a !== i._v$2 && t0(r, "fill", i._v$2 = a), i
            }, {
              _v$: void 0,
              _v$2: void 0
            }), t
          })()
        },
        oO = t1('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>'),
        o_ = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.secondary;
          return (() => {
            let t = oO.cloneNode(!0),
              r = t.firstChild;
            return tf(i => {
              let o = e.class,
                a = n();
              return o !== i._v$ && t0(t, "class", i._v$ = o), a !== i._v$2 && t0(r, "fill", i._v$2 = a), i
            }, {
              _v$: void 0,
              _v$2: void 0
            }), t
          })()
        },
        oT = t1('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>'),
        oA = e => {
          let t = nw(),
            n = () => e.fill || t.colors.constant.white;
          return (() => {
            let t = oT.cloneNode(!0),
              r = t.firstChild;
            return tf(i => {
              let o = e.class,
                a = n();
              return o !== i._v$ && t0(t, "class", i._v$ = o), a !== i._v$2 && t0(r, "fill", i._v$2 = a), i
            }, {
              _v$: void 0,
              _v$2: void 0
            }), t
          })()
        },
        oP = t1('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7803 7.21967C25.0732 7.51256 25.0732 7.98744 24.7803 8.28033L11.5303 21.5303C11.2374 21.8232 10.7626 21.8232 10.4697 21.5303L4.21967 15.2803C3.92678 14.9874 3.92678 14.5126 4.21967 14.2197C4.51256 13.9268 4.98744 13.9268 5.28033 14.2197L11 19.9393L23.7197 7.21967C24.0126 6.92678 24.4874 6.92678 24.7803 7.21967Z"></path></svg>'),
        oR = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.secondary;
          return (() => {
            let t = oP.cloneNode(!0),
              r = t.firstChild;
            return tf(i => {
              let o = e.class,
                a = n();
              return o !== i._v$ && t0(t, "class", i._v$ = o), a !== i._v$2 && t0(r, "fill", i._v$2 = a), i
            }, {
              _v$: void 0,
              _v$2: void 0
            }), t
          })()
        },
        oj = t1('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>'),
        oL = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.secondary;
          return (() => {
            let e = oj.cloneNode(!0),
              t = e.firstChild;
            return tf(r => {
              let i = n(),
                o = n();
              return i !== r._v$ && t0(e, "fill", r._v$ = i), o !== r._v$2 && t0(t, "fill", r._v$2 = o), r
            }, {
              _v$: void 0,
              _v$2: void 0
            }), e
          })()
        },
        oM = t1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>'),
        oN = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.secondary;
          return (() => {
            let e = oM.cloneNode(!0),
              t = e.firstChild;
            return tf(() => t0(t, "fill", n())), e
          })()
        },
        oD = {
          m: "16px",
          s: "12px",
          none: "0"
        },
        oI = {
          m: "6px",
          s: "6px",
          none: "0"
        },
        o$ = nk.div`
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${e=>oD[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`,
        oB = nk(i$)`
    width: 20px;
    height: 20px;
    border-radius: ${e=>oI[e.theme.borderRadius]};
`,
        oU = e => tD(iz, {
          get name() {
            return e.labelLine1
          },
          get secondLine() {
            return e.labelLine2
          },
          get icon() {
            return tD(o$, {
              get children() {
                return tD(tW, {
                  each: [0, 1, 2, 3],
                  children: t => tD(oB, {
                    get src() {
                      return e.images[t]
                    }
                  })
                })
              }
            })
          },
          onClick: () => e.onClick()
        }),
        oV = "telegram-wallet",
        oW = {
          TON: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png",
          TG: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png"
        },
        oF = e => {
          let [t] = iL(), n = () => e.wallet.appName === oV ? void 0 : "isPreferred" in e.wallet && e.wallet.isPreferred ? t("walletItem.recent", {}, "Recent") : ek(e.wallet) ? t("walletItem.installed", {}, "Installed") : "Tonkeeper" === e.wallet.name ? t("walletItem.popular", {}, "Popular") : void 0;
          return tm((() => {
            let r = tm(() => e.wallet.appName === oV);
            return () => r() ? tD(iz, {
              get icon() {
                return e.wallet.imageUrl
              },
              get name() {
                return t("walletItem.walletOn", {}, "Wallet On")
              },
              secondLine: "Telegram",
              get badgeUrl() {
                return oW.TG
              },
              onClick: () => e.onClick()
            }) : tD(iz, {
              get icon() {
                return e.wallet.imageUrl
              },
              get name() {
                return e.wallet.name
              },
              get secondLine() {
                return n()
              },
              secondLineColorPrimary: !1,
              onClick: () => e.onClick()
            })
          })())
        },
        oG = nk.div`
    width: 100%;
    overflow-y: auto;
    max-height: ${e=>e.maxHeight};

    scrollbar-width: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    &&::-webkit-scrollbar-track {
        background: transparent;
    }

    &&::-webkit-scrollbar-thumb {
        display: none;
    }
`,
        oH = nk.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${rD("mobile")} {
        width: 100%;
        margin: 0;
    }
`,
        [oK, oz] = tp((null == (O = nI()) ? void 0 : O.innerHeight) || 0);
      nI() && window.addEventListener("resize", () => oz(window.innerHeight));
      let [oq, oZ] = tp(rN("mobile")), oY = () => oZ(rN("mobile"));
      nI() && (window.addEventListener("resize", () => oY()), window.addEventListener("load", () => oY(), {
        once: !0
      }));
      let oJ = e => {
          let [t, n] = tp(!1), r = () => oq() ? 150 : 200, i = () => void 0 !== e.maxHeight ? `${e.maxHeight}px` : `${oK()-r()}px`;
          return [tD(oH, {
            get isShown() {
              return t()
            }
          }), tD(oG, {
            get maxHeight() {
              return i()
            },
            onScroll: e => {
              n(e.target.scrollTop > 0)
            },
            get class() {
              return e.class
            },
            get children() {
              return e.children
            }
          })]
        },
        oQ = nk.a`
    display: block;
    text-decoration: unset;
`,
        oX = e => tD(oQ, tU({
          get href() {
            return e.href
          },
          get target() {
            return e.blank ? "_blank" : "_self"
          },
          get class() {
            return e.class
          }
        }, () => e.blank ? {
          rel: "noreferrer noopener"
        } : {}, {
          get children() {
            return e.children
          }
        })),
        o1 = tv(),
        o0 = t1('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>'),
        o2 = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.primary;
          return (() => {
            let t = o0.cloneNode(!0),
              r = t.firstChild;
            return tf(i => {
              let o = e.class,
                a = n();
              return o !== i._v$ && t0(t, "class", i._v$ = o), a !== i._v$2 && t0(r, "fill", i._v$2 = a), i
            }, {
              _v$: void 0,
              _v$2: void 0
            }), t
          })()
        },
        o5 = t1('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>'),
        o3 = e => {
          let t = nw(),
            n = () => e.fill || t.colors.icon.primary;
          return (() => {
            let e = o5.cloneNode(!0),
              t = e.firstChild,
              r = t.nextSibling;
            return tf(e => {
              let i = n(),
                o = n();
              return i !== e._v$ && t0(t, "fill", e._v$ = i), o !== e._v$2 && t0(r, "fill", e._v$2 = o), e
            }, {
              _v$: void 0,
              _v$2: void 0
            }), e
          })()
        },
        o8 = {
          m: "8px",
          s: "4px",
          none: "0"
        },
        o6 = {
          m: "16px",
          s: "8px",
          none: "0"
        },
        o4 = nk.div`
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>o6[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.primary}
           
    color: ${e=>e.theme.colors.text.primary}
`,
        o7 = nk.ul`
    background-color: ${e=>e.theme.colors.background.primary};
    padding: 8px;
`,
        o9 = nk.button`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${e=>e.theme.colors.background.primary};
    border: none;
    border-radius: ${e=>o8[e.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,
        ae = t1("<li></li>"),
        at = e => tD(iN, {
          get translationKey() {
            return e.translationKey
          },
          fontSize: "15px",
          fontWeight: "590",
          get children() {
            return e.children
          }
        }),
        an = {
          m: "16px",
          s: "8px",
          none: "0"
        },
        ar = nk.div`
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${e=>e.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>an[e.theme.borderRadius]};
`,
        ai = nk.div`
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`,
        ao = nk(iN)`
    margin-top: 4px;
    color: ${e=>e.theme.colors.text.secondary};
`,
        aa = e => {
          let t = rW(e);
          return tD(ar, tU({
            get class() {
              return e.class
            },
            "data-tc-notification": "true"
          }, t, {
            get children() {
              return [tD(ai, {
                get children() {
                  return [tD(iX, {
                    get translationKey() {
                      return e.header.translationKey
                    },
                    get translationValues() {
                      return e.header.translationValues
                    },
                    get children() {
                      return e.children
                    }
                  }), tD(tF, {
                    get when() {
                      return e.text
                    },
                    get children() {
                      return tD(ao, {
                        get translationKey() {
                          return e.text.translationKey
                        },
                        get translationValues() {
                          return e.text.translationValues
                        }
                      })
                    }
                  })]
                }
              }), tm(() => e.icon)]
            }
          }))
        },
        as = nk(oo)`
    align-self: center;
`,
        al = e => {
          let t = tw(o1),
            [n] = iL(),
            r = () => t.wallet && "name" in t.wallet ? t.wallet.name : n("common.yourWallet", {}, "Your wallet");
          return tD(aa, {
            get header() {
              return {
                translationKey: "notifications.confirm.header",
                translationValues: {
                  name: r()
                }
              }
            },
            get class() {
              return e.class
            },
            get icon() {
              return tD(as, {})
            },
            "data-tc-notification-confirm": "true",
            children: "Confirm operation in your wallet"
          })
        },
        ac = nk(ot)`
    margin-top: 2px;
`,
        au = e => tD(aa, {
          header: {
            translationKey: "notifications.transactionCanceled.header"
          },
          text: {
            translationKey: "notifications.transactionCanceled.text"
          },
          get icon() {
            return tD(ac, {
              size: "xs"
            })
          },
          get class() {
            return e.class
          },
          "data-tc-notification-tx-cancelled": "true",
          children: "Transaction cancelled"
        }),
        ad = nk(i4)`
    margin-top: 2px;
`,
        ap = e => tD(aa, {
          header: {
            translationKey: "notifications.transactionSent.header"
          },
          text: {
            translationKey: "notifications.transactionSent.text"
          },
          get icon() {
            return tD(ad, {})
          },
          get class() {
            return e.class
          },
          "data-tc-notification-tx-sent": "true",
          children: "Transaction sent"
        }),
        ah = nm`
    transform: translateY(-8px);
    margin-bottom: 12px;
`,
        af = {
          timeout: 4500
        },
        [ag, am] = tp(null),
        ay = t1('<div data-tc-list-notifications="true"></div>'),
        ab = nk(rF)`
    background-color: ${e=>e.theme.colors.connectButton.background};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${nT(e.theme.colors.constant.black,.16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`,
        av = nk(ab)`
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${e=>e.theme.colors.background.primary};
`,
        aw = nk(rF)`
    min-width: 148px;
    height: 40px;

    background-color: ${e=>e.theme.colors.background.primary};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${nT(e.theme.colors.constant.black,.16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`,
        ax = nk(oo)`
    height: 18px;
    width: 18px;
`,
        ak = nk.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,
        aC = nk(e => {
          let t = tw(o1),
            [n, r] = tp(!1),
            i = () => e7(void 0, null, function*() {
              let e = eK(t.account.address, t.account.chain === b.TESTNET);
              yield iO(e), r(!0), setTimeout(() => r(!1), 1e3)
            }),
            o = () => {
              t.disconnect(), e.onClose()
            };
          return tD(o4, {
            ref(t) {
              let n = e.ref;
              "function" == typeof n ? n(t) : e.ref = t
            },
            get class() {
              return e.class
            },
            "data-tc-dropdown": "true",
            get children() {
              return tD(o7, {
                get children() {
                  return [(() => {
                    let e = ae.cloneNode(!0);
                    return t8(e, tD(o9, {
                      onClick: () => i(),
                      get children() {
                        return [tD(o2, {}), tD(tF, {
                          get when() {
                            return !n()
                          },
                          get children() {
                            return tD(at, {
                              translationKey: "button.dropdown.copy",
                              children: "Copy address"
                            })
                          }
                        }), tD(tF, {
                          get when() {
                            return n()
                          },
                          get children() {
                            return tD(at, {
                              translationKey: "button.dropdown.copied",
                              children: "Address copied!"
                            })
                          }
                        })]
                      }
                    })), e
                  })(), (() => {
                    let e = ae.cloneNode(!0);
                    return t8(e, tD(o9, {
                      onClick: () => o(),
                      get children() {
                        return [tD(o3, {}), tD(at, {
                          translationKey: "button.dropdown.disconnect",
                          children: "Disconnect"
                        })]
                      }
                    })), e
                  })()]
                }
              })
            }
          })
        })`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`,
        aS = nk(e => {
          let t = function(e) {
            let {
              timeout: t
            } = e8(e8({}, af), void 0), [n, r] = tp([]), [i, o] = tp([]);
            return tg(function(e, t, n) {
              let r;
              let i = Array.isArray(e),
                o = n && n.defer;
              return n => {
                let a;
                if (i) {
                  a = Array(e.length);
                  for (let t = 0; t < e.length; t++) a[t] = e[t]()
                } else a = e();
                if (o) {
                  o = !1;
                  return
                }
                let s = ty(() => t(a, r, n));
                return r = a, s
              }
            }(n5, e => {
              var n;
              if (!e || !e.showNotification || ag() === e || (null == (n = ag()) ? void 0 : n.name) === "confirm-transaction" && "confirm-transaction" === e.name) return;
              am(e), r(e => e.filter(e => "confirm-transaction" !== e.action));
              let i = {
                action: e.name
              };
              r(e => [...e, i]);
              let a = setTimeout(() => {
                r(e => e.filter(e => e !== i)), o(e => e.filter(e => e !== a))
              }, t);
              o(e => [...e, a])
            })), tb(() => {
              i().forEach(e => clearTimeout(e))
            }), n
          }();
          return (() => {
            let n = ay.cloneNode(!0);
            return t8(n, tD(rz, {
              onBeforeEnter: e => {
                ir(e, [{
                  opacity: 0,
                  transform: "translateY(0)"
                }, {
                  opacity: 1,
                  transform: "translateY(-8px)"
                }], {
                  duration: 200
                })
              },
              onExit: (e, t) => {
                ir(e, [{
                  opacity: 1,
                  transform: "translateY(-8px)"
                }, {
                  opacity: 0,
                  transform: "translateY(-30px)"
                }], {
                  duration: 200
                }).finished.then(t)
              },
              get children() {
                return tD(tW, {
                  get each() {
                    return t()
                  },
                  children: e => tD(tG, {
                    get children() {
                      return [tD(tH, {
                        get when() {
                          return "transaction-sent" === e.action
                        },
                        get children() {
                          return tD(ap, {
                            class: ah
                          })
                        }
                      }), tD(tH, {
                        get when() {
                          return "transaction-canceled" === e.action
                        },
                        get children() {
                          return tD(au, {
                            class: ah
                          })
                        }
                      }), tD(tH, {
                        get when() {
                          return "confirm-transaction" === e.action
                        },
                        get children() {
                          return tD(al, {
                            class: ah
                          })
                        }
                      })]
                    }
                  })
                })
              }
            })), tf(() => t2(n, e.class)), n
          })()
        })`
    > div:first-child {
        margin-top: 20px;
    }
`;

      function aE(e) {
        return e.split("-")[0]
      }

      function aO(e, t, n) {
        let r, {
            reference: i,
            floating: o
          } = e,
          a = i.x + i.width / 2 - o.width / 2,
          s = i.y + i.height / 2 - o.height / 2,
          l = ["top", "bottom"].includes(aE(t)) ? "x" : "y",
          c = "y" === l ? "height" : "width",
          u = i[c] / 2 - o[c] / 2,
          d = aE(t),
          p = "x" === l;
        switch (d) {
          case "top":
            r = {
              x: a,
              y: i.y - o.height
            };
            break;
          case "bottom":
            r = {
              x: a,
              y: i.y + i.height
            };
            break;
          case "right":
            r = {
              x: i.x + i.width,
              y: s
            };
            break;
          case "left":
            r = {
              x: i.x - o.width,
              y: s
            };
            break;
          default:
            r = {
              x: i.x,
              y: i.y
            }
        }
        switch (t.split("-")[1]) {
          case "start":
            r[l] -= u * (n && p ? -1 : 1);
            break;
          case "end":
            r[l] += u * (n && p ? -1 : 1)
        }
        return r
      }
      let a_ = (e, t, n) => e7(void 0, null, function*() {
        let {
          placement: r = "bottom",
          strategy: i = "absolute",
          middleware: o = [],
          platform: a
        } = n, s = o.filter(Boolean), l = yield null == a.isRTL ? void 0 : a.isRTL(t);
        if ("production" !== ({}).NODE_ENV) {
          if (null == a && console.error("Floating UI: `platform` property was not passed to config. If you want to use Floating UI on the web, install @floating-ui/dom instead of the /core package. Otherwise, you can create your own `platform`: https://floating-ui.com/docs/platform"), s.filter(e => {
              let {
                name: t
              } = e;
              return "autoPlacement" === t || "flip" === t
            }).length > 1) throw Error("Floating UI: duplicate `flip` and/or `autoPlacement` middleware detected. This will lead to an infinite loop. Ensure only one of either has been passed to the `middleware` array.");
          e && t || console.error("Floating UI: The reference and/or floating element was not defined when `computePosition()` was called. Ensure that both elements have been created and can be measured.")
        }
        let c = yield a.getElementRects({
          reference: e,
          floating: t,
          strategy: i
        }), {
          x: u,
          y: d
        } = aO(c, r, l), p = r, h = {}, f = 0;
        for (let n = 0; n < s.length; n++) {
          let {
            name: o,
            fn: g
          } = s[n], {
            x: m,
            y: y,
            data: b,
            reset: v
          } = yield g({
            x: u,
            y: d,
            initialPlacement: r,
            placement: p,
            strategy: i,
            middlewareData: h,
            rects: c,
            platform: a,
            elements: {
              reference: e,
              floating: t
            }
          });
          if (u = null != m ? m : u, d = null != y ? y : d, h = e6(e8({}, h), {
              [o]: e8(e8({}, h[o]), b)
            }), "production" !== ({}).NODE_ENV && f > 50 && console.warn("Floating UI: The middleware lifecycle appears to be running in an infinite loop. This is usually caused by a `reset` continually being returned without a break condition."), v && f <= 50) {
            f++, "object" == typeof v && (v.placement && (p = v.placement), v.rects && (c = !0 === v.rects ? yield a.getElementRects({
              reference: e,
              floating: t,
              strategy: i
            }): v.rects), {
              x: u,
              y: d
            } = aO(c, p, l)), n = -1;
            continue
          }
        }
        return {
          x: u,
          y: d,
          placement: p,
          strategy: i,
          middlewareData: h
        }
      });

      function aT(e) {
        return e6(e8({}, e), {
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height
        })
      }

      function aA(e) {
        var t;
        return (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function aP(e) {
        return aA(e).getComputedStyle(e)
      }

      function aR(e) {
        return aN(e) ? (e.nodeName || "").toLowerCase() : ""
      }

      function aj() {
        if (i) return i;
        let e = navigator.userAgentData;
        return e && Array.isArray(e.brands) ? i = e.brands.map(e => e.brand + "/" + e.version).join(" ") : navigator.userAgent
      }

      function aL(e) {
        return e instanceof aA(e).HTMLElement
      }

      function aM(e) {
        return e instanceof aA(e).Element
      }

      function aN(e) {
        return e instanceof aA(e).Node
      }

      function aD(e) {
        if ("undefined" == typeof ShadowRoot) return !1;
        let t = aA(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot
      }

      function aI(e) {
        let {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: i
        } = aP(e);
        return /auto|scroll|overlay|hidden/.test(t + r + n) && !["inline", "contents"].includes(i)
      }

      function a$(e) {
        let t = /firefox/i.test(aj()),
          n = aP(e),
          r = n.backdropFilter || n.WebkitBackdropFilter;
        return "none" !== n.transform || "none" !== n.perspective || !!r && "none" !== r || t && "filter" === n.willChange || t && !!n.filter && "none" !== n.filter || ["transform", "perspective"].some(e => n.willChange.includes(e)) || ["paint", "layout", "strict", "content"].some(e => {
          let t = n.contain;
          return null != t && t.includes(e)
        })
      }

      function aB() {
        return !/^((?!chrome|android).)*safari/i.test(aj())
      }

      function aU(e) {
        return ["html", "body", "#document"].includes(aR(e))
      }
      let aV = Math.min,
        aW = Math.max,
        aF = Math.round,
        aG = {
          x: 1,
          y: 1
        };

      function aH(e) {
        let t = !aM(e) && e.contextElement ? e.contextElement : aM(e) ? e : null;
        if (!t) return aG;
        let n = t.getBoundingClientRect(),
          r = aP(t);
        if ("border-box" !== r.boxSizing) return aL(t) ? {
          x: t.offsetWidth > 0 && aF(n.width) / t.offsetWidth || 1,
          y: t.offsetHeight > 0 && aF(n.height) / t.offsetHeight || 1
        } : aG;
        let i = n.width / parseFloat(r.width),
          o = n.height / parseFloat(r.height);
        return i && Number.isFinite(i) || (i = 1), o && Number.isFinite(o) || (o = 1), {
          x: i,
          y: o
        }
      }

      function aK(e, t, n, r) {
        var i, o, a, s;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let l = e.getBoundingClientRect(),
          c = aG;
        t && (r ? aM(r) && (c = aH(r)) : c = aH(e));
        let u = aM(e) ? aA(e) : window,
          d = !aB() && n,
          p = (l.left + (d && null != (i = null == (o = u.visualViewport) ? void 0 : o.offsetLeft) ? i : 0)) / c.x,
          h = (l.top + (d && null != (a = null == (s = u.visualViewport) ? void 0 : s.offsetTop) ? a : 0)) / c.y,
          f = l.width / c.x,
          g = l.height / c.y;
        return {
          width: f,
          height: g,
          top: h,
          right: p + f,
          bottom: h + g,
          left: p,
          x: p,
          y: h
        }
      }

      function az(e) {
        return ((aN(e) ? e.ownerDocument : e.document) || window.document).documentElement
      }

      function aq(e) {
        return aM(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        }
      }

      function aZ(e) {
        return aK(az(e)).left + aq(e).scrollLeft
      }

      function aY(e) {
        if ("html" === aR(e)) return e;
        let t = e.assignedSlot || e.parentNode || (aD(e) ? e.host : null) || az(e);
        return aD(t) ? t.host : t
      }

      function aJ(e) {
        return aL(e) && "fixed" !== aP(e).position ? e.offsetParent : null
      }

      function aQ(e) {
        let t = aA(e),
          n = aJ(e);
        for (; n && ["table", "td", "th"].includes(aR(n)) && "static" === aP(n).position;) n = aJ(n);
        return n && ("html" === aR(n) || "body" === aR(n) && "static" === aP(n).position && !a$(n)) ? t : n || function(e) {
          let t = aY(e);
          for (; aL(t) && !aU(t);) {
            if (a$(t)) return t;
            t = aY(t)
          }
          return null
        }(e) || t
      }

      function aX(e, t) {
        var n;
        void 0 === t && (t = []);
        let r = function e(t) {
            let n = aY(t);
            return aU(n) ? t.ownerDocument.body : aL(n) && aI(n) ? n : e(n)
          }(e),
          i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          o = aA(r);
        return i ? t.concat(o, o.visualViewport || [], aI(r) ? r : []) : t.concat(r, aX(r))
      }

      function a1(e, t, n) {
        return "viewport" === t ? aT(function(e, t) {
          let n = aA(e),
            r = az(e),
            i = n.visualViewport,
            o = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            l = 0;
          if (i) {
            o = i.width, a = i.height;
            let e = aB();
            (e || !e && "fixed" === t) && (s = i.offsetLeft, l = i.offsetTop)
          }
          return {
            width: o,
            height: a,
            x: s,
            y: l
          }
        }(e, n)) : aM(t) ? function(e, t) {
          let n = aK(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            i = n.left + e.clientLeft,
            o = aL(e) ? aH(e) : {
              x: 1,
              y: 1
            },
            a = e.clientWidth * o.x,
            s = e.clientHeight * o.y,
            l = i * o.x,
            c = r * o.y;
          return {
            top: c,
            left: l,
            right: l + a,
            bottom: c + s,
            x: l,
            y: c,
            width: a,
            height: s
          }
        }(t, n) : aT(function(e) {
          var t;
          let n = az(e),
            r = aq(e),
            i = null == (t = e.ownerDocument) ? void 0 : t.body,
            o = aW(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
            a = aW(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
            s = -r.scrollLeft + aZ(e),
            l = -r.scrollTop;
          return "rtl" === aP(i || n).direction && (s += aW(n.clientWidth, i ? i.clientWidth : 0) - o), {
            width: o,
            height: a,
            x: s,
            y: l
          }
        }(az(e)))
      }
      let a0 = {
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: i
          } = e, o = [..."clippingAncestors" === n ? function(e, t) {
            let n = t.get(e);
            if (n) return n;
            let r = aX(e).filter(e => aM(e) && "body" !== aR(e)),
              i = null,
              o = "fixed" === aP(e).position,
              a = o ? aY(e) : e;
            for (; aM(a) && !aU(a);) {
              let e = aP(a),
                t = a$(a);
              (o ? t || i : !(!t && "static" === e.position && i && ["absolute", "fixed"].includes(i.position))) ? i = e: r = r.filter(e => e !== a), a = aY(a)
            }
            return t.set(e, r), r
          }(t, this._c) : [].concat(n), r], a = o[0], s = o.reduce((e, n) => {
            let r = a1(t, n, i);
            return e.top = aW(r.top, e.top), e.right = aV(r.right, e.right), e.bottom = aV(r.bottom, e.bottom), e.left = aW(r.left, e.left), e
          }, a1(t, a, i));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            rect: t,
            offsetParent: n,
            strategy: r
          } = e, i = aL(n), o = az(n);
          if (n === o) return t;
          let a = {
              scrollLeft: 0,
              scrollTop: 0
            },
            s = {
              x: 1,
              y: 1
            },
            l = {
              x: 0,
              y: 0
            };
          if ((i || !i && "fixed" !== r) && (("body" !== aR(n) || aI(o)) && (a = aq(n)), aL(n))) {
            let e = aK(n);
            s = aH(n), l.x = e.x + n.clientLeft, l.y = e.y + n.clientTop
          }
          return {
            width: t.width * s.x,
            height: t.height * s.y,
            x: t.x * s.x - a.scrollLeft * s.x + l.x,
            y: t.y * s.y - a.scrollTop * s.y + l.y
          }
        },
        isElement: aM,
        getDimensions: function(e) {
          if (aL(e)) return {
            width: e.offsetWidth,
            height: e.offsetHeight
          };
          let t = aK(e);
          return {
            width: t.width,
            height: t.height
          }
        },
        getOffsetParent: aQ,
        getDocumentElement: az,
        getScale: aH,
        getElementRects(e) {
          return e7(this, null, function*() {
            let {
              reference: t,
              floating: n,
              strategy: r
            } = e, i = this.getOffsetParent || aQ, o = this.getDimensions;
            return {
              reference: function(e, t, n) {
                let r = aL(t),
                  i = az(t),
                  o = aK(e, !0, "fixed" === n, t),
                  a = {
                    scrollLeft: 0,
                    scrollTop: 0
                  },
                  s = {
                    x: 0,
                    y: 0
                  };
                if (r || !r && "fixed" !== n) {
                  if (("body" !== aR(t) || aI(i)) && (a = aq(t)), aL(t)) {
                    let e = aK(t, !0);
                    s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
                  } else i && (s.x = aZ(i))
                }
                return {
                  x: o.left + a.scrollLeft - s.x,
                  y: o.top + a.scrollTop - s.y,
                  width: o.width,
                  height: o.height
                }
              }(t, (yield i(n)), r),
              floating: e8({
                x: 0,
                y: 0
              }, (yield o(n)))
            }
          })
        },
        getClientRects: e => Array.from(e.getClientRects()),
        isRTL: e => "rtl" === aP(e).direction
      };

      function a2(e, t, n, r) {
        let i;
        void 0 === r && (r = {});
        let {
          ancestorScroll: o = !0,
          ancestorResize: a = !0,
          elementResize: s = !0,
          animationFrame: l = !1
        } = r, c = o && !l, u = c || a ? [...aM(e) ? aX(e) : e.contextElement ? aX(e.contextElement) : [], ...aX(t)] : [];
        u.forEach(e => {
          c && e.addEventListener("scroll", n, {
            passive: !0
          }), a && e.addEventListener("resize", n)
        });
        let d = null;
        if (s) {
          let r = !0;
          d = new ResizeObserver(() => {
            r || n(), r = !1
          }), aM(e) && !l && d.observe(e), aM(e) || !e.contextElement || l || d.observe(e.contextElement), d.observe(t)
        }
        let p = l ? aK(e) : null;
        return l && function t() {
          let r = aK(e);
          p && (r.x !== p.x || r.y !== p.y || r.width !== p.width || r.height !== p.height) && n(), p = r, i = requestAnimationFrame(t)
        }(), n(), () => {
          var e;
          u.forEach(e => {
            c && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n)
          }), null == (e = d) || e.disconnect(), d = null, l && cancelAnimationFrame(i)
        }
      }
      let a5 = (e, t, n) => {
          let r = new Map,
            i = e8({
              platform: a0
            }, n),
            o = e6(e8({}, i.platform), {
              _c: r
            });
          return a_(e, t, e6(e8({}, i), {
            platform: o
          }))
        },
        a3 = t1('<tc-root data-tc-dropdown-container="true"></tc-root>'),
        a8 = () => {
          var e;
          let t;
          let n = nw(),
            r = tw(n4),
            i = tw(o1),
            [o, a] = tp(!1),
            [s, l] = tp(r.account),
            [c, u] = tp(!r.account),
            [d, p] = tp(),
            [h, f] = tp(),
            g = function(e, t, n) {
              let r = () => {
                  var e;
                  return null != (e = null == n ? void 0 : n.placement) ? e : "bottom"
                },
                i = () => {
                  var e;
                  return null != (e = null == n ? void 0 : n.strategy) ? e : "absolute"
                },
                [o, a] = tp({
                  x: null,
                  y: null,
                  placement: r(),
                  strategy: i(),
                  middlewareData: {}
                }),
                [s, l] = tp();
              tg(() => {
                let e = s();
                if (e) throw e.value
              });
              let c = tm(() => (e(), t(), {}));

              function u() {
                let o = e(),
                  s = t();
                if (o && s) {
                  let e = c();
                  a5(o, s, {
                    middleware: null == n ? void 0 : n.middleware,
                    placement: r(),
                    strategy: i()
                  }).then(t => {
                    e === c() && a(t)
                  }, e => {
                    l(e)
                  })
                }
              }
              return tg(() => {
                let o = e(),
                  a = t();
                if (null == n || n.middleware, r(), i(), o && a) {
                  if (null != n && n.whileElementsMounted) {
                    let e = n.whileElementsMounted(o, a, u);
                    e && tb(e)
                  } else u()
                }
              }), {
                get x() {
                  return o().x
                },
                get y() {
                  return o().y
                },
                get placement() {
                  return o().placement
                },
                get strategy() {
                  return o().strategy
                },
                get middlewareData() {
                  return o().middlewareData
                },
                update: u
              }
            }(h, d, {
              whileElementsMounted: a2,
              placement: "bottom-end"
            }),
            m = () => {
              let e = s();
              if (e) {
                let t = eK(e.address, e.chain === b.TESTNET);
                return t.slice(0, 4) + "…" + t.slice(-4)
              }
              return ""
            };
          i.connectionRestored.then(() => u(!1));
          let y = r.onStatusChange(e => {
              if (!e) {
                a(!1), l(null), u(!1);
                return
              }
              l(e.account), u(!1)
            }),
            v = e => {
              if (!s() || !o()) return;
              let n = h().contains(e.target),
                r = t.contains(e.target);
              n || r || a(!1)
            };
          return e = () => {
            document.body.addEventListener("click", v)
          }, tg(() => ty(e)), tb(() => {
            document.body.removeEventListener("click", v), y()
          }), tD(ni, {
            component: nS,
            get children() {
              return [tD(tF, {
                get when() {
                  return c()
                },
                get children() {
                  return tD(aw, {
                    disabled: !0,
                    "data-tc-connect-button-loading": "true",
                    get children() {
                      return tD(ax, {})
                    }
                  })
                }
              }), tD(tF, {
                get when() {
                  return !c()
                },
                get children() {
                  return [tD(tF, {
                    get when() {
                      return !s()
                    },
                    get children() {
                      return tD(ab, {
                        onClick: () => i.openModal(),
                        "data-tc-connect-button": "true",
                        scale: "s",
                        get children() {
                          return [tD(i5, {
                            get fill() {
                              return n.colors.connectButton.foreground
                            }
                          }), tD(iN, {
                            translationKey: "button.connectWallet",
                            fontSize: "15px",
                            lineHeight: "18px",
                            fontWeight: "590",
                            get color() {
                              return n.colors.connectButton.foreground
                            },
                            children: "Connect wallet"
                          })]
                        }
                      })
                    }
                  }), tD(tF, {
                    get when() {
                      return s()
                    },
                    get children() {
                      return tD(ak, {
                        get children() {
                          return [tD(av, {
                            onClick: () => a(e => !e),
                            ref: f,
                            "data-tc-dropdown-button": "true",
                            scale: "s",
                            get children() {
                              return [tD(iN, {
                                fontSize: "15px",
                                fontWeight: "590",
                                lineHeight: "18px",
                                get children() {
                                  return m()
                                }
                              }), tD(rQ, {
                                direction: "bottom"
                              })]
                            }
                          }), tD(nr, {
                            get children() {
                              let e = ty(() => document.importNode(a3, !0));
                              return t3(p, e), e.style.setProperty("z-index", "999"), e._$owner = ta, t8(e, tD(rH, {
                                onBeforeEnter: e => {
                                  ir(e, [{
                                    opacity: 0,
                                    transform: "translateY(-8px)"
                                  }, {
                                    opacity: 1,
                                    transform: "translateY(0)"
                                  }], {
                                    duration: 150
                                  })
                                },
                                onExit: (e, t) => {
                                  ir(e, [{
                                    opacity: 1,
                                    transform: "translateY(0)"
                                  }, {
                                    opacity: 0,
                                    transform: "translateY(-8px)"
                                  }], {
                                    duration: 150
                                  }).finished.then(t)
                                },
                                get children() {
                                  return tD(tF, {
                                    get when() {
                                      return o()
                                    },
                                    get children() {
                                      return tD(aC, {
                                        get hidden() {
                                          return !o()
                                        },
                                        onClose: () => a(!1),
                                        ref(e) {
                                          let n = t;
                                          "function" == typeof n ? n(e) : t = e
                                        }
                                      })
                                    }
                                  })
                                }
                              }), null), t8(e, tD(aS, {}), null), tf(t => {
                                var n, r;
                                let i = g.strategy,
                                  o = `${null!=(n=g.y)?n:0}px`,
                                  a = `${null!=(r=g.x)?r:0}px`;
                                return i !== t._v$ && e.style.setProperty("position", t._v$ = i), o !== t._v$2 && e.style.setProperty("top", t._v$2 = o), a !== t._v$3 && e.style.setProperty("left", t._v$3 = a), t
                              }, {
                                _v$: void 0,
                                _v$2: void 0,
                                _v$3: void 0
                              }), e
                            }
                          })]
                        }
                      })
                    }
                  })]
                }
              })]
            }
          })
        },
        a6 = nk(il)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${rD("mobile")} {
        padding-left: 0;
        padding-right: 0;

        min-height: 364px;
    }
`,
        a4 = nk(iZ)`
    margin-top: 12px;

    ${rD("mobile")} {
        padding: 0 10px;
    }
`,
        a7 = nk.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${rD("mobile")} {
        height: 160px;
        align-items: center;
    }
`;
      nk(iN)`
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`, nk(e => {
        let t = "tabBar" + Math.floor(1e4 * Math.random());
        return tD(id, {
          get class() {
            return e.class
          },
          "data-tc-tab-bar": "true",
          get children() {
            return [tD(ip, {
              get right() {
                return 1 === e.selectedTabIndex
              }
            }), tD(ig, {
              get isActive() {
                return 0 === e.selectedTabIndex
              },
              get children() {
                return [tD(ih, {
                  type: "radio",
                  name: t,
                  get checked() {
                    return 0 === e.selectedTabIndex
                  },
                  onInput: () => {
                    var t;
                    return null == (t = e.onSelectedTabIndexChange) ? void 0 : t.call(e, 0)
                  }
                }), tm(() => e.tab1)]
              }
            }), tD(ig, {
              get isActive() {
                return 1 === e.selectedTabIndex
              },
              get children() {
                return [tD(ih, {
                  type: "radio",
                  get checked() {
                    return 1 === e.selectedTabIndex
                  },
                  name: t,
                  onInput: () => {
                    var t;
                    return null == (t = e.onSelectedTabIndexChange) ? void 0 : t.call(e, 1)
                  }
                }), tm(() => e.tab2)]
              }
            })]
          }
        })
      })`
    margin: 0 auto 22px;
`;
      let [a9, se] = rd({
        buttonRootId: null,
        language: "en",
        returnStrategy: "back",
        twaReturnUrl: void 0,
        walletsListConfiguration: {},
        enableAndroidBackHandler: !0
      });

      function st(e) {
        return "jsBridgeKey" in e ? e6(e8({}, e), {
          injected: eH.isWalletInjected(e.jsBridgeKey),
          embedded: eH.isInsideWalletBrowser(e.jsBridgeKey)
        }) : e
      }

      function sn(e, t) {
        var n, r, i, o;
        return t && (null == (n = t.includeWallets) ? void 0 : n.length) && (r = "name", i = e, o = t.includeWallets.map(st), e = i.map(e => {
          let t = o.find(t => t[r] === e[r]);
          return o = o.filter(t => t[r] !== e[r]), void 0 === t ? e : t
        }).concat(o)), e
      }

      function sr(e) {
        return e.platforms.some(e => ["macos", "linux", "windows"].includes(e))
      }

      function si(e) {
        return e.platforms.some(e => ["ios", "android"].includes(e))
      }

      function so(e) {
        return e.platforms.some(e => ["chrome", "firefox", "safari"].includes(e))
      }

      function sa(e, t) {
        return !!t && (e.name.toLowerCase() === t.toLowerCase() || e.appName.toLowerCase() === t.toLowerCase())
      }
      let ss = nk.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,
        sl = nk(iZ)`
    margin-bottom: 18px;
`;
      nk.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${rD("mobile")} {
        width: 100%;
    }
`;
      let sc = nk.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 92px);
    grid-template-rows: auto;
    align-content: flex-start;
    justify-content: center;
    row-gap: 8px;
    width: 100%;
    padding: 0 0 16px;
    align-self: flex-start;
    max-width: 400px;
    margin: 0 auto;

    > li {
        display: block;
        height: fit-content;
    }

    ${rD("mobile")} {
        grid-template-columns: repeat(auto-fit, 82px);
    }
`;
      nk(rF)`
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;
      let su = nk(r2)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
        sd = nk(oF)`
    height: 100%;
`,
        sp = t1("<li></li>"),
        sh = e => {
          let t = () => oq() ? void 0 : 510,
            n = () => oq() ? e.walletsList.filter(si) : e.walletsList;
          return tD(ss, {
            "data-tc-wallets-modal-list": "true",
            get children() {
              return [tD(su, {
                icon: "arrow",
                onClick: () => e.onBack()
              }), tD(sl, {
                translationKey: "walletModal.wallets",
                children: "Wallets"
              }), tD(oJ, {
                get maxHeight() {
                  return t()
                },
                get children() {
                  return tD(sc, {
                    get children() {
                      return tD(tW, {
                        get each() {
                          return n()
                        },
                        children: t => (() => {
                          let n = sp.cloneNode(!0);
                          return t8(n, tD(sd, {
                            wallet: t,
                            onClick: () => e.onSelect(t)
                          })), n
                        })()
                      })
                    }
                  })
                }
              })]
            }
          })
        },
        sf = {
          m: "16px",
          s: "12px",
          none: "0"
        },
        sg = {
          m: "6px",
          s: "6px",
          none: "0"
        },
        sm = nk.div`
    display: flex;
    flex-direction: column;
`,
        sy = nk.div`
    flex: 1;
    margin-top: ${e=>e.qr?"0":"18px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,
        sb = nk(iT)`
    margin-bottom: 24px;
`,
        sv = nk(iZ)`
    max-width: 288px;
    margin: 0 auto 2px;
`,
        sw = nk(iJ)`
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`,
        sx = nk(r2)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
        sk = nk.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,
        sC = nk(sk)`
    padding-bottom: 0;
`,
        sS = nk(rF)`
    margin-bottom: 24px;
`,
        sE = nk(oo)`
    margin-bottom: 18px;
    margin-top: 2px;
`,
        sO = nk(ot)`
    margin-bottom: 16px;
`,
        s_ = nk(iJ)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,
        sT = nk(rF)`
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${e=>sf[e.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`,
        sA = nk(rk)`
    width: 32px;
    height: 32px;
    border-radius: ${e=>sg[e.theme.borderRadius]};
`,
        sP = e => {
          let [t] = iL();
          return tm(() => {
            var n;
            return t(e.translationKey, e.translationValues, null == (n = e.children) ? void 0 : n.toString())
          })
        };

      function sR(e, t) {
        let n = function(e, t, n) {
          let r = new URL(e);
          return r.searchParams.append("ret", n), r.toString()
        }(e, 0, "string" == typeof t ? t : r_() ? t.twaReturnUrl || t.returnStrategy : "none");
        if (!ea(e)) return n;
        let r = n.slice(n.lastIndexOf("&") + 1);
        return n.slice(0, n.lastIndexOf("&")) + "-" + es(r)
      }

      function sj(e, t) {
        t = e8({}, t);
        let n = function(e) {
            let t = new URL(e);
            return t.searchParams.has("attach") && (t.searchParams.delete("attach"), t.pathname += "/start"), t.toString()
          }(e),
          r = new URL(n);
        if (r.searchParams.has("startapp") || r.searchParams.append("startapp", "tonconnect"), rT()) t.returnStrategy = "back", nM(sR(r.toString(), t.returnStrategy));
        else if (r_()) rO("ios", "android", "macos", "tdesktop", "web") ? (t.returnStrategy = "back", rP(sR(r.toString(), t.returnStrategy))) : rO("weba") ? rP(sR(r.toString(), t)) : nM(sR(r.toString(), t));
        else if (nU("ios")) {
          "back" === t.returnStrategy && (nV("safari") ? t.returnStrategy = "back" : nV("chrome") ? t.returnStrategy = "googlechrome://" : nV("firefox") ? t.returnStrategy = "firefox://" : nV("opera") ? t.returnStrategy = "opera-http://" : t.returnStrategy = location.href);
          let e = nV("chrome"),
            n = nV("firefox");
          if ((e || n) && !t.forceRedirect) {
            let e = sR(r.toString(), t.returnStrategy);
            nN(sM(e), () => nM(e))
          } else nM(sR(r.toString(), t.returnStrategy))
        } else if (nU("android")) {
          t.returnStrategy = "back";
          let e = nV("chrome"),
            n = nV("firefox");
          if ((e || n) && !t.forceRedirect) {
            let e = sR(r.toString(), t.returnStrategy);
            nN(sM(e), () => nM(e))
          } else nM(sR(r.toString(), t.returnStrategy))
        } else if (nU("ipad")) {
          "back" === t.returnStrategy && (nV("safari") ? t.returnStrategy = "back" : nV("chrome") ? t.returnStrategy = "googlechrome://" : nV("firefox") ? t.returnStrategy = "firefox://" : nV("opera") ? t.returnStrategy = "opera-http://" : t.returnStrategy = location.href);
          let e = nV("chrome"),
            n = nV("firefox"),
            i = (e || n) && !t.forceRedirect,
            o = sR(r.toString(), t.returnStrategy);
          i ? nN(sM(o), () => nM(o)) : nM(o)
        } else if (nU("macos", "windows", "linux")) {
          t.returnStrategy = "back", t.twaReturnUrl = void 0;
          let e = sR(r.toString(), t.returnStrategy);
          t.forceRedirect ? nM(e) : nN(sM(e), () => nM(e))
        } else nM(sR(r.toString(), t))
      }

      function sL(e, t, n, r) {
        if (n = e8({}, n), rT()) nU("ios", "android") ? ("back" === n.returnStrategy && (n.returnStrategy = "tg://resolve"), r("universal-link"), nL(sR(e, n.returnStrategy), "_self")) : (r("universal-link"), nM(sR(e, n.returnStrategy)));
        else if (r_()) {
          if (rO("ios", "android")) {
            "back" === n.returnStrategy && (n.returnStrategy = "tg://resolve"), r("universal-link");
            let t = sR(e, n.returnStrategy);
            rP(t, () => {
              r("universal-link"), nM(t)
            })
          } else if (rO("macos", "tdesktop")) {
            "back" === n.returnStrategy && (n.returnStrategy = "tg://resolve");
            let i = sR(e, n.returnStrategy);
            t && !n.forceRedirect ? (r("custom-deeplink"), nN(nW(i, t), () => {
              r("universal-link"), nM(i)
            })) : (r("universal-link"), nM(i))
          } else if (rO("weba")) {
            "back" === n.returnStrategy && (nV("safari") ? n.returnStrategy = location.href : nV("chrome") ? n.returnStrategy = "googlechrome://" : nV("firefox") ? n.returnStrategy = "firefox://" : nV("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href);
            let i = sR(e, n.returnStrategy);
            t && !n.forceRedirect ? (r("custom-deeplink"), nN(nW(i, t), () => {
              r("universal-link"), nM(i)
            })) : (r("universal-link"), nM(i))
          } else if (rO("web")) {
            "back" === n.returnStrategy && (nV("safari") ? n.returnStrategy = location.href : nV("chrome") ? n.returnStrategy = "googlechrome://" : nV("firefox") ? n.returnStrategy = "firefox://" : nV("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href);
            let i = sR(e, n.returnStrategy);
            t && !n.forceRedirect ? (r("custom-deeplink"), nN(nW(i, t), () => {
              r("universal-link"), nM(i)
            })) : (r("universal-link"), nM(i))
          } else r("universal-link"), nM(sR(e, n.returnStrategy))
        } else if (nU("ios")) "back" === n.returnStrategy && (nV("safari") ? n.returnStrategy = "none" : nV("chrome") ? n.returnStrategy = "googlechrome://" : nV("firefox") ? n.returnStrategy = "firefox://" : nV("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), nV("chrome") ? (r("universal-link"), nL(sR(e, n.returnStrategy), "_self")) : (r("universal-link"), nM(sR(e, n.returnStrategy)));
        else if (nU("android")) "back" === n.returnStrategy && (nV("chrome") ? n.returnStrategy = "googlechrome://" : nV("firefox") ? n.returnStrategy = "firefox://" : nV("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), r("universal-link"), nM(sR(e, n.returnStrategy));
        else if (nU("ipad")) "back" === n.returnStrategy && (nV("safari") ? n.returnStrategy = "none" : nV("chrome") ? n.returnStrategy = "googlechrome://" : nV("firefox") ? n.returnStrategy = "firefox://" : nV("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), nV("chrome") ? (r("universal-link"), nL(sR(e, n.returnStrategy), "_self")) : (r("universal-link"), nM(sR(e, n.returnStrategy)));
        else if (nU("macos", "windows", "linux")) {
          "back" === n.returnStrategy && (nV("safari") ? n.returnStrategy = "none" : nV("chrome") ? n.returnStrategy = "googlechrome://" : nV("firefox") ? n.returnStrategy = "firefox://" : nV("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = "none");
          let i = sR(e, n.returnStrategy);
          t && !n.forceRedirect ? (r("custom-deeplink"), nN(nW(i, t), () => {
            r("universal-link"), nM(i)
          })) : (r("universal-link"), nM(i))
        } else r("universal-link"), nM(sR(e, n.returnStrategy))
      }

      function sM(e) {
        let t = new URL(e),
          [, n, r] = t.pathname.split("/"),
          i = t.searchParams.get("startapp");
        return `tg://resolve?domain=${n}&appname=${r}&startapp=${i}`
      }
      let sN = e => {
          let [t, n] = tp("mobile"), [r, i] = tp(!1), [o, a] = tp(), [s, l] = tp(!0), c = tw(n4);
          tb(c.onStatusChange(() => {}, () => {
            e.wallet.appName !== oV && i(!0)
          }));
          let u = () => {
            try {
              let t = c.connect({
                universalLink: e.wallet.universalLink,
                bridgeUrl: e.wallet.bridgeUrl
              }, e.additionalRequest);
              a(t)
            } catch (e) {}
          };
          tg(() => {
            "extension" !== ty(t) && (si(e.wallet) || sr(e.wallet)) && u()
          });
          let d = () => {
              i(!1), "extension" === t() && u(), n("mobile"), n2(e6(e8({}, e.wallet), {
                openMethod: "qrcode"
              }))
            },
            p = () => {
              if (i(!1), "extension" === t() && u(), n("desktop"), ea(o())) h();
              else {
                let t = !s();
                l(!1), sL(o(), e.wallet.deepLink, {
                  returnStrategy: a9.returnStrategy,
                  forceRedirect: t
                }, t => {
                  n2(e6(e8({}, e.wallet), {
                    openMethod: t
                  }))
                })
              }
            },
            h = () => {
              let t = !s();
              l(!1), n2(e6(e8({}, e.wallet), {
                openMethod: "universal-link"
              })), sj(o(), {
                returnStrategy: a9.returnStrategy,
                twaReturnUrl: a9.twaReturnUrl,
                forceRedirect: t
              })
            },
            f = () => {
              i(!1), n("extension"), ek(e.wallet) && (n2(e.wallet), c.connect({
                jsBridgeKey: e.wallet.jsBridgeKey
              }, e.additionalRequest))
            };
          return si(e.wallet) ? d() : so(e.wallet) ? f() : p(), tD(sm, {
            "data-tc-wallets-modal-connection-desktop": "true",
            get children() {
              return [tD(tF, {
                get when() {
                  return !e.backDisabled
                },
                get children() {
                  return tD(sx, {
                    icon: "arrow",
                    onClick: () => e.onBackClick()
                  })
                }
              }), tD(sv, {
                get children() {
                  return e.wallet.name
                }
              }), tD(tF, {
                get when() {
                  return "mobile" === t()
                },
                get children() {
                  return tD(sw, {
                    translationKey: "walletModal.desktopConnectionModal.scanQR",
                    get translationValues() {
                      return {
                        name: e.wallet.name
                      }
                    },
                    get children() {
                      return ["Scan the QR code below with your phone’s or ", tm(() => e.wallet.name), "’s camera"]
                    }
                  })
                }
              }), tD(sy, {
                get qr() {
                  return "mobile" === t()
                },
                get children() {
                  return tD(tG, {
                    get children() {
                      return [tD(tH, {
                        get when() {
                          return "mobile" === t()
                        },
                        get children() {
                          return tD(sb, {
                            disableCopy: !1,
                            get sourceUrl() {
                              return sR(o(), "none")
                            },
                            get imageUrl() {
                              return e.wallet.imageUrl
                            }
                          })
                        }
                      }), tD(tH, {
                        get when() {
                          return r()
                        },
                        get children() {
                          return [tD(sO, {
                            size: "s"
                          }), tD(s_, {
                            translationKey: "walletModal.desktopConnectionModal.connectionDeclined",
                            children: "Connection declined"
                          }), tD(sk, {
                            get children() {
                              return tD(rF, {
                                get leftIcon() {
                                  return tD(oy, {})
                                },
                                get onClick() {
                                  return "extension" === t() ? f : p
                                },
                                get children() {
                                  return tD(sP, {
                                    translationKey: "common.retry",
                                    children: "Retry"
                                  })
                                }
                              })
                            }
                          })]
                        }
                      }), tD(tH, {
                        get when() {
                          return "extension" === t()
                        },
                        get children() {
                          return [tD(tF, {
                            get when() {
                              return ek(e.wallet)
                            },
                            get children() {
                              return [tD(sE, {
                                size: "s"
                              }), tD(s_, {
                                translationKey: "walletModal.desktopConnectionModal.continueInExtension",
                                get translationValues() {
                                  return {
                                    name: e.wallet.name
                                  }
                                },
                                get children() {
                                  return ["Continue in ", tm(() => e.wallet.name), " browser extension…"]
                                }
                              }), tD(sk, {
                                get children() {
                                  return tD(rF, {
                                    get leftIcon() {
                                      return tD(oy, {})
                                    },
                                    onClick: f,
                                    get children() {
                                      return tD(sP, {
                                        translationKey: "common.retry",
                                        children: "Retry"
                                      })
                                    }
                                  })
                                }
                              })]
                            }
                          }), tD(tF, {
                            get when() {
                              return !ek(e.wallet)
                            },
                            get children() {
                              return [tD(s_, {
                                translationKey: "walletModal.desktopConnectionModal.dontHaveExtension",
                                get translationValues() {
                                  return {
                                    name: e.wallet.name
                                  }
                                },
                                get children() {
                                  return ["Seems you don't have installed ", tm(() => e.wallet.name), " browser extension"]
                                }
                              }), tD(sk, {
                                get children() {
                                  return tD(oX, {
                                    get href() {
                                      return e.wallet.aboutUrl
                                    },
                                    blank: !0,
                                    get children() {
                                      return tD(rF, {
                                        get rightIcon() {
                                          return tD(ov, {})
                                        },
                                        onClick: f,
                                        get children() {
                                          return tD(sP, {
                                            translationKey: "walletModal.desktopConnectionModal.getWallet",
                                            get translationValues() {
                                              return {
                                                name: e.wallet.name
                                              }
                                            },
                                            get children() {
                                              return ["Get ", tm(() => e.wallet.name)]
                                            }
                                          })
                                        }
                                      })
                                    }
                                  })
                                }
                              })]
                            }
                          })]
                        }
                      }), tD(tH, {
                        get when() {
                          return "desktop" === t()
                        },
                        get children() {
                          return [tD(oo, {
                            size: "m"
                          }), tD(s_, {
                            translationKey: "walletModal.desktopConnectionModal.continueOnDesktop",
                            get translationValues() {
                              return {
                                name: e.wallet.name
                              }
                            },
                            get children() {
                              return ["Continue in ", tm(() => e.wallet.name), " on desktop…"]
                            }
                          }), tD(sk, {
                            get children() {
                              return [tD(rF, {
                                get leftIcon() {
                                  return tD(oy, {})
                                },
                                onClick: p,
                                get children() {
                                  return tD(sP, {
                                    translationKey: "common.retry",
                                    children: "Retry"
                                  })
                                }
                              }), tD(oX, {
                                get href() {
                                  return e.wallet.aboutUrl
                                },
                                blank: !0,
                                get children() {
                                  return tD(rF, {
                                    get rightIcon() {
                                      return tD(ov, {})
                                    },
                                    get children() {
                                      return tD(sP, {
                                        translationKey: "walletModal.desktopConnectionModal.getWallet",
                                        get translationValues() {
                                          return {
                                            name: e.wallet.name
                                          }
                                        },
                                        get children() {
                                          return ["Get ", tm(() => e.wallet.name)]
                                        }
                                      })
                                    }
                                  })
                                }
                              })]
                            }
                          })]
                        }
                      })]
                    }
                  })
                }
              }), tD(tF, {
                get when() {
                  return e.wallet.appName === oV
                },
                get children() {
                  return tD(sT, {
                    get rightIcon() {
                      return tD(sA, {
                        get src() {
                          return oW.TG
                        }
                      })
                    },
                    scale: "s",
                    onClick: h,
                    get children() {
                      return tD(sP, {
                        translationKey: "walletModal.desktopConnectionModal.openWalletOnTelegram",
                        children: "Open Wallet in Telegram on desktop"
                      })
                    }
                  })
                }
              }), tD(tF, {
                get when() {
                  return e.wallet.appName !== oV
                },
                get children() {
                  return tD(sC, {
                    get children() {
                      return [tD(tF, {
                        get when() {
                          return tm(() => "mobile" !== t())() && si(e.wallet)
                        },
                        get children() {
                          return tD(sS, {
                            appearance: "secondary",
                            get leftIcon() {
                              return tD(oh, {})
                            },
                            onClick: d,
                            get children() {
                              return tD(sP, {
                                translationKey: "common.mobile",
                                children: "Mobile"
                              })
                            }
                          })
                        }
                      }), tD(tF, {
                        get when() {
                          return tm(() => "extension" !== t())() && so(e.wallet)
                        },
                        get children() {
                          return tD(sS, {
                            appearance: "secondary",
                            get leftIcon() {
                              return tD(od, {})
                            },
                            onClick: f,
                            get children() {
                              return tD(sP, {
                                translationKey: "common.browserExtension",
                                children: "Browser Extension"
                              })
                            }
                          })
                        }
                      }), tD(tF, {
                        get when() {
                          return tm(() => "desktop" !== t())() && sr(e.wallet)
                        },
                        get children() {
                          return tD(sS, {
                            appearance: "secondary",
                            get leftIcon() {
                              return tD(og, {})
                            },
                            onClick: p,
                            get children() {
                              return tD(sP, {
                                translationKey: "common.desktop",
                                children: "Desktop"
                              })
                            }
                          })
                        }
                      })]
                    }
                  })
                }
              })]
            }
          })
        },
        sD = nk.div``,
        sI = nk(r2)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
        s$ = nk(iZ)`
    margin-bottom: 18px;
`,
        sB = nk.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`,
        sU = nm`
    margin-bottom: 12px;
`,
        sV = nk(iX)`
    text-align: center;
    margin-bottom: 4px;
`,
        sW = nk(iN)`
    text-align: center;
    max-width: 352px;
    color: ${e=>e.theme.colors.text.secondary};
`,
        sF = nk.div`
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`,
        sG = e => tD(sD, {
          "data-tc-wallets-modal-info": "true",
          get children() {
            return [tD(sI, {
              icon: "arrow",
              onClick: () => e.onBackClick()
            }), tD(s$, {
              translationKey: "walletModal.infoModal.whatIsAWallet",
              children: "What is a wallet"
            }), tD(oJ, {
              get children() {
                return [tD(sB, {
                  get children() {
                    return [tD(oC, {
                      class: sU
                    }), tD(sV, {
                      translationKey: "walletModal.infoModal.secureDigitalAssets",
                      children: "Secure digital assets storage"
                    }), tD(sW, {
                      translationKey: "walletModal.infoModal.walletProtects",
                      children: "A wallet protects and manages your digital assets including TON, tokens and collectables."
                    })]
                  }
                }), tD(sB, {
                  get children() {
                    return [tD(oE, {
                      class: sU
                    }), tD(sV, {
                      translationKey: "walletModal.infoModal.controlIdentity",
                      children: "Control your Web3 identity"
                    }), tD(sW, {
                      translationKey: "walletModal.infoModal.manageIdentity",
                      children: "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem."
                    })]
                  }
                }), tD(sB, {
                  get children() {
                    return [tD(o_, {
                      class: sU
                    }), tD(sV, {
                      translationKey: "walletModal.infoModal.effortlessCryptoTransactions",
                      children: "Effortless crypto transactions"
                    }), tD(sW, {
                      translationKey: "walletModal.infoModal.easilySend",
                      children: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications."
                    })]
                  }
                }), tD(sF, {
                  get children() {
                    return tD(oX, {
                      get href() {
                        return "https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1"
                      },
                      blank: !0,
                      get children() {
                        return tD(rF, {
                          get rightIcon() {
                            return tD(ox, {})
                          },
                          get children() {
                            return tD(sP, {
                              translationKey: "walletModal.infoModal.getAWallet",
                              children: "Get a Wallet"
                            })
                          }
                        })
                      }
                    })
                  }
                })]
              }
            })]
          }
        }),
        sH = nk.div``,
        sK = nk.div`
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,
        sz = nk(iZ)`
    max-width: 262px;
    margin: 0 auto 8px;
`,
        sq = nk(r2)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
        sZ = nk.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${e=>nT(e.theme.colors.icon.secondary,.2)};
`,
        sY = nk(rk)`
    width: 36px;
    height: 36px;
    border-radius: 10px;
`,
        sJ = nk(oX)`
    margin-left: auto;
`,
        sQ = nk(oo)`
    margin-bottom: 18px;
    margin-top: 2px;
`,
        sX = nk(ot)`
    margin-bottom: 16px;
`,
        s1 = nk(iJ)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,
        s0 = nk.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,
        s2 = nk(iZ)`
    margin-bottom: 2px;
    padding: 0 64px;
`,
        s5 = nk(iJ)`
    margin-bottom: 20px;
    padding: 0 64px;
    min-height: 44px;
`,
        s3 = nk.div`
    padding: 0 24px 24px;
`,
        s8 = e => [tD(s2, {
          get children() {
            return e.walletInfo.name
          }
        }), tD(s5, {
          translationKey: "walletModal.mobileConnectionModal.scanQR",
          get translationValues() {
            return {
              name: e.walletInfo.name
            }
          },
          get children() {
            return ["Scan the QR code below with your phone’s or ", tm(() => e.walletInfo.name), "’s camera"]
          }
        }), tD(s3, {
          get children() {
            return tD(iT, {
              get imageUrl() {
                return e.walletInfo.imageUrl
              },
              get sourceUrl() {
                return sR(e.universalLink, "none")
              },
              disableCopy: !0
            })
          }
        })],
        s6 = e => {
          let t = nw(),
            [n, r] = tp(!0),
            [i, o] = tp(!1),
            [a, s] = tp(!1),
            l = tw(n4),
            c = l.onStatusChange(() => {}, () => {
              s(!0)
            }),
            u = tm(() => l.connect({
              universalLink: e.wallet.universalLink,
              bridgeUrl: e.wallet.bridgeUrl
            }, e.additionalRequest)),
            d = () => {
              n2(e6(e8({}, e.wallet), {
                openMethod: "universal-link"
              })), sj(u(), {
                returnStrategy: a9.returnStrategy,
                twaReturnUrl: a9.twaReturnUrl,
                forceRedirect: !0
              })
            },
            p = () => {
              if (ea(u())) return d();
              s(!1);
              let t = !n();
              r(!1), sL(u(), e.wallet.deepLink, {
                returnStrategy: a9.returnStrategy,
                forceRedirect: t
              }, t => {
                n2(e6(e8({}, e.wallet), {
                  openMethod: t
                }))
              })
            },
            h = () => {
              s(!1), o(!0), n2(e6(e8({}, e.wallet), {
                openMethod: "qrcode"
              }))
            },
            f = () => {
              o(!1), n2(e6(e8({}, e.wallet), {
                openMethod: "universal-link"
              }))
            },
            g = () => {
              i() ? f() : e.onBackClick()
            };
          return tb(c), p(), tD(sH, {
            "data-tc-wallets-modal-connection-mobile": "true",
            get children() {
              return [tD(tF, {
                get when() {
                  return !e.backDisabled || i()
                },
                get children() {
                  return tD(sq, {
                    icon: "arrow",
                    onClick: g
                  })
                }
              }), tD(tF, {
                get when() {
                  return i()
                },
                get children() {
                  return tD(s8, {
                    get universalLink() {
                      return u()
                    },
                    get walletInfo() {
                      return e.wallet
                    }
                  })
                }
              }), tD(tF, {
                get when() {
                  return !i()
                },
                get children() {
                  return [tD(sz, {
                    get children() {
                      return e.wallet.name
                    }
                  }), tD(sK, {
                    get children() {
                      return [tD(tF, {
                        get when() {
                          return a()
                        },
                        get children() {
                          return [tD(sX, {
                            size: "s"
                          }), tD(s1, {
                            translationKey: "walletModal.mobileConnectionModal.connectionDeclined",
                            children: "Connection declined"
                          }), tD(s0, {
                            get children() {
                              return [tD(rF, {
                                get leftIcon() {
                                  return tD(oy, {})
                                },
                                onClick: p,
                                get children() {
                                  return tD(sP, {
                                    translationKey: "common.retry",
                                    children: "Retry"
                                  })
                                }
                              }), tD(rF, {
                                get leftIcon() {
                                  return tD(oN, {
                                    get fill() {
                                      return t.colors.accent
                                    }
                                  })
                                },
                                onClick: h,
                                get children() {
                                  return tD(sP, {
                                    translationKey: "walletModal.mobileConnectionModal.showQR",
                                    children: "Show QR Code"
                                  })
                                }
                              })]
                            }
                          })]
                        }
                      }), tD(tF, {
                        get when() {
                          return !a()
                        },
                        get children() {
                          return [tD(sQ, {
                            size: "s"
                          }), tD(s1, {
                            translationKey: "walletModal.mobileConnectionModal.continueIn",
                            get translationValues() {
                              return {
                                name: e.wallet.name
                              }
                            },
                            get children() {
                              return ["Continue in ", tm(() => e.wallet.name), "…"]
                            }
                          }), tD(s0, {
                            get children() {
                              return [tD(rF, {
                                get leftIcon() {
                                  return tD(oy, {})
                                },
                                onClick: p,
                                get children() {
                                  return tD(sP, {
                                    translationKey: "common.retry",
                                    children: "Retry"
                                  })
                                }
                              }), tD(rF, {
                                get leftIcon() {
                                  return tD(oN, {
                                    get fill() {
                                      return t.colors.accent
                                    }
                                  })
                                },
                                onClick: h,
                                get children() {
                                  return tD(sP, {
                                    translationKey: "walletModal.mobileConnectionModal.showQR",
                                    children: "Show QR Code"
                                  })
                                }
                              })]
                            }
                          })]
                        }
                      })]
                    }
                  }), tD(sZ, {
                    get children() {
                      return [tD(sY, {
                        get src() {
                          return e.wallet.imageUrl
                        }
                      }), tD(iX, {
                        get children() {
                          return e.wallet.name
                        }
                      }), tD(sJ, {
                        get href() {
                          return e.wallet.aboutUrl
                        },
                        blank: !0,
                        get children() {
                          return tD(rF, {
                            get children() {
                              return tD(sP, {
                                translationKey: "common.get",
                                children: "GET"
                              })
                            }
                          })
                        }
                      })]
                    }
                  })]
                }
              })]
            }
          })
        },
        s4 = {
          m: "16px",
          s: "12px",
          none: "0"
        },
        s7 = {
          m: "6px",
          s: "6px",
          none: "0"
        },
        s9 = nk.ul`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
    max-width: 100%;
    min-width: 100%;
    height: fit-content;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 13px 24px;

    &&::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    > li {
        height: fit-content;
    }
`,
        le = nk.li`
    width: 82px;
    min-width: 82px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;

    text-align: center;
    cursor: pointer;

    transition: transform 0.1s ease-in-out;

    ${r$} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${rI} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
        lt = nk.div`
    width: 1px;
    margin: 0 10px;
    height: 24px;
    position: relative;
    top: 26px;

    background-color: ${e=>e.theme.colors.icon.secondary};
    opacity: 0.2;
`,
        ln = nk.div`
    width: 60px;
    height: 60px;
    border-radius: ${e=>s4[e.theme.borderRadius]};
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${e=>e.theme.colors.background.tint};
    margin-bottom: 8px;
`,
        lr = nk(iZ)`
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`,
        li = nk(iJ)`
    margin-bottom: 24px;
    padding: 0 24px;
    min-height: 44px;
    max-width: ${e=>e.maxWidth}px;
    margin-left: ${e=>e.maxWidth?"auto":"0px"};
    margin-right: ${e=>e.maxWidth?"auto":"0px"};
`;
      nk(rF)`
    display: block;
    margin: 0 auto;
`;
      let lo = nk(rF)`
    margin: 0 24px 24px;
    width: calc(100% - 48px);
    border-radius: ${e=>s4[e.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${e=>e.theme.colors.telegramButton};

    color: ${e=>e.theme.colors.constant.white};
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
`,
        la = nk(rk)`
    background-color: transparent;
    border-radius: ${e=>s7[e.theme.borderRadius]};
    width: 24px;
    height: 24px;
`,
        ls = nk(r2)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
        ll = nk(iZ)`
    margin-bottom: 2px;
    padding: 0 64px;
`,
        lc = nk(iJ)`
    margin-bottom: 20px;
    padding: 0 64px;
`,
        lu = nk.div`
    padding: 0 24px 24px;
`,
        ld = e => [tD(ll, {
          translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
          children: "Connect your wallet"
        }), tD(lc, {
          translationKey: "walletModal.mobileUniversalModal.scan",
          children: "Scan with your mobile wallet"
        }), tD(lu, {
          get children() {
            return tD(iT, {
              get imageUrl() {
                return oW.TON
              },
              get sourceUrl() {
                return sR(e.universalLink, "none")
              },
              disableCopy: !0
            })
          }
        })];

      function lp(e) {
        return Array.from(new Set(e.filter(eS).map(e => e.bridgeUrl))).map(e => ({
          bridgeUrl: e
        }))
      }

      function lh(e, t) {
        let n = new Set(null == e ? void 0 : e.map(e => e.bridgeUrl)),
          r = new Set(null == t ? void 0 : t.map(e => e.bridgeUrl));
        return n.size === r.size && [...n].every(e => r.has(e))
      }
      let lf = t1("<li></li>"),
        lg = t1('<div data-tc-wallets-modal-universal-mobile="true"></div>'),
        lm = e => {
          let [t, n] = tp(!1), [r, i] = tp(!0), [o, a] = tp(null), s = a9.connector, l = () => e.walletsList.filter(e => si(e) && e.appName !== oV), c = () => l().length > 7, u = tm(() => lp(e.walletsList), null, {
            equals: lh
          }), d = () => (o() || a(s.connect(u(), e.additionalRequest)), o());
          n2({
            openMethod: "universal-link"
          });
          let [p, h] = tp(void 0), f = () => e7(void 0, null, function*() {
            void 0 !== p() && clearTimeout(p()), yield iO(d());
            let e = setTimeout(() => h(void 0), 1500);
            h(e)
          }), g = () => {
            let e = !r();
            i(!1), sL(d(), void 0, {
              returnStrategy: a9.returnStrategy,
              forceRedirect: e
            }, e => {
              n2({
                openMethod: e
              })
            })
          }, m = () => {
            a(null);
            let t = e.walletsList.find(e => e.appName === oV);
            if (!t || !eS(t)) throw new nR("@wallet bot not found in the wallets list");
            let n = s.connect({
                bridgeUrl: t.bridgeUrl,
                universalLink: t.universalLink
              }, e.additionalRequest),
              o = !r();
            i(!1), sj(n, {
              returnStrategy: a9.returnStrategy,
              twaReturnUrl: a9.twaReturnUrl,
              forceRedirect: o
            })
          }, y = () => {
            n(!0), n2({
              openMethod: "qrcode"
            })
          }, b = () => {
            n(!1), n2({
              openMethod: "universal-link"
            })
          };
          return (() => {
            let n = lg.cloneNode(!0);
            return t8(n, tD(tF, {
              get when() {
                return t()
              },
              get children() {
                return [tD(ls, {
                  icon: "arrow",
                  onClick: b
                }), tD(ld, {
                  get universalLink() {
                    return d()
                  }
                })]
              }
            }), null), t8(n, tD(tF, {
              get when() {
                return !t()
              },
              get children() {
                return [tD(ls, {
                  get icon() {
                    return tD(oN, {})
                  },
                  onClick: y
                }), tD(lr, {
                  translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
                  children: "Connect your wallet"
                }), tD(li, {
                  translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect",
                  maxWidth: 342,
                  children: "Open Wallet in Telegram or select your wallet to connect"
                }), tD(lo, {
                  get leftIcon() {
                    return tD(oA, {})
                  },
                  get rightIcon() {
                    return tD(la, {
                      get src() {
                        return oW.TG
                      }
                    })
                  },
                  onClick: m,
                  scale: "s",
                  get children() {
                    return tD(sP, {
                      translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegram",
                      children: "Open Wallet in Telegram"
                    })
                  }
                }), tD(s9, {
                  get children() {
                    return [tD(tW, {
                      get each() {
                        return tm(() => !!c())() ? l().slice(0, 4) : l()
                      },
                      children: t => (() => {
                        let n = lf.cloneNode(!0);
                        return t8(n, tD(iz, {
                          get icon() {
                            return t.imageUrl
                          },
                          get name() {
                            return t.name
                          },
                          onClick: () => e.onSelect(t)
                        })), n
                      })()
                    }), tD(tF, {
                      get when() {
                        return c()
                      },
                      get children() {
                        let t = lf.cloneNode(!0);
                        return t8(t, tD(oU, {
                          labelLine1: "View all",
                          labelLine2: "wallets",
                          get images() {
                            return l().slice(3, 7).map(e => e.imageUrl)
                          },
                          onClick: () => e.onSelectAllWallets()
                        })), t
                      }
                    }), tD(lt, {
                      children: "\xa0"
                    }), tD(le, {
                      onClick: g,
                      get children() {
                        return [tD(ln, {
                          get children() {
                            return tD(i0, {})
                          }
                        }), tD(iN, {
                          fontWeight: 590,
                          translationKey: "walletModal.mobileUniversalModal.openLink",
                          children: "Open Link"
                        })]
                      }
                    }), tD(le, {
                      onClick: f,
                      get children() {
                        return [tD(ln, {
                          get children() {
                            return tm(() => void 0 !== p())() ? tD(oR, {}) : tD(oL, {})
                          }
                        }), tD(iN, {
                          fontWeight: 590,
                          get translationKey() {
                            return void 0 !== p() ? "common.copied" : "common.copyLink"
                          },
                          get children() {
                            return void 0 !== p() ? "Copied" : "Copy Link"
                          }
                        })]
                      }
                    })]
                  }
                })]
              }
            }), null), n
          })()
        },
        ly = {
          m: "16px",
          s: "8px",
          none: "0"
        },
        lb = {
          m: "8px",
          s: "4px",
          none: "0"
        },
        lv = nk.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`,
        lw = nk(iJ)`
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`,
        lx = nk(iJ)`
    margin-bottom: 16px;
`,
        lk = nk(iT)`
    margin-bottom: 24px;
`,
        lC = nk.ul`
    display: flex;
`;
      nk.div`
    display: flex;
    gap: 16px;
    width: 100%;
`, nk(rF)`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${e=>ly[e.theme.borderRadius]};

    &:hover {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }

    &:active {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }
`, nk.ul`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>ly[e.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`, nk.li`
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${e=>lb[e.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`, nk(rk)`
    width: 24px;
    height: 24px;

    border-radius: 6px;
`, nk.div`
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`, nk(iN)`
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 16px;
`;
      let lS = t1("<li></li>"),
        lE = e => {
          let [t, n] = tp(!1), r = a9.connector, i = tm(() => lp(e.walletsList), null, {
            equals: lh
          });
          n2({
            openMethod: "qrcode"
          });
          let o = tm(() => r.connect(i(), e.additionalRequest));
          return tD(lv, {
            onClick: () => n(!1),
            "data-tc-wallets-modal-universal-desktop": "true",
            get children() {
              return [tD(iZ, {
                translationKey: "walletModal.desktopUniversalModal.connectYourWallet",
                children: "Connect your wallet"
              }), tD(lw, {
                translationKey: "walletModal.desktopUniversalModal.scan",
                children: "Scan with your mobile wallet"
              }), tD(lk, {
                get sourceUrl() {
                  return sR(o(), "none")
                },
                get disableCopy() {
                  return t()
                },
                get imageUrl() {
                  return oW.TON
                }
              }), tD(lx, {
                translationKey: "walletModal.desktopUniversalModal.availableWallets",
                children: "Available wallets"
              }), tD(lC, {
                get children() {
                  return [tD(tW, {
                    get each() {
                      return e.walletsList.slice(0, 3)
                    },
                    children: t => (() => {
                      let n = lS.cloneNode(!0);
                      return t8(n, tD(oF, {
                        wallet: t,
                        onClick: () => e.onSelect(t)
                      })), n
                    })()
                  }), tD(oU, {
                    labelLine1: "View all",
                    labelLine2: "wallets",
                    get images() {
                      return e.walletsList.slice(3, 7).map(e => e.imageUrl)
                    },
                    onClick: () => e.onSelectAllWallets()
                  })]
                }
              })]
            }
          })
        },
        lO = () => {
          let {
            locale: e
          } = iL()[1];
          tg(() => e(a9.language)), tg(() => {
            nq() ? oY() : (a(null), l("universal"), u(!1))
          });
          let t = tw(n4),
            n = tw(o1),
            [i] = function(e, t, n) {
              let i, o, a;
              2 == arguments.length && "object" == typeof t || 1 == arguments.length ? (i = !0, o = e, a = t || {}) : (i = e, o = t, a = {});
              let s = null,
                l = to,
                c = null,
                u = !1,
                d = "initialValue" in a,
                p = "function" == typeof i && tm(i),
                h = new Set,
                [f, g] = (a.storage || tp)(a.initialValue),
                [m, y] = tp(void 0),
                [b, v] = tp(void 0, {
                  equals: !1
                }),
                [w, x] = tp(d ? "ready" : "unresolved");
              if (e9.context) {
                let e;
                c = `${e9.context.id}${e9.context.count++}`, "initial" === a.ssrLoadFrom ? l = a.initialValue : e9.load && (e = e9.load(c)) && (l = e[0])
              }

              function k(e, t, n, r) {
                return s === e && (s = null, d = !0, (e === l || t === l) && a.onHydrated && queueMicrotask(() => a.onHydrated(r, {
                  value: t
                })), l = to, t_(() => {
                  for (let e of (void 0 === n && g(() => t), x(void 0 !== n ? "errored" : "ready"), y(n), h.keys())) e.decrement();
                  h.clear()
                }, !1)), t
              }

              function C() {
                let e = f(),
                  t = m();
                if (void 0 !== t && !s) throw t;
                return ts && !ts.user && r && th(() => {
                  b(), s && (r.resolved || h.has(r) || (r.increment(), h.add(r)))
                }), e
              }

              function S(e = !0) {
                if (!1 !== e && u) return;
                u = !1;
                let t = p ? p() : i;
                if (null == t || !1 === t) {
                  k(s, ty(f));
                  return
                }
                let n = l !== to ? l : ty(() => o(t, {
                  value: f(),
                  refetching: e
                }));
                return "object" == typeof n && n && "then" in n ? (s = n, u = !0, queueMicrotask(() => u = !1), t_(() => {
                  x(d ? "refreshing" : "pending"), v()
                }, !1), n.then(e => k(n, e, void 0, t), e => k(n, void 0, tj(e), t))) : (k(s, n, void 0, t), n)
              }
              return Object.defineProperties(C, {
                state: {
                  get: () => w()
                },
                error: {
                  get: () => m()
                },
                loading: {
                  get() {
                    let e = w();
                    return "pending" === e || "refreshing" === e
                  }
                },
                latest: {
                  get() {
                    if (!d) return C();
                    let e = m();
                    if (e && !s) throw e;
                    return f()
                  }
                }
              }), p ? th(() => S(!1)) : S(!1), [C, {
                refetch: S,
                mutate: g
              }]
            }(() => n.getWallets()),
            [o, a] = tp(null),
            [s, l] = tp("universal"),
            [c, u] = tp(!1),
            d = tm(() => {
              if ("ready" !== i.state) return null;
              let e = sn(i(), a9.walletsListConfiguration),
                t = e.filter(ek),
                n = e.filter(e => !ek(e));
              e = (t || []).concat(n);
              let r = a9.preferredWalletAppName,
                o = e.find(e => sa(e, r)),
                a = e.filter(e => sa(e, r)).length >= 2;
              r && o && !a && (e = [e6(e8({}, o), {
                isPreferred: !0
              })].concat(e.filter(e => !sa(e, r))));
              let s = e.find(e => sa(e, oV));
              return s && (e = [s].concat(e.filter(e => !sa(e, oV)))), e
            }),
            p = () => {
              var e;
              return (null == (e = a9.connectRequestParameters) ? void 0 : e.state) === "loading"
            },
            h = tm(() => {
              var e;
              if (!p()) return null == (e = a9.connectRequestParameters) ? void 0 : e.value
            }),
            f = e => {
              n.closeModal(e)
            },
            g = t.onStatusChange(e => {
              e && f("wallet-selected")
            }),
            m = () => {
              l("all-wallets")
            },
            y = () => {
              l("universal")
            },
            b = () => {
              a(null)
            };
          return tb(() => {
            a(null), u(!1)
          }), tb(g), tD(a6, {
            get opened() {
              return nq()
            },
            get enableAndroidBackHandler() {
              return a9.enableAndroidBackHandler
            },
            onClose: () => f("action-cancelled"),
            onClickQuestion: () => u(e => !e),
            "data-tc-wallets-modal-container": "true",
            get children() {
              return [tD(tF, {
                get when() {
                  return c()
                },
                get children() {
                  return tD(sG, {
                    onBackClick: () => u(!1)
                  })
                }
              }), tD(tF, {
                get when() {
                  return !c()
                },
                get children() {
                  return [tD(tF, {
                    get when() {
                      return p() || !d()
                    },
                    get children() {
                      return [tD(a4, {
                        translationKey: "walletModal.loading",
                        children: "Wallets list is loading"
                      }), tD(a7, {
                        get children() {
                          return tD(oo, {
                            size: "m"
                          })
                        }
                      })]
                    }
                  }), tD(tF, {
                    get when() {
                      return tm(() => !p())() && d()
                    },
                    get children() {
                      return tD(tG, {
                        get children() {
                          return [tD(tH, {
                            get when() {
                              return o()
                            },
                            get children() {
                              return tD(ni, {
                                get component() {
                                  return oq() ? s6 : sN
                                },
                                get wallet() {
                                  return o()
                                },
                                get additionalRequest() {
                                  return h()
                                },
                                onBackClick: b
                              })
                            }
                          }), tD(tH, {
                            get when() {
                              return "universal" === s()
                            },
                            get children() {
                              return tD(ni, {
                                get component() {
                                  return oq() ? lm : lE
                                },
                                onSelect: a,
                                get walletsList() {
                                  return d()
                                },
                                get additionalRequest() {
                                  return h()
                                },
                                onSelectAllWallets: m
                              })
                            }
                          }), tD(tH, {
                            get when() {
                              return "all-wallets" === s()
                            },
                            get children() {
                              return tD(sh, {
                                get walletsList() {
                                  return d()
                                },
                                onBack: y,
                                onSelect: a
                              })
                            }
                          })]
                        }
                      })
                    }
                  })]
                }
              })]
            }
          })
        },
        l_ = nk.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`,
        lT = nk(iZ)`
    margin-top: 16px;
`,
        lA = nk(iN)`
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${e=>e.theme.colors.text.secondary};
`,
        lP = nk(rF)`
    min-width: 112px;
    margin-top: 32px;
`,
        lR = nk(oo)`
    height: 16px;
    width: 16px;
`,
        lj = nk(rF)`
    margin-top: 32px;
`,
        lL = e => {
          let t, n;
          let r = rW(e),
            i = tw(o1),
            [o, a] = tp(!0),
            [s, l] = tp(!1);
          tg(() => {
            let e = n5();
            l(!!e && "sent" in e && e.sent)
          }), (null == i ? void 0 : i.wallet) && "universalLink" in i.wallet && ("universal-link" === i.wallet.openMethod || ea(i.wallet.universalLink) && r_()) && (t = i.wallet.universalLink), (null == i ? void 0 : i.wallet) && "deepLink" in i.wallet && ("custom-deeplink" === i.wallet.openMethod || ea(i.wallet.deepLink) && r_()) && (n = i.wallet.deepLink);
          let c = () => {
            let e = n5(),
              r = "returnStrategy" in e ? e.returnStrategy : a9.returnStrategy,
              i = !o();
            a(!1), ea(t) ? sj(t, {
              returnStrategy: r,
              twaReturnUrl: "twaReturnUrl" in e ? e.twaReturnUrl : a9.twaReturnUrl,
              forceRedirect: i
            }) : sL(t, n, {
              returnStrategy: r,
              forceRedirect: i
            }, () => {})
          };
          return tD(l_, tU(r, {
            get children() {
              return [tm(() => e.icon), tD(lT, {
                get translationKey() {
                  return e.headerTranslationKey
                },
                get translationValues() {
                  return e.headerTranslationValues
                }
              }), tD(lA, {
                get translationKey() {
                  return e.textTranslationKey
                },
                get translationValues() {
                  return e.textTranslationValues
                }
              }), tD(tF, {
                get when() {
                  return !s() && ("open-wallet" === e.showButton && t || "open-wallet" !== e.showButton)
                },
                get children() {
                  return tD(lP, {
                    disabled: !0,
                    "data-tc-connect-button-loading": "true",
                    get children() {
                      return tD(lR, {})
                    }
                  })
                }
              }), tD(tF, {
                get when() {
                  return s()
                },
                get children() {
                  return [tD(tF, {
                    get when() {
                      return "open-wallet" !== e.showButton
                    },
                    get children() {
                      return tD(lj, {
                        onClick: () => e.onClose(),
                        get children() {
                          return tD(sP, {
                            translationKey: "common.close",
                            children: "Close"
                          })
                        }
                      })
                    }
                  }), tD(tF, {
                    get when() {
                      return "open-wallet" === e.showButton && t
                    },
                    get children() {
                      return tD(lj, {
                        onClick: c,
                        get children() {
                          return tD(sP, {
                            translationKey: "common.openWallet",
                            children: "Open wallet"
                          })
                        }
                      })
                    }
                  })]
                }
              })]
            }
          }))
        },
        lM = e => {
          let t = tw(o1),
            [n] = iL(),
            r = () => t.wallet && "name" in t.wallet ? t.wallet.name : n("common.yourWallet", {}, "Your wallet");
          return tD(lL, {
            headerTranslationKey: "actionModal.confirmTransaction.header",
            get headerTranslationValues() {
              return {
                name: r()
              }
            },
            textTranslationKey: "actionModal.confirmTransaction.text",
            get icon() {
              return tD(oo, {
                size: "m"
              })
            },
            onClose: () => e.onClose(),
            showButton: "open-wallet",
            "data-tc-confirm-modal": "true"
          })
        },
        lN = e => tD(lL, {
          headerTranslationKey: "actionModal.transactionCanceled.header",
          textTranslationKey: "actionModal.transactionCanceled.text",
          get icon() {
            return tD(ot, {
              size: "m"
            })
          },
          onClose: () => e.onClose(),
          "data-tc-transaction-canceled-modal": "true"
        }),
        lD = e => tD(lL, {
          headerTranslationKey: "actionModal.transactionSent.header",
          textTranslationKey: "actionModal.transactionSent.text",
          get icon() {
            return tD(i4, {
              size: "m"
            })
          },
          onClose: () => e.onClose(),
          "data-tc-transaction-sent-modal": "true"
        }),
        lI = () => tD(il, {
          get opened() {
            var e;
            return tm(() => null !== n5())() && (null == (e = n5()) ? void 0 : e.openModal) === !0
          },
          get enableAndroidBackHandler() {
            return a9.enableAndroidBackHandler
          },
          onClose: () => n3(null),
          "data-tc-actions-modal-container": "true",
          get children() {
            return tD(tG, {
              get children() {
                return [tD(tH, {
                  get when() {
                    return "transaction-sent" === n5().name
                  },
                  get children() {
                    return tD(lD, {
                      onClose: () => n3(null)
                    })
                  }
                }), tD(tH, {
                  get when() {
                    return "transaction-canceled" === n5().name
                  },
                  get children() {
                    return tD(lN, {
                      onClose: () => n3(null)
                    })
                  }
                }), tD(tH, {
                  get when() {
                    return "confirm-transaction" === n5().name
                  },
                  get children() {
                    return tD(lM, {
                      onClose: () => n3(null)
                    })
                  }
                })]
              }
            })
          }
        }),
        l$ = () => {
          let {
            locale: e
          } = iL()[1];
          tg(() => e(a9.language)), tg(() => {
            nJ() && oY()
          });
          let t = tw(n4),
            n = tw(o1),
            [r, i] = tp(!1),
            o = () => {
              var e;
              return (null == (e = a9.connectRequestParameters) ? void 0 : e.state) === "loading"
            },
            a = tm(() => {
              var e;
              if (!o()) return null == (e = a9.connectRequestParameters) ? void 0 : e.value
            }),
            s = e => {
              n.closeSingleWalletModal(e)
            };
          return tb(t.onStatusChange(e => {
            e && s("wallet-selected")
          })), tb(() => {
            i(!1)
          }), tD(a6, {
            get opened() {
              return nJ()
            },
            get enableAndroidBackHandler() {
              return a9.enableAndroidBackHandler
            },
            onClose: () => s("action-cancelled"),
            onClickQuestion: () => i(e => !e),
            "data-tc-wallets-modal-container": "true",
            get children() {
              return [tD(tF, {
                get when() {
                  return r()
                },
                get children() {
                  return tD(sG, {
                    onBackClick: () => i(!1)
                  })
                }
              }), tD(tF, {
                get when() {
                  return !r()
                },
                get children() {
                  return [tD(tF, {
                    get when() {
                      return o()
                    },
                    get children() {
                      return [tD(a4, {
                        translationKey: "walletModal.loading",
                        children: "Wallets list is loading"
                      }), tD(a7, {
                        get children() {
                          return tD(oo, {
                            size: "m"
                          })
                        }
                      })]
                    }
                  }), tD(tF, {
                    get when() {
                      return !o()
                    },
                    get children() {
                      return tD(ni, {
                        get component() {
                          return oq() ? s6 : sN
                        },
                        get wallet() {
                          return nQ()
                        },
                        get additionalRequest() {
                          return a()
                        },
                        onBackClick: () => {},
                        backDisabled: !0
                      })
                    }
                  })]
                }
              })]
            }
          })
        },
        lB = e => {
          let t = iR(n8, a9.language);
          return customElements.define(nS, class extends HTMLElement {}), document.body.hasAttribute("ontouchstart") || document.body.setAttribute("ontouchstart", ""), tD(ij.Provider, {
            value: t,
            get children() {
              return tD(o1.Provider, {
                get value() {
                  return e.tonConnectUI
                },
                get children() {
                  return tD(n4.Provider, {
                    get value() {
                      return a9.connector
                    },
                    get children() {
                      return [tD(n_, {}), tD(nv, {
                        theme: rm,
                        get children() {
                          return [tD(tF, {
                            get when() {
                              return a9.buttonRootId
                            },
                            get children() {
                              return tD(nr, {
                                get mount() {
                                  return document.getElementById(a9.buttonRootId)
                                },
                                get children() {
                                  return tD(a8, {})
                                }
                              })
                            }
                          }), tD(ni, {
                            component: nS,
                            get children() {
                              return [tD(lO, {}), tD(l$, {}), tD(lI, {})]
                            }
                          })]
                        }
                      })]
                    }
                  })
                }
              })
            }
          })
        },
        lU = {
          openWalletsModal: () => void setTimeout(() => nz({
            status: "opened",
            closeReason: null
          })),
          closeWalletsModal: e => void setTimeout(() => nz({
            status: "closed",
            closeReason: e
          })),
          openSingleWalletModal: e => {
            setTimeout(() => nY({
              status: "opened",
              closeReason: null,
              walletInfo: e
            }))
          },
          closeSingleWalletModal: e => void setTimeout(() => nY({
            status: "closed",
            closeReason: e
          })),
          setAction: e => void setTimeout(() => n3(e)),
          clearAction: () => void setTimeout(() => n3(null)),
          getSelectedWalletInfo: () => n1(),
          removeSelectedWalletInfo: () => n2(null),
          renderApp: (e, t) => (function(e, t, n, r = {}) {
            let i;
            return td(n => {
              i = n, t === document ? e() : t8(t, e(), t.firstChild ? null : void 0, void 0)
            }, r.owner), () => {
              i(), t.textContent = ""
            }
          })(() => tD(lB, {
            tonConnectUI: t
          }), document.getElementById(e))
        };
      class lV {
        constructor(e) {
          e4(this, "connector"), e4(this, "setConnectRequestParametersCallback"), e4(this, "consumers", []), e4(this, "tracker"), e4(this, "state", nK()), this.connector = e.connector, this.tracker = e.tracker, this.setConnectRequestParametersCallback = e.setConnectRequestParametersCallback, tg(() => {
            let e = nK();
            this.state = e, this.consumers.forEach(t => t(e))
          })
        }
        open() {
          return e7(this, null, function*() {
            this.tracker.trackConnectionStarted();
            let e = (yield this.connector.getWallets()).find(eC);
            return e ? this.connectEmbeddedWallet(e) : this.openWalletsModal()
          })
        }
        close(e = "action-cancelled") {
          "action-cancelled" === e && this.tracker.trackConnectionError("Connection was cancelled"), lU.closeWalletsModal(e)
        }
        onStateChange(e) {
          return this.consumers.push(e), () => {
            this.consumers = this.consumers.filter(t => t !== e)
          }
        }
        connectEmbeddedWallet(e) {
          let t = t => {
              n2(e), this.connector.connect({
                jsBridgeKey: e.jsBridgeKey
              }, t)
            },
            n = a9.connectRequestParameters;
          (null == n ? void 0 : n.state) === "loading" ? this.setConnectRequestParametersCallback(t): t(null == n ? void 0 : n.value)
        }
        openWalletsModal() {
          return e7(this, null, function*() {
            return r_() && rA(), lU.openWalletsModal(), new Promise(e => {
              let t = this.onStateChange(n => {
                let {
                  status: r
                } = n;
                "opened" === r && (t(), e())
              })
            })
          })
        }
      }
      class lW {
        constructor(e) {
          e4(this, "connector"), e4(this, "consumers", []), this.connector = e.connector, tg(() => {
            let e = n5();
            this.consumers.forEach(t => t(e))
          })
        }
        onStateChange(e) {
          return this.consumers.push(e), () => {
            this.consumers = this.consumers.filter(t => t !== e)
          }
        }
      }
      class lF {
        constructor(e) {
          e4(this, "connector"), e4(this, "setConnectRequestParametersCallback"), e4(this, "consumers", []), e4(this, "tracker"), e4(this, "state", nZ()), this.connector = e.connector, this.tracker = e.tracker, this.setConnectRequestParametersCallback = e.setConnectRequestParametersCallback, tg(() => {
            let e = nZ();
            this.state = e, this.consumers.forEach(t => t(e))
          })
        }
        open(e) {
          return e7(this, null, function*() {
            this.tracker.trackConnectionStarted();
            let t = sn((yield this.connector.getWallets()), a9.walletsListConfiguration),
              n = t.find(eC);
            if (n) return this.connectEmbeddedWallet(n);
            let r = t.filter(eS).find(t => sa(t, e));
            if (r) return this.openSingleWalletModal(r);
            let i = `Trying to open modal window with unknown wallet "${e}".`;
            throw this.tracker.trackConnectionError(i), new nR(i)
          })
        }
        close(e = "action-cancelled") {
          "action-cancelled" === e && this.tracker.trackConnectionError("Connection was cancelled"), lU.closeSingleWalletModal("action-cancelled")
        }
        onStateChange(e) {
          return this.consumers.push(e), () => {
            this.consumers = this.consumers.filter(t => t !== e)
          }
        }
        connectEmbeddedWallet(e) {
          let t = t => {
              n2(e), this.connector.connect({
                jsBridgeKey: e.jsBridgeKey
              }, t)
            },
            n = a9.connectRequestParameters;
          (null == n ? void 0 : n.state) === "loading" ? this.setConnectRequestParametersCallback(t): t(null == n ? void 0 : n.value)
        }
        openSingleWalletModal(e) {
          return e7(this, null, function*() {
            return r_() && rA(), lU.openSingleWalletModal(e), new Promise(e => {
              let t = this.onStateChange(n => {
                let {
                  status: r
                } = n;
                "opened" === r && (t(), e())
              })
            })
          })
        }
      }
      class lG {
        constructor(e) {
          var t;
          e4(this, "eventPrefix", "ton-connect-ui-"), e4(this, "tonConnectUiVersion"), e4(this, "tonConnectSdkVersion", null), e4(this, "eventDispatcher"), this.eventDispatcher = null != (t = null == e ? void 0 : e.eventDispatcher) ? t : new eF, this.tonConnectUiVersion = e.tonConnectUiVersion, this.init().catch()
        }
        get version() {
          return eP({
            ton_connect_sdk_lib: this.tonConnectSdkVersion,
            ton_connect_ui_lib: this.tonConnectUiVersion
          })
        }
        init() {
          return e7(this, null, function*() {
            try {
              yield this.setRequestVersionHandler(), this.tonConnectSdkVersion = yield this.requestTonConnectSdkVersion()
            } catch (e) {}
          })
        }
        setRequestVersionHandler() {
          return e7(this, null, function*() {
            yield this.eventDispatcher.addEventListener("ton-connect-ui-request-version", () => e7(this, null, function*() {
              yield this.eventDispatcher.dispatchEvent("ton-connect-ui-response-version", eA(this.tonConnectUiVersion))
            }))
          })
        }
        requestTonConnectSdkVersion() {
          return e7(this, null, function*() {
            return new Promise((e, t) => e7(this, null, function*() {
              try {
                yield this.eventDispatcher.addEventListener("ton-connect-response-version", t => {
                  e(t.detail.version)
                }, {
                  once: !0
                }), yield this.eventDispatcher.dispatchEvent("ton-connect-request-version", eT())
              } catch (e) {
                t(e)
              }
            }))
          })
        }
        dispatchUserActionEvent(e) {
          var t;
          try {
            null == (t = this.eventDispatcher) || t.dispatchEvent(`${this.eventPrefix}${e.type}`, e).catch()
          } catch (e) {}
        }
        trackConnectionStarted(...e) {
          try {
            let t = ej(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackConnectionCompleted(...e) {
          try {
            let t = eL(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackConnectionError(...e) {
          try {
            let t = eM(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackConnectionRestoringStarted(...e) {
          try {
            let t = eN(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackConnectionRestoringCompleted(...e) {
          try {
            let t = eD(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackConnectionRestoringError(...e) {
          try {
            let t = eI(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackDisconnection(...e) {
          try {
            let t = eW(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackTransactionSentForSignature(...e) {
          try {
            let t = eB(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackTransactionSigned(...e) {
          try {
            let t = eU(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
        trackTransactionSigningFailed(...e) {
          try {
            let t = eV(this.version, ...e);
            this.dispatchUserActionEvent(t)
          } catch (e) {}
        }
      }
      class lH {
        constructor(e) {
          if (e4(this, "walletInfoStorage", new nF), e4(this, "preferredWalletStorage", new nG), e4(this, "tracker"), e4(this, "walletInfo", null), e4(this, "systemThemeChangeUnsubscribe", null), e4(this, "actionsConfiguration"), e4(this, "walletsList"), e4(this, "connectRequestParametersCallback"), e4(this, "connector"), e4(this, "modal"), e4(this, "singleWalletModal"), e4(this, "transactionModal"), e4(this, "connectionRestored", Promise.resolve(!1)), e && "connector" in e && e.connector) this.connector = e.connector;
          else if (e && "manifestUrl" in e && e.manifestUrl) this.connector = new eH({
            manifestUrl: e.manifestUrl,
            eventDispatcher: null == e ? void 0 : e.eventDispatcher
          });
          else throw new nR("You have to specify a `manifestUrl` or a `connector` in the options.");
          this.tracker = new lG({
            eventDispatcher: null == e ? void 0 : e.eventDispatcher,
            tonConnectUiVersion: "2.0.9"
          }), this.modal = new lV({
            connector: this.connector,
            tracker: this.tracker,
            setConnectRequestParametersCallback: e => {
              this.connectRequestParametersCallback = e
            }
          }), this.singleWalletModal = new lF({
            connector: this.connector,
            tracker: this.tracker,
            setConnectRequestParametersCallback: e => {
              this.connectRequestParametersCallback = e
            }
          }), this.transactionModal = new lW({
            connector: this.connector
          }), this.walletsList = this.getWallets(), this.walletsList.then(e => {
            var t;
            return function e(t) {
              "complete" !== document.readyState ? window.addEventListener("load", () => nD(() => e(t)), {
                once: !0
              }) : t.forEach(e => {
                new window.Image().src = e
              })
            }((t = e.map(e => e.imageUrl), [...new Set(t)]))
          });
          let t = this.normalizeWidgetRoot(null == e ? void 0 : e.widgetRootId);
          this.subscribeToWalletChange(), (null == e ? void 0 : e.restoreConnection) !== !1 && (this.connectionRestored = function(e) {
            return e7(this, null, function*() {
              return yield new Promise(e => requestAnimationFrame(e)), e()
            })
          }(() => e7(this, null, function*() {
            return this.tracker.trackConnectionRestoringStarted(), yield this.connector.restoreConnection(), this.connector.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : (this.tracker.trackConnectionRestoringError("Connection was not restored"), this.walletInfoStorage.removeWalletInfo()), this.connector.connected
          }))), this.uiOptions = rg(e, {
            uiPreferences: {
              theme: "SYSTEM"
            }
          });
          let n = this.preferredWalletStorage.getPreferredWalletAppName();
          se({
            connector: this.connector,
            preferredWalletAppName: n
          }), lU.renderApp(t, this)
        }
        static getWallets() {
          return eH.getWallets()
        }
        get connected() {
          return this.connector.connected
        }
        get account() {
          return this.connector.account
        }
        get wallet() {
          return this.connector.wallet ? e8(e8({}, this.connector.wallet), this.walletInfo) : null
        }
        set uiOptions(e) {
          var t, n, r, i, o, a;
          (this.checkButtonRootExist(e.buttonRootId), this.actionsConfiguration = e.actionsConfiguration, null == (t = e.uiPreferences) ? void 0 : t.theme) ? (null == (n = e.uiPreferences) ? void 0 : n.theme) !== "SYSTEM" ? (null == (r = this.systemThemeChangeUnsubscribe) || r.call(this), rw(e.uiPreferences.theme, e.uiPreferences.colorsSet)) : (rw(window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? no.LIGHT : no.DARK, e.uiPreferences.colorsSet), this.systemThemeChangeUnsubscribe || (this.systemThemeChangeUnsubscribe = function(e) {
            let t = t => e(t.matches ? no.DARK : no.LIGHT);
            return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", t), () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", t)
          }(rw))) : (null == (i = e.uiPreferences) ? void 0 : i.colorsSet) && (a = e.uiPreferences.colorsSet, rv[no.DARK] = rg(a[no.DARK], rv[no.DARK]), rv[no.LIGHT] = rg(a[no.LIGHT], rv[no.LIGHT]), ry(e => ({
            colors: rg(rv[e.theme], rb[e.theme])
          }))), (null == (o = e.uiPreferences) ? void 0 : o.borderRadius) && ry({
            borderRadius: e.uiPreferences.borderRadius
          }), se(t => {
            var n, r;
            let i = rg(e8(e8(e8(e8({}, e.language && {
              language: e.language
            }), !!(null == (n = e.actionsConfiguration) ? void 0 : n.returnStrategy) && {
              returnStrategy: e.actionsConfiguration.returnStrategy
            }), !!(null == (r = e.actionsConfiguration) ? void 0 : r.twaReturnUrl) && {
              twaReturnUrl: e.actionsConfiguration.twaReturnUrl
            }), !!e.walletsListConfiguration && {
              walletsListConfiguration: e.walletsListConfiguration
            }), rr(t));
            return void 0 !== e.buttonRootId && (i.buttonRootId = e.buttonRootId), void 0 !== e.enableAndroidBackHandler && (i.enableAndroidBackHandler = e.enableAndroidBackHandler), i
          })
        }
        setConnectRequestParameters(e) {
          var t;
          se({
            connectRequestParameters: e
          }), (null == e ? void 0 : e.state) !== "ready" && e || null == (t = this.connectRequestParametersCallback) || t.call(this, null == e ? void 0 : e.value)
        }
        getWallets() {
          return e7(this, null, function*() {
            return this.connector.getWallets()
          })
        }
        onStatusChange(e, t) {
          return this.connector.onStatusChange(t => e7(this, null, function*() {
            if (t) {
              let n = yield this.getSelectedWalletInfo(t);
              e(e8(e8({}, t), n || this.walletInfoStorage.getWalletInfo()))
            } else e(t)
          }), t)
        }
        openModal() {
          return e7(this, null, function*() {
            return this.modal.open()
          })
        }
        closeModal(e) {
          this.modal.close(e)
        }
        onModalStateChange(e) {
          return this.modal.onStateChange(e)
        }
        get modalState() {
          return this.modal.state
        }
        openSingleWalletModal(e) {
          return e7(this, null, function*() {
            return this.singleWalletModal.open(e)
          })
        }
        closeSingleWalletModal(e) {
          this.singleWalletModal.close(e)
        }
        onSingleWalletModalStateChange(e) {
          return this.singleWalletModal.onStateChange(e)
        }
        get singleWalletModalState() {
          return this.singleWalletModal.state
        }
        connectWallet() {
          return e7(this, null, function*() {
            let e = (yield this.getWallets()).find(eC);
            return e ? yield this.connectEmbeddedWallet(e): yield this.connectExternalWallet()
          })
        }
        disconnect() {
          return this.tracker.trackDisconnection(this.wallet, "dapp"), lU.clearAction(), lU.removeSelectedWalletInfo(), this.walletInfoStorage.removeWalletInfo(), this.connector.disconnect()
        }
        sendTransaction(e, t) {
          return e7(this, null, function*() {
            if (this.tracker.trackTransactionSentForSignature(this.wallet, e), !this.connected) throw this.tracker.trackTransactionSigningFailed(this.wallet, e, "Wallet was not connected"), new nR("Connect wallet to send a transaction.");
            r_() && rA();
            let {
              notifications: n,
              modals: r,
              returnStrategy: i,
              twaReturnUrl: o,
              skipRedirectToWallet: a
            } = this.getModalsAndNotificationsConfiguration(t);
            lU.setAction({
              name: "confirm-transaction",
              showNotification: n.includes("before"),
              openModal: r.includes("before"),
              sent: !1
            });
            let s = new AbortController,
              l = this.onTransactionModalStateChange(e => {
                (null == e || !e.openModal) && (l(), e || s.abort())
              });
            try {
              let t = yield this.waitForSendTransaction({
                transaction: e,
                signal: s.signal
              }, () => {
                !s.signal.aborted && (lU.setAction({
                  name: "confirm-transaction",
                  showNotification: n.includes("before"),
                  openModal: r.includes("before"),
                  sent: !0
                }), this.walletInfo && "universalLink" in this.walletInfo && ("universal-link" === this.walletInfo.openMethod || "custom-deeplink" === this.walletInfo.openMethod) && (ea(this.walletInfo.universalLink) ? sj(this.walletInfo.universalLink, {
                  returnStrategy: i,
                  twaReturnUrl: o || a9.twaReturnUrl,
                  forceRedirect: !1
                }) : sL(this.walletInfo.universalLink, this.walletInfo.deepLink, {
                  returnStrategy: i,
                  forceRedirect: !1
                }, () => {})))
              });
              return this.tracker.trackTransactionSigned(this.wallet, e, t), lU.setAction({
                name: "transaction-sent",
                showNotification: n.includes("success"),
                openModal: r.includes("success")
              }), t
            } catch (e) {
              if (lU.setAction({
                  name: "transaction-canceled",
                  showNotification: n.includes("error"),
                  openModal: r.includes("error")
                }), e instanceof I) throw e;
              throw console.error(e), new nR("Unhandled error:" + e)
            } finally {
              l()
            }
          })
        }
        connectEmbeddedWallet(e) {
          return e7(this, null, function*() {
            let t = t => {
                n2(e), this.connector.connect({
                  jsBridgeKey: e.jsBridgeKey
                }, t)
              },
              n = a9.connectRequestParameters;
            return (null == n ? void 0 : n.state) === "loading" ? this.connectRequestParametersCallback = t : t(null == n ? void 0 : n.value), yield this.waitForWalletConnection({
              ignoreErrors: !1
            })
          })
        }
        connectExternalWallet() {
          return e7(this, null, function*() {
            let e = new AbortController;
            lU.openWalletsModal();
            let t = this.onModalStateChange(n => {
              let {
                status: r,
                closeReason: i
              } = n;
              "opened" !== r && (t(), "action-cancelled" === i && e.abort())
            });
            return yield this.waitForWalletConnection({
              ignoreErrors: !0,
              signal: e.signal
            })
          })
        }
        waitForWalletConnection(e) {
          return e7(this, null, function*() {
            return new Promise((t, n) => {
              this.tracker.trackConnectionStarted();
              let {
                ignoreErrors: r = !1,
                signal: i = null
              } = e;
              if (i && i.aborted) return this.tracker.trackConnectionError("Connection was cancelled"), n(new nR("Wallet was not connected"));
              let o = e => e7(this, null, function*() {
                  if (e) this.tracker.trackConnectionCompleted(e), s(), t(e);
                  else {
                    if (this.tracker.trackConnectionError("Connection was cancelled"), r) return;
                    s(), n(new nR("Wallet was not connected"))
                  }
                }),
                a = e => {
                  this.tracker.trackConnectionError(e.message), r || (s(), n(e))
                },
                s = this.onStatusChange(e => o(e), e => a(e));
              i && i.addEventListener("abort", () => {
                s(), n(new nR("Wallet was not connected"))
              }, {
                once: !0
              })
            })
          })
        }
        waitForSendTransaction(e, t) {
          return e7(this, null, function*() {
            return new Promise((n, r) => {
              let {
                transaction: i,
                signal: o
              } = e;
              if (o.aborted) return this.tracker.trackTransactionSigningFailed(this.wallet, i, "Transaction was cancelled"), r(new nR("Transaction was not sent"));
              let a = e => e7(this, null, function*() {
                  n(e)
                }),
                s = e => {
                  r(e)
                },
                l = () => {
                  this.tracker.trackTransactionSigningFailed(this.wallet, i, "Transaction was cancelled"), r(new nR("Transaction was not sent"))
                };
              o.addEventListener("abort", l, {
                once: !0
              }), this.connector.sendTransaction(i, {
                onRequestSent: t,
                signal: o
              }).then(e => (o.removeEventListener("abort", l), a(e))).catch(e => (o.removeEventListener("abort", l), s(e)))
            })
          })
        }
        onTransactionModalStateChange(e) {
          return this.transactionModal.onStateChange(e)
        }
        subscribeToWalletChange() {
          this.connector.onStatusChange(e => e7(this, null, function*() {
            var t;
            e ? (yield this.updateWalletInfo(e), this.setPreferredWalletAppName((null == (t = this.walletInfo) ? void 0 : t.appName) || e.device.appName)) : this.walletInfoStorage.removeWalletInfo()
          }))
        }
        setPreferredWalletAppName(e) {
          this.preferredWalletStorage.setPreferredWalletAppName(e), se({
            preferredWalletAppName: e
          })
        }
        getSelectedWalletInfo(e) {
          return e7(this, null, function*() {
            let t, n = lU.getSelectedWalletInfo();
            if (!n) return null;
            if ("name" in n) t = n;
            else {
              let r = sn((yield this.walletsList), a9.walletsListConfiguration).find(t => sa(t, e.device.appName));
              if (!r) throw new nR(`Cannot find WalletInfo for the '${e.device.appName}' wallet`);
              t = e8(e8({}, r), n)
            }
            return t
          })
        }
        updateWalletInfo(e) {
          return e7(this, null, function*() {
            let t = yield this.getSelectedWalletInfo(e);
            if (t) {
              this.walletInfo = t, this.walletInfoStorage.setWalletInfo(t);
              return
            }
            let n = this.walletInfoStorage.getWalletInfo();
            if (n) {
              this.walletInfo = n;
              return
            }
            this.walletInfo = (yield this.walletsList).find(t => sa(t, e.device.appName)) || null
          })
        }
        normalizeWidgetRoot(e) {
          if (!e || !document.getElementById(e)) {
            e = "tc-widget-root";
            let t = document.createElement("div");
            t.id = e, document.body.appendChild(t)
          }
          return e
        }
        checkButtonRootExist(e) {
          if (null != e && !document.getElementById(e)) throw new nR(`${e} element not found in the document.`)
        }
        getModalsAndNotificationsConfiguration(e) {
          var t, n, r, i, o, a;
          let s = ["before", "success", "error"],
            l = s;
          (null == (t = this.actionsConfiguration) ? void 0 : t.notifications) && (null == (n = this.actionsConfiguration) ? void 0 : n.notifications) !== "all" && (l = this.actionsConfiguration.notifications), (null == e ? void 0 : e.notifications) && (l = "all" === e.notifications ? s : e.notifications);
          let c = ["before"];
          (null == (r = this.actionsConfiguration) ? void 0 : r.modals) && (c = "all" === this.actionsConfiguration.modals ? s : this.actionsConfiguration.modals), (null == e ? void 0 : e.modals) && (c = "all" === e.modals ? s : e.modals);
          let u = (null == e ? void 0 : e.returnStrategy) || (null == (i = this.actionsConfiguration) ? void 0 : i.returnStrategy) || "back",
            d = (null == e ? void 0 : e.twaReturnUrl) || (null == (o = this.actionsConfiguration) ? void 0 : o.twaReturnUrl),
            p = (null == e ? void 0 : e.skipRedirectToWallet) || (null == (a = this.actionsConfiguration) ? void 0 : a.skipRedirectToWallet) || "ios";
          return r_() && (p = "never"), {
            notifications: l,
            modals: c,
            returnStrategy: u,
            twaReturnUrl: d,
            skipRedirectToWallet: p
          }
        }
      }
      var lK = Object.defineProperty,
        lz = Object.getOwnPropertySymbols,
        lq = Object.prototype.hasOwnProperty,
        lZ = Object.prototype.propertyIsEnumerable,
        lY = (e, t, n) => t in e ? lK(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n
        }) : e[t] = n,
        lJ = (e, t) => {
          for (var n in t || (t = {})) lq.call(t, n) && lY(e, n, t[n]);
          if (lz)
            for (var n of lz(t)) lZ.call(t, n) && lY(e, n, t[n]);
          return e
        },
        lQ = (e, t) => {
          var n = {};
          for (var r in e) lq.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
          if (null != e && lz)
            for (var r of lz(e)) 0 > t.indexOf(r) && lZ.call(e, r) && (n[r] = e[r]);
          return n
        },
        lX = {
          exports: {}
        },
        l1 = {};
      lX.exports = function() {
        if (_) return l1;
        _ = 1;
        var e = Symbol.for("react.element"),
          t = Symbol.for("react.fragment"),
          n = Object.prototype.hasOwnProperty,
          r = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          i = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
          };

        function o(t, o, a) {
          var s, l = {},
            c = null,
            u = null;
          for (s in void 0 !== a && (c = "" + a), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) n.call(o, s) && !i.hasOwnProperty(s) && (l[s] = o[s]);
          if (t && t.defaultProps)
            for (s in o = t.defaultProps) void 0 === l[s] && (l[s] = o[s]);
          return {
            $$typeof: e,
            type: t,
            key: c,
            ref: u,
            props: l,
            _owner: r.current
          }
        }
        return l1.Fragment = t, l1.jsx = o, l1.jsxs = o, l1
      }();
      let l0 = lX.exports.jsx;

      function l2() {
        return "undefined" != typeof window
      }
      let l5 = (0, T.createContext)(null),
        l3 = null,
        l8 = (0, T.memo)(e => {
          var {
            children: t
          } = e, n = lQ(e, ["children"]);
          return l2() && !l3 && (l3 = new lH(n)), l0(l5.Provider, {
            value: l3,
            children: t
          })
        });
      class l6 extends nR {
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, l6.prototype)
        }
      }
      class l4 extends l6 {
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, l4.prototype)
        }
      }

      function l7() {
        let e = (0, T.useContext)(l5),
          t = (0, T.useCallback)(t => {
            e && (e.uiOptions = t)
          }, [e]);
        return l2() ? (! function(e) {
          if (!e) throw new l4("You should add <TonConnectUIProvider> on the top of the app to use TonConnect")
        }(e), [e, t]) : [null, () => {}]
      }
      let l9 = "ton-connect-button";
      (0, T.memo)(({
        className: e,
        style: t
      }) => {
        let [n, r] = l7();
        return (0, T.useEffect)(() => (r({
          buttonRootId: l9
        }), () => r({
          buttonRootId: null
        })), [r]), l0("div", {
          id: l9,
          className: e,
          style: lJ({
            width: "fit-content"
          }, t)
        })
      })
    },
    5007: function(e, t, n) {
      "use strict";
      n.d(t, {
        I0: function() {
          return b
        },
        v9: function() {
          return p
        },
        zt: function() {
          return g
        }
      });
      var r = n(7294),
        i = n(1103),
        o = Symbol.for("react-redux-context"),
        a = "undefined" != typeof globalThis ? globalThis : {},
        s = function() {
          if (!r.createContext) return {};
          let e = a[o] ?? (a[o] = new Map),
            t = e.get(r.createContext);
          return t || (t = r.createContext(null), e.set(r.createContext, t)), t
        }();

      function l(e = s) {
        return function() {
          return r.useContext(e)
        }
      }
      var c = l(),
        u = () => {
          throw Error("uSES not initialized!")
        },
        d = (e, t) => e === t,
        p = function(e = s) {
          let t = e === s ? c : l(e),
            n = (e, n = {}) => {
              let {
                equalityFn: i = d,
                devModeChecks: o = {}
              } = "function" == typeof n ? {
                equalityFn: n
              } : n, {
                store: a,
                subscription: s,
                getServerState: l,
                stabilityCheck: c,
                identityFunctionCheck: p
              } = t();
              r.useRef(!0);
              let h = r.useCallback({
                  [e.name]: t => e(t)
                } [e.name], [e, c, o.stabilityCheck]),
                f = u(s.addNestedSub, a.getState, l || a.getState, h, i);
              return r.useDebugValue(f), f
            };
          return Object.assign(n, {
            withTypes: () => n
          }), n
        }();
      Symbol.for("react.element"), Symbol.for("react.portal"), Symbol.for("react.fragment"), Symbol.for("react.strict_mode"), Symbol.for("react.profiler"), Symbol.for("react.provider"), Symbol.for("react.context"), Symbol.for("react.server_context"), Symbol.for("react.forward_ref"), Symbol.for("react.suspense"), Symbol.for("react.suspense_list"), Symbol.for("react.memo"), Symbol.for("react.lazy"), Symbol.for("react.offscreen"), Symbol.for("react.client.reference");
      var h = {
          notify() {},
          get: () => []
        },
        f = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? r.useLayoutEffect : r.useEffect,
        g = function({
          store: e,
          context: t,
          children: n,
          serverState: i,
          stabilityCheck: o = "once",
          identityFunctionCheck: a = "once"
        }) {
          let l = r.useMemo(() => {
              let t = function(e, t) {
                let n;
                let r = h,
                  i = 0,
                  o = !1;

                function a() {
                  c.onStateChange && c.onStateChange()
                }

                function s() {
                  if (i++, !n) {
                    let i, o;
                    n = t ? t.addNestedSub(a) : e.subscribe(a), i = null, o = null, r = {
                      clear() {
                        i = null, o = null
                      },
                      notify() {
                        (() => {
                          let e = i;
                          for (; e;) e.callback(), e = e.next
                        })()
                      },
                      get() {
                        let e = [],
                          t = i;
                        for (; t;) e.push(t), t = t.next;
                        return e
                      },
                      subscribe(e) {
                        let t = !0,
                          n = o = {
                            callback: e,
                            next: null,
                            prev: o
                          };
                        return n.prev ? n.prev.next = n : i = n,
                          function() {
                            t && null !== i && (t = !1, n.next ? n.next.prev = n.prev : o = n.prev, n.prev ? n.prev.next = n.next : i = n.next)
                          }
                      }
                    }
                  }
                }

                function l() {
                  i--, n && 0 === i && (n(), n = void 0, r.clear(), r = h)
                }
                let c = {
                  addNestedSub: function(e) {
                    s();
                    let t = r.subscribe(e),
                      n = !1;
                    return () => {
                      n || (n = !0, t(), l())
                    }
                  },
                  notifyNestedSubs: function() {
                    r.notify()
                  },
                  handleChangeWrapper: a,
                  isSubscribed: function() {
                    return o
                  },
                  trySubscribe: function() {
                    o || (o = !0, s())
                  },
                  tryUnsubscribe: function() {
                    o && (o = !1, l())
                  },
                  getListeners: () => r
                };
                return c
              }(e);
              return {
                store: e,
                subscription: t,
                getServerState: i ? () => i : void 0,
                stabilityCheck: o,
                identityFunctionCheck: a
              }
            }, [e, i, o, a]),
            c = r.useMemo(() => e.getState(), [e]);
          return f(() => {
            let {
              subscription: t
            } = l;
            return t.onStateChange = t.notifyNestedSubs, t.trySubscribe(), c !== e.getState() && t.notifyNestedSubs(), () => {
              t.tryUnsubscribe(), t.onStateChange = void 0
            }
          }, [l, c]), r.createElement((t || s).Provider, {
            value: l
          }, n)
        };

      function m(e = s) {
        let t = e === s ? c : l(e),
          n = () => {
            let {
              store: e
            } = t();
            return e
          };
        return Object.assign(n, {
          withTypes: () => n
        }), n
      }
      var y = m(),
        b = function(e = s) {
          let t = e === s ? y : m(e),
            n = () => t().dispatch;
          return Object.assign(n, {
            withTypes: () => n
          }), n
        }();
      u = i.useSyncExternalStoreWithSelector, r.useSyncExternalStore
    },
    4173: function(e, t, n) {
      "use strict";
      n.d(t, {
        Ix: function() {
          return M
        },
        Am: function() {
          return O
        }
      });
      var r = n(7294),
        i = function() {
          for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)(e = arguments[n]) && (t = function e(t) {
            var n, r, i = "";
            if ("string" == typeof t || "number" == typeof t) i += t;
            else if ("object" == typeof t) {
              if (Array.isArray(t)) {
                var o = t.length;
                for (n = 0; n < o; n++) t[n] && (r = e(t[n])) && (i && (i += " "), i += r)
              } else
                for (r in t) t[r] && (i && (i += " "), i += r)
            }
            return i
          }(e)) && (r && (r += " "), r += t);
          return r
        };
      let o = e => "number" == typeof e && !isNaN(e),
        a = e => "string" == typeof e,
        s = e => "function" == typeof e,
        l = e => a(e) || s(e) ? e : null,
        c = e => (0, r.isValidElement)(e) || a(e) || s(e) || o(e);

      function u(e) {
        let {
          enter: t,
          exit: n,
          appendPosition: i = !1,
          collapse: o = !0,
          collapseDuration: a = 300
        } = e;
        return function(e) {
          let {
            children: s,
            position: l,
            preventExitTransition: c,
            done: u,
            nodeRef: d,
            isIn: p,
            playToast: h
          } = e, f = i ? `${t}--${l}` : t, g = i ? `${n}--${l}` : n, m = (0, r.useRef)(0);
          return (0, r.useLayoutEffect)(() => {
            let e = d.current,
              t = f.split(" "),
              n = r => {
                r.target === d.current && (h(), e.removeEventListener("animationend", n), e.removeEventListener("animationcancel", n), 0 === m.current && "animationcancel" !== r.type && e.classList.remove(...t))
              };
            e.classList.add(...t), e.addEventListener("animationend", n), e.addEventListener("animationcancel", n)
          }, []), (0, r.useEffect)(() => {
            let e = d.current,
              t = () => {
                e.removeEventListener("animationend", t), o ? function(e, t, n) {
                  void 0 === n && (n = 300);
                  let {
                    scrollHeight: r,
                    style: i
                  } = e;
                  requestAnimationFrame(() => {
                    i.minHeight = "initial", i.height = r + "px", i.transition = `all ${n}ms`, requestAnimationFrame(() => {
                      i.height = "0", i.padding = "0", i.margin = "0", setTimeout(t, n)
                    })
                  })
                }(e, u, a) : u()
              };
            p || (c ? t() : (m.current = 1, e.className += ` ${g}`, e.addEventListener("animationend", t)))
          }, [p]), r.createElement(r.Fragment, null, s)
        }
      }

      function d(e, t) {
        return null != e ? {
          content: e.content,
          containerId: e.props.containerId,
          id: e.props.toastId,
          theme: e.props.theme,
          type: e.props.type,
          data: e.props.data || {},
          isLoading: e.props.isLoading,
          icon: e.props.icon,
          status: t
        } : {}
      }
      let p = new Map,
        h = [],
        f = new Set,
        g = e => f.forEach(t => t(e)),
        m = () => p.size > 0;

      function y(e, t) {
        var n;
        if (t) return !(null == (n = p.get(t)) || !n.isToastActive(e));
        let r = !1;
        return p.forEach(t => {
          t.isToastActive(e) && (r = !0)
        }), r
      }

      function b(e, t) {
        c(e) && (m() || h.push({
          content: e,
          options: t
        }), p.forEach(n => {
          n.buildToast(e, t)
        }))
      }

      function v(e, t) {
        p.forEach(n => {
          null != t && null != t && t.containerId ? (null == t ? void 0 : t.containerId) === n.id && n.toggle(e, null == t ? void 0 : t.id) : n.toggle(e, null == t ? void 0 : t.id)
        })
      }

      function w(e) {
        let {
          delay: t,
          isRunning: n,
          closeToast: o,
          type: a = "default",
          hide: l,
          className: c,
          style: u,
          controlledProgress: d,
          progress: p,
          rtl: h,
          isIn: f,
          theme: g
        } = e, m = l || d && 0 === p, y = {
          ...u,
          animationDuration: `${t}ms`,
          animationPlayState: n ? "running" : "paused"
        };
        d && (y.transform = `scaleX(${p})`);
        let b = i("Toastify__progress-bar", d ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g}`, `Toastify__progress-bar--${a}`, {
            "Toastify__progress-bar--rtl": h
          }),
          v = s(c) ? c({
            rtl: h,
            type: a,
            defaultClassName: b
          }) : i(b, c);
        return r.createElement("div", {
          className: "Toastify__progress-bar--wrp",
          "data-hidden": m
        }, r.createElement("div", {
          className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${a}`
        }), r.createElement("div", {
          role: "progressbar",
          "aria-hidden": m ? "true" : "false",
          "aria-label": "notification timer",
          className: v,
          style: y,
          [d && p >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: d && p < 1 ? null : () => {
            f && o()
          }
        }))
      }
      let x = 1,
        k = () => "" + x++;

      function C(e, t) {
        return b(e, t), t.toastId
      }

      function S(e, t) {
        return {
          ...t,
          type: t && t.type || e,
          toastId: t && (a(t.toastId) || o(t.toastId)) ? t.toastId : k()
        }
      }

      function E(e) {
        return (t, n) => C(t, S(e, n))
      }

      function O(e, t) {
        return C(e, S("default", t))
      }
      O.loading = (e, t) => C(e, S("default", {
        isLoading: !0,
        autoClose: !1,
        closeOnClick: !1,
        closeButton: !1,
        draggable: !1,
        ...t
      })), O.promise = function(e, t, n) {
        let r, {
          pending: i,
          error: o,
          success: l
        } = t;
        i && (r = a(i) ? O.loading(i, n) : O.loading(i.render, {
          ...n,
          ...i
        }));
        let c = {
            isLoading: null,
            autoClose: null,
            closeOnClick: null,
            closeButton: null,
            draggable: null
          },
          u = (e, t, i) => {
            if (null == t) return void O.dismiss(r);
            let o = {
                type: e,
                ...c,
                ...n,
                data: i
              },
              s = a(t) ? {
                render: t
              } : t;
            return r ? O.update(r, {
              ...o,
              ...s
            }) : O(s.render, {
              ...o,
              ...s
            }), i
          },
          d = s(e) ? e() : e;
        return d.then(e => u("success", l, e)).catch(e => u("error", o, e)), d
      }, O.success = E("success"), O.info = E("info"), O.error = E("error"), O.warning = E("warning"), O.warn = O.warning, O.dark = (e, t) => C(e, S("default", {
        theme: "dark",
        ...t
      })), O.dismiss = function(e) {
        ! function(e) {
          var t;
          if (m()) {
            if (null == e || a(t = e) || o(t)) p.forEach(t => {
              t.removeToast(e)
            });
            else if (e && ("containerId" in e || "id" in e)) {
              let t = p.get(e.containerId);
              t ? t.removeToast(e.id) : p.forEach(t => {
                t.removeToast(e.id)
              })
            }
          } else h = h.filter(t => null != e && t.options.toastId !== e)
        }(e)
      }, O.clearWaitingQueue = function(e) {
        void 0 === e && (e = {}), p.forEach(t => {
          !t.props.limit || e.containerId && t.id !== e.containerId || t.clearQueue()
        })
      }, O.isActive = y, O.update = function(e, t) {
        void 0 === t && (t = {});
        let n = ((e, t) => {
          var n;
          let {
            containerId: r
          } = t;
          return null == (n = p.get(r || 1)) ? void 0 : n.toasts.get(e)
        })(e, t);
        if (n) {
          let {
            props: r,
            content: i
          } = n, o = {
            delay: 100,
            ...r,
            ...t,
            toastId: t.toastId || e,
            updateId: k()
          };
          o.toastId !== e && (o.staleId = e);
          let a = o.render || i;
          delete o.render, C(a, o)
        }
      }, O.done = e => {
        O.update(e, {
          progress: 1
        })
      }, O.onChange = function(e) {
        return f.add(e), () => {
          f.delete(e)
        }
      }, O.play = e => v(!0, e), O.pause = e => v(!1, e);
      let _ = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        T = e => {
          let {
            theme: t,
            type: n,
            isLoading: i,
            ...o
          } = e;
          return r.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill: "colored" === t ? "currentColor" : `var(--toastify-icon-color-${n})`,
            ...o
          })
        },
        A = {
          info: function(e) {
            return r.createElement(T, {
              ...e
            }, r.createElement("path", {
              d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
            }))
          },
          warning: function(e) {
            return r.createElement(T, {
              ...e
            }, r.createElement("path", {
              d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
            }))
          },
          success: function(e) {
            return r.createElement(T, {
              ...e
            }, r.createElement("path", {
              d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
            }))
          },
          error: function(e) {
            return r.createElement(T, {
              ...e
            }, r.createElement("path", {
              d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
            }))
          },
          spinner: function() {
            return r.createElement("div", {
              className: "Toastify__spinner"
            })
          }
        },
        P = e => {
          let {
            isRunning: t,
            preventExitTransition: n,
            toastRef: o,
            eventHandlers: a,
            playToast: l
          } = function(e) {
            var t, n;
            let [i, o] = (0, r.useState)(!1), [a, s] = (0, r.useState)(!1), l = (0, r.useRef)(null), c = (0, r.useRef)({
              start: 0,
              delta: 0,
              removalDistance: 0,
              canCloseOnClick: !0,
              canDrag: !1,
              didMove: !1
            }).current, {
              autoClose: u,
              pauseOnHover: d,
              closeToast: h,
              onClick: f,
              closeOnClick: g
            } = e;

            function m() {
              o(!0)
            }

            function y() {
              o(!1)
            }

            function b(t) {
              let n = l.current;
              c.canDrag && n && (c.didMove = !0, i && y(), c.delta = "x" === e.draggableDirection ? t.clientX - c.start : t.clientY - c.start, c.start !== t.clientX && (c.canCloseOnClick = !1), n.style.transform = `translate3d(${"x"===e.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`},0)`, n.style.opacity = "" + (1 - Math.abs(c.delta / c.removalDistance)))
            }

            function v() {
              document.removeEventListener("pointermove", b), document.removeEventListener("pointerup", v);
              let t = l.current;
              if (c.canDrag && c.didMove && t) {
                if (c.canDrag = !1, Math.abs(c.delta) > c.removalDistance) return s(!0), e.closeToast(), void e.collapseAll();
                t.style.transition = "transform 0.2s, opacity 0.2s", t.style.removeProperty("transform"), t.style.removeProperty("opacity")
              }
            }
            null == (n = p.get((t = {
              id: e.toastId,
              containerId: e.containerId,
              fn: o
            }).containerId || 1)) || n.setToggle(t.id, t.fn), (0, r.useEffect)(() => {
              if (e.pauseOnFocusLoss) return document.hasFocus() || y(), window.addEventListener("focus", m), window.addEventListener("blur", y), () => {
                window.removeEventListener("focus", m), window.removeEventListener("blur", y)
              }
            }, [e.pauseOnFocusLoss]);
            let w = {
              onPointerDown: function(t) {
                if (!0 === e.draggable || e.draggable === t.pointerType) {
                  c.didMove = !1, document.addEventListener("pointermove", b), document.addEventListener("pointerup", v);
                  let n = l.current;
                  c.canCloseOnClick = !0, c.canDrag = !0, n.style.transition = "none", "x" === e.draggableDirection ? (c.start = t.clientX, c.removalDistance = n.offsetWidth * (e.draggablePercent / 100)) : (c.start = t.clientY, c.removalDistance = n.offsetHeight * (80 === e.draggablePercent ? 1.5 * e.draggablePercent : e.draggablePercent) / 100)
                }
              },
              onPointerUp: function(t) {
                let {
                  top: n,
                  bottom: r,
                  left: i,
                  right: o
                } = l.current.getBoundingClientRect();
                "touchend" !== t.nativeEvent.type && e.pauseOnHover && t.clientX >= i && t.clientX <= o && t.clientY >= n && t.clientY <= r ? y() : m()
              }
            };
            return u && d && (w.onMouseEnter = y, e.stacked || (w.onMouseLeave = m)), g && (w.onClick = e => {
              f && f(e), c.canCloseOnClick && h()
            }), {
              playToast: m,
              pauseToast: y,
              isRunning: i,
              preventExitTransition: a,
              toastRef: l,
              eventHandlers: w
            }
          }(e), {
            closeButton: c,
            children: u,
            autoClose: d,
            onClick: h,
            type: f,
            hideProgressBar: g,
            closeToast: m,
            transition: y,
            position: b,
            className: v,
            style: x,
            bodyClassName: k,
            bodyStyle: C,
            progressClassName: S,
            progressStyle: E,
            updateId: O,
            role: _,
            progress: T,
            rtl: P,
            toastId: R,
            deleteToast: j,
            isIn: L,
            isLoading: M,
            closeOnClick: N,
            theme: D
          } = e, I = i("Toastify__toast", `Toastify__toast-theme--${D}`, `Toastify__toast--${f}`, {
            "Toastify__toast--rtl": P
          }, {
            "Toastify__toast--close-on-click": N
          }), $ = s(v) ? v({
            rtl: P,
            position: b,
            type: f,
            defaultClassName: I
          }) : i(I, v), B = function(e) {
            let {
              theme: t,
              type: n,
              isLoading: i,
              icon: o
            } = e, a = null, l = {
              theme: t,
              type: n
            };
            return !1 === o || (s(o) ? a = o({
              ...l,
              isLoading: i
            }) : (0, r.isValidElement)(o) ? a = (0, r.cloneElement)(o, l) : i ? a = A.spinner() : n in A && (a = A[n](l))), a
          }(e), U = !!T || !d, V = {
            closeToast: m,
            type: f,
            theme: D
          }, W = null;
          return !1 === c || (W = s(c) ? c(V) : (0, r.isValidElement)(c) ? (0, r.cloneElement)(c, V) : function(e) {
            let {
              closeToast: t,
              theme: n,
              ariaLabel: i = "close"
            } = e;
            return r.createElement("button", {
              className: `Toastify__close-button Toastify__close-button--${n}`,
              type: "button",
              onClick: e => {
                e.stopPropagation(), t(e)
              },
              "aria-label": i
            }, r.createElement("svg", {
              "aria-hidden": "true",
              viewBox: "0 0 14 16"
            }, r.createElement("path", {
              fillRule: "evenodd",
              d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
            })))
          }(V)), r.createElement(y, {
            isIn: L,
            done: j,
            position: b,
            preventExitTransition: n,
            nodeRef: o,
            playToast: l
          }, r.createElement("div", {
            id: R,
            onClick: h,
            "data-in": L,
            className: $,
            ...a,
            style: x,
            ref: o
          }, r.createElement("div", {
            ...L && {
              role: _
            },
            className: s(k) ? k({
              type: f
            }) : i("Toastify__toast-body", k),
            style: C
          }, null != B && r.createElement("div", {
            className: i("Toastify__toast-icon", {
              "Toastify--animate-icon Toastify__zoom-enter": !M
            })
          }, B), r.createElement("div", null, u)), W, r.createElement(w, {
            ...O && !U ? {
              key: `pb-${O}`
            } : {},
            rtl: P,
            theme: D,
            delay: d,
            isRunning: t,
            isIn: L,
            closeToast: m,
            hide: g,
            type: f,
            style: E,
            className: S,
            controlledProgress: U,
            progress: T || 0
          })))
        },
        R = function(e, t) {
          return void 0 === t && (t = !1), {
            enter: `Toastify--animate Toastify__${e}-enter`,
            exit: `Toastify--animate Toastify__${e}-exit`,
            appendPosition: t
          }
        },
        j = u(R("bounce", !0)),
        L = (u(R("slide", !0)), u(R("zoom")), u(R("flip")), {
          position: "top-right",
          transition: j,
          autoClose: 5e3,
          closeButton: !0,
          pauseOnHover: !0,
          pauseOnFocusLoss: !0,
          draggable: "touch",
          draggablePercent: 80,
          draggableDirection: "x",
          role: "alert",
          theme: "light"
        });

      function M(e) {
        let t = {
            ...L,
            ...e
          },
          n = e.stacked,
          [u, f] = (0, r.useState)(!0),
          m = (0, r.useRef)(null),
          {
            getToastToRender: v,
            isToastActive: w,
            count: x
          } = function(e) {
            let {
              subscribe: t,
              getSnapshot: n,
              setProps: i
            } = (0, r.useRef)(function(e) {
              let t = e.containerId || 1;
              return {
                subscribe(n) {
                  let i = function(e, t, n) {
                    let i = 1,
                      u = 0,
                      p = [],
                      h = [],
                      f = [],
                      g = t,
                      m = new Map,
                      y = new Set,
                      b = () => {
                        f = Array.from(m.values()), y.forEach(e => e())
                      },
                      v = e => {
                        h = null == e ? [] : h.filter(t => t !== e), b()
                      },
                      w = e => {
                        let {
                          toastId: t,
                          onOpen: i,
                          updateId: o,
                          children: a
                        } = e.props, l = null == o;
                        e.staleId && m.delete(e.staleId), m.set(t, e), h = [...h, e.props.toastId].filter(t => t !== e.staleId), b(), n(d(e, l ? "added" : "updated")), l && s(i) && i((0, r.isValidElement)(a) && a.props)
                      };
                    return {
                      id: e,
                      props: g,
                      observe: e => (y.add(e), () => y.delete(e)),
                      toggle: (e, t) => {
                        m.forEach(n => {
                          null != t && t !== n.props.toastId || s(n.toggle) && n.toggle(e)
                        })
                      },
                      removeToast: v,
                      toasts: m,
                      clearQueue: () => {
                        u -= p.length, p = []
                      },
                      buildToast: (t, h) => {
                        var f, y;
                        if ((t => {
                            let {
                              containerId: n,
                              toastId: r,
                              updateId: i
                            } = t, o = m.has(r) && null == i;
                            return (n ? n !== e : 1 !== e) || o
                          })(h)) return;
                        let {
                          toastId: x,
                          updateId: k,
                          data: C,
                          staleId: S,
                          delay: E
                        } = h, O = () => {
                          v(x)
                        }, _ = null == k;
                        _ && u++;
                        let T = {
                          ...g,
                          style: g.toastStyle,
                          key: i++,
                          ...Object.fromEntries(Object.entries(h).filter(e => {
                            let [t, n] = e;
                            return null != n
                          })),
                          toastId: x,
                          updateId: k,
                          data: C,
                          closeToast: O,
                          isIn: !1,
                          className: l(h.className || g.toastClassName),
                          bodyClassName: l(h.bodyClassName || g.bodyClassName),
                          progressClassName: l(h.progressClassName || g.progressClassName),
                          autoClose: !h.isLoading && (f = h.autoClose, y = g.autoClose, !1 === f || o(f) && f > 0 ? f : y),
                          deleteToast() {
                            let e = m.get(x),
                              {
                                onClose: t,
                                children: i
                              } = e.props;
                            s(t) && t((0, r.isValidElement)(i) && i.props), n(d(e, "removed")), m.delete(x), --u < 0 && (u = 0), p.length > 0 ? w(p.shift()) : b()
                          }
                        };
                        T.closeButton = g.closeButton, !1 === h.closeButton || c(h.closeButton) ? T.closeButton = h.closeButton : !0 === h.closeButton && (T.closeButton = !c(g.closeButton) || g.closeButton);
                        let A = t;
                        (0, r.isValidElement)(t) && !a(t.type) ? A = (0, r.cloneElement)(t, {
                          closeToast: O,
                          toastProps: T,
                          data: C
                        }) : s(t) && (A = t({
                          closeToast: O,
                          toastProps: T,
                          data: C
                        }));
                        let P = {
                          content: A,
                          props: T,
                          staleId: S
                        };
                        g.limit && g.limit > 0 && u > g.limit && _ ? p.push(P) : o(E) ? setTimeout(() => {
                          w(P)
                        }, E) : w(P)
                      },
                      setProps(e) {
                        g = e
                      },
                      setToggle: (e, t) => {
                        m.get(e).toggle = t
                      },
                      isToastActive: e => h.some(t => t === e),
                      getSnapshot: () => g.newestOnTop ? f.reverse() : f
                    }
                  }(t, e, g);
                  p.set(t, i);
                  let u = i.observe(n);
                  return h.forEach(e => b(e.content, e.options)), h = [], () => {
                    u(), p.delete(t)
                  }
                },
                setProps(e) {
                  var n;
                  null == (n = p.get(t)) || n.setProps(e)
                },
                getSnapshot() {
                  var e;
                  return null == (e = p.get(t)) ? void 0 : e.getSnapshot()
                }
              }
            }(e)).current;
            i(e);
            let u = (0, r.useSyncExternalStore)(t, n, n);
            return {
              getToastToRender: function(e) {
                if (!u) return [];
                let t = new Map;
                return u.forEach(e => {
                  let {
                    position: n
                  } = e.props;
                  t.has(n) || t.set(n, []), t.get(n).push(e)
                }), Array.from(t, t => e(t[0], t[1]))
              },
              isToastActive: y,
              count: null == u ? void 0 : u.length
            }
          }(t),
          {
            className: k,
            style: C,
            rtl: S,
            containerId: E
          } = t;

        function T() {
          n && (f(!0), O.play())
        }
        return _(() => {
          if (n) {
            var e;
            let n = m.current.querySelectorAll('[data-in="true"]'),
              r = null == (e = t.position) ? void 0 : e.includes("top"),
              i = 0,
              o = 0;
            Array.from(n).reverse().forEach((e, t) => {
              e.classList.add("Toastify__toast--stacked"), t > 0 && (e.dataset.collapsed = `${u}`), e.dataset.pos || (e.dataset.pos = r ? "top" : "bot");
              let n = i * (u ? .2 : 1) + (u ? 0 : 12 * t);
              e.style.setProperty("--y", `${r?n:-1*n}px`), e.style.setProperty("--g", "12"), e.style.setProperty("--s", "" + (1 - (u ? o : 0))), i += e.offsetHeight, o += .025
            })
          }
        }, [u, x, n]), r.createElement("div", {
          ref: m,
          className: "Toastify",
          id: E,
          onMouseEnter: () => {
            n && (f(!1), O.pause())
          },
          onMouseLeave: T
        }, v((e, t) => {
          let o = t.length ? {
            ...C
          } : {
            ...C,
            pointerEvents: "none"
          };
          return r.createElement("div", {
            className: function(e) {
              let t = i("Toastify__toast-container", `Toastify__toast-container--${e}`, {
                "Toastify__toast-container--rtl": S
              });
              return s(k) ? k({
                position: e,
                rtl: S,
                defaultClassName: t
              }) : i(t, l(k))
            }(e),
            style: o,
            key: `container-${e}`
          }, t.map(e => {
            let {
              content: t,
              props: i
            } = e;
            return r.createElement(P, {
              ...i,
              stacked: n,
              collapseAll: T,
              isIn: w(i.toastId, i.containerId),
              style: i.style,
              key: `toast-${i.key}`
            }, t)
          }))
        }))
      }
    },
    5849: function(e, t, n) {
      "use strict";

      function r(e) {
        return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
      }
      n.d(t, {
        LG: function() {
          return p
        },
        MT: function() {
          return l
        },
        PO: function() {
          return s
        },
        UY: function() {
          return c
        },
        md: function() {
          return d
        },
        qC: function() {
          return u
        }
      });
      var i = "function" == typeof Symbol && Symbol.observable || "@@observable",
        o = () => Math.random().toString(36).substring(7).split("").join("."),
        a = {
          INIT: `@@redux/INIT${o()}`,
          REPLACE: `@@redux/REPLACE${o()}`,
          PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${o()}`
        };

      function s(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = e;
        for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e)
      }

      function l(e, t, n) {
        if ("function" != typeof e) throw Error(r(2));
        if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw Error(r(0));
        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
          if ("function" != typeof n) throw Error(r(1));
          return n(l)(e, t)
        }
        let o = e,
          c = t,
          u = new Map,
          d = u,
          p = 0,
          h = !1;

        function f() {
          d === u && (d = new Map, u.forEach((e, t) => {
            d.set(t, e)
          }))
        }

        function g() {
          if (h) throw Error(r(3));
          return c
        }

        function m(e) {
          if ("function" != typeof e) throw Error(r(4));
          if (h) throw Error(r(5));
          let t = !0;
          f();
          let n = p++;
          return d.set(n, e),
            function() {
              if (t) {
                if (h) throw Error(r(6));
                t = !1, f(), d.delete(n), u = null
              }
            }
        }

        function y(e) {
          if (!s(e)) throw Error(r(7));
          if (void 0 === e.type) throw Error(r(8));
          if ("string" != typeof e.type) throw Error(r(17));
          if (h) throw Error(r(9));
          try {
            h = !0, c = o(c, e)
          } finally {
            h = !1
          }
          return (u = d).forEach(e => {
            e()
          }), e
        }
        return y({
          type: a.INIT
        }), {
          dispatch: y,
          subscribe: m,
          getState: g,
          replaceReducer: function(e) {
            if ("function" != typeof e) throw Error(r(10));
            o = e, y({
              type: a.REPLACE
            })
          },
          [i]: function() {
            return {
              subscribe(e) {
                if ("object" != typeof e || null === e) throw Error(r(11));

                function t() {
                  e.next && e.next(g())
                }
                return t(), {
                  unsubscribe: m(t)
                }
              },
              [i]() {
                return this
              }
            }
          }
        }
      }

      function c(e) {
        let t;
        let n = Object.keys(e),
          i = {};
        for (let t = 0; t < n.length; t++) {
          let r = n[t];
          "function" == typeof e[r] && (i[r] = e[r])
        }
        let o = Object.keys(i);
        try {
          ! function(e) {
            Object.keys(e).forEach(t => {
              let n = e[t];
              if (void 0 === n(void 0, {
                  type: a.INIT
                })) throw Error(r(12));
              if (void 0 === n(void 0, {
                  type: a.PROBE_UNKNOWN_ACTION()
                })) throw Error(r(13))
            })
          }(i)
        } catch (e) {
          t = e
        }
        return function(e = {}, n) {
          if (t) throw t;
          let a = !1,
            s = {};
          for (let t = 0; t < o.length; t++) {
            let l = o[t],
              c = i[l],
              u = e[l],
              d = c(u, n);
            if (void 0 === d) throw n && n.type, Error(r(14));
            s[l] = d, a = a || d !== u
          }
          return (a = a || o.length !== Object.keys(e).length) ? s : e
        }
      }

      function u(...e) {
        return 0 === e.length ? e => e : 1 === e.length ? e[0] : e.reduce((e, t) => (...n) => e(t(...n)))
      }

      function d(...e) {
        return t => (n, i) => {
          let o = t(n, i),
            a = () => {
              throw Error(r(15))
            },
            s = {
              getState: o.getState,
              dispatch: (e, ...t) => a(e, ...t)
            };
          return a = u(...e.map(e => e(s)))(o.dispatch), {
            ...o,
            dispatch: a
          }
        }
      }

      function p(e) {
        return s(e) && "type" in e && "string" == typeof e.type
      }
    },
    3725: function(e) {
      "use strict";
      e.exports = JSON.parse('{"v":"5.12.1","fr":60,"ip":0,"op":180,"w":512,"h":512,"nm":"paws","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"main_cntrl","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.44,"y":0},"t":0,"s":[279.759,244.904,0],"to":[0,207.667,0],"ti":[0,-207.667,0]},{"t":179,"s":[279.759,1490.904,0]}],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":-3,"op":211,"st":-3,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"fing 7","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":153,"s":[0]},{"t":158,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[21.017,-1315.275,0],"ix":2,"l":2},"a":{"a":0,"k":[-72.474,-156.87,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":153,"s":[80,80,100]},{"t":158,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.769,3.993],[-5.805,-17.921],[14.767,-3.897],[4.323,17.999]],"o":[[12.769,-3.993],[5.111,15.779],[-9.628,2.541],[-4.142,-17.245]],"v":[[-13.788,-17.277],[15.539,2.579],[1.508,35.005],[-27.583,15.479]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":153,"op":367,"st":127,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"fing 6","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":153,"s":[0]},{"t":158,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-165.653,-1283.161,0],"ix":2,"l":2},"a":{"a":0,"k":[-58.46,-164.756,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":153,"s":[-80,80,100]},{"t":158,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.03,-3.036],[5.119,-21.419],[15.186,3.74],[-4.548,17.943]],"o":[[13.03,3.036],[-4.302,18.004],[-12.991,-3.2],[5.137,-20.268]],"v":[[17.603,-34.486],[32.062,5.912],[-2.425,35.858],[-15.465,-5.498]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":153,"op":367,"st":127,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"fing 5","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":153,"s":[0]},{"t":158,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-116.729,-1350.457,0],"ix":2,"l":2},"a":{"a":0,"k":[-60.134,-166.552,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":153,"s":[-80,80,100]},{"t":158,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.262,-1.762],[3.025,-21.814],[15.476,2.255],[-1.773,18.426]],"o":[[13.262,1.762],[-2.542,18.335],[-13.239,-1.929],[2.337,-24.292]],"v":[[12.175,-39.154],[32.148,4.016],[-0.054,36.978],[-19.165,-4.224]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":153,"op":367,"st":127,"ct":1,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"fing[ 3","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":153,"s":[0]},{"t":158,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-41.311,-1352.403,0],"ix":2,"l":2},"a":{"a":0,"k":[-67.552,-167.498,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":153,"s":[80,80,100]},{"t":158,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.164,2.389],[-3.81,-21.69],[13.164,-2.389],[3.815,18.113]],"o":[[13.164,-2.389],[3.202,18.232],[-13.164,2.389],[-4.389,-20.843]],"v":[[-7.486,-38.228],[23.835,-5.326],[7.736,34.228],[-25.085,2.826]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":153,"op":367,"st":127,"ct":1,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"paw 3","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":153,"s":[0]},{"t":158,"s":[100]}],"ix":11},"r":{"a":0,"k":-24.5,"ix":10},"p":{"a":0,"k":[-60.943,-1240.495,0],"ix":2,"l":2},"a":{"a":0,"k":[-86.793,-55.034,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":153,"s":[80,80,100]},{"t":158,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-30.529,-0.346],[-15.994,-25.694],[9.394,-21.863],[22.471,1.239],[6.387,42.382],[-17.141,19.824]],"o":[[36.437,0.412],[13.262,21.305],[-20.892,48.621],[-28.251,-1.558],[-2.257,-14.977],[15.728,-18.19]],"v":[[-1.082,-67.093],[60.459,-15.264],[84.625,41.868],[-2.81,49.109],[-83.84,23.327],[-54.511,-27.128]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-88.27,-54.412],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":153,"op":367,"st":127,"ct":1,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"fing 10","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":124,"s":[0]},{"t":129,"s":[100]}],"ix":11},"r":{"a":0,"k":16.7,"ix":10},"p":{"a":0,"k":[68.967,-1165.77,0],"ix":2,"l":2},"a":{"a":0,"k":[-73.71,-156.97,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":124,"s":[-80,80,100]},{"t":129,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.564,4.242],[-6.166,-19.036],[12.518,-3.875],[4.592,19.119]],"o":[[13.564,-4.242],[5.429,16.761],[-10.104,3.128],[-4.4,-18.318]],"v":[[-17.462,-21.373],[16.324,0.509],[2.569,38.952],[-30.343,14.475]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":124,"op":338,"st":98,"ct":1,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"fing 9","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":124,"s":[0]},{"t":129,"s":[100]}],"ix":11},"r":{"a":0,"k":16.7,"ix":10},"p":{"a":0,"k":[221.943,-1038.597,0],"ix":2,"l":2},"a":{"a":0,"k":[-57.209,-123.599,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":124,"s":[80,80,100]},{"t":129,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-10.724,3.314],[-5.355,-17.684],[12.584,-3.716],[4.298,14.924]],"o":[[10.724,-3.314],[4.501,14.864],[-10.765,3.179],[-4.854,-16.858]],"v":[[1.619,12.264],[29.188,35.414],[16.875,71.702],[-10.073,47.258]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":124,"op":338,"st":98,"ct":1,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"fing 8","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":124,"s":[0]},{"t":129,"s":[100]}],"ix":11},"r":{"a":0,"k":16.7,"ix":10},"p":{"a":0,"k":[213.609,-1121.456,0],"ix":2,"l":2},"a":{"a":0,"k":[-41.752,-135.068,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":124,"s":[80,80,100]},{"t":129,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.258,1.792],[-2.826,-21.84],[15.524,-1.9],[3.141,18.242]],"o":[[13.258,-1.792],[2.375,18.358],[-13.28,1.625],[-4.142,-24.05]],"v":[[21.137,-0.27],[49.761,29.412],[27.159,61.142],[0.795,34.424]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":124,"op":338,"st":98,"ct":1,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"fing[ 4","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":124,"s":[0]},{"t":129,"s":[100]}],"ix":11},"r":{"a":0,"k":16.7,"ix":10},"p":{"a":0,"k":[151.592,-1174.179,0],"ix":2,"l":2},"a":{"a":0,"k":[-86.799,-166.745,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":124,"s":[-80,80,100]},{"t":129,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.138,5.627],[-9.148,-20.032],[12.138,-5.627],[8.252,16.569]],"o":[[12.138,-5.627],[7.689,16.838],[-12.138,5.627],[-9.496,-19.066]],"v":[[-35.011,-30.885],[3.465,-10.881],[-4.934,28.531],[-42.425,10.452]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":124,"op":338,"st":98,"ct":1,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"paw 4","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":124,"s":[0]},{"t":129,"s":[100]}],"ix":11},"r":{"a":0,"k":41.2,"ix":10},"p":{"a":0,"k":[123.537,-1065.698,0],"ix":2,"l":2},"a":{"a":0,"k":[-90.693,-55.919,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":124,"s":[-80,80,100]},{"t":129,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-32.861,-3.978],[-10.234,-28.476],[4.708,-17.633],[22.026,4.619],[12.754,51.01],[-23.211,20.233]],"o":[[31.228,3.781],[8.487,23.616],[-11.359,42.547],[-28.358,-5.947],[-3.674,-14.694],[18.127,-15.801]],"v":[[7.22,-67.467],[64.269,-13.923],[82.696,42.173],[-3.422,50.567],[-87.791,22.527],[-56.533,-28.234]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-88.27,-54.412],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":124,"op":338,"st":98,"ct":1,"bm":0},{"ddd":0,"ind":12,"ty":3,"nm":"Null Collect  6","parent":1,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-58.943,-919.726,0],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":131,"s":[100,100,100]},{"t":168,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"ip":109,"op":149,"st":42,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"fing 22","parent":12,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":109,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":114,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":138,"s":[100]},{"t":148,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[131.96,1.451,0],"ix":2,"l":2},"a":{"a":0,"k":[-72.474,-156.87,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":109,"s":[80,80,100]},{"t":114,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.769,3.993],[-5.805,-17.921],[14.767,-3.897],[4.323,17.999]],"o":[[12.769,-3.993],[5.111,15.779],[-9.628,2.541],[-4.142,-17.245]],"v":[[-13.788,-17.277],[15.539,2.579],[1.508,35.005],[-27.583,15.479]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":109,"op":149,"st":83,"ct":1,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"fing 21","parent":12,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":109,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":114,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":138,"s":[100]},{"t":148,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-54.71,33.565,0],"ix":2,"l":2},"a":{"a":0,"k":[-58.46,-164.756,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":109,"s":[-80,80,100]},{"t":114,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.03,-3.036],[5.119,-21.419],[15.186,3.74],[-4.548,17.943]],"o":[[13.03,3.036],[-4.302,18.004],[-12.991,-3.2],[5.137,-20.268]],"v":[[17.603,-34.486],[32.062,5.912],[-2.425,35.858],[-15.465,-5.498]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":109,"op":149,"st":83,"ct":1,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"fing 20","parent":12,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":109,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":114,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":138,"s":[100]},{"t":148,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-5.786,-33.731,0],"ix":2,"l":2},"a":{"a":0,"k":[-60.134,-166.552,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":109,"s":[-80,80,100]},{"t":114,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.262,-1.762],[3.025,-21.814],[15.476,2.255],[-1.773,18.426]],"o":[[13.262,1.762],[-2.542,18.335],[-13.239,-1.929],[2.337,-24.292]],"v":[[12.175,-39.154],[32.148,4.016],[-0.054,36.978],[-19.165,-4.224]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":109,"op":149,"st":83,"ct":1,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"fing[ 8","parent":12,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":109,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":114,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":138,"s":[100]},{"t":148,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[69.632,-35.677,0],"ix":2,"l":2},"a":{"a":0,"k":[-67.552,-167.498,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":109,"s":[80,80,100]},{"t":114,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.164,2.389],[-3.81,-21.69],[13.164,-2.389],[3.815,18.113]],"o":[[13.164,-2.389],[3.202,18.232],[-13.164,2.389],[-4.389,-20.843]],"v":[[-7.486,-38.228],[23.835,-5.326],[7.736,34.228],[-25.085,2.826]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":109,"op":149,"st":83,"ct":1,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"paw 8","parent":12,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":109,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":114,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":138,"s":[100]},{"t":148,"s":[0]}],"ix":11},"r":{"a":0,"k":-24.5,"ix":10},"p":{"a":0,"k":[50,76.231,0],"ix":2,"l":2},"a":{"a":0,"k":[-86.793,-55.034,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":109,"s":[80,80,100]},{"t":114,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-30.529,-0.346],[-15.994,-25.694],[9.394,-21.863],[22.471,1.239],[6.387,42.382],[-17.141,19.824]],"o":[[36.437,0.412],[13.262,21.305],[-20.892,48.621],[-28.251,-1.558],[-2.257,-14.977],[15.728,-18.19]],"v":[[-1.082,-67.093],[60.459,-15.264],[84.625,41.868],[-2.81,49.109],[-83.84,23.327],[-54.511,-27.128]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-88.27,-54.412],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":109,"op":149,"st":83,"ct":1,"bm":0},{"ddd":0,"ind":18,"ty":3,"nm":"Null Collect  5","parent":1,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[123.612,-641.019,0],"ix":2,"l":2},"a":{"a":0,"k":[10,100,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":108,"s":[100,100,100]},{"t":123,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"ip":88,"op":118,"st":37,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"fing 19","parent":18,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":88,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":93,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":111,"s":[100]},{"t":117,"s":[0]}],"ix":11},"r":{"a":0,"k":6.1,"ix":10},"p":{"a":0,"k":[-59.88,11.301,0],"ix":2,"l":2},"a":{"a":0,"k":[-73.71,-156.97,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":88,"s":[-80,80,100]},{"t":93,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.564,4.242],[-6.166,-19.036],[12.518,-3.875],[4.592,19.119]],"o":[[13.564,-4.242],[5.429,16.761],[-10.104,3.128],[-4.4,-18.318]],"v":[[-17.462,-21.373],[16.324,0.509],[2.569,38.952],[-30.343,14.475]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":88,"op":118,"st":62,"ct":1,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"fing 18","parent":18,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":88,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":93,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":111,"s":[100]},{"t":117,"s":[0]}],"ix":11},"r":{"a":0,"k":6.1,"ix":10},"p":{"a":0,"k":[113.88,108.163,0],"ix":2,"l":2},"a":{"a":0,"k":[-57.209,-123.599,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":88,"s":[80,80,100]},{"t":93,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-10.724,3.314],[-5.355,-17.684],[12.584,-3.716],[4.298,14.924]],"o":[[10.724,-3.314],[4.501,14.864],[-10.765,3.179],[-4.854,-16.858]],"v":[[1.619,12.264],[29.188,35.414],[16.875,71.702],[-10.073,47.258]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":88,"op":118,"st":62,"ct":1,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"fing 17","parent":18,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":88,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":93,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":111,"s":[100]},{"t":117,"s":[0]}],"ix":11},"r":{"a":0,"k":6.1,"ix":10},"p":{"a":0,"k":[90.446,28.252,0],"ix":2,"l":2},"a":{"a":0,"k":[-41.752,-135.068,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":88,"s":[80,80,100]},{"t":93,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.258,1.792],[-2.826,-21.84],[15.524,-1.9],[3.141,18.242]],"o":[[13.258,-1.792],[2.375,18.358],[-13.28,1.625],[-4.142,-24.05]],"v":[[21.137,-0.27],[49.761,29.412],[27.159,61.142],[0.795,34.424]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":88,"op":118,"st":62,"ct":1,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"fing[ 7","parent":18,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":88,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":93,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":111,"s":[100]},{"t":117,"s":[0]}],"ix":11},"r":{"a":0,"k":6.1,"ix":10},"p":{"a":0,"k":[19.788,-12.163,0],"ix":2,"l":2},"a":{"a":0,"k":[-86.799,-166.745,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":88,"s":[-80,80,100]},{"t":93,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.138,5.627],[-9.148,-20.032],[12.138,-5.627],[8.252,16.569]],"o":[[12.138,-5.627],[7.689,16.838],[-12.138,5.627],[-9.496,-19.066]],"v":[[-35.011,-30.885],[3.465,-10.881],[-4.934,28.531],[-42.425,10.452]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":88,"op":118,"st":62,"ct":1,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"paw 7","parent":18,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":88,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":93,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":111,"s":[100]},{"t":117,"s":[0]}],"ix":11},"r":{"a":0,"k":30.6,"ix":10},"p":{"a":0,"k":[12.167,99.627,0],"ix":2,"l":2},"a":{"a":0,"k":[-90.693,-55.919,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":88,"s":[-80,80,100]},{"t":93,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-32.861,-3.978],[-10.234,-28.476],[4.708,-17.633],[22.026,4.619],[12.754,51.01],[-23.211,20.233]],"o":[[31.228,3.781],[8.487,23.616],[-11.359,42.547],[-28.358,-5.947],[-3.674,-14.694],[18.127,-15.801]],"v":[[7.22,-67.467],[64.269,-13.923],[82.696,42.173],[-3.422,50.567],[-87.791,22.527],[-56.533,-28.234]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-88.27,-54.412],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":88,"op":118,"st":62,"ct":1,"bm":0},{"ddd":0,"ind":24,"ty":3,"nm":"Null Collect  4","parent":1,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-59.573,-485.997,0],"ix":2,"l":2},"a":{"a":0,"k":[54,74,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":89,"s":[100,100,100]},{"t":116,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"ip":75,"op":107,"st":31,"bm":0},{"ddd":0,"ind":25,"ty":4,"nm":"fing 16","parent":24,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":80,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":100,"s":[100]},{"t":106,"s":[0]}],"ix":11},"r":{"a":0,"k":1.2,"ix":10},"p":{"a":0,"k":[131.093,-3.779,0],"ix":2,"l":2},"a":{"a":0,"k":[-73.71,-156.97,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":75,"s":[80,80,100]},{"t":80,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.564,4.242],[-6.166,-19.036],[12.518,-3.875],[4.592,19.119]],"o":[[13.564,-4.242],[5.429,16.761],[-10.104,3.128],[-4.4,-18.318]],"v":[[-17.462,-21.373],[16.324,0.509],[2.569,38.952],[-30.343,14.475]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":75,"op":107,"st":49,"ct":1,"bm":0},{"ddd":0,"ind":26,"ty":4,"nm":"fing 15","parent":24,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":80,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":100,"s":[100]},{"t":106,"s":[0]}],"ix":11},"r":{"a":0,"k":1.2,"ix":10},"p":{"a":0,"k":[-53.566,70.219,0],"ix":2,"l":2},"a":{"a":0,"k":[-57.209,-123.599,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":75,"s":[-80,80,100]},{"t":80,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-10.724,3.314],[-5.355,-17.684],[12.584,-3.716],[4.298,14.924]],"o":[[10.724,-3.314],[4.501,14.864],[-10.765,3.179],[-4.854,-16.858]],"v":[[1.619,12.264],[29.188,35.414],[16.875,71.702],[-10.073,47.258]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":75,"op":107,"st":49,"ct":1,"bm":0},{"ddd":0,"ind":27,"ty":4,"nm":"fing 14","parent":24,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":80,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":100,"s":[100]},{"t":106,"s":[0]}],"ix":11},"r":{"a":0,"k":1.2,"ix":10},"p":{"a":0,"k":[-20.168,-6.067,0],"ix":2,"l":2},"a":{"a":0,"k":[-41.752,-135.068,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":75,"s":[-80,80,100]},{"t":80,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.258,1.792],[-2.826,-21.84],[15.524,-1.9],[3.141,18.242]],"o":[[13.258,-1.792],[2.375,18.358],[-13.28,1.625],[-4.142,-24.05]],"v":[[21.137,-0.27],[49.761,29.412],[27.159,61.142],[0.795,34.424]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":75,"op":107,"st":49,"ct":1,"bm":0},{"ddd":0,"ind":28,"ty":4,"nm":"fing[ 6","parent":24,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":80,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":100,"s":[100]},{"t":106,"s":[0]}],"ix":11},"r":{"a":0,"k":1.2,"ix":10},"p":{"a":0,"k":[55.052,-37.176,0],"ix":2,"l":2},"a":{"a":0,"k":[-86.799,-166.745,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":75,"s":[80,80,100]},{"t":80,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.138,5.627],[-9.148,-20.032],[12.138,-5.627],[8.252,16.569]],"o":[[12.138,-5.627],[7.689,16.838],[-12.138,5.627],[-9.496,-19.066]],"v":[[-35.011,-30.885],[3.465,-10.881],[-4.934,28.531],[-42.425,10.452]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":75,"op":107,"st":49,"ct":1,"bm":0},{"ddd":0,"ind":29,"ty":4,"nm":"paw 6","parent":24,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":80,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":100,"s":[100]},{"t":106,"s":[0]}],"ix":11},"r":{"a":0,"k":-23.3,"ix":10},"p":{"a":0,"k":[48.407,74.676,0],"ix":2,"l":2},"a":{"a":0,"k":[-90.693,-55.919,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":75,"s":[80,80,100]},{"t":80,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-32.861,-3.978],[-10.234,-28.476],[4.708,-17.633],[22.026,4.619],[12.754,51.01],[-23.211,20.233]],"o":[[31.228,3.781],[8.487,23.616],[-11.359,42.547],[-28.358,-5.947],[-3.674,-14.694],[18.127,-15.801]],"v":[[7.22,-67.467],[64.269,-13.923],[82.696,42.173],[-3.422,50.567],[-87.791,22.527],[-56.533,-28.234]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-88.27,-54.412],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":75,"op":107,"st":49,"ct":1,"bm":0},{"ddd":0,"ind":30,"ty":3,"nm":"Null Collect  3","parent":1,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[121.637,-226.383,0],"ix":2,"l":2},"a":{"a":0,"k":[16,112,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":74,"s":[100,100,100]},{"t":89,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"ip":50,"op":85,"st":25,"bm":0},{"ddd":0,"ind":31,"ty":4,"nm":"fing 13","parent":30,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":78,"s":[100]},{"t":84,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-67.835,36.951,0],"ix":2,"l":2},"a":{"a":0,"k":[-72.474,-156.87,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":50,"s":[-80,80,100]},{"t":59,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.769,3.993],[-5.805,-17.921],[14.767,-3.897],[4.323,17.999]],"o":[[12.769,-3.993],[5.111,15.779],[-9.628,2.541],[-4.142,-17.245]],"v":[[-13.788,-17.277],[15.539,2.579],[1.508,35.005],[-27.583,15.479]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":50,"op":85,"st":24,"ct":1,"bm":0},{"ddd":0,"ind":32,"ty":4,"nm":"fing 12","parent":30,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":78,"s":[100]},{"t":84,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[118.835,69.065,0],"ix":2,"l":2},"a":{"a":0,"k":[-58.46,-164.756,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":50,"s":[80,80,100]},{"t":59,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.03,-3.036],[5.119,-21.419],[15.186,3.74],[-4.548,17.943]],"o":[[13.03,3.036],[-4.302,18.004],[-12.991,-3.2],[5.137,-20.268]],"v":[[17.603,-34.486],[32.062,5.912],[-2.425,35.858],[-15.465,-5.498]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":50,"op":85,"st":24,"ct":1,"bm":0},{"ddd":0,"ind":33,"ty":4,"nm":"fing 11","parent":30,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":78,"s":[100]},{"t":84,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[69.911,1.769,0],"ix":2,"l":2},"a":{"a":0,"k":[-60.134,-166.552,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":50,"s":[80,80,100]},{"t":59,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.262,-1.762],[3.025,-21.814],[15.476,2.255],[-1.773,18.426]],"o":[[13.262,1.762],[-2.542,18.335],[-13.239,-1.929],[2.337,-24.292]],"v":[[12.175,-39.154],[32.148,4.016],[-0.054,36.978],[-19.165,-4.224]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":50,"op":85,"st":24,"ct":1,"bm":0},{"ddd":0,"ind":34,"ty":4,"nm":"fing[ 5","parent":30,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":78,"s":[100]},{"t":84,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-5.507,-0.177,0],"ix":2,"l":2},"a":{"a":0,"k":[-67.552,-167.498,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":50,"s":[-80,80,100]},{"t":59,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.164,2.389],[-3.81,-21.69],[13.164,-2.389],[3.815,18.113]],"o":[[13.164,-2.389],[3.202,18.232],[-13.164,2.389],[-4.389,-20.843]],"v":[[-7.486,-38.228],[23.835,-5.326],[7.736,34.228],[-25.085,2.826]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":50,"op":85,"st":24,"ct":1,"bm":0},{"ddd":0,"ind":35,"ty":4,"nm":"paw 5","parent":30,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":78,"s":[100]},{"t":84,"s":[0]}],"ix":11},"r":{"a":0,"k":24.5,"ix":10},"p":{"a":0,"k":[14.125,111.731,0],"ix":2,"l":2},"a":{"a":0,"k":[-86.793,-55.034,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":50,"s":[-80,80,100]},{"t":59,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-30.529,-0.346],[-15.994,-25.694],[9.394,-21.863],[22.471,1.239],[6.387,42.382],[-17.141,19.824]],"o":[[36.437,0.412],[13.262,21.305],[-20.892,48.621],[-28.251,-1.558],[-2.257,-14.977],[15.728,-18.19]],"v":[[-1.082,-67.093],[60.459,-15.264],[84.625,41.868],[-2.81,49.109],[-83.84,23.327],[-54.511,-27.128]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-88.27,-54.412],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":50,"op":85,"st":24,"ct":1,"bm":0},{"ddd":0,"ind":36,"ty":3,"nm":"Null Collect  2","parent":1,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[127.455,169.862,0],"ix":2,"l":2},"a":{"a":0,"k":[10,74,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":24,"s":[100,100,100]},{"t":39,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"ip":-3,"op":84,"st":0,"bm":0},{"ddd":0,"ind":37,"ty":4,"nm":"fing 4","parent":36,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[100]},{"t":33,"s":[0]}],"ix":11},"r":{"a":0,"k":16.7,"ix":10},"p":{"a":0,"k":[-48.488,-15.632,0],"ix":2,"l":2},"a":{"a":0,"k":[-73.71,-156.97,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-3,"s":[-80,80,100]},{"t":0,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.564,4.242],[-6.166,-19.036],[12.518,-3.875],[4.592,19.119]],"o":[[13.564,-4.242],[5.429,16.761],[-10.104,3.128],[-4.4,-18.318]],"v":[[-17.462,-21.373],[16.324,0.509],[2.569,38.952],[-30.343,14.475]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-3,"op":84,"st":-29,"ct":1,"bm":0},{"ddd":0,"ind":38,"ty":4,"nm":"fing 3","parent":36,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[100]},{"t":33,"s":[0]}],"ix":11},"r":{"a":0,"k":16.7,"ix":10},"p":{"a":0,"k":[104.488,111.541,0],"ix":2,"l":2},"a":{"a":0,"k":[-57.209,-123.599,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-3,"s":[80,80,100]},{"t":0,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-10.724,3.314],[-5.355,-17.684],[12.584,-3.716],[4.298,14.924]],"o":[[10.724,-3.314],[4.501,14.864],[-10.765,3.179],[-4.854,-16.858]],"v":[[1.619,12.264],[29.188,35.414],[16.875,71.702],[-10.073,47.258]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-3,"op":84,"st":-29,"ct":1,"bm":0},{"ddd":0,"ind":39,"ty":4,"nm":"fing 2","parent":36,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[100]},{"t":33,"s":[0]}],"ix":11},"r":{"a":0,"k":16.7,"ix":10},"p":{"a":0,"k":[96.154,28.682,0],"ix":2,"l":2},"a":{"a":0,"k":[-41.752,-135.068,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-3,"s":[80,80,100]},{"t":0,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.258,1.792],[-2.826,-21.84],[15.524,-1.9],[3.141,18.242]],"o":[[13.258,-1.792],[2.375,18.358],[-13.28,1.625],[-4.142,-24.05]],"v":[[21.137,-0.27],[49.761,29.412],[27.159,61.142],[0.795,34.424]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-3,"op":84,"st":-29,"ct":1,"bm":0},{"ddd":0,"ind":40,"ty":4,"nm":"fing[ 2","parent":36,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[100]},{"t":33,"s":[0]}],"ix":11},"r":{"a":0,"k":16.7,"ix":10},"p":{"a":0,"k":[34.136,-24.041,0],"ix":2,"l":2},"a":{"a":0,"k":[-86.799,-166.745,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-3,"s":[-80,80,100]},{"t":0,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.138,5.627],[-9.148,-20.032],[12.138,-5.627],[8.252,16.569]],"o":[[12.138,-5.627],[7.689,16.838],[-12.138,5.627],[-9.496,-19.066]],"v":[[-35.011,-30.885],[3.465,-10.881],[-4.934,28.531],[-42.425,10.452]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-3,"op":84,"st":-29,"ct":1,"bm":0},{"ddd":0,"ind":41,"ty":4,"nm":"paw 2","parent":36,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[100]},{"t":33,"s":[0]}],"ix":11},"r":{"a":0,"k":41.2,"ix":10},"p":{"a":0,"k":[6.081,84.44,0],"ix":2,"l":2},"a":{"a":0,"k":[-90.693,-55.919,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-3,"s":[-80,80,100]},{"t":0,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-32.861,-3.978],[-10.234,-28.476],[4.708,-17.633],[22.026,4.619],[12.754,51.01],[-23.211,20.233]],"o":[[31.228,3.781],[8.487,23.616],[-11.359,42.547],[-28.358,-5.947],[-3.674,-14.694],[18.127,-15.801]],"v":[[7.22,-67.467],[64.269,-13.923],[82.696,42.173],[-3.422,50.567],[-87.791,22.527],[-56.533,-28.234]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-88.27,-54.412],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-3,"op":84,"st":-29,"ct":1,"bm":0},{"ddd":0,"ind":42,"ty":3,"nm":"Null Collect  1","parent":1,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-60.943,-20.726,0],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,17.667]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":50,"s":[100,100,100]},{"t":65,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"ip":-3,"op":244,"st":0,"bm":0},{"ddd":0,"ind":43,"ty":4,"nm":"fing","parent":42,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":55,"s":[100]},{"t":65,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[131.96,1.451,0],"ix":2,"l":2},"a":{"a":0,"k":[-72.474,-156.87,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-3,"s":[80,80,100]},{"t":0,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.769,3.993],[-5.805,-17.921],[14.767,-3.897],[4.323,17.999]],"o":[[12.769,-3.993],[5.111,15.779],[-9.628,2.541],[-4.142,-17.245]],"v":[[-13.788,-17.277],[15.539,2.579],[1.508,35.005],[-27.583,15.479]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-3,"op":70,"st":-29,"ct":1,"bm":0},{"ddd":0,"ind":44,"ty":4,"nm":"fing","parent":42,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":55,"s":[100]},{"t":65,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-54.71,33.565,0],"ix":2,"l":2},"a":{"a":0,"k":[-58.46,-164.756,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-3,"s":[-80,80,100]},{"t":0,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.03,-3.036],[5.119,-21.419],[15.186,3.74],[-4.548,17.943]],"o":[[13.03,3.036],[-4.302,18.004],[-12.991,-3.2],[5.137,-20.268]],"v":[[17.603,-34.486],[32.062,5.912],[-2.425,35.858],[-15.465,-5.498]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-3,"op":70,"st":-29,"ct":1,"bm":0},{"ddd":0,"ind":45,"ty":4,"nm":"fing","parent":42,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":55,"s":[100]},{"t":65,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-5.786,-33.731,0],"ix":2,"l":2},"a":{"a":0,"k":[-60.134,-166.552,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-3,"s":[-80,80,100]},{"t":0,"s":[-100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.262,-1.762],[3.025,-21.814],[15.476,2.255],[-1.773,18.426]],"o":[[13.262,1.762],[-2.542,18.335],[-13.239,-1.929],[2.337,-24.292]],"v":[[12.175,-39.154],[32.148,4.016],[-0.054,36.978],[-19.165,-4.224]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-3,"op":70,"st":-29,"ct":1,"bm":0},{"ddd":0,"ind":46,"ty":4,"nm":"fing[","parent":42,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":55,"s":[100]},{"t":65,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[69.632,-35.677,0],"ix":2,"l":2},"a":{"a":0,"k":[-67.552,-167.498,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-3,"s":[80,80,100]},{"t":0,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.164,2.389],[-3.81,-21.69],[13.164,-2.389],[3.815,18.113]],"o":[[13.164,-2.389],[3.202,18.232],[-13.164,2.389],[-4.389,-20.843]],"v":[[-7.486,-38.228],[23.835,-5.326],[7.736,34.228],[-25.085,2.826]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-66.775,-165.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-3,"op":70,"st":-29,"ct":1,"bm":0},{"ddd":0,"ind":47,"ty":4,"nm":"paw","parent":42,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":55,"s":[100]},{"t":65,"s":[0]}],"ix":11},"r":{"a":0,"k":-24.5,"ix":10},"p":{"a":0,"k":[50,76.231,0],"ix":2,"l":2},"a":{"a":0,"k":[-86.793,-55.034,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-3,"s":[80,80,100]},{"t":0,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-30.529,-0.346],[-15.994,-25.694],[9.394,-21.863],[22.471,1.239],[6.387,42.382],[-17.141,19.824]],"o":[[36.437,0.412],[13.262,21.305],[-20.892,48.621],[-28.251,-1.558],[-2.257,-14.977],[15.728,-18.19]],"v":[[-1.082,-67.093],[60.459,-15.264],[84.625,41.868],[-2.81,49.109],[-83.84,23.327],[-54.511,-27.128]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.871583946078,0.871583946078,0.871583946078,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-88.27,-54.412],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-3,"op":70,"st":-29,"ct":1,"bm":0}],"markers":[],"props":{}}')
    }
  },
  function(e) {
    var t = function(t) {
      return e(e.s = t)
    };
    e.O(0, [774, 179], function() {
      return t(1118), t(4285)
    }), _N_E = e.O()
  }
]);