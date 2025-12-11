'use strict';

/**
 * Returns the index of the first occurrence of the specified element in the array.
 *
 * @param {Array} arr - The array in which the search is performed.
 * @param {*} element - The element to search for.
 * @param {number} [fromIndex=0] - The index to start the search from.
 *                                 Can be negative.
 * @returns {number} The index of the found element, or -1 if the element is not found.
 */

const indexOf = function (arr, element, fromIndex = 0) {
    if (fromIndex < 0){
        fromIndex = arr.length + fromIndex;
        if (fromIndex < 0) {
            fromIndex = 0;
        }
    }
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === element){
            return i
        }
    }
    return -1;
}

console.log("Script#1 Example #1");

const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(indexOf (numbers, 4, -5));
console.log(indexOf (numbers, 9));


console.log("Script#1 Example #2");

const words = ['Anna', 'Boris', 'Cent', 'Dollar', 'Egor', 'Fedor', 'Galina', 'Hello World', 'Anna', 'Boris', 'Cent', 'Dollar', 'Egor', 'Fedor', 'Galina', 'Hello World'];
console.log(indexOf (words, 'Dollar', 5));
console.log(indexOf (words, 7));

console.log('----------------------------------------------------------');

