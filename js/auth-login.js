import { auth } from './firebase-init.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

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
    const submitBtn = document.getElementById('btn-login-submit');
    const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;

    if (errorEl) errorEl.textContent = '';

    if (!email || !password) {
      if (errorEl) errorEl.textContent = 'Please enter both email and password.';
      return;
    }

    try {
      if (submitBtn) submitBtn.disabled = true;
      if (btnSpinner) btnSpinner.classList.remove('hidden');

      await signInWithEmailAndPassword(auth, email, password);

      const pathname = window.location.pathname;
      const isRoot = pathname.endsWith('/') && pathname.split('/').filter(Boolean).length === 0;
      const redirectPath = isRoot ? './' : '../';

      window.location.href = redirectPath;
    } catch (error) {
      if (errorEl) {
        switch (error.code) {
          case 'auth/invalid-credential':
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            errorEl.textContent = 'Invalid email or password. Please check your credentials.';
            break;
          case 'auth/invalid-email':
            errorEl.textContent = 'Please enter a valid email address.';
            break;
          case 'auth/user-disabled':
            errorEl.textContent = 'This account has been disabled.';
            break;
          case 'auth/too-many-requests':
            errorEl.textContent = 'Access to this account has been temporarily disabled due to many failed login attempts. Please try again later.';
            break;
          case 'auth/operation-not-allowed':
            errorEl.textContent = 'Email/password sign-in is not enabled in Firebase Console.';
            break;
          case 'auth/network-request-failed':
            errorEl.textContent = 'Network error. Please check your internet connection.';
            break;
          default:
            errorEl.textContent = 'Failed to sign in. Please try again.';
            break;
        }
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (btnSpinner) btnSpinner.classList.add('hidden');
    }
  });
});
