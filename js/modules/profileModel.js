
const profileModel = {
    _firstName: '',
    _lastName: '',
    _email: '',
    _updated: null,

    set firstName (value) {
        if (value.length <= 2) {
            this._firstName = false;
        } else {
            Object.defineProperty(this, '_firstName', {
                value: value,
                writable: true,
                configurable: true,
                enumerable: true
            });
        }
    },

    set lastName (value) {
        if (value.length <= 2) {
            this._lastName = false;
        } else {
            Object.defineProperty(this, '_lastName', {
                value: value,
                writable: true,
                configurable: true,
                enumerable: true
            });
        }
    },

    set email (value) {
        if (!value.includes('@') || !value.includes('.')) {
            this._email = false;
        } else {
            Object.defineProperty(this, '_email', {
                value: value,
                writable: true,
                configurable: true,
                enumerable: true
            });
        }
    },

    get firstName() {
        return this._firstName
    },

    get lastName() {
        return this._lastName
    },

    get fullName() {
        return `${this._firstName} ${this._lastName}`
    },

    get email() {
        return this._email
    },

    get updated(){
        return this._updated = new Date().toLocaleString();
    }
};

export default profileModel;