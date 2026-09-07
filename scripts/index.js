const navList = document.getElementById("header-nav-list");
const navToggle = document.getElementById("header-nav-toggle");
const navToggleImg = document.querySelector("#header-nav-toggle img");
const navLinks = document.querySelectorAll(".header__nav-link");
const footerForm = document.getElementById("footer-mail");
const footerFormInput = document.getElementById("footer-mail-input");
const footerFormBtn = document.getElementById("footer-mail-btn");

/* ================ Functions ============== */

function toggleNavbar() {
  navList.classList.toggle("active");

  if (navList.classList.contains("active")) {
    navToggleImg.src = "./assets/images/icon-close.svg";
  } else {
    navToggleImg.src = "./assets/images/icon-hamburger.svg";
  }
}

function closeNavbar() {
  navList.classList.remove("active");
  navToggleImg.src = "./assets/images/icon-hamburger.svg";
}

/* ================ Events ============== */

navToggle.addEventListener("click", toggleNavbar);
navLinks.forEach((navlink) => {
  navlink.addEventListener("click", closeNavbar);
});
