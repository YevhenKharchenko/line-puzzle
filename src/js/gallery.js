let currentIndex = 0;
const items = document.querySelectorAll('.gallery-item');
const dots = document.querySelectorAll('.dot');
const carousel = document.querySelector('.gallery-carousel');

document.getElementById('leftArrow').addEventListener('click', () => {
  changeItem(-1);
});

document.getElementById('rightArrow').addEventListener('click', () => {
  changeItem(1);
});

function changeItem(direction) {
  currentIndex = (currentIndex + direction + items.length) % items.length;

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function initCarousel() {
  dots[currentIndex].classList.add('active');
}

initCarousel();

let startX,
  endX,
  isDragging = false;

function handleSwipe() {
  if (startX > endX) {
    changeItem(1);
  } else if (startX < endX) {
    changeItem(-1);
  }
}

carousel.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

carousel.addEventListener('touchmove', e => {
  if (!isDragging) return;
  endX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', () => {
  if (!isDragging) return;
  handleSwipe();
  isDragging = false;
});

carousel.addEventListener('mousedown', e => {
  startX = e.clientX;
  isDragging = true;
  e.preventDefault();
});

carousel.addEventListener('mousemove', e => {
  if (!isDragging) return;
  endX = e.clientX;
});

carousel.addEventListener('mouseup', () => {
  if (!isDragging) return;
  handleSwipe();
  isDragging = false;
});

carousel.addEventListener('mouseleave', () => {
  if (isDragging) {
    handleSwipe();
    isDragging = false;
  }
});
