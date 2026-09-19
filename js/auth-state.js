import { auth } from './firebase-init.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  const loginBtn = document.getElementById('login-btn');
  const userMenu = document.getElementById('user-menu');
  const userNameElements = document.querySelectorAll('#user-name, #user-name-nav');
  const userAvatarElements = document.querySelectorAll('#user-avatar, #user-avatar-nav');

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
  } else {
    if (loginBtn) loginBtn.style.display = 'inline-flex';
    if (userMenu) userMenu.style.display = 'none';
  }
});
