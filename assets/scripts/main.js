// roadmap
let swiper = new Swiper(".roadmapSwiper", {
  slidesPerView: 1.03,
  spaceBetween: 16,
  pagination: {
    el: ".roadmap-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
// roadmap

// coin_card
const cards = document.querySelectorAll(".coin-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
  });
});
// coin_card
