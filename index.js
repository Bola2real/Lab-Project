// Smooth scroll for internal navigation
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple shimmer effect on hero CTA button
const ctaButton = document.querySelector('.cta');
ctaButton.addEventListener('mouseenter', () => {
  ctaButton.style.boxShadow = '0 0 20px rgba(255, 192, 203, 0.6)';
});
ctaButton.addEventListener('mouseleave', () => {
  ctaButton.style.boxShadow = 'none';
});

// Simulate floating petals effect
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

setInterval(createPetal, 1000);

// Add minimal petal styles
const style = document.createElement('style');
style.textContent = `
  .petal {
    position: fixed;
    top: -10px;
    width: 10px;
    height: 10px;
    background: rgba(255, 182, 193, 0.7);
    border-radius: 50%;
    animation: fall 10s linear infinite;
    pointer-events: none;
    z-index: 9999;
  }

  @keyframes fall {
    to {
      transform: translateY(110vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

