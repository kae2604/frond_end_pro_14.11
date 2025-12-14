'use strict';

/**
 * Selects all positive elements from an array and returns an object containing them, their sum, and count.
 *
 * @param {number[]} arr - The original array of numbers.
 * @returns {{newArray: number[], sum: number, count: number}}
 *          An object with the array of positive numbers, their sum, and the count.
 */

const sumAndAmount = (arr) => {
    const newArray = arr.filter((element) => element >= 0);
    let sum = 0;
    const count = newArray.length;
    newArray.forEach((element) => {
        sum += element;
    })
    return {
        newArray,
        sum,
        count
    }
}

const array =  [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log("Original array: ");
console.log(array);

const result = sumAndAmount(array);

console.log("Script #1");
console.log(`Sum of positive elements = ${result.sum};
Amound of positive elements = ${result.count};`);
console.log("--------------------------------------------------------------------------------------------------------")



