// animation for the burger menu
const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
});

burgerMenu.addEventListener('mouseenter', () => {
    burgerMenu.classList.add('active');
});

burgerMenu.addEventListener('mouseleave', () => {
    burgerMenu.classList.remove('active');  
})