const contactsManagement = () => {
    // const contacts = [];



    const getContacts = () => {
        // return structuredClone(contacts);
        return JSON.parse(localStorage.getItem('contact')) ?? [];
    };

    const addContact = (data) => {
        const idForRemove = crypto.randomUUID();
        const contact = {idForRemove, ...data};
        const arrayFromLocalStorage = getContacts();
        arrayFromLocalStorage.push(contact);
        localStorage.setItem('contact', JSON.stringify(arrayFromLocalStorage));
    };

    // const removeContact = (id) => {
    //     const IndexRemoveContact = contacts.findIndex(contact => {
    //         return contact.idForRemove === id;
    //     });
    //     if (IndexRemoveContact === -1) {
    //         return false;
    //     }   else {
    //         contacts.splice(IndexRemoveContact, 1);
    //         return true;
    //     }
    // };
    return {
        getContacts,
        addContact,
        // removeContact
    }
};
export default contactsManagement;