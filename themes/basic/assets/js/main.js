"use strict";

// Babel
//const isBabel = !(class {}.toString().indexOf('class ') === 0);
//console.log("Babel enabled:", isBabel);

// Menu
const menuToggleBtn = document.querySelector(".menu-toggle");
menuToggleBtn.addEventListener("click", event => {
  event.preventDefault();
  menuToggleBtn.parentElement.classList.toggle("toggled-on");
});

const dropdownToggleBtn = document.querySelectorAll(".dropdown-toggle");
dropdownToggleBtn.forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault();
    item.classList.toggle("toggled-on");
    item.nextElementSibling.classList.toggle("toggled-on");
  });
});