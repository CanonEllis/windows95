// Sleep Screen Inactivity Timer and Bounce Animation
let inactivityTime = 0;
const sleepScreen = document.getElementById('sleep-screen');
const logo = document.getElementById('bouncing-logo');

// Set inactivity timeout (e.g., 10 seconds)
const TIMEOUT = 10000; // 10 seconds
let timeout;

// Reset inactivity timer on user interaction
function resetTimer() {
  clearTimeout(timeout);
  inactivityTime = 0;
  sleepScreen.style.display = 'none'; // Hide sleep screen if visible
  timeout = setTimeout(showSleepScreen, TIMEOUT); // Restart inactivity timer
}

// Show sleep screen
function showSleepScreen() {
  sleepScreen.style.display = 'block';
  startBouncing();
}

// Detect user activity (mouse movement, keypress, touch)
window.addEventListener('mousemove', resetTimer);
window.addEventListener('keydown', resetTimer);
window.addEventListener('touchstart', resetTimer);

// Initial timer setup
timeout = setTimeout(showSleepScreen, TIMEOUT);

// Bouncing logo function
let xPos = 0;
let yPos = 0;
let xSpeed = 2;
let ySpeed = 2;
const logoWidth = 150; // Adjust based on the actual logo size

function startBouncing() {
  const screenWidth = window.innerWidth - logoWidth;
  const screenHeight = window.innerHeight - logoWidth;

  function bounceLogo() {
    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos >= screenWidth || xPos <= 0) {
      xSpeed = -xSpeed; // Reverse direction when hitting horizontal bounds
    }

    if (yPos >= screenHeight || yPos <= 0) {
      ySpeed = -ySpeed; // Reverse direction when hitting vertical bounds
    }

    logo.style.left = `${xPos}px`;
    logo.style.top = `${yPos}px`;

    // Repeat animation every 16ms (~60 frames per second)
    if (sleepScreen.style.display === 'block') {
      requestAnimationFrame(bounceLogo);
    }
  }

  bounceLogo();
}
