// Logout Button
document.getElementById('logoutBtn').addEventListener('click', function() {
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  alert('Logged out successfully!');
  window.location.href = 'login.html'; // Redirect to login
});

// Security: Redirect to login if not logged in
window.onload = function() {
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');

  if (!username || !password) {
    alert('Unauthorized access. Please login first.');
    window.location.href = 'login.html';
  } else {
    console.log(`Welcome, ${username}`);
    // Optionally update the page with the username
    document.querySelector('header h1').textContent = `Welcome, ${username}!`;
  }
};
