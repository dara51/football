document.addEventListener('DOMContentLoaded', function() {
    let radioBtns = document.querySelectorAll('.delivery-item__radio');
    radioBtns.forEach(btn=>{
        btn.addEventListener('input',function() {
            radioBtns.forEach(radioBtn=>{
                radioBtn.closest('.delyvery-item').classList.remove('active');
            })
            if(btn.checked) {
                btn.closest('.delyvery-item').classList.add('active')
            }
            

        })
    })
        const mobileMask = require('./modules/mobile-mask');
        mobileMask();
        const mainNav = require('./modules/main-menu');
        mainNav();
        const mobileMenu = require('./modules/mobile-menu');
        mobileMenu();
    
})