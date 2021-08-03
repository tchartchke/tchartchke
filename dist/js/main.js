const navBtn = document.querySelector('.nav-btn');
const burger = document.querySelector('.nav-burger');
const menu = document.querySelector('.nav');
const menuBox = document.querySelector('.nav-menu');
const menuItem = document.querySelectorAll('.nav-menu__item');
const links = document.querySelectorAll('.nav-menu__link');

function toggleMenu() {
  if (burger.classList.contains('open')){
    closeMenu()
  }
  else {
    burger.classList.add('open');
    menu.classList.add('open');
    menuBox.classList.add('open');
    menuItem.forEach(item => item.classList.add('open'));
  }
}

function closeMenu(){
  burger.classList.remove('open');
  menu.classList.remove('open');
  menuBox.classList.remove('open');
  menuItem.forEach(item => item.classList.remove('open'));
}


navBtn.addEventListener('click', toggleMenu);

links.forEach(link => link.addEventListener('click', (e) => {
  e.preventDefault();
  closeMenu();
  
  const offset = 55;
  const sec = document.querySelector(`.${e.target.name}`)
  
  window.scroll({ top: (sec.offsetTop - offset), left: 0, behavior: 'smooth' });

  

}))
