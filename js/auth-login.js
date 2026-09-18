import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if (!loginForm) return;

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email') || document.getElementById('login-email');
    const passwordInput = document.getElementById('password') || document.getElementById('login-password');

    const email = emailInput ? emailInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value : '';
    const errorEl = document.getElementById('error-message');

    if (errorEl) errorEl.textContent = '';

    if (!email || !password) {
      if (errorEl) errorEl.textContent = 'ইমেইল ও পাসওয়ার্ড দিন';
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '../profile/';
    } catch (error) {
      if (errorEl) {
        if (error.code === 'auth/user-not-found') {
          errorEl.textContent = 'এই ইমেইল দিয়ে অ্যাকাউন্ট নেই';
        } else if (error.code === 'auth/wrong-password') {
          errorEl.textContent = 'পাসওয়ার্ড ভুল';
        } else if (error.code === 'auth/invalid-credential') {
          errorEl.textContent = 'ইমেইল বা পাসওয়ার্ড ভুল';
        } else {
          errorEl.textContent = 'লগইন ব্যর্থ: ' + error.message;
        }
      }
    }
  });
});
