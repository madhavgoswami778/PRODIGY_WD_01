// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to change navbar style on scroll
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
