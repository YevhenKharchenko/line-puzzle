const contextMenu = document.querySelector('.context-menu-backdrop');
const menuBtn = document.querySelector('.nav-btn');
const closeContextBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', onMenuButtonClick);

function onMenuButtonClick() {
  contextMenu.classList.add('is-open');
  document.body.classList.add('screen-freeze');
}

closeContextBtn.addEventListener('click', onCloseContextButtonClick);

function onCloseContextButtonClick() {
  contextMenu.classList.remove('is-open');
  document.body.classList.remove('screen-freeze');
}

document
  .querySelector('.context-menu-backdrop')
  .addEventListener('click', onContextMenuLinkClick);

function onContextMenuLinkClick(e) {
  if (
    e.target.nodeName === 'A' ||
    e.target.classList.contains('context-menu-backdrop')
  ) {
    onCloseContextButtonClick();
  }
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

document.addEventListener('DOMContentLoaded', () => {
  const isDesktop = window.innerWidth >= 1440;

  if (isDesktop) {
    const items = document.querySelectorAll(
      '.play-item-desktop-1, .play-item-desktop-2, .play-item-desktop-3, .play-item-desktop-4, .play-item-desktop-5, .play-item-desktop-6, .play-item-desktop-7, .play-item-desktop-8'
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (
              entry.target.classList.contains('play-item-desktop-1') ||
              entry.target.classList.contains('play-item-desktop-2') ||
              entry.target.classList.contains('play-item-desktop-3') ||
              entry.target.classList.contains('play-item-desktop-7') ||
              entry.target.classList.contains('play-item-desktop-8')
            ) {
              entry.target.classList.add('animate-left');
            } else if (
              entry.target.classList.contains('play-item-desktop-4') ||
              entry.target.classList.contains('play-item-desktop-5') ||
              entry.target.classList.contains('play-item-desktop-6')
            ) {
              entry.target.classList.add('animate-right');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach(item => {
      observer.observe(item);
    });
  }
});
