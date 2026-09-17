/**
 * General Main JS - Foundation setup & Scroll Animations
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log("Student's Tool & AI foundation initialized.");

  // Scroll Fade-in Observer for Home & Landing Page Elements
  const animatedElements = document.querySelectorAll('.fade-in-on-scroll, .section-header, .feature-card, .tool-card');

  if ('IntersectionObserver' in window && animatedElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => {
      if (!el.classList.contains('fade-in-on-scroll')) {
        el.classList.add('fade-in-on-scroll');
      }
      observer.observe(el);
    });
  }

  // ==========================================================================
  // Contact Page Interactive Logic (Form Validation, Loading State & FAQ)
  // ==========================================================================

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const msgInput = document.getElementById('contact-msg');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const msgError = document.getElementById('msg-error');

    const submitBtn = document.getElementById('contact-submit-btn');
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-loading-spinner') : null;
    const statusAlert = document.getElementById('form-status-alert');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const clearErrors = () => {
      if (nameError) nameError.textContent = '';
      if (emailError) emailError.textContent = '';
      if (msgError) msgError.textContent = '';

      if (nameInput) nameInput.classList.remove('input-error');
      if (emailInput) emailInput.classList.remove('input-error');
      if (msgInput) msgInput.classList.remove('input-error');

      if (statusAlert) {
        statusAlert.style.display = 'none';
        statusAlert.className = 'form-status-alert';
        statusAlert.textContent = '';
      }
    };

    // Real-time error clearing on input
    if (nameInput) nameInput.addEventListener('input', () => {
      if (nameError) nameError.textContent = '';
      nameInput.classList.remove('input-error');
    });

    if (emailInput) emailInput.addEventListener('input', () => {
      if (emailError) emailError.textContent = '';
      emailInput.classList.remove('input-error');
    });

    if (msgInput) msgInput.addEventListener('input', () => {
      if (msgError) msgError.textContent = '';
      msgInput.classList.remove('input-error');
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;

      if (!nameInput.value.trim()) {
        if (nameError) nameError.textContent = 'আপনার নাম প্রদান করুন।';
        nameInput.classList.add('input-error');
        isValid = false;
      }

      if (!emailInput.value.trim()) {
        if (emailError) emailError.textContent = 'আপনার ইমেইল এড্রেস প্রদান করুন।';
        emailInput.classList.add('input-error');
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        if (emailError) emailError.textContent = 'একটি সঠিক ইমেইল এড্রেস প্রদান করুন।';
        emailInput.classList.add('input-error');
        isValid = false;
      }

      if (!msgInput.value.trim()) {
        if (msgError) msgError.textContent = 'আপনার বার্তাটি লিখুন।';
        msgInput.classList.add('input-error');
        isValid = false;
      }

      if (!isValid) return;

      // Submit Loading State
      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.textContent = 'Sending Message...';
      if (btnSpinner) btnSpinner.style.display = 'inline-block';

      setTimeout(() => {
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.textContent = 'Send Message';
        if (btnSpinner) btnSpinner.style.display = 'none';

        if (statusAlert) {
          statusAlert.className = 'form-status-alert success';
          statusAlert.style.display = 'block';
          statusAlert.textContent = '✓ আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে! আমরা দ্রুত আপনার সাথে যোগাযোগ করব।';
        }

        contactForm.reset();
      }, 1200);
    });
  }

  // FAQ Accordion Handler
  const faqAccordion = document.getElementById('faq-accordion');
  if (faqAccordion) {
    const faqBtns = faqAccordion.querySelectorAll('.faq-question-btn');

    faqBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const ansWrapper = item ? item.querySelector('.faq-answer-wrapper') : null;
        const isCurrentlyExpanded = btn.getAttribute('aria-expanded') === 'true';

        // Close all other items for clean single accordion effect
        faqAccordion.querySelectorAll('.faq-item').forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question-btn');
            const otherWrapper = otherItem.querySelector('.faq-answer-wrapper');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherWrapper) {
              otherWrapper.style.maxHeight = '0px';
              otherWrapper.hidden = true;
            }
          }
        });

        if (isCurrentlyExpanded) {
          item.classList.remove('active');
          btn.setAttribute('aria-expanded', 'false');
          if (ansWrapper) {
            ansWrapper.style.maxHeight = '0px';
            setTimeout(() => { ansWrapper.hidden = true; }, 300);
          }
        } else {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
          if (ansWrapper) {
            ansWrapper.hidden = false;
            ansWrapper.style.maxHeight = ansWrapper.scrollHeight + 'px';
          }
        }
      });
    });
  }
});
