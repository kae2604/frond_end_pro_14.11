class Model {
    #localStorage = [];
    #lastUserId = null;





    getAll() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP " + response.status);
                }
                return response.json();
            })
            .then(users => {
                this.#localStorage = [...users];
                this.#lastUserId = this.#localStorage.at(-1).id
                return this.#localStorage
            })
            .catch(error => {
                console.log( "Error: " + error.message);
                throw error;
                })
    };

    localStorage(){
        return this.#localStorage
    }

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
            }
        catch (error){
            console.log( "Error: " + error.message);
            throw error;
        }
    };

    async editUser(user, id) {
        const indexToReplace =  this.#localStorage.findIndex(user => user.id === Number(id));
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                // throw new Error("HTTP " + response.status);
                if (response.status === 404) {
                    return false;
                }
                user.id = id;
                if (indexToReplace !== -1) {
                    this.#localStorage[indexToReplace] = user;
                }
                return user;
            }
            const data = await response.json();
            if (indexToReplace !== -1) {
                this.#localStorage[indexToReplace] = data;
            }
            return data;
        }
        catch (error){
            throw error;
        }
    };

    async deleteUser(id) {
        const indexToDelete =  this.#localStorage.findIndex(user => user.id === Number(id));
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error("HTTP " + response.status);
            }
            const data = await response.json();
            if (indexToDelete !== -1) {
                this.#localStorage.splice(indexToDelete, 1);
                this.#lastUserId = this.#localStorage.at(-1).id
            }
            return id;
        }
        catch (error){
            console.log( "Error: " + error.message);
            throw error;
        }
    };
}
export default Model;





