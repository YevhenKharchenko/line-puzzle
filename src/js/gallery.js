import Swiper from 'swiper';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 12,
  grabCursor: true,
  allowTouchMove: true,
  centeredSlides: true,
  speed: 500,
  breakpoints: {
    1440: {
      spaceBetween: 24,
    },
  },
  navigation: {
    nextEl: '#rightArrow',
    prevEl: '#leftArrow',
  },
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
