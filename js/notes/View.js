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
            removeEmptyText.remove()
        }
        const newNote = document.createElement('div');
        newNote.classList.add('newNote');
        newNote.dataset.noteId = object.id;
        newNote.innerHTML = ` 
                        <p class="note-title" data-title-text>${object.title}</p>
                        <hr>
                        <p>${object.category}</p>
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
        this.containerForNotes.prepend(newNote)
    };

    clearAll() {
        this.containerForNotes.innerHTML = null;
    };

    toggleImportant(id) {
        const findNote = this.containerForNotes.querySelector(`[data-note-id='${id}']`);
        findNote.classList.toggle('highlightImportant');
    };

    increaseButton(block, selector) {
        this[block].querySelectorAll('.increaseButton').forEach(el => el.classList.remove('increaseButton'));
        this[block].querySelector(selector).classList.add('increaseButton');
    };

    showEditModal(){
        const showEditModal = document.querySelector('[data-edit-modal]');
        showEditModal.classList.add('showEditModal');
    };

    editNote(id, value) {
        const noteToEdit = this.containerForNotes.querySelector(`[data-note-id='${id}']`);
        const titleText = noteToEdit.querySelector('[data-title-text]');
        titleText.textContent = value;
    };

    hideNote(){
        const showEditModal = document.querySelector('[data-edit-modal]');
        showEditModal.classList.remove('showEditModal');
    };
}
export default View;