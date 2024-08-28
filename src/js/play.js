import Swiper from 'swiper';
import 'swiper/css/bundle';

const playSwiper = new Swiper('.play-swiper-container', {
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
  navigation: {
    nextEl: '#playRightArrow',
    prevEl: '#playLeftArrow',
  },
});

const playLeftArrow = document.getElementById('playLeftArrow');
const playRightArrow = document.getElementById('playRightArrow');
const playDots = document.querySelectorAll('.play-dot');

function updatePlayDots(index) {
  let startIndex;

  if (index === 0) {
    startIndex = 0;
  } else if (index === playSwiper.slides.length - 1) {
    startIndex = index - 2;
  } else {
    startIndex = index - 1;
  }

  playDots.forEach((dot, i) => {
    const slideIndex = startIndex + i;
    dot.classList.toggle('active', slideIndex === index);
    dot.style.display = 'inline-block';
    dot.dataset.slideIndex = slideIndex;
  });
}

function updatePlayArrows() {
  playLeftArrow.disabled = playSwiper.isBeginning;
  playRightArrow.disabled = playSwiper.isEnd;
}

playSwiper.on('slideChange', function () {
  updatePlayDots(playSwiper.realIndex);
  updatePlayArrows();
});

updatePlayArrows();
updatePlayDots(playSwiper.realIndex);

playDots.forEach(dot => {
  dot.addEventListener('click', () => {
    const slideIndex = parseInt(dot.dataset.slideIndex, 10);
    playSwiper.slideTo(slideIndex);
  });
});

playLeftArrow.addEventListener('click', () => {
  playSwiper.slidePrev();
});

playRightArrow.addEventListener('click', () => {
  playSwiper.slideNext();
});
