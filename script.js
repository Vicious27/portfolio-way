const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
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
//event listeners
navbarLogo.addEventListener('mouseover', appearLogo);
navbarLogo.addEventListener('click', vanishLogo);


