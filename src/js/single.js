document.addEventListener('DOMContentLoaded', function() {
    let mainMenu = require('./modules/main-menu');
    mainMenu();
    ///////////мобильное меню
    let mobileMenu = require('./modules/mobile-menu');
    mobileMenu();
    const sizesPopup = require('./modules/sizesPopup');
    sizesPopup();

////////продуктовая карусель
    const productSlider = require('./modules/product-slider');
    productSlider();
    const blocksTitlles = document.querySelectorAll('.about-goods__title');
    blocksTitlles.forEach(title=>{
        title.addEventListener('click',function() {
            title.closest('.about-block').classList.toggle('active');
        })
    })

})