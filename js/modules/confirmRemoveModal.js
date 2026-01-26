import {contactsList, globalVariables, } from "./GeneralVariables.js";
import {addRemoveContactModal} from "./RemoveContactModal.js";

contactsList.addEventListener('click', (event) => {
    const btnRemove = event.target.closest('.btnRemove-list-group-item');
    if (!btnRemove) {
        return;
    }
    const liForRemove = btnRemove.closest('li');
    const idForRemove = +liForRemove.dataset.idForRemove;
    const spanForRemove = liForRemove.querySelector('span.span-list-group-item');
    const fullNameForRemove = spanForRemove.textContent.trim().split(' |')[0];
    const confirmRemoveContactTitle = addRemoveContactModal._element.querySelector('#staticBackdropLabelDeleteContact');
    confirmRemoveContactTitle.textContent = `Are you sure you want to delete contact "${fullNameForRemove}" ?`;
    globalVariables.IdContactToRemove = idForRemove;
    addRemoveContactModal.show();
});