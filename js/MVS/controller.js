class Controller {
    #model = null;
    #view = null;
    #modalStatus = null;
    #dataFromTable = null;
    #userID = null;
    #userToDelete = null;



        constructor(model, view) {
        this.#model = model;
        this.#view = view;
        this.#modalStatus = null;
        this.#dataFromTable = null;
        this.#userID = null;
        this.#userToDelete = null;
    };

    init(){
        // this.#view.showLoading('Table');
        document.addEventListener('DOMContentLoaded', () => {

            this.#renderTable(this.#model.getAll());


            this.#view.containerForTable.addEventListener('input', event => {
                const target = event.target.closest('[data-input-search]');
                if (!target) return;
                this.#searchUsers(event);

            })

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
        const dataFromModel = this.#model.localStorage();
        if (inputEntireString){
            const suitableUsers = dataFromModel.filter(user => {
            const userNameEntireString = user.name.trim().replace(/\s+/g, '').toLowerCase();
            const cutUserName = userNameEntireString.slice(0, inputEntireStringLength);
            const userEmailEntireString = user.email.trim().replace(/\s+/g, '').toLowerCase();
            const cutUserEmail = userEmailEntireString.slice(0, inputEntireStringLength);
            const userCompanyEntireString = user.company.name.trim().replace(/\s+/g, '').toLowerCase();
            const cutUserCompany = userCompanyEntireString.slice(0, inputEntireStringLength);
            return (inputEntireString === cutUserName) || (inputEntireString === cutUserEmail) || (inputEntireString === cutUserCompany);
            })
            if (suitableUsers.length === 0){
                this.#view.showEmpty()
            } else {
                this.#view.renderTable(suitableUsers);
            }
        } else {
            this.#view.renderTable(dataFromModel);
        }
    };

    #renderTable(promiseFromModel){
        promiseFromModel
            .then((users) => {
               this.#view.renderTable(users);
            })
            .catch((error) => {
                    setTimeout(() => {
                        if (error instanceof TypeError) {
                            this.#view.serverStatus("The server is unavailable or incorrect URL")
                        } else {
                            this.#view.serverStatus("The server response error")
                        }
                    }, 1000)
        })
    };
    #addUser = async (event) => {
        const objectFromForm = this.#submitUser(event);
        if (objectFromForm) {
            this.#view.showLoading('Adding a new user');
            this.#view.closeModal();
            try{
                const dataFromModel = await this.#model.addUser(objectFromForm);
                this.#view.renderTableRow(dataFromModel);
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
        })
    };

    #editUser = async (event) => {
        const objectFromForm = this.#submitUser(event);
        if (objectFromForm){
            this.#view.showLoading('Editing user');
            this.#view.closeModal();

            try{
                const dataFromModel = await this.#model.editUser(objectFromForm, this.#userID);
                if (!dataFromModel){
                    console.log("aaaa")
                    setTimeout(() => {
                        console.log("bbbbb")
                        this.#view.serverStatus("The server response error")
                    }, 1000)
                } else{
                    this.#view.editUser(dataFromModel);
                }

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
    }

    #deleteUser = async (event) => {
        this.#userID = this.#userToDelete.querySelector('[data-cell="id"]').textContent;
        this.#view.showLoading('Removing user');
        this.#view.closeDeleteModal();
        try{
            const dataFromModel = await this.#model.deleteUser(this.#userID);
            this.#view.deleteUser(dataFromModel);
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

    #closeModalServerStatus(){
        this.#view.hideLoadingStatus();
    }

    #validationDataFromInput(dataFromInput){
        let isValid = true;
        const name = dataFromInput.name;
        const value = dataFromInput.value;
            if ((value === '')){
                this.#view.notValidInput(dataFromInput, 'is empty')
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
    }








}
export default Controller;



