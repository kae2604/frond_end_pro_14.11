'use strict';

/**
 * Counts the number of positive odd elements in an array.
 *
 * @param {number[]} arr - The array of numbers to check.
 * @returns {number} The count of elements that are both positive and odd.
 */

const amoundOddPositive = (arr) => {
    let count_5 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 !== 0) {
            count_5 += 1;
        }
    }
    return count_5;
}

const result5 = amoundOddPositive(array);

console.log("Script #5")
console.log(`Amound of odd and positive elements = ${result5};`);

console.log("--------------------------------------------------------------------------------------------------------")