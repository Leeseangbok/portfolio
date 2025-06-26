document.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelectorAll(".content");
      const navLinks = document.querySelectorAll(".nav-link");
      const mainWrapper = document.querySelector(".main-wrapper");

      const makeActive = (link) => {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
        });
        link.classList.add("active");
      };

      // Set the "Home" link as active by default
      if (navLinks.length > 0) {
        makeActive(navLinks[0]);
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const link = document.querySelector(
                `.nav-link[href="#${entry.target.id}"]`
              );
              if (link) {
                makeActive(link);
              }
            }
          });
        },
        {
          root: mainWrapper,
          threshold: 0.5, // Triggers when 50% of the section is visible
        }
      );

      sections.forEach((section) => {
        observer.observe(section);
      });
    });