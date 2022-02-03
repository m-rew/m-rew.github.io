let selectBtn1 = document.querySelector('#select__btn-1');
let selectList1 = document.querySelector('#select-1');

let selectBtn2 = document.querySelector('#select__btn-2');
let selectList2 = document.querySelector('#select-2');

let selectBtn3 = document.querySelector('#select__btn-3');
let selectList3 = document.querySelector('#select-3');

selectBtn1.addEventListener('click', function () {
    selectList1.classList.toggle('select--active');

    selectList2.classList.remove('select--active');
    selectList3.classList.remove('select--active');
});

selectBtn2.addEventListener('click', function () {
    selectList2.classList.toggle('select--active');

    selectList1.classList.remove('select--active');
    selectList3.classList.remove('select--active');
});

selectBtn3.addEventListener('click', function () {
    selectList3.classList.toggle('select--active');

    selectList1.classList.remove('select--active');
    selectList2.classList.remove('select--active');
});