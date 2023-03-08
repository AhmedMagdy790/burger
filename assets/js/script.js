const menuToggle = document.querySelector('[menu-toggle-btn]');
const navbar     = document.querySelector('.navbar');
const closeMenu     = document.querySelector('.close-menu');


menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
closeMenu.addEventListener('click', () => {
    navbar.classList.remove('active');
})

window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
})