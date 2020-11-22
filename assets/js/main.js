function imgSlider(anything) {
  document.querySelector('.pepsi').src = anything;
}
function changeColor(color) {
  const bgColor = document.querySelector('section');
  bgColor.style.background = color;
}

function openToggleMenu() {
  const toggleMenu = document.querySelector('.toggleMenu');
  const nav = document.querySelector('.header__nav');
  toggleMenu.classList.toggle('active');
  nav.classList.toggle('active');
}