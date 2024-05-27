document.addEventListener("DOMContentLoaded", function () {
  let anoAtual = new Date().getFullYear();
  document.querySelector("#ano").textContent = anoAtual;
});

const menuLogo = document.querySelector(".nav_button_logo");
const menuLink = document.querySelector(".nav_menu_ul");
const body = document.querySelector("body");

menuLogo.addEventListener("click", () => {
  menuLink.classList.toggle("active");
  body.classList.toggle("cor");
});

menuLink.addEventListener("click", () => {
  menuLink.classList.remove("active");
  body.classList.remove("cor");
});

document.addEventListener("click", (evento) => {
  if (!menuLink.contains(evento.target) && !menuLogo.contains(evento.target)) {
    menuLink.classList.remove("active");
    body.classList.remove("cor");
  }
});
