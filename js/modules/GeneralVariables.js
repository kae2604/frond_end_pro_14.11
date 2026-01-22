export const globalVariables = {
     IdContactToRemove : null,
}

export const contactsAlert = document.querySelector('[data-contacts-alert]');
export const contactsList = document.querySelector('[data-contacts-list]');

import uiContactsListHandler from "./UI_module.js"
export const listHandler = uiContactsListHandler();

import contactsManagement from "./contactsManagement.js"
export const contactService = contactsManagement();

const addRemoveContactModalSelector = '#addRemoveContactModal';
export const addRemoveContactModal = new bootstrap.Modal(addRemoveContactModalSelector, {
    keyboard: true,
    backdrop: true
});