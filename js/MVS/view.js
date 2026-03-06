class View{

    containerForTable = document.querySelector('[data-container-table]');
    allTable = document.querySelector('[data-all-table]');
    tableBody = document.querySelector('[data-table-body]');
    BtnModalCancel = document.querySelector('[data-modal-btn-cancel]');
    loadingText = document.createElement('p');
    btnAddUser = document.querySelector('[data-btn-add-user]');
    btnSubmit = document.querySelector('[data-modal-btn-submit]');
    modal = document.querySelector('[data-modal]');








    createTableRow(user){
        const tableRow = document.createElement('tr');
        tableRow.dataset.rowId = user.id;
        tableRow.innerHTML = `
        <th scope="row" class="text-center" data-cell data-cell-id="id">${user.id}</th>
            <td data-cell="name">${user.name}</td>
            <td data-cell="email">${user.email}</td>
            <td data-cell="phone">${user.phone}</td>
            <td data-cell="company">${user.company.name}</td>
            <td class="text-center">
                <button type="button" class="btn btn-primary my-btn" data-btn-edit>
                    <i class="bi bi-pen"></i>
                </button>
            </td>
            <td class="text-center">
                <button type="button" class="btn btn-danger my-btn">
                    <i class="bi bi-trash3"></i> 
                </button>
            </td>`
        return tableRow
    };

    renderTable(users){
        const allTable = document.createDocumentFragment();
        users.forEach(user => {
            const singleUser = this.createTableRow(user);
            allTable.append(singleUser);
        });
        this.tableBody.innerHTML = '';
        this.tableBody.append(allTable);
        this.tableBody.classList.remove('d-none');
        this.loadingText.remove()
        this.btnAddUser.removeAttribute('disabled');
    };

    renderTableRow(user){
        const newTableRow = this.createTableRow(user);
        this.tableBody.append(newTableRow);
    }

    editUser(user){
        const rowToEdit = document.querySelector(`[data-row-id="${user.id}"]`);
        rowToEdit.cells[0].textContent = user.id;
        rowToEdit.cells[1].textContent = user.name;
        rowToEdit.cells[2].textContent = user.email;
        rowToEdit.cells[3].textContent = user.phone;
        rowToEdit.cells[4].textContent = user.company.name;
    }


    showLoading(textForLoading){
        this.tableBody.classList.add('d-none');
        this.loadingText.innerHTML = `
                    <div class="spinner-border text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    Loading ${textForLoading}…`;
        this.loadingText.classList.add('text-center', 'fs-2');
        this.containerForTable.append(this.loadingText);
    }

    notValidInput(dataFromInput, errorText){
        dataFromInput.classList.add('inputModalBorder', 'is-invalid');
        dataFromInput.value = '';
        dataFromInput.placeholder = `${dataFromInput.name} ${errorText}`
    };

    validInput(dataFromInput){
        dataFromInput.classList.remove('inputModalBorder', 'is-invalid');
    }










    openModal(action){
        const modalBackground = document.createElement('div');
        modalBackground.classList.add('modalBackground');
        modalBackground.dataset.modalBackground = '';
        document.body.append(modalBackground);

        const openModal = document.createElement('div');
        openModal.dataset.modalOpen = '';
        openModal.classList.add(
            'openModal',
            'position-fixed',
            'top-50',
            'start-50',
            'translate-middle'
        );
        openModal.innerHTML = `
        <div class="mx-auto my-width-500 mb-3 border border-dark-subtle p-4 bg-light rounded">
            <form id="myForm " class="d-flex justify-content-center flex-column gap-3" novalidate>
                <label for="edit-name" class="text-dark"> ${action} name </label>
                <input type="text" name="name" placeholder="" id="edit-name" class="modal-input form-control form-control-lg border border-dark-subtle" data-modal-input>
    
                <label for="edit-email" class="text-dark"> ${action} email </label>
                <input type="email" name="email" placeholder="" id="edit-email" class="modal-input form-control form-control-lg border border-dark-subtle" data-modal-input>
    
                <label for="edit-phone" class="text-dark"> ${action} phone </label>
                <input type="text" name="phone" placeholder="" id="edit-phone" class="modal-input form-control form-control-lg border border-dark-subtle" data-modal-input>
    
                <label for="edit-company" class="text-dark"> ${action} company </label>
                <input type="text" name="company" placeholder="" id="edit-company" class="modal-input form-control form-control-lg mb-3 border border-dark-subtle" data-modal-input>
    
                <div class="d-flex justify-content-between ">
                    <button type="button" class="btn btn-secondary my-btn border border-dark-subtle" data-modal-btn-cancel >Cancel</button>
                    <button type="submit" class="btn btn-success my-btn border border-dark-subtle" data-modal-btn-submit >Submit</button>
                </div>
            </form>
        </div>`
        this.containerForTable.append(openModal)
    }

    closeModal(){
        const modal = document.querySelector('[data-modal-open]');
        const modalBackground = document.querySelector('[data-modal-background]');
        modal.remove();
        modalBackground.remove();
    }



}
export default View;