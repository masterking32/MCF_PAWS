(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [471], {
    8558: function(e, t, a) {
      "use strict";
      var n = a(7294),
        c = a(9578),
        r = a(5675),
        i = a.n(r),
        s = a(7041),
        l = a(861),
        o = a(9195),
        m = a(1513);
      a(2480);
      var A = a(4441),
        d = a(8502),
        u = a(2783),
        h = a(247),
        g = a(6139);
      let w = e => {
        let {
          openPhantom: t
        } = e;
        return n.createElement(n.Fragment, null, n.createElement("div", {
          className: "modal-title mb-3"
        }, n.createElement("div", {
          className: "icon-con"
        }, n.createElement(i(), {
          src: d.Z,
          alt: "",
          width: 25
        })), "Phantom Connect"), n.createElement("div", {
          className: "option-descr"
        }, "Already have a Phantom wallet?"), n.createElement("div", {
          className: "options-list mb-3"
        }, n.createElement("div", {
          className: "option-con",
          onClick: t
        }, n.createElement("div", {
          className: "side-block"
        }, n.createElement("div", {
          className: "icon-con"
        }), n.createElement("div", {
          className: "name"
        }, "Connect Phantom wallet")), n.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "21",
          height: "22",
          viewBox: "0 0 21 22",
          fill: "none"
        }, n.createElement("path", {
          d: "M7.42567 17.0349L12.8872 11.5734L7.42567 6.11182",
          stroke: "#FFFDF8",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })))), n.createElement("div", {
          className: "option-descr"
        }, "Create a new Phantom wallet"), n.createElement("div", {
          className: "options-list"
        }, n.createElement("a", {
          className: "option-con",
          href: "https://phantom.com/download",
          target: "_blank",
          rel: "noreferrer"
        }, n.createElement("div", {
          className: "side-block"
        }, n.createElement("div", {
          className: "icon-con"
        }), n.createElement("div", {
          className: "name"
        }, "Install Phantom wallet")), n.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "21",
          height: "22",
          viewBox: "0 0 21 22",
          fill: "none"
        }, n.createElement("path", {
          d: "M7.42567 17.0349L12.8872 11.5734L7.42567 6.11182",
          stroke: "#FFFDF8",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })))))
      };
      t.Z = () => {
        let e = (0, o.TL)(),
          t = (0, o.CG)(e => e.main.isSolWalletModalOpen),
          a = (0, o.CG)(e => e.main.isMobile),
          [r, v] = (0, n.useState)(0),
          [E, p] = (0, n.useState)(!1),
          b = [{
            id: "phantom",
            name: "Phantom",
            icon: d.Z,
            onClick: () => {
              v(1)
            }
          }],
          f = () => {
            e((0, g.W2)(!1))
          };
        (0, n.useEffect)(() => {
          t || setTimeout(() => {
            v(0)
          }, 500)
        }, [t]);
        let N = async t => {
          let {
            signature: a,
            publicKey: n,
            token: c
          } = t;
          if (!E) try {
            p(!0);
            let {
              success: t,
              error: r
            } = await (0, h.Z)("/wallet/solana/check_proof", {
              method: "POST",
              body: {
                signature: a,
                publicKey: n,
                token: c
              }
            });
            if ("Wallet already exists" === r) {
              (0, m.Z)({
                toastId: "solConnect",
                imgCode: "cross",
                message: "Wallet already connected"
              });
              return
            }
            if (!t || r) {
              (0, m.Z)({
                toastId: "solConnect",
                imgCode: "cross",
                message: "Something went wrong. Try again"
              });
              return
            }
            return e((0, g.M)({
              proofSolanaWallet: n
            })), !0
          } catch (e) {
            console.error(e)
          } finally {
            p(!1)
          }
        }, D = async () => {
          if (!E) try {
            p(!0);
            let {
              success: e,
              data: t
            } = await (0, h.Z)("/wallet/solana/payload");
            if (!e) return;
            return t
          } catch (e) {
            console.error(e)
          } finally {
            p(!1)
          }
        }, P = () => {
          "visible" === document.visibilityState && (window.dispatchEvent(new CustomEvent("refetchUserData")), document.removeEventListener("visibilitychange", P))
        }, k = async () => {
          try {
            var e, t;
            if (null !== (e = window) && void 0 !== e && null !== (t = e.phantom) && void 0 !== t && t.solana) {
              let e = await window.phantom.solana.connect();
              if (!(null != e && e.publicKey)) return;
              let t = await D();
              if (!t) {
                (0, m.Z)({
                  toastId: "solConnect",
                  imgCode: "cross",
                  message: "Something went wrong while connect wallet. Try again"
                });
                return
              }
              let a = new TextEncoder().encode(t),
                {
                  signature: n,
                  publicKey: r
                } = await window.phantom.solana.signMessage(a),
                i = c.Z.encode(n),
                s = r.toBase58();
              await N({
                signature: i,
                publicKey: s,
                token: t
              }), f();
              return
            }
            let n = encodeURIComponent("".concat("https://paws.community", "/phantom-connect?unSaveAccessToken=").concat((0, s.getCookie)("".concat("paws", "-unSaveAccessToken")))),
              r = "https://phantom.app/ul/browse/".concat(n, "?ref=").concat("https://paws.community");
            a ? (document.addEventListener("visibilitychange", P), window.location.href = r) : window.open(r, "_blank")
          } catch (e) {
            (0, m.Z)({
              toastId: "solConnect",
              imgCode: "cross",
              message: "Something went wrong. Try again"
            })
          }
        };
        return n.createElement(l.Z, {
          isOpen: t,
          close: f
        }, n.createElement("div", {
          className: "custom-connect-wallet-modal"
        }, n.createElement("div", {
          className: "cross-con",
          onClick: f
        }, n.createElement(i(), {
          src: A.Z,
          alt: "",
          width: 24,
          height: 24
        })), n.createElement("div", {
          className: "tabs-carousel-con"
        }, n.createElement("div", {
          className: "tabs-carousel-wrapper",
          style: {
            transform: a ? "translate(".concat(-100 * r, "vw)") : "translate(".concat(-500 * r, "px)")
          }
        }, n.createElement("div", {
          className: "custom-carousel-item"
        }, n.createElement("div", {
          className: "modal-title"
        }, "Connect Solana Wallet"), n.createElement("div", {
          className: "modal-descr"
        }, "Choose an app to authorize your wallet"), n.createElement("div", {
          className: "options-list mb-3"
        }, b.map(e => {
          let {
            id: t,
            name: a,
            icon: c,
            onClick: r
          } = e;
          return n.createElement("div", {
            key: t,
            className: "option-con ".concat(t),
            onClick: r
          }, n.createElement("div", {
            className: "side-block"
          }, n.createElement("div", {
            className: "icon-con"
          }, n.createElement(i(), {
            src: c,
            alt: "",
            width: 36,
            height: 36
          })), n.createElement("div", {
            className: "name"
          }, a)), n.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "21",
            height: "22",
            viewBox: "0 0 21 22",
            fill: "none"
          }, n.createElement("path", {
            d: "M7.42567 17.0349L12.8872 11.5734L7.42567 6.11182",
            stroke: "#FFFDF8",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })))
        }))), n.createElement("div", {
          className: "custom-carousel-item"
        }, [1, 2].includes(r) && n.createElement(w, {
          openPhantom: k
        })), n.createElement("div", {
          className: "custom-carousel-item"
        }, [2].includes(r) && n.createElement(n.Fragment, null, n.createElement("div", {
          className: "modal-title"
        }, "Continue in Phantom"), n.createElement("div", {
          className: "modal-descr"
        }, "We are currently in the process of connecting your Phantom Wallet for use in PAWS. Please note that this may take some time!"), n.createElement("div", {
          className: "lottie-con"
        }, 2 === r && n.createElement(u.Z, {
          isShow: 2 === r
        })), n.createElement("div", {
          className: "retry-btn",
          onClick: () => v(1)
        }, "Retry")))))))
      }
    },
    4965: function(e, t, a) {
      "use strict";
      var n = a(7294),
        c = a(8130);
      t.Z = e => {
        let {
          date: t,
          withSymbols: a = !0,
          onComplete: r
        } = e;
        return n.createElement(c.ZP, {
          date: t,
          zeroPadTime: 2,
          onComplete: r,
          daysInHours: !0,
          renderer: e => {
            let {
              formatted: {
                hours: t,
                minutes: c,
                seconds: r
              }
            } = e, i = Math.floor(t / 24), s = Math.floor(t % 24);
            return n.createElement("div", {
              className: "custom-timer"
            }, !+t && n.createElement("p", {
              className: "value"
            }, !a && "0:", !+c && !a && "00:", +c ? "".concat(c).concat(a ? "M " : ":") : "", r, a ? "S" : ""), !!(+s + 24 * i) && t < 48 && n.createElement("p", {
              className: "value"
            }, s + 24 * i, a ? "H " : ":", c, a ? "M " : ":", r, a ? "S " : ""), (!!+s || !!i) && t >= 48 && n.createElement("p", {
              className: "value"
            }, i, "D ", s, "H"))
          }
        })
      }
    },
    6463: function(e, t, a) {
      "use strict";
      var n = a(7294);
      a(5723), t.Z = () => n.createElement("div", {
        className: "loader-responsive-con"
      }, n.createElement("div", {
        className: "icon-con"
      }, n.createElement("svg", {
        className: "circular-loader",
        viewBox: "25 25 50 50"
      }, n.createElement("circle", {
        className: "loader-path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "white",
        strokeWidth: "2"
      }))))
    },
    4650: function(e, t, a) {
      "use strict";
      a.d(t, {
        Z: function() {
          return O
        }
      });
      var n = a(7462),
        c = a(7294),
        r = a(5675),
        i = a.n(r),
        s = a(6066),
        l = a(9163),
        o = a(8809),
        m = a(742),
        A = a(1881),
        d = a(3129),
        u = a(970),
        h = a(383),
        g = a(713),
        w = a(2121),
        v = {
          src: "/_next/static/media/hat.75e21873.png",
          height: 422,
          width: 495,
          blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAvUlEQVR42mNABv///+eDsf8eW80EZtxd1g9mfDq0Kv7ljoWvvu5ftv773sUGILHfR1czM4DA9wOLre8v6fl/fUr1/w8bp/3/f2bT08/3j3EzwMCb9VPbL05v/H9yct3/ExOq/z/fOPP//+t7whhA4NO26SIbqtNfV3vaXnNgYIiyZ2DwbXQ137SjIfvTrz1zpRjmpwe4Flmr7GBAA60+5tP2NWeZgNjMU3MC2UGMIlsD1gJbQ5b/m6czwRQCAFD/UyiFzdoQAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 7
        },
        E = a(9195),
        p = a(1249),
        b = a(7914),
        f = a(6361),
        N = a(3750),
        D = {
          src: "/_next/static/media/starAnimatedSilver.b469545a.svg",
          height: 200,
          width: 200,
          blurWidth: 0,
          blurHeight: 0
        };
      a(1106);
      let P = {
          1: p.Z,
          2: b.Z,
          3: f.Z,
          4: N.Z
        },
        k = {
          1: {
            src: "/_next/static/media/starAnimatedBronze.256bb892.svg",
            height: 200,
            width: 200,
            blurWidth: 0,
            blurHeight: 0
          },
          2: D,
          3: {
            src: "/_next/static/media/starAnimatedGold.c0ea8ebe.svg",
            height: 200,
            width: 200,
            blurWidth: 0,
            blurHeight: 0
          },
          4: D
        };
      var O = e => {
        let {
          isShow: t,
          openDetailInfo: a = () => {}
        } = e, r = (0, E.CG)(e => e.main.isMobile), p = (0, E.CG)(e => e.main.user.gameData.balance), b = (0, E.CG)(e => e.main.user.gameData.wpaws), f = (0, E.CG)(e => e.main.user.gameData.badgeTier) || 0, N = !(0, E.CG)(e => e.main.user.grinchRemoved), D = (0, E.CG)(e => e.main.user.allocationData.notcoin.converted), O = (0, E.CG)(e => e.main.user.allocationData.dogs.converted), C = c.createElement("div", {
          className: "count step-2"
        }, c.createElement("div", {
          className: "text"
        }, "Newcomer"), c.createElement("div", {
          className: "img-con"
        }, c.createElement(i(), {
          src: u.Z,
          alt: "",
          width: r ? 18 : 35,
          height: r ? 18 : 35
        })), c.createElement("div", {
          className: "text"
        }, "RANK"));
        return D && !O && (C = c.createElement("div", {
          className: "count step-2"
        }, c.createElement("div", {
          className: "text"
        }, "Pioneer"), c.createElement("div", {
          className: "img-con"
        }, c.createElement(i(), {
          src: h.Z,
          alt: "",
          width: r ? 18 : 35,
          height: r ? 18 : 35
        })), c.createElement("div", {
          className: "text"
        }, "RANK"))), !D && O && (C = c.createElement("div", {
          className: "count step-2"
        }, c.createElement("div", {
          className: "text"
        }, "Legend"), c.createElement("div", {
          className: "img-con"
        }, c.createElement(i(), {
          src: g.Z,
          alt: "",
          width: r ? 18 : 35,
          height: r ? 18 : 35
        })), c.createElement("div", {
          className: "text"
        }, "RANK"))), D && O && (C = c.createElement("div", {
          className: "count step-2"
        }, c.createElement("div", {
          className: "text"
        }, "Champ"), c.createElement("div", {
          className: "img-con"
        }, c.createElement(i(), {
          src: w.Z,
          alt: "",
          width: r ? 18 : 35,
          height: r ? 18 : 35
        })), c.createElement("div", {
          className: "text"
        }, "RANK"))), c.createElement("div", {
          className: "user-balance-wrap"
        }, c.createElement("div", {
          className: "img-con"
        }, c.createElement("div", {
          className: "main-logo"
        }, c.createElement(i(), {
          src: l.Z,
          alt: "",
          width: r ? 120 : 170,
          height: r ? 120 : 170
        }), c.createElement("div", {
          className: "hat-con"
        }, c.createElement(i(), {
          src: v,
          alt: "",
          width: 250
        }))), P[f] && c.createElement("div", {
          className: "user-mark tier-".concat(f)
        }, c.createElement("div", {
          className: "icon-con"
        }, c.createElement(i(), {
          src: P[f],
          alt: "",
          width: r ? 22 : 49,
          height: r ? 22 : 49
        }), t && c.createElement("div", {
          className: "animated-icon"
        }, c.createElement(i(), {
          src: k[f],
          alt: "",
          width: r ? 75 : 150,
          height: r ? 75 : 150
        }))))), c.createElement("div", {
          className: "text-carousel-con"
        }, !!b && c.createElement(s.Z, (0, n.Z)({
          className: "balance-slider"
        }, {
          arrows: !1,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: !0,
          dots: !0,
          infinite: !0,
          autoplay: !0,
          autoplaySpeed: 5e3,
          appendDots: e => c.createElement("ul", {
            className: "dots-con"
          }, e.map((e, t) => c.createElement("li", (0, n.Z)({
            key: "dot-indicator-con".concat(t)
          }, e.props, {
            className: "indicator-con ".concat(e.props.className)
          }))))
        }), c.createElement("div", {
          className: "currect-balance-wrap"
        }, c.createElement("div", {
          className: "my-wrap"
        }, c.createElement("div", {
          className: "count"
        }, !N && (p > 1e5 ? (0, o.i)(p) : (0, m.Z)(p, ",")), N && c.createElement("div", {
          className: "d-flex align-items-center pt-2"
        }, c.createElement(i(), {
          src: A.Z,
          alt: "",
          width: r ? 50 : 80,
          height: r ? 50 : 80
        }))), c.createElement("div", {
          className: "currency"
        }, "PAWS"))), c.createElement("div", {
          className: "currect-balance-wrap"
        }, c.createElement("div", {
          className: "my-wrap"
        }, c.createElement("div", {
          className: "count"
        }, b > 1e5 ? (0, o.i)(b) : (0, m.Z)(b, ",")), c.createElement("div", {
          className: "currency"
        }, "wPAWS")))), !b && c.createElement("div", {
          className: "currect-balance-wrap"
        }, c.createElement("div", {
          className: "my-wrap"
        }, c.createElement("div", {
          className: "count"
        }, !N && (p > 1e5 ? (0, o.i)(p) : (0, m.Z)(p, ",")), N && c.createElement("div", {
          className: "d-flex align-items-center pt-2"
        }, c.createElement(i(), {
          src: A.Z,
          alt: "",
          width: r ? 50 : 80,
          height: r ? 50 : 80
        }))), c.createElement("div", {
          className: "currency"
        }, "PAWS")))), c.createElement("div", {
          className: "view-score",
          onClick: a
        }, C, !!a && c.createElement("div", {
          className: "icon-con"
        }, c.createElement(i(), {
          src: d.Z,
          alt: "",
          width: 24,
          height: 24
        }))))
      }
    },
    6152: function(e, t) {
      "use strict";
      t.Z = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
        if (void 0 === t || 0 == +t) return Math.round(e);
        let a = +e,
          n = +t;
        return a ? Number.isNaN(a) || !("number" == typeof n && n % 1 == 0) ? NaN : (a = a.toString().split("e"), a = (a = Math.floor(+"".concat(a[0], "e").concat(a[1] ? +a[1] + n : n))).toString().split("e"), +"".concat(a[0], "e").concat(a[1] ? +a[1] - n : -n)) : 0
      }
    },
    247: function(e, t, a) {
      "use strict";
      var n = a(6656),
        c = a(7041),
        r = a(9993),
        i = a(9155),
        s = a(3454);

      function l(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), a.push.apply(a, n)
        }
        return a
      }

      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(a), !0).forEach(function(t) {
            (0, n.Z)(e, t, a[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
          })
        }
        return e
      }
      let m = async function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "application/json",
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          l = {
            "Secure-check": "paws"
          },
          m = await (0, r.Z)(n);
        m && (l.Authorization = "Bearer ".concat(m));
        let A = await (0, i.Z)(e, o({}, t), a, l);
        return 401 === A.status ? (await (0, c.deleteCookie)("".concat("paws", "-accessToken"), o(o({}, n), {}, {
          domain: s.env.APP_DOMAIN
        })), await (0, c.deleteCookie)("".concat("paws", "-refreshToken"), o(o({}, n), {}, {
          domain: s.env.APP_DOMAIN
        })), window.location.href = window.location.pathname, null) : await A.json()
      };
      t.Z = m
    },
    8809: function(e, t, a) {
      "use strict";
      a.d(t, {
        i: function() {
          return c
        }
      });
      var n = a(6152);
      let c = e => {
        if (!e) return "0";
        if (1e3 > +e) return e;
        if (1e6 > +e) return "".concat((0, n.Z)(+e / 1e3, 2), "K");
        if (1e9 > +e) return "".concat((0, n.Z)(+e / 1e6, 2), "M");
        if (1e12 > +e) return "".concat((0, n.Z)(+e / 1e9, 2), "B");
        if (1e15 > +e) return "".concat((0, n.Z)(+e / 1e12, 2), "T");
        if (1e18 > +e) {
          let t = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(+e / 1e12);
          return "".concat(t, "T")
        }
        return 0
      }
    },
    9993: function(e, t, a) {
      "use strict";
      a.d(t, {
        Z: function() {
          return d
        }
      });
      var n = a(6656),
        c = a(7041),
        r = a(9892),
        i = a.n(r),
        s = function(e) {
          try {
            let t = JSON.parse(i()(e.split(".")[1])).exp;
            return Math.floor(new Date().getTime() / 1e3) >= t
          } catch (e) {
            return !0
          }
        },
        l = a(9155),
        o = a(3454);

      function m(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), a.push.apply(a, n)
        }
        return a
      }

      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2 ? m(Object(a), !0).forEach(function(t) {
            (0, n.Z)(e, t, a[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : m(Object(a)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
          })
        }
        return e
      }
      var d = async function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = "",
          a = "";
        if ((0, c.hasCookie)("refreshToken", A(A({}, e), {}, {
            domain: o.env.APP_DOMAIN
          })) && s(t = await (0, c.getCookie)("refreshToken", A(A({}, e), {}, {
            domain: o.env.APP_DOMAIN
          }))) && (await (0, c.deleteCookie)("refreshToken", A(A({}, e), {}, {
            domain: o.env.APP_DOMAIN
          })), t = ""), (window.sessionStorage.getItem("accessToken") || (0, c.hasCookie)("".concat("paws", "-accessToken"), A(A({}, e), {}, {
            domain: o.env.APP_DOMAIN
          }))) && s(a = window.sessionStorage.getItem("accessToken") || await (0, c.getCookie)("".concat("paws", "-accessToken"), A(A({}, e), {}, {
            domain: o.env.APP_DOMAIN
          })))) {
          var n, r, i, m;
          await (0, c.deleteCookie)("".concat("paws", "-accessToken"), A(A({}, e), {}, {
            domain: o.env.APP_DOMAIN
          })), null === (n = window) || void 0 === n || null === (r = n.sessionStorage) || void 0 === r || r.removeItem("accessToken"), null === (i = window) || void 0 === i || null === (m = i.location) || void 0 === m || m.reload(), a = ""
        }
        if (!a && t && t) try {
          let n = await (0, l.Z)("/user/refresh", {
            body: {
              refreshToken: t
            },
            method: "GET"
          });
          if (a = (await n.json()).data.accessToken || "") {
            let t = new Date;
            t = new Date(t.getUTCFullYear() + 1, t.getUTCMonth(), t.getUTCDate()), await (0, c.setCookie)("accessToken", a, A(A({}, e), {}, {
              expires: t,
              domain: o.env.APP_DOMAIN
            }))
          }
        } catch (e) {
          console.error(e)
        }
        return a
      }
    },
    742: function(e, t) {
      "use strict";
      t.Z = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
        return void 0 === e ? 0 : e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t)
      }
    },
    2121: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/leaderboard.1534dad4.png",
        height: 160,
        width: 160,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9klEQVR42mMAgRVBHLz7qtjSdjWptV+eodNysJYjapkLIxsDCBxrFrPbnMe17PIcja/7OtX/319m+P/6Ir3X67L5Fx5pldVmuDzHUHVDleak+5sd3x+drPX/wVrT//e3Oj/dUKnecWmukRgDCOQxMPAen2a05MYqy//3Ntr+PzzJcBIDAwMzAwjsrpdjYoCCLbUKq7bXy3eD2BfmWTDtbZZnYmiy4gCrLFJndV6RJ/NsY5HMjUkOkkYMDAwMUz3FQHJgIDA5VevDuXXx/w/3Of1fkqp0jYGBgZEBBuIZGJSLbMQK2+MN0lr9JNPrrLlyy8QZwA4EAIlkVqq6Em8wAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8
      }
    },
    383: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/light.3675e5c1.png",
        height: 168,
        width: 168,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAv0lEQVR42mOAgZ8LGJhA9C0GBqbvkxhkQOzvExkYGcCSXWBJMPi9VbHj53wVNQawJmUmhh/NYFVg8Odc6uo/R7R7wewrxWwMMLCPgYHpz+7Edf+eTv//90HHkd+7Y7Z/jmBQYoCBr20Mkj8X2/v+OpnQ+ed+2/+fO5KDGBgYGP7ebmVi+NqJsP/nXtOd37cyWIPY/99NY2YAq1orBHbDl0l8md+mMliAHXoyg5UBGXxsYeF4W8ggCjZllysLshwAsvdIVaR588AAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8
      }
    },
    713: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/star.f3f12caf.png",
        height: 168,
        width: 168,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAz0lEQVR42mN4P4+B8ftODxYGBgaGr9MZpEAYxP6x25fl02JmRgZk8Pve7oV/HhxcyIAMPq5UF/51usXo524r939fHnz59/XJl597PNx/n2k1+rzWSJjhWReDwY/b/T/+fz36/9/Pm/9AGMT+eWfSjxeTGAwYQOD5Em29Xw8aX///OO0/CP962Pj6+TIzPQZk8POE6pPfl0z/g/DPkxpPGJDBo8kSeu/XKj99M18x6PU8xWAQ+9EUKYQJ97o5uTcyMPDC+BuA7Ltd7NwMDAwMAD4LbOV70vQlAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8
      }
    },
    970: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/start.8ed9b9aa.png",
        height: 168,
        width: 168,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAsElEQVR42mP4e0WakQEK/q1kALMxwL8l/Ir/FjFIgNktDPz/JjGwoSrYJpn3b4tACIj9v8Hc6j9DOA+Y3avHyABmxDBw/i9l4Po/10Pm7y2H/X/PKxX/Z2Bg+/k/n5Hhvz/C3n/L/Jz/PlT78PcSw+r/hmJSEMGTRoxgepOqz79lDDz/pjL4/m8REweLzWdmYvh3WIUJzFkv4/1vk7Ta/xhmwX8TGHgYcIE//zVRvAoA82BBlMnnPRcAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8
      }
    },
    8502: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/phantom.fa6d2c82.svg",
        height: 38,
        width: 45,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    7914: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/dolphin.6f72eb90.png",
        height: 88,
        width: 88,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1ElEQVR42h2PN46EQBBF+zp9zolws8JJGMEKJHyAS4gQkCA4BjkhAZ38KQgqqXr1DQPAtm3jRVEsURSJPM/FOI7zcRz8ubFpmrjreqdpmiAASZJA0zQMw3Be18VZGP7Pn88HkiTdaZqi7/tn7rZtse/7wgzDEN/vH4IgQNM08H3/VSFLECSY4zjCdV2UZQnP82BZFuq6Blk+T4I94eI4Rtd1Ny1fgJ5usoSu6zNb15VXVXVSeti2/QKqqkKW5ZMAzgAwqsWzLJvDMBSkIghYFEV5a/4AJO6xlMQr6j4AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8
      }
    },
    3750: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/goat.4a3ec95a.png",
        height: 281,
        width: 281,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABB0lEQVR42iXLvUrDYBiG4fd0vh6A4KiLh6A4ieAkRSfFScQKItjFSh1qBMFBSrU/Yh1SbWIHsUZKhSaklggBIUW/QpGGvCF5jHjDNd70l/EJ4Yyh2d8xdz1wzY51Ov0RCaLbAYT9BWm5I9gSaHsxHj6AghHKhbwjqBhGet31sJYtBNdOiPI7cNj2g5PuBKuXA40qkrmSrIvHN5hSWlg6MzB79IbN5hDLtRGTYg656gLbqofpAxVz2RZSuw1kHsfYuGOm9bqq5fuMzLMfpIsdbDUnmM81AsXwsf8U6UQpEunqq9x7YSi9ALk+UO75iUjudGJB/82IlStLPzfBF1bM9y60kglRMkG/BtC6Q1BN6sgAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8
      }
    },
    1249: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/hands.ab9624c8.png",
        height: 88,
        width: 88,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AbiJbwAUGBgp4drdmfny8DgKBwMAFxwYxyAuK2j37OnXAcaWeCnSx8zE5sS8Egf+AAATGwAAFx8dABktPu4hNDQ8AZ9iQ8H/9fM+GRkX+g0OCwb9+vYA+fDm+gUD/gYNHirDAZRKH/pBP0AFKjEtAPz6+wD/AQEAAP/+AO3o5wDMycX7Aa1hMfoB9egFO0JLABYgJQD9AAIA+vPwAMfAvwDk6e77AcNyOML07+49Dg8Q+iYsMgYCBwwAz8vO+s3FvgYOFyPCAdOAOynu7PTE9fT1EvwABwDy9PoA4dvbAAQLE+4BAAQ8AcdyMwD49fYp9fj/mOzt7znw8fMA+v0KyPPt8mcHDAjX0qd5y1yF7YMAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8
      }
    },
    6361: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/whale.7f7b8700.png",
        height: 88,
        width: 88,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9UlEQVR42gWAwUoCQQBA364z6pSZrFKHFI+1dhYq/J+69wt9hP5G0KlDF0GDKIrQk4JkICK7pja7OzptOADh251vvscd14QX2QMHdVLpudXGDTB0wpdbPxp9dtPFkyelQZXht1ihdHoV5GrNlrCzj7aMHj2xh3GFym7/yuiVMfvze0/u6Dg/Dw2zXAwkTp2StGSYErtA4Yy8EluRP4yJ14AosMoek0ubeGWFDkbo2QQ3U6JfP1eEdmCS6BUrLFrvzHLyjDWi58RfDT+XzrvrQHvjd41MQLk1XDMNpDpqOQDxuOrLzaa9De1lFCQka9NPdsVrYPgP2Fput3xe9xUAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8
      }
    },
    7678: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/arrowDown.9c6b0e3c.svg",
        height: 8,
        width: 13,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    3129: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/arrowSmall.8202cbdc.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    9163: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/pawsLogo.372b558c.svg",
        height: 20,
        width: 20,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    1881: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/stone.54a19ef6.png",
        height: 342,
        width: 342,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6UlEQVR42mMICY1gYoAAlrzCYofw6HhRBigorahihrG58guLzvT29/+vrat7kZWbPwEoxs8AA4HBoUvmL1z4f8LECb+rqqv/l5SV/69taLjfO2GiCkNQSFiBvZPL/+zc3D8LgIra2lr/dXZ1fW/v6vofERk9k8HEzGKBtY3dfxtb+9+RMbH/u3t6/je3tP5wdHH7b2vvuJTBzMLawsbO4b+rm/t/Gzv7vwoq6v8NjEz+O7u6f3R0djUEu8HUwqpWXVPnv76+0X89fcPvuvpGZzl5BHUYkIGOroGdkpKqj6qqhipMzMTMkgUAQKdVHCcd18IAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8
      }
    },
    8610: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/ton.089dfbd3.svg",
        height: 48,
        width: 48,
        blurWidth: 0,
        blurHeight: 0
      }
    },
    2480: function() {},
    5723: function() {},
    1106: function() {}
  }
]);