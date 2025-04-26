// index.js

// Light/Dark Mode Toggle
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

// ScrollReveal Animations
ScrollReveal({
  reset: false,
  distance: '40px',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.fade-in', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.hero-container', { origin: 'top', delay: 300 });
ScrollReveal().reveal('.glass-box', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.work-box', { origin: 'bottom', interval: 150 });
ScrollReveal().reveal('.skills-category', { origin: 'left', interval: 200 });
ScrollReveal().reveal('.quote-section', { origin: 'bottom', delay: 300 });
ScrollReveal().reveal('.timeline-item, .interest-box, .certificate-box', { origin: 'bottom', interval: 150 });



// Typing Effect for Home Page
const textArray = ["UI/UX Designer", "Creative Developer", "Frontend Developer", "Problem Solver"];
let index = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");
const typingSpeed = 100;
const delayBetweenWords = 2000;

function type() {
  if (typedText) {
    if (charIndex < textArray[index].length) {
      typedText.textContent += textArray[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenWords);
    }
  }
}

function erase() {
  if (typedText) {
    if (charIndex > 0) {
      typedText.textContent = textArray[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, typingSpeed / 2);
    } else {
      index = (index + 1) % textArray.length;
      setTimeout(type, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Quote of the Day
const quotes = [
  "Design is intelligence made visible. – Alina Wheeler",
  "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Creativity is intelligence having fun. – Albert Einstein",
  "Good design is obvious. Great design is transparent. – Joe Sparano"
];

document.addEventListener("DOMContentLoaded", () => {
  const quoteElement = document.getElementById("quote");
  if (quoteElement) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = `"${quote}"`;
  }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
