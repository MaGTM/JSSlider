"use strict"

// Объявляем переменные
let dots = document.querySelectorAll('.slider__dots__items'),
    imagesContainer = document.querySelector('.slider__images');

// Слайдер
function sliderFun(e) {

    // Очищаем все элементы от класса "active"
    dots.forEach(element => {
        element.classList.remove('active');
    });

    // Картинки делают вжух-вжух и к определенному элементу добавляется класс active
    switch(e) {
        case '1': 
            dots[0].classList.add('active');
            imagesContainer.style.left = '0%';
            break;
        case '2':
            dots[1].classList.add('active');
            imagesContainer.style.left = '-100%';
            break;
        case '3':
            dots[2].classList.add('active');
            imagesContainer.style.left = '-200%';
            break;
        case '4':
            dots[3].classList.add('active');
            imagesContainer.style.left = '-300%';
            break;
    }
}