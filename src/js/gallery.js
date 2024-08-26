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
