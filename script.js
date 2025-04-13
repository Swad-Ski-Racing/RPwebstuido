// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const sun = document.getElementById('icon-sun');
const moon = document.getElementById('icon-moon');

// Toggle between light and dark themes
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  sun.classList.toggle('hidden');
  moon.classList.toggle('hidden');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Apply theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    sun.classList.add('hidden');
    moon.classList.remove('hidden');
  }
});

// AOS library initialization with 'once: false' to re-trigger animations when scrolling up or down
AOS.init({
  duration: 1000,
  once: false,  // Allow animations to be re-triggered
  offset: 100,  // Start animation slightly before the element comes into view
  easing: 'ease-out',
});

// Scroll Progress Bar
const progressBar = document.querySelector('.progress-bar .fill');
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollPosition / documentHeight) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});

// Popup behavior
document.addEventListener('DOMContentLoaded', function () {
  // Show popup after 1 second
  setTimeout(() => {
    document.getElementById('popup').classList.add('active');
  }, 1000);

  // Close the popup when the close button is clicked
  document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').classList.remove('active');
  });

  // Scroll to "Request a Quote" section when "Request a Quote" button is clicked
  document.getElementById('scrollToQuotePopup').addEventListener('click', function () {
    const targetSection = document.getElementById('quote');  // Ensure this id matches your "Request a Quote" section
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('popup').classList.remove('active'); // Close popup after action
    }
  });

  // Scroll to "Book a Zoom Call" section when "Book a Call" button is clicked
  document.getElementById('bookCallPopup').addEventListener('click', function () {
    const targetSection = document.getElementById('book-call');  // Ensure this id matches your "Book a Zoom Call" section
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('popup').classList.remove('active'); // Close popup after action
    }
  });
});

// Handle booking form submission
document.getElementById('booking-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const dateTime = document.getElementById('date-time').value;
  
  // For now, this will just log the data. Replace with form submission code.
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Preferred Date & Time:', dateTime);
  
  // Display confirmation message
  document.getElementById('confirmation-message').style.display = 'block';
  
  // Clear the form fields after submission
  document.getElementById('booking-form').reset();
});

window.onload = function() {
  window.scrollTo(0, 0);
