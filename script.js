// Logic for mobile menu animation
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let bar3 = document.getElementById('bar3');

function styleX() {
  bar1.style.transform = 'rotate(45deg) translate(.6em, 0)';
  bar2.hidden = true;
  bar3.style.transform = 'rotate(-46deg) translate(.6em, 0)';
}

function styleBurger() {
  bar1.style.transform = 'none';
  bar2.hidden = false;
  bar3.style.transform = 'none';
}
//logic for hamburger to X Menu animation
toggleButton.addEventListener('click', () => {
  if(navbarLinks.classList.toggle('active')) {
    styleX();
  }
  else {
    styleBurger();
  }
});

//UnseenCode logo appear and disapear functions
const navbarLogo = document.getElementById('navbar-logo');
const unseenLogo = document.getElementsByClassName('navbar-logo');

function vanishLogo() {
  navbarLogo.id= "vanish";
}

function appearLogo() {
  navbarLogo.id = unseenLogo;
}
//event listeners for desktop
navbarLogo.addEventListener('mouseover', vanishLogo);
navbarLogo.addEventListener('mouseout', appearLogo);
//event listeners for mobile
navbarLogo.addEventListener('touchstart', vanishLogo);
navbarLogo.addEventListener('touchstart', appearLogo);



