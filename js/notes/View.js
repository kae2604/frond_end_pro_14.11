class View {
    containerForNotes = document.querySelector('#notesList');
    form = document.querySelector('[data-form-notes]');
    clearAllButton = document.querySelector('[data-btn-remove-all]');
    filtersBlock = document.querySelector('[data-filters-block]');
    termsBlock = document.querySelector('[data-term-block]');
    editModal = document.querySelector('[data-edit-modal]');

    createNewNote(object) {
        const removeEmptyText = this.containerForNotes.querySelector('.empty-text');
        if (removeEmptyText) {
            removeEmptyText.remove();
        }
        const newNote = document.createElement('div');
        newNote.classList.add('newNote');
        newNote.dataset.noteId = object.id;

        newNote.innerHTML = ` 
                        <p class="note-title" data-title-text>${object.title}</p>
                        <hr>
                        <div class=" d-flex justify-content-between align-items-center">
                                <p  class="category" >${object.category}</p>
                                <div class="category-color"  data-note-color ></div>
                        </div>
                        
                        <hr>
                        <p>${object.createdAt}</p>
                        <hr>
                        <div class=" form-check">
                            <input type="checkbox" name="important" class="form-check-input" id="important-${object.id}">
                            <label class="form-check-label" for="important-${object.id}">Important</label>
                        </div>
                        <hr>
                        <div class=" d-flex justify-content-between">
                            <button class="btn btn-sm btn-danger" data-remove-btn><i class="bi bi-trash-fill"></i></button>
                            <button class="btn btn-sm btn-primary" data-edit-btn><i class="bi bi-pencil-fill"></i></button>
                        </div>`

        const colorNote = newNote.querySelector('[data-note-color]');
        if (object.category === 'Work') colorNote.classList.add('work-color');
        if (object.category === 'Study') colorNote.classList.add('study-color');
        if (object.category === 'Personal') colorNote.classList.add('personal-color');

        const checkbox = newNote.querySelector('input[name="important"]');
        checkbox.checked = object.important;
        if (object.important) {
            newNote.classList.add('highlightImportant');
        }
        return newNote;
    };

    createCount(object) {
        for (const key in object) {
            const countBox = document.querySelector(`[data-count-${key}-box]`);
            if (countBox) {
                countBox.textContent = object[key];
            }
        }
    };

    EmptyBox(text = 'No notes yet'){
        const isEmptyText= this.containerForNotes.querySelector('.empty-text');
        if (isEmptyText) {
            isEmptyText.remove();
        }
        const emptyText = document.createElement('h2');
        emptyText.classList.add('empty-text');
        emptyText.textContent = text;
        const isNote = this.containerForNotes.querySelector('.newNote');
        if (!isNote) {
            this.containerForNotes.prepend(emptyText);
        }
    };

    createAllNotes(array) {
        const clone = document.createElement('div');
        array.forEach(object => {
            const singleNote = this.createNewNote(object);
            clone.prepend(singleNote);
        });
        this.clearAll();
        this.containerForNotes.append(clone);
    };

    addNewNote(object) {
        const newNote = this.createNewNote(object);
        if (object.important) {
            newNote.classList.add('highlightImportant');
        }
        this.containerForNotes.prepend(newNote);
    };

    clearAll() {
        this.containerForNotes.innerHTML = null;
    };

    increaseButton(block, selector) {
        this[block].querySelectorAll('.increaseButton').forEach(el => el.classList.remove('increaseButton'));
        this[block].querySelector(selector).classList.add('increaseButton');
    };

    editNote(id, value) {
        const noteToEdit = this.containerForNotes.querySelector(`[data-note-id='${id}']`);
        const titleText = noteToEdit.querySelector('[data-title-text]');
        titleText.textContent = value;
    };

    toggleEditModal(){
        const EditModal = document.querySelector('[data-edit-modal]');
        if (EditModal.classList.contains('showEditModal')) {
            EditModal.classList.remove('showEditModal');
        } else {
            EditModal.classList.add('showEditModal');
        }
    };

    clearInputs(){
        const title = document.querySelector('[data-form-title]');
        title.value = '';
        const category = document.querySelector('select[name="category"]');
        category.value = '';
        const important = document.querySelector('input[name="important"]');
        important.checked = false;
    };

    setEditModalValue(value){
        const input = this.editModal.querySelector('input[name="edit"]');
        input.value = value;
    };
}
export default View;