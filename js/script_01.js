'use strict';

const someObject_1 = {
    name: "John",
    fistName: "Twister",
    age: "55",
    position: "former minister",
}

const someObject_2 = {
    name: "Elis",
    fistName: "Cooper",
    age: "45",
    position: "secretary",
}

const someObject_3 = {
    name: "Lisa",
    fistName: "Anniston",
    age: "18",
    position: "student",
}

const someFunction_1 = function (arg_1, arg_2) {
    if (arg_1 && arg_2) {
        return `${arg_1} ${this.name} ${this.fistName}, ${this.position} / ${arg_2}`;
    }
    if (arg_1) {
        return `${arg_1} ${this.name} ${this.fistName}, ${this.position}`;
    }
    if (arg_2) {
        return `${this.name} ${this.fistName}, ${this.position} / ${arg_2}`;
    }
    return `${this.name} ${this.fistName}, ${this.position}`;
}

/**
 * Custom implementation of Function.prototype.call.
 *
 * Temporarily assigns the function to the provided object
 * and invokes it so that `this` refers to that object.
 *
 * @param {Object} randomObject - Object to be used as the `this` context
 * @param {Function} randomFunction - Function to invoke
 * @param {...any} args - Arguments passed to the function
 *
 * @returns {any} Result of the invoked function
 */

const customCall = function (randomFunction, randomObject,  ...args) {
    randomObject.newElement = randomFunction;
    const callRandomFunction = randomObject.newElement(...args);
    delete randomObject.newElement;
    return callRandomFunction;
};

console.log("Script #1")
console.log(customCall(someFunction_1, someObject_1, "Mister"));
console.log(customCall(someFunction_1, someObject_2, "Mrs.", `Likes Mister ${someObject_1.fistName}`));
console.log(customCall(someFunction_1, someObject_3, null, "likes cats"));
console.log("------------------------------------------------------------------------------------------------")

