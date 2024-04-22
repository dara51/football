function filterNav() {
    let closeBtn = document.querySelector('#filter-close');
    let filterBtn = document.querySelectorAll('.filter-button');
    filterBtn.forEach(btn=>{
        btn.onclick = function() {
            document.querySelector('.filter-nav-overlay').style.display = 'block';
            document.body.style.overflow ='hidden';
        }
    })
    closeBtn.onclick = function() {
        document.querySelector('.filter-nav-overlay').style.display = 'none';
        document.body.style.overflow = 'scroll';
    }
    const filterItems = document.querySelectorAll('.filter-list-item');
    console.log(filterItems);
    filterItems.forEach(item=>{
        item.querySelector('.filter-item__title').addEventListener('click', function() {
            item.classList.toggle('filter-list-item-active');
        })
    })





    let format = {
        to: function(value) {
            return Math.round(value)
        },
        from: function(value) {
            return Math.round(value)
        }
    }
    let slider = document.querySelector('#slider');
    noUiSlider.create(slider, {
        start: [0, 32365],
        connect: true,
        range: {
            'min': 0,
            'max': 99999,
        },
        step: 500,
        tooltips: true,
        format:format,
    });
    let toInput = document.querySelector('#to');
    let fromInput = document.querySelector('#from');
    toInput.addEventListener('change', function(e) {
        slider.noUiSlider.set([null, e.target.value])
    })
    fromInput.addEventListener('change', function(e) {
        slider.noUiSlider.set([e.target.value, null])
    })
    slider.noUiSlider.on('update', function (values, handle) {
        let value = values[handle];
        if(handle) {
            toInput.value = value;
        }
        else {
            fromInput.value = value;
        }
    })
    const resetBtn = document.querySelector('.filter-outline');
    const form = document.querySelector('.filter-list');
    resetBtn.addEventListener('click', function(e) {
        e.preventDefault();
        form.querySelectorAll('input').forEach(input=>{
            if(input.checked) {
                input.checked = false
            }
            else {
                input.value = ""
            }
        })
    })
}
module.exports = filterNav;