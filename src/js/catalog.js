document.addEventListener('DOMContentLoaded', function () {
    const filterNav = require('./modules/filter');
    filterNav();
    const mainNav = require('./modules/main-menu');
    mainNav();
    const mobileMenu = require('./modules/mobile-menu');
    mobileMenu();
})