/* @ds-bundle: {"format":4,"namespace":"DesignSystem_5984f2","components":[],"sourceHashes":{"script.js":"8329ec5fb6dc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_5984f2 = window.DesignSystem_5984f2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// script.js
try { (() => {
/* ============================================================
   SGD Homepage — interactive behaviour
   (language switcher + carousel scroll controls)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Language switcher ---------- */
  const LANGS = [{
    code: 'DE',
    name: 'Deutsch'
  }, {
    code: 'EN',
    name: 'Englisch'
  }, {
    code: 'FR',
    name: 'Französisch'
  }, {
    code: 'IT',
    name: 'Italienisch'
  }];

  // Flag markup per language code.
  function flag(code) {
    switch (code) {
      case 'DE':
        return '<span class="flag flag--stack">' + '<span style="background:#1a1a1a"></span>' + '<span style="background:#d0203a"></span>' + '<span style="background:#ffcc00"></span></span>';
      case 'EN':
        return '<svg class="flag" width="20" height="14" viewBox="0 0 20 14" style="display:block">' + '<rect width="20" height="14" fill="#00247d"></rect>' + '<path d="M0,0 L20,14 M20,0 L0,14" stroke="#fff" stroke-width="2.4"></path>' + '<path d="M0,0 L8,5.6 M20,0 L12,5.6 M0,14 L8,8.4 M20,14 L12,8.4" stroke="#cf142b" stroke-width="1.2"></path>' + '<rect x="8" width="4" height="14" fill="#fff"></rect>' + '<rect y="5" width="20" height="4" fill="#fff"></rect>' + '<rect x="8.8" width="2.4" height="14" fill="#cf142b"></rect>' + '<rect y="5.8" width="20" height="2.4" fill="#cf142b"></rect></svg>';
      case 'FR':
        return '<span class="flag">' + '<span style="background:#002654"></span>' + '<span style="background:#fff"></span>' + '<span style="background:#ce1126"></span></span>';
      case 'IT':
        return '<span class="flag">' + '<span style="background:#008c45"></span>' + '<span style="background:#fff"></span>' + '<span style="background:#cd212a"></span></span>';
      default:
        return '';
    }
  }
  const switcher = document.getElementById('langSwitcher');
  let currentCode = 'DE';
  let open = false;
  function render() {
    const current = LANGS.find(l => l.code === currentCode) || LANGS[0];
    const others = LANGS.filter(l => l.code !== currentCode);
    switcher.innerHTML = '<button type="button" class="lang-toggle" aria-haspopup="true" aria-expanded="' + open + '">' + flag(current.code) + '<span>' + current.code + '</span>' + '<svg width="9" height="6" viewBox="0 0 10 6" style="flex:0 0 auto">' + '<path d="M1 1l4 4 4-4" stroke="#838082" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>' + '</svg>' + '</button>' + (open ? '<div class="lang-menu" role="menu">' + others.map(o => '<button type="button" class="lang-option" role="menuitem" data-code="' + o.code + '">' + flag(o.code) + '<span>' + o.name + '</span>' + '</button>').join('') + '</div>' : '');
    switcher.querySelector('.lang-toggle').addEventListener('click', function (e) {
      e.stopPropagation();
      closeNavDropdowns();
      open = !open;
      render();
    });
    switcher.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        currentCode = btn.getAttribute('data-code');
        open = false;
        render();
      });
    });
  }
  document.addEventListener('click', function () {
    if (open) {
      open = false;
      render();
    }
  });
  render();

  /* ---------- Nav dropdowns (click to open, like the language menu) ---------- */
  const navDropdowns = document.querySelectorAll('.nav-dropdown[data-dropdown]');
  function closeNavDropdowns() {
    navDropdowns.forEach(function (dd) {
      dd.classList.remove('open');
      const t = dd.querySelector('.nav-link');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  }
  navDropdowns.forEach(function (dd) {
    const trigger = dd.querySelector('.nav-link');
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const willOpen = !dd.classList.contains('open');
      closeNavDropdowns();
      if (open) {
        open = false;
        render();
      } // also close the language menu
      if (willOpen) {
        dd.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Click anywhere else closes any open nav dropdown.
  document.addEventListener('click', closeNavDropdowns);

  /* ---------- Carousel scroll controls ---------- */
  // step = card width + gap (event card 300 + 24, doc card 280 + 24)
  const STEP = {
    events: 324,
    docs: 304
  };
  const carousels = {
    events: document.getElementById('eventsCarousel'),
    docs: document.getElementById('docsCarousel')
  };
  document.querySelectorAll('[data-scroll]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const name = btn.getAttribute('data-scroll');
      const dir = parseInt(btn.getAttribute('data-dir'), 10);
      const el = carousels[name];
      if (el) el.scrollBy({
        left: dir * STEP[name],
        behavior: 'smooth'
      });
    });
  });

  /* ---------- Mobile navigation ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (navToggle && mobileNav) {
    function setMenu(isOpen) {
      mobileNav.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
    }
    navToggle.addEventListener('click', function () {
      setMenu(!mobileNav.classList.contains('open'));
    });
    // Close after tapping a link.
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        setMenu(false);
      });
    });
    // Reset when the viewport grows back to desktop.
    window.addEventListener('resize', function () {
      if (window.innerWidth > 940 && mobileNav.classList.contains('open')) setMenu(false);
    });
  }

  /* ---------- Audience cards: play the Lordicon on card hover ---------- */
  document.querySelectorAll('.audience-card').forEach(function (card) {
    const icon = card.querySelector('lord-icon');
    if (!icon) return;
    card.addEventListener('mouseenter', function () {
      // playerInstance exists once lordicon.js has upgraded the element.
      if (icon.playerInstance) icon.playerInstance.playFromBeginning();
    });
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "script.js", error: String((e && e.message) || e) }); }

})();
