// Particle JS
particlesJS("particles-js", {
    particles: {
      number: { value: 90 },
      color: { value: "#00fff7" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 2 },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#00fff7",
        opacity: 0.4,
        width: 1
      }
    }
  });
  
 
  
  // Swiper Slider
  new Swiper(".swiper-container", {
    loop: true,
    grabCursor: true,
    autoplay: { delay: 2500 },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
  ScrollReveal().reveal('.profile-wrapper', { delay: 200, distance: '50px', origin: 'bottom', duration: 1000 });

ScrollReveal().reveal('.certificate-section', { delay: 400, origin: 'bottom' });

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


const menuBtn = document.getElementById('menuToggle');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  menuBtn.querySelector('span').textContent = isMenuOpen ? 'X' : 'Menu';

  // Navigate to menu page if clicked
  if (isMenuOpen) {
    setTimeout(() => {
      window.location.href = "menu.html";
    }, 300); // optional delay for coolness
  }
});
