export const initPopUp = () => {
  const buttonOpen = document.querySelector('.button');
  const overlay = document.querySelector('.overlay');
  const popUpCloseButton = document.querySelector('.pop-up__button');
  const copyIcon = document.querySelector('.copy-icon');
  const popUpCode = document.querySelector('.pop-up__code');

  buttonOpen.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === popUpCloseButton) {
      overlay.classList.remove('active');
    }
  });

  copyIcon.addEventListener('click', () => {
    const code = popUpCode.textContent;
    navigator.clipboard.writeText(code)
      .then(() => alert('Address copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err));
  });
};
