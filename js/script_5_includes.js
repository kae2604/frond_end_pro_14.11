'use strict';

/**
 * Checks if an array contains the specified element, starting the search from fromIndex.
 *
 * @param {Array} arr - The array to search in.
 * @param {*} element - The element to check for.
 * @param {number} [fromIndex=0] - The index to start searching from.
 *                                 Can be negative; if so, it is counted from the end.
 * @returns {boolean} true if the element is found, otherwise false.
 */

const includes = (arr, element, fromIndex=0,) => {
    if (fromIndex < 0) {
        fromIndex = arr.length + fromIndex;
        if (fromIndex < 0) {
            fromIndex = 0;
        }
    }
    for (let i = fromIndex; i < arr.length; i++){
        if (arr[i] === element){
            return true;
        }
    }
    return false;
}

console.log("Script#5 Example #1");

const numbers5 = [1, 7, 3, 9, 5, 1, 2, 3, 4, 5];
console.log(includes(numbers5, 2,));
console.log(includes(numbers5, 2, -33));


console.log("Script#5 Example #2");

const words5 = ['Anna', , 'Cent', 'Dollar', 'Egor', 'Fedor', 'Galina', 'Hello World', 'Anna', 'Boris', 'Cent', 'Dollar'];
console.log(includes(words5, 'Anna', 3));
console.log(includes(words5, 'Hello World', -4));

console.log('----------------------------------------------------------');