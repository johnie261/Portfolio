const menu = document.querySelector('#menuBttn');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  menu.classList.toggle('active');
  navbar.classList.toggle('active');
});

document.querySelectorAll('.links').forEach((link) => link.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  menu.classList.remove('active');
}));
