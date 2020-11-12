"use strict"

// Объявляем переменные
let dots = document.querySelectorAll('.slider__dots__items'),
    imagesContainer = document.querySelector('.slider__images'),
    overlay = document.querySelector('.overlay'),
    modalImages = document.querySelector('.modal__images-wrapper'),
    modalContainer = document.querySelector('.modal')

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

// Модальное окно
function modal() {
    // Темный экран на задний фон

    if(overlay.classList.contains('active') == false) {
        overlay.style.opacity = '0.5';
        overlay.setAttribute('onclick', 'modal()');
    } else {
        overlay.style.opacity = '0';
        overlay.removeAttribute('onclick', 'modal()');
    }

    overlay.classList.toggle('active');

    // Показываем картинку

    let left = getComputedStyle(imagesContainer).left;

    modalImages.style.left = String(parseInt(left)/800*1200) + 'px';

    // Анимация появления картинки
    if(modalContainer.classList.contains('active') == false) {
        modalContainer.style.opacity = '1';
    } else {
        modalContainer.style.opacity = '0';
    }
    modalContainer.classList.toggle('active');
}