let headerBurger = document.querySelector('.header__burger');
let body = document.querySelector('body');
let headerMenu = document.querySelector('.header__menu');
let headerList = document.querySelector('.menu__list');

headerBurger.onclick = function() {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
}

headerList.onclick = function() {
    headerMenu.classList.remove('active');
    headerBurger.classList.remove('active');
    body.classList.toggle('lock');
}