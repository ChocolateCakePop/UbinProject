// Preloader
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// Smooth scroll
function scrollToSection() {
  document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' });
}

// Lazy load background images
document.addEventListener("DOMContentLoaded", () => {
  const lazyBackgrounds = document.querySelectorAll("[data-bg]");
  lazyBackgrounds.forEach(el => {
    const bg = el.getAttribute("data-bg");
    el.style.backgroundImage = `url(${bg})`;
  });
});

// Animate hero text (if needed)
const els = document.querySelectorAll('[data-animate]');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
els.forEach(el => io.observe(el));

// Scroll Indicators
const sections = document.querySelectorAll('.section');
const dots = document.querySelectorAll('.scroll-indicators .dot');

window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      current = section.id;
    }
  });

  dots.forEach(dot => {
    dot.classList.remove('active');
    if (dot.getAttribute('href').includes(current)) {
      dot.classList.add('active');
    }
  });
});
