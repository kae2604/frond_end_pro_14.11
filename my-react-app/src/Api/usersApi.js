
const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async (start, limit) => {
    try{
        let users = await fetch(`${BASE_URL}/users?_start=${start}&_limit=${limit}`);
        if (!users.ok) {
            throw { type: 'http', status: users.status }
        }
        users = await users.json();
        return users;
    } catch (error) {
        if (error.type) throw error;
        throw { type: 'network', message: error.message };
    }
}

export const fetchUser = async (id) => {
    try{
        let user = await fetch(`${BASE_URL}/users/${id}`);
        if (!user.ok) {
            throw { type: 'http', status: user.status }
        }
        user = await user.json();
        return user;
    }catch (error) {
        if (error.type) throw error;
        throw { type: 'network', message: error.message };
    }
}




export const fetchAddNewUser = async ( body) => {
    try{
        let response = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'},
        })
        if (!response.ok) {
            throw { type: 'http', status: response.status }
        }
        response = await response.json();
        return response;
    }catch (error) {
        if (error.type) throw error;
        throw { type: 'network', message: error.message };
    }
}

export const fetchEditUser = async (id, body) => {
    try{
        let response = await fetch(`${BASE_URL}/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'},
        })
        if (!response.ok) {
            throw { type: 'http', status: response.status }
        }
        response = await response.json();
        return response;
    }catch (error) {
        if (error.type) throw error;
        throw { type: 'network', message: error.message };
    }
}



