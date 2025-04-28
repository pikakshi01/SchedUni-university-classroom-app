document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const remember = document.getElementById('remember').checked;

  if (username === '' || password === '') {
    alert('Please fill all fields!');
    return;
  }

  const userData = {
    username: username,
    password: password,
    remember: remember
  };

  if (remember) {
    localStorage.setItem('facultyLogin', JSON.stringify(userData));
  } else {
    sessionStorage.setItem('facultyLogin', JSON.stringify(userData));
  }

  alert('Login Successful! Redirecting...');
  // You can redirect to dashboard after successful login
  window.location.href = 'dashboard.html';  // Replace with your actual page
});

// Pre-fill username if remembered
window.onload = function() {
  const savedData = JSON.parse(localStorage.getItem('facultyLogin'));
  if (savedData) {
    document.getElementById('username').value = savedData.username;
    document.getElementById('remember').checked = savedData.remember;
  }
};
