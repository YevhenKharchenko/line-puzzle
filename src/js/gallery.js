import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Initialize Swiper
// document.addEventListener('DOMContentLoaded', function () {
//   const swiper = new Swiper('.swiper-container', {
//     modules: [Navigation, Pagination],
//     loop: false, // Disable infinite loop to match your requirement
//     navigation: {
//       nextEl: '#rightArrow',
//       prevEl: '#leftArrow',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       renderBullet: function (index, className) {
//         return `<div class="${className} dot"></div>`;
//       },
//     },
//     slidesPerView: 1,
//     spaceBetween: 0,
//     grabCursor: true,
//     allowTouchMove: true,
//     breakpoints: {
//       1440: {
//         slidesPerView: 1, // Adjust for desktop if needed
//         spaceBetween: 0,
//       },
//     },
//   });
// });

const swiper = new Swiper('.swiper-container', {
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  allowTouchMove: true,
});

const dots = document.querySelectorAll('.dot');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function updateArrows() {
  leftArrow.disabled = swiper.isBeginning;
  rightArrow.disabled = swiper.isEnd;
}

swiper.on('slideChange', function () {
  updateDots(swiper.realIndex);
  updateArrows();
});

updateArrows();

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    swiper.slideTo(index);
  });
});

leftArrow.addEventListener('click', () => {
  swiper.slidePrev();
});

rightArrow.addEventListener('click', () => {
  swiper.slideNext();
});
