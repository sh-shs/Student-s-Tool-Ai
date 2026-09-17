/**
 * Theme Controller - Manages Light, Dark, and System preference
 */
(function () {
  const THEME_KEY = 'st_theme_preference';

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY) || 'system';
  }

  function applyTheme(theme) {
    const activeTheme = theme === 'system' ? getSystemPreference() : theme;
    document.documentElement.setAttribute('data-theme', activeTheme);

    // Update active state in theme selector UI if present
    const dropdownBtns = document.querySelectorAll('.theme-option-btn');
    dropdownBtns.forEach(btn => {
      if (btn.getAttribute('data-theme-val') === theme) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const currentThemeLabel = document.getElementById('current-theme-label');
    if (currentThemeLabel) {
      currentThemeLabel.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
    }
  }

  function setTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  }

  // Initialize theme on load
  const initialTheme = getStoredTheme();
  applyTheme(initialTheme);

  // Listen for system theme changes if set to system
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getStoredTheme() === 'system') {
      applyTheme('system');
    }
  });

  window.ThemeController = {
    getStoredTheme,
    setTheme,
    applyTheme
  };
})();
