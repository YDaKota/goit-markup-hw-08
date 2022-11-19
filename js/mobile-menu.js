/*
(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
  
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
  
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();
*/


(() => {
  const menuBtnOpen = document.querySelector("[data-menu-open]");
  const menuBtnClose = document.querySelector("[data-menu-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnOpen.addEventListener("click", () => {
    const expanded =
      menuBtnOpen.getAttribute("aria-expanded") === "true" || false;

    menuBtnOpen.classList.toggle("is-open");
    menuBtnOpen.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
  menuBtnClose.addEventListener("click", () => {
    const expanded =
      menuBtnClose.getAttribute("aria-expanded") === "true" || false;

    menuBtnClose.classList.toggle("is-open");
    menuBtnClose.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();


/*
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.mob-list'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  function removeMenu() {
    refs.menu.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();
*/