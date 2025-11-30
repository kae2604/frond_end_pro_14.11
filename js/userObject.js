'use strict';

const user = {
    // name : prompt('Please enter your name'),
    // age : prompt('Please enter your age'),
    // email : prompt('Please enter your email'),
    // isSubscribed : confirm('Are you subscribed?'),
    balance : prompt('Please enter your balance'),
    verified : prompt('If you verified please enter "1", if not verified enter "0"'),
}

let { balance } = user;
balance = +balance;
console.log(balance);

let { verified } = user;
verified = !!(+verified);
console.log(verified, typeof verified);