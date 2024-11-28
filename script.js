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
