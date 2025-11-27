'use strict';

const user = {
    name:"Alex",
    age: 25,
    city: "Kyiv",
    job: "Frontend"
};


// “Create separate variables name, age, city, and job using destructuring.”

const { name, age , city, job } = user;


// “Create a new object "shortInfo" that contains only name and city.”

const shortInfo = {
    name: name,
    city: city
}


// “Create a new object "renamed" in which the keys are renamed:
//     name → fullName
//     city → location.”


const { name: fullName, city: cityLocation } = user;

const renamed = {
    fullName:  fullName,
    cityLocation:  cityLocation
}
