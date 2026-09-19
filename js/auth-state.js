import { auth } from './firebase-init.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  const loginBtn = document.getElementById('login-btn');
  const userMenu = document.getElementById('user-menu');
  const userNameElements = document.querySelectorAll('#user-name, #user-name-nav');
  const userAvatarElements = document.querySelectorAll('#user-avatar, #user-avatar-nav');
  const bottomNavProfile = document.getElementById('bottom-nav-profile');

  // Determine path prefix based on location depth
  const pathname = window.location.pathname;
  const isRoot = pathname.endsWith('/') && pathname.split('/').filter(Boolean).length === 0 || pathname.endsWith('/index.html') && pathname.split('/').filter(Boolean).length === 1;

  if (user) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (userMenu) userMenu.style.display = 'flex';

    const displayName = user.displayName || user.email || 'User';
    const initial = (displayName ? displayName[0] : 'U').toUpperCase();

    userNameElements.forEach(el => {
      el.textContent = displayName;
    });

    userAvatarElements.forEach(el => {
      el.textContent = initial;
    });

    if (bottomNavProfile) {
      bottomNavProfile.href = isRoot ? 'profile/index.html' : '../profile/index.html';
    }
  } else {
    if (loginBtn) loginBtn.style.display = 'inline-flex';
    if (userMenu) userMenu.style.display = 'none';

    if (bottomNavProfile) {
      bottomNavProfile.href = isRoot ? 'login/index.html' : '../login/index.html';
    }
  }
});
