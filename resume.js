// ParticleJS Background
particlesJS.load('particles-js', 'particles-config.json', function() {
    console.log('Particles loaded!');
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
  
  // Scroll Reveal Animation (Fade-In)
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  fadeElements.forEach(el => observer.observe(el));
  
  // Download Button Logic
  const downloadBtn = document.getElementById('downloadBtn');
  
  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'ASSETS/Aryan birla (1).pdf';
    link.download = 'Aryan_Birla_Resume.pdf';
    link.click();
  });
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
  