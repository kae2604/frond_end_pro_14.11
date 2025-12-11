'use strict';

/**
 * Returns the last index at which a given element can be found in the array,
 * searching backward starting from fromIndex.
 *
 * @param {Array} arr - The array to search in.
 * @param {*} element - The element whose last index should be found.
 * @param {number} [fromIndex=arr.length-1] - The index to start searching backward from.
 *                                            Can be negative; if so, it is counted from the end.
 * @returns {number} The last index of the found element, or -1 if the element is not found.
 */

const  lastIndexOf = function (arr, element, fromIndex = arr.length-1) {
    if (fromIndex < 0){
        fromIndex = arr.length + fromIndex;
        if (fromIndex < 0) {
            fromIndex = 0;
        }
    }
    for (let i = fromIndex; i >= 0; i--){
        if (arr[i] === element){
            return i;
        }
    }
    return -1;
}

console.log("Script#2 Example #1");
const numbers2 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(lastIndexOf (numbers2, 4, -6));
console.log(lastIndexOf (numbers2, 8));

console.log("Script#2 Example #1");

const words2 = ['Anna', 'Boris', 'Cent', 'Dollar', 'Egor', 'Fedor', 'Galina', 'Hello World', 'Anna', 'Boris', 'Cent', 'Dollar'];
console.log(lastIndexOf (words2, 'Anna', ));
console.log(lastIndexOf (words2, 7));

console.log('----------------------------------------------------------');







