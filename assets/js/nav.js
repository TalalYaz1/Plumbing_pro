// Mobile menu toggle logic
const mobileMenu = document.getElementById("mobile-menu");
const offscreenMenu = document.querySelector(".off-screen");

mobileMenu.addEventListener("click", () => {
  console.log("Hamburger clicked");
  mobileMenu.classList.toggle("active");
  offscreenMenu.classList.toggle("active");
});

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      form.reset(); // clear the form
      showPopup(); // show the success popup
    } else {
      alert("Something went wrong: " + result.message);
    }
  });

function showPopup() {
  const popup = document.getElementById("successPopup");
  popup.style.display = "block";

  // Auto-hide after 4 seconds
  setTimeout(() => {
    popup.style.display = "none";
  }, 4000);
}
