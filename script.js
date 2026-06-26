// ===== HACKATHON ONE G9 — INTERACTIONS =====

// --- SCROLL REVEAL ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll(
  '.about-card, .project-card, .track-card, .partner-card, .section-header'
).forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// --- STAGGERED CHILDREN ---
document.querySelectorAll('.about-cards, .tracks-grid, .partners-grid').forEach((parent) => {
  Array.from(parent.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.1}s`;
  });
});

// --- ACTIVE NAV HIGHLIGHT ---
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.footer-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach((s) => navObserver.observe(s));

// --- LOGO SLOT FALLBACK ---
// Ensure fallback text shows when images fail
document.querySelectorAll('.logo-slot img').forEach((img) => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    img.parentElement.classList.add('logo-placeholder');
  });
});

// --- SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- NAVBAR SCROLL EFFECT ---
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.style.background = 'rgba(9, 9, 15, 0.95)';
  } else {
    navbar.style.background = 'transparent';
  }
});

// --- PDF DOWNLOAD FEEDBACK ---
document.querySelectorAll('.btn-download').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const originalText = btn.innerHTML;
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';

    setTimeout(() => {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    }, 2000);
  });
});

// --- PARALLAX SUBTLE EFFECT ON HERO ---
const heroBg = document.querySelector('.hero-bg-glow');
if (heroBg) {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    heroBg.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px)`;
  });
}

console.log('%c🚀 Hackathon ONE G9', 'font-size:18px;font-weight:bold;color:#7c6aff;');
console.log('%cAlura + Oracle + NoCountry', 'font-size:13px;color:#22d3a0;');
