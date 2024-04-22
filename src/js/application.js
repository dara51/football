document.addEventListener('DOMContentLoaded',function() {
    const mainMenu = require('./modules/main-menu');
    mainMenu();
    const mobileMenu = require('./modules/mobile-menu');
    mobileMenu();
    const getSliderClicker = require('./modules/sliderClicker');
    getSliderClicker('carousel-photo-wrapper', 'carousel_photo', 'carousel-photo__item',false );
})