'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];

// --------------------First solution (It works only if numbers are in order)-----------------------

// const removeElement = function (arr, deleteNumber ){
//     for (let i = 0; i <= arr.length-1; i++) {
//         if (arr[i] >= deleteNumber) {
//             arr[i] = arr[i + 1];
//         }
//     }
//     arr.pop()
//     return arr
// }
//
// // console.log(removeElement(array, 6));
// removeElement(array, 5);
// console.log(array);


// ----------------------Second solution (It works only if numbers are in order)------------------

// const removeElement = function (arr, deleteNumber) {
//     const indexDeleteNumber = deleteNumber - 1;
//     const basketElement = arr.splice(indexDeleteNumber , 1);
//     return arr
// }
// removeElement(array, 5);
// console.log(array);


// ---------------------------Third solution (universal solution) --------------------------------

const removeElement = function (arr, deleteNumber) {
    const indexDeleteNumber = arr.indexOf(deleteNumber);
    if (indexDeleteNumber !== -1) {
        const basketElement = arr.splice(indexDeleteNumber , 1);
        return arr
    } else {
        console.log("This number isn't exist");
    }
}
removeElement (array, 5);
console.log(array);

