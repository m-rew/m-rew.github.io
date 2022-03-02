'use strict';

let btnCart = document.querySelector('#btnCart');
let basket = document.querySelector('.basket');

let btnAddToCartObj = document.querySelectorAll('.addtocart');
let productOverlay;
let productInfoObj;

let cartMassObj = [];
let cartHTML = '';
let totalPrice = 0;

// Открытик и закрытие корзины
btnCart.addEventListener('click', function (event) {
    basket.classList.toggle('basket--active');
});

/**
 * Конструктор объекта информации о продукте
 */
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = +price;
        this.quantity = +quantity;
        this.totalPrice = price;
    }

    changeTotalPrice() {
        this.totalPrice = this.price * this.quantity;
    }

    changeQuantity() {
        this.quantity += 1;
        this.changeTotalPrice();
    }
}

btnAddToCartObj.forEach(function (btnAddToCart) {
    btnAddToCart.addEventListener('click', function (event) {
        clickHandler(event);
    });
});

/**
 * // Основная функция для обработчика события click
 * @param {element} event // элемент по которому произошел клик
 */
function clickHandler(event) {
    productOverlay = getProductOverlay(event.currentTarget, 'products-catalog__item');
    productInfoObj = getProductInfo(productOverlay);
    addToMass(productInfoObj);
    addToCart(cartMassObj);
}

/**
 * // Функция ищит родителя полученного элемента по заданному классу
 * @param {element} el // элемент, от которого будем искать родителя
 * @param {text} cls // класс искомого родителя
 * @returns // искомый родитель с классом cls
 */
function getProductOverlay(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

/**
 * // Функция возвращает объект и информацией о продукте
 * @param {element} el // элемент (обертка) продукта
 * @returns // объект с информацией о продукте
 */
function getProductInfo(el) {
    let name = el.querySelector('.products-catalog__name').textContent;
    let price = el.querySelector('.products-catalog__price').getAttribute('data-price');

    let obj = new Product(name, price, 1);

    return obj;
}

/**
 * // Функция добавляет продукт в общий массив объектов с информацией о продуктах
 * @param {object} obj // объект с информацией о продукте
 * @returns
 */
function addToMass(obj) {
    if (cartMassObj.length == 0) {
        cartMassObj[0] = new Product(obj.name, obj.price, obj.quantity);
    } else {
        for (let i = 0; i < cartMassObj.length; i++) {
            if (cartMassObj[i].name == obj.name) {
                cartMassObj[i].changeQuantity();
                return;
            }
        }
        cartMassObj[cartMassObj.length] = new Product(obj.name, obj.price, obj.quantity);
    }
}

function addToCart(massObj) {
    for (let i = 0; i < massObj.length; i++) {
        cartHTML += `
            <tr>
                <td>${massObj[i].name}</td>
                <td>${massObj[i].quantity} шт.</td>
                <td>$${massObj[i].price}</td>
                <td>$${massObj[i].totalPrice}</td>
            </tr>
        `;

        totalPrice += massObj[i].totalPrice;
    }

    basket.innerHTML = `
        <table class="basket__table">
            <tbody>
                <tr>
                    <th>Название</th>
                    <th>Кол-во</th>
                    <th>Цена за шт.</th>
                    <th>Итого</th>
                </tr>
                ${cartHTML}
                <tr class="basket__table-total-price">
                    <td colspan="4">Итого: <span>$${totalPrice}</span></td>
                </tr>
            </tbody>
        </table>
    `;

    cartHTML = '';
    totalPrice = 0;
}