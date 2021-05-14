const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const rightNav = document.querySelector('.rightNav');
const navList = document.querySelector('.nav-list');


burger.addEventListener('click', () =>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})