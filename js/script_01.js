'use strict';

const products = [
    { id: 31, name: "Mouse", price: 25, inStock: true },
    { id: 2, name: "Keyboard", price: 70, inStock: false },
    { id: 3, name: "Monitor", price: 210, inStock: true },
];

const newProducts = products.map((element) => {
    if (element.inStock) {
        return (`${element.name}: $${element.price}`);
    } else {
        return (`${element.name}: $${element.price} (out of stock)`);
    }
})
console.log("Script_1");
console.log(newProducts);
console.log("---------------------------------------------------------------------------");



