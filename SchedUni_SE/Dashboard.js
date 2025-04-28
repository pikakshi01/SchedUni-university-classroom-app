// Logout Button
document.getElementById('logoutBtn').addEventListener('click', function() {
  localStorage.removeItem('facultyLogin');
  sessionStorage.removeItem('facultyLogin');
  alert('Logged out successfully!');
  window.location.href = 'login.html'; // Adjust to your actual login page filename
});

// Security: Redirect to login if no session/local storage
window.onload = function() {
  const localUser = JSON.parse(localStorage.getItem('facultyLogin'));
  const sessionUser = JSON.parse(sessionStorage.getItem('facultyLogin'));
  
  if (!localUser && !sessionUser) {
    alert('Unauthorized access. Please login first.');
    window.location.href = 'login.html'; // Adjust if your login page is differently named
  }
};
