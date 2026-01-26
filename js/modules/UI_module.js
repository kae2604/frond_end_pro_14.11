import {contactsAlert, contactService, contactsList, listHandler} from "./GeneralVariables.js"

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
        btnRemoveContact.innerHTML = '<i class="bi bi-trash3 fs-4"></i>';
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
export default uiContactsListHandler;

document.addEventListener('DOMContentLoaded', () => {
    const contactsFromLocalStorage = contactService.getContacts()
    contactsFromLocalStorage.forEach((contact) => {
        listHandler.addElement(contact);
    })
})