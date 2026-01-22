import {globalVariables, addRemoveContactModal, listHandler, contactService} from "./GeneralVariables.js"

const toastRemoved = new bootstrap.Toast(document.querySelector('#contactRemoved'));

document.querySelector('#addRemoveContactModal')
    .addEventListener('click', (event) => {
        const btnConfirmRemove = event.target.closest('button');
        const CancelRemove = addRemoveContactModal._element.querySelector('[data-Remove-Cancel]');
        const ConfirmRemove = addRemoveContactModal._element.querySelector('[data-Remove-Confirm]');
        if (btnConfirmRemove === CancelRemove){
            globalVariables.IdContactToRemove = null;
            addRemoveContactModal.hide();
        }
        if (btnConfirmRemove === ConfirmRemove){
            const getNameContactToRemove = () => {
                const findContactToRemove = contactService.getContacts().find(contact => {
                    return contact.idForRemove === globalVariables.IdContactToRemove;
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
            contactService.removeContact(globalVariables.IdContactToRemove);
            listHandler.removeElement(globalVariables.IdContactToRemove);
            toastRemoved.show();
            globalVariables.IdContactToRemove = null;
            addRemoveContactModal.hide();
        }
    });