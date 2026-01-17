'use strict';

// IIFE
// Global Scope
(function(){
    // Just for example
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

    // General Variables
    const toastAdded = new bootstrap.Toast(document.querySelector('#contactAdded'));
    const toastRemoved = new bootstrap.Toast(document.querySelector('#contactRemoved'));
    const addContactModalSelector = '#addContactModal';
    const addContactModal = new bootstrap.Modal(addContactModalSelector, {
        keyboard: true,
        backdrop: true
    });
    const addContactModalTrigger = document.querySelector('[data-add-contact-modal-btn]');

    const addRemoveContactModalSelector = '#addRemoveContactModal';
    const addRemoveContactModal = new bootstrap.Modal(addRemoveContactModalSelector, {
        keyboard: true,
        backdrop: true
    });

    let IdContactToRemove = null;

    const contactsAlert = document.querySelector('[data-contacts-alert]');
    const contactsList = document.querySelector('[data-contacts-list]');


    // UI Handling
    const uiContactsListHandler = () => {

        const createItemTemplate = ({fullName, phone, address, idForRemove}) => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.dataset.idForRemove = idForRemove;
            const span = document.createElement('span');
            span.classList.add('span-list-group-item');
            span.textContent = `${fullName} | ${phone} | ${address}`;
            const btnRemoveContact = document.createElement('button');
            btnRemoveContact.classList.add('btnRemove-list-group-item');
            btnRemoveContact.textContent = 'X';
            li.append(span, btnRemoveContact);
            return li;
        };

        const addElement = (data) => {
            const element = createItemTemplate(data);
            contactsList.prepend(element);
            contactsList.classList.remove('d-none');
            contactsAlert.classList.add('d-none');
        }

        const removeElement = (id) => {
            const liForRemove = contactsList.querySelector(`[data-id-for-remove="${id}"]`);
            if (liForRemove) {
                liForRemove.remove();
            }
            if (contactsList.childElementCount === 0){
                contactsAlert.classList.remove('d-none');
            }
        };
        return {
            addElement,
            removeElement,
        };
    };
    const listHandler = uiContactsListHandler();

    // State management
    const contactsManagement = () => {
        const contacts = [];

        const addContact = (data) => {
            const idForRemove = crypto.randomUUID();
            const contact = {idForRemove, ...data};
            contacts.push(contact);
        };

        const getContacts = () => {
            return structuredClone(contacts);
        };

        const removeContact = (id) => {
            const IndexRemoveContact = contacts.findIndex(contact => {
                return contact.idForRemove === id;
            });
            if (IndexRemoveContact === -1) {
               return false;
            }   else {
                contacts.splice(IndexRemoveContact, 1);
                return true;
            }
        };
        return {
            getContacts,
            addContact,
            removeContact
        }
    };
    const contactService = contactsManagement();


    // Events
    addContactModalTrigger.addEventListener('click', () => {
        addContactModal.show()
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
                    wrapper.append(errBlock)
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

    contactsList.addEventListener('click', (event) => {
        const btnRemove = event.target.closest('.btnRemove-list-group-item');
        if (!btnRemove) {
            return;
        }
        const liForRemove = btnRemove.closest('li');
        const idForRemove = liForRemove.dataset.idForRemove;
        const spanForRemove = liForRemove.querySelector('span.span-list-group-item');
        const fullNameForRemove = spanForRemove.textContent.trim().split(' |')[0];
        const confirmRemoveContactTitle = addRemoveContactModal._element.querySelector('#staticBackdropLabelDeleteContact');
        confirmRemoveContactTitle.textContent = `Are you sure you want to delete contact "${fullNameForRemove}" ?`;
        IdContactToRemove = idForRemove;
        addRemoveContactModal.show();
    });

    document.querySelector('#addRemoveContactModal')
    .addEventListener('click', (event) => {
        const btnConfirmRemove = event.target.closest('button');
        const CancelRemove = addRemoveContactModal._element.querySelector('[data-Remove-Cancel]');
        const ConfirmRemove = addRemoveContactModal._element.querySelector('[data-Remove-Confirm]');
        if (btnConfirmRemove === CancelRemove){
            IdContactToRemove = null;
            addRemoveContactModal.hide();
        }
        if (btnConfirmRemove === ConfirmRemove){
            const getNameContactToRemove = () => {
                const findContactToRemove = contactService.getContacts().find(contact => {
                    return contact.idForRemove === IdContactToRemove;
                })
                if (findContactToRemove){
                    return findContactToRemove.fullName;
                } else {
                    return null;
                }
            };
            const NameContactToRemove = getNameContactToRemove();
            const toastRemovedText = document.querySelector('[data-toast-remove-body]');
            toastRemovedText.textContent = `Contact "${NameContactToRemove }" successfully removed!`;
            contactService.removeContact(IdContactToRemove);
            listHandler.removeElement(IdContactToRemove);
            toastRemoved.show();
            IdContactToRemove = null;
            addRemoveContactModal.hide();
}
    });
})();


// Global Scope





