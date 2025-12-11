'use strict';

/**
 * Returns the first element in the array for which the callback function
 * returns true. Iterates from left to right.
 *
 * @param {Array} arr - The array to search through.
 * @param {Function} callback - A predicate function that receives:
 *                              (element, index, array) and must return true or false.
 * @returns {*} The first element that satisfies the predicate,
 *              or undefined if no such element exists.
 */

const find = (arr, callback) => {
for (let i = 0; i < arr.length; i++) {
if (callback(arr[i], i, arr)){
    return arr[i]
        }
    }
return undefined;
}

console.log("Script#3 Example #1");

const numbers3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(find (numbers3, (element) => element === 3));
console.log(find (numbers3, (element) => element === 9));

console.log("Script#3 Example #2");

const words3 = ['Anna', 'Boris', 'Cent', 'Dollar', 'Egor', 'Fedor', 'Galina', 'Hello World', 'Anna', 'Boris', 'Cent', 'Dollar'];
console.log(find (words3, (element) => element === 'Hello World'));
console.log(find (words3, (element) => element === 'Adidas'));

console.log('----------------------------------------------------------');


// '----------if use fore of-----------';
//
// const find = (arr, callback) => {
//     for (let i of arr) {
//         if (callback(i)){
//             return i
//             }
//     }
//     return undefined;
// }
