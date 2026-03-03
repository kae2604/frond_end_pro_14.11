class Model {
    #localStorage = [];




    getAll() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP " + response.status);
                }
                return response.json()
            .catch(error => {
                console.log( "Error: " + error.message);
                return [];
                })
            });
    };

    localStorage(){
         return this.getAll()
            .then(users => {
            this.#localStorage = [...users];
            return this.#localStorage
        })
    }






}
export default Model;





