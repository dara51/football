
document.addEventListener('DOMContentLoaded',function() {    
    const mainMenu = require('./modules/main-menu');
    mainMenu();
    const mobileMenu = require('./modules/mobile-menu');
    mobileMenu();
    const questionItems = require('./modules/questionItems');
    questionItems();
});