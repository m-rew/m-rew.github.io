let buttonOpen = document.getElementById('header__menu-btn');
let buttonClose = document.getElementById('menu__btn-close');
let navigation = document.getElementById('menu');

let search = document.getElementById('header__form-search');
let buttonSearch = document.getElementById('header__search-btn');

let header = document.getElementById('header');
let main = document.getElementById('main');

// function button 'burger' click
buttonOpen.addEventListener('click', function () {
    navigation.classList.toggle('menu--active');
});

// function button 'close' click
buttonClose.addEventListener('click', function () {
    navigation.classList.toggle('menu--active');
});

// function button 'search' click
buttonSearch.addEventListener('click', function () {
    search.classList.toggle('header__form-search--active');
});

// add padding-top for <main> because <header> fixed
window.onload = function () {
    main.style.paddingTop = header.offsetHeight + 'px';
};