'use strict';

/**
 * Checks if at least one element in an array satisfies the condition defined by the callback function.
 *
 * @param {Array} arr - The array to check.
 * @param {Function} callback - A predicate function that receives:
 *                              (element, index, array) and must return true or false.
 * @returns {boolean} true if at least one element satisfies the condition, otherwise false.
 */

const some = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined){
            continue;
        }
        if (callback(arr[i], i, arr)){
            return true
        }
    }
    return false;
}

console.log("Script#7 Example #1");

const numbers7 = [1, 2, 3, 9,, 1, 2, 3, 4, 5];
console.log(some(numbers7, (element) => element >= 15));
console.log(some(numbers7, (element) => element >= 6));

console.log("Script#7 Example #2");

const words7 = ['Anna', , 'Dollar', 'Egor', 'Fedor', 'Galina', 'Hello World', 'Anna', 'Boris', 'Cent', 'Dollar'];
console.log(some(words7, (element) => element.length > 33));
console.log(some(words7, (element) => element === 'Hello World'));

console.log('----------------------------------------------------------');