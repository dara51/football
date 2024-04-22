document.addEventListener('DOMContentLoaded',function() {
    const mainNav = require('./modules/main-menu');
    mainNav();
    const mobileMenu = require('./modules/mobile-menu');
    mobileMenu();
    let mobileMask = require('./modules/mobile-mask');
    mobileMask();
})
