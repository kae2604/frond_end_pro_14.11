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
export default contactsManagement;