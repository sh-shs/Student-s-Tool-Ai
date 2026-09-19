import { auth } from './firebase-init.js';
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  if (!signupForm) return;

  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name') || document.getElementById('signup-fullname');
    const emailInput = document.getElementById('email') || document.getElementById('signup-email');
    const passwordInput = document.getElementById('password') || document.getElementById('signup-password');
    const confirmPasswordInput = document.getElementById('confirm-password') || document.getElementById('signup-confirm-password');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value : '';
    const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';
    const errorEl = document.getElementById('error-message');
    const successEl = document.getElementById('success-message');
    const submitBtn = document.getElementById('btn-signup-submit');
    const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;

    if (errorEl) errorEl.textContent = '';
    if (successEl) successEl.textContent = '';

    if (!name || !email || !password || !confirmPassword) {
      if (errorEl) errorEl.textContent = 'Please fill in all required fields.';
      return;
    }

    if (password !== confirmPassword) {
      if (errorEl) errorEl.textContent = 'Passwords do not match.';
      return;
    }

    if (password.length < 6) {
      if (errorEl) errorEl.textContent = 'Password must be at least 6 characters long.';
      return;
    }

    try {
      if (submitBtn) submitBtn.disabled = true;
      if (btnSpinner) btnSpinner.classList.remove('hidden');

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (name) {
        await updateProfile(userCredential.user, { displayName: name });
      }

      if (successEl) successEl.textContent = 'Account created successfully! Redirecting...';

      const pathname = window.location.pathname;
      const isRoot = pathname.endsWith('/') && pathname.split('/').filter(Boolean).length === 0;
      const redirectPath = isRoot ? 'profile/' : '../profile/';

      setTimeout(() => {
        window.location.href = redirectPath;
      }, 1000);
    } catch (error) {
      if (errorEl) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorEl.textContent = 'An account with this email address already exists.';
            break;
          case 'auth/invalid-email':
            errorEl.textContent = 'Please enter a valid email address.';
            break;
          case 'auth/weak-password':
            errorEl.textContent = 'The password provided is too weak. Please use at least 6 characters.';
            break;
          case 'auth/operation-not-allowed':
            errorEl.textContent = 'Email/password sign-in is not enabled. Please contact support.';
            break;
          case 'auth/network-request-failed':
            errorEl.textContent = 'Network error. Please check your internet connection.';
            break;
          default:
            errorEl.textContent = 'Failed to create account. Please try again.';
            break;
        }
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (btnSpinner) btnSpinner.classList.add('hidden');
    }
  });
});
