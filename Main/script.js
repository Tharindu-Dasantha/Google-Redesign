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

// Adding letter or a profile pic to the profile icon
// later add the function to add an image as the profile picture
const profileElement = document.querySelector('.shortcutItems_navbar_profile');
const profileInitials = document.querySelector('.profile-initials');

// set the initials as the profile pic
let initials = "TD";
profileInitials.textContent = initials;


