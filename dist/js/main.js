document.addEventListener(
  'DOMContentLoaded', () =>
  {
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
 
      closeMenu();
      
    }));

    let windowWidth = window.screen.width;
    let scroller;
    setScroller();

    window.addEventListener('resize', setScroller); 
    function setScroller() {
      if (windowWidth < 820) {
        scroller = new SweetScroll({
          horizontal: false,
          vertical: true,
          offset: -60,
        }, window);
      } else {
        scroller = new SweetScroll({
          horizontal: true,
          vertical: false,
          offset: -70,
        }, "#wrapper");


        const scrollContainer = document.querySelector(".wrapper");

        scrollContainer.addEventListener("wheel", (evt) => {
          // debugger;
          evt.preventDefault();
          scrollContainer.scrollLeft += (evt.deltaY + evt.deltaX);
        });
        
      }
    }


  },
  false,
);