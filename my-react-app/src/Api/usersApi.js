
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
    let user = await fetch(`${BASE_URL}/users/${id}`);
    user = await user.json();
    return user;
}
