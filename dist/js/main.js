document.addEventListener(
  'DOMContentLoaded', () =>
  {
    //toggling menu business
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


    //page jumps horizontally or veritcally
    let width = document.documentElement.clientWidth;
    let scroller;

    const setScroller = (width) => {
      if (width < 820){
        console.log("screen is narrow. scroll vertically")
        scroller = new SweetScroll({
          horizontal: false, 
          vertical: true,
          offset: -70
          }, window
        );
      } else {
        console.log("screen is wide. scroll horizontally")
        scroller = new SweetScroll({
          horizontal: true, 
          vertical: false,
          offset: -80
          }, "#wrapper"
        );
      }
    }


    setScroller(width);

    window.addEventListener('resize', () =>{
      width = document.documentElement.clientWidth;
      scroller.destroy();
      setScroller(width);
    }); 

    //     scrollContainer.addEventListener("wheel", (evt) => {
    //       evt.preventDefault();
    //       scrollContainer.scrollLeft += (evt.deltaY + evt.deltaX);
    //     });
        

  },
  false,
);