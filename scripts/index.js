const navList = document.getElementById("header-nav-list");
const navToggle = document.getElementById("header-nav-toggle");
const navToggleImg = document.querySelector("#header-nav-toggle img");
const navLinks = document.querySelectorAll(".header__nav-link");
const footerForm = document.getElementById("footer-mail");
const footerFormInput = document.getElementById("footer-mail-input");
const footerFormBtn = document.getElementById("footer-mail-btn");
const slider = document.getElementById("main-testimonial-cards");
const dotsContainer = document.getElementById("main-testimonial-dots");
const slides = Array.from(slider.children);

/* ================ Functions ============== */

function toggleNavbar() {
  navList.classList.toggle("active");

  // Toggle between the hamburger & the close svg
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

/* =============== Slider =============== */

function updateDots() {
  dotsContainer.innerHTML = "";

  // Calculate how many items are visible at once
  const containerWidth = slider.clientWidth;
  const slideWidth = slides[0].getBoundingClientRect().width;
  const visibleItems = Math.round(containerWidth / slideWidth);

  // Calculate total pages/dots needed
  const totalDots = slides.length - visibleItems + 1;

  // Create dot buttons
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");

    // Scroll to position on dot click
    dot.addEventListener("click", () => {
      slider.scrollTo({
        left: i * (slideWidth + 16), // 16px is the grid gap
        behavior: "smooth",
      });
    });

    dotsContainer.appendChild(dot);
  }
}

// Sync active dot on scroll
slider.addEventListener("scroll", () => {
  const slideWidth = slides[0].getBoundingClientRect().width + 16;
  const activeIndex = Math.round(slider.scrollLeft / slideWidth);

  const dots = Array.from(dotsContainer.children);
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
  });
});

// Re-calculate dots on resize
window.addEventListener("resize", updateDots);

// Initial setup
updateDots();
