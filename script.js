const header = document.querySelector('header.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;

menuToggle?.addEventListener('click', () => {
  body.classList.toggle('menu-open');
});

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 20);
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.closest('.primary-nav') && !target.closest('.menu-toggle')) {
    body.classList.remove('menu-open');
  }
});
