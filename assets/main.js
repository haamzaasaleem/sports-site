// ═══════════════════════════════════
//  RESM — SHARED JAVASCRIPT
// ═══════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {

  // ── Scroll reveal ──
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // ── Header shadow on scroll ──
  const hdr = document.getElementById('hdr');
  window.addEventListener('scroll', () => {
    if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 30);
  });

  // ── Active nav link ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.h-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Mobile burger ──
  const burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', function () {
      const nav = document.querySelector('.h-nav');
      const open = nav.style.display === 'flex';
      nav.style.cssText = open
        ? 'display:none'
        : 'display:flex;flex-direction:column;position:fixed;top:72px;left:0;right:0;background:#0B1C33;padding:22px 5%;border-bottom:3px solid #F4B400;gap:18px;z-index:899';
    });
  }

  // ── Smooth anchor scroll ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
