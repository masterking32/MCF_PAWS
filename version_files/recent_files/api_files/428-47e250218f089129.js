(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [428], {
    2080: function(e, t, a) {
      "use strict";
      a.d(t, {
        Z: function() {
          return N
        }
      });
      var n = a(7294),
        r = a(780),
        c = a.n(r),
        i = a(9578),
        s = a(5675),
        o = a.n(s),
        l = a(1163),
        m = a(5498),
        A = a(9195),
        d = a(1513);
      a(2480);
      var u = a(4441),
        h = {
          src: "/_next/static/media/phantom.fa6d2c82.svg",
          height: 38,
          width: 45,
          blurWidth: 0,
          blurHeight: 0
        },
        g = a(2783),
        p = a(247),
        w = a(6139),
        v = a(1876).Buffer;
      let E = (e, t) => {
        if (!t) throw Error("missing shared secret");
        let a = c().randomBytes(24),
          n = c().box.after(v.from(JSON.stringify(e)), a, t);
        return {
          nonce: a,
          encryptedPayload: n
        }
      };
      var b = a(1876).Buffer;
      let f = e => {
        let {
          openPhantom: t
        } = e;
        return n.createElement(n.Fragment, null, n.createElement("div", {
          className: "modal-title mb-3"
        }, n.createElement("div", {
          className: "icon-con"
        }, n.createElement(o(), {
          src: h,
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
      var N = () => {
        let e = (0, A.TL)(),
          t = (0, A.CG)(e => e.main.isSolWalletModalOpen),
          a = (0, A.CG)(e => e.main.isMobile),
          [r, s] = (0, n.useState)(0),
          [v, N] = (0, n.useState)(!1),
          [y, k] = (0, n.useState)(!1),
          {
            query: D,
            push: P
          } = (0, l.useRouter)(),
          O = [{
            id: "phantom",
            name: "Phantom",
            icon: h,
            onClick: () => {
              s(1)
            }
          }],
          S = () => {
            e((0, w.W2)(!1)), k(!1)
          };
        (0, n.useEffect)(() => {
          t || setTimeout(() => {
            s(0)
          }, 500)
        }, [t]);
        let C = async t => {
          let {
            signature: a,
            publicKey: n,
            token: r
          } = t;
          if (!v) try {
            N(!0);
            let {
              success: t,
              error: c
            } = await (0, p.Z)("/wallet/solana/check_proof", {
              method: "POST",
              body: {
                signature: a,
                publicKey: n,
                token: r
              }
            });
            if ("Wallet already exists" === c) {
              (0, d.Z)({
                toastId: "solConnect",
                imgCode: "cross",
                message: "Wallet already connected"
              });
              return
            }
            if (!t) {
              (0, d.Z)({
                toastId: "solConnect",
                imgCode: "cross",
                message: "Something went wrong. Try again"
              });
              return
            }
            return e((0, w.M)({
              proofSolanaWallet: n
            })), !0
          } catch (e) {
            console.error(e)
          } finally {
            N(!1)
          }
        }, Z = async () => {
          if (!v) try {
            N(!0);
            let {
              success: e,
              data: t
            } = await (0, p.Z)("/wallet/solana/payload");
            if (!e) {
              (0, d.Z)({
                toastId: "solConnect",
                imgCode: "cross",
                message: "Something went wrong while connect wallet. Try again"
              });
              return
            }
            return t
          } catch (e) {
            console.error(e)
          } finally {
            N(!1)
          }
        }, I = async () => {
          try {
            var e, t;
            if (null !== (e = window) && void 0 !== e && null !== (t = e.phantom) && void 0 !== t && t.solana) {
              let e = await Z();
              if (!e) return;
              let t = new TextEncoder().encode(e),
                {
                  signature: a,
                  publicKey: n
                } = await window.phantom.solana.signMessage(t),
                r = i.Z.encode(a),
                c = n.toBase58();
              await C({
                signature: r,
                publicKey: c,
                token: e
              }), S();
              return
            }
            let a = c().box.keyPair(),
              n = JSON.stringify({
                publicKey: a.publicKey.toString(),
                secretKey: a.secretKey.toString()
              }),
              r = i.Z.encode(a.publicKey);
            localStorage.setItem("phantom-keypair", n), window.location.href = "https://phantom.app/ul/v1/connect?app_url=".concat("https://paws.community", "&redirect_link=").concat("https://paws.community", "/app?&dapp_encryption_public_key=").concat(r)
          } catch (e) {
            (0, d.Z)({
              toastId: "solConnect",
              imgCode: "cross",
              message: "Something went wrong. Try again"
            })
          }
        }, x = async () => {
          let e = localStorage.getItem("phantom-keypair"),
            {
              nonce: t,
              data: a,
              error: n,
              errorCode: r
            } = D,
            {
              phantom_encryption_public_key: s
            } = D;
          if (s && localStorage.setItem("phantom-phantom_encryption_public_key", s), s || (s = localStorage.getItem("phantom-phantom_encryption_public_key")), n || r) return (0, d.Z)({
            toastId: "solConnect",
            imgCode: "cross",
            message: "Something went wrong while connect wallet. Try again"
          }), null;
          if (!e || !s || !t || !a) return null;
          let {
            address: o,
            session: l,
            signature: m,
            publicKey: A,
            secretKey: u
          } = function(e, t) {
            let a = e => {
              if (!e) throw Error("Key string is missing");
              let t = e;
              return "string" == typeof e && (t = e.split(",")), new Uint8Array(t)
            };
            try {
              let n = a(e.publicKey),
                r = a(e.secretKey);
              if (!t.phantom_encryption_public_key || !t.nonce || !t.data) throw Error("Missing required data fields");
              let s = i.Z.decode(t.phantom_encryption_public_key),
                o = i.Z.decode(t.nonce),
                l = i.Z.decode(t.data),
                m = c().box.before(s, r),
                A = c().box.open.after(l, o, m);
              if (!A) throw Error("Failed to decrypt the data.");
              let d = new TextDecoder().decode(A),
                u = JSON.parse(d);
              return {
                address: u.public_key,
                session: u.session,
                signature: u.signature,
                publicKey: n,
                secretKey: r
              }
            } catch (e) {
              throw console.error("Error in decryption process:", e.message), e
            }
          }(JSON.parse(e), {
            nonce: t,
            data: a,
            phantom_encryption_public_key: s
          });
          if (o && localStorage.setItem("phantom-address", o), m) {
            await C({
              signature: m,
              publicKey: localStorage.getItem("phantom-address"),
              token: localStorage.getItem("phantom-payload")
            });
            return
          }
          let h = i.Z.decode(s),
            g = c().box.before(h, u),
            p = await Z();
          if (!p) return;
          localStorage.setItem("phantom-payload", p);
          let {
            nonce: w,
            encryptedPayload: v
          } = E({
            session: l,
            message: i.Z.encode(b.from(p))
          }, g), f = new URLSearchParams({
            dapp_encryption_public_key: i.Z.encode(A),
            nonce: i.Z.encode(w),
            redirect_link: "".concat("https://paws.community", "/app"),
            payload: i.Z.encode(v)
          });
          window.location.href = "https://phantom.app/ul/v1/signMessage?".concat(f), setTimeout(() => {
            window.close()
          }, 100)
        };
        return (0, n.useEffect)(() => {
          let {
            nonce: t,
            data: a,
            phantom_encryption_public_key: n
          } = D;
          t && a && n && (k(!0), e((0, w.W2)(!0))), t && a && !n && x()
        }, []), n.createElement(m.Z, {
          isOpen: t,
          close: S
        }, n.createElement("div", {
          className: "custom-connect-wallet-modal"
        }, y && n.createElement(n.Fragment, null, n.createElement("div", {
          className: "cross-con",
          onClick: S
        }, n.createElement(o(), {
          src: u.Z,
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
        }, "Last step to Connect"), n.createElement("div", {
          className: "modal-descr"
        }, "Sign the message"), n.createElement("div", {
          className: "lottie-con"
        }, n.createElement(g.Z, {
          isShow: 2 === r
        })), n.createElement("div", {
          className: "retry-btn",
          onClick: x
        }, "Sing message"))))), !y && n.createElement(n.Fragment, null, n.createElement("div", {
          className: "cross-con",
          onClick: S
        }, n.createElement(o(), {
          src: u.Z,
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
        }, O.map(e => {
          let {
            id: t,
            name: a,
            icon: r,
            onClick: c
          } = e;
          return n.createElement("div", {
            key: t,
            className: "option-con ".concat(t),
            onClick: c
          }, n.createElement("div", {
            className: "side-block"
          }, n.createElement("div", {
            className: "icon-con"
          }, n.createElement(o(), {
            src: r,
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
        }, [1, 2].includes(r) && n.createElement(f, {
          openPhantom: I
        })), n.createElement("div", {
          className: "custom-carousel-item"
        }, [2].includes(r) && n.createElement(n.Fragment, null, n.createElement("div", {
          className: "modal-title"
        }, "Continue in Phantom"), n.createElement("div", {
          className: "modal-descr"
        }, "We are currently in the process of connecting your Phantom Wallet for use in PAWS. Please note that this may take some time!"), n.createElement("div", {
          className: "lottie-con"
        }, 2 === r && n.createElement(g.Z, {
          isShow: 2 === r
        })), n.createElement("div", {
          className: "retry-btn",
          onClick: () => s(1)
        }, "Retry"))))))))
      }
    },
    5498: function(e, t, a) {
      "use strict";
      var n = a(7294),
        r = a(5719);
      a(2077), t.Z = e => {
        let {
          isOpen: t,
          isCloseAble: a = !0,
          close: c,
          children: i
        } = e, [s, o] = (0, n.useState)(!1), [l, m] = (0, n.useState)(!1), A = async () => {
          a && (o(!1), m(!1), await new Promise(e => {
            setTimeout(() => {
              c(), e()
            }, 250)
          }))
        };
        return (0, n.useEffect)(() => {
          t && (m(!0), setTimeout(() => {
            o(!0)
          }, 250)), !t && s && A()
        }, [t]), n.createElement(r.Z, {
          isOpen: l,
          toggle: A,
          backdropClassName: "swipe-able-popup-backdrop",
          modalClassName: "swipe-able-popup-modal",
          className: "swipe-able-popup-wrapper",
          zIndex: 900
        }, n.createElement("div", {
          className: "swipe-able-popup-container ".concat(s ? "is-open" : "is-close")
        }, i))
      }
    },
    4650: function(e, t, a) {
      "use strict";
      a.d(t, {
        Z: function() {
          return O
        }
      });
      var n = a(7462),
        r = a(7294),
        c = a(5675),
        i = a.n(c),
        s = a(6066),
        o = a(9163),
        l = a(673),
        m = a(2924),
        A = a(742),
        d = a(1881),
        u = a(3129),
        h = a(970),
        g = a(383),
        p = a(713),
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
        b = a(1249),
        f = a(7914),
        N = a(6361),
        y = a(3750),
        k = {
          src: "/_next/static/media/starAnimatedSilver.b469545a.svg",
          height: 200,
          width: 200,
          blurWidth: 0,
          blurHeight: 0
        };
      a(1106);
      let D = {
          1: b.Z,
          2: f.Z,
          3: N.Z,
          4: y.Z
        },
        P = {
          1: {
            src: "/_next/static/media/starAnimatedBronze.256bb892.svg",
            height: 200,
            width: 200,
            blurWidth: 0,
            blurHeight: 0
          },
          2: k,
          3: {
            src: "/_next/static/media/starAnimatedGold.c0ea8ebe.svg",
            height: 200,
            width: 200,
            blurWidth: 0,
            blurHeight: 0
          },
          4: k
        };
      var O = e => {
        let {
          isBalanceHidden: t,
          isShow: a,
          openDetailInfo: c = () => {}
        } = e, b = (0, E.CG)(e => e.main.isMobile), f = (0, E.CG)(e => e.main.user.gameData.balance), N = (0, E.CG)(e => e.main.user.badgeTier), y = (0, E.CG)(e => e.main.user.allocationData.notcoin.converted), k = (0, E.CG)(e => e.main.user.allocationData.dogs.converted), O = r.createElement("div", {
          className: "count step-2"
        }, r.createElement("div", {
          className: "text"
        }, "Newcomer"), r.createElement("div", {
          className: "img-con"
        }, r.createElement(i(), {
          src: h.Z,
          alt: "",
          width: b ? 18 : 35,
          height: b ? 18 : 35
        })), r.createElement("div", {
          className: "text"
        }, "RANK"));
        return y && !k && (O = r.createElement("div", {
          className: "count step-2"
        }, r.createElement("div", {
          className: "text"
        }, "Pioneer"), r.createElement("div", {
          className: "img-con"
        }, r.createElement(i(), {
          src: g.Z,
          alt: "",
          width: b ? 18 : 35,
          height: b ? 18 : 35
        })), r.createElement("div", {
          className: "text"
        }, "RANK"))), !y && k && (O = r.createElement("div", {
          className: "count step-2"
        }, r.createElement("div", {
          className: "text"
        }, "Legend"), r.createElement("div", {
          className: "img-con"
        }, r.createElement(i(), {
          src: p.Z,
          alt: "",
          width: b ? 18 : 35,
          height: b ? 18 : 35
        })), r.createElement("div", {
          className: "text"
        }, "RANK"))), y && k && (O = r.createElement("div", {
          className: "count step-2"
        }, r.createElement("div", {
          className: "text"
        }, "Champ"), r.createElement("div", {
          className: "img-con"
        }, r.createElement(i(), {
          src: w.Z,
          alt: "",
          width: b ? 18 : 35,
          height: b ? 18 : 35
        })), r.createElement("div", {
          className: "text"
        }, "RANK"))), r.createElement("div", {
          className: "user-balance-wrap"
        }, r.createElement("div", {
          className: "img-con"
        }, r.createElement("div", {
          className: "main-logo ".concat(t ? "hidden" : "")
        }, r.createElement(i(), {
          src: o.Z,
          alt: "",
          width: b ? 120 : 170,
          height: b ? 120 : 170
        }), r.createElement("div", {
          className: "hat-con"
        }, r.createElement(i(), {
          src: v,
          alt: "",
          width: 250
        }))), r.createElement("div", {
          className: "main-logo ".concat(t ? "" : "hidden")
        }, r.createElement(i(), {
          src: l.Z,
          alt: "",
          width: b ? 120 : 170,
          height: b ? 120 : 170
        })), D[N] && r.createElement("div", {
          className: "user-mark tier-".concat(N)
        }, r.createElement("div", {
          className: "icon-con"
        }, r.createElement(i(), {
          src: D[N],
          alt: "",
          width: b ? 22 : 49,
          height: b ? 22 : 49
        }), a && r.createElement("div", {
          className: "animated-icon"
        }, r.createElement(i(), {
          src: P[N],
          alt: "",
          width: b ? 75 : 150,
          height: b ? 75 : 150
        }))))), r.createElement("div", {
          className: "text-carousel-con"
        }, r.createElement(s.Z, (0, n.Z)({
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
          appendDots: e => r.createElement("ul", {
            className: "dots-con"
          }, e.map((e, t) => r.createElement("li", (0, n.Z)({
            key: "dot-indicator-con".concat(t)
          }, e.props, {
            className: "indicator-con ".concat(e.props.className)
          }))))
        }), r.createElement("div", {
          className: "currect-balance-wrap"
        }, r.createElement("div", {
          className: "my-wrap"
        }, r.createElement("div", {
          className: "count"
        }, !t && (f > 1e5 ? (0, m.i)(f) : (0, A.Z)(f, ",")), t && r.createElement("div", {
          className: "d-flex align-items-center pt-2"
        }, r.createElement(i(), {
          src: d.Z,
          alt: "",
          width: 50,
          height: 50
        }))), r.createElement("div", {
          className: "currency"
        }, "PAWS"))), r.createElement("div", {
          className: "currect-balance-wrap"
        }, r.createElement("div", {
          className: "my-wrap"
        }, r.createElement("div", {
          className: "count"
        }, (0, A.Z)(1e3, ",")), r.createElement("div", {
          className: "currency"
        }, "wPAWS")))), !1), r.createElement("div", {
          className: "view-score",
          onClick: c
        }, O, !!c && r.createElement("div", {
          className: "icon-con"
        }, r.createElement(i(), {
          src: u.Z,
          alt: "",
          width: 24,
          height: 24
        }))))
      }
    },
    247: function(e, t, a) {
      "use strict";
      var n = a(6656),
        r = a(7041),
        c = a(9993),
        i = a(9155),
        s = a(3454);

      function o(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), a.push.apply(a, n)
        }
        return a
      }

      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(a), !0).forEach(function(t) {
            (0, n.Z)(e, t, a[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
          })
        }
        return e
      }
      let m = async function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "application/json",
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          o = {},
          m = await (0, c.Z)(n);
        m && (o.Authorization = "Bearer ".concat(m));
        let A = await (0, i.Z)(e, l({}, t), a, o);
        return 401 === A.status ? (await (0, r.deleteCookie)("".concat("paws", "-accessToken"), l(l({}, n), {}, {
          domain: s.env.APP_DOMAIN
        })), await (0, r.deleteCookie)("".concat("paws", "-refreshToken"), l(l({}, n), {}, {
          domain: s.env.APP_DOMAIN
        })), window.location.href = window.location.pathname, null) : await A.json()
      };
      t.Z = m
    },
    2924: function(e, t, a) {
      "use strict";
      a.d(t, {
        i: function() {
          return r
        }
      });
      var n = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
        if (void 0 === t || 0 == +t) return Math.round(e);
        let a = +e,
          n = +t;
        return a ? Number.isNaN(a) || !("number" == typeof n && n % 1 == 0) ? NaN : (a = a.toString().split("e"), a = (a = Math.floor(+"".concat(a[0], "e").concat(a[1] ? +a[1] + n : n))).toString().split("e"), +"".concat(a[0], "e").concat(a[1] ? +a[1] - n : -n)) : 0
      };
      let r = e => {
        if (!e) return "0";
        if (1e3 > +e) return e;
        if (1e6 > +e) return "".concat(n(+e / 1e3, 2), "K");
        if (1e9 > +e) return "".concat(n(+e / 1e6, 2), "M");
        if (1e12 > +e) return "".concat(n(+e / 1e9, 2), "B");
        if (1e15 > +e) return "".concat(n(+e / 1e12, 2), "T");
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
        r = a(7041),
        c = a(9892),
        i = a.n(c),
        s = function(e) {
          try {
            let t = JSON.parse(i()(e.split(".")[1])).exp;
            return Math.floor(new Date().getTime() / 1e3) >= t
          } catch (e) {
            return !0
          }
        },
        o = a(9155),
        l = a(3454);

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
        if ((0, r.hasCookie)("refreshToken", A(A({}, e), {}, {
            domain: l.env.APP_DOMAIN
          })) && s(t = await (0, r.getCookie)("refreshToken", A(A({}, e), {}, {
            domain: l.env.APP_DOMAIN
          }))) && (await (0, r.deleteCookie)("refreshToken", A(A({}, e), {}, {
            domain: l.env.APP_DOMAIN
          })), t = ""), (window.sessionStorage.getItem("accessToken") || (0, r.hasCookie)("".concat("paws", "-accessToken"), A(A({}, e), {}, {
            domain: l.env.APP_DOMAIN
          }))) && s(a = window.sessionStorage.getItem("accessToken") || await (0, r.getCookie)("".concat("paws", "-accessToken"), A(A({}, e), {}, {
            domain: l.env.APP_DOMAIN
          })))) {
          var n, c, i, m;
          await (0, r.deleteCookie)("".concat("paws", "-accessToken"), A(A({}, e), {}, {
            domain: l.env.APP_DOMAIN
          })), null === (n = window) || void 0 === n || null === (c = n.sessionStorage) || void 0 === c || c.removeItem("accessToken"), null === (i = window) || void 0 === i || null === (m = i.location) || void 0 === m || m.reload(), a = ""
        }
        if (!a && t && t) try {
          let n = await (0, o.Z)("/user/refresh", {
            body: {
              refreshToken: t
            },
            method: "GET"
          });
          if (a = (await n.json()).data.accessToken || "") {
            let t = new Date;
            t = new Date(t.getUTCFullYear() + 1, t.getUTCMonth(), t.getUTCDate()), await (0, r.setCookie)("accessToken", a, A(A({}, e), {}, {
              expires: t,
              domain: l.env.APP_DOMAIN
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
    8412: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/exit.cdf3e119.svg",
        height: 18,
        width: 20,
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
    673: function(e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/pawsLogoGrinch.ddf51c5a.png",
        height: 1058,
        width: 1058,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8UlEQVR42mOYekibaeVZTSYGKGjdp8s3/6S2DYi96pwWMwMMLDqlNXXtBc2z265qbl57Qev/kjPaCmCJ6Ye1bWYe1Z6w7YrG5UO31T+duKe28PBt9Z8bLml2LT6trc0w/Yj2mmVntP4fvK2ud/WJavi1x2pF//8zsGy9ovl+yWmtlwyzj2m7rDyn1Xf8rlrihUdqR64+Vjt66bFq09YrGrnLz2j5MIDAghNa87df0fh/5LbazjP31SIO3VT/v+qs5tO8Tbo8YAUzjmj3ARXdXX9BczoQr195RvPAnGNax6Ye1hZkQAate3Q45x3X0kEWAwA4YmykDqZdbgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8
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
    2480: function() {},
    2077: function() {},
    1106: function() {}
  }
]);