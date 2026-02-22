class Controller {
    #model = null;
    #view = null;
    #currentFilter = null;
    #newFirst = null;
    #idToEdit = null;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
        this.#currentFilter = null;
        this.#newFirst = true;
        this.#idToEdit = null;
    };

    init() {
        document.addEventListener("DOMContentLoaded", () => {
            this.#updatePage(this.#model.readAll());
            this.#view.increaseButton('filtersBlock','[data-btn-all]');
            this.#view.increaseButton('termsBlock','[data-btn-new]');
            this.#view.form.addEventListener('submit', this.#createNewNote);
            this.#view.clearAllButton.addEventListener('click', this.#clearAll);
            this.#view.containerForNotes.addEventListener('click', this.#clearNote);
            this.#view.containerForNotes.addEventListener('change', this.#changeImportantNote);
            this.#view.containerForNotes.addEventListener('click', this.#showEditModal);
            this.#view.filtersBlock.addEventListener('click', this.#filterAll);
            this.#view.filtersBlock.addEventListener('click', this.#filter('[data-btn-important]','important', true));
            this.#view.filtersBlock.addEventListener('click', this.#filter('[data-btn-work]','category', 'Work'));
            this.#view.filtersBlock.addEventListener('click', this.#filter('[data-btn-study]','category', 'Study'));
            this.#view.filtersBlock.addEventListener('click', this.#filter('[data-btn-personal]','category', 'Personal'));
            this.#view.termsBlock.addEventListener('click', this.#filterNewFirst);
            this.#view.termsBlock.addEventListener('click', this.#filterOldFirst);
            this.#view.editModal.addEventListener('submit', this.#editNote);
            this.#view.editModal.addEventListener('click', this.#hideNote);
        });
    };

    #updatePage(array){
        if (array.length === 0){
            this.#view.clearAll();
            this.#view.EmptyBox();
        } else{
            this.#view.createAllNotes(array);
        }
        const countObject = this.#model.count();
        this.#view.createCount(countObject);
    };

    #createNewNote = (event) => {
        event.preventDefault();
        const objectFromForm = {};
        const dataFromInputs = event.target.querySelectorAll('input, select');
        dataFromInputs.forEach((input) => {
            if (input.type === 'checkbox'){
                objectFromForm[input.name] = input.checked;
            } else objectFromForm[input.name] = input.value;
        });
        const objectFromModel = this.#model.create(objectFromForm);
        if (objectFromModel !== null) {
            this.#view.addNewNote(objectFromModel);
            this.#view.increaseButton('filtersBlock','[data-btn-all]');
            this.#renderCurrentFilters();
            this.#currentFilter = null;
            this.#view.clearInputs();
        }
    };

    #clearAll = () => {
        this.#model.clearAll();
        this.#view.clearAll();
        this.#view.EmptyBox();
        const dataFromLocalStorage = this.#model.readAll();
        this.#updatePage(dataFromLocalStorage);
    };

    #clearNote = (event) => {
        const target = event.target.closest('[data-remove-btn]');
        if (!target) return;
        const idToDelete = +target.closest('[data-note-id]').getAttribute('data-note-id');
        this.#model.delete(idToDelete);
        this.#renderCurrentFilters();
     };

    #changeImportantNote = (event) => {
        const target = event.target;
        const idImportant = +target.closest('[data-note-id]').getAttribute('data-note-id');
        this.#model.toggleImportant(idImportant);
        this.#renderCurrentFilters();
    };

    #filter = (selector, property, condition) => {
        return(event) => {
            const target = event.target.closest(selector);
            if (!target) return;
            this.#currentFilter = {property,condition};
            const filteredArray = this.#model.filter(property, condition);
            this.#view.clearAll();
            this.#view.increaseButton('filtersBlock', selector);
            if ( filteredArray.length === 0 ) {
                this.#view.EmptyBox('No notes of this type');
            } else{
                if (this.#newFirst){
                    this.#updatePage(filteredArray);
                }else {
                    this.#updatePage(filteredArray.reverse());
                }
            }
        }
    };

    #filterAll = (event) => {
        const target = event.target;
        if (!target.closest('[data-btn-all]')) return;
        this.#view.increaseButton('filtersBlock','[data-btn-all]');
        const dataFromLocalStorage = this.#model.readAll();
        if (this.#newFirst){
            this.#updatePage(dataFromLocalStorage);
        }else {
            this.#updatePage(dataFromLocalStorage.reverse());
        }
        this.#currentFilter = null;
    };

    #filterNewFirst = (event) => {
        const target = event.target.closest('[data-btn-new]');
        if (!target) return;
        this.#newFirst = true;
        this.#view.increaseButton('termsBlock','[data-btn-new]');
        this.#renderCurrentFilters();
    };

    #filterOldFirst = (event) => {
        const target = event.target.closest('[data-btn-old]');
        if (!target) return;
        this.#newFirst = false;
        this.#view.increaseButton('termsBlock','[data-btn-old]');
        this.#renderCurrentFilters();
    };

    #showEditModal = (event) => {
        const target = event.target.closest('[data-edit-btn]');
        if (!target) return;
        const noteToEdit = target.closest('[data-note-id]');
        this.#idToEdit = +noteToEdit.getAttribute('data-note-id');
        const titleToEdit = noteToEdit.querySelector('[data-title-text]').textContent;
        this.#view.setEditModalValue(titleToEdit);
        this.#view.toggleEditModal();
    };

    #editNote = (event) => {
        event.preventDefault();
        const dataFromInput = event.target.querySelector('input[name="edit"]');
        const value = dataFromInput.value;
        const dataFromModel = this.#model.editNote(this.#idToEdit, value);
        if (!dataFromModel) return;
        this.#view.editNote(this.#idToEdit, value);
        this.#view.toggleEditModal();
        dataFromInput.value = '';
    };

    #hideNote = (event) => {
        const target = event.target.closest('[data-btn-close-modal]');
        if (!target) return;
        this.#view.toggleEditModal();
    };

    #renderCurrentFilters() {
        let arrayToRender = [];
        if (this.#currentFilter) {
            arrayToRender = this.#model.filter(this.#currentFilter.property, this.#currentFilter.condition);
        } else {
            arrayToRender = this.#model.readAll();
        }
        if (!this.#newFirst) {
            arrayToRender = arrayToRender.reverse();
        }
        this.#updatePage(arrayToRender);
    }
}
export default Controller;