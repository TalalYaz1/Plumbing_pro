// Mobile menu toggle logic
const mobileMenu = document.getElementById("mobile-menu");
const offscreenMenu = document.querySelector(".off-screen");

mobileMenu.addEventListener("click", () => {
  console.log("Hamburger clicked");
  mobileMenu.classList.toggle("active");
  offscreenMenu.classList.toggle("active");
});

// Reviews

const reviewData = {
  reviews: [
    {
      author_name: "Ahmed",
      rating: 5,
      text: "Ibrahim recently replaced both our kitchen and shower taps, and we couldn't be happier with the service. He was punctual, professional, and completed the job with great attention to detail. The new taps look fantastic, and we haven't had any issues since the installation. I highly recommend Ibrahim for any plumbing needs!",
    },
    {
      author_name: "Iliyas A.",
      rating: 5,
      text: "Ibrahim did a great job replacing our toilet! Quick, efficient, and no mess. Highly recommend!",
    },
    {
      author_name: "Rawaz A.",
      rating: 5,
      text: "Ibrahim recently replaced my basin tap, and I couldn't be happier with the service. From the start, he was professional, arriving on time and fully prepared for the job. He quickly assessed the situation, explained the replacement process clearly, and got to work efficiently. What impressed me most was his attention to detail and the care he took to ensure everything was perfectly installed.",
    },
    {
      author_name: "David R.",
      rating: 5,
      text: "Ibrahim is a lifesaver! He quickly cleared a blocked sink in our shisha lounge with no fuss. Top-notch service!",
    },
    {
      author_name: "Fatima Z.",
      rating: 5,
      text: "Had our entire central heating system upgraded by Plumbers Pro. The engineers were very knowledgeable and did a neat, tidy job. Great communication from start to finish.",
      time_description: "4 months ago",
    },
  ],
};

let currentReviewIndex = 0;
const reviewBoxDesktop = document.getElementById("review-box");
const reviewBoxMobile = document.getElementById("review-box-mobile");

function showReview(index) {
  const { author_name, rating, text, time_description } =
    reviewData.reviews[index];

  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "★" : "☆";
  }

  const reviewHTML = `
    <div class="review-author">${author_name}</div>
    <div class="review-stars">${stars}</div>
    <div class="review-text">"${text}"</div>
  
  `;

  if (reviewBoxDesktop) reviewBoxDesktop.innerHTML = reviewHTML;
  if (reviewBoxMobile) reviewBoxMobile.innerHTML = reviewHTML;
}

// Initial display
showReview(currentReviewIndex);
reviewBoxDesktop?.classList.add("visible");
reviewBoxMobile?.classList.add("visible");

// Rotate reviews every 10s
setInterval(() => {
  reviewBoxDesktop?.classList.remove("visible");
  reviewBoxMobile?.classList.remove("visible");

  setTimeout(() => {
    currentReviewIndex = (currentReviewIndex + 1) % reviewData.reviews.length;
    showReview(currentReviewIndex);
    reviewBoxDesktop?.classList.add("visible");
    reviewBoxMobile?.classList.add("visible");
  }, 500);
}, 10000);

// Accordion toggle logic (if you're still using it)
document.querySelectorAll(".accordion .item").forEach((item) => {
  item.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion .item.open");

    if (openItem && openItem !== item) {
      openItem.classList.remove("open");
    }

    item.classList.toggle("open");
  });
});
