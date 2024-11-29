// Get the background element
const background = document.getElementById('background');

// Create the hover-light effect div
const hoverLight = document.createElement('div');
hoverLight.className = 'hover-light';
background.appendChild(hoverLight);

// Update light position on mousemove
background.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Dynamically adjust the radial gradient position
    hoverLight.style.background = `radial-gradient(
    300px at ${x}px ${y}px,
    rgba(255, 255, 255, 0.08),
    transparent 80%
  )`;
});



document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".left-side a"); // Navigation links
    const sections = document.querySelectorAll(".right-side section"); // Sections in the right-side content
    const scrollableElement = document.querySelector(".right-side"); // Right-side container

    // Smooth scroll when clicking navigation links
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1); // Get section ID
            const targetSection = document.getElementById(targetId);

            // Smooth scroll to the target section
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Function to highlight the active section
    function highlightActiveSection() {
        let currentSection = "";

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            // Check if the section is in view
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = section.id;
            }
        });

        // Highlight the active link
        navLinks.forEach((link) => {
            const linkHref = link.getAttribute("href").substring(1);
            if (linkHref === currentSection) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Attach scroll event listener to the right-side container
    if (scrollableElement) {
        scrollableElement.addEventListener("scroll", () => {
            console.log("Scroll detected"); // Debugging scroll event
            highlightActiveSection();
        });
    }

    // Initial call to highlight the first section
    highlightActiveSection();
});



