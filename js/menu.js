const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
const overlay = document.getElementById('navOverlay');

function openMenu() {
    hamburger.classList.add('is-open');
    mainNav.classList.add('is-open');
    overlay.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    hamburger.classList.remove('is-open');
    mainNav.classList.remove('is-open');
    overlay.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () =>
    mainNav.classList.contains('is-open') ? closeMenu() : openMenu()
);

overlay.addEventListener('click', closeMenu);

mainNav.querySelectorAll('.header__link').forEach(link =>
    link.addEventListener('click', closeMenu)
);

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
});