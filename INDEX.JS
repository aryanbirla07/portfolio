// Typing Effect
const textArray = ["UI/UX Designer", "Creative Designer", "Frontend Developer", "Product Thinker"];
let index = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");
const typingSpeed = 100;
const delayBetweenWords = 2000;

function type() {
  if (charIndex < textArray[index].length) {
    typedText.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, typingSpeed / 2);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(type, typingSpeed);
  }
}

// Scroll Fade-In
const fadeSections = document.querySelectorAll(".fade-in-section");
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

// Reveal effect for glass-box elements
const glassBoxes = document.querySelectorAll(".glass-box");
function revealGlassBoxes() {
  const triggerBottom = window.innerHeight * 0.85;
  glassBoxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("visible");
    }
  });
}

// Apply theme on load
function applyTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    themeToggle.textContent = currentTheme === "light" ? "☀️" : "🌙";
  }
  themeToggle.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeToggle.textContent = theme === "light" ? "☀️" : "🌙";
  });
}

// Initialize ScrollReveal
ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 1000,
  delay: 200,
  mobile: true,
  easing: 'ease-in-out'
});
ScrollReveal().reveal('.hero-container', { origin: 'top' });
ScrollReveal().reveal('.glass-box', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.work-box', { origin: 'bottom', interval: 150 });
ScrollReveal().reveal('.skills-category', { origin: 'left', interval: 200 });
ScrollReveal().reveal('.quote-section', { origin: 'bottom' });

document.addEventListener("DOMContentLoaded", () => {
  type();
  revealOnScroll();
  revealGlassBoxes();
  applyTheme();

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
      quoteText.textContent = "Stay positive, work hard, make it happen.";
      quoteAuthor.textContent = "- Unknown";
    });
});
