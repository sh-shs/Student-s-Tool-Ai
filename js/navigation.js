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

  // Active Link Highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/') || (currentPath.endsWith('/index.html') && href === '/')) {
      link.classList.add('active');
    }
  });
});
