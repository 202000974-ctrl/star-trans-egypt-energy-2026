/* ==========================================================================
   main.js — Star Trans page behaviour.
   Renders bilingual content from data.js, then wires up the interactive
   pieces: mobile nav, scroll effects, reveal animations, counters,
   the visit/RSVP question, event countdown and language switching.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------- Render: marquee ------------------------- */
  function renderMarquee() {
    const track = document.getElementById('marqueeTrack');
    if (!track) return;

    const star = ' <i class="fa-solid fa-bolt" aria-hidden="true"></i> ';
    const items = DATA.marquee.map(function (item) {
      return '<span class="marquee-item">' + star + '<span>' + pick(item) + '</span></span>';
    }).join('');

    /* Duplicated once so the CSS translate(-50%) loop is seamless. */
    track.innerHTML = items + items;
  }

  /* ------------------------- Render: products ------------------------ */
  function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    grid.innerHTML = DATA.products.map(function (p, i) {
      const items = p.items.map(function (it) {
        return '<li><i class="fa-solid fa-chevron-right" aria-hidden="true"></i><span>' + pick(it) + '</span></li>';
      }).join('');

      const tags = p.tags.map(function (tg) {
        return '<span>' + pick(tg) + '</span>';
      }).join('');

      return '' +
        '<article class="product-card reveal" style="--d:' + (i * 90) + 'ms">' +
          '<div class="product-media">' +
            '<img src="' + p.img + '" alt="' + pick(p.title) + '" loading="eager" decoding="async">' +
            '<span class="product-badge"><i class="fa-solid fa-bolt" aria-hidden="true"></i>' + pick(p.badge) + '</span>' +
          '</div>' +
          '<div class="product-body">' +
            '<h3>' + pick(p.title) + '</h3>' +
            '<p>' + pick(p.desc) + '</p>' +
            '<ul class="product-items">' + items + '</ul>' +
            '<div class="product-tags">' + tags + '</div>' +
          '</div>' +
        '</article>';
    }).join('');
  }

  /* --------------------- Reveal-on-scroll observer ------------------- */
  let revealObserver = null;

  function initReveal() {
    const targets = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

    targets.forEach(function (el) { revealObserver.observe(el); });
  }

  /* --------------------------- Stat counters ------------------------- */
  function initCounters() {
    const nums = document.querySelectorAll('.stat-num');
    if (!nums.length) return;

    function run(el) {
      const target = parseFloat(el.getAttribute('data-count')) || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1500;
      const start = performance.now();

      function frame(now) {
        const p = Math.min((now - start) / duration, 1);
        /* easeOutCubic */
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    if (!('IntersectionObserver' in window)) {
      nums.forEach(run);
      return;
    }

    const obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        o.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    nums.forEach(function (el) { obs.observe(el); });
  }

  /* -------------------------- Visit / RSVP --------------------------- */
  const CONFETTI_COLORS = ['#35c8f5', '#1f6feb', '#6fdcff', '#e8b962', '#ffffff'];

  function burstConfetti() {
    const host = document.getElementById('confetti');
    if (!host) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    host.innerHTML = '';
    for (let i = 0; i < 70; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
      piece.style.animationDuration = (2.6 + Math.random() * 2.4) + 's';
      piece.style.animationDelay = (Math.random() * 0.7) + 's';
      piece.style.width = (6 + Math.random() * 8) + 'px';
      piece.style.height = (9 + Math.random() * 10) + 'px';
      if (Math.random() > 0.6) piece.style.borderRadius = '50%';
      host.appendChild(piece);
    }
    window.setTimeout(function () { host.innerHTML = ''; }, 6000);
  }

  function showVisitResult(answer) {
    const actions = document.getElementById('visitActions');
    const result = document.getElementById('visitResult');
    const img = document.getElementById('visitEngineer');
    const msg = document.getElementById('visitMsg');
    const cta = document.getElementById('visitCta');
    const ctaLabel = document.getElementById('visitCtaLabel');
    if (!result || !img) return;

    const happy = answer === 'yes';

    /* Swap the illustration, then restart its entrance animation. */
    img.src = happy ? 'images/engineer-happy.svg' : 'images/engineer-sad.svg';
    img.alt = happy ? 'Happy Star Trans engineer' : 'Sad Star Trans engineer';

    if (msg) msg.textContent = t(happy ? 'visit.happy' : 'visit.sad');
    if (cta) cta.setAttribute('href', happy ? '#booth' : '#download');
    if (ctaLabel) ctaLabel.textContent = t(happy ? 'visit.happyCta' : 'visit.sadCta');

    if (actions) actions.style.display = 'none';

    /* Re-trigger the animation by forcing a reflow. */
    result.classList.remove('is-shown');
    void result.offsetWidth;
    result.classList.add('is-shown');

    if (happy) burstConfetti();

    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function resetVisit() {
    const actions = document.getElementById('visitActions');
    const result = document.getElementById('visitResult');
    const host = document.getElementById('confetti');

    if (result) result.classList.remove('is-shown');
    if (actions) actions.style.display = '';
    if (host) host.innerHTML = '';

    const card = document.getElementById('visit');
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function initVisit() {
    const yes = document.getElementById('btnYes');
    const no = document.getElementById('btnNo');
    const reset = document.getElementById('visitReset');
    if (!yes || !no) return;

    yes.addEventListener('click', function () { showVisitResult('yes'); });
    no.addEventListener('click', function () { showVisitResult('no'); });
    if (reset) reset.addEventListener('click', resetVisit);

    /* Warm the illustration cache after load so the swap is instant. */
    window.addEventListener('load', function () {
      ['images/engineer-happy.svg', 'images/engineer-sad.svg'].forEach(function (src) {
        const pre = new Image();
        pre.src = src;
      });
    });
  }

  /* ------------------------- Header / scroll ------------------------- */
  function initScrollUI() {
    const header = document.getElementById('siteHeader');
    const bar = document.getElementById('scrollProgress');
    const toTop = document.getElementById('toTop');
    const hero = document.getElementById('hero');

    function onScroll() {
      const y = window.scrollY;
      const heroH = hero ? hero.offsetHeight : 400;

      if (header) header.classList.toggle('is-scrolled', y > heroH * 0.72);
      if (toTop) toTop.classList.toggle('is-visible', y > 600);

      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  }

  /* ----------------------------- Mobile nav -------------------------- */
  function initNav() {
    const btn = document.getElementById('menuBtn');
    const nav = document.getElementById('mainNav');
    if (!btn || !nav) return;

    function close() {
      nav.classList.remove('is-open');
      btn.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      btn.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });

    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* -------------------------- Event countdown ------------------------ */
  function initCountdown() {
    const countdown = document.getElementById('eventCountdown');
    if (!countdown) return;

    const target = new Date(countdown.getAttribute('data-target')).getTime();
    const days = document.getElementById('countdownDays');
    const hours = document.getElementById('countdownHours');
    const minutes = document.getElementById('countdownMinutes');
    const seconds = document.getElementById('countdownSeconds');
    const live = document.getElementById('countdownLive');

    function pad(value) {
      return String(value).padStart(2, '0');
    }

    function update() {
      const remaining = Math.max(target - Date.now(), 0);
      const totalSeconds = Math.floor(remaining / 1000);

      days.textContent = pad(Math.floor(totalSeconds / 86400));
      hours.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
      minutes.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
      seconds.textContent = pad(totalSeconds % 60);

      if (remaining <= 0) {
        countdown.classList.add('is-live');
        live.hidden = false;
        return false;
      }
      return true;
    }

    live.hidden = true;
    if (!update()) return;
    const timer = window.setInterval(function () {
      if (!update()) window.clearInterval(timer);
    }, 1000);
  }

  /* --------------------------- Language toggle ----------------------- */
  function initLang() {
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      const next = currentLang === 'ar' ? 'en' : 'ar';
      applyLang(next);
      /* Re-render dynamic content in the new language, keep animations alive. */
      renderAll();
      initReveal();
    });
  }

  /* ------------------------------ Utilities -------------------------- */
  function renderAll() {
    renderMarquee();
    renderProducts();
  }

  function initYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ------------------------------- Boot ------------------------------ */
  function boot() {
    /* Content first, so translations apply to rendered DOM. */
    renderAll();
    applyLang(initialLang());

    initReveal();
    initCounters();
    initVisit();
    initScrollUI();
    initNav();
    initCountdown();
    initLang();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
