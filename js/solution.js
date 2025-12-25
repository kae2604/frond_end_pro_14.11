'use strict';

const ul = document.body.children[1];
const ArrOfLi = [];

for (const li of ul.children) {
    console.log(li.innerHTML);
    ArrOfLi.push(li.innerHTML);
}
console.log(`Amound of elements: ${ul.children.length}`);
console.log(`Array of elements: 
[${ArrOfLi}]`);
