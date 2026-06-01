const heroImage = document.querySelector('.hero-image-card .product-hero-visual img');
const revealElements = document.querySelectorAll('[data-scroll], .scroll-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px',
});

revealElements.forEach((el) => observer.observe(el));

const updateHeroParallax = () => {
  if (!heroImage) return;
  const y = window.scrollY;
  heroImage.style.transform = `translateY(${Math.min(y * 0.03, 28)}px) scale(1.03)`;
};

window.addEventListener('scroll', updateHeroParallax, { passive: true });
window.addEventListener('load', updateHeroParallax);
