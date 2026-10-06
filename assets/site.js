// Wayve Media — shared site behaviour
// Ported from the Claude Design canvas Component scripts (DCLogic state) into
// plain vanilla JS. Each block is a no-op on pages that don't have the
// relevant markup, so this single file is safe to include on every page.
(function () {
  'use strict';

  // ---------------- Theme toggle (dark / light) ----------------
  // The initial theme is applied by an inline script in <head> to avoid a
  // flash; this only handles switching and persisting the choice.
  var root = document.documentElement;
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    var sync = function () { btn.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'light' ? 'true' : 'false'); };
    sync();
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('wm-theme', next); } catch (e) { /* storage unavailable: theme still switches for this page */ }
      sync();
    });
  });

  // ---------------- Nav: services mega menu with close delay ----------------
  // CSS :hover alone closes the panel as soon as the pointer leaves the
  // trigger diagonally. Keep it open for a short grace period instead.
  var navServices = document.querySelector('.nav-services');
  if (navServices) {
    var closeTimer;
    var panel = navServices.querySelector('.nav-panel');
    var open = function () { clearTimeout(closeTimer); navServices.classList.add('is-open'); };
    var close = function () {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () { navServices.classList.remove('is-open'); }, 400);
    };
    navServices.addEventListener('mouseenter', open);
    navServices.addEventListener('mouseleave', close);
    if (panel) {
      panel.addEventListener('mouseenter', open);
      panel.addEventListener('mouseleave', close);
    }
  }

  // ---------------- Animated line icons ----------------
  var icons = document.querySelectorAll('svg.ai');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (icons.length && 'IntersectionObserver' in window && !reduceMotion) {
    icons.forEach(function (svg) {
      svg.querySelectorAll('path, circle, rect, line, polyline, polygon, ellipse').forEach(function (el) {
        if (el.getAttribute('fill') === 'currentColor') return;
        el.setAttribute('pathLength', '1');
      });
    });
    document.documentElement.classList.add('ai-ready');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('ai-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    icons.forEach(function (svg) { io.observe(svg); });
  }

  // ---------------- Home: services accordion ----------------
  // Source: Home.dc.html Component — state.open (single open index, default 0)
  var svcItems = document.querySelectorAll('.svc-item');
  if (svcItems.length) {
    // On phones the open panel is long; start with every service collapsed.
    if (window.matchMedia && window.matchMedia('(max-width: 900px)').matches) {
      svcItems.forEach(function (i) { i.classList.remove('open'); });
    }
    svcItems.forEach(function (item) {
      var header = item.querySelector('.svc-header');
      if (!header) return;
      var toggle = function () {
        var isOpen = item.classList.contains('open');
        svcItems.forEach(function (i) { i.classList.remove('open'); });
        if (!isOpen) item.classList.add('open');
      };
      header.addEventListener('click', toggle);
      header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  // ---------------- Blogs: category filter ----------------
  // Source: Blogs.dc.html Component — state.cat (default "All")
  var catButtons = document.querySelectorAll('.blog-cat-btn');
  var blogPosts = document.querySelectorAll('.blog-post');
  var noPostsMsg = document.querySelector('.blog-no-posts');
  if (catButtons.length && blogPosts.length) {
    catButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = btn.getAttribute('data-cat');
        catButtons.forEach(function (b) { b.classList.toggle('active', b === btn); });
        var visible = 0;
        blogPosts.forEach(function (post) {
          var show = cat === 'All' || post.getAttribute('data-cat') === cat;
          post.style.display = show ? '' : 'none';
          if (show) visible++;
        });
        if (noPostsMsg) noPostsMsg.style.display = visible === 0 ? '' : 'none';
      });
    });
  }

  // ---------------- Contact: form submit ----------------
  // Source: Contact.dc.html Component — state.sent. The original DSL's
  // onClick="{{ send }}" only ever flips local state; it never posted to a
  // real backend. Rather than invent one, this opens a pre-filled mailto:
  // to info@wayvemedia.com (honest, no fake network success) and then shows
  // the same "thank you" panel the design already included.
  // NOTE for humans: wire this up to a real form-handling endpoint later.
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (contactForm.elements.name && contactForm.elements.name.value || '').trim();
      var company = (contactForm.elements.company && contactForm.elements.company.value || '').trim();
      var email = (contactForm.elements.email && contactForm.elements.email.value || '').trim();
      var message = (contactForm.elements.message && contactForm.elements.message.value || '').trim();

      var subject = 'New enquiry from ' + (name || 'website visitor');
      var bodyLines = [
        'Name: ' + name,
        'Company: ' + company,
        'Email: ' + email,
        '',
        message
      ];
      var mailto = 'mailto:info@wayvemedia.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(bodyLines.join('\n'));

      window.location.href = mailto;

      var fields = document.querySelector('.contact-form-fields');
      var sent = document.querySelector('.contact-sent');
      if (fields) fields.style.display = 'none';
      if (sent) sent.style.display = '';
    });
  }

  // ---------------- Contact: Book Intro Call calendar ----------------
  // The "Book Intro Call" row expands to show the HubSpot Meetings embed.
  // HubSpot's script is only loaded the first time the panel opens.
  var bookToggle = document.querySelector('.book-toggle');
  var bookPanel = document.getElementById('book-panel');
  if (bookToggle && bookPanel) {
    var meetingsLoaded = false;
    // HubSpot centres a card of up to ~400px inside its iframe, leaving white
    // bands on wider panels. Zooming the iframe makes that card fill the panel.
    var fitMeetings = function () {
      if (bookPanel.hidden) return;
      var zoom = Math.max(1, bookPanel.clientWidth / 380);
      bookPanel.style.setProperty('--hs-zoom', zoom.toFixed(3));
    };
    window.addEventListener('resize', fitMeetings);
    var setBookOpen = function (open) {
      bookPanel.hidden = !open;
      bookToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      fitMeetings();
      if (open && !meetingsLoaded) {
        meetingsLoaded = true;
        var hs = document.createElement('script');
        hs.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
        document.body.appendChild(hs);
      }
    };
    bookToggle.addEventListener('click', function () {
      setBookOpen(bookPanel.hidden);
    });
    // "Book Intro Call" links (contact.html#book) open the calendar in place
    // when already on this page. Delegated so the mobile header copy works too.
    document.addEventListener('click', function (e) {
      var link = e.target.closest && e.target.closest('a[href$="contact.html#book"]');
      if (!link) return;
      e.preventDefault();
      setBookOpen(true);
      bookToggle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    // contact.html#book opens the calendar straight away
    if (location.hash === '#book') setBookOpen(true);
  }
  // ---------------- Mobile menu ----------------
  // Built from the existing desktop nav so every page (including post/ with
  // its ../ paths) gets the same links without duplicating markup.
  var navBar = document.querySelector('.site-nav');
  var desktopNav = navBar && navBar.querySelector('nav');
  var themeBtn = navBar && navBar.querySelector('.theme-toggle');
  if (desktopNav && themeBtn) {
    var menuBtn = document.createElement('button');
    menuBtn.type = 'button';
    menuBtn.className = 'menu-toggle';
    menuBtn.setAttribute('aria-label', 'Open menu');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.innerHTML = '<span></span><span></span><span></span>';
    themeBtn.parentNode.insertBefore(menuBtn, themeBtn.nextSibling);

    var mobilePanel = document.createElement('div');
    mobilePanel.className = 'mobile-menu';
    var addLink = function (a, cls) {
      var link = document.createElement('a');
      link.href = a.getAttribute('href');
      link.textContent = a.textContent.replace(/^\s*\d{2}/, '').trim();
      link.className = cls;
      if (a.target) { link.target = a.target; link.rel = a.rel; }
      mobilePanel.appendChild(link);
    };
    // "Services" expands to the four services
    var group = document.createElement('button');
    group.type = 'button';
    group.className = 'mm-group';
    group.setAttribute('aria-expanded', 'false');
    group.innerHTML = 'Services <svg width="12" height="8" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    var subs = document.createElement('div');
    subs.className = 'mm-subs';
    mobilePanel.appendChild(group);
    mobilePanel.appendChild(subs);
    var target = mobilePanel;
    mobilePanel = subs;
    desktopNav.querySelectorAll('.nav-panel-item').forEach(function (a) { addLink(a, 'mm-sub'); });
    mobilePanel = target;
    group.addEventListener('click', function () {
      var expanded = subs.classList.toggle('open');
      group.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    desktopNav.querySelectorAll(':scope > a').forEach(function (a) { addLink(a, 'mm-main'); });
    var ctas = themeBtn.parentNode.querySelectorAll(':scope > a');
    ctas.forEach(function (a) { addLink(a, 'mm-cta'); });
    navBar.appendChild(mobilePanel);

    // Compact booking button in the phone header
    var booking = ctas[ctas.length - 1];
    if (booking) {
      var headerCta = document.createElement('a');
      headerCta.className = 'mm-header-cta';
      headerCta.href = booking.getAttribute('href');
      headerCta.target = '_blank';
      headerCta.rel = 'noopener noreferrer';
      headerCta.textContent = 'Book Call';
      themeBtn.parentNode.insertBefore(headerCta, themeBtn);
    }

    menuBtn.addEventListener('click', function () {
      var isOpen = navBar.classList.toggle('menu-open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
  }

  // Base path for links injected below (pages in post/ sit one level down).
  var base = /\/post\//.test(location.pathname) ? '../' : '';

  // ---------------- WhatsApp button ----------------
  var wa = document.createElement('a');
  wa.className = 'whatsapp-btn';
  wa.href = 'https://wa.me/971567162922';
  wa.target = '_blank';
  wa.rel = 'noopener noreferrer';
  wa.setAttribute('aria-label', 'Chat with us on WhatsApp');
  wa.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.9.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44zm8.04-17.48A11.3 11.3 0 0 0 12.05.69C5.78.69.68 5.79.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.31l5.7-1.5a11.33 11.33 0 0 0 5.77 1.47h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.34-8.04z"/></svg>';
  document.body.appendChild(wa);

  // ---------------- Cookie consent (Google Consent Mode v2) ----------------
  // Consent defaults are set to denied before any tag could load. When
  // analytics or ads tags are added, they read these signals; the banner
  // updates them and remembers the choice.
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  var CONSENT_KEY = 'wm-consent';
  var denied = { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' };
  var granted = { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted' };
  gtag('consent', 'default', Object.assign({ wait_for_update: 500 }, denied));
  var saved = null;
  try { saved = localStorage.getItem(CONSENT_KEY); } catch (e) { /* no storage: ask every visit */ }
  if (saved === 'granted') gtag('consent', 'update', granted);

  var showBanner = function () {
    if (document.querySelector('.cookie-banner')) return;
    var bar = document.createElement('div');
    bar.className = 'cookie-banner';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Cookie consent');
    bar.innerHTML = '<p>We use cookies to analyse traffic and measure our marketing. You can accept all cookies or keep only the essential ones. <a href="' + base + 'privacy-policy.html">Privacy Policy</a></p>'
      + '<div class="cookie-actions"><button type="button" class="cookie-reject">Essential Only</button><button type="button" class="cookie-accept">Accept All</button></div>';
    var decide = function (value) {
      try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* choice applies to this page only */ }
      gtag('consent', 'update', value === 'granted' ? granted : denied);
      bar.remove();
    };
    bar.querySelector('.cookie-accept').addEventListener('click', function () { decide('granted'); });
    bar.querySelector('.cookie-reject').addEventListener('click', function () { decide('denied'); });
    document.body.appendChild(bar);
  };
  if (saved !== 'granted' && saved !== 'denied') showBanner();

  // "Cookie Settings" link next to Privacy Policy in the footer.
  document.querySelectorAll('footer a[href$="privacy-policy.html"]').forEach(function (a) {
    var settings = document.createElement('button');
    settings.type = 'button';
    settings.className = 'cookie-settings hv-white';
    settings.textContent = 'Cookie Settings';
    settings.addEventListener('click', showBanner);
    a.parentNode.insertBefore(settings, a.nextSibling);
  });
})();
