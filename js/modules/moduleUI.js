
const createFullName = document.createElement('p');
createFullName.classList.add('fullName');

const createEmail = document.createElement('p');
createEmail.classList.add('email');

const createDateTime = document.createElement('p');
createDateTime.classList.add('datetime');

const modelBox = document.querySelector('[data-model-box]');
modelBox.append(createFullName, createEmail, createDateTime);

const createProfileModelUI = function (fullName, email, updated) {
    createFullName.textContent = `Full Name: ${fullName}`;
    createEmail.textContent = `Email: ${email}`;
    createDateTime.textContent = `Updated: ${updated}`;
};

const mistakesBox = document.querySelector('[data-mistakes-box]');

const createMistakeUI = function (data) {
    const createMistake = document.createElement('p');
    createMistake.classList.add('mistake');
    if (data === 'frozen'){
        createMistake.textContent = 'model was blocked!!!';
    } else {
        createMistake.textContent = `mistake in ${data}`;
    }
    mistakesBox.append(createMistake);
}

const cleanProfileModelUI = function () {
    createFullName.textContent = '';
    createEmail.textContent = '';
    createDateTime.textContent = '';
};

const cleanMistakeUI = function () {
    mistakesBox.textContent = '';
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(input => {
        input.classList.remove('invalidInput');
    });
};

const highlightInvalidInput = function (nameInput) {
    const invalidInput = document.querySelector(`input[name="${nameInput}"]`);
    invalidInput.classList.add('invalidInput');
}

const jsonBoxBox = document.querySelector('[data-json-box]');

const cleanJsonUI = function () {
    const isPre = jsonBoxBox.querySelector('pre')
    if (isPre) {
        isPre.remove();
    }
};

const createJsonUI = function (object) {
    const createJson = document.createElement('pre');
    createJson.classList.add('Json');
    createJson.textContent = JSON.stringify(object, null, 2);
    jsonBoxBox.append(createJson);
}
export {createProfileModelUI,
        createMistakeUI,
        cleanProfileModelUI,
        cleanMistakeUI,
        highlightInvalidInput,
        cleanJsonUI,
        createJsonUI}