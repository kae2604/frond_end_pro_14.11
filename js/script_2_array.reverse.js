'use strict';

/**
 * Reverses the order of elements in the given array in place.
 *
 * The function swaps elements:
 * the first with the last, the second with the second-to-last, and so on.
 * Works correctly for arrays of any length (even or odd).
 *
 * @param {Array} arr The array to reverse.
 * @returns {Array} The same array with elements in reverse order.
 */

const reverse = (arr) => {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        const buffer =  arr[i];
        arr[i] = arr[j];
        arr[j] = buffer;
    }
    return arr;
}

console.log("                  Script #2, Example #1");

console.log("Original array:");
const words3 = ["Grand Mother", "Mother", "Sister", "Brother", "Father", "Grand Father"];
console.log(words3);

reverse(words3);
console.log("New array:");
console.log(words3);

console.log("                  Script #2, Example #2");

console.log("Original array:");
const words4 = ["Grand Mother", "Mother", "Brother", "Father", "Grand Father"];
console.log(words4);

reverse(words4);
console.log("New array:");
console.log(words4);

console.log("---------------------------------------------------");

