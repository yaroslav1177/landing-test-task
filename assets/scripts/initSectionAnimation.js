export const initSectionAnimation = () => {
  const aboutSection = document.querySelector('.about');
  const advantagesSection = document.querySelector('.advantages');
  const whyUsSection = document.querySelector('.why-us');
  const stakeSection = document.querySelector('.stake');

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1
  });

  observer.observe(aboutSection);
  observer.observe(advantagesSection);
  observer.observe(whyUsSection);
  observer.observe(stakeSection);
};
