/* PLEASE DO NOT COPY AND PASTE THIS CODE. */
(function() {
  var w = window,
    C = '___grecaptcha_cfg',
    cfg = w[C] = w[C] || {},
    N = 'grecaptcha';
  var E = 'enterprise',
    a = w[N] = w[N] || {},
    gr = a[E] = a[E] || {};
  gr.ready = gr.ready || function(f) {
    (cfg['fns'] = cfg['fns'] || []).push(f);
  };
  w['__recaptcha_api'] = 'https://www.google.com/recaptcha/enterprise/';
  (cfg['enterprise'] = cfg['enterprise'] || []).push(true);
  (cfg['render'] = cfg['render'] || []).push('onload');
  (cfg['clr'] = cfg['clr'] || []).push('true');
  w['__google_recaptcha_client'] = true;
  var d = document,
    po = d.createElement('script');
  po.type = 'text/javascript';
  po.async = true;
  po.charset = 'utf-8';
  po.src = 'https://www.gstatic.com/recaptcha/releases/IyZ984yGrXrBd6ihLOYGwy9X/recaptcha__en.js';
  po.crossOrigin = 'anonymous';
  po.integrity = 'sha384-3wmc1Bh1cCJW+fASaBmsSdAIwB8jgncUQXdLNwTeFRWYZhdATgEib2Aeg4rtm7Yi';
  var e = d.querySelector('script[nonce]'),
    n = e && (e['nonce'] || e.getAttribute('nonce'));
  if (n) {
    po.setAttribute('nonce', n);
  }
  var s = d.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(po, s);
})();