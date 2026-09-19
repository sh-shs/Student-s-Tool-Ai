import { auth } from './firebase-init.js';
import { onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

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
    const photoEl = document.getElementById('user-photo');
    const editNameInput = document.getElementById('edit-name-input');
    const editProfileForm = document.getElementById('edit-profile-form');
    const profileMsg = document.getElementById('profile-msg');

    const displayName = user.displayName || user.email || 'User';
    const initial = (displayName ? displayName[0] : 'U').toUpperCase();

    if (nameEl) nameEl.textContent = displayName;
    if (emailEl) emailEl.textContent = user.email || '';
    if (editNameInput) editNameInput.value = user.displayName || '';

    if (user.photoURL && photoEl) {
      photoEl.src = user.photoURL;
      photoEl.style.display = 'block';
      if (avatarEl) avatarEl.style.display = 'none';
    } else {
      if (avatarEl) {
        avatarEl.textContent = initial;
        avatarEl.style.display = 'inline';
      }
      if (photoEl) photoEl.style.display = 'none';
    }

    // Handle Edit Display Name
    if (editProfileForm) {
      editProfileForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const newName = editNameInput.value.trim();
        if (!newName) return;

        const saveBtn = document.getElementById('save-name-btn');
        if (saveBtn) {
          saveBtn.disabled = true;
          saveBtn.textContent = 'Saving...';
        }

        try {
          await updateProfile(user, { displayName: newName });
          if (nameEl) nameEl.textContent = newName;

          // Update initial if text avatar is used
          const newInitial = newName[0].toUpperCase();
          if (avatarEl) avatarEl.textContent = newInitial;

          // Update header user menu labels
          document.querySelectorAll('#user-name, #user-name-nav').forEach(el => el.textContent = newName);
          document.querySelectorAll('#user-avatar, #user-avatar-nav').forEach(el => el.textContent = newInitial);

          if (profileMsg) {
            profileMsg.style.display = 'block';
            profileMsg.style.background = 'rgba(16, 185, 129, 0.15)';
            profileMsg.style.color = '#10b981';
            profileMsg.style.border = '1px solid rgba(16, 185, 129, 0.3)';
            profileMsg.textContent = 'Display name updated successfully!';
            setTimeout(() => { profileMsg.style.display = 'none'; }, 4000);
          }
        } catch (err) {
          console.error("Error updating profile:", err);
          if (profileMsg) {
            profileMsg.style.display = 'block';
            profileMsg.style.background = 'rgba(239, 68, 68, 0.15)';
            profileMsg.style.color = '#ef4444';
            profileMsg.style.border = '1px solid rgba(239, 68, 68, 0.3)';
            profileMsg.textContent = err.message || 'Failed to update name.';
          }
        } finally {
          if (saveBtn) {
            saveBtn.disabled = false;
            saveBtn.textContent = 'Save';
          }
        }
      });
    }

    // Handle Theme preference buttons on Profile page
    const prefThemeBtns = document.querySelectorAll('.pref-theme-btn');
    if (prefThemeBtns.length > 0 && window.ThemeController) {
      const currentTheme = window.ThemeController.getStoredTheme();
      prefThemeBtns.forEach(btn => {
        const val = btn.getAttribute('data-theme-val');
        if (val === currentTheme) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }

        btn.addEventListener('click', () => {
          const selectedTheme = btn.getAttribute('data-theme-val');
          window.ThemeController.setTheme(selectedTheme);
          prefThemeBtns.forEach(b => {
            if (b.getAttribute('data-theme-val') === selectedTheme) {
              b.classList.add('active');
            } else {
              b.classList.remove('active');
            }
          });
        });
      });
    }
  }
});
