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
});
