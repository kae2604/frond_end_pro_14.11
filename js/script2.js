'use strict';

const arr2 = [1, 2, 3, 4, 5];
let sum2 = 0;

for (let i = 0; i < arr2.length; i++) {
sum2 = sum2 + arr2[i] ** 2;
// sum2 = sum2 + Math.pow(arr2[i], 2);
}
console.log(sum2);



