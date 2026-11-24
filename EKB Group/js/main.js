
/* =========================================
   EKB GROUP — MAIN JAVASCRIPT
========================================= */

// Dynamic copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// Scroll reveal
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// Active navigation on scroll
const sections = document.querySelectorAll(
  "#home, #about, #divisions, #projects, #innovation"
);

const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const currentId = entry.target.id;

      navLinks.forEach((link) => {
        const linkTarget = link.getAttribute("href");

        link.classList.toggle(
          "active",
          linkTarget === `#${currentId}`
        );
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
