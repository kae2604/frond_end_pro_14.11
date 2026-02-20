class Model {
    #key = null;
    #modelNote = null;

    constructor(key, modelNote) {
        this.#key = key;
        this.#modelNote = modelNote;
    }

    #validationData(object) {
            if (object.title.trim().length < 3) {
                alert("Title should be at least 3 characters long");
                return false;
            }
            if (!this.#modelNote.category.includes(object.category)){
                alert("You didn't choose the category");
                return false;
            }
            return true
    };

    readAll(){
        const allDataFromLocalStorage = JSON.parse(localStorage.getItem(this.#key));
        return !allDataFromLocalStorage ? [] : allDataFromLocalStorage;
    };

    #updateLocalStorage(Array) {
        const elementToAdd = JSON.stringify(Array);
        localStorage.setItem(this.#key, elementToAdd);
    };

    create(object){
        if (!this.#validationData(object)){
            return null;
        }
        const dataFromLocalStorage = this.readAll();
        const createID = dataFromLocalStorage.length ? dataFromLocalStorage.at(-1).id + 1 : 1;
        const objectToAddToLocalStorage = {
            id: createID,
            createdAt: new Date().toLocaleString('default', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }),
            ...object
        };
        dataFromLocalStorage.push(objectToAddToLocalStorage);
        this.#updateLocalStorage(dataFromLocalStorage);
        return objectToAddToLocalStorage;
    };

    clearAll(){
        localStorage.setItem(this.#key, JSON.stringify([]));
    }

    delete(id){
        const allDataFromLocalStorage = this.readAll();
        const IndexToRemove = allDataFromLocalStorage.findIndex(note => note.id === id);
        allDataFromLocalStorage.splice(IndexToRemove, 1);
        this.#updateLocalStorage(allDataFromLocalStorage);
    }

    filter(property, condition){
        const allDataFromLocalStorage = this.readAll();
        const filteredArray = allDataFromLocalStorage.filter(note => note[property] === condition);
        return filteredArray;
    }

    toggleImportant(id){
        const allDataFromLocalStorage = this.readAll();
        const findNote = allDataFromLocalStorage.find(note => note.id === id);
        if (!findNote) return ;
        findNote.important = !findNote.important;
        this.#updateLocalStorage(allDataFromLocalStorage);
    }

    reverse(){
        const allDataFromLocalStorage = this.readAll();
        const filteredArray = allDataFromLocalStorage.reverse();
        return filteredArray;
    }

    count(){
        const allDataFromLocalStorage = this.readAll();
        const countElements = allDataFromLocalStorage.reduce((acc, note) => {
            acc[note.category] = (acc[note.category] || 0) + 1;
            if (note.important) acc.important = (acc.important || 0) + 1;
            acc.total = (acc.total || 0) + 1;
            return acc;
        }, {
            total: 0,
            important: 0,
            Work: 0,
            Study: 0,
            Personal: 0
        });
        return countElements;
    }


}
export default Model;