function questionItems() {
    const questionItems = document.querySelectorAll('.questions-item');
    questionItems.forEach(item=>{
    item.querySelector('.questions-item__title').addEventListener('click',function() {
        item.classList.toggle('questions-item-active');
        item.querySelector('.question-close-btn').addEventListener('click', function() {
        item.classList.remove('questions-item-active');
        })
    })
    })
}
module.exports = questionItems;