import { auth, db, doc, getDoc, setDoc, deleteDoc } from './firebase-init.js';
import { onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const CLOUDINARY_CLOUD_NAME = "vhc6a9gy";
const CLOUDINARY_UPLOAD_PRESET = "sarpai";

function resizeAndCompressImage(file, maxWidth = 512, maxHeight = 512, quality = 0.85) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const outputType = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject(new Error('Canvas image compression failed'));
        }, outputType, quality);
      };
      img.onerror = (err) => reject(err);
      img.src = event.target.result;
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

onAuthStateChanged(auth, async (user) => {
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

    // Handle Profile Photo Upload via Cloudinary
    const avatarUploadBtn = document.getElementById('avatar-upload-btn');
    const avatarFileInput = document.getElementById('avatar-file-input');
    const avatarLoader = document.getElementById('avatar-loader');
    const avatarMsg = document.getElementById('avatar-msg');

    if (avatarUploadBtn && avatarFileInput) {
      avatarUploadBtn.addEventListener('click', () => avatarFileInput.click());

      avatarFileInput.addEventListener('change', async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        if (avatarMsg) {
          avatarMsg.style.display = 'none';
          avatarMsg.className = 'avatar-msg';
          avatarMsg.textContent = '';
        }

        // Validate file type
        const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (!validTypes.includes(file.type)) {
          if (avatarMsg) {
            avatarMsg.className = 'avatar-msg error';
            avatarMsg.textContent = 'Please select a valid image (JPG, PNG, or WebP).';
            avatarMsg.style.display = 'inline-block';
          }
          avatarFileInput.value = '';
          return;
        }

        // Validate max size 5MB
        if (file.size > 5 * 1024 * 1024) {
          if (avatarMsg) {
            avatarMsg.className = 'avatar-msg error';
            avatarMsg.textContent = 'Image size exceeds 5MB limit.';
            avatarMsg.style.display = 'inline-block';
          }
          avatarFileInput.value = '';
          return;
        }

        if (avatarLoader) avatarLoader.style.display = 'flex';

        try {
          // Client-side resize/compress using canvas
          const compressedBlob = await resizeAndCompressImage(file, 512, 512);

          // Upload directly to Cloudinary unsigned endpoint
          const formData = new FormData();
          formData.append('file', compressedBlob, file.name || 'avatar.jpg');
          formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

          const uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;
          const res = await fetch(uploadUrl, {
            method: 'POST',
            body: formData
          });

          if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            console.error('Cloudinary upload error details:', errData);
            throw new Error('Cloudinary upload failed');
          }

          const data = await res.json();
          const photoURL = data.secure_url;

          if (!photoURL) {
            throw new Error('No secure URL returned from Cloudinary');
          }

          // Update Firebase Auth profile
          await updateProfile(user, { photoURL });

          // Update Firestore user doc for consistency
          try {
            await setDoc(doc(db, 'users', user.uid), { photoURL }, { merge: true });
          } catch (fsErr) {
            console.error('Error saving photoURL to Firestore users doc:', fsErr);
          }

          // Update UI
          if (photoEl) {
            photoEl.src = photoURL;
            photoEl.style.display = 'block';
          }
          if (avatarEl) avatarEl.style.display = 'none';

          // Update Top Right Profile Shortcut Icon if present
          const topShortcut = document.getElementById('top-profile-shortcut');
          if (topShortcut) {
            topShortcut.innerHTML = `<img src="${photoURL}" alt="Profile Photo">`;
          }

          if (avatarMsg) {
            avatarMsg.className = 'avatar-msg success';
            avatarMsg.textContent = 'Profile photo updated successfully!';
            avatarMsg.style.display = 'inline-block';
            setTimeout(() => { avatarMsg.style.display = 'none'; }, 4000);
          }
        } catch (err) {
          console.error('Photo upload error:', err);
          if (avatarMsg) {
            avatarMsg.className = 'avatar-msg error';
            avatarMsg.textContent = 'Photo upload failed, please try again.';
            avatarMsg.style.display = 'inline-block';
          }
        } finally {
          if (avatarLoader) avatarLoader.style.display = 'none';
          avatarFileInput.value = '';
        }
      });
    }

    // Handle Unique Username System
    const editUsernameInput = document.getElementById('edit-username-input');
    const saveUsernameBtn = document.getElementById('save-username-btn');
    const usernameStatusIcon = document.getElementById('username-status-icon');
    const usernameFeedback = document.getElementById('username-feedback');

    let currentUsername = '';
    let isUsernameValid = false;
    let checkDebounceTimer = null;

    // Load initial username from users/{uid}
    try {
      const userDocSnap = await getDoc(doc(db, 'users', user.uid));
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        if (userData.username) {
          currentUsername = userData.username;
          if (editUsernameInput) editUsernameInput.value = currentUsername;
        }
      }
    } catch (err) {
      console.error('Error fetching user document from Firestore:', err);
    }

    const checkAvailability = async (typedUsername) => {
      if (!typedUsername) {
        isUsernameValid = false;
        if (saveUsernameBtn) saveUsernameBtn.disabled = true;
        if (usernameStatusIcon) {
          usernameStatusIcon.className = 'username-status-icon';
          usernameStatusIcon.textContent = '';
        }
        if (usernameFeedback) {
          usernameFeedback.className = 'username-feedback';
          usernameFeedback.textContent = 'Lowercase English letters (a-z) and digits (0-9) only.';
        }
        return;
      }

      if (usernameStatusIcon) {
        usernameStatusIcon.className = 'username-status-icon checking';
        usernameStatusIcon.textContent = '';
      }

      try {
        const usernameDocSnap = await getDoc(doc(db, 'usernames', typedUsername));
        if (!usernameDocSnap.exists() || (usernameDocSnap.exists() && usernameDocSnap.data().uid === user.uid)) {
          isUsernameValid = true;
          if (saveUsernameBtn) saveUsernameBtn.disabled = false;
          if (usernameStatusIcon) {
            usernameStatusIcon.className = 'username-status-icon valid';
            usernameStatusIcon.textContent = '✓';
          }
          if (usernameFeedback) {
            usernameFeedback.className = 'username-feedback valid-msg';
            usernameFeedback.textContent = typedUsername === currentUsername ? 'This is your current username.' : 'Username is available!';
          }
        } else {
          isUsernameValid = false;
          if (saveUsernameBtn) saveUsernameBtn.disabled = true;
          if (usernameStatusIcon) {
            usernameStatusIcon.className = 'username-status-icon invalid';
            usernameStatusIcon.textContent = '✕';
          }
          if (usernameFeedback) {
            usernameFeedback.className = 'username-feedback error-msg';
            usernameFeedback.textContent = 'Username already taken.';
          }
        }
      } catch (err) {
        console.error('Error checking username availability:', err);
        isUsernameValid = false;
        if (saveUsernameBtn) saveUsernameBtn.disabled = true;
        if (usernameStatusIcon) {
          usernameStatusIcon.className = 'username-status-icon invalid';
          usernameStatusIcon.textContent = '✕';
        }
        if (usernameFeedback) {
          usernameFeedback.className = 'username-feedback error-msg';
          usernameFeedback.textContent = 'Could not verify username availability.';
        }
      }
    };

    if (editUsernameInput) {
      editUsernameInput.addEventListener('input', (e) => {
        // Enforce format as user types: only lowercase letters and digits
        const cleanVal = e.target.value.toLowerCase().replace(/[^a-z0-9]/g, '');
        e.target.value = cleanVal;

        if (checkDebounceTimer) clearTimeout(checkDebounceTimer);

        if (!cleanVal) {
          isUsernameValid = false;
          if (saveUsernameBtn) saveUsernameBtn.disabled = true;
          if (usernameStatusIcon) {
            usernameStatusIcon.className = 'username-status-icon';
            usernameStatusIcon.textContent = '';
          }
          if (usernameFeedback) {
            usernameFeedback.className = 'username-feedback';
            usernameFeedback.textContent = 'Lowercase English letters (a-z) and digits (0-9) only.';
          }
          return;
        }

        // Show checking state immediately
        if (usernameStatusIcon) {
          usernameStatusIcon.className = 'username-status-icon checking';
          usernameStatusIcon.textContent = '';
        }

        checkDebounceTimer = setTimeout(() => {
          checkAvailability(cleanVal);
        }, 450);
      });
    }

    if (saveUsernameBtn) {
      saveUsernameBtn.addEventListener('click', async () => {
        if (!editUsernameInput) return;
        const newUsername = editUsernameInput.value.trim().toLowerCase();

        if (!newUsername || !isUsernameValid) {
          return;
        }

        saveUsernameBtn.disabled = true;
        saveUsernameBtn.textContent = 'Saving...';

        try {
          // Re-verify availability at save time to prevent race conditions
          const recheckSnap = await getDoc(doc(db, 'usernames', newUsername));
          if (recheckSnap.exists() && recheckSnap.data().uid !== user.uid) {
            isUsernameValid = false;
            saveUsernameBtn.textContent = 'Save';
            if (usernameStatusIcon) {
              usernameStatusIcon.className = 'username-status-icon invalid';
              usernameStatusIcon.textContent = '✕';
            }
            if (usernameFeedback) {
              usernameFeedback.className = 'username-feedback error-msg';
              usernameFeedback.textContent = 'Username was just taken by another user.';
            }
            return;
          }

          // Delete old username document if user had a different username previously
          if (currentUsername && currentUsername !== newUsername) {
            try {
              await deleteDoc(doc(db, 'usernames', currentUsername));
            } catch (delErr) {
              console.error('Error deleting old username doc:', delErr);
            }
          }

          // Set new username document
          await setDoc(doc(db, 'usernames', newUsername), { uid: user.uid });

          // Store on users/{uid} doc
          await setDoc(doc(db, 'users', user.uid), {
            username: newUsername,
            photoURL: user.photoURL || ''
          }, { merge: true });

          currentUsername = newUsername;

          if (profileMsg) {
            profileMsg.style.display = 'block';
            profileMsg.style.background = 'rgba(16, 185, 129, 0.15)';
            profileMsg.style.color = '#10b981';
            profileMsg.style.border = '1px solid rgba(16, 185, 129, 0.3)';
            profileMsg.textContent = 'Username updated successfully!';
            setTimeout(() => { profileMsg.style.display = 'none'; }, 4000);
          }
        } catch (err) {
          console.error('Error saving username:', err);
          if (profileMsg) {
            profileMsg.style.display = 'block';
            profileMsg.style.background = 'rgba(239, 68, 68, 0.15)';
            profileMsg.style.color = '#ef4444';
            profileMsg.style.border = '1px solid rgba(239, 68, 68, 0.3)';
            profileMsg.textContent = 'Failed to save username. Please try again.';
          }
        } finally {
          saveUsernameBtn.disabled = !isUsernameValid;
          saveUsernameBtn.textContent = 'Save';
        }
      });
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
