'use strict';

/**
 * Calculates the sum of array elements that satisfy a given condition.
 *
 * @param {number[]} arr - The array of numbers to process.
 * @param {function} callback - A function that tests each element. Should return true for elements to include in the sum.
 * @returns {number} The sum of elements that meet the condition specified by the callback.
 */

const sumEvenPositive = (arr, callback) => {
    let sum = 0;
    arr.forEach((element) => {
        if (callback(element)){
            sum += element;
        }
    })
    return sum;
}

console.log("Script #7")
console.log(`Sum of even and positive elements = ${sumEvenPositive(array, (element) => element > 0 && element % 2 === 0 )};`);

console.log("--------------------------------------------------------------------------------------------------------")
