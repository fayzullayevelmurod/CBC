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

// header scroll state
const header = document.querySelector('.header');

const updateHeaderScroll = () => {
  if (!header) return;
  header.classList.toggle('scroll', window.scrollY > 0);
};

window.addEventListener('scroll', updateHeaderScroll);
window.addEventListener('load', updateHeaderScroll);

// coin_card
const cards = document.querySelectorAll(".coin-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
  });
});
// coin_card

// burger
const menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener("click", function () {
  document.body.classList.toggle("nav-open");

  document.querySelectorAll(".header_link, .connect_btn").forEach((item) => {
    item.classList.toggle("active");
  });
});
// burger

// hero_slider
const wrapper = document.querySelector(".hero_slider_wrap");
const slider = document.querySelector(".hero_slider");

if (wrapper && slider) {
  let isDragging = false;

  let startX = 0;

  let currentX = 0;

  let prevX = 0;

  let maxX = 0;

  let minX = 0;

  function calculateLimits() {
    const wrapperWidth = wrapper.offsetWidth;
    const sliderWidth = slider.scrollWidth;

    // o'ng tomondagi limit
    maxX = 0;

    // chap tomondagi limit
    minX = -(sliderWidth - wrapperWidth);

    // agar slider ekranga sig'sa
    if (minX > 0) {
      minX = 0;
    }
  }

  calculateLimits();

  window.addEventListener("resize", calculateLimits);

  slider.addEventListener("mousedown", startDrag);

  window.addEventListener("mousemove", drag);

  window.addEventListener("mouseup", endDrag);

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;

    prevX = currentX;

    slider.style.transition = "none";
  });

  slider.addEventListener("touchmove", (e) => {
    const x = e.touches[0].clientX;

    let move = x - startX;

    currentX = prevX + move;

    currentX = checkLimit(currentX);

    slider.style.transform = `translateX(${currentX}px)`;
  });

  slider.addEventListener("touchend", () => {
    slider.style.transition = "transform .35s ease";
  });

  function startDrag(e) {
    isDragging = true;

    startX = e.clientX;

    prevX = currentX;

    slider.style.transition = "none";
  }

  function drag(e) {
    if (!isDragging) return;

    let move = e.clientX - startX;

    currentX = prevX + move;

    currentX = checkLimit(currentX);

    slider.style.transform = `translateX(${currentX}px)`;
  }

  function endDrag() {
    isDragging = false;

    slider.style.transition = "transform .35s ease";
  }

  function checkLimit(value) {
    if (value > maxX) {
      return maxX;
    }

    if (value < minX) {
      return minX;
    }

    return value;
  }
}
// hero_slider


// partner
const partnersSlider = document.querySelector(".partners_in");

if (partnersSlider) {
  let isDragging = false;

  let startX = 0;

  let currentX = 0;

  let prevX = 0;

  let minX = 0;

  function calculateLimit() {
    const parentWidth = partnersSlider.parentElement.offsetWidth;

    const sliderWidth = partnersSlider.scrollWidth;

    minX = -(sliderWidth - parentWidth);

    if (minX > 0) {
      minX = 0;
    }
  }

  calculateLimit();

  window.addEventListener("resize", calculateLimit);

  partnersSlider.addEventListener("mousedown", (e) => {
    isDragging = true;

    startX = e.clientX;

    prevX = currentX;

    partnersSlider.style.transition = "none";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    let move = e.clientX - startX;

    currentX = prevX + move;

    if (currentX > 0) {
      currentX = 0;
    }

    if (currentX < minX) {
      currentX = minX;
    }

    partnersSlider.style.transform = `translateX(${currentX}px)`;
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;

    partnersSlider.style.transition = "transform .35s ease";
  });

  partnersSlider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;

    prevX = currentX;

    partnersSlider.style.transition = "none";
  });

  partnersSlider.addEventListener("touchmove", (e) => {
    let move = e.touches[0].clientX - startX;

    currentX = prevX + move;

    if (currentX > 0) {
      currentX = 0;
    }

    if (currentX < minX) {
      currentX = minX;
    }

    partnersSlider.style.transform = `translateX(${currentX}px)`;
  });

  partnersSlider.addEventListener("touchend", () => {
    partnersSlider.style.transition = "transform .35s ease";
  });
}
// partner
