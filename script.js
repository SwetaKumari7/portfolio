document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     MOBILE NAVIGATION
  ================================= */

  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector("nav");

  if (menuButton && nav) {
      menuButton.addEventListener("click", () => {
          nav.classList.toggle("show");

          const icon = menuButton.querySelector("i");

          if (icon) {
              if (nav.classList.contains("show")) {
                  icon.classList.remove("fa-bars");
                  icon.classList.add("fa-xmark");
              } else {
                  icon.classList.remove("fa-xmark");
                  icon.classList.add("fa-bars");
              }
          }
      });

      /* Close menu after clicking a navigation link */

      nav.querySelectorAll("a").forEach(link => {
          link.addEventListener("click", () => {
              nav.classList.remove("show");

              const icon = menuButton.querySelector("i");

              if (icon) {
                  icon.classList.remove("fa-xmark");
                  icon.classList.add("fa-bars");
              }
          });
      });
  }


  /* ================================
     ACTIVE NAVIGATION LINK
  ================================= */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  const updateActiveLink = () => {

      let currentSection = "";

      sections.forEach(section => {

          const sectionTop = section.offsetTop - 140;
          const sectionHeight = section.offsetHeight;

          if (
              window.scrollY >= sectionTop &&
              window.scrollY < sectionTop + sectionHeight
          ) {
              currentSection = section.getAttribute("id");
          }
      });

      navLinks.forEach(link => {

          link.classList.remove("active");

          const href = link.getAttribute("href");

          if (href === `#${currentSection}`) {
              link.classList.add("active");
          }
      });
  };

  window.addEventListener("scroll", updateActiveLink);

  updateActiveLink();


  /* ================================
     TYPING EFFECT
  ================================= */

  const typingElement = document.querySelector(".typing-text");

  if (typingElement) {

      const texts = [
          "Python Developer",
          "AI / ML Enthusiast",
          "Computer Vision Developer",
          "Cybersecurity Enthusiast",
          "Open Source Enthusiast"
      ];

      let textIndex = 0;
      let characterIndex = 0;
      let deleting = false;

      const typeEffect = () => {

          const currentText = texts[textIndex];

          if (!deleting) {

              typingElement.textContent =
                  currentText.substring(0, characterIndex + 1);

              characterIndex++;

              if (characterIndex === currentText.length) {
                  deleting = true;

                  setTimeout(typeEffect, 1600);
                  return;
              }

          } else {

              typingElement.textContent =
                  currentText.substring(0, characterIndex - 1);

              characterIndex--;

              if (characterIndex === 0) {
                  deleting = false;

                  textIndex++;

                  if (textIndex >= texts.length) {
                      textIndex = 0;
                  }
              }
          }

          setTimeout(
              typeEffect,
              deleting ? 45 : 80
          );
      };

      typeEffect();
  }


  /* ================================
     REVEAL ON SCROLL
  ================================= */

  const revealElements = document.querySelectorAll(
      ".skill-category, .project-card, .experience-card, .research-card, .achievement-card, .opensource-card"
  );

  const revealObserver = new IntersectionObserver(
      entries => {

          entries.forEach(entry => {

              if (entry.isIntersecting) {

                  entry.target.style.opacity = "1";
                  entry.target.style.transform = "translateY(0)";

                  revealObserver.unobserve(entry.target);
              }
          });

      },
      {
          threshold: 0.12
      }
  );

  revealElements.forEach(element => {

      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition =
          "opacity 0.6s ease, transform 0.6s ease";

      revealObserver.observe(element);
  });


  /* ================================
     CURRENT YEAR
  ================================= */

  const yearElement = document.querySelector(".current-year");

  if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
  }

});