const BASE_URL = "https://jsonplaceholder.typicode.com";

const handleResponse = async (url, options={}) => {
    try{
        const response = await fetch(url, options);
        if (!response.ok) {
            throw { type: 'http', status: response.status }
        }
        const data = await response.json();
        return data;
    } catch (error) {
        if (error.type) throw error;
        throw { type: 'network', message: error.message };
    }
};

export const fetchUsers = async (start, limit) => {
    return handleResponse(`${BASE_URL}/users?_start=${start}&_limit=${limit}`)
};

export const fetchUser = async (id) => {
    return handleResponse(`${BASE_URL}/users/${id}`)
};

export const fetchAddNewUser = async ( body) => {
    return handleResponse(`${BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'},
    })
};

export const fetchEditUser = async (id, body) => {
    return handleResponse(`${BASE_URL}/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'},
    })
};

export const fetchDeleteUser = async (id) => {
    return handleResponse(`${BASE_URL}/users/${id}`, {
        method: 'DELETE',
    })
}



