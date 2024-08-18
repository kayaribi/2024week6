// 引入其他依賴
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,/*(一次呈現幾張)*/
  slidesPerGroup: 1,/*(一個群組內有幾張投影片)*/
  spaceBetween: 24,
  // ***(分頁),
  pagination: {
    el: ".swiper-pagination-custom" /*(pagination)*/,
    type: "fraction",
  },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev"
    },

  breakpoints: {
    996: {
      slidesPerView: 2,/*(一次呈現幾張)*/
      slidesPerGroup: 2,/*(一個群組內有幾張投影片)*/
      spaceBetween: 48,
    },
  },
});

const swiper2 = new Swiper(".lookSwiper", {
  slidesPerView: 1,/*(一次呈現幾張)*/
  slidesPerGroup: 1,/*(一個群組內有幾張投影片)*/
  spaceBetween: 24,
  autoplay: {
    delay: 3000,
  },
});