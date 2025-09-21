document.addEventListener('DOMContentLoaded', () => {
  // Image slider for Home page
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  showSlide(currentIndex);

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  }, 5000);

  // Contact form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = contactForm.elements['name'];
      const emailInput = contactForm.elements['email'];
      const messageInput = contactForm.elements['message'];

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');

      if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required.';
        isValid = false;
      } else {
        nameError.textContent = '';
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Email is required.';
        isValid = false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email.';
        isValid = false;
      } else {
        emailError.textContent = '';
      }

      if (!messageInput.value.trim()) {
        messageError.textContent = 'Message is required.';
        isValid = false;
      } else {
        messageError.textContent = '';
      }

      if (isValid) {
        alert('Thank you for your message! We will get back to you shortly.');
        contactForm.reset();
      }
    });
  }
});
// JavaScript for image slider and contact form validation