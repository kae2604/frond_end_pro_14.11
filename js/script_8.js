'use strict';

/**
 * Calculates the sum of odd and positive elements in an array.
 *
 * @param {number[]} arr - The array of numbers to process.
 * @param {function(number): boolean} callback - A callback function that returns true for elements to include in the sum.
 * @returns {number} The sum of the elements that satisfy the callback condition.
 */

const sumOddPositive = (arr, callback) => {
    let sum = 0;
    arr.forEach((element) => {
        if (callback(element)){
            sum += element;
        }
    })
    return sum;
}

console.log("Script #8")
console.log(`Sum of odd and positive elements = ${sumOddPositive(array, (element) => element > 0 && element % 2 !== 0 )};`);

console.log("--------------------------------------------------------------------------------------------------------")