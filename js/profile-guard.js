import { auth } from './firebase-init.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    const pathname = window.location.pathname;
    const isRoot = pathname.endsWith('/') && pathname.split('/').filter(Boolean).length === 0;
    const redirectPath = isRoot ? 'login/' : '../login/';
    window.location.href = redirectPath;
  } else {
    const nameEl = document.getElementById('user-name');
    const emailEl = document.getElementById('user-email');
    const avatarEl = document.getElementById('user-avatar');

    const displayName = user.displayName || user.email || 'User';
    const initial = (displayName ? displayName[0] : 'U').toUpperCase();

    if (nameEl) nameEl.textContent = displayName;
    if (emailEl) emailEl.textContent = user.email || '';
    if (avatarEl) avatarEl.textContent = initial;
  }
});
