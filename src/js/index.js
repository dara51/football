document.addEventListener('DOMContentLoaded', function() {
    //разворачивающееся меню
  let mainMenu = require('./modules/main-menu');
  mainMenu();
  ///////////мобильное меню
  let mobileMenu = require('./modules/mobile-menu');
  mobileMenu();


const createRows = require('./modules/createRows');
createRows();
const getSliderClicker = require('./modules/sliderClicker');
getSliderClicker('main-wrapper','popular-players-wrapper','players-item',false);
getSliderClicker('carousel-photo-wrapper', 'carousel_photo', 'carousel-photo__item',false );
getSliderClicker('carousel-blog-wrapper','carousel-blog','blog__item',true,'blog-item-current');
const switchBtns = require('./modules/switchBtns');
switchBtns();
const questionItems = require('./modules/questionItems');
questionItems();
const seoBlock = require('./modules/seoBlock');
seoBlock();









//////// слайдер
let firstSlider = document.querySelector('.carousel');
let dotsSlider = require('./modules/dotsSlider');
dotsSlider(firstSlider);
})