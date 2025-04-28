const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  // Temporary Alert (You can replace it with real login validation)
  alert(`Username: ${username}\nPassword: ${password}\nRemember me: ${rememberMe}`);
});
