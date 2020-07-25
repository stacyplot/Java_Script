"use strict";

//Задание 1.1 es6 
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    make25PercentDiscount(discount) {
         this.price = this.price - (this.price / 100 * discount)
    }; 
}

const products = [
    new Product('товар1', 500),
    new Product('товар2', 600)
];

for (let product of products) {
    product.make25PercentDiscount(25);
}

console.log(products);