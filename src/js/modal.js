(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    mobileMenuRef: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
    refs.mobileMenuRef.classList.toggle('is-open');
  }
})();


// Modal About
(() => {
  const refsAbout = {
    openModalBtnAbout: document.querySelectorAll('[data-about-open]'),
    // closeModalBtn: document.querySelector('[data-about-close]'),
    // modal: document.querySelector('[data-about-menu]'),
    // mobileMenuRef: document.querySelector('[data-menu]'),
  };

  refsAbout.openModalBtnAbout.addEventListener('click', toggleModal);
  // refsAbout.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
    // refs.modal.classList.toggle('is-hidden');
    // refs.mobileMenuRef.classList.toggle('is-open');
  }
})();
