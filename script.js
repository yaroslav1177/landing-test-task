document.addEventListener("DOMContentLoaded", function() {
  const aboutSection = document.querySelector('.about');
  const advantagesSection = document.querySelector('.advantages');
  const whyUsSection = document.querySelector('.why-us');
  const stakeSection = document.querySelector('.stake');

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1
  });

  observer.observe(aboutSection);
  observer.observe(advantagesSection);
  observer.observe(whyUsSection);
  observer.observe(stakeSection);
});

document.addEventListener('DOMContentLoaded', function() {
  const burgerIcon = document.querySelector('.top-bar__burger a');
  const menu = document.getElementById('menu');
  const closeIcon = menu.querySelector('.top-bar__burger a');

  burgerIcon.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.add('active');
  });

  closeIcon.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.navigation__link');

  links.forEach(link => {
    link.addEventListener('click', function() {
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttonOpen = document.querySelector('.header-content__button'); 
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
    navigator.clipboard.writeText(code).then(() => {
      alert('Address copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  });
});

