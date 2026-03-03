class Controller {
    #model = null;
    #view = null;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
    };

    init(){
        document.addEventListener('DOMContentLoaded', () => {
            this.#renderTable(this.#model.localStorage());

            this.#view.containerForTable.addEventListener('click', event => {
                if (event.target.closest('[data-btn-add-user]')){
                    this.#openModal('Add')
                }
                if (event.target.closest('[data-btn-edit]')){
                    this.#openModal('Edit')
                }
                if (event.target.closest('[data-modal-btn-cancel]')){
                    this.#closeModal()
                }
                })
            this.#view.containerForTable.addEventListener('submit',this.#addUser)



        })
    };

    #renderTable(promiseFromModel){
        promiseFromModel.then((users) => {
               this.#view.renderTable(users);
            })
    };

    #openModal(action) {
        this.#view.openModal(action)
    }

    #closeModal(){
        this.#view.closeModal('');
    }

    #addUser = (event) => {
        event.preventDefault();
        const objectFromForm = {};
        const dataFromInputs = event.target.querySelectorAll('input');
        dataFromInputs.forEach((input) => {
            objectFromForm[input.name] = input.value;
        });
        this.#view.renderTableRow(objectFromForm)
        console.log(objectFromForm);

    }



}
export default Controller;




// function init(){
//     document.addEventListener('DOMContentLoaded', () => {
//             getDataByFetch('https://jsonplaceholder.typicode.com/users', 'Users')
//                 .then(usersArray => {
//                     usersArray.forEach(user => {
//                         const option = document.createElement('option');
//                         option.textContent = user.name;
//                         option.value = user.id;
//                         selectUsers.append(option);
//                     })
//                 })
//         }
//     )
// }


//
// init();
//
// function getDataByFetch(url, textForLoading){
//     statusBox.textContent = `Loading ${textForLoading}…`;
//     return fetch(url)
//         .then(response => {
//             if (!response.ok){
//                 throw new Error("HTTP" + response.status)
//             } else {
//                 return response.json()
//             }
//         })
//         .catch(error => {
//             statusBox.textContent =  "Error: " + error.message;
//         })
//         .finally(()=>{
//             if(statusBox.textContent === `Loading ${textForLoading}…`){
//                 statusBox.textContent = '';
//             }
//         })
// }