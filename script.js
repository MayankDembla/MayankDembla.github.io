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

// Function to highlight active section
function highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('a');

    let currentSection = '';

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id;
        }
    });

    links.forEach((link) => {
        const linkHref = link.getAttribute('href').substring(1); // Remove "#" symbol
        if (linkHref === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', highlightActiveSection);

// Call the function on load to highlight the initial section
highlightActiveSection();

