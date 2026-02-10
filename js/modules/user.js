
const user = {
    _firstName: '',
    _lastName: '',
    createdAt: new Date().toLocaleString(),

    set fullName (value) {
        if (typeof  value !== 'string') {
            throw new Error(`"${value}" is not a string`);
        }
        const arrayFromValue = value.split(" ");
        if (arrayFromValue.length < 2) {
            throw new Error(`"${value}" must consist of two words `);
        }
        arrayFromValue.forEach((element) => {
            if (element.length < 2){
                throw new Error("Name must be longer than two letters");
            }
        });
        this._firstName = arrayFromValue[0];
        this._lastName = arrayFromValue[1];
    },

    get fullName () {
        return `${this._firstName} ${this._lastName}`;
    },

    lockProfile: function (){
        Object.seal(this);
        console.log(`Is this object was sealed: ${Object.isSealed(this)}`)
    },

    lockHard: function (){
        Object.freeze(this);
        console.log(`Is this object was frozen: ${Object.isFrozen(this)}`)
    }
};

Object.defineProperties(user,{
    '_firstName': {
        writable: true,
        configurable: true,
        enumerable: false
    },
    '_lastName': {
        writable: true,
        configurable: true,
        enumerable: false
    },
    'createdAt': {
        writable: false,
        configurable: false,
        enumerable: true
    },
    'fullName': {
        configurable: false,
        enumerable: true
    }
});

export default user;

