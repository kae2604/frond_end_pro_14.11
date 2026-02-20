class Controller {
    #model = null;
    #view = null;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
    }

    init() {
        document.addEventListener("DOMContentLoaded", () => {
            this.#updatePage(this.#model.readAll());
            this.#view.form.addEventListener('submit', this.#createNewNote);
            this.#view.clearAllButton.addEventListener('click', this.#clearAll);
            this.#view.containerForNotes.addEventListener('click', this.#clearNote);
            this.#view.containerForNotes.addEventListener('change', this.#changeImportantNote);
            this.#view.filtersBlock.addEventListener('click', this.#filterAll);
            this.#view.filtersBlock.addEventListener('click', this.#filter('[data-btn-important]','important', true));
            this.#view.filtersBlock.addEventListener('click', this.#filter('[data-btn-work]','category', 'Work'));
            this.#view.filtersBlock.addEventListener('click', this.#filter('[data-btn-study]','category', 'Study'));
            this.#view.filtersBlock.addEventListener('click', this.#filter('[data-btn-personal]','category', 'Personal'));
            this.#view.filtersBlock.addEventListener('click', this.#filterNewFirst);
            this.#view.filtersBlock.addEventListener('click', this.#filterOldFirst);
        })
    };

    #updatePage(array){
        if (array.length === 0){
            this.#view.clearAll();
            this.#view.EmptyBox()
        } else{
            this.#view.createAllNotes(array)
        }
        const countObject = this.#model.count();
        this.#view.createCount(countObject)
    }

    #createNewNote = (event) => {
        event.preventDefault();
        const objectFromForm = {};
        const dataFromInputs = event.target.querySelectorAll('input, select');
        dataFromInputs.forEach((input) => {
            if (input.type === 'checkbox'){
                objectFromForm[input.name] = input.checked;
            } else objectFromForm[input.name] = input.value;
        });
        const objectFromModel =  this.#model.create(objectFromForm);
        if (objectFromModel !== null) {
            this.#view.addNewNote(objectFromModel);
            const dataFromLocalStorage = this.#model.readAll();
            this.#updatePage(dataFromLocalStorage)
        }
    }

    #clearNote = (event) => {
        const target = event.target;
        if (!target.closest('[data-remove-btn]')) return;
        const idToDelete = +target.closest('[data-note-id]').getAttribute('data-note-id');
        this.#model.delete(idToDelete);
        const dataFromLocalStorage = this.#model.readAll();
        this.#updatePage(dataFromLocalStorage)
     }

    #clearAll = () => {
        this.#model.clearAll();
        this.#view.clearAll();
        this.#view.EmptyBox();
        const dataFromLocalStorage = this.#model.readAll();
        this.#updatePage(dataFromLocalStorage)
    }

    #changeImportantNote = (event) => {
        const target = event.target;
        const idImportant = +target.closest('[data-note-id]').getAttribute('data-note-id');
        this.#model.toggleImportant(idImportant);
        this.#view.toggleImportant(idImportant);
        const dataFromLocalStorage = this.#model.readAll();
        this.#updatePage(dataFromLocalStorage)
    }


    #filter = (selector, property, condition) => {
        return(event) => {
            const target = event.target.closest(selector);
            if (!target) return;
            const objectFromModel = this.#model.filter(property, condition);
            this.#view.clearAll();
            if ( objectFromModel.length === 0 ) {
                this.#view.EmptyBox('No notes of this type')
            } else{
                this.#view.increaseButton(selector)
                this.#view.createAllNotes(objectFromModel)
            }
        }
    };

    #filterAll = (event) => {
        const target = event.target;
        if (!target.closest('[data-btn-all]')) return;
        const dataFromLocalStorage = this.#model.readAll();
        this.#view.increaseButton('[data-btn-all]')
        this.#updatePage(dataFromLocalStorage)
    }

    #filterNewFirst = (event) => {
        const target = event.target.closest('[data-btn-new-first]');
        if (!target) return;
        const dataFromLocalStorage = this.#model.readAll();
        this.#view.increaseButton('[data-btn-new-first]')
        this.#updatePage(dataFromLocalStorage)
    }

    #filterOldFirst = (event) => {
        const target = event.target.closest('[data-btn-old-first]');
        if (!target) return;
        const dataFromLocalStorage = this.#model.readAll();
        if ( dataFromLocalStorage[0].id < dataFromLocalStorage[1].id ){
            const filteredArray = this.#model.reverse();
            this.#view.increaseButton('[data-btn-old-first]')
            this.#updatePage(filteredArray)
        }
    }












}
export default Controller;