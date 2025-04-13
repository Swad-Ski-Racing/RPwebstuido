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