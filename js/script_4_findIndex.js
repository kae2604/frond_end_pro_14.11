'use strict';

/**
 * Returns the index of the first element in the array
 * for which the callback function returns true.
 * Iterates from left to right.
 *
 * @param {Array} arr - The array to search through.
 * @param {Function} callback - A predicate function that receives:
 *                              (element, index, array) and must return true or false.
 * @returns {number} The index of the first matching element,
 *                   or -1 if no element satisfies the condition.
 */

const findIndex = (arr, callback) => {
for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)){
        return i
    }
}
return -1;
}

console.log("Script#4 Example #1");

const numbers4 = [1, 7, 3, 9, 5, 1, 2, 3, 4, 5];
console.log(findIndex(numbers4, (element) => element % 2 === 0));
console.log(findIndex(numbers4, (element) => element % 2 === 10));

console.log("Script#4 Example #2");

const words4 = ['Anna', 'Boris', 'Cent', 'Dollar', 'Egor', 'Fedor', 'Galina', 'Hello World', 'Anna', 'Boris', 'Cent', 'Dollar'];
console.log(findIndex(words4, (element) => element  === 'Fedor'));
console.log(findIndex(words4, (element) => element  === 'Puma'));

console.log('----------------------------------------------------------');
