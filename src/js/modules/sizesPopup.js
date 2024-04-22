function sizesPopup() {
    const sizesModalClose = document.querySelector('.sizes-modal__close');
    sizesModalClose.addEventListener('click', function() {
        sizesModalClose.closest('.sizes-popup').style.display = 'none';
        document.body.style.overflow = 'auto';
    })
    const sizesModalBtn = document.querySelector('.sizes-popup-btn');
    sizesModalBtn.addEventListener('click', function() {
        document.body.style.overflow = 'hidden';
        document.querySelector(`.${sizesModalBtn.dataset.expand}`).style.display ='block';
    })
}
module.exports = sizesPopup;