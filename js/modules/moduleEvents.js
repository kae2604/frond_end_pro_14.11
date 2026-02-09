import profileModel from './profileModel.js';
import {createProfileModelUI,
        createMistakeUI,
        cleanProfileModelUI,
        cleanMistakeUI,
        highlightInvalidInput,
        cleanJsonUI,
        createJsonUI} from './moduleUI.js';

const form = document.querySelector('[data-form]');

form.addEventListener('click', (event) => {
    const btnFreeze = event.target.closest('[data-freeze]');
    if (!btnFreeze) {
        return;
    }
    Object.freeze(profileModel);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = event.target.querySelectorAll('input');
    const dataFromInputs = Array.from(inputs).reduce((accumulator, input) => {
        const {name, value} = input;
        accumulator[name] = value;
        return accumulator;
    },{});

    if (Object.isFrozen(profileModel)){
        cleanMistakeUI();
        createMistakeUI('frozen');
        return;
    } else{
        profileModel.firstName = dataFromInputs.firstName;
        profileModel.lastName = dataFromInputs.lastName;
        profileModel.email = dataFromInputs.email;

        cleanMistakeUI();

        if(profileModel.firstName && profileModel.lastName && profileModel.email){
            createProfileModelUI (profileModel.fullName, profileModel.email, profileModel.updated);
        } else {
            if (!profileModel.firstName){
                createMistakeUI('First name');
                cleanProfileModelUI();
                highlightInvalidInput("firstName");
            }
            if(!profileModel.lastName){
                createMistakeUI('Last name');
                cleanProfileModelUI();
                highlightInvalidInput("lastName");
            }
            if(!profileModel.email) {
                createMistakeUI('Email');
                cleanProfileModelUI();
                highlightInvalidInput("email");
            }
        }
    }
});

const jsonBox = document.querySelector('[data-json-box]');
jsonBox.addEventListener('click', (event) => {
    const btnJson = event.target.closest('[data-json]');
    if (!btnJson) {
        return;
    }
    cleanJsonUI();
    const descriptors = Object.getOwnPropertyDescriptors(profileModel);
    createJsonUI(descriptors);
})