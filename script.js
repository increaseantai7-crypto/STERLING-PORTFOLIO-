// Sterling Portfolio
// Small interactions

document.addEventListener("DOMContentLoaded", () => {

  // Highlight the navigation link for the section
  // currently closest to the top of the screen.

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar nav a");

  window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }

    });

    navLinks.forEach((link) => {

      link.style.color = "";

      if (
        link.getAttribute("href") === `#${currentSection}`
      ) {
        link.style.color = "#38bdf8";
      }

    });

  });

});