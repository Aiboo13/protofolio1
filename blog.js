document.querySelector('main').classList.add('background')
document.querySelectorAll('a').classList.add('.a')

AOS:init();

document.querySelectorAll(".nav-link").forEach(item => {
  item.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});
document.querySelectorAll(".nav-link").forEach(item => {
  item.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});