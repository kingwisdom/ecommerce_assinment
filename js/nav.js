document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navbar = document.querySelector('ul.navbar');

    mobileMenuToggle.addEventListener('click', function () {
        navbar.classList.toggle('show-mobile-menu');
    });
});