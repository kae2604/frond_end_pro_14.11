'use strict'

const orders = [
    { id: 101, items: [{ sku: "A1", qty: 1 }, { sku: "C3", qty: 2 }] },
    { id: 102, items: [{ sku: "B2", qty: 1 }] },
    { id: 103, items: [{ sku: "B2", qty: 3 }, { sku: "A1", qty: 1 }] },
];

const rightOrder = orders.find(
    (eachOrder) => eachOrder.items.some(
        (eachItem)=> eachItem.sku === "B2"
    )
);

console.log("Script_4");
console.log(rightOrder);
console.log("---------------------------------------------------------------------------");


// const rightOrder = orders.find((eachOrder) => {
//     return eachOrder.items.some((eachItem) => {
//         return eachItem.sku === "B2"
//     })
// });
//
// console.log("Script_4");
// console.log(rightOrder);
// console.log("---------------------------------------------------------------------------");