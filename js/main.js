const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu_mobile');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('menu_open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('menu_open');
    menuOpen = false;
  }
});

const arrow_next = document.getElementById("next_container")
console.log(arrow_next.scrollLeft, arrow_next.scrollTop);

arrow_next.addEventListener('click', () => {
  console.log("oui");
});