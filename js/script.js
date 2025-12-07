'use strict';

const padString = function(string, length, symbol, condition = true) {

    let errors = [];

    if (string === null || typeof string !== 'string' || string.trim() === '') {
        errors.push("You entered an incorrect string")
    } else{
        if(string.length > length){
            string = string.substring(0, length);
        } else {
            if (symbol !== null && symbol.trim() !== '' && symbol.length === 1) {
                while (string.length < length) {
                    if (condition) {
                        string += symbol;
                    } else {
                        string = symbol + string;
                    }
                }
            }
        }
    }

    if (length <= 0 || isNaN(length)) {
        errors.push("Length must be a positive integer more than zero");
    }

    if ((string === null || string.length < length || typeof string !== 'string' || string.trim() === '') &&
        (symbol === null || symbol.trim() === "" || symbol.length > 1)) {
        errors.push("Symbol must be a single character of the string");
    } else if ((length <= 0 || isNaN(length)) &&
    (symbol === null || symbol.trim() === "" || symbol.length > 1)){
        errors.push("Symbol must be a single character of the string");
    }

    if (errors.length > 0) {
    return errors.join('\n');
    } else {
        return string;
    }
}

let inputString = prompt('Enter a string');
let inputNumber = +prompt('Enter a number');
let inputSymbol = prompt('Enter symbol');
let inputCondition = confirm ('Enter condition');

console.log(padString(inputString,  inputNumber, inputSymbol,inputCondition));


