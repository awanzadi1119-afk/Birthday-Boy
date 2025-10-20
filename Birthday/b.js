document.addEventListener('DOMContentLoaded', () => {
  // 🎂 Login functionality
  const loginBtn = document.getElementById('login-btn');
  const nameInput = document.getElementById('birthday-name');
  const loginScreen = document.getElementById('login-screen');
  const birthdayPage = document.getElementById('birthday-page');
  const nameDisplay = document.getElementById('name-display');
  const bgMusic = document.getElementById('birthday-music');
  if(bgMusic){
    bgMusic.volume = 0.5; // volume 50%
  }

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const name = nameInput.value.trim();
      if (!name) { 
        alert("Please enter the birthday boy's name! 🎂");
        return;
      }
      nameDisplay.textContent = name;
      loginScreen.classList.add('hidden');
      birthdayPage.classList.remove('hidden');
      if (bgMusic) {
        bgMusic.currentTime = 0;
        bgMusic.play();
      }
    });
  }

  // 🎁 Surprise buttons
  document.querySelectorAll('.surprise-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const targetBox = document.getElementById(targetId);
      if (targetBox) targetBox.classList.toggle('hidden');
    });
  });

  // 📸 Image preview (optional)
  const uploadInput = document.getElementById('upload-pic');
  const previewDiv = document.getElementById('preview');
  if (uploadInput && previewDiv) {
    uploadInput.addEventListener('change', () => {
      const file = uploadInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          previewDiv.innerHTML = `<img src="${e.target.result}" alt="Birthday Pic">`;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 🎶 Music toggle button
  const musicToggle = document.getElementById('music-toggle');
  if (musicToggle && bgMusic) {
    musicToggle.addEventListener('click', () => {
      if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = "🔊 Music On";
      } else {
        bgMusic.pause();
        musicToggle.textContent = "🔇 Music Off";
      }
    });
  }

  // 💖 Sweet Memories Modal
  const memoriesBtn = document.getElementById('memories-btn');
  const sweetModal = document.getElementById('sweet-memories-modal');

  if (memoriesBtn && sweetModal) {
    memoriesBtn.addEventListener('click', () => {
      sweetModal.style.display = 'flex';
    });

    // Close modal buttons
    sweetModal.querySelectorAll('.close-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        sweetModal.style.display = 'none';
      });
    });

    // Click outside to close modal
    sweetModal.addEventListener('click', e => {
      if (e.target === sweetModal) sweetModal.style.display = 'none';
    });
  }
});
