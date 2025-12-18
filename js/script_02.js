'use strict'

const users = [
    { id:  1, age: 17, active: true, email: "a@mail.com" },
    { id: 2, age: 22, active: true, email: "b@spam.com" },
    { id: 3, age: 30, active: false, email: "c@mail.com" },
    { id: 4, age: 35, active: true, email: "d@mail.com" },
    { id: 5, age: 40, active: true, email: "e@mail.com" },
];

const newUsers = users.filter((element) => {
    return (element.age >= 18 &&
            element.age <= 35 &&
            element.active &&
            element.email.slice(-8) !== "spam.com")
});
console.log("Script_2");
console.log(newUsers);
console.log("---------------------------------------------------------------------------");



