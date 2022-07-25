//navigation
var menuOpen = document.querySelector(".side-open");
var menuClose = document.querySelector(".side-close");
var menu = document.querySelector(".nav__menu");
//open menu
menuOpen.addEventListener("click", () => {
  menu.style.display = "flex";
  menuClose.style.display = "inline-block";
  menuOpen.style.display = "none";
});
//close menu
menuClose.addEventListener("click", () => {
  menu.style.display = "none";
  menuOpen.style.display = "inline-block";
  menuClose.style.display = "none";
});
