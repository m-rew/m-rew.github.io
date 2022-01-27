let filterBtn = document.querySelector('.filter__menu-title-wrap');
let filterList = document.querySelector('.filter__menu-list-wrap');

filterBtn.addEventListener('click', function () {
    selectList1.classList.remove('select--active');
    selectList2.classList.remove('select--active');
    selectList3.classList.remove('select--active');

    filterList.classList.toggle('filter__menu-list-wrap--active');
});