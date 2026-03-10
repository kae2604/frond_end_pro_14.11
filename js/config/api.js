export default {
    baseURL: 'https://jsonplaceholder.typicode.com',

    get users() {
        return this.baseURL + '/users';
    }
};