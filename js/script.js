'use strict';

let inputAge = prompt('Enter your age');

if (inputAge === null || inputAge === '') {
    alert ("You haven’t entered your age.");
}
else{
    let age = Number(inputAge);

    if (age < 18 && age >0){
        let ageVerification = confirm("You are under 18. Is there an adult with you who allows viewing?");

        if (ageVerification){
            alert("Access allowed with adult permission.");
        }
        else {
            alert("Access denied.");
        }
    }
    else if (age >= 18){
        alert("Access granted. Enjoy your viewing!");
    }
    else {
        alert("You entered incorrect data.");
    }
}

