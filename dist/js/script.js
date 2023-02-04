let carousel = document.querySelector('.testimonials__carousel');
let carouselItem = document.querySelector('.testimonials__carousel-item');
let btnCarouselLeft = document.querySelector('.btn__slider-left');
let btnCarouselRight = document.querySelector('.btn__slider-right');

btnCarouselLeft.addEventListener('click', () => {
    carousel.scrollLeft -= carouselItem.clientWidth;
})

btnCarouselRight.addEventListener('click', () => {
    carousel.scrollLeft += carouselItem.clientWidth;
})

console.log(btnCarouselLeft);
console.log(btnCarouselRight);