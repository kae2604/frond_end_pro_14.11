'use strict';

const email = prompt("Please enter a valid email address");
const password = prompt("Please enter your password");
const isEmailVerified = confirm('Do you confirm your email address?');

let canLogin =
    email !==null && email.trim().length > 0  &&
    password !==null && password.trim().length > 0 &&
    isEmailVerified;

if (canLogin) {
    console.log('login successful');
} else {
    console.log('Please check the data');
}


