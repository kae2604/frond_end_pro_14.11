'use strict';

/**
 * Removes the first element from an array and returns it.
 * Modifies the original array by shifting all elements to the left.
 *
 * @param {Array} arr - The array from which the first element is removed.
 * @returns {*} The removed first element, or undefined if the array is empty.
 */

const shift = (arr) =>{
    if (arr.length === 0){
        return undefined
    }
    const removeElement = arr[0];
    for (let i = 0; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    return removeElement
}

console.log("                  Script #1, Example #1");
console.log("Original array:");
const arrayNumbers1 = [1, 2, 3, 4, 5];
console.log(arrayNumbers1);
console.log(`The element was remowed: ${shift(arrayNumbers1)}`);
console.log("New array:");
console.log(arrayNumbers1);

console.log("                   Script #1, Example #2");

console.log("Original array:");
const arrayNumbers2 = [];
console.log(arrayNumbers2);
console.log(`The element was remowed: ${shift(arrayNumbers2)}`);
console.log("New array:");
console.log(arrayNumbers2);

console.log("---------------------------------------------------");