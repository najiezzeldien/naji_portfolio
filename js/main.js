/* ============================================================
   MAIN.JS — Portfolio Core Logic
   - Smooth scrolling navigation
   - Mobile hamburger menu
   - Scroll-based animations (IntersectionObserver)
   - Navbar scroll effect + active section tracking
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initNavbar();
  initSmoothScroll();
});

/* ── Scroll Reveal (IntersectionObserver) ──────────────────── */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    // Fallback for very old browsers
    reveals.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Animate once only
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ── Navbar ─────────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll effect: add .scrolled class
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Navbar background
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }

        // Active section tracking
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 150;
          if (window.scrollY >= sectionTop) {
            current = section.id;
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });

        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ── Smooth Scroll ──────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();

        // If mobile menu is open, close it
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && mobileMenu.classList.contains('open')) {
          toggleMobileMenu();
        }

        // Account for fixed navbar offset
        const navbar = document.getElementById('navbar');
        const navHeight = navbar ? navbar.offsetHeight : 70;
        const targetRect = target.getBoundingClientRect();
        const targetPosition = targetRect.top + window.pageYOffset - navHeight - 16;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // If navigating to a project card, add a highlight glow
        if (target.classList.contains('project-card')) {
          target.classList.remove('highlight-target');
          void target.offsetWidth; // Trigger reflow
          target.classList.add('highlight-target');
          setTimeout(() => {
            target.classList.remove('highlight-target');
          }, 2000);
        }
      }
    });
  });
}

/* ── Mobile Menu ────────────────────────────────────────────── */
function toggleMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');

  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  mobileOverlay.classList.toggle('open');

  // Prevent body scroll when menu is open
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
}

// Close mobile menu on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.classList.contains('open')) {
      toggleMobileMenu();
    }
  }
});
