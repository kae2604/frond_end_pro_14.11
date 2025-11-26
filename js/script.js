'use strict';

let age = prompt('What is your age?');

if (isNaN(age) || age === null || age.trim().length === 0 ) {
    alert("You entered incorrect age!");
} else {
    age = +age + 5;
    alert(`In five years you are ${age}`);
}
