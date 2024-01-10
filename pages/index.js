const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 24,

  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    940: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
