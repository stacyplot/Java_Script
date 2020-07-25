"use strict";

//Задание 1.1 es5 
function Item(name, price) {
    this.name = name;
    this.price = price;
    this.make25PercentDiscount = function(discount) {
        this.price = this.price - (this.price / 100 * discount);
    };
}

const items = [
    new Item('товар1', 500),
    new Item('товар2', 600)
];

for (let item of items) {
    item.make25PercentDiscount(25);
}

console.log(items);