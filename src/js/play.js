const playCarousel = document.querySelector('.play-carousel');
const playItems = document.querySelectorAll('.play-item');
const playDots = document.querySelectorAll('.play-dot');
let currentPlayIndex = 0;

document.getElementById('playLeftArrow').addEventListener('click', () => {
  changePlayItem(-1);
});

document.getElementById('playRightArrow').addEventListener('click', () => {
  changePlayItem(1);
});

function changePlayItem(direction) {
  playItems[currentPlayIndex].classList.remove('play-active');
  playDots[currentPlayIndex % playDots.length].classList.remove('play-active');

  currentPlayIndex =
    (currentPlayIndex + direction + playItems.length) % playItems.length;

  playItems[currentPlayIndex].classList.add('play-active');
  playDots[currentPlayIndex % playDots.length].classList.add('play-active');
}

function initPlayCarousel() {
  playItems[currentPlayIndex].classList.add('play-active');
  playDots[currentPlayIndex % playDots.length].classList.add('play-active');
}

initPlayCarousel();
