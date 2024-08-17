// 引入其他依賴
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// 創建一個 script 標籤
const swiperScript = document.createElement('script');
swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';

// 將 script 標籤添加到 body 的末尾
document.body.appendChild(swiperScript);

// 等待 Swiper 資源加載完成
swiperScript.onload = () => {
  // 初始化 Swiper
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1, // 一次呈現幾張幻燈片
    slidesPerGroup: 1, // 每組包含幾張幻燈片
    spaceBetween: 24, // 幻燈片之間的間距
    
    pagination: {
      el: '.swiper-pagination-custom', // 分頁元素
      type: 'fraction', // 分頁類型
    },
    navigation: {
      nextEl: '.swiper-next', // 下一張按鈕
      prevEl: '.swiper-prev', // 上一張按鈕
    },

    breakpoints: {
        992: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 48,
        }
    }

  });

  // const swiper2 = new Swiper('.look-swiper', {
  //   slidesPerView: 1, // 一次呈現幾張幻燈片
  //   slidesPerGroup: 1, // 每組包含幾張幻燈片
  //   spaceBetween: 24, // 幻燈片之間的間距
    
  //   pagination: {
  //     el: '.swiper-pagination-custom', // 分頁元素
  //     type: 'fraction', // 分頁類型
  //   },
  //   navigation: {
  //     nextEl: '.swiper-next', // 下一張按鈕
  //     prevEl: '.swiper-prev', // 上一張按鈕
  //   },
  //   // autoplay: {
  //   //   delay: 2500,
  //   //   disableOnInteraction: false,
  //   // },

  //   breakpoints: {
  //       992: {
  //         slidesPerView: 1,
  //         slidesPerGroup: 1,
  //         spaceBetween: 48,
  //       }
  //   }

  // });

};