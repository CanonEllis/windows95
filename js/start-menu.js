// Start Menu Functionality
const startButton = document.getElementById('start-button');
const startMenu = document.getElementById('start-menu');

// Toggle Start Menu visibility when Start Button is clicked
startButton.addEventListener('click', () => {
  if (startMenu.style.display === 'block') {
    startMenu.style.display = 'none';
  } else {
    startMenu.style.display = 'block';
  }
});

// Close the Start Menu when clicking outside of it
window.addEventListener('click', function (e) {
  if (!startButton.contains(e.target) && !startMenu.contains(e.target)) {
    startMenu.style.display = 'none';
  }
});

// JavaScript to handle showing/hiding submenus
document.querySelectorAll('.has-submenu').forEach(item => {
  item.addEventListener('click', () => {
    // Find the submenu for the clicked item
    const submenu = item.querySelector('.submenu');

    // Toggle submenu visibility
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
    } else {
      // Close other open submenus
      document.querySelectorAll('.submenu').forEach(sub => {
        sub.style.display = 'none';
      });
      // Show the clicked submenu
      submenu.style.display = 'block';
    }
  });
});

// Optional: Close the submenu if clicking outside the start menu
window.addEventListener('click', function (e) {
  const startMenu = document.getElementById('start-menu');
  if (!startMenu.contains(e.target)) {
    // Close all submenus when clicking outside
    document.querySelectorAll('.submenu').forEach(sub => {
      sub.style.display = 'none';
    });
  }
});
