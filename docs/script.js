const nav = document.querySelector(".site-nav");
const heroImage = document.querySelector(".hero-image");
const revealItems = document.querySelectorAll(".reveal");

function updateChrome() {
  const scrollY = window.scrollY || 0;
  nav.classList.toggle("is-scrolled", scrollY > 18);

  if (heroImage && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const progress = Math.min(scrollY / Math.max(window.innerHeight, 1), 1);
    document.documentElement.style.setProperty("--scroll", progress.toFixed(3));
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
);

revealItems.forEach((item) => observer.observe(item));
updateChrome();
window.addEventListener("scroll", updateChrome, { passive: true });
