// Subtle script: reveal-on-scroll + small prefers-reduced-motion support
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // reveal elements with [data-animate]
  function revealOnScroll() {
    const items = document.querySelectorAll('[data-animate]');
    const trigger = window.innerHeight * 0.85;
    items.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < trigger) el.classList.add('show');
    });
  }

  // Add data-animate to major elements for subtle entrance
  const toAnimate = [
    document.querySelector('.hero'),
    document.querySelector('#about .card'),
    document.querySelector('#skills .grid-3'),
    document.querySelector('#projects .projects-grid'),
    document.querySelector('#contact .card')
  ];
  toAnimate.forEach(el => { if (el) el.setAttribute('data-animate', ''); });

  if (!prefersReduced) {
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', revealOnScroll);
    document.addEventListener('DOMContentLoaded', () => { revealOnScroll(); setTimeout(revealOnScroll, 300); });
  } else {
    // if user prefers reduced motion, show everything immediately
    document.querySelectorAll('[data-animate]').forEach(el => el.classList.add('show'));
  }

  // Smooth scrolling for nav links
  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();



