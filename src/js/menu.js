(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const bodyuRef = document.querySelector('body');
  const logo = document.querySelector('[data-logo]');
  const menuItem = document.querySelectorAll('.nav__link');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-active');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    bodyuRef.classList.toggle('no-scroll');
    logo.classList.toggle('menu-logo');
  });

  menuItem.forEach(link => {
    link.addEventListener('click', () => {
      bodyuRef.classList.toggle('no-scroll');
      mobileMenuRef.classList.toggle('is-open');
      menuBtnRef.classList.toggle('is-active');
      logo.classList.toggle('menu-logo');
    });
  });
})();
