const navBtn = document.querySelector('.nav-btn');
const menu = document.querySelector('.nav');
const burger = document.querySelector('.nav-burger');

navBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
  // debugger;
  if (burger.classList.contains('open')){
    burger.classList.remove('open');
  }
  else {
    burger.classList.add('open');
  }
}
