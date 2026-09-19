import { auth } from './firebase-init.js';
import { signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

export async function logout() {
  try {
    await signOut(auth);
    const pathname = window.location.pathname;
    const isRoot = pathname.endsWith('/') && pathname.split('/').filter(Boolean).length === 0;
    const redirectPath = isRoot ? './' : '../';
    window.location.href = redirectPath;
  } catch (error) {
    console.error('Logout error:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    const logoutBtn = e.target.closest('#logout-btn, .logout-btn');
    if (logoutBtn) {
      e.preventDefault();
      logout();
    }
  });
});
