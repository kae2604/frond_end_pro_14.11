'use strict';

const randomNumber = 1;
let simpleNumber = true;

for ( let figure = 2; figure < randomNumber ; figure++ ) {
    if (randomNumber % figure === 0) {
        simpleNumber = false;
        break;
    }
}

if (simpleNumber && randomNumber !== 1) {
    console.log("Число просте");
} else {
    console.log("Число не просте");
}




