class Controller {
    #model = null;
    #view = null;
    #isValid = true;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
        this.#isValid = true;
    };

    init(){

        document.addEventListener('DOMContentLoaded', () => {
            this.#view.showLoading('Table');
            this.#renderTable(this.#model.localStorage());

            this.#view.containerForTable.addEventListener('click', event => {
                if (event.target.closest('[data-btn-add-user]')){
                    this.#view.openModal('Add')
                }
                if (event.target.closest('[data-btn-edit]')){
                    this.#view.openModal('Edit')
                }
                if (event.target.closest('[data-modal-btn-cancel]')){
                    this.#view.closeModal();
                }
                })
            this.#view.containerForTable.addEventListener('submit',this.#addUser)

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
        event.preventDefault();
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
            this.#view.closeModal();
            const dataFromModel = await this.#model.addUser(objectFromForm);
            this.#view.renderTableRow(dataFromModel);
        }
    }

    #validationDataFromInput(dataFromInput){
        this.#isValid = true;
        const name = dataFromInput.name;
        const value = dataFromInput.value.trim();
            if ((value === '')){
                this.#view.notValidInput(dataFromInput, 'is empty')
                this.#isValid = false;

           } else {
                this.#view.validInput(dataFromInput);
            }
            if ((value !== '') && name === 'email'){
                const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                if (!isValid) {
                    this.#view.notValidInput(dataFromInput, 'is not correct');
                    this.#isValid = false;
            }
        }
            return this.#isValid;
    }








}
export default Controller;



