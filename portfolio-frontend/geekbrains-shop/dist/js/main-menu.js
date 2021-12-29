let buttonOpen = document.getElementById('header__menu-btn');
let buttonClose = document.getElementById('menu__btn-close');
let navigation = document.getElementById('menu');
let navigationWrapper = document.getElementById('menu__wrapper');

let search = document.getElementById('header__form-search');
let buttonSearch = document.getElementById('header__search-btn');

// function button 'burger' click
buttonOpen.addEventListener('click', function () {
    navigation.classList.toggle('menu--hidden');
    navigation.style.zIndex = '100';
});

// function button 'close' click
buttonClose.addEventListener('click', function () {
    navigation.classList.toggle('menu--hidden');
});

// function load page > add 'menu__wrapper' width from 'menu'
// & add class 'menu--hidden' for 'menu'
window.onload = function () {
    navigationWrapper.style.width = navigation.offsetWidth + navigation.clientLeft + 'px';
    navigation.classList.add('menu--hidden');
};

// function button 'search' click
buttonSearch.addEventListener('click', function () {
    search.classList.toggle('header__form-search--active');
});