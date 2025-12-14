'use strict';

/**
 * Finds the maximum element in an array and its index.
 *
 * @param {number[]} arr - The array of numbers to search.
 * @returns {{ maxNumber: number, maxIndex: number }}
 * An object containing the maximum number and its index.
 */

const maxElement = (arr) => {
    let maxNumber = arr[0];
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
            maxIndex = i;
        }
    }
    return {
        maxNumber,
        maxIndex
    };
}

const result3 = maxElement(array);

console.log("Script #3")
console.log(`Maximum element = ${result3.maxNumber};
Index of maximum element = ${result3.maxIndex};`);
console.log("--------------------------------------------------------------------------------------------------------")