'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = function (Length, characters){
    let sum = "";
    for (let i = 0; i < Length; i++) {
        let randomSymbol = characters[Math.floor(Math.random() * characters.length)]
        sum += randomSymbol;
    }
    return sum
}
const key = generateKey(16, characters);
console.log(key);





