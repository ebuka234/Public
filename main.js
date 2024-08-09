// src/main.js
const texts = ["UI/UX Designer", "Graphics Designer", "Front-End Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("auto-type").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); // Pause before starting the next word
  } else {
    setTimeout(type, 100); // Speed of typing
  }
})();










// Intersection Observer for project images
document.addEventListener('DOMContentLoaded', () => {
  const projectImages = document.querySelectorAll('.project-image');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Stop observing to keep animation
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  projectImages.forEach(image => {
    observer.observe(image);
  });
});










/// Toggle sliding form
document.addEventListener('DOMContentLoaded', () => {
  const contactIcon = document.querySelector('.bxs-contact');
  const contactFormContainer = document.getElementById('contact-form-container');

  contactIcon.addEventListener('click', () => {
    contactFormContainer.classList.toggle('show');
  });

  // Close the form if clicking outside of it
  document.addEventListener('click', (event) => {
    if (!contactFormContainer.contains(event.target) && !contactIcon.contains(event.target)) {
      contactFormContainer.classList.remove('show') ;
    }
  });
});

  
  