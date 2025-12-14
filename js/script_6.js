'use strict';

/**
 * Counts the number of positive even elements in an array.
 *
 * @param {number[]} arr - The array of numbers to check.
 * @returns {number} The count of elements that are both positive and even.
 */

const amoundEvenPositive = (arr) => {
    let count_6 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 === 0) {
            count_6 += 1;
        }
    }
    return count_6;
}

const result6 = amoundEvenPositive(array);

console.log("Script #6")
console.log(`Amound of even and positive elements = ${result6};`);

console.log("--------------------------------------------------------------------------------------------------------")