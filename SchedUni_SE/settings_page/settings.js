const darkModeToggle = document.getElementById('darkModeToggle');
const editProfileBtn = document.getElementById('editProfileBtn');
const editPicBtn = document.getElementById('editPicBtn');
const deletePicBtn = document.getElementById('deletePicBtn');
const profilePic = document.getElementById('profilePic');
const uploadInput = document.getElementById('uploadInput');

darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

editProfileBtn.addEventListener('click', () => {
  document.querySelectorAll('.user-details input').forEach(input => {
    input.disabled = !input.disabled;
  });
  editProfileBtn.textContent = editProfileBtn.textContent === "Edit Profile" ? "Save Changes" : "Edit Profile";
});

// Upload new profile picture
editPicBtn.addEventListener('click', () => {
  uploadInput.click();
});

uploadInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      profilePic.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Delete profile picture
deletePicBtn.addEventListener('click', () => {
  profilePic.src = 'images/default-profile.png';
});
