/* ==========================================================================
   CeramiGuard Detailing — Main JavaScript
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Mobile Navigation Toggle ---------- */
  const navToggle = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Navbar Shadow on Scroll ---------- */
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.classList.add('navbar--scrolled');
      } else {
        navbar.classList.remove('navbar--scrolled');
      }
    }, { passive: true });
  }

  /* ---------- FAQ Accordion ---------- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');

    if (question && answer) {
      question.addEventListener('click', function () {
        const isOpen = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(function (otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            var otherAnswer = otherItem.querySelector('.faq-item__answer');
            var otherQuestion = otherItem.querySelector('.faq-item__question');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
            if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
          question.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          question.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  /* ---------- Form Validation ---------- */
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /[\d\-\(\)\+\s]{7,}/.test(phone);
  }

  function showError(inputId, errorId) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    if (input) input.classList.add('error');
    if (error) error.classList.add('visible');
  }

  function clearError(inputId, errorId) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    if (input) input.classList.remove('error');
    if (error) error.classList.remove('visible');
  }

  // Schedule form
  var scheduleForm = document.getElementById('schedule-form');
  if (scheduleForm) {
    scheduleForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      // Name
      var name = document.getElementById('schedule-name');
      if (!name.value.trim()) { showError('schedule-name', 'schedule-name-error'); valid = false; }
      else { clearError('schedule-name', 'schedule-name-error'); }

      // Phone
      var phone = document.getElementById('schedule-phone');
      if (!validatePhone(phone.value)) { showError('schedule-phone', 'schedule-phone-error'); valid = false; }
      else { clearError('schedule-phone', 'schedule-phone-error'); }

      // Email
      var email = document.getElementById('schedule-email');
      if (!validateEmail(email.value)) { showError('schedule-email', 'schedule-email-error'); valid = false; }
      else { clearError('schedule-email', 'schedule-email-error'); }

      // Service
      var service = document.getElementById('schedule-service');
      if (!service.value) { showError('schedule-service', 'schedule-service-error'); valid = false; }
      else { clearError('schedule-service', 'schedule-service-error'); }

      // Vehicle
      var vehicle = document.getElementById('schedule-vehicle');
      if (!vehicle.value.trim()) { showError('schedule-vehicle', 'schedule-vehicle-error'); valid = false; }
      else { clearError('schedule-vehicle', 'schedule-vehicle-error'); }

      // Date
      var date = document.getElementById('schedule-date');
      if (!date.value) { showError('schedule-date', 'schedule-date-error'); valid = false; }
      else { clearError('schedule-date', 'schedule-date-error'); }

      // Location
      var location = document.getElementById('schedule-location');
      if (!location.value.trim()) { showError('schedule-location', 'schedule-location-error'); valid = false; }
      else { clearError('schedule-location', 'schedule-location-error'); }

      if (valid) {
        alert('Thank you! Your appointment request has been submitted. We will confirm within 24 hours.');
        scheduleForm.reset();
      }
    });

    // Clear errors on input
    scheduleForm.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(function (input) {
      input.addEventListener('input', function () {
        var errorEl = document.getElementById(input.id + '-error');
        if (errorEl) {
          input.classList.remove('error');
          errorEl.classList.remove('visible');
        }
      });
    });
  }

  // Contact form
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      // Name
      var name = document.getElementById('contact-name');
      if (!name.value.trim()) { showError('contact-name', 'contact-name-error'); valid = false; }
      else { clearError('contact-name', 'contact-name-error'); }

      // Phone
      var phone = document.getElementById('contact-phone');
      if (!validatePhone(phone.value)) { showError('contact-phone', 'contact-phone-error'); valid = false; }
      else { clearError('contact-phone', 'contact-phone-error'); }

      // Email
      var email = document.getElementById('contact-email');
      if (!validateEmail(email.value)) { showError('contact-email', 'contact-email-error'); valid = false; }
      else { clearError('contact-email', 'contact-email-error'); }

      // Message
      var message = document.getElementById('contact-message');
      if (!message.value.trim()) { showError('contact-message', 'contact-message-error'); valid = false; }
      else { clearError('contact-message', 'contact-message-error'); }

      if (valid) {
        alert('Thank you for your message! We will get back to you within 24 hours.');
        contactForm.reset();
      }
    });

    // Clear errors on input
    contactForm.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(function (input) {
      input.addEventListener('input', function () {
        var errorEl = document.getElementById(input.id + '-error');
        if (errorEl) {
          input.classList.remove('error');
          errorEl.classList.remove('visible');
        }
      });
    });
  }

})();
