function createRows() {
    let playersItems = document.querySelectorAll('.players-item');
    const half = Math.ceil(playersItems.length/2);
    const firstHalf = Array.from(playersItems).slice(0, half);
    const secondHalf = Array.from(playersItems).slice(half);
    const firstRow = document.createElement('div');
    firstRow.classList.add('first-row');
    firstHalf.forEach(item=>{
    firstRow.appendChild(item)
    })
    const secondRow = document.createElement('div');
    secondRow.classList.add('second-row');
    secondHalf.forEach(item=>{
    secondRow.appendChild(item);
    })
    const popularWrapper = document.querySelector('.popular-players-wrapper');
    popularWrapper.innerHTML = "";
    popularWrapper.appendChild(firstRow);
    popularWrapper.appendChild(secondRow);

    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main-wrapper');
    const container = document.querySelector('.popular-players .container')
    container.appendChild(mainWrapper);
    mainWrapper.appendChild(popularWrapper)
    /////создание кнопки назад
    const carouselButtonPrev = document.createElement('div');
    carouselButtonPrev.classList.add('carousel-button-prev');
    mainWrapper.appendChild(carouselButtonPrev)
    //////создание кнопки вперед
    const carouselButtonNext = document.createElement('div');
    carouselButtonNext.classList.add('carousel-button-next');
    mainWrapper.appendChild(carouselButtonNext);
}
module.exports = createRows;