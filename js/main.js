const menuToggler = document.querySelector(".menu-toggler");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu__list");

menuToggler.addEventListener("click", () => {
  menu.classList.toggle("js-menu-show");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
