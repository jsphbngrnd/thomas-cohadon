// ─────────────────────────────────────────────
// Cabinet Cohadon — interactions
// ─────────────────────────────────────────────

(function () {
  // Sticky nav morph on scroll
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 24) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });
    // close on link click
    nav.querySelectorAll('.nav__panel a').forEach(a =>
      a.addEventListener('click', () => nav.classList.remove('is-open'))
    );
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    if (!trigger || !panel) return;
    trigger.addEventListener('click', () => {
      const open = item.classList.toggle('is-open');
      if (open) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        panel.style.maxHeight = '0px';
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Recompute open panels on resize
  window.addEventListener('resize', () => {
    document.querySelectorAll('.faq-item.is-open .faq-panel').forEach(p => {
      p.style.maxHeight = p.scrollHeight + 'px';
    });
  });

  // Intersection-based rise animations for elements with [data-rise]
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('rise');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-rise]').forEach(el => io.observe(el));

  // Contact form (frontend-only acknowledgement)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ack = document.querySelector('#contact-ack');
      if (ack) ack.removeAttribute('hidden');
      form.reset();
      form.style.display = 'none';
    });
  }
})();
