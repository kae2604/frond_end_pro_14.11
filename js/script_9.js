'use strict';

/**
 * Calculates the product of positive elements in an array.
 *
 * @param {number[]} arr - The array of numbers to process.
 * @param {function} callback - A callback function to determine which elements to include.
 * @returns {number|string} The product of positive elements, or a message if there are no positive elements.
 */

const productPositive = (arr, callback) => {
    let product = 1;
    let isPositive = false;
    for ( let element of arr ) {
        if (callback(element)){
            product *= element;
            isPositive = true;
        }
    }
    if (!isPositive) {
        return "This array doesn't include positive elements.";
    }
    return product;
}

const result_9 = productPositive(array, function (element){
    return element > 0
});

console.log("Script #9")
console.log(`Product of positive elements = ${result_9};`);

console.log("--------------------------------------------------------------------------------------------------------")