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

let startX,
  endX,
  isDragging = false;

function handleSwipe() {
  if (startX > endX) {
    changePlayItem(1);
  } else if (startX < endX) {
    changePlayItem(-1);
  }
}

playCarousel.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

playCarousel.addEventListener('touchmove', e => {
  if (!isDragging) return;
  endX = e.touches[0].clientX;
});

playCarousel.addEventListener('touchend', () => {
  if (!isDragging) return;
  handleSwipe();
  isDragging = false;
});

playCarousel.addEventListener('mousedown', e => {
  startX = e.clientX;
  isDragging = true;
  e.preventDefault();
});

playCarousel.addEventListener('mousemove', e => {
  if (!isDragging) return;
  endX = e.clientX;
});

playCarousel.addEventListener('mouseup', () => {
  if (!isDragging) return;
  handleSwipe();
  isDragging = false;
});

playCarousel.addEventListener('mouseleave', () => {
  if (isDragging) {
    handleSwipe();
    isDragging = false;
  }
});
