// theme.js

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themeToggle');
    const isLight = localStorage.getItem('theme') === 'light';
  
    if (isLight) {
      document.body.classList.add('light-mode');
      if (toggle) toggle.textContent = '☀️';
    } else {
      document.body.classList.remove('light-mode');
      if (toggle) toggle.textContent = '🌙';
    }
  
    if (toggle) {
      toggle.addEventListener('click', () => {
        const isNowLight = document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', isNowLight ? 'light' : 'dark');
        toggle.textContent = isNowLight ? '☀️' : '🌙';
      });
    }
  });
  
  const themeToggle = document.getElementById('themeToggle');

  // Load saved theme on page load
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('light-mode');
    themeToggle.textContent = '🌙';
  }

  // Toggle logic
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
  });

