// Mobile menu toggle logic
const mobileMenu = document.getElementById("mobile-menu");
const offscreenMenu = document.querySelector(".off-screen");

mobileMenu.addEventListener("click", () => {
  console.log("Hamburger clicked");
  mobileMenu.classList.toggle("active");
  offscreenMenu.classList.toggle("active");
});
