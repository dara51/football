function switchBtns() {
    const switchBtns = document.querySelectorAll('.select-button');
switchBtns.forEach(btn=>{
  btn.addEventListener('click',function() {
    btn.closest('.select-buttons').querySelectorAll('.select-button').forEach(btn=>{
      btn.classList.remove('select-button-active');
    })
  btn.classList.add('select-button-active');
    console.log('click');
    if(btn.dataset.expand) {
      btn.closest('.container').querySelectorAll(btn.dataset.fade).forEach(item=>{
        item.classList.remove('active');
      })
      document.querySelector(btn.dataset.expand).classList.add('active');
      
    }
  })
})
}
module.exports = switchBtns;