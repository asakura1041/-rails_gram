var cover = document.querySelector('.cover');
var cross = document.querySelector('.fa-times');
var burger = document.querySelector('.navbar-burger');
var headerMenu = document.querySelector('.header-menu-sp');


burger.addEventListener('click', () => {
    cover.style.display = 'block';
    headerMenu.style.right = '0px';
});

cross.addEventListener('click', () => {
    cover.style.display = 'none';
    headerMenu.style.right = '-300px';
});

cover.addEventListener('click', () => {
    cross.click();
});