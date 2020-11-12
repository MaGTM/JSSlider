"use strict"


// Объявляем переменные
let dots = document.querySelectorAll('.slider__dots__items'),
    imagesContainer = document.querySelector('.slider__images'),
    overlay = document.querySelector('.overlay'),
    modalImages = document.querySelector('.modal__images-wrapper'),
    modalContainer = document.querySelector('.modal')

// Константы
const sliderImagesWidth = getComputedStyle(imagesContainer).width,
      modalImagesWidth = getComputedStyle(modalContainer).width;

// Слайдер
function sliderFun(e) {

    // Очищаем все элементы от класса "active"
    dots.forEach(element => {
        element.classList.remove('active');
    });

    // Картинки делают вжух-вжух и к определенному элементу добавляется класс active
    imagesContainer.style.left = '-' + String(e * parseInt(sliderImagesWidth)) + 'px';
    dots[e].classList.add('active');
    
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
    
    modalImages.style.left = String((parseInt(left) / parseInt(sliderImagesWidth)) * parseInt(modalImagesWidth)) + 'px';

    // Анимация появления картинки
    if(modalContainer.classList.contains('active') == false) {
        modalContainer.style.opacity = '1';
    } else {
        modalContainer.style.opacity = '0';
    }
    modalContainer.classList.toggle('active');
}