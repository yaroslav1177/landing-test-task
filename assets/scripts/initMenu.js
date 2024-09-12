export const initMenu = () => {
  const burgerIcon = document.querySelector('.top-bar__burger a');
  const menu = document.getElementById('menu');
  const closeIcon = menu.querySelector('.top-bar__burger a');

  burgerIcon.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.add('active');
  });

  closeIcon.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.remove('active');
  });
};
