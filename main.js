const hambger = document.querySelector('#nav-menus');
const menu = document.querySelector('#menu-icon');
const closex = document.querySelector('.menu');
const list = document.querySelectorAll('.items');

hambger.addEventListener('click', () => {
  hambger.classList.add('hide');
  menu.classList.add('show');
});

closex.addEventListener('click', () => {
  hambger.classList.remove('hide');
  menu.classList.remove('show');
});

Array.from(list).forEach((item) => {
  item.addEventListener('click', () => {
    hambger.classList.remove('hide');
    menu.classList.remove('show');
  });
});
