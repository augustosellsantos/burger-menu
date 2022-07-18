const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const close1 = document.querySelector('.close');

burger.addEventListener('click', () => {
    menu.classList.remove('active');
    close1.classList.remove('active');
    burger.classList.add('active')
});
close1.addEventListener('click', () => {
    menu.classList.add('active');
    close1.classList.add('active');
    burger.classList.remove('active');
});