'use strict'

const tx = [
    { id: 1, category: "food", amount: 12 },
    { id: 2, category: "food", amount: 8 },
    { id: 3, category: "taxi", amount: 15 },
    { id: 4, category: "books", amount: 20 },
    { id: 5, category: "taxi", amount: 7 },
];

let initialValue = {};

const sortedObject = tx.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue.category]) {
        accumulator[currentValue.category] = currentValue.amount;
    } else {
        accumulator[currentValue.category] += currentValue.amount;
    }
return accumulator;
},initialValue);

console.log("Script_3");
console.log(sortedObject);
console.log("---------------------------------------------------------------------------");





