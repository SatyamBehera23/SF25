// Mobile Menu Toggle
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const mobileMenu = document.querySelector('.nav-links-mobile');

    navbar.classList.toggle('active');
    mobileMenu.classList.toggle('open');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar').classList.remove('active');
        document.querySelector('.nav-links-mobile').classList.remove('open');
    });
});
