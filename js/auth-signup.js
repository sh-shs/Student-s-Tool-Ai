import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

    if (errorEl) errorEl.textContent = '';
    if (successEl) successEl.textContent = '';

    if (!name || !email || !password || !confirmPassword) {
      if (errorEl) errorEl.textContent = 'সব ফিল্ড পূরণ করুন';
      return;
    }

    if (password !== confirmPassword) {
      if (errorEl) errorEl.textContent = 'পাসওয়ার্ড মিলছে না';
      return;
    }

    if (password.length < 6) {
      if (errorEl) errorEl.textContent = 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে';
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      if (successEl) successEl.textContent = 'অ্যাকাউন্ট তৈরি হয়েছে! রিডাইরেক্ট হচ্ছে...';
      setTimeout(() => window.location.href = '../profile/', 1500);
    } catch (error) {
      if (errorEl) {
        if (error.code === 'auth/email-already-in-use') {
          errorEl.textContent = 'এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট আছে';
        } else if (error.code === 'auth/invalid-email') {
          errorEl.textContent = 'ইমেইল ঠিক নেই';
        } else if (error.code === 'auth/weak-password') {
          errorEl.textContent = 'পাসওয়ার্ড দুর্বল';
        } else {
          errorEl.textContent = 'সমস্যা হয়েছে: ' + error.message;
        }
      }
    }
  });
});
