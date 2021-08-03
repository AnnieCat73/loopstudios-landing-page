const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav .menu");
const exitBtn = document.querySelector(".top-menu .exit-btn");



//Slides into menu
menuBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
});

//Slides out of menu
exitBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";
});