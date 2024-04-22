function dotsSlider (firstSlider) {
    getSlider(firstSlider, 'carousel-item', true, true, 4000);

function getSlider(container, carouselitem, withDots, autoplay , delay) {
  const sliderItems = document.querySelectorAll(`.${carouselitem}`);
  let current = 0;
  let prev = 0;
  if(withDots) {
    createDots(sliderItems, container,withDots, prev);
  }

    if(autoplay) {
      setInterval(function() {
        current++;
        if(current>=sliderItems.length) {
          current = 0
        }
        if(prev<0) {
          prev = sliderItems.length;
        }
        updateCurrent(document.querySelector('.dot-wrapper'), sliderItems, current,withDots, prev)
      },delay)
    }


}
////////////////////////
  function updateCurrent(dots, items, current,withDots, prev) {
    prev = current-1;
    if(prev<0) {
      prev = items.length-1;
    }
    if(current>=items.length) {
      current = 0;
    }
    if(withDots) {
      dots.childNodes.forEach(dot=>{
        dot.classList.remove('dot-active');
      })
      dots.childNodes[current].classList.add('dot-active');
    }
    items.forEach(item=>{
      item.classList.remove('carousel-item-active');
      setTimeout(function() {
        item.classList.remove('carousel-item-prev');
      item.classList.remove('carousel-item-last');
      },1000)
    })
    items[prev].classList.add('carousel-item-prev');
    items[current].classList.add('carousel-item-active');
  }
  /////////
  function createDots(items, container, withDots, prev) {
    const carouselLenght = items.length;
        let dotContainer = document.createElement('div');
        dotContainer.classList.add('dot-container');
        let dotWrapper = document.createElement("div");
        dotWrapper.classList.add('dot-wrapper');
        dotContainer.appendChild(dotWrapper);
        container.appendChild(dotContainer);
        for(let i=0; i < carouselLenght; i++) {
            let dot = document.createElement("div");
            dot.classList.add('dot');
            dotWrapper.appendChild(dot);
        }
        dotWrapper.childNodes[0].classList.add('dot-active')
        dotWrapper.style.width = (25* carouselLenght)-14 +'px';
        dotWrapper.addEventListener('click', function(event) {
          if(event.target.classList.contains('dot')) {
            for (i=0; i<dotWrapper.childNodes.length; i++) {
              if(dotWrapper.childNodes[i]== event.target) {
                current = i;
                updateCurrent(dotWrapper, items, current,withDots, prev)
              }
            }
          }
        }) 
  }
}
module.exports = dotsSlider;