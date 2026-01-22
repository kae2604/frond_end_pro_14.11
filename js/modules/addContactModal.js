import {listHandler, contactService} from "./GeneralVariables.js";
import {createModalsAddContact} from "./createModals.js";
import {createToastContact} from "./createModals.js";

const validationRegExps = {
    'fullName': /^(?=.{2,80}$)[\p{L}]+(?:[ '\-][\p{L}]+){0,3}$/u,
    'phone': /^\+[1-9]\d{7,14}$/,
    'address': /^(?=.{5,120}$)[\p{L}\d][\p{L}\d\s.,'’\-\/#]+$/u
};

const errorMessages = {
    'fullName': 'Full Name Required',
    'phone': 'Phone Number Required',
    'address': 'Address Required',
};

const addContactModal = createModalsAddContact( 'addContactModal');
const addContactModalTrigger = document.querySelector('[data-add-contact-modal-btn]');
const toastAdded = createToastContact('contactRemoved', 'data-toast-add-body', 'Added');

addContactModalTrigger.addEventListener('click', () => {
    addContactModal.show();
});

addContactModal._element.querySelector(`form#add-contact-form`)
    .addEventListener('submit', evt => {
        evt.preventDefault();
        let formValidated = true;
        const inputs = evt.target.querySelectorAll('input, textarea');
        const data = Array.from(inputs).reduce((acc, input) => {
            const {name, value, parentElement: wrapper} = input;

            if(validationRegExps[name].test(value)) {
                acc[name] = value
            } else {
                const errBlock = document.createElement('div');
                errBlock.innerHTML = errorMessages[name];
                errBlock.classList.add('text-danger', 'error-validation');
                wrapper.append(errBlock);
                formValidated = false;
            }
            return acc;
        }, {});

        if(!formValidated) return null;

        contactService.addContact(data);
        const savedContact = contactService.getContacts().at(-1);
        listHandler.addElement(savedContact);
        addContactModal.hide();

        const toastAddText = document.querySelector('[data-toast-add-body]');
        toastAddText.textContent = `Contact "${savedContact.fullName}" successfully added!`;
        toastAdded.show();
        evt.target.reset();
        document.querySelectorAll('.error-validation').forEach(item => item.remove());
    });
