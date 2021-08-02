const navBtn = document.querySelector('.nav-btn');
const burger = document.querySelector('.nav-burger');
const menu = document.querySelector('.nav');
const menuBox = document.querySelector('.nav-menu');
const menuItem = document.querySelectorAll('.nav-menu__item');


navBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
  // debugger;
  if (burger.classList.contains('open')){
    burger.classList.remove('open');
    menu.classList.remove('open');
    menuBox.classList.remove('open');
    menuItem.forEach(item => item.classList.remove('open'));
  }
  else {
    burger.classList.add('open');
    menu.classList.add('open');
    menuBox.classList.add('open');
    menuItem.forEach(item => item.classList.add('open'));
  }
}
