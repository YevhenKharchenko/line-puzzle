const contextMenu = document.querySelector('.context-menu');
const menuBtn = document.querySelector('.nav-btn');
const closeContextBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', onMenuButtonClick);

function onMenuButtonClick() {
  contextMenu.classList.add('is-open');
}

closeContextBtn.addEventListener('click', onCloseContextButtonClick);

function onCloseContextButtonClick() {
  contextMenu.classList.remove('is-open');
}

let currentIndex = 0;
const items = document.querySelectorAll('.gallery-item');
const dots = document.querySelectorAll('.dot');

document.getElementById('leftArrow').addEventListener('click', () => {
  changeItem(-1);
});

document.getElementById('rightArrow').addEventListener('click', () => {
  changeItem(1);
});

function changeItem(direction) {
  items[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');

  currentIndex = (currentIndex + direction + items.length) % items.length;

  items[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

function initCarousel() {
  items[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

initCarousel();
