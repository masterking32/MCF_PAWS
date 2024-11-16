// WebView
(function() {
  const eventHandlers = {};

  let locationHash = "";
  try {
    locationHash = location.hash.toString();
  } catch (e) {}

  const initParams = urlParseHashParams(locationHash);
  const storedParams = sessionStorageGet("initParams");
  if (storedParams) {
    for (const key in storedParams) {
      if (typeof initParams[key] === "undefined") {
        initParams[key] = storedParams[key];
      }
    }
  }
  sessionStorageSet("initParams", initParams);

  let isIframe = false;
  let iFrameStyle;
  try {
    isIframe = window.parent != null && window != window.parent;
    if (isIframe) {
      window.addEventListener("message", function(event) {
        if (event.source !== window.parent) return;
        try {
          var dataParsed = JSON.parse(event.data);
        } catch (e) {
          return;
        }
        if (!dataParsed || !dataParsed.eventType) {
          return;
        }
        if (dataParsed.eventType == "set_custom_style") {
          if (event.origin === "https://web.telegram.org") {
            iFrameStyle.innerHTML = dataParsed.eventData;
          }
        } else if (dataParsed.eventType == "reload_iframe") {
          try {
            window.parent.postMessage(JSON.stringify({
              eventType: "iframe_will_reload"
            }), "*");
          } catch (e) {}
          location.reload();
        } else {
          receiveEvent(dataParsed.eventType, dataParsed.eventData);
        }
      });
      iFrameStyle = document.createElement("style");
      document.head.appendChild(iFrameStyle);
      try {
        window.parent.postMessage(JSON.stringify({
          eventType: "iframe_ready",
          eventData: {
            reload_supported: true
          }
        }), "*");
      } catch (e) {}
    }
  } catch (e) {}

  function urlSafeDecode(urlencoded) {
    try {
      urlencoded = urlencoded.replace(/\+/g, "%20");
      return decodeURIComponent(urlencoded);
    } catch (e) {
      return urlencoded;
    }
  }

  function urlParseHashParams(locationHash) {
    locationHash = locationHash.replace(/^#/, "");
    const params = {};
    if (!locationHash.length) {
      return params;
    }
    if (locationHash.indexOf("=") < 0 && locationHash.indexOf("?") < 0) {
      params._path = urlSafeDecode(locationHash);
      return params;
    }
    const qIndex = locationHash.indexOf("?");
    if (qIndex >= 0) {
      const pathParam = locationHash.substr(0, qIndex);
      params._path = urlSafeDecode(pathParam);
      locationHash = locationHash.substr(qIndex + 1);
    }
    const query_params = urlParseQueryString(locationHash);
    for (const k in query_params) {
      params[k] = query_params[k];
    }
    return params;
  }

  function urlParseQueryString(queryString) {
    const params = {};
    if (!queryString.length) {
      return params;
    }
    const queryStringParams = queryString.split("&");
    let i;
    let param;
    let paramName;
    let paramValue;
    for (i = 0; i < queryStringParams.length; i++) {
      param = queryStringParams[i].split("=");
      paramName = urlSafeDecode(param[0]);
      paramValue = param[1] == null ? null : urlSafeDecode(param[1]);
      params[paramName] = paramValue;
    }
    return params;
  }

  // Telegram apps will implement this logic to add service params (e.g. tgShareScoreUrl) to game URL
  function urlAppendHashParams(url, addHash) {
    // url looks like 'https://game.com/path?query=1#hash'
    // addHash looks like 'tgShareScoreUrl=' + encodeURIComponent('tgb://share_game_score?hash=very_long_hash123')

    const ind = url.indexOf("#");
    if (ind < 0) {
      // https://game.com/path -> https://game.com/path#tgShareScoreUrl=etc
      return `${url}#${addHash}`;
    }
    const curHash = url.substr(ind + 1);
    if (curHash.indexOf("=") >= 0 || curHash.indexOf("?") >= 0) {
      // https://game.com/#hash=1 -> https://game.com/#hash=1&tgShareScoreUrl=etc
      // https://game.com/#path?query -> https://game.com/#path?query&tgShareScoreUrl=etc
      return `${url}&${addHash}`;
    }
    // https://game.com/#hash -> https://game.com/#hash?tgShareScoreUrl=etc
    if (curHash.length > 0) {
      return `${url}?${addHash}`;
    }
    // https://game.com/# -> https://game.com/#tgShareScoreUrl=etc
    return url + addHash;
  }

  function postEvent(eventType, callback, eventData) {
    if (!callback) {
      callback = function() {};
    }
    if (eventData === undefined) {
      eventData = "";
    }
    console.log("[Telegram.WebView] > postEvent", eventType, eventData);

    if (window.TelegramWebviewProxy !== undefined) {
      TelegramWebviewProxy.postEvent(eventType, JSON.stringify(eventData));
      callback();
    } else if (window.external && "notify" in window.external) {
      window.external.notify(JSON.stringify({
        eventType,
        eventData
      }));
      callback();
    } else if (isIframe) {
      try {
        let trustedTarget = "https://web.telegram.org";
        // For now we don't restrict target, for testing purposes
        trustedTarget = "*";
        window.parent.postMessage(JSON.stringify({
          eventType,
          eventData
        }), trustedTarget);
        callback();
      } catch (e) {
        callback(e);
      }
    } else {
      callback({
        notAvailable: true
      });
    }
  }

  function receiveEvent(eventType, eventData) {
    console.log("[Telegram.WebView] < receiveEvent", eventType, eventData);
    callEventCallbacks(eventType, function(callback) {
      callback(eventType, eventData);
    });
  }

  function callEventCallbacks(eventType, func) {
    const curEventHandlers = eventHandlers[eventType];
    if (curEventHandlers === undefined || !curEventHandlers.length) {
      return;
    }
    for (let i = 0; i < curEventHandlers.length; i++) {
      try {
        func(curEventHandlers[i]);
      } catch (e) {}
    }
  }

  function onEvent(eventType, callback) {
    if (eventHandlers[eventType] === undefined) {
      eventHandlers[eventType] = [];
    }
    const index = eventHandlers[eventType].indexOf(callback);
    if (index === -1) {
      eventHandlers[eventType].push(callback);
    }
  }

  function offEvent(eventType, callback) {
    if (eventHandlers[eventType] === undefined) {
      return;
    }
    const index = eventHandlers[eventType].indexOf(callback);
    if (index === -1) {
      return;
    }
    eventHandlers[eventType].splice(index, 1);
  }

  function openProtoUrl(url) {
    if (!url.match(/^(web\+)?tgb?:\/\/./)) {
      return false;
    }
    const useIframe = !!navigator.userAgent.match(/iOS|iPhone OS|iPhone|iPod|iPad/i);
    if (useIframe) {
      const iframeContEl = document.getElementById("tgme_frame_cont") || document.body;
      const iframeEl = document.createElement("iframe");
      iframeContEl.appendChild(iframeEl);
      let pageHidden = false;
      const enableHidden = function() {
        pageHidden = true;
      };
      window.addEventListener("pagehide", enableHidden, false);
      window.addEventListener("blur", enableHidden, false);
      if (iframeEl !== null) {
        iframeEl.src = url;
      }
      setTimeout(function() {
        if (!pageHidden) {
          window.location = url;
        }
        window.removeEventListener("pagehide", enableHidden, false);
        window.removeEventListener("blur", enableHidden, false);
      }, 2000);
    } else {
      window.location = url;
    }
    return true;
  }

  function sessionStorageSet(key, value) {
    try {
      window.sessionStorage.setItem(`__telegram__${key}`, JSON.stringify(value));
      return true;
    } catch (e) {}
    return false;
  }

  function sessionStorageGet(key) {
    try {
      return JSON.parse(window.sessionStorage.getItem(`__telegram__${key}`));
    } catch (e) {}
    return null;
  }

  if (!window.Telegram) {
    window.Telegram = {};
  }
  window.Telegram.WebView = {
    initParams,
    isIframe,
    onEvent,
    offEvent,
    postEvent,
    receiveEvent,
    callEventCallbacks,
  };

  window.Telegram.Utils = {
    urlSafeDecode,
    urlParseQueryString,
    urlParseHashParams,
    urlAppendHashParams,
    sessionStorageSet,
    sessionStorageGet,
  };

  // For Windows Phone app
  window.TelegramGameProxy_receiveEvent = receiveEvent;

  // App backward compatibility
  window.TelegramGameProxy = {
    receiveEvent,
  };
})();

// WebApp
(function() {
  const {
    Utils
  } = window.Telegram;
  const {
    WebView
  } = window.Telegram;
  const {
    initParams
  } = WebView;
  const {
    isIframe
  } = WebView;

  const WebApp = {};
  let webAppInitData = "";
  let webAppInitDataUnsafe = {};
  const themeParams = {};
  let colorScheme = "light";
  let webAppVersion = "6.0";
  let webAppPlatform = "unknown";

  if (initParams.tgWebAppData && initParams.tgWebAppData.length) {
    webAppInitData = initParams.tgWebAppData;
    webAppInitDataUnsafe = Utils.urlParseQueryString(webAppInitData);
    for (const key in webAppInitDataUnsafe) {
      const val = webAppInitDataUnsafe[key];
      try {
        if ((val.substr(0, 1) == "{" && val.substr(-1) == "}") || (val.substr(0, 1) == "[" && val.substr(-1) == "]")) {
          webAppInitDataUnsafe[key] = JSON.parse(val);
        }
      } catch (e) {}
    }
  }
  if (initParams.tgWebAppThemeParams && initParams.tgWebAppThemeParams.length) {
    const themeParamsRaw = initParams.tgWebAppThemeParams;
    try {
      var theme_params = JSON.parse(themeParamsRaw);
      if (theme_params) {
        setThemeParams(theme_params);
      }
    } catch (e) {}
  }
  var theme_params = Utils.sessionStorageGet("themeParams");
  if (theme_params) {
    setThemeParams(theme_params);
  }
  if (initParams.tgWebAppVersion) {
    webAppVersion = initParams.tgWebAppVersion;
  }
  if (initParams.tgWebAppPlatform) {
    webAppPlatform = initParams.tgWebAppPlatform;
  }

  function onThemeChanged(eventType, eventData) {
    if (eventData.theme_params) {
      setThemeParams(eventData.theme_params);
      window.Telegram.WebApp.MainButton.setParams({});
      window.Telegram.WebApp.SecondaryButton.setParams({});
      updateHeaderColor();
      updateBackgroundColor();
      updateBottomBarColor();
      receiveWebViewEvent("themeChanged");
    }
  }

  let lastWindowHeight = window.innerHeight;

  function onViewportChanged(eventType, eventData) {
    if (eventData.height) {
      window.removeEventListener("resize", onWindowResize);
      setViewportHeight(eventData);
    }
  }

  function onWindowResize(e) {
    if (lastWindowHeight != window.innerHeight) {
      lastWindowHeight = window.innerHeight;
      receiveWebViewEvent("viewportChanged", {
        isStateStable: true,
      });
    }
  }

  function linkHandler(e) {
    if (e.metaKey || e.ctrlKey) return;
    let el = e.target;
    while (el.tagName != "A" && el.parentNode) {
      el = el.parentNode;
    }
    if (el.tagName == "A" && el.target != "_blank" && (el.protocol == "http:" || el.protocol == "https:") && el.hostname == "t.me") {
      WebApp.openTgLink(el.href);
      e.preventDefault();
    }
  }

  function strTrim(str) {
    return str.toString().replace(/^\s+|\s+$/g, "");
  }

  function receiveWebViewEvent(eventType) {
    const args = Array.prototype.slice.call(arguments);
    eventType = args.shift();
    WebView.callEventCallbacks(`webview:${eventType}`, function(callback) {
      callback.apply(WebApp, args);
    });
  }

  function onWebViewEvent(eventType, callback) {
    WebView.onEvent(`webview:${eventType}`, callback);
  }

  function offWebViewEvent(eventType, callback) {
    WebView.offEvent(`webview:${eventType}`, callback);
  }

  function setCssProperty(name, value) {
    const root = document.documentElement;
    if (root && root.style && root.style.setProperty) {
      root.style.setProperty(`--tg-${name}`, value);
    }
  }

  function setThemeParams(theme_params) {
    // temp iOS fix
    if (theme_params.bg_color == "#1c1c1d" && theme_params.bg_color == theme_params.secondary_bg_color) {
      theme_params.secondary_bg_color = "#2c2c2e";
    }
    let color;
    for (let key in theme_params) {
      if ((color = parseColorToHex(theme_params[key]))) {
        themeParams[key] = color;
        if (key == "bg_color") {
          colorScheme = isColorDark(color) ? "dark" : "light";
          setCssProperty("color-scheme", colorScheme);
        }
        key = `theme-${key.split("_").join("-")}`;
        setCssProperty(key, color);
      }
    }
    Utils.sessionStorageSet("themeParams", themeParams);
  }

  const webAppCallbacks = {};

  function generateCallbackId(len) {
    let tries = 100;
    while (--tries) {
      let id = "";
      const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const chars_len = chars.length;
      for (let i = 0; i < len; i++) {
        id += chars[Math.floor(Math.random() * chars_len)];
      }
      if (!webAppCallbacks[id]) {
        webAppCallbacks[id] = {};
        return id;
      }
    }
    throw Error("WebAppCallbackIdGenerateFailed");
  }

  let viewportHeight = false;
  let viewportStableHeight = false;
  let isExpanded = true;

  function setViewportHeight(data) {
    if (typeof data !== "undefined") {
      isExpanded = !!data.is_expanded;
      viewportHeight = data.height;
      if (data.is_state_stable) {
        viewportStableHeight = data.height;
      }
      receiveWebViewEvent("viewportChanged", {
        isStateStable: !!data.is_state_stable,
      });
    }
    let height;
    let stable_height;
    if (viewportHeight !== false) {
      height = `${viewportHeight - bottomBarHeight}px`;
    } else {
      height = bottomBarHeight ? `calc(100vh - ${bottomBarHeight}px)` : "100vh";
    }
    if (viewportStableHeight !== false) {
      stable_height = `${viewportStableHeight - bottomBarHeight}px`;
    } else {
      stable_height = bottomBarHeight ? `calc(100vh - ${bottomBarHeight}px)` : "100vh";
    }
    setCssProperty("viewport-height", height);
    setCssProperty("viewport-stable-height", stable_height);
  }

  let isClosingConfirmationEnabled = false;

  function setClosingConfirmation(need_confirmation) {
    if (!versionAtLeast("6.2")) {
      console.warn(`[Telegram.WebApp] Closing confirmation is not supported in version ${webAppVersion}`);
      return;
    }
    isClosingConfirmationEnabled = !!need_confirmation;
    WebView.postEvent("web_app_setup_closing_behavior", false, {
      need_confirmation: isClosingConfirmationEnabled
    });
  }

  let isVerticalSwipesEnabled = true;

  function toggleVerticalSwipes(enable_swipes) {
    if (!versionAtLeast("7.7")) {
      console.warn(`[Telegram.WebApp] Changing swipes behavior is not supported in version ${webAppVersion}`);
      return;
    }
    isVerticalSwipesEnabled = !!enable_swipes;
    WebView.postEvent("web_app_setup_swipe_behavior", false, {
      allow_vertical_swipe: isVerticalSwipesEnabled
    });
  }

  let headerColorKey = "bg_color";
  let headerColor = null;

  function getHeaderColor() {
    if (headerColorKey == "secondary_bg_color") {
      return themeParams.secondary_bg_color;
    }
    if (headerColorKey == "bg_color") {
      return themeParams.bg_color;
    }
    return headerColor;
  }

  function setHeaderColor(color) {
    if (!versionAtLeast("6.1")) {
      console.warn(`[Telegram.WebApp] Header color is not supported in version ${webAppVersion}`);
      return;
    }
    if (!versionAtLeast("6.9")) {
      if (themeParams.bg_color && themeParams.bg_color == color) {
        color = "bg_color";
      } else if (themeParams.secondary_bg_color && themeParams.secondary_bg_color == color) {
        color = "secondary_bg_color";
      }
    }
    let head_color = null;
    let color_key = null;
    if (color == "bg_color" || color == "secondary_bg_color") {
      color_key = color;
    } else if (versionAtLeast("6.9")) {
      head_color = parseColorToHex(color);
      if (!head_color) {
        console.error("[Telegram.WebApp] Header color format is invalid", color);
        throw Error("WebAppHeaderColorInvalid");
      }
    }
    if (!versionAtLeast("6.9") && color_key != "bg_color" && color_key != "secondary_bg_color") {
      console.error("[Telegram.WebApp] Header color key should be one of Telegram.WebApp.themeParams.bg_color, Telegram.WebApp.themeParams.secondary_bg_color, 'bg_color', 'secondary_bg_color'", color);
      throw Error("WebAppHeaderColorKeyInvalid");
    }
    headerColorKey = color_key;
    headerColor = head_color;
    updateHeaderColor();
  }
  let appHeaderColorKey = null;
  let appHeaderColor = null;

  function updateHeaderColor() {
    if (appHeaderColorKey != headerColorKey || appHeaderColor != headerColor) {
      appHeaderColorKey = headerColorKey;
      appHeaderColor = headerColor;
      if (appHeaderColor) {
        WebView.postEvent("web_app_set_header_color", false, {
          color: headerColor
        });
      } else {
        WebView.postEvent("web_app_set_header_color", false, {
          color_key: headerColorKey
        });
      }
    }
  }

  let backgroundColor = "bg_color";

  function getBackgroundColor() {
    if (backgroundColor == "secondary_bg_color") {
      return themeParams.secondary_bg_color;
    }
    if (backgroundColor == "bg_color") {
      return themeParams.bg_color;
    }
    return backgroundColor;
  }

  function setBackgroundColor(color) {
    if (!versionAtLeast("6.1")) {
      console.warn(`[Telegram.WebApp] Background color is not supported in version ${webAppVersion}`);
      return;
    }
    let bg_color;
    if (color == "bg_color" || color == "secondary_bg_color") {
      bg_color = color;
    } else {
      bg_color = parseColorToHex(color);
      if (!bg_color) {
        console.error("[Telegram.WebApp] Background color format is invalid", color);
        throw Error("WebAppBackgroundColorInvalid");
      }
    }
    backgroundColor = bg_color;
    updateBackgroundColor();
  }
  let appBackgroundColor = null;

  function updateBackgroundColor() {
    const color = getBackgroundColor();
    if (appBackgroundColor != color) {
      appBackgroundColor = color;
      WebView.postEvent("web_app_set_background_color", false, {
        color
      });
    }
  }

  let bottomBarColor = "bottom_bar_bg_color";

  function getBottomBarColor() {
    if (bottomBarColor == "bottom_bar_bg_color") {
      return themeParams.bottom_bar_bg_color || themeParams.secondary_bg_color || "#ffffff";
    }
    if (bottomBarColor == "secondary_bg_color") {
      return themeParams.secondary_bg_color;
    }
    if (bottomBarColor == "bg_color") {
      return themeParams.bg_color;
    }
    return bottomBarColor;
  }

  function setBottomBarColor(color) {
    if (!versionAtLeast("7.10")) {
      console.warn(`[Telegram.WebApp] Bottom bar color is not supported in version ${webAppVersion}`);
      return;
    }
    let bg_color;
    if (color == "bg_color" || color == "secondary_bg_color" || color == "bottom_bar_bg_color") {
      bg_color = color;
    } else {
      bg_color = parseColorToHex(color);
      if (!bg_color) {
        console.error("[Telegram.WebApp] Bottom bar color format is invalid", color);
        throw Error("WebAppBottomBarColorInvalid");
      }
    }
    bottomBarColor = bg_color;
    updateBottomBarColor();
    window.Telegram.WebApp.SecondaryButton.setParams({});
  }
  let appBottomBarColor = null;

  function updateBottomBarColor() {
    const color = getBottomBarColor();
    if (appBottomBarColor != color) {
      appBottomBarColor = color;
      WebView.postEvent("web_app_set_bottom_bar_color", false, {
        color
      });
    }
    if (initParams.tgWebAppDebug) {
      updateDebugBottomBar();
    }
  }

  function parseColorToHex(color) {
    color += "";
    let match;
    if ((match = /^\s*#([0-9a-f]{6})\s*$/i.exec(color))) {
      return `#${match[1].toLowerCase()}`;
    }
    if ((match = /^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(color))) {
      return `#${match[1]}${match[1]}${match[2]}${match[2]}${match[3]}${match[3]}`.toLowerCase();
    }
    if ((match = /^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(color))) {
      let r = parseInt(match[1]);
      let g = parseInt(match[2]);
      let b = parseInt(match[3]);
      r = (r < 16 ? "0" : "") + r.toString(16);
      g = (g < 16 ? "0" : "") + g.toString(16);
      b = (b < 16 ? "0" : "") + b.toString(16);
      return `#${r}${g}${b}`;
    }
    return false;
  }

  function isColorDark(rgb) {
    rgb = rgb.replace(/[\s#]/g, "");
    if (rgb.length == 3) {
      rgb = rgb[0] + rgb[0] + rgb[1] + rgb[1] + rgb[2] + rgb[2];
    }
    const r = parseInt(rgb.substr(0, 2), 16);
    const g = parseInt(rgb.substr(2, 2), 16);
    const b = parseInt(rgb.substr(4, 2), 16);
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
    return hsp < 120;
  }

  function versionCompare(v1, v2) {
    if (typeof v1 !== "string") v1 = "";
    if (typeof v2 !== "string") v2 = "";
    v1 = v1.replace(/^\s+|\s+$/g, "").split(".");
    v2 = v2.replace(/^\s+|\s+$/g, "").split(".");
    const a = Math.max(v1.length, v2.length);
    let i;
    let p1;
    let p2;
    for (i = 0; i < a; i++) {
      p1 = parseInt(v1[i]) || 0;
      p2 = parseInt(v2[i]) || 0;
      if (p1 == p2) continue;
      if (p1 > p2) return 1;
      return -1;
    }
    return 0;
  }

  function versionAtLeast(ver) {
    return versionCompare(webAppVersion, ver) >= 0;
  }

  function byteLength(str) {
    if (window.Blob) {
      try {
        return new Blob([str]).size;
      } catch (e) {}
    }
    let s = str.length;
    for (let i = str.length - 1; i >= 0; i--) {
      const code = str.charCodeAt(i);
      if (code > 0x7f && code <= 0x7ff) s++;
      else if (code > 0x7ff && code <= 0xffff) s += 2;
      if (code >= 0xdc00 && code <= 0xdfff) i--;
    }
    return s;
  }

  const BackButton = (function() {
    let isVisible = false;

    const backButton = {};
    Object.defineProperty(backButton, "isVisible", {
      set(val) {
        setParams({
          is_visible: val
        });
      },
      get() {
        return isVisible;
      },
      enumerable: true,
    });

    let curButtonState = null;

    WebView.onEvent("back_button_pressed", onBackButtonPressed);

    function onBackButtonPressed() {
      receiveWebViewEvent("backButtonClicked");
    }

    function buttonParams() {
      return {
        is_visible: isVisible
      };
    }

    function buttonState(btn_params) {
      if (typeof btn_params === "undefined") {
        btn_params = buttonParams();
      }
      return JSON.stringify(btn_params);
    }

    function buttonCheckVersion() {
      if (!versionAtLeast("6.1")) {
        console.warn(`[Telegram.WebApp] BackButton is not supported in version ${webAppVersion}`);
        return false;
      }
      return true;
    }

    function updateButton() {
      const btn_params = buttonParams();
      const btn_state = buttonState(btn_params);
      if (curButtonState === btn_state) {
        return;
      }
      curButtonState = btn_state;
      WebView.postEvent("web_app_setup_back_button", false, btn_params);
    }

    function setParams(params) {
      if (!buttonCheckVersion()) {
        return backButton;
      }
      if (typeof params.is_visible !== "undefined") {
        isVisible = !!params.is_visible;
      }
      updateButton();
      return backButton;
    }

    backButton.onClick = function(callback) {
      if (buttonCheckVersion()) {
        onWebViewEvent("backButtonClicked", callback);
      }
      return backButton;
    };
    backButton.offClick = function(callback) {
      if (buttonCheckVersion()) {
        offWebViewEvent("backButtonClicked", callback);
      }
      return backButton;
    };
    backButton.show = function() {
      return setParams({
        is_visible: true
      });
    };
    backButton.hide = function() {
      return setParams({
        is_visible: false
      });
    };
    return backButton;
  })();

  let debugBottomBar = null;
  const debugBottomBarBtns = {};
  var bottomBarHeight = 0;
  if (initParams.tgWebAppDebug) {
    debugBottomBar = document.createElement("tg-bottom-bar");
    const debugBottomBarStyle = {
      display: "flex",
      gap: "7px",
      font: "600 14px/18px sans-serif",
      width: "100%",
      background: getBottomBarColor(),
      position: "fixed",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "0",
      padding: "7px",
      textAlign: "center",
      boxSizing: "border-box",
      zIndex: "10000",
    };
    for (const k in debugBottomBarStyle) {
      debugBottomBar.style[k] = debugBottomBarStyle[k];
    }
    document.addEventListener("DOMContentLoaded", function onDomLoaded(event) {
      document.removeEventListener("DOMContentLoaded", onDomLoaded);
      document.body.appendChild(debugBottomBar);
    });
    const animStyle = document.createElement("style");
    animStyle.innerHTML =
      "tg-bottom-button.shine { position: relative; overflow: hidden; } tg-bottom-button.shine:before { content:\"\"; position: absolute; top: 0; width: 100%; height: 100%; background: linear-gradient(120deg, transparent, rgba(255, 255, 255, .2), transparent); animation: tg-bottom-button-shine 5s ease-in-out infinite; } @-webkit-keyframes tg-bottom-button-shine { 0% {left: -100%;} 12%,100% {left: 100%}} @keyframes tg-bottom-button-shine { 0% {left: -100%;} 12%,100% {left: 100%}}";
    debugBottomBar.appendChild(animStyle);
  }

  function updateDebugBottomBar() {
    const mainBtn = debugBottomBarBtns.main._bottomButton;
    const secondaryBtn = debugBottomBarBtns.secondary._bottomButton;
    if (mainBtn.isVisible || secondaryBtn.isVisible) {
      debugBottomBar.style.display = "flex";
      bottomBarHeight = 58;
      if (mainBtn.isVisible && secondaryBtn.isVisible) {
        if (secondaryBtn.position == "top") {
          debugBottomBar.style.flexDirection = "column-reverse";
          bottomBarHeight += 51;
        } else if (secondaryBtn.position == "bottom") {
          debugBottomBar.style.flexDirection = "column";
          bottomBarHeight += 51;
        } else if (secondaryBtn.position == "left") {
          debugBottomBar.style.flexDirection = "row-reverse";
        } else if (secondaryBtn.position == "right") {
          debugBottomBar.style.flexDirection = "row";
        }
      }
    } else {
      debugBottomBar.style.display = "none";
      bottomBarHeight = 0;
    }
    debugBottomBar.style.background = getBottomBarColor();
    if (document.documentElement) {
      document.documentElement.style.boxSizing = "border-box";
      document.documentElement.style.paddingBottom = `${bottomBarHeight}px`;
    }
    setViewportHeight();
  }

  const BottomButtonConstructor = function(type) {
    const isMainButton = type == "main";
    if (isMainButton) {
      var setupFnName = "web_app_setup_main_button";
      var tgEventName = "main_button_pressed";
      var webViewEventName = "mainButtonClicked";
      var buttonTextDefault = "Continue";
      var buttonColorDefault = function() {
        return themeParams.button_color || "#2481cc";
      };
      var buttonTextColorDefault = function() {
        return themeParams.button_text_color || "#ffffff";
      };
    } else {
      var setupFnName = "web_app_setup_secondary_button";
      var tgEventName = "secondary_button_pressed";
      var webViewEventName = "secondaryButtonClicked";
      var buttonTextDefault = "Cancel";
      var buttonColorDefault = function() {
        return getBottomBarColor();
      };
      var buttonTextColorDefault = function() {
        return themeParams.button_color || "#2481cc";
      };
    }

    let isVisible = false;
    let isActive = true;
    let hasShineEffect = false;
    let isProgressVisible = false;
    const buttonType = type;
    let buttonText = buttonTextDefault;
    let buttonColor = false;
    let buttonTextColor = false;
    let buttonPosition = "left";

    const bottomButton = {};
    Object.defineProperty(bottomButton, "type", {
      get() {
        return buttonType;
      },
      enumerable: true,
    });
    Object.defineProperty(bottomButton, "text", {
      set(val) {
        bottomButton.setParams({
          text: val
        });
      },
      get() {
        return buttonText;
      },
      enumerable: true,
    });
    Object.defineProperty(bottomButton, "color", {
      set(val) {
        bottomButton.setParams({
          color: val
        });
      },
      get() {
        return buttonColor || buttonColorDefault();
      },
      enumerable: true,
    });
    Object.defineProperty(bottomButton, "textColor", {
      set(val) {
        bottomButton.setParams({
          text_color: val
        });
      },
      get() {
        return buttonTextColor || buttonTextColorDefault();
      },
      enumerable: true,
    });
    Object.defineProperty(bottomButton, "isVisible", {
      set(val) {
        bottomButton.setParams({
          is_visible: val
        });
      },
      get() {
        return isVisible;
      },
      enumerable: true,
    });
    Object.defineProperty(bottomButton, "isProgressVisible", {
      get() {
        return isProgressVisible;
      },
      enumerable: true,
    });
    Object.defineProperty(bottomButton, "isActive", {
      set(val) {
        bottomButton.setParams({
          is_active: val
        });
      },
      get() {
        return isActive;
      },
      enumerable: true,
    });
    Object.defineProperty(bottomButton, "hasShineEffect", {
      set(val) {
        bottomButton.setParams({
          has_shine_effect: val
        });
      },
      get() {
        return hasShineEffect;
      },
      enumerable: true,
    });
    if (!isMainButton) {
      Object.defineProperty(bottomButton, "position", {
        set(val) {
          bottomButton.setParams({
            position: val
          });
        },
        get() {
          return buttonPosition;
        },
        enumerable: true,
      });
    }

    let curButtonState = null;

    WebView.onEvent(tgEventName, onBottomButtonPressed);

    let debugBtn = null;
    if (initParams.tgWebAppDebug) {
      debugBtn = document.createElement("tg-bottom-button");
      const debugBtnStyle = {
        display: "none",
        width: "100%",
        height: "44px",
        borderRadius: "0",
        background: "no-repeat right center",
        padding: "13px 15px",
        textAlign: "center",
        boxSizing: "border-box",
      };
      for (const k in debugBtnStyle) {
        debugBtn.style[k] = debugBtnStyle[k];
      }
      debugBottomBar.appendChild(debugBtn);
      debugBtn.addEventListener("click", onBottomButtonPressed, false);
      debugBtn._bottomButton = bottomButton;
      debugBottomBarBtns[type] = debugBtn;
    }

    function onBottomButtonPressed() {
      if (isActive) {
        receiveWebViewEvent(webViewEventName);
      }
    }

    function buttonParams() {
      const {
        color
      } = bottomButton;
      const text_color = bottomButton.textColor;
      if (isVisible) {
        var params = {
          is_visible: true,
          is_active: isActive,
          is_progress_visible: isProgressVisible,
          text: buttonText,
          color,
          text_color,
          has_shine_effect: hasShineEffect && isActive && !isProgressVisible,
        };
        if (!isMainButton) {
          params.position = buttonPosition;
        }
      } else {
        var params = {
          is_visible: false,
        };
      }
      return params;
    }

    function buttonState(btn_params) {
      if (typeof btn_params === "undefined") {
        btn_params = buttonParams();
      }
      return JSON.stringify(btn_params);
    }

    function updateButton() {
      const btn_params = buttonParams();
      const btn_state = buttonState(btn_params);
      if (curButtonState === btn_state) {
        return;
      }
      curButtonState = btn_state;
      WebView.postEvent(setupFnName, false, btn_params);
      if (initParams.tgWebAppDebug) {
        updateDebugButton(btn_params);
      }
    }

    function updateDebugButton(btn_params) {
      if (btn_params.is_visible) {
        debugBtn.style.display = "block";

        debugBtn.style.opacity = btn_params.is_active ? "1" : "0.8";
        debugBtn.style.cursor = btn_params.is_active ? "pointer" : "auto";
        debugBtn.disabled = !btn_params.is_active;
        debugBtn.innerText = btn_params.text;
        debugBtn.className = btn_params.has_shine_effect ? "shine" : "";
        debugBtn.style.backgroundImage = btn_params.is_progress_visible ?
          `url('data:image/svg+xml,${encodeURIComponent(
							"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewport=\"0 0 48 48\" width=\"48px\" height=\"48px\"><circle cx=\"50%\" cy=\"50%\" stroke=\"" +
								btn_params.text_color +
								"\" stroke-width=\"2.25\" stroke-linecap=\"round\" fill=\"none\" stroke-dashoffset=\"106\" r=\"9\" stroke-dasharray=\"56.52\" rotate=\"-90\"><animate attributeName=\"stroke-dashoffset\" attributeType=\"XML\" dur=\"360s\" from=\"0\" to=\"12500\" repeatCount=\"indefinite\"></animate><animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" dur=\"1s\" from=\"-90 24 24\" to=\"630 24 24\" repeatCount=\"indefinite\"></animateTransform></circle></svg>"
						)}')` :
          "none";
        debugBtn.style.backgroundColor = btn_params.color;
        debugBtn.style.color = btn_params.text_color;
      } else {
        debugBtn.style.display = "none";
      }
      updateDebugBottomBar();
    }

    function setParams(params) {
      if (typeof params.text !== "undefined") {
        const text = strTrim(params.text);
        if (!text.length) {
          console.error("[Telegram.WebApp] Bottom button text is required", params.text);
          throw Error("WebAppBottomButtonParamInvalid");
        }
        if (text.length > 64) {
          console.error("[Telegram.WebApp] Bottom button text is too long", text);
          throw Error("WebAppBottomButtonParamInvalid");
        }
        buttonText = text;
      }
      if (typeof params.color !== "undefined") {
        if (params.color === false || params.color === null) {
          buttonColor = false;
        } else {
          const color = parseColorToHex(params.color);
          if (!color) {
            console.error("[Telegram.WebApp] Bottom button color format is invalid", params.color);
            throw Error("WebAppBottomButtonParamInvalid");
          }
          buttonColor = color;
        }
      }
      if (typeof params.text_color !== "undefined") {
        if (params.text_color === false || params.text_color === null) {
          buttonTextColor = false;
        } else {
          const text_color = parseColorToHex(params.text_color);
          if (!text_color) {
            console.error("[Telegram.WebApp] Bottom button text color format is invalid", params.text_color);
            throw Error("WebAppBottomButtonParamInvalid");
          }
          buttonTextColor = text_color;
        }
      }
      if (typeof params.is_visible !== "undefined") {
        if (params.is_visible && !bottomButton.text.length) {
          console.error("[Telegram.WebApp] Bottom button text is required");
          throw Error("WebAppBottomButtonParamInvalid");
        }
        isVisible = !!params.is_visible;
      }
      if (typeof params.has_shine_effect !== "undefined") {
        hasShineEffect = !!params.has_shine_effect;
      }
      if (!isMainButton && typeof params.position !== "undefined") {
        if (params.position != "left" && params.position != "right" && params.position != "top" && params.position != "bottom") {
          console.error("[Telegram.WebApp] Bottom button posiition is invalid", params.position);
          throw Error("WebAppBottomButtonParamInvalid");
        }
        buttonPosition = params.position;
      }
      if (typeof params.is_active !== "undefined") {
        isActive = !!params.is_active;
      }
      updateButton();
      return bottomButton;
    }

    bottomButton.setText = function(text) {
      return bottomButton.setParams({
        text
      });
    };
    bottomButton.onClick = function(callback) {
      onWebViewEvent(webViewEventName, callback);
      return bottomButton;
    };
    bottomButton.offClick = function(callback) {
      offWebViewEvent(webViewEventName, callback);
      return bottomButton;
    };
    bottomButton.show = function() {
      return bottomButton.setParams({
        is_visible: true
      });
    };
    bottomButton.hide = function() {
      return bottomButton.setParams({
        is_visible: false
      });
    };
    bottomButton.enable = function() {
      return bottomButton.setParams({
        is_active: true
      });
    };
    bottomButton.disable = function() {
      return bottomButton.setParams({
        is_active: false
      });
    };
    bottomButton.showProgress = function(leaveActive) {
      isActive = !!leaveActive;
      isProgressVisible = true;
      updateButton();
      return bottomButton;
    };
    bottomButton.hideProgress = function() {
      if (!bottomButton.isActive) {
        isActive = true;
      }
      isProgressVisible = false;
      updateButton();
      return bottomButton;
    };
    bottomButton.setParams = setParams;
    return bottomButton;
  };
  const MainButton = BottomButtonConstructor("main");
  const SecondaryButton = BottomButtonConstructor("secondary");

  const SettingsButton = (function() {
    let isVisible = false;

    const settingsButton = {};
    Object.defineProperty(settingsButton, "isVisible", {
      set(val) {
        setParams({
          is_visible: val
        });
      },
      get() {
        return isVisible;
      },
      enumerable: true,
    });

    let curButtonState = null;

    WebView.onEvent("settings_button_pressed", onSettingsButtonPressed);

    function onSettingsButtonPressed() {
      receiveWebViewEvent("settingsButtonClicked");
    }

    function buttonParams() {
      return {
        is_visible: isVisible
      };
    }

    function buttonState(btn_params) {
      if (typeof btn_params === "undefined") {
        btn_params = buttonParams();
      }
      return JSON.stringify(btn_params);
    }

    function buttonCheckVersion() {
      if (!versionAtLeast("6.10")) {
        console.warn(`[Telegram.WebApp] SettingsButton is not supported in version ${webAppVersion}`);
        return false;
      }
      return true;
    }

    function updateButton() {
      const btn_params = buttonParams();
      const btn_state = buttonState(btn_params);
      if (curButtonState === btn_state) {
        return;
      }
      curButtonState = btn_state;
      WebView.postEvent("web_app_setup_settings_button", false, btn_params);
    }

    function setParams(params) {
      if (!buttonCheckVersion()) {
        return settingsButton;
      }
      if (typeof params.is_visible !== "undefined") {
        isVisible = !!params.is_visible;
      }
      updateButton();
      return settingsButton;
    }

    settingsButton.onClick = function(callback) {
      if (buttonCheckVersion()) {
        onWebViewEvent("settingsButtonClicked", callback);
      }
      return settingsButton;
    };
    settingsButton.offClick = function(callback) {
      if (buttonCheckVersion()) {
        offWebViewEvent("settingsButtonClicked", callback);
      }
      return settingsButton;
    };
    settingsButton.show = function() {
      return setParams({
        is_visible: true
      });
    };
    settingsButton.hide = function() {
      return setParams({
        is_visible: false
      });
    };
    return settingsButton;
  })();

  const HapticFeedback = (function() {
    const hapticFeedback = {};

    function triggerFeedback(params) {
      if (!versionAtLeast("6.1")) {
        console.warn(`[Telegram.WebApp] HapticFeedback is not supported in version ${webAppVersion}`);
        return hapticFeedback;
      }
      if (params.type == "impact") {
        if (params.impact_style != "light" && params.impact_style != "medium" && params.impact_style != "heavy" && params.impact_style != "rigid" && params.impact_style != "soft") {
          console.error("[Telegram.WebApp] Haptic impact style is invalid", params.impact_style);
          throw Error("WebAppHapticImpactStyleInvalid");
        }
      } else if (params.type == "notification") {
        if (params.notification_type != "error" && params.notification_type != "success" && params.notification_type != "warning") {
          console.error("[Telegram.WebApp] Haptic notification type is invalid", params.notification_type);
          throw Error("WebAppHapticNotificationTypeInvalid");
        }
      } else if (params.type == "selection_change") {
        // no params needed
      } else {
        console.error("[Telegram.WebApp] Haptic feedback type is invalid", params.type);
        throw Error("WebAppHapticFeedbackTypeInvalid");
      }
      WebView.postEvent("web_app_trigger_haptic_feedback", false, params);
      return hapticFeedback;
    }

    hapticFeedback.impactOccurred = function(style) {
      return triggerFeedback({
        type: "impact",
        impact_style: style
      });
    };
    hapticFeedback.notificationOccurred = function(type) {
      return triggerFeedback({
        type: "notification",
        notification_type: type
      });
    };
    hapticFeedback.selectionChanged = function() {
      return triggerFeedback({
        type: "selection_change"
      });
    };
    return hapticFeedback;
  })();

  const CloudStorage = (function() {
    const cloudStorage = {};

    function invokeStorageMethod(method, params, callback) {
      if (!versionAtLeast("6.9")) {
        console.error(`[Telegram.WebApp] CloudStorage is not supported in version ${webAppVersion}`);
        throw Error("WebAppMethodUnsupported");
      }
      invokeCustomMethod(method, params, callback);
      return cloudStorage;
    }

    cloudStorage.setItem = function(key, value, callback) {
      return invokeStorageMethod("saveStorageValue", {
        key,
        value
      }, callback);
    };
    cloudStorage.getItem = function(key, callback) {
      return cloudStorage.getItems(
        [key],
        callback ?
        function(err, res) {
          if (err) callback(err);
          else callback(null, res[key]);
        } :
        null
      );
    };
    cloudStorage.getItems = function(keys, callback) {
      return invokeStorageMethod("getStorageValues", {
        keys
      }, callback);
    };
    cloudStorage.removeItem = function(key, callback) {
      return cloudStorage.removeItems([key], callback);
    };
    cloudStorage.removeItems = function(keys, callback) {
      return invokeStorageMethod("deleteStorageValues", {
        keys
      }, callback);
    };
    cloudStorage.getKeys = function(callback) {
      return invokeStorageMethod("getStorageKeys", {}, callback);
    };
    return cloudStorage;
  })();

  const BiometricManager = (function() {
    let isInited = false;
    let isBiometricAvailable = false;
    let biometricType = "unknown";
    let isAccessRequested = false;
    let isAccessGranted = false;
    let isBiometricTokenSaved = false;
    let deviceId = "";

    const biometricManager = {};
    Object.defineProperty(biometricManager, "isInited", {
      get() {
        return isInited;
      },
      enumerable: true,
    });
    Object.defineProperty(biometricManager, "isBiometricAvailable", {
      get() {
        return isInited && isBiometricAvailable;
      },
      enumerable: true,
    });
    Object.defineProperty(biometricManager, "biometricType", {
      get() {
        return biometricType || "unknown";
      },
      enumerable: true,
    });
    Object.defineProperty(biometricManager, "isAccessRequested", {
      get() {
        return isAccessRequested;
      },
      enumerable: true,
    });
    Object.defineProperty(biometricManager, "isAccessGranted", {
      get() {
        return isAccessRequested && isAccessGranted;
      },
      enumerable: true,
    });
    Object.defineProperty(biometricManager, "isBiometricTokenSaved", {
      get() {
        return isBiometricTokenSaved;
      },
      enumerable: true,
    });
    Object.defineProperty(biometricManager, "deviceId", {
      get() {
        return deviceId || "";
      },
      enumerable: true,
    });

    const initRequestState = {
      callbacks: []
    };
    let accessRequestState = false;
    let authRequestState = false;
    let tokenRequestState = false;

    WebView.onEvent("biometry_info_received", onBiometryInfoReceived);
    WebView.onEvent("biometry_auth_requested", onBiometryAuthRequested);
    WebView.onEvent("biometry_token_updated", onBiometryTokenUpdated);

    function onBiometryInfoReceived(eventType, eventData) {
      isInited = true;
      if (eventData.available) {
        isBiometricAvailable = true;
        biometricType = eventData.type || "unknown";
        if (eventData.access_requested) {
          isAccessRequested = true;
          isAccessGranted = !!eventData.access_granted;
          isBiometricTokenSaved = !!eventData.token_saved;
        } else {
          isAccessRequested = false;
          isAccessGranted = false;
          isBiometricTokenSaved = false;
        }
      } else {
        isBiometricAvailable = false;
        biometricType = "unknown";
        isAccessRequested = false;
        isAccessGranted = false;
        isBiometricTokenSaved = false;
      }
      deviceId = eventData.device_id || "";

      if (initRequestState.callbacks.length > 0) {
        for (let i = 0; i < initRequestState.callbacks.length; i++) {
          const callback = initRequestState.callbacks[i];
          callback();
        }
      }
      if (accessRequestState) {
        const state = accessRequestState;
        accessRequestState = false;
        if (state.callback) {
          state.callback(isAccessGranted);
        }
      }
      receiveWebViewEvent("biometricManagerUpdated");
    }

    function onBiometryAuthRequested(eventType, eventData) {
      const isAuthenticated = eventData.status == "authorized";
      const biometricToken = eventData.token || "";
      if (authRequestState) {
        const state = authRequestState;
        authRequestState = false;
        if (state.callback) {
          state.callback(isAuthenticated, isAuthenticated ? biometricToken : null);
        }
      }
      receiveWebViewEvent(
        "biometricAuthRequested",
        isAuthenticated ?
        {
          isAuthenticated: true,
          biometricToken,
        } :
        {
          isAuthenticated: false,
        }
      );
    }

    function onBiometryTokenUpdated(eventType, eventData) {
      let applied = false;
      if (isBiometricAvailable && isAccessRequested) {
        if (eventData.status == "updated") {
          isBiometricTokenSaved = true;
          applied = true;
        } else if (eventData.status == "removed") {
          isBiometricTokenSaved = false;
          applied = true;
        }
      }
      if (tokenRequestState) {
        const state = tokenRequestState;
        tokenRequestState = false;
        if (state.callback) {
          state.callback(applied);
        }
      }
      receiveWebViewEvent("biometricTokenUpdated", {
        isUpdated: applied,
      });
    }

    function checkVersion() {
      if (!versionAtLeast("7.2")) {
        console.warn(`[Telegram.WebApp] BiometricManager is not supported in version ${webAppVersion}`);
        return false;
      }
      return true;
    }

    function checkInit() {
      if (!isInited) {
        console.error("[Telegram.WebApp] BiometricManager should be inited before using.");
        throw Error("WebAppBiometricManagerNotInited");
      }
      return true;
    }

    biometricManager.init = function(callback) {
      if (!checkVersion()) {
        return biometricManager;
      }
      if (isInited) {
        return biometricManager;
      }
      if (callback) {
        initRequestState.callbacks.push(callback);
      }
      WebView.postEvent("web_app_biometry_get_info", false);
      return biometricManager;
    };
    biometricManager.requestAccess = function(params, callback) {
      if (!checkVersion()) {
        return biometricManager;
      }
      checkInit();
      if (!isBiometricAvailable) {
        console.error("[Telegram.WebApp] Biometrics is not available on this device.");
        throw Error("WebAppBiometricManagerBiometricsNotAvailable");
      }
      if (accessRequestState) {
        console.error("[Telegram.WebApp] Access is already requested");
        throw Error("WebAppBiometricManagerAccessRequested");
      }
      const popup_params = {};
      if (typeof params.reason !== "undefined") {
        const reason = strTrim(params.reason);
        if (reason.length > 128) {
          console.error("[Telegram.WebApp] Biometric reason is too long", reason);
          throw Error("WebAppBiometricRequestAccessParamInvalid");
        }
        if (reason.length > 0) {
          popup_params.reason = reason;
        }
      }

      accessRequestState = {
        callback,
      };
      WebView.postEvent("web_app_biometry_request_access", false, popup_params);
      return biometricManager;
    };
    biometricManager.authenticate = function(params, callback) {
      if (!checkVersion()) {
        return biometricManager;
      }
      checkInit();
      if (!isBiometricAvailable) {
        console.error("[Telegram.WebApp] Biometrics is not available on this device.");
        throw Error("WebAppBiometricManagerBiometricsNotAvailable");
      }
      if (!isAccessGranted) {
        console.error("[Telegram.WebApp] Biometric access was not granted by the user.");
        throw Error("WebAppBiometricManagerBiometricAccessNotGranted");
      }
      if (authRequestState) {
        console.error("[Telegram.WebApp] Authentication request is already in progress.");
        throw Error("WebAppBiometricManagerAuthenticationRequested");
      }
      const popup_params = {};
      if (typeof params.reason !== "undefined") {
        const reason = strTrim(params.reason);
        if (reason.length > 128) {
          console.error("[Telegram.WebApp] Biometric reason is too long", reason);
          throw Error("WebAppBiometricRequestAccessParamInvalid");
        }
        if (reason.length > 0) {
          popup_params.reason = reason;
        }
      }

      authRequestState = {
        callback,
      };
      WebView.postEvent("web_app_biometry_request_auth", false, popup_params);
      return biometricManager;
    };
    biometricManager.updateBiometricToken = function(token, callback) {
      if (!checkVersion()) {
        return biometricManager;
      }
      token = token || "";
      if (token.length > 1024) {
        console.error("[Telegram.WebApp] Token is too long", token);
        throw Error("WebAppBiometricManagerTokenInvalid");
      }
      checkInit();
      if (!isBiometricAvailable) {
        console.error("[Telegram.WebApp] Biometrics is not available on this device.");
        throw Error("WebAppBiometricManagerBiometricsNotAvailable");
      }
      if (!isAccessGranted) {
        console.error("[Telegram.WebApp] Biometric access was not granted by the user.");
        throw Error("WebAppBiometricManagerBiometricAccessNotGranted");
      }
      if (tokenRequestState) {
        console.error("[Telegram.WebApp] Token request is already in progress.");
        throw Error("WebAppBiometricManagerTokenUpdateRequested");
      }
      tokenRequestState = {
        callback,
      };
      WebView.postEvent("web_app_biometry_update_token", false, {
        token
      });
      return biometricManager;
    };
    biometricManager.openSettings = function() {
      if (!checkVersion()) {
        return biometricManager;
      }
      checkInit();
      if (!isBiometricAvailable) {
        console.error("[Telegram.WebApp] Biometrics is not available on this device.");
        throw Error("WebAppBiometricManagerBiometricsNotAvailable");
      }
      if (!isAccessRequested) {
        console.error("[Telegram.WebApp] Biometric access was not requested yet.");
        throw Error("WebAppBiometricManagerBiometricsAccessNotRequested");
      }
      if (isAccessGranted) {
        console.warn("[Telegram.WebApp] Biometric access was granted by the user, no need to go to settings.");
        return biometricManager;
      }
      WebView.postEvent("web_app_biometry_open_settings", false);
      return biometricManager;
    };
    return biometricManager;
  })();

  const webAppInvoices = {};

  function onInvoiceClosed(eventType, eventData) {
    if (eventData.slug && webAppInvoices[eventData.slug]) {
      const invoiceData = webAppInvoices[eventData.slug];
      delete webAppInvoices[eventData.slug];
      if (invoiceData.callback) {
        invoiceData.callback(eventData.status);
      }
      receiveWebViewEvent("invoiceClosed", {
        url: invoiceData.url,
        status: eventData.status,
      });
    }
  }

  let webAppPopupOpened = false;

  function onPopupClosed(eventType, eventData) {
    if (webAppPopupOpened) {
      const popupData = webAppPopupOpened;
      webAppPopupOpened = false;
      let button_id = null;
      if (typeof eventData.button_id !== "undefined") {
        button_id = eventData.button_id;
      }
      if (popupData.callback) {
        popupData.callback(button_id);
      }
      receiveWebViewEvent("popupClosed", {
        button_id,
      });
    }
  }

  let webAppScanQrPopupOpened = false;

  function onQrTextReceived(eventType, eventData) {
    if (webAppScanQrPopupOpened) {
      const popupData = webAppScanQrPopupOpened;
      let data = null;
      if (typeof eventData.data !== "undefined") {
        data = eventData.data;
      }
      if (popupData.callback) {
        if (popupData.callback(data)) {
          webAppScanQrPopupOpened = false;
          WebView.postEvent("web_app_close_scan_qr_popup", false);
        }
      }
      receiveWebViewEvent("qrTextReceived", {
        data,
      });
    }
  }

  function onScanQrPopupClosed(eventType, eventData) {
    webAppScanQrPopupOpened = false;
    receiveWebViewEvent("scanQrPopupClosed");
  }

  function onClipboardTextReceived(eventType, eventData) {
    if (eventData.req_id && webAppCallbacks[eventData.req_id]) {
      const requestData = webAppCallbacks[eventData.req_id];
      delete webAppCallbacks[eventData.req_id];
      let data = null;
      if (typeof eventData.data !== "undefined") {
        data = eventData.data;
      }
      if (requestData.callback) {
        requestData.callback(data);
      }
      receiveWebViewEvent("clipboardTextReceived", {
        data,
      });
    }
  }

  let WebAppWriteAccessRequested = false;

  function onWriteAccessRequested(eventType, eventData) {
    if (WebAppWriteAccessRequested) {
      const requestData = WebAppWriteAccessRequested;
      WebAppWriteAccessRequested = false;
      if (requestData.callback) {
        requestData.callback(eventData.status == "allowed");
      }
      receiveWebViewEvent("writeAccessRequested", {
        status: eventData.status,
      });
    }
  }

  function getRequestedContact(callback, timeout) {
    let reqTo;
    let fallbackTo;
    let reqDelay = 0;
    var reqInvoke = function() {
      invokeCustomMethod("getRequestedContact", {}, function(err, res) {
        if (res && res.length) {
          clearTimeout(fallbackTo);
          callback(res);
        } else {
          reqDelay += 50;
          reqTo = setTimeout(reqInvoke, reqDelay);
        }
      });
    };
    const fallbackInvoke = function() {
      clearTimeout(reqTo);
      callback("");
    };
    fallbackTo = setTimeout(fallbackInvoke, timeout);
    reqInvoke();
  }

  let WebAppContactRequested = false;

  function onPhoneRequested(eventType, eventData) {
    if (WebAppContactRequested) {
      const requestData = WebAppContactRequested;
      WebAppContactRequested = false;
      const requestSent = eventData.status == "sent";
      const webViewEvent = {
        status: eventData.status,
      };
      if (requestSent) {
        getRequestedContact(function(res) {
          if (res && res.length) {
            webViewEvent.response = res;
            webViewEvent.responseUnsafe = Utils.urlParseQueryString(res);
            for (const key in webViewEvent.responseUnsafe) {
              const val = webViewEvent.responseUnsafe[key];
              try {
                if ((val.substr(0, 1) == "{" && val.substr(-1) == "}") || (val.substr(0, 1) == "[" && val.substr(-1) == "]")) {
                  webViewEvent.responseUnsafe[key] = JSON.parse(val);
                }
              } catch (e) {}
            }
          }
          if (requestData.callback) {
            requestData.callback(requestSent, webViewEvent);
          }
          receiveWebViewEvent("contactRequested", webViewEvent);
        }, 3000);
      } else {
        if (requestData.callback) {
          requestData.callback(requestSent, webViewEvent);
        }
        receiveWebViewEvent("contactRequested", webViewEvent);
      }
    }
  }

  function onCustomMethodInvoked(eventType, eventData) {
    if (eventData.req_id && webAppCallbacks[eventData.req_id]) {
      const requestData = webAppCallbacks[eventData.req_id];
      delete webAppCallbacks[eventData.req_id];
      let res = null;
      let err = null;
      if (typeof eventData.result !== "undefined") {
        res = eventData.result;
      }
      if (typeof eventData.error !== "undefined") {
        err = eventData.error;
      }
      if (requestData.callback) {
        requestData.callback(err, res);
      }
    }
  }

  function invokeCustomMethod(method, params, callback) {
    if (!versionAtLeast("6.9")) {
      console.error(`[Telegram.WebApp] Method invokeCustomMethod is not supported in version ${webAppVersion}`);
      throw Error("WebAppMethodUnsupported");
    }
    const req_id = generateCallbackId(16);
    const req_params = {
      req_id,
      method,
      params: params || {}
    };
    webAppCallbacks[req_id] = {
      callback,
    };
    WebView.postEvent("web_app_invoke_custom_method", false, req_params);
  }

  if (!window.Telegram) {
    window.Telegram = {};
  }

  Object.defineProperty(WebApp, "initData", {
    get() {
      return webAppInitData;
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "initDataUnsafe", {
    get() {
      return webAppInitDataUnsafe;
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "version", {
    get() {
      return webAppVersion;
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "platform", {
    get() {
      return webAppPlatform;
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "colorScheme", {
    get() {
      return colorScheme;
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "themeParams", {
    get() {
      return themeParams;
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "isExpanded", {
    get() {
      return isExpanded;
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "viewportHeight", {
    get() {
      return (viewportHeight === false ? window.innerHeight : viewportHeight) - bottomBarHeight;
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "viewportStableHeight", {
    get() {
      return (viewportStableHeight === false ? window.innerHeight : viewportStableHeight) - bottomBarHeight;
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "isClosingConfirmationEnabled", {
    set(val) {
      setClosingConfirmation(val);
    },
    get() {
      return isClosingConfirmationEnabled;
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "isVerticalSwipesEnabled", {
    set(val) {
      toggleVerticalSwipes(val);
    },
    get() {
      return isVerticalSwipesEnabled;
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "headerColor", {
    set(val) {
      setHeaderColor(val);
    },
    get() {
      return getHeaderColor();
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "backgroundColor", {
    set(val) {
      setBackgroundColor(val);
    },
    get() {
      return getBackgroundColor();
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "bottomBarColor", {
    set(val) {
      setBottomBarColor(val);
    },
    get() {
      return getBottomBarColor();
    },
    enumerable: true,
  });
  Object.defineProperty(WebApp, "BackButton", {
    value: BackButton,
    enumerable: true,
  });
  Object.defineProperty(WebApp, "MainButton", {
    value: MainButton,
    enumerable: true,
  });
  Object.defineProperty(WebApp, "SecondaryButton", {
    value: SecondaryButton,
    enumerable: true,
  });
  Object.defineProperty(WebApp, "SettingsButton", {
    value: SettingsButton,
    enumerable: true,
  });
  Object.defineProperty(WebApp, "HapticFeedback", {
    value: HapticFeedback,
    enumerable: true,
  });
  Object.defineProperty(WebApp, "CloudStorage", {
    value: CloudStorage,
    enumerable: true,
  });
  Object.defineProperty(WebApp, "BiometricManager", {
    value: BiometricManager,
    enumerable: true,
  });
  WebApp.setHeaderColor = function(color_key) {
    WebApp.headerColor = color_key;
  };
  WebApp.setBackgroundColor = function(color) {
    WebApp.backgroundColor = color;
  };
  WebApp.setBottomBarColor = function(color) {
    WebApp.bottomBarColor = color;
  };
  WebApp.enableClosingConfirmation = function() {
    WebApp.isClosingConfirmationEnabled = true;
  };
  WebApp.disableClosingConfirmation = function() {
    WebApp.isClosingConfirmationEnabled = false;
  };
  WebApp.enableVerticalSwipes = function() {
    WebApp.isVerticalSwipesEnabled = true;
  };
  WebApp.disableVerticalSwipes = function() {
    WebApp.isVerticalSwipesEnabled = false;
  };
  WebApp.isVersionAtLeast = function(ver) {
    return versionAtLeast(ver);
  };
  WebApp.onEvent = function(eventType, callback) {
    onWebViewEvent(eventType, callback);
  };
  WebApp.offEvent = function(eventType, callback) {
    offWebViewEvent(eventType, callback);
  };
  WebApp.sendData = function(data) {
    if (!data || !data.length) {
      console.error("[Telegram.WebApp] Data is required", data);
      throw Error("WebAppDataInvalid");
    }
    if (byteLength(data) > 4096) {
      console.error("[Telegram.WebApp] Data is too long", data);
      throw Error("WebAppDataInvalid");
    }
    WebView.postEvent("web_app_data_send", false, {
      data
    });
  };
  WebApp.switchInlineQuery = function(query, choose_chat_types) {
    if (!versionAtLeast("6.6")) {
      console.error(`[Telegram.WebApp] Method switchInlineQuery is not supported in version ${webAppVersion}`);
      throw Error("WebAppMethodUnsupported");
    }
    if (!initParams.tgWebAppBotInline) {
      console.error("[Telegram.WebApp] Inline mode is disabled for this bot. Read more about inline mode: https://core.telegram.org/bots/inline");
      throw Error("WebAppInlineModeDisabled");
    }
    query = query || "";
    if (query.length > 256) {
      console.error("[Telegram.WebApp] Inline query is too long", query);
      throw Error("WebAppInlineQueryInvalid");
    }
    const chat_types = [];
    if (choose_chat_types) {
      if (!Array.isArray(choose_chat_types)) {
        console.error("[Telegram.WebApp] Choose chat types should be an array", choose_chat_types);
        throw Error("WebAppInlineChooseChatTypesInvalid");
      }
      const good_types = {
        users: 1,
        bots: 1,
        groups: 1,
        channels: 1
      };
      for (let i = 0; i < choose_chat_types.length; i++) {
        const chat_type = choose_chat_types[i];
        if (!good_types[chat_type]) {
          console.error("[Telegram.WebApp] Choose chat type is invalid", chat_type);
          throw Error("WebAppInlineChooseChatTypeInvalid");
        }
        if (good_types[chat_type] != 2) {
          good_types[chat_type] = 2;
          chat_types.push(chat_type);
        }
      }
    }
    WebView.postEvent("web_app_switch_inline_query", false, {
      query,
      chat_types
    });
  };
  WebApp.openLink = function(url, options) {
    const a = document.createElement("A");
    a.href = url;
    if (a.protocol != "http:" && a.protocol != "https:") {
      console.error("[Telegram.WebApp] Url protocol is not supported", url);
      throw Error("WebAppTgUrlInvalid");
    }
    var url = a.href;
    options = options || {};
    if (versionAtLeast("6.1")) {
      const req_params = {
        url
      };
      if (versionAtLeast("6.4") && options.try_instant_view) {
        req_params.try_instant_view = true;
      }
      if (versionAtLeast("7.6") && options.try_browser) {
        req_params.try_browser = options.try_browser;
      }
      WebView.postEvent("web_app_open_link", false, req_params);
    } else {
      window.open(url, "_blank");
    }
  };
  WebApp.openTelegramLink = function(url) {
    const a = document.createElement("A");
    a.href = url;
    if (a.protocol != "http:" && a.protocol != "https:") {
      console.error("[Telegram.WebApp] Url protocol is not supported", url);
      throw Error("WebAppTgUrlInvalid");
    }
    if (a.hostname != "t.me") {
      console.error("[Telegram.WebApp] Url host is not supported", url);
      throw Error("WebAppTgUrlInvalid");
    }
    const path_full = a.pathname + a.search;
    if (isIframe || versionAtLeast("6.1")) {
      WebView.postEvent("web_app_open_tg_link", false, {
        path_full
      });
    } else {
      location.href = `https://t.me${path_full}`;
    }
  };
  WebApp.openInvoice = function(url, callback) {
    const a = document.createElement("A");
    let match;
    let slug;
    a.href = url;
    if ((a.protocol != "http:" && a.protocol != "https:") || a.hostname != "t.me" || !(match = a.pathname.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/)) || !(slug = match[2])) {
      console.error("[Telegram.WebApp] Invoice url is invalid", url);
      throw Error("WebAppInvoiceUrlInvalid");
    }
    if (!versionAtLeast("6.1")) {
      console.error(`[Telegram.WebApp] Method openInvoice is not supported in version ${webAppVersion}`);
      throw Error("WebAppMethodUnsupported");
    }
    if (webAppInvoices[slug]) {
      console.error("[Telegram.WebApp] Invoice is already opened");
      throw Error("WebAppInvoiceOpened");
    }
    webAppInvoices[slug] = {
      url,
      callback,
    };
    WebView.postEvent("web_app_open_invoice", false, {
      slug
    });
  };
  WebApp.showPopup = function(params, callback) {
    if (!versionAtLeast("6.2")) {
      console.error(`[Telegram.WebApp] Method showPopup is not supported in version ${webAppVersion}`);
      throw Error("WebAppMethodUnsupported");
    }
    if (webAppPopupOpened) {
      console.error("[Telegram.WebApp] Popup is already opened");
      throw Error("WebAppPopupOpened");
    }
    let title = "";
    let message = "";
    const buttons = [];
    const popup_buttons = {};
    const popup_params = {};
    if (typeof params.title !== "undefined") {
      title = strTrim(params.title);
      if (title.length > 64) {
        console.error("[Telegram.WebApp] Popup title is too long", title);
        throw Error("WebAppPopupParamInvalid");
      }
      if (title.length > 0) {
        popup_params.title = title;
      }
    }
    if (typeof params.message !== "undefined") {
      message = strTrim(params.message);
    }
    if (!message.length) {
      console.error("[Telegram.WebApp] Popup message is required", params.message);
      throw Error("WebAppPopupParamInvalid");
    }
    if (message.length > 256) {
      console.error("[Telegram.WebApp] Popup message is too long", message);
      throw Error("WebAppPopupParamInvalid");
    }
    popup_params.message = message;
    if (typeof params.buttons !== "undefined") {
      if (!Array.isArray(params.buttons)) {
        console.error("[Telegram.WebApp] Popup buttons should be an array", params.buttons);
        throw Error("WebAppPopupParamInvalid");
      }
      for (let i = 0; i < params.buttons.length; i++) {
        const button = params.buttons[i];
        const btn = {};
        let id = "";
        if (typeof button.id !== "undefined") {
          id = button.id.toString();
          if (id.length > 64) {
            console.error("[Telegram.WebApp] Popup button id is too long", id);
            throw Error("WebAppPopupParamInvalid");
          }
        }
        btn.id = id;
        let button_type = button.type;
        if (typeof button_type === "undefined") {
          button_type = "default";
        }
        btn.type = button_type;
        if (button_type == "ok" || button_type == "close" || button_type == "cancel") {
          // no params needed
        } else if (button_type == "default" || button_type == "destructive") {
          let text = "";
          if (typeof button.text !== "undefined") {
            text = strTrim(button.text);
          }
          if (!text.length) {
            console.error(`[Telegram.WebApp] Popup button text is required for type ${button_type}`, button.text);
            throw Error("WebAppPopupParamInvalid");
          }
          if (text.length > 64) {
            console.error("[Telegram.WebApp] Popup button text is too long", text);
            throw Error("WebAppPopupParamInvalid");
          }
          btn.text = text;
        } else {
          console.error("[Telegram.WebApp] Popup button type is invalid", button_type);
          throw Error("WebAppPopupParamInvalid");
        }
        buttons.push(btn);
      }
    } else {
      buttons.push({
        id: "",
        type: "close"
      });
    }
    if (buttons.length < 1) {
      console.error("[Telegram.WebApp] Popup should have at least one button");
      throw Error("WebAppPopupParamInvalid");
    }
    if (buttons.length > 3) {
      console.error("[Telegram.WebApp] Popup should not have more than 3 buttons");
      throw Error("WebAppPopupParamInvalid");
    }
    popup_params.buttons = buttons;

    webAppPopupOpened = {
      callback,
    };
    WebView.postEvent("web_app_open_popup", false, popup_params);
  };
  WebApp.showAlert = function(message, callback) {
    WebApp.showPopup({
        message,
      },
      callback ?
      function() {
        callback();
      } :
      null
    );
  };
  WebApp.showConfirm = function(message, callback) {
    WebApp.showPopup({
        message,
        buttons: [{
          type: "ok",
          id: "ok"
        }, {
          type: "cancel"
        }],
      },
      callback ?
      function(button_id) {
        callback(button_id == "ok");
      } :
      null
    );
  };
  WebApp.showScanQrPopup = function(params, callback) {
    if (!versionAtLeast("6.4")) {
      console.error(`[Telegram.WebApp] Method showScanQrPopup is not supported in version ${webAppVersion}`);
      throw Error("WebAppMethodUnsupported");
    }
    if (webAppScanQrPopupOpened) {
      console.error("[Telegram.WebApp] Popup is already opened");
      throw Error("WebAppScanQrPopupOpened");
    }
    let text = "";
    const popup_params = {};
    if (typeof params.text !== "undefined") {
      text = strTrim(params.text);
      if (text.length > 64) {
        console.error("[Telegram.WebApp] Scan QR popup text is too long", text);
        throw Error("WebAppScanQrPopupParamInvalid");
      }
      if (text.length > 0) {
        popup_params.text = text;
      }
    }

    webAppScanQrPopupOpened = {
      callback,
    };
    WebView.postEvent("web_app_open_scan_qr_popup", false, popup_params);
  };
  WebApp.closeScanQrPopup = function() {
    if (!versionAtLeast("6.4")) {
      console.error(`[Telegram.WebApp] Method closeScanQrPopup is not supported in version ${webAppVersion}`);
      throw Error("WebAppMethodUnsupported");
    }

    webAppScanQrPopupOpened = false;
    WebView.postEvent("web_app_close_scan_qr_popup", false);
  };
  WebApp.readTextFromClipboard = function(callback) {
    if (!versionAtLeast("6.4")) {
      console.error(`[Telegram.WebApp] Method readTextFromClipboard is not supported in version ${webAppVersion}`);
      throw Error("WebAppMethodUnsupported");
    }
    const req_id = generateCallbackId(16);
    const req_params = {
      req_id
    };
    webAppCallbacks[req_id] = {
      callback,
    };
    WebView.postEvent("web_app_read_text_from_clipboard", false, req_params);
  };
  WebApp.requestWriteAccess = function(callback) {
    if (!versionAtLeast("6.9")) {
      console.error(`[Telegram.WebApp] Method requestWriteAccess is not supported in version ${webAppVersion}`);
      throw Error("WebAppMethodUnsupported");
    }
    if (WebAppWriteAccessRequested) {
      console.error("[Telegram.WebApp] Write access is already requested");
      throw Error("WebAppWriteAccessRequested");
    }
    WebAppWriteAccessRequested = {
      callback,
    };
    WebView.postEvent("web_app_request_write_access");
  };
  WebApp.requestContact = function(callback) {
    if (!versionAtLeast("6.9")) {
      console.error(`[Telegram.WebApp] Method requestContact is not supported in version ${webAppVersion}`);
      throw Error("WebAppMethodUnsupported");
    }
    if (WebAppContactRequested) {
      console.error("[Telegram.WebApp] Contact is already requested");
      throw Error("WebAppContactRequested");
    }
    WebAppContactRequested = {
      callback,
    };
    WebView.postEvent("web_app_request_phone");
  };
  WebApp.shareToStory = function(media_url, params) {
    params = params || {};
    if (!versionAtLeast("7.8")) {
      console.error(`[Telegram.WebApp] Method shareToStory is not supported in version ${webAppVersion}`);
      throw Error("WebAppMethodUnsupported");
    }
    const a = document.createElement("A");
    a.href = media_url;
    if (a.protocol != "http:" && a.protocol != "https:") {
      console.error("[Telegram.WebApp] Media url protocol is not supported", url);
      throw Error("WebAppMediaUrlInvalid");
    }
    const share_params = {};
    share_params.media_url = a.href;
    if (typeof params.text !== "undefined") {
      const text = strTrim(params.text);
      if (text.length > 2048) {
        console.error("[Telegram.WebApp] Text is too long", text);
        throw Error("WebAppShareToStoryParamInvalid");
      }
      if (text.length > 0) {
        share_params.text = text;
      }
    }
    if (typeof params.widget_link !== "undefined") {
      params.widget_link = params.widget_link || {};
      a.href = params.widget_link.url;
      if (a.protocol != "http:" && a.protocol != "https:") {
        console.error("[Telegram.WebApp] Link protocol is not supported", url);
        throw Error("WebAppShareToStoryParamInvalid");
      }
      const widget_link = {
        url: a.href,
      };
      if (typeof params.widget_link.name !== "undefined") {
        const link_name = strTrim(params.widget_link.name);
        if (link_name.length > 48) {
          console.error("[Telegram.WebApp] Link name is too long", link_name);
          throw Error("WebAppShareToStoryParamInvalid");
        }
        if (link_name.length > 0) {
          widget_link.name = link_name;
        }
      }
      share_params.widget_link = widget_link;
    }

    WebView.postEvent("web_app_share_to_story", false, share_params);
  };
  WebApp.invokeCustomMethod = function(method, params, callback) {
    invokeCustomMethod(method, params, callback);
  };
  WebApp.ready = function() {
    WebView.postEvent("web_app_ready");
  };
  WebApp.expand = function() {
    WebView.postEvent("web_app_expand");
  };
  WebApp.close = function(options) {
    options = options || {};
    const req_params = {};
    if (versionAtLeast("7.6") && options.return_back) {
      req_params.return_back = true;
    }
    WebView.postEvent("web_app_close", false, req_params);
  };

  window.Telegram.WebApp = WebApp;

  updateHeaderColor();
  updateBackgroundColor();
  updateBottomBarColor();
  setViewportHeight();
  if (initParams.tgWebAppShowSettings) {
    SettingsButton.show();
  }

  window.addEventListener("resize", onWindowResize);
  if (isIframe) {
    document.addEventListener("click", linkHandler);
  }

  WebView.onEvent("theme_changed", onThemeChanged);
  WebView.onEvent("viewport_changed", onViewportChanged);
  WebView.onEvent("invoice_closed", onInvoiceClosed);
  WebView.onEvent("popup_closed", onPopupClosed);
  WebView.onEvent("qr_text_received", onQrTextReceived);
  WebView.onEvent("scan_qr_popup_closed", onScanQrPopupClosed);
  WebView.onEvent("clipboard_text_received", onClipboardTextReceived);
  WebView.onEvent("write_access_requested", onWriteAccessRequested);
  WebView.onEvent("phone_requested", onPhoneRequested);
  WebView.onEvent("custom_method_invoked", onCustomMethodInvoked);
  WebView.postEvent("web_app_request_theme");
  WebView.postEvent("web_app_request_viewport");
})();