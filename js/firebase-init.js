import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcxyD9zA7tGcSLaxp_2Q0FDLm2KFBUh-U",
  authDomain: "saripai.firebaseapp.com",
  projectId: "saripai",
  storageBucket: "saripai.firebasestorage.app",
  messagingSenderId: "216452182229",
  appId: "1:216452182229:web:6740e54e8f4e77c689725c",
  measurementId: "G-TD4Y3HN8ZF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export async function handleGoogleSignIn() {
  const errorEl = document.getElementById('error-message');
  if (errorEl) errorEl.textContent = '';

  try {
    const result = await signInWithPopup(auth, provider);
    const pathname = window.location.pathname;
    const isRoot = pathname.endsWith('/') && pathname.split('/').filter(Boolean).length === 0;
    const redirectPath = isRoot ? './' : '../';
    window.location.href = redirectPath;
  } catch (error) {
    if (errorEl) {
      if (error.code === 'auth/popup-closed-by-user') {
        // User cancelled, no error message needed (silently do nothing)
        return;
      } else if (error.code === 'auth/popup-blocked') {
        errorEl.textContent = 'Please allow popups for this site and try again.';
      } else {
        errorEl.textContent = 'Google sign-in failed. Please try again.';
      }
    }
  }
}

function initGoogleSignInButtons() {
  const googleBtns = document.querySelectorAll('#btn-google-login, #btn-google-signup, .btn-google');
  googleBtns.forEach(btn => {
    btn.addEventListener('click', handleGoogleSignIn);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGoogleSignInButtons);
} else {
  initGoogleSignInButtons();
}

export default app;
