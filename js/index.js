const sliderBlocks  = document.querySelectorAll('.slider_block')
const sliderLine = document.querySelector('.slider_line')
const sliderDots = document.querySelectorAll('.slider_dot')
const sliderInfo = document.querySelectorAll('.slider_info')
const sliderButtonNext  = document.querySelector('.slider_next_button')
const sliderButtonPrev  = document.querySelector('.slider_prev_button')

let sliderCount = 0,
    sliderWidth;

window.addEventListener('resize', showSlide)

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderBlocks.length + 'px';
    sliderBlocks.forEach(item => item.style.width = sliderWidth +'px')
    rollSlider()
}
showSlide();


sliderButtonNext.addEventListener('click', nextSlider);
sliderButtonPrev.addEventListener('click', prevSlider);

function nextSlider() {
    sliderCount++;
    if(sliderCount >= sliderBlocks.length) {
        sliderCount = 0
    }
    rollSlider();
    thisSlider(sliderCount);
    additionSlider(sliderCount);
}

function prevSlider() {
    sliderCount--;
    if(sliderCount < 0) {
        sliderCount = sliderBlocks.length - 1
    }
    rollSlider();
    thisSlider(sliderCount);
    additionSlider(sliderCount);
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlider(index) {
    sliderDots.forEach(item =>
        item.classList.remove('active-dot'))
        sliderDots[index].classList.add('active-dot')
}

function additionSlider(index) {
    sliderInfo.forEach(item =>
        item.classList.remove('active'))
        sliderInfo[index].classList.add('active')
}


sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlider(sliderCount);
        additionSlider(sliderCount);
    })
})



function lazyload() {
    const lazyloadImages = document.querySelectorAll("img[data-src]");
    lazyloadImages.forEach(function(img) {
        if (img.getBoundingClientRect().top <= window.innerHeight && img.getBoundingClientRect().bottom >= 0) {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        }
    });
}

window.addEventListener('scroll', lazyload);
window.addEventListener('load', lazyload);

