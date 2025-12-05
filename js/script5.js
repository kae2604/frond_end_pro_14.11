'use strict';

const randomNumber2 = 1;
let isNumber = "Це число НЕ можна отримати цим шляхом";

for (let x = 0; 3 ** x <= randomNumber2; x++) {
    if (3 ** x === randomNumber2) {
        isNumber = `Ви можете отримати число ${randomNumber2},
якщо возведете число 3 в ступінь ${x}`
break;
    }
}
console.log(isNumber);





