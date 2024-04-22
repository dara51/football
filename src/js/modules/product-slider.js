function productSlider() {
    let windowImage = document.querySelector('.window');
    let sliderItems = document.querySelectorAll('.slider-item')

    windowImage.querySelector('img').src = sliderItems[0].querySelector('img').src;
    windowImage.querySelector('img').alt = sliderItems[0].querySelector('img').alt;
    let slider = document.querySelector('.slider');
slider.addEventListener('click' , function(e) {
    if(e.target.tagName ==='IMG') {
        windowImage.querySelector('img').src = e.target.src;
    }
})
}
module.exports = productSlider