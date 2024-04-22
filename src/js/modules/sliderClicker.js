function getSliderClicker(container, wrapper, item,widthCurrent,currentClass) {
    let mainContainer = document.querySelector(`.${container}`);
    let sliderWrapper = document.querySelector(`.${wrapper}`);
    let sliderItemWidth = mainContainer.querySelector(`.${item}`).clientWidth;
    let prevBtn = mainContainer.querySelector('.carousel-button-prev');
    let nextBtn = mainContainer.querySelector('.carousel-button-next');
    const maxScrollAmount = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
    let scrollAmount = 0;
    let items = document.querySelectorAll(`.${item}`);
    let current = 0;
   if(widthCurrent) {
    items[current].classList.add(currentClass);
   }
  
    nextBtn.addEventListener('click', function() {
      if(scrollAmount>=maxScrollAmount) {
        return;
      }
      else {
        scrollAmount +=(sliderItemWidth+20);
        sliderWrapper.scrollLeft = scrollAmount;
        if(widthCurrent) {
          items.forEach(item=>{
            item.classList.remove(currentClass);

          })
          current+=1;
          items[current].classList.add(currentClass);
        }
      }
    })
    prevBtn.addEventListener('click', function() {
      if(scrollAmount<=maxScrollAmount) {
        return
      }
      else {
        scrollAmount -=(sliderItemWidth+20);
        sliderWrapper.scrollLeft = scrollAmount;
        if(widthCurrent) {
          items.forEach(item=>{
            item.classList.remove(currentClass);

          })
          current-=1;
          items[current].classList.add(currentClass);
        }
      }
    })
    
}

module.exports = getSliderClicker;