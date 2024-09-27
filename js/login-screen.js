document.getElementById('login-btn').addEventListener('click', function() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    alert(`Logging in as ${username}...`);
  } else {
    alert('Please enter both a username and password.');
  }
});

document.getElementById('cancel-btn').addEventListener('click', function() {
  document.getElementById('username').value = 'Midnite';  // Reset to default username
  document.getElementById('password').value = '';         // Clear password
});
