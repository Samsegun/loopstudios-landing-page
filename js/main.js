const toggleButton = document.querySelector(".toggle-button");
const closeButton = document.querySelector("#close-button");
const backDrop = document.querySelector(".backdrop");
const mobileNav = document.querySelector(".mobile-nav");

// action identifier
const ACTION = "close";

// a function for adding and removing action to or from classlist
function toggleMenu() {
  backDrop.classList.toggle(ACTION);
  mobileNav.classList.toggle(ACTION);
}

// event listeners for togglebutton, closebutton and backdrop
toggleButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);
backDrop.addEventListener("click", toggleMenu);
