var textArray = [
    "Creative Developer",
    "Web Designer",
    "Programmer"
  ];
  
  var typedText = document.getElementById("typed-text");
  var textIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  
  function type() {
    var currentText = textArray[textIndex];
    var visibleText = currentText.substring(0, charIndex);
    typedText.textContent = visibleText;
  
    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % textArray.length;
      }
      setTimeout(type, 1000);
    }
  }
  
  window.onload = type;
  // script.js
window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in-section');
    var windowHeight = window.innerHeight;
  
    for (var i = 0; i < elements.length; i++) {
      var elementTop = elements[i].getBoundingClientRect().top;
  
      if (elementTop < windowHeight - 100) {
        elements[i].classList.add('visible');
      }
    }
  });
  window.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".timeline-item");
    const reveal = () => {
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.style.opacity = 1;
          item.style.transform = "translateY(0)";
        }
      });
    };
    items.forEach(item => {
      item.style.opacity = 0;
      item.style.transform = "translateY(50px)";
      item.style.transition = "all 0.6s ease";
    });
    window.addEventListener("scroll", reveal);
    reveal();
  });
  // Lightbox Popup (basic)
document.querySelectorAll('.certificate-card img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img src="${img.src}" alt="Certificate" />
      </div>
    `;
    document.body.appendChild(lightbox);
    lightbox.addEventListener('click', () => lightbox.remove());
  });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  const sound = document.getElementById('send-sound');
  sound.play();
});
document.getElementById('contact-form').addEventListener('submit', function (e) {
  const sound = document.getElementById('send-sound');
  sound.play();
});



