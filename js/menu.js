(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-menu-open]'),
        closeModalBtn: document.querySelector('[data-menu-close]'),
        modal: document.querySelector('[data-menu]'),
        overlay: document.querySelector('[data-overlay]')
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.overlay.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-open');
        refs.overlay.classList.toggle('is-open');
    }
})();
