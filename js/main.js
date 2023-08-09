navbar = document.getElementById('nav');
nvaLogo = document.getElementById('nav-logo');

addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
        nvaLogo.setAttribute('src', './img/logo.png');
        navbar.setAttribute('data-bs-theme', 'light');
    } else {
        navbar.classList.remove('navbar-scrolled');
        nvaLogo.setAttribute('src', './img/logo-white.png');
        navbar.setAttribute('data-bs-theme', 'dark');
    }
});

