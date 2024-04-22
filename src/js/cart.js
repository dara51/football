document.addEventListener('DOMContentLoaded',function() {
    let mainMenu = require('./modules/main-menu');
    mainMenu();
    ///////////мобильное меню
    let mobileMenu = require('./modules/mobile-menu');
    mobileMenu();
})