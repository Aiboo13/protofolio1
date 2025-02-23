// Add background class to the main element
document.querySelector('main').classList.add('background');

// Add class to all anchor tags
document.querySelectorAll('a').forEach(a => a.classList.add('a'));

// Initialize AOS (Animate On Scroll) with custom settings
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  delay: 200, // Delay before animation starts in milliseconds
});

// Auto close navbar on link click
document.querySelectorAll(".nav-link").forEach(item => {
  item.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

// Function to switch between dark and light modes
function toggleTheme() {
  const body = document.body;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const icon = themeToggleBtn.querySelector('i');
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Add event listener to the theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// build function sederhana
function build() {
  console.log('Hello World!');
}

// Call the build function
build();
