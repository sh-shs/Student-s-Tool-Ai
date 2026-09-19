import { auth } from './firebase-init.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

function getPathPrefix() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  if (parts.length > 0 && parts[parts.length - 1].endsWith('.html')) {
    parts.pop();
  }
  if (parts.length === 0) return '';
  return '../'.repeat(parts.length);
}

onAuthStateChanged(auth, (user) => {
  const prefix = getPathPrefix();

  // Top profile shortcut & bottom nav profile
  const topProfileShortcut = document.getElementById('top-profile-shortcut');
  const bottomNavProfile = document.getElementById('bottom-nav-profile');

  // Menu user info & actions inside three-dot dropdown
  const menuUserInfo = document.getElementById('menu-user-info');
  const menuUserName = document.getElementById('menu-user-name');
  const menuUserEmail = document.getElementById('menu-user-email');
  const menuLoginItem = document.getElementById('menu-login-item');
  const menuLogoutItem = document.getElementById('menu-logout-item');

  // Legacy elements if present
  const loginBtn = document.getElementById('login-btn');
  const userMenu = document.getElementById('user-menu');

  if (user) {
    const rawDisplayName = user.displayName || user.email || 'User';
    let firstName = rawDisplayName.trim().split(' ')[0];
    if (firstName.includes('@')) {
      firstName = firstName.split('@')[0];
    }
    const initial = (firstName ? firstName[0] : 'U').toUpperCase();

    // 1. Update Three-Dot Dropdown Menu State
    if (menuUserInfo) {
      menuUserInfo.style.display = 'flex';
      if (menuUserName) menuUserName.textContent = user.displayName || firstName;
      if (menuUserEmail) menuUserEmail.textContent = user.email || '';
    }
    if (menuLoginItem) menuLoginItem.style.display = 'none';
    if (menuLogoutItem) menuLogoutItem.style.display = 'flex';

    // 2. Update Top Right Profile Shortcut Icon
    if (topProfileShortcut) {
      topProfileShortcut.href = prefix + 'profile/index.html';
      topProfileShortcut.classList.remove('default-avatar');
      if (user.photoURL) {
        topProfileShortcut.innerHTML = `<img src="${user.photoURL}" alt="Profile Photo">`;
      } else {
        topProfileShortcut.textContent = initial;
      }
    }

    // 3. Update Bottom Nav Profile Link
    if (bottomNavProfile) {
      bottomNavProfile.href = prefix + 'profile/index.html';
    }

    // Legacy fallbacks
    if (loginBtn) loginBtn.style.display = 'none';
    if (userMenu) userMenu.style.display = 'flex';
  } else {
    // 1. Update Three-Dot Dropdown Menu State
    if (menuUserInfo) menuUserInfo.style.display = 'none';
    if (menuLoginItem) {
      menuLoginItem.style.display = 'flex';
      menuLoginItem.href = prefix + 'login/index.html';
    }
    if (menuLogoutItem) menuLogoutItem.style.display = 'none';

    // 2. Update Top Right Profile Shortcut Icon
    if (topProfileShortcut) {
      topProfileShortcut.href = prefix + 'login/index.html';
      topProfileShortcut.classList.add('default-avatar');
      topProfileShortcut.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
    }

    // 3. Update Bottom Nav Profile Link
    if (bottomNavProfile) {
      bottomNavProfile.href = prefix + 'login/index.html';
    }

    // Legacy fallbacks
    if (loginBtn) loginBtn.style.display = 'inline-flex';
    if (userMenu) userMenu.style.display = 'none';
  }
});
