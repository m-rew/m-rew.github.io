let filterBtn = document.querySelector('.filter__menu-title-wrap');
let filterList = document.querySelector('.filter__menu-list-wrap');

filterBtn.addEventListener('click', function () {
    filterList.classList.toggle('filter__menu-list-wrap--active');
});