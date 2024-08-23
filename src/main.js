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
