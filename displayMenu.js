const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".close");
const bodyScroll = document.querySelector(".main");

menu.addEventListener("click", () => {
  nav.classList.add("nav--visible");
  menu.classList.add("menu--hidden");
  closeButton.classList.add("close--visible");
  bodyScroll.classList.add(".body--no-overflow");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("nav--visible");
  menu.classList.remove("menu--hidden");
  closeButton.classList.remove("close--visible");
  bodyScroll.classList.remove(".body--no-overflow");
});
