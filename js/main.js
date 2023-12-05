navbar = document.getElementById('nav');
navLogo = document.getElementById('nav-logo');
navbarJoinBtn = document.getElementById('navbar-join-btn');

addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
        navLogo.setAttribute('src', './img/logo.png');
        navbar.setAttribute('data-bs-theme', 'light');
        navbarJoinBtn.classList.remove('btn-outline-light');
        navbarJoinBtn.classList.add('btn-outline-primary');
    } else {
        navbar.classList.remove('navbar-scrolled');
        navLogo.setAttribute('src', './img/logo-white.png');
        navbar.setAttribute('data-bs-theme', 'dark');
        navbarJoinBtn.classList.remove('btn-outline-primary');
        navbarJoinBtn.classList.add('btn-outline-light');
    }
});

