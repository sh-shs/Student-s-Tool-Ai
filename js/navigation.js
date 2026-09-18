/**
 * Navigation & Responsive Menu Handling
 */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('show');
    });
  }

  // Theme Dropdown Toggle
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeDropdown = document.getElementById('theme-dropdown');

  if (themeBtn && themeDropdown) {
    themeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = themeBtn.getAttribute('aria-expanded') === 'true';
      themeBtn.setAttribute('aria-expanded', !isExpanded);
      themeDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!themeBtn.contains(e.target) && !themeDropdown.contains(e.target)) {
        themeDropdown.classList.remove('show');
        themeBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Option buttons selection
    const optionBtns = themeDropdown.querySelectorAll('.theme-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedTheme = btn.getAttribute('data-theme-val');
        if (window.ThemeController) {
          window.ThemeController.setTheme(selectedTheme);
        }
        themeDropdown.classList.remove('show');
        themeBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // If on /ai/ page, hide/remove bottom navbar, header, and footer as a fallback
  if (window.location.pathname.includes('/ai/') || document.body.classList.contains('ai-page')) {
    document.querySelector('.bottom-navbar')?.remove();
    document.querySelector('.site-header')?.remove();
    document.querySelector('.site-footer')?.remove();
  }

  // Active Link Highlighting for Top Navigation and Bottom Navigation
  const normalizePath = (path) => {
    if (!path) return '';
    let p = path.replace(/index\.html$/, '');
    if (p.length > 1 && p.endsWith('/')) {
      p = p.slice(0, -1);
    }
    return p || '/';
  };

  const currentNormalized = normalizePath(window.location.pathname);

  // Top Nav Links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const linkPath = normalizePath(link.pathname);
    if (linkPath === currentNormalized || (currentNormalized.startsWith(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
    }
  });

  // Bottom Nav Bar Items
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
  bottomNavItems.forEach(item => {
    const itemPath = normalizePath(item.pathname);
    if (itemPath === currentNormalized || (currentNormalized.startsWith(itemPath) && itemPath !== '/')) {
      item.classList.add('active');
    }
  });
});
