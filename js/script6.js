'use strict';

/**
 * Checks if all elements in an array satisfy the condition defined by the callback function.
 *
 * @param {Array} arr - The array to check.
 * @param {Function} callback - A predicate function that receives:
 *                              (element, index, array) and must return true or false.
 * @returns {boolean} true if all elements satisfy the condition, otherwise false.
 */

const every = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined){
            continue;
        }
        if (!callback(arr[i], i, arr)){
            return false;
        }
    }
    return true;
}

console.log("Script#6 Example #1");

const numbers6 = [1, 2, 3, 9,, 1, 2, 3, 4, 5];
console.log(every(numbers6, (element) => element >= 1));
console.log(every(numbers6, (element) => element >= 6));

console.log("Script#6 Example #2");


const words6 = ['Anna', , 'Dollar', 'Egor', 'Fedor', 'Galina', 'Hello World', 'Anna', 'Boris', 'Cent', 'Dollar'];
console.log(every(words6, (element) => element.length > 3));
console.log(every(words6, (element) => element === 'Hello World'));

console.log('----------------------------------------------------------');



// '---------if use for of-----------';
//
// const every = (arr, callback) => {
//     for (let i of arr) {
//         if (i === undefined){
//             continue;
//         }
//         if (!callback(i)){
//             return false;
//         }
//     }
//     return true;
// }

