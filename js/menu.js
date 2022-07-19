(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mob-header__open-btn'),
    closeMenuBtn: document.querySelector('.mob-header__close-btn'),
    visibleMenu: document.querySelector('.mob-header__invisible-part'),
    invisibleMenu: document.querySelector('.mob-header__visible-part'),
    menuBackdrop: document.querySelector('.mob-menu__backdrop'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.visibleMenu.classList.toggle('is-hidden');
    refs.invisibleMenu.classList.toggle('is-hidden');
    refs.menuBackdrop.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
