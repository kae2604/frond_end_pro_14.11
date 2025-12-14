'use strict';

/**
 * Finds the minimum element in an array and its index.
 *
 * @param {number[]} arr - The array of numbers to search.
 * @returns {{minNumber: number, minIndex: number}} An object containing the smallest number and its index.
 */

const minElement = (arr) => {
    let minNumber = arr[0];
    let minIndex = 0;
arr.forEach((element, index) => {
    if (element < minNumber ) {
        minNumber = element;
        minIndex = index;
}
    });
return {
    minNumber,
    minIndex
    }
}

const result2 = minElement (array);

console.log("Script #2")
console.log(`Minimal element = ${result2.minNumber};
Index of minimal element = ${result2.minIndex};`);
console.log("--------------------------------------------------------------------------------------------------------")