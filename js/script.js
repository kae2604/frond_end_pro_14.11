'use strict';

const name = prompt('What is your name?');
let answer= confirm(`${name} , Do you want to see a greeting`);
if (answer) {
    alert(`Hello, ${ name }! Welcome to our website!`);
}
