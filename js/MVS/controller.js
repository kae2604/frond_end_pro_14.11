class Controller {
    #model = null;
    #view = null;
    #modalStatus = null;
    #dataFromTable = null;
    #userID = null;


        constructor(model, view) {
        this.#model = model;
        this.#view = view;
        this.#modalStatus = null;
        this.#dataFromTable = null;
        this.#userID = null;
    };

    init(){

        document.addEventListener('DOMContentLoaded', () => {
            this.#view.showLoading('Table');
            this.#renderTable(this.#model.localStorage());

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
                })
            this.#view.containerForTable.addEventListener('submit', event => {
                event.preventDefault();
                if (this.#modalStatus === 'Add'){
                    this.#addUser(event);
                }
                if (this.#modalStatus === 'Edit'){
                    this.#editUser(event, this.#dataFromTable);
                }
            })
        })
    };

    #renderTable(promiseFromModel){
        promiseFromModel
            .then((users) => {
               this.#view.renderTable(users);
            })
            .catch(error => {
                this.#view.showError('Не удалось загрузить пользователей');
                console.error(error);
            });
    };
    #addUser = async (event) => {
        const objectFromForm = this.#submitUser(event);
        if (objectFromForm) {
            this.#view.closeModal();
            const dataFromModel = await this.#model.addUser(objectFromForm);
            this.#view.renderTableRow(dataFromModel);
        }
    };

    #getDataFromTableForEditModel(event) {
        this.#view.openModal('Edit');
        const row = event.target.closest('tr');
        this.#dataFromTable = row.querySelectorAll('[data-cell]');
        this.#userID = row.querySelector('[data-cell-id]').textContent.trim();
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
            this.#view.closeModal();
            const dataFromModel = await this.#model.editUser(objectFromForm, this.#userID );
            // this.#view.renderTableRow(dataFromModel);
        }
    };



    #submitUser = (event) => {
        const objectFromForm = {};
        const dataFromInputs = event.target.querySelectorAll('input');
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
    }

    #validationDataFromInput(dataFromInput){
        let isValid = true;
        const name = dataFromInput.name;
        const value = dataFromInput.value.trim();
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



