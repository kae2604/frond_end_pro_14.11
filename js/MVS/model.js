class Model {
    #localStorage = [];
    #lastUserId = null;





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
            this.#lastUserId = this.#localStorage.at(-1).id
            return this.#localStorage
        })
    };

    async addUser(user) {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                throw new Error("HTTP " + response.status);
            }
            const data = await response.json();
            this.#lastUserId += 1;
            data.id = this.#lastUserId;
            this.#localStorage.push(data);
            return data;
            } catch (error){
            console.log( "Error: " + error.message);
            throw error;
        }
    }






}
export default Model;





