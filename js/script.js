'use strict';

/**
 * Recursively flattens a multidimensional array into a one-dimensional array.
 *
 * The function accepts only one argument. If more than one argument is provided,
 * it throws an error. Undefined elements in the array are skipped.
 *
 * @param {Array} randomArray - The array to flatten. Can be multidimensional.
 * @returns {Array} A new one-dimensional array containing all non-undefined elements.
 * @throws {Error} If more than one argument is passed to the function.
 */

const customFlat = function (randomArray){
    if (arguments.length > 1){
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }

    let newArray = [];

    for (let i = 0; i < randomArray.length; i++){
        if (randomArray[i] === undefined){
            continue;
        }
        if (!Array.isArray(randomArray[i])){
            newArray = [...newArray, randomArray[i]];
        }
        else {
            newArray = [...newArray, ...customFlat(randomArray[i])]
        }
    }
    return newArray;
}

const someArray_1 = [1, 2, 3, 4, 5, 6];
const someArray_2 = [1, [2, 3, [4, 5]], 6, [7, [8, 9, [10, 11]]], 12];
const someArray_3 = [1, 2, , "b", , 6];

console.log(customFlat(someArray_1));
console.log(customFlat(someArray_2));
console.log(customFlat(someArray_3));
console.log(customFlat(someArray_2, "some argument"));




































