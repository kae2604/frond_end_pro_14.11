class Controller {
    #model = null;
    #view = null;
    #modalStatus = null;
    #dataFromTable = null;
    #userID = null;
    #userToDelete = null;
    #arrowIdDown = true;
    #arrowNameDown = false;
    #arrowEmailDown = false;
    #arrowCompanyDown = false;
    #filteredData = null;
    #sortedData = null;

        constructor(model, view) {
        this.#model = model;
        this.#view = view;
        this.#modalStatus = null;
        this.#dataFromTable = null;
        this.#userID = null;
        this.#userToDelete = null;
        this.#arrowIdDown = true;
        this.#arrowNameDown = false;
        this.#arrowEmailDown = false;
        this.#arrowCompanyDown = false;
        this.#filteredData = null;
        this.#sortedData = null;
    };

    init(){
        document.addEventListener('DOMContentLoaded', () => {
            this.#renderTable(this.#model.getAll());
            this.#view.containerForTable.addEventListener('input', event => {
                const target = event.target.closest('[data-input-search]');
                if (!target) return;
                this.#view.highlightSort('id');
                this.#view.arrowAdd('id');
                this.#arrowIdDown = true;
                this.#searchUsers(event);
            });

            this.#view.containerForTable.addEventListener('click', event => {
                if (event.target.closest('[data-btn-add-user]')){
                    this.#modalStatus = 'Add';
                    this.#view.openModal('Add');
                }
                if (event.target.closest('[data-btn-edit]')){
                    this.#modalStatus = 'Edit';
                    this.#getDataFromTableForEditModel(event);
                }
                if (event.target.closest('[data-modal-btn-cancel]')){
                    this.#view.closeModal();
                }
                if (event.target.closest('[data-btn-delete]')){
                    this.#openConfirmDeleteModal(event);
                }
                if (event.target.closest('[data-table-title-id]')){
                    this.#arrowIdDown = !this.#arrowIdDown;
                    this.#arrowNameDown = false;
                    this.#arrowEmailDown = false;
                    this.#arrowCompanyDown = false;
                    this.#sortByAlphabet('id');
                }
                if (event.target.closest('[data-table-title-name]')){
                    this.#arrowIdDown = false;
                    this.#arrowNameDown = !this.#arrowNameDown;
                    this.#arrowEmailDown = false;
                    this.#arrowCompanyDown = false;
                    this.#sortByAlphabet('name');
                }
                if (event.target.closest('[data-table-title-email]')){
                    this.#arrowIdDown = false;
                    this.#arrowNameDown = false;
                    this.#arrowEmailDown = !this.#arrowEmailDown;
                    this.#arrowCompanyDown = false;
                    this.#sortByAlphabet('email');
                }
                if (event.target.closest('[data-table-title-company]')){
                    this.#arrowIdDown = false;
                    this.#arrowNameDown = false;
                    this.#arrowEmailDown = false;
                    this.#arrowCompanyDown = !this.#arrowCompanyDown;
                    this.#sortByAlphabet('company');
                }
                });
            document.addEventListener('click', event => {
                if (event.target.closest('[data-btn-delete-confirm]')){
                    this.#deleteUser(event);
                }
                if (event.target.closest('[data-bs-dismiss]')){
                    this.#closeModalServerStatus();
                }
            });
            this.#view.containerForTable.addEventListener('submit', event => {
                event.preventDefault();
                if (this.#modalStatus === 'Add'){
                    this.#addUser(event);
                }
                if (this.#modalStatus === 'Edit'){
                    this.#editUser(event, this.#dataFromTable);
                }
            });
        });
    };

    #searchUsers = (event) => {
        const InputData = event.target.closest('[data-input-search]');
        const inputEntireString = InputData.value.trim().replace(/\s+/g, '').toLowerCase();
        const inputEntireStringLength = inputEntireString.length;
        if (inputEntireString){
            const suitableUsers = this.#filteredData.filter(user => {
            const userNameEntireString = user.name.trim().replace(/\s+/g, '').toLowerCase();
            const cutUserName = userNameEntireString.slice(0, inputEntireStringLength);
            const userEmailEntireString = user.email.trim().replace(/\s+/g, '').toLowerCase();
            const cutUserEmail = userEmailEntireString.slice(0, inputEntireStringLength);
            const userCompanyEntireString = user.company.name.trim().replace(/\s+/g, '').toLowerCase();
            const cutUserCompany = userCompanyEntireString.slice(0, inputEntireStringLength);
            return (inputEntireString === cutUserName) || (inputEntireString === cutUserEmail) || (inputEntireString === cutUserCompany);
            });
            if (suitableUsers.length === 0){
                this.#view.showEmpty()
            } else {
                this.#filteredData = suitableUsers;
                this.#view.renderTable(this.#filteredData);
            }
        } else {
            this.#filteredData = [...this.#model.localStorage()];
            // this.#view.renderTable(this.#filteredData);
            this.#arrowIdDown = true;
            this.#sortByAlphabet('id')
        }
    };

    #sortByAlphabet(field){
        if (field === 'id') {
            this.#sortedData = this.#filteredData.sort((a, b) => a.id - b.id);
            if (!this.#arrowIdDown){
                this.#sortedData = this.#sortedData.reverse();
            }
        }
        if (field === 'name'){
            this.#sortedData = this.#filteredData.sort((a, b) => a.name.localeCompare(b.name));
            if (!this.#arrowNameDown) this.#sortedData = this.#sortedData.reverse()
        }
        if (field === 'email'){
            this.#sortedData = this.#filteredData.sort((a, b) => a.email.localeCompare(b.email));
            if (!this.#arrowEmailDown) this.#sortedData = this.#sortedData.reverse()
        }
        if (field === 'company') {
            this.#sortedData = this.#filteredData.sort((a, b) => a.company.name.localeCompare(b.company.name));
            if (!this.#arrowCompanyDown) this.#sortedData = this.#sortedData.reverse()
        }
        this.#view.renderTable(this.#sortedData);
        this.#view.highlightSort(field);
        this.#view.arrowAdd(field);
        this.#turnArrow(field);
    };

    #turnArrow(field){
        if (field === 'id'){
            if (!this.#arrowIdDown){
                this.#view.turnArrowUp(`${field}`)
            } else {
                this.#view.turnArrowDown(`${field}`)
            }
        }
        if (field === 'name'){
            if (!this.#arrowNameDown){
                this.#view.turnArrowUp(`${field}`)
            } else {
                this.#view.turnArrowDown(`${field}`)
            }
        }
        if (field === 'email'){
            if (!this.#arrowEmailDown){
                this.#view.turnArrowUp(`${field}`)
            } else {
                this.#view.turnArrowDown(`${field}`)
            }
        }
        if (field === 'company'){
            if (!this.#arrowCompanyDown){
                this.#view.turnArrowUp(`${field}`)
            } else {
                this.#view.turnArrowDown(`${field}`)
            }
        }
    };

    #renderTable(promiseFromModel){
        promiseFromModel.then((users) => {
               this.#filteredData = users;
               this.#view.renderTable(users);
               this.#view.highlightSort('id');
               this.#view.arrowAdd('id');
            })
            .catch((error) => {
                setTimeout(() => {
                    if (error instanceof TypeError) {
                        this.#view.serverStatus("The server is unavailable or incorrect URL")
                    } else {
                        this.#view.serverStatus("The server response error")
                    }
            }, 1000);
        });
    };

    #addUser = async (event) => {
        const objectFromForm = this.#submitUser(event);
        let nameToAdd = null;
        if (objectFromForm) {
            this.#view.showLoading('Adding a new user');
            this.#view.closeModal();
            try{
                const dataFromModel = await this.#model.addUser(objectFromForm);
                nameToAdd = dataFromModel.name;
                this.#view.showToast('added', nameToAdd);
                const inputValue = document.querySelector('[data-input-search]').value.trim().toLowerCase();
                if (!inputValue) {
                    this.#view.renderTableRow(dataFromModel);
                    this.#filteredData = [...this.#model.localStorage()];
                    return;
                }
                const allUsers = [...this.#model.localStorage()];
                this.#filteredData = allUsers.filter(user => {
                    return (
                        user.name.toLowerCase().includes(inputValue) ||
                        user.email.toLowerCase().includes(inputValue) ||
                        user.company.name.toLowerCase().includes(inputValue)
                    );
                });
                this.#arrowIdDown = true;
                this.#sortByAlphabet('id');
            }
            catch(error){
                setTimeout(() => {
                    if (error instanceof TypeError) {
                        this.#view.serverStatus("The server is unavailable or incorrect URL")
                    } else {
                        this.#view.serverStatus("The server response error")
                    }
                }, 1000)
            }
        }
    };

    #getDataFromTableForEditModel(event) {
        this.#view.openModal('Edit');
        const row = event.target.closest('tr');
        this.#dataFromTable = row.querySelectorAll('[data-cell]');
        this.#userID = row.querySelector('[data-cell="id"]').textContent.trim();
        this.#dataFromTable.forEach(cell => {
            const attributeValue = cell.dataset.cell;
            const input = document.querySelector(`input[name="${attributeValue}"]`);
            if (input) {
                input.value = cell.textContent.trim();
            }
        });
    };

    #editUser = async (event) => {
        const objectFromForm = this.#submitUser(event);
        const nameToEdit = objectFromForm.name;
        if (objectFromForm){
            this.#view.showLoading('Editing user');
            this.#view.closeModal();
            try{
                const dataFromModel = await this.#model.editUser(objectFromForm, this.#userID);
                const indexToReplace =  this.#filteredData.findIndex(user => user.id === Number(this.#userID));
                if (indexToReplace !== -1) {
                    this.#filteredData[indexToReplace] = dataFromModel;
                }
                if (!dataFromModel){
                    setTimeout(() => {
                        this.#view.serverStatus("The server response error")
                    }, 1000)
                    return;
                } else{
                    this.#view.editUser(dataFromModel);
                }
                this.#view.showToast('edited', nameToEdit);
            }
            catch(error){
                setTimeout(() => {
                    this.#view.serverStatus("The server is unavailable or incorrect URL")
                }, 1000)
            }
        }
    };

    #submitUser = (event) => {
        const objectFromForm = {};
        const dataFromInputs = event.target.querySelectorAll('[data-modal-input]');
        let isValidForm = true;
        dataFromInputs.forEach((input) => {
            if (!this.#validationDataFromInput(input)){
                isValidForm = false;
            }
            if (input.name === 'company'){
                objectFromForm.company = { name: input.value};
            } else{
                objectFromForm[input.name] = input.value;
            }
        });
        if (isValidForm){
            return objectFromForm
        }
    };

    #openConfirmDeleteModal(event){
        this.#userToDelete = event.target.closest('tr');
        const userName = this.#userToDelete.querySelector('[data-cell="name"]').textContent;
        this.#view.openConfirmDeleteModal(userName);
    };

    #deleteUser = async (event) => {
        this.#userID = Number(this.#userToDelete.querySelector('[data-cell="id"]').textContent);
        const nameToDelete = this.#userToDelete.querySelector('[data-cell="name"]').textContent;
        console.log(nameToDelete);
        this.#view.showLoading('Removing user');
        this.#view.closeDeleteModal();
        try{
            const dataFromModel = await this.#model.deleteUser(this.#userID);
            const indexToDelete =  this.#filteredData.findIndex(user => Number(user.id) === Number(this.#userID));
            if (indexToDelete !== -1) {
                this.#filteredData.splice(indexToDelete, 1);
            }
            this.#view.deleteUser(dataFromModel);
            this.#view.showToast('delete', nameToDelete);
        }
        catch(error){
            setTimeout(() => {
                if (error instanceof TypeError) {
                    this.#view.serverStatus("The server is unavailable or incorrect URL");
                } else {
                    this.#view.serverStatus("The server response error");
                }
            }, 1000);
        }
    };

    #closeModalServerStatus(){
        this.#view.hideLoadingStatus();
    }

    #validationDataFromInput(dataFromInput){
        let isValid = true;
        const name = dataFromInput.name;
        const value = dataFromInput.value;
            if ((value === '')){
                this.#view.notValidInput(dataFromInput, 'is empty');
                isValid = false;
           } else {
                this.#view.validInput(dataFromInput);
            }
            if ((value !== '') && name === 'email'){
                const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                if (!isValidEmail) {
                    this.#view.notValidInput(dataFromInput, 'is not correct');
                    isValid = false;
            }
        }
            return isValid;
    };
}
export default Controller;



