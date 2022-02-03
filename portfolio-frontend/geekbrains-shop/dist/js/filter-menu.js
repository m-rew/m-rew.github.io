let filterBtn = document.querySelector('.filter__menu-title-wrap');

filterBtn.addEventListener('click', function () {
    selectList1.classList.remove('select--active');
    selectList2.classList.remove('select--active');
    selectList3.classList.remove('select--active');

    filterBtn.classList.toggle('filter__menu-title-wrap--active');
});