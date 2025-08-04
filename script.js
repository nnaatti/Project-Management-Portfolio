const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
});
