/* =========================================================
   Bichos Pet — interações da landing page
   ========================================================= */
(function () {
  'use strict';

  document.documentElement.classList.add('js-ready');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header sólido ao rolar ---------- */
  var header = document.getElementById('header');

  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  function closeMenu() {
    if (!nav || !burger) return;
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menu');
    document.body.style.overflow = '';
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) closeMenu();
    });
  }

  /* ---------- Link ativo conforme a seção visível ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav__link');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          var match = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('is-active', match);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { spy.observe(section); });
  }

  /* ---------- Animação de entrada (reveal) ---------- */
  var revealItems = document.querySelectorAll('.reveal');

  revealItems.forEach(function (el) {
    var delay = el.getAttribute('data-delay');
    if (delay) el.style.setProperty('--d', delay);
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    revealItems.forEach(function (el) { revealObserver.observe(el); });

    // Garante conteúdo visível caso algo falhe
    window.addEventListener('load', function () {
      setTimeout(function () {
        revealItems.forEach(function (el) {
          var rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) el.classList.add('is-visible');
        });
      }, 300);
    });
  }

  /* ---------- FAQ (accordion) ---------- */
  var accordionItems = document.querySelectorAll('.accordion__item');

  accordionItems.forEach(function (item) {
    var btn = item.querySelector('.accordion__btn');
    var panel = item.querySelector('.accordion__panel');
    if (!btn || !panel) return;

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      accordionItems.forEach(function (other) {
        other.classList.remove('is-open');
        var otherBtn = other.querySelector('.accordion__btn');
        var otherPanel = other.querySelector('.accordion__panel');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherPanel) otherPanel.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  window.addEventListener('resize', function () {
    var open = document.querySelector('.accordion__item.is-open .accordion__panel');
    if (open) open.style.maxHeight = open.scrollHeight + 'px';
  });
})();
