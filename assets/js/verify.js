const dateInput = document.getElementById("preferredDate");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

// Validation functions
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  // UK mobile numbers starting with 07
  const re = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
  return re.test(phone);
}

// Popup function
function showPopup() {
  const popup = document.getElementById("successPopup");
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 4000);
}

// Form submit listener
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Validate email & phone
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!validatePhone(phone)) {
      alert("Please enter a valid UK phone number");
      return;
    }

    // Prepare form data (no need to append access_key since it's in HTML)
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        form.reset();
        showPopup(); // show success popup
      } else {
        alert("Failed to send the form. " + (result.message || ""));
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
  });
