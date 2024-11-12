
  // Initialize typing effect
var typed = new Typed('#typing-effect', {
    strings: ['Web Developer', 'Programmer', 'App Developer','Salesforce Developer'],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  });
  
  // Theme Toggle Function remains the same...
  
  // Theme Toggle Function
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const rootElement = document.documentElement;
  
  // Toggle between light and dark themes
  function toggleTheme() {
    rootElement.classList.toggle('dark-theme');
    updateButtonText();
  }
  
  // Update button text based on theme
  function updateButtonText() {
    if (rootElement.classList.contains('dark-theme')) {
      themeToggle.textContent = '☀️ Mode';
      themeToggleMobile.textContent = '☀️ Mode';
    } else {
      themeToggle.textContent = '🌙 Mode';
      themeToggleMobile.textContent = '🌙 Mode';
    }
  }
  
  // Attach event listeners to both desktop and mobile theme toggle buttons
  themeToggle.addEventListener('click', toggleTheme);
  themeToggleMobile.addEventListener('click', toggleTheme);
  
  // Set initial theme button text based on default theme
  updateButtonText();
  
  // for image 
  // Get references to the image container and the image
const heroImageContainer = document.getElementById("heroImageContainer");
const heroImage = document.getElementById("heroImage");

// Add an event listener for mouse movement within the container
heroImageContainer.addEventListener("mousemove", (e) => {
  // Get the dimensions and position of the container
  const rect = heroImageContainer.getBoundingClientRect();

  // Calculate the cursor's position relative to the center of the container
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  // Calculate rotation based on cursor position (adjust values for desired effect)
  const rotateX = -y / 20; // Dividing to control intensity
  const rotateY = x / 20;

  // Apply the rotation to the image
  heroImage.style.transform = `rotateX(${rotateX+10}deg) rotateY(${-rotateY-10}deg) translateX(${rotateX}px)`;
});

// Reset rotation when the mouse leaves the container
heroImageContainer.addEventListener("mouseleave", () => {
  heroImage.style.transform = "rotateX(0deg) rotateY(0deg)";
});

// tools
document.querySelectorAll('.tool-tabs button').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    document.querySelectorAll('.tool-item').forEach(item => {
      item.style.display = category === 'all' || item.getAttribute('data-category') === category ? 'block' : 'none';
    });
  });
});




