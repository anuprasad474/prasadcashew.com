/* ALLNUTTS — interaction + i18n controller */
(function () {
  'use strict';
  var LS = 'allnutts_lang';
  var WA = '919447745497';
  var I18N = window.I18N, FLAGS = window.LANG_FLAGS;

  function $(s, r) { return (r || document).querySelector(s); }
  function $all(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* ---------- language ---------- */
  function detectLang() {
    var saved = localStorage.getItem(LS);
    if (saved && I18N[saved]) return saved;
    var n = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return I18N[n] ? n : 'en';
  }
  var current = detectLang();

  function applyLang(code) {
    if (!I18N[code]) code = 'en';
    current = code;
    localStorage.setItem(LS, code);
    var d = I18N[code];

    document.documentElement.lang = code;
    document.documentElement.dir = d.dir;
    document.body.setAttribute('dir', d.dir);
    document.body.className = document.body.className.replace(/\blang-\w+\b/g, '').trim();
    document.body.classList.add('lang-' + code);

    // text nodes
    $all('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (d[key] != null) el.innerHTML = d[key];
    });
    // placeholders
    $all('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (d[key] != null) el.setAttribute('placeholder', d[key]);
    });
    // option labels
    $all('[data-i18n-opt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-opt');
      if (d[key] != null) el.textContent = d[key];
    });

    // switcher button
    var lbl = $('#langLabel'), flag = $('#langFlag');
    if (lbl) lbl.textContent = d.native;
    if (flag) flag.style.background = FLAGS[code];
    $all('.lang-option').forEach(function (o) {
      o.classList.toggle('active', o.getAttribute('data-lang') === code);
    });
  }

  function buildLangMenu() {
    var menu = $('#langMenu');
    if (!menu) return;
    menu.innerHTML = Object.keys(I18N).map(function (k) {
      var d = I18N[k];
      return '<button class="lang-option" data-lang="' + k + '" role="menuitem">' +
        '<span class="lang-flag" style="background:' + FLAGS[k] + '"></span>' +
        '<span>' + d.native + '</span><span class="lang-native">' + d.label + '</span></button>';
    }).join('');
    menu.addEventListener('click', function (e) {
      var b = e.target.closest('[data-lang]');
      if (!b) return;
      applyLang(b.getAttribute('data-lang'));
      $('#lang').classList.remove('open');
    });
  }

  function initLangToggle() {
    var lang = $('#lang'); if (!lang) return;
    $('#langBtn').addEventListener('click', function (e) {
      e.stopPropagation();
      lang.classList.toggle('open');
    });
    document.addEventListener('click', function () { lang.classList.remove('open'); });
  }

  /* ---------- mobile nav ---------- */
  function initNav() {
    var t = $('#navToggle'), links = $('#navLinks');
    if (t && links) t.addEventListener('click', function () { links.classList.toggle('open'); });
    var nav = $('nav');
    window.addEventListener('scroll', function () {
      if (!nav) return;
      nav.style.padding = window.scrollY > 30 ? '0' : '';
    }, { passive: true });
    // mark active page
    var path = (location.pathname.split('/').pop() || 'index.html');
    $all('.nav-links a').forEach(function (a) {
      if (a.getAttribute('href') === path) a.classList.add('active');
    });
  }

  /* ---------- reveal (fail-safe: content never stays hidden) ---------- */
  function initReveal() {
    var els = $all('.reveal');
    function showAll() { els.forEach(function (e) { e.classList.add('in'); }); }
    if (!('IntersectionObserver' in window)) { showAll(); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (e, i) { e.style.transitionDelay = (i % 4) * 90 + 'ms'; io.observe(e); });
    // Safety net: if anything is still hidden after 1.6s, reveal it.
    setTimeout(function () {
      els.forEach(function (e) {
        var r = e.getBoundingClientRect();
        if (r.top < window.innerHeight + 200) e.classList.add('in');
      });
    }, 1600);
    // Absolute fallback on full load.
    window.addEventListener('load', function () { setTimeout(showAll, 2500); });
  }

  /* ---------- WhatsApp ---------- */
  function toast(msg) {
    var t = $('#toast'); if (!t) return;
    t.querySelector('span').textContent = msg;
    t.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }

  window.sendWhatsApp = function () {
    var d = I18N[current];
    var company = (($('#company') || {}).value || '-');
    var product = (($('#product') || {}).value || '-');
    var qty = (($('#qty') || {}).value || '-');
    var details = (($('#details') || {}).value || '-');
    var L = {
      title: '*ALLNUTTS — Quote Request*',
      company: d.f_company, product: d.f_product, qty: 'Volume', details: 'Specs'
    };
    var msg = L.title + '\n\n' +
      '*' + d.f_company + ':* ' + company + '\n' +
      '*' + d.f_product + ':* ' + product + '\n' +
      '*Volume:* ' + qty + '\n' +
      '*Spec:* ' + details;
    toast(d.toast_msg);
    setTimeout(function () {
      window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(msg), '_blank');
    }, 450);
  };

  /* ---------- boot ---------- */
  function boot() {
    buildLangMenu();
    initLangToggle();
    initNav();
    initReveal();
    applyLang(current);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
