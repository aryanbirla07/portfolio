// ParticleJS Background (Inline Configuration Only)
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00fff7" },
    shape: {
      type: "polygon",
      polygon: { nb_sides: 6 }
    },
    opacity: { value: 0.3 },
    size: { value: 3 },
    move: { speed: 2 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: {
      repulse: { distance: 100, duration: 0.4 }
    }
  },
  retina_detect: true
});



// Scroll To Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Reveal Fade-In
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
fadeElements.forEach(el => observer.observe(el));

// Flipbook Logic + Download + Swipe
document.addEventListener('DOMContentLoaded', () => {
  const flipWrapper = document.getElementById('flipCard');
  const toPage2 = document.getElementById('toPage2');
  const toPage1 = document.getElementById('toPage1');
  const downloadBtn = document.getElementById('downloadBtn');

  // Flip buttons
  if (toPage2) toPage2.addEventListener('click', () => flipWrapper.classList.add('flipped'));
  if (toPage1) toPage1.addEventListener('click', () => flipWrapper.classList.remove('flipped'));

  // Download resume PDF
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      window.open('/mnt/data/aryanbir1.pdf', '_blank');
    });
  }

  // Swipe gestures (mobile)
  let touchStartX = 0;
  let touchEndX = 0;

  flipWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  flipWrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) {
      flipWrapper.classList.add('flipped');
    }
    if (touchEndX > touchStartX + 50) {
      flipWrapper.classList.remove('flipped');
    }
  }, false);
});


  