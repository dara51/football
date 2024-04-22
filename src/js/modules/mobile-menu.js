function mobileMenu() {
    let hamburger = document.querySelector('.hamburger'),
    closeBtn = document.querySelector('.close-btn');
    hamburger.onclick = function() {
    document.querySelector('.mobile-menu').style.display = 'block';
    document.body.style.overflow = 'hidden';
    }
    closeBtn.onclick = function() {
    document.querySelector('.mobile-menu').style.display = 'none';
    document.body.style.overflow = 'visible';
    }
    ////// нижняя навигационная панель
    let navigationItems = document.querySelectorAll('.navigation-item');
    navigationItems.forEach(item=>{
    item.onclick = function(e) {
        if(item.dataset.expand) {
            document.querySelectorAll('.mobile-expand-menu').forEach(menu=>{
                menu.style.display = 'none';
        
                navigationItems.forEach(item=>{
                    item.classList.remove('navigation-item-active');
                })
                item.classList.add('navigation-item-active');
                })
                document.querySelector(`.${item.dataset.expand}`).style.display = 'block'
        }
    }
    })
    /////////интерактивные подменю
    let interactiveLis = document.querySelectorAll('.catolog-interactive-li');
    let interactiveTitles = document.querySelectorAll('.interactive-title');
    //////интерактивные заголовки закрывающие меню
    interactiveTitles.forEach(title=>{
        title.addEventListener('click',function() {
                    title.closest('.mobile-expand-menu').style.display = 'none';
                })
    })
    interactiveLis.forEach(li=>{
        let expand = document.querySelector(`.${li.dataset.expand}`);
        li.addEventListener('click',function(){
            console.log(expand);
            expand.style.display = 'block';
        })
        // if(expand.querySelector('.interactive-title')) {
        //     let interactiveTitle = expand.querySelector('.interactive-title');
        //     interactiveTitle.addEventListener('click',function() {
        //         interactiveTitle.closest('.mobile-expand-menu').style.display = 'none';
        //     })
        // }
        //////проверка на наличие расширяющеегося меню и добавлиние класса активности к существующим при клике
        if(expand.querySelector('.expand-li')) {
            let expandLi = document.querySelectorAll('.expand-li');
            expandLi.forEach(li=>{
                li.addEventListener('click',function(){
                    li.classList.toggle('active');
                })
            })
        }
        expand

    })
}
module.exports = mobileMenu;
// 