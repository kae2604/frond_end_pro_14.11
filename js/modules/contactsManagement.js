import {addContactToLocalStorage, contactService} from "./GeneralVariables.js";

const contactsManagement = () => {

    const getContacts = () => {
        return JSON.parse(localStorage.getItem('contact')) ?? [];
    };

    let arrayFromLocalStorage = getContacts();

    const addContact = (data) => {
        // const idForRemove = crypto.randomUUID();
        const idForRemove = arrayFromLocalStorage.length ? arrayFromLocalStorage.at(-1).idForRemove + 1 : 1;
        const contact = {idForRemove, ...data};
        arrayFromLocalStorage.push(contact);
        addContactToLocalStorage('contact', arrayFromLocalStorage)
    };

    const removeContact = (id) => {
        const IndexRemoveContact = arrayFromLocalStorage.findIndex(contact => {
            return contact.idForRemove === id;
        });
        if (IndexRemoveContact === -1) {
            return false;
        }   else {
            arrayFromLocalStorage.splice(IndexRemoveContact, 1);
            addContactToLocalStorage('contact', arrayFromLocalStorage)
            return true;
        }
    };
    return {
        getContacts,
        addContact,
        removeContact
    }
};
export default contactsManagement;