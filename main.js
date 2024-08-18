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

const swiper3 = new Swiper(".life-swiper", {
      slidesPerView: 3,/*(一次呈現幾張)*/
      slidesPerGroup: 1,/*(一個群組內有幾張投影片)*/
      spaceBetween: 24,

      navigation: {
        nextEl: ".life-swiper-next",
        prevEl: ".life-swiper-prev"
      },
});

// const swiper4 = new Swiper(".proposal-Swiper", {
//   autoplay: {
//     delay: 3000,
//   },
//   breakpoints: {
//     996: {
//       autoplay: false, // 在這個中斷點上停止自動輪播
//     },
//   },
// });


let swiper4 = new Swiper(".proposal-Swiper", {
  autoplay: {
    delay: 3000,
  },
});

function handleResize() {
  if (window.innerWidth >= 996) {
    if (swiper4) {
      swiper4.destroy(true, true); // 完全銷毀 Swiper 實例
      swiper4 = null; // 清空 swiper4 變數
    }
  } else {
    if (!swiper4) {
      swiper4 = new Swiper(".proposal-Swiper", {
        autoplay: {
          delay: 3000,
        },
      });
    }
  }
}

// 初始化時檢查一次
handleResize();

// 當視窗大小改變時檢查
window.addEventListener('resize', handleResize);