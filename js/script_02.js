'use strict';

const someObject_4 = {
    name: "Ben",
    fistName: "Smith",
    age: "45",
    gender: "male"
}

const someObject_5 = {
    name: "Anna",
    fistName: "Corner",
    age: "32",
}

const someObject_6 = {
    name: "Linda",
    fistName: "Bush",
    age: "16",
    gender: "female"
}

const someFunction_2 = function (arg_1, arg_2) {
    if (this.gender === "male") {
        arg_1 = "Mr."
    }
    if (this.gender === "female") {
        arg_1 = "Mrs."
    }
    if (this.age < 18) {
        arg_1 = "Miss"
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
 * Custom implementation of Function.prototype.apply.
 *
 * Invokes a function with an explicitly specified `this` context
 * and arguments provided as an array.
 *
 * @param {Object} randomObject - The object to be used as the `this` context.
 * @param {Function} randomFunction - The function to be invoked.
 * @param {Array} Array - An array of arguments to pass to the function.
 * @returns {*} The result returned by the invoked function.
 */

const customApply = function (randomFunction, randomObject, Array) {
    randomObject.newElement = randomFunction;
    const callRandomFunction = randomObject.newElement(...Array);
    delete randomObject.newElement;
    return callRandomFunction;
};

console.log("Script #2")
console.log(customApply(someFunction_2, someObject_4, [null, "Hobby: fishing"]));
console.log(customApply(someFunction_2, someObject_5, [null, "Hobby: running"]));
console.log(customApply(someFunction_2, someObject_6, []));
console.log("------------------------------------------------------------------------------------------------")

