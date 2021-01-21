const nav_button = document.querySelector('.nav-button');
const nav_NAV = document.getElementsByTagName('nav')[0];

nav_button.addEventListener('click', () =>{
  nav_NAV.classList.toggle('active');
  nav_button.classList.toggle('rotated');
});