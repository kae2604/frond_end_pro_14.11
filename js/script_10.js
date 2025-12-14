'use strict';

/**
 * Replaces all elements in an array with 0 except for the maximum element(s).
 *
 * @param {number[]} arr - The original array of numbers.
 * @returns {number[]} The modified array with only the maximum element(s) kept and others set to 0.
 */


// FIRST OPTION USING THE FUNCTION FROM SCRIPT#3

const onlyMaxElement = function (arr) {
    let maxEl = maxElement(arr).maxNumber; // *** function from script#3 ***

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== maxEl) {
            arr[i] = 0;
        }
    }
    return arr
}

const result_10 = onlyMaxElement(array);

console.log("Script #10")
console.log(`Array of max element and zero = [${result_10}];`);

console.log("--------------------------------------------------------------------------------------------------------")


// SECOND OPTION USING TWO CYCLES

// const onlyMaxElement = function (arr) {
//     let maxNumber = arr[0];
//
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxNumber) {
//             maxNumber = arr[i];
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== maxNumber) {
//             arr[i] = 0;
//         }
//     }
//     return arr
// }
//
// const result_10 = onlyMaxElement(array);
//
// console.log("Script #10")
// console.log(`Array of max element and zero = [${result_10}];`);
//
// console.log("--------------------------------------------------------------------------------------------------------")














