'use strict';

/**
 * Counts the number of negative elements in an array.
 *
 * @param {number[]} arr - The array of numbers to check.
 * @param {(element: number) => boolean} callback - Predicate function that returns true for negative elements.
 * @returns {number} The count of negative elements in the array.
 */

const negativeAmount = (arr, callback) => {
let count = 0;
    arr.forEach((element) => {
        if (callback(element)){
            count += 1;
        }
    })
    return count;
}

const result4 = negativeAmount(array, (element) => element < 0);

console.log("Script #4")
console.log(`Amound of negative elements = ${result4};`);

console.log("--------------------------------------------------------------------------------------------------------")