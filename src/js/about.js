document.addEventListener('DOMContentLoaded', function() {
    let frameCover = document.querySelector('.video-cover');
    let frame = document.querySelector('.video-container').querySelector('iframe');
    frameCover.addEventListener('click', function() {
        frameCover.style.display = 'none';
        frame.style.display = 'block';
        frame.src +="&autoplay=1";
    })
    let sliderClicker = require('./modules/sliderClicker');
    sliderClicker('carousel-photo-wrapper', 'carousel_photo', 'carousel-photo__item',false );
    const mainMenu = require('./modules/main-menu');
    mainMenu();
    const mobileMenu = require('./modules/mobile-menu');
    mobileMenu();
})