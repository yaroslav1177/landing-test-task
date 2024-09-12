export const initActiveLink = () => {
  const links = document.querySelectorAll('.navigation__link');

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      links.forEach(link => link.classList.remove('active'));
      event.currentTarget.classList.add('active');
    });
  });
};
