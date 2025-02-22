document.querySelector('main').classList.add('background');
document.querySelectorAll('a').forEach(a => a.classList.add('a'));

AOS.init({
  duration: 1000, // Animation duration
  delay: 200, // Delay in milliseconds
});

document.querySelectorAll(".nav-link").forEach(item => {
  item.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});