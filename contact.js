// Loader
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
  });
  
  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === "dark") {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.textContent = '☀️';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '🌙';
    }
  });
  
  // Scroll To Top Button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });
  
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Send Sound Effect
  const contactForm = document.getElementById('contact-form');
  const sendSound = document.getElementById('send-sound');
  
  contactForm.addEventListener('submit', () => {
    sendSound.play();
  });
  
  // Quote of the Day Fetch
  document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
  
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        quoteText.textContent = `"${data.content}"`;
        quoteAuthor.textContent = `- ${data.author}`;
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
        quoteText.textContent = `"Stay positive, work hard, make it happen."`;
        quoteAuthor.textContent = "- Unknown";
      });
  });
  
  // Fade-In Animation on Scroll
  const fadeEls = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  fadeEls.forEach(el => observer.observe(el));
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#00fff7" },
      shape: { type: "polygon", polygon: { nb_sides: 6 } },
      opacity: { value: 0.3 },
      size: { value: 3 },
      move: { speed: 2 }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "repulse" } }
    }
  });
  