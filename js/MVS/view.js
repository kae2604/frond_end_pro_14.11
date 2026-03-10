class View{

    containerForTable = document.querySelector('[data-container-table]');
    allTable = document.querySelector('[data-all-table]');
    tableBody = document.querySelector('[data-table-body]');
    BtnModalCancel = document.querySelector('[data-modal-btn-cancel]');
    loadingText = document.createElement('div');
    btnAddUser = document.querySelector('[data-btn-add-user]');
    btnSubmit = document.querySelector('[data-modal-btn-submit]');
    modal = document.querySelector('[data-modal]');
    LoadingStatus = document.querySelector('[data-loading]');
    inputSearch = document.querySelector('[data-input-search]');
    modalInstance = null;




    createTableRow(user){
        const tableRow = document.createElement('tr');
        tableRow.dataset.rowId = user.id;
        tableRow.innerHTML = `
        <th scope="row" class="text-center" data-cell="id">${user.id}</th>
            <td data-cell="name">${user.name}</td>
            <td data-cell="email">${user.email}</td>
            <td data-cell="company">${user.company.name}</td>
            <td data-cell="phone">${user.phone}</td>
            <td class="text-center">
                <button type="button" class="btn btn-primary my-btn" data-btn-edit>
                    <i class="bi bi-pen"></i>
                </button>
            </td>
            <td class="text-center">
                <button type="button" class="btn btn-danger my-btn" data-btn-delete>
                    <i class="bi bi-trash3"></i> 
                </button>
            </td>`
        return tableRow
    };

    renderTable(users){
        const isEmptyText = document.querySelector('[data-show-empty]')
        if (isEmptyText){
            isEmptyText.remove();
        }
        const allTable = document.createDocumentFragment();
        users.forEach(user => {
            const singleUser = this.createTableRow(user);
            allTable.append(singleUser);
        });
        this.tableBody.innerHTML = '';
        this.tableBody.append(allTable);
        // this.tableBody.classList.remove('d-none');
        this.btnAddUser.removeAttribute('disabled');
        this.inputSearch.removeAttribute('disabled');
        this.LoadingStatus.innerHTML = '';
    };

    renderTableRow(user){
        const newTableRow = this.createTableRow(user);
        this.tableBody.append(newTableRow);
        this.LoadingStatus.innerHTML = '';
    };

    editUser(user){
        const rowToEdit = document.querySelector(`[data-row-id="${user.id}"]`);
        rowToEdit.cells[0].textContent = user.id;
        rowToEdit.cells[1].textContent = user.name;
        rowToEdit.cells[2].textContent = user.email;
        rowToEdit.cells[3].textContent = user.phone;
        rowToEdit.cells[4].textContent = user.company.name;
        this.LoadingStatus.innerHTML = '';
    };

    openConfirmDeleteModal(userName){
        const confirmDeleteModal = document.createElement("div");
        confirmDeleteModal.className = "modal fade";
        confirmDeleteModal.id = "staticBackdrop";
        confirmDeleteModal.setAttribute("data-bs-backdrop", "static");
        confirmDeleteModal.setAttribute("data-bs-keyboard", "false");
        confirmDeleteModal.setAttribute("tabindex", "-1");
        confirmDeleteModal.setAttribute("aria-labelledby", "staticBackdropLabel");
        confirmDeleteModal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 mx-auto text-center" id="staticBackdropLabel">Are you sure you want to delete the user <br> <em>${userName}?</em></h1>
          </div>
          <div class="modal-footer d-flex justify-content-between">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger" data-btn-delete-confirm>Delete</button>
          </div>
        </div>
      </div>
    `;
        document.body.append(confirmDeleteModal);
        this.modalInstance = new bootstrap.Modal(confirmDeleteModal);
        this.modalInstance.show();
    };

    deleteUser(id){
        const rowToDelete = document.querySelector(`[data-row-id="${id}"]`);
        rowToDelete.remove();
        this.LoadingStatus.innerHTML = '';
    };

    closeDeleteModal(){
        if(this.modalInstance){
            this.modalInstance.hide();
            this.modalInstance = null;
        }
    }

    serverStatus(errorText){
        const serverStatusModal = document.createElement('div');
        serverStatusModal.classList.add('modal');
        serverStatusModal.setAttribute("tabindex", "-1");
        serverStatusModal.setAttribute("data-bs-backdrop", "static");
        serverStatusModal.setAttribute("data-bs-keyboard", "false");
        serverStatusModal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h5 class="text-center" >${errorText} <br> Please try later</h5>
              </div>
            </div>
          </div>`
        document.body.append(serverStatusModal);
        this.modalInstance = new bootstrap.Modal(serverStatusModal);
        this.modalInstance.show();
    };

    showLoading(textForLoading){
        // this.tableBody.classList.add('d-none');
        this.LoadingStatus.innerHTML =`
            <div class="spinner-border text-success" role="status"></div>
            <span class=" fs-2 ms-3"> ${textForLoading} ... </span>
             `;
    };

    hideLoadingStatus(){
        this.LoadingStatus.innerHTML = '';
    };

    notValidInput(dataFromInput, errorText){
        dataFromInput.classList.add('inputModalBorder', 'is-invalid');
        dataFromInput.value = '';
        dataFromInput.placeholder = `${dataFromInput.name} ${errorText}`
    };

    validInput(dataFromInput){
        dataFromInput.classList.remove('inputModalBorder', 'is-invalid');
    };

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
    };

    closeModal(){
        const modal = document.querySelector('[data-modal-open]');
        const modalBackground = document.querySelector('[data-modal-background]');
        modal.remove();
        modalBackground.remove();
    };

    showEmpty(){
        this.tableBody.innerHTML = '';
        this.btnAddUser.setAttribute('disabled', '');
        const isEmptyText = document.querySelector('[data-show-empty]')
        if (isEmptyText){
            isEmptyText.remove();
        }
        const emptyText = document.createElement('div');
        emptyText.dataset.showEmpty = '';
        emptyText.classList.add('text-center', 'mt-3', 'fs-3');
        emptyText.textContent = 'There are no matches';
        this.allTable.after(emptyText);
    };

    highlightSort(field){
        const sortedFieldBefore = document.querySelectorAll(`[data-table-title]`);
        sortedFieldBefore.forEach(el => {
            el.classList.remove('bg-info');
        });
        const sortedField = document.querySelector(`[data-table-title-${field}]`);
        sortedField.classList.add('bg-info');
    };

    arrowAdd(field){
        const arrowAll = document.querySelectorAll('[data-arrow]');
        arrowAll.forEach(el => {
            el.classList.add('d-none');
        });
        const arrowAdd = document.querySelector(`[data-arrow-${field}]`);
        arrowAdd.classList.remove('d-none')
    }

    turnArrowUp(field){
        const arrow = document.querySelector(`[data-arrow-${field}]`);
        arrow.classList.add('turnArrow')
    };

    turnArrowDown(field){
        const arrow = document.querySelector(`[data-arrow-${field}]`);
        arrow.classList.remove('turnArrow')
    };



    arrowRemove(field){
        const arrow = document.querySelector(`[data-arrow-${field}]`);
        arrow.classList.add('d-none')
    }








}
export default View;