// Hashed password for "10281955" (Bill Gates' birthday) using SHA-256
const storedHashedPassword = 'e4f7fd5f8ef9b73f43ea27298164384d7f1eff9f9d0e06efadcde5bd4dee6532';

// Get the elements for username, password, and login button
const loginButton = document.getElementById('login-btn');
const cancelButton = document.getElementById('cancel-btn');
const loginWindow = document.getElementById('login-window');
const fadeOverlay = document.getElementById('fade-overlay');

// Function to trigger the shake effect
function shakeLoginBox() {
  loginWindow.classList.add('shake');
  setTimeout(() => {
    loginWindow.classList.remove('shake');
  }, 500);
}

// Function to hash the input using SHA-256
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Function to check the login
async function checkLogin() {
  const username = document.getElementById('username').value.trim(); // Get and trim username
  const password = document.getElementById('password').value.trim(); // Get and trim password

  console.log('Password entered:', password); // Log the password to check if it's captured

  // Check if either field is empty and shake the box
  if (!username || !password) {
    shakeLoginBox();
    return;
  }

  // Proceed with login if both fields are filled
  if (username === 'bgates') {
    // Hash the entered password
    const enteredHashedPassword = await hashPassword(password);
    console.log('Hashed password:', enteredHashedPassword); // Log the hashed password

    // Compare hashed passwords
    if (enteredHashedPassword === storedHashedPassword) {
      console.log("Successful")
      // Successful login: Fade to black and then redirect to index.html
      fadeOverlay.classList.add('fade');
      setTimeout(() => {
        window.location.href = 'index.html'; // Redirect after fade
      }, 1000); // Wait for the fade effect to complete (1 second)
    } else {
      shakeLoginBox(); // Wrong password
    }
  } else {
    shakeLoginBox(); // Wrong username
  }
}


// Get elements for the help dialog and the ? button
const helpButton = document.querySelector('.help');
const helpDialog = document.getElementById('help-dialog');
const closeHelpButton = document.getElementById('close-help');

// Show the help dialog when the ? button is clicked
helpButton.addEventListener('click', function () {
  helpDialog.style.display = 'block';
});

// Hide the help dialog when the close (X) button is clicked
closeHelpButton.addEventListener('click', function () {
  helpDialog.style.display = 'none';
});


// Event listeners for login and cancel buttons
loginButton.addEventListener('click', checkLogin);
cancelButton.addEventListener('click', shakeLoginBox);
