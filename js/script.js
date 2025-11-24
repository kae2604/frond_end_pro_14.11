'use strict';

let name = prompt('What is your name?');

if (name === null || name === '') {
    name = "You did not enter your name!";
} else if( !isNaN(name)) {
    name = "You enter your name incorrect!";
}


let age = prompt('What is your age?');

if (age === null || age === '') {
    age = "You did not enter your age!";
} else if (age < 0 || isNaN(age)) {
    age = "You entered incorrect data."
}
else {
    age = +age;
}


let address = prompt('What is your address?');

if (address === null || address === '') {
    address = "You did not enter your address!";
} else if( !isNaN(address) ) {
    address = "You enter your address incorrect!";
}


// In this code I compared strings:


// let feelToJs = prompt('Do you like Java Script?')?.toLowerCase();
//
// if (feelToJs === 'yes') {
//     feelToJs = 'You like JavaScript!';
// } else if (feelToJs === 'no') {
//     feelToJs = 'You do not like JavaScript!';
// }  else if (feelToJs === undefined || feelToJs === '') {
//     feelToJs = 'You did not enter your opinion!';
// } else {
//     feelToJs = "You entered incorrect data."
// }


let feelToJs = prompt('Do you like Java Script?')?.toLowerCase();

if (feelToJs === undefined || feelToJs === '') {
    feelToJs = 'You did not enter your opinion!';
} else {
    feelToJs = feelToJs === 'yes';
    if (feelToJs) {
        feelToJs = 'You like JavaScript!';
    }
    else {
        feelToJs = 'You do not like JavaScript or you enter incorrect data!';
    }
}


alert(`Hello, ${name.charAt(0).toUpperCase() + name.slice(1)};
Your age is: ${age};
You live in: ${address.charAt(0).toUpperCase() + address.slice(1)};
Attitude towards JavaScript: ${feelToJs}`);














