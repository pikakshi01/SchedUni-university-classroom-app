const loginForm = document.getElementById('loginForm');

// Auto-fill username if "Remember Me" was selected earlier
window.addEventListener('DOMContentLoaded', () => {
  const savedUsername = localStorage.getItem('username');
  const rememberMeChecked = localStorage.getItem('rememberMe') === 'true';

  if (savedUsername && rememberMeChecked) {
    document.getElementById('username').value = savedUsername;
    document.getElementById('rememberMe').checked = true;
  }
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop form from reloading page
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const rememberMe = document.getElementById('rememberMe').checked;

  if (username === '' || password === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Save user data in localStorage
  if (rememberMe) {
    localStorage.setItem('username', username);
    localStorage.setItem('rememberMe', true);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('rememberMe');
  }

  // (Note: Saving password in localStorage is unsafe in real applications)
  localStorage.setItem('password', password);

  alert('You are successfully logged in!');

  // Redirect to homepage after short delay
  setTimeout(() => {
    window.location.href = 'homepage.html';
  }, 1000);
});
