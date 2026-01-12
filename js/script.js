'use strict';

const form = document.querySelector('[data-form]');
const email = document.querySelector('[data-email]');
let isInputEmail = false;
let  errorEmail = null;
let isRightEmail = false;
let valueOfEmail = null;

email.addEventListener('input', (event) => {
    isInputEmail = true;
});

email.addEventListener('blur', (event) => {
    if (!isInputEmail) {
        return
    }
    if (isRightEmail ){
        isRightEmail = false;
    }

    valueOfEmail = event.target.value.trim();
    const isAt = valueOfEmail.includes('@');
    const indexAt = valueOfEmail.indexOf('@');
    const isGap = valueOfEmail.includes(' ');
    const lastDot = valueOfEmail.lastIndexOf('.');
    const forEmail = document.querySelector('[data-forEmail]');
    errorEmail = forEmail.querySelector('.errorTextUnderInput');
    let arrOfErrorsEmail = [];

    if (isGap){
        arrOfErrorsEmail.push('You email includes gaps');
    }
    if (!isAt){
        arrOfErrorsEmail.push('You email does not include @');
    }
    if (!valueOfEmail.includes('.', indexAt)){
        arrOfErrorsEmail.push('Your email does not include . before domain');
    }
    if (indexAt !== valueOfEmail.lastIndexOf('@')){
        arrOfErrorsEmail.push('Your email includes more than one @');
    }
    if (indexAt === 0){
        arrOfErrorsEmail.push('Your email includes nothing before @');
    }
    if ( valueOfEmail.slice(lastDot+1).length < 2){
        arrOfErrorsEmail.push('Your domain includes less than two letters');
    }
    const sumOfErrorsEmail = arrOfErrorsEmail.join('\n ');

    if (valueOfEmail.length === 0){
        if (!errorEmail){
            errorEmail = document.createElement('p');
            errorEmail.classList.add('errorTextUnderInput');
            forEmail.append(errorEmail);
        }
        errorEmail.textContent = 'You entered nothing';
        email.classList.add('errorInput');
    }
    else if (arrOfErrorsEmail.length > 0) {
        if (!errorEmail){
            errorEmail = document.createElement('p');
            errorEmail.classList.add('errorTextUnderInput');
            forEmail.append(errorEmail);
        }
        errorEmail.textContent = `${sumOfErrorsEmail}`;
        email.classList.add('errorInput');
    }
    else {
        email.classList.remove('errorInput');
        if (errorEmail){
            errorEmail.remove();
        }
        isRightEmail = true;
    }
});


const password = document.querySelector('[data-password]');
let valueOfPassword = null;
let isInputPassword = false;
let errorPassword = null;
let checkPassword = null;
let isRightPassword = false;

password.addEventListener('input', (event) => {
    isInputPassword = true;
})

password.addEventListener('blur', (event) => {
    if(!isInputPassword){
        return;
    }
    if (isRightPassword){
        isRightPassword = false;
    }
    if (checkPassword) {
        checkPassword.remove();
    }
    valueOfPassword = event.target.value.trim();
    const hasLetter =  [...valueOfPassword].some(element =>
        element.toLowerCase() >= 'a' &&  element.toLowerCase() <= 'z' ||
        element.toLowerCase() >= 'а' &&  element.toLowerCase() <= 'я'
    );
    const hasNumber = [...valueOfPassword].some(element =>
        element >= '0' && element <= '9'
    );
    const isGap = valueOfPassword.includes(' ');
    const forPassword = document.querySelector('[data-forPassword]');
    errorPassword = forPassword.querySelector('.errorTextUnderInput');
    checkPassword = forPassword.querySelector(".checkPassword");
    let arrOfErrorsPassword = [];

    if (valueOfPassword.length < 8) {
        arrOfErrorsPassword.push('You entered too short password');
    }
    if (!hasLetter) {
        arrOfErrorsPassword.push('Your password has not any letters');
    }
    if (!hasNumber) {
        arrOfErrorsPassword.push('Your password has not any Number');
    }
    if (isGap) {
        arrOfErrorsPassword.push('Your password includes gaps')
    }
    const sumOfErrorsPassword = arrOfErrorsPassword.join('\n ')

    if (valueOfPassword.length === 0) {
        if(!errorPassword){
            errorPassword = document.createElement('p');
            errorPassword.classList.add('errorTextUnderInput');
            forPassword.append(errorPassword);
        }
        errorPassword.textContent = 'You entered nothing';
        password.classList.add('errorInput');
    }

    else if (arrOfErrorsPassword.length > 0) {
        if(!errorPassword){
            errorPassword = document.createElement('p');
            errorPassword.classList.add('errorTextUnderInput');
            forPassword.append(errorPassword);
        }
        errorPassword.textContent = `${sumOfErrorsPassword}`;
        password.classList.add('errorInput');
    }
    else {
        password.classList.remove('errorInput');
        if (errorPassword) {
            errorPassword.remove();
        }

        let countBigLetter = 0;
        for(let l of valueOfPassword){
            if ((l >= 'A' && l <= 'Z') ||  (l >= 'А' && l <= 'Я')){
                countBigLetter++
            }
        }
        let countNumbers = 0;
        for(let n of valueOfPassword){
            if (n >= '0' && n <= '9'){
                countNumbers++
            }
        }
        const specialSymbol = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~";
        const hasSpecialSymbol = [...specialSymbol].some(symbol => valueOfPassword.includes(symbol));

        if (countBigLetter > 1 && countNumbers > 3 && hasSpecialSymbol) {
            if (checkPassword) {
                checkPassword.remove();
            }
            checkPassword = document.createElement("p");
            checkPassword.classList.add('checkPasswordGood');
            checkPassword.textContent = "Your password is good enough"
            forPassword.append(checkPassword);
            isRightPassword = true;
        } else {
            if (checkPassword) {
                checkPassword.remove();
            }
            checkPassword = document.createElement("p");
            checkPassword.classList.add('checkPasswordBad');
            checkPassword.textContent = "Your password is not good enough!!!"
            forPassword.append(checkPassword);
            isRightPassword = true;
        }
    }
});

const showPassword = document.querySelector('[data-showPassword]');
showPassword.addEventListener('click', (event) => {
    password.type = password.type === 'password' ? 'text' : 'password';
})

const confirmPassword = document.querySelector('[data-confirmPassword]');
let valueOfConfirmPassword = null;
let isInputConfirmPassword = false;
let errorConfirmPassword = null;
let isRightConfirmPassword = false;

confirmPassword.addEventListener('input', (event) => {
    isInputConfirmPassword = true;
})

confirmPassword.addEventListener('blur', (event) => {
    if (!isInputConfirmPassword) {
        return;
    }
    if(isRightConfirmPassword){
        isRightConfirmPassword = false;
    }
    if (errorConfirmPassword){
        errorConfirmPassword.remove();
    }
    valueOfConfirmPassword = event.target.value.trim();
    const forConfirmPassword = document.querySelector('[data-forConfirmPassword]');
    errorConfirmPassword = forConfirmPassword.querySelector('.errorTextUnderInput');
    if (valueOfConfirmPassword !== valueOfPassword){
        errorConfirmPassword = document.createElement('p');
        errorConfirmPassword.classList.add('errorTextUnderInput');
        errorConfirmPassword.textContent = 'Your passwords do not match';
        confirmPassword.classList.add('errorInput');
        forConfirmPassword.append(errorConfirmPassword);
    }
    else {
        isRightConfirmPassword = true;
        confirmPassword.classList.remove('errorInput');
    }
});

const showConfirmPassword = document.querySelector('[data-showConfirmPassword]');
showConfirmPassword.addEventListener('click', (event) => {
    confirmPassword.type = confirmPassword.type === 'password' ? 'text' : 'password';
})

const age = document.querySelector('[data-age]');
let isInputAge = false;
let errorAge = null;
let isRightAge = false;
let valueOfAge = null;

age.addEventListener('input', (event) => {
    isInputAge = true;
})
age.addEventListener('blur', (event) => {
    if (!isInputAge) {
        return;
    }
    if(isRightAge){
        isRightAge = false;
    }
    valueOfAge = event.target.value.trim();
    const forAge = document.querySelector('[data-forAge]');
    errorAge = forAge.querySelector('.errorTextUnderInput');
    if (valueOfAge < 16){
        if(!errorAge){
            errorAge = document.createElement('p');
            errorAge.classList.add('errorTextUnderInput');
            forAge.append(errorAge);
        }
        errorAge.textContent = 'You are too young';
        age.classList.add('errorInput');
    }
    else if (valueOfAge > 120){
        if(!errorAge){
            errorAge = document.createElement('p');
            errorAge.classList.add('errorTextUnderInput');
            forAge.append(errorAge);
        }
        errorAge.textContent = 'You are too old';
        age.classList.add('errorInput');
    }
    else {
        age.classList.remove('errorInput');
        if (errorAge) {
            errorAge.remove();
        }
        isRightAge = true;
    }
});

const city = document.querySelector('[data-city]');
let agree = document.querySelector('[data-agree]');

let finalObject = {};
let showJsonString = null;
let selectCity = null;
let notAgree = null;

const submit = document.querySelector('[data-submit]');
submit.addEventListener('click', (event) => {
    event.preventDefault();

    if(showJsonString){
        showJsonString.remove();
    }

    if(isRightEmail && isRightPassword && isRightConfirmPassword && isRightAge && city.value && agree.checked){
        finalObject.email = valueOfEmail;
        finalObject.password = valueOfPassword;
        finalObject.confirmPassword = valueOfConfirmPassword;
        finalObject.age = valueOfAge;
        finalObject.city = city.value

        const jsonString = JSON.stringify(finalObject, null, 2);
        showJsonString = document.createElement('p');
        showJsonString.textContent = jsonString;
        form.after(showJsonString);
    }
    else {
        if(!isRightEmail){
            email.focus();
            return
        }
        if(!isRightPassword){
            password.focus();
            return
        }
        if(!isRightConfirmPassword){
            confirmPassword.focus();
            return;
        }
        if(!isRightAge){
            age.focus();
            return
        }
        if(!city.value){
            selectCity = document.querySelector('[data-city]');
            selectCity.classList.add('errorInput');

            const cityInput = document.querySelector('[data-city]');

            cityInput.addEventListener('change', () => {
                if (city.value) {
                    city.classList.remove('errorInput');
                }
            });

        }
        if(!agree.checked){
            notAgree = document.querySelector('.agree');
            notAgree.classList.add('notAgree');

            agree.addEventListener('change', () => {
                if (agree.checked) {
                    notAgree.classList.remove('notAgree');
                }
            });
        }
    }
})

const clear = document.querySelector('[data-clear]');
clear.addEventListener('click', (event) => {

    email.value = '';
    email.classList.remove('errorInput');
    if (errorEmail !== null){
        errorEmail.remove();
        errorEmail = null;
    }

    password.value = '';
    password.classList.remove('errorInput');
    if (errorPassword !== null){
        errorPassword.remove();
        errorPassword = null;
    }
    if (checkPassword !== null){
        checkPassword.remove();
        checkPassword= null;
    }
    confirmPassword.value = '';
    confirmPassword.classList.remove('errorInput');
    if (errorConfirmPassword !== null){
        errorConfirmPassword.remove();
        errorConfirmPassword  = null;
    }

    age.value = '';
    age.classList.remove('errorInput');
    if (errorAge !== null){
        errorAge.remove();
        errorAge = null;
    }
    if (city.value){
        city.value = '';
    }
    if(selectCity){
        selectCity.classList.remove('errorInput');
    }
    if(notAgree){
        notAgree.classList.remove('notAgree');
    }
    if (agree){
        agree.checked = false;
    }
    if (showJsonString) {
        showJsonString.remove();
        showJsonString = null;
    }
})




























