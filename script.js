const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('#nav-list a');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navList.classList.toggle('open');
});

navLinks.forEach(link => link.addEventListener('click', () => {
  navList.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));
