'use strict';

const user = {
    name : "Alex",
    age : 42,
    email : 'abc@ukr.net',
    isSubscribed : true,
    balance : "635.67",
    verified : "1",
}

let { balance } = user;
balance = +balance;

let { verified } = user;
verified = !!(+verified);

let isAccess = null;

if (user.age >= 18 && verified && (user.isSubscribed || balance > 0 )) {
    isAccess = "Access granted";
} else if (user.age < 18){
    isAccess = "Access restricted due to age";
}
else {
    isAccess = "Access denied";
}

const ageString = user.age == '42';
const ageNumber = user.age === '42';

console.log(isAccess);
console.log("user.age == '42' ", ageString);
console.log("user.age === '42' ", ageNumber);

