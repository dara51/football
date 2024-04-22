function seoBlock() {
    const seoExpandBtn = document.querySelector('#seo-btn');
seoExpandBtn.addEventListener('click',function() {
  document.querySelector('.seo-content').classList.toggle('seo-content-active');
  seoExpandBtn.classList.toggle('seo-btn-active');
})
}
module.exports = seoBlock;