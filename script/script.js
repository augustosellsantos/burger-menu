const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const active = document.querySelector('#burger');

active.addEventListener('click', () => {
    close.classList.add('active')
});