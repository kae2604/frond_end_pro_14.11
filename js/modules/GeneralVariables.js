export const globalVariables = {
     IdContactToRemove : null,
}

export const contactsAlert = document.querySelector('[data-contacts-alert]');
export const contactsList = document.querySelector('[data-contacts-list]');

import uiContactsListHandler from "./UI_module.js"
export const listHandler = uiContactsListHandler();

import contactsManagement from "./contactsManagement.js"
export const contactService = contactsManagement();

export const addContactToLocalStorage = (key, contact) => {
    localStorage.setItem(key, JSON.stringify(contact));
}