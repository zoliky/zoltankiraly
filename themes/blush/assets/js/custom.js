"use strict";

// Menu
const menuToggleBtn = document.querySelector(".menu-toggle");
menuToggleBtn.addEventListener("click", event => {
  event.preventDefault();
  menuToggleBtn.parentElement.classList.toggle("open");
});