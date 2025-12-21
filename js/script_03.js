'use strict';

const someObject_7 = {
    name: "Denis",
    fistName: "Collins",
    age: "64",
    gender: "male"
}

const someObject_8 = {
    name: "Monica",
    fistName: "Mur",
    age: "48",
}

const someObject_9 = {
    name: "Kris",
    fistName: "Black",
    age: "14",
    gender: "female"
}

const someFunction_3 = function (arg_1, arg_2) {
    if (this.age < 18) {
        arg_2 = "teenager"
    }
    if (this.age >= 18 && this.age < 60) {
        arg_2 = "adult"
    }
    if (this.age >= 60) {
        arg_2 = "elderly"
    }
    if (arg_1 && arg_2) {
        return `${arg_1} ${this.name} ${this.fistName}, ${this.age} / ${arg_2}`;
    }
    if (arg_1) {
        return `${arg_1} ${this.name} ${this.fistName}, ${this.age}`;
    }
    if (arg_2) {
        return `${this.name} ${this.fistName}, ${this.age} / ${arg_2}`;
    }
    return `${this.name} ${this.fistName}, ${this.age}`;
}

/**
 * Custom implementation of bind.
 *
 * Returns a new function that, when called, invokes the original function
 * with `this` set to the provided object and optionally pre-filled arguments.
 *
 * @param {Function} randomFunction - The original function to bind
 * @param {Object} randomObject - The object to be used as `this` when the function is called
 * @param {...any} args - Optional arguments to pre-fill the function call
 * @returns {Function} A new function with bound context and pre-filled arguments
 */

const customBind = function (randomFunction, randomObject, ...args) {
    return function () {
        randomObject.newElement = randomFunction;
        const callRandomFunction = randomObject.newElement(...args);
        delete randomObject.newElement;
        return callRandomFunction
    }
}

const callCustomBind_1 = customBind (someFunction_3, someObject_7,);
const callCustomBind_2 = customBind (someFunction_3, someObject_8, "Mrs.")
const callCustomBind_3 = customBind (someFunction_3, someObject_9, "Miss.")

console.log("Script #3")
console.log(callCustomBind_1());
console.log(callCustomBind_2());
console.log(callCustomBind_3());
console.log("------------------------------------------------------------------------------------------------")









