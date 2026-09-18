import { auth } from './firebase-config.js';
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

export async function logout() {
  try {
    await signOut(auth);
    // Determine path relative to root based on current URL location depth
    const pathname = window.location.pathname;
    const isRoot = pathname.endsWith('/') && pathname.split('/').filter(Boolean).length === 0;
    const loginRedirectPath = isRoot ? 'login/' : '../login/';
    window.location.href = loginRedirectPath;
  } catch (error) {
    console.error('Logout error:', error);
  }
}

// সব পেজে লগআউট বাটন যোগ করুন
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
});
