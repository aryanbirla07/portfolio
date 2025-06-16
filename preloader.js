document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing");
    const preloader = document.getElementById("preloader");
  
    const phrases = [
      "Crafting UI...",
      "Creating Magic...",
      "Designing Experience...",
      "Loading Aryan's World..."
    ];
    
    let charIndex = 0;
    let phraseIndex = 0;
  
    function type() {
      const currentPhrase = phrases[phraseIndex];
      if (charIndex <= currentPhrase.length) {
        typingElement.textContent = currentPhrase.slice(0, charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(() => {
          charIndex = 0;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          type();
        }, 1200);
      }
    }
  
    type(); // start typing
  
    // Hide preloader after full page load
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("hidden");
      }, 2000); // Adjust delay if needed
    });
  });
  