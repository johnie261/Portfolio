const menu = document.querySelector('#menuBttn');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.headr .logo .log');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    logo.classList.toggle('active');

});


document.querySelectorAll('.links').forEach(link => link.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}));
