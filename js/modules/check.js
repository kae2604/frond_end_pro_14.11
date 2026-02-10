
import user from './user.js';

console.log("Check #1: Enter Full Name");
user.fullName = "Djon Dou";
console.log(user.fullName);
console.log(Object.getOwnPropertyDescriptors(user));
console.log('------------------------------------------------------');


console.log("Check #2: Can we see the service fields?");
console.log(Object.keys(user));
console.log('------------------------------------------------------');


console.log("Check #3: Invoke lockProfile");
user.lockProfile();
console.log('------------------------------------------------------');

console.log("Check #4: Try to enter another Full Name after 'lockProfile'");
user.fullName = "Elis Cooper";
console.log(user.fullName);
console.log(Object.getOwnPropertyDescriptors(user));
console.log('------------------------------------------------------');


console.log("Check #5: Try to change createdAt after  'lockProfile'");
try {
    user.createdAt = 2000;
} catch (error) {
    console.error(error.message);
}
console.log('------------------------------------------------------');


console.log("Check #6: Try to delete Full Name after 'lockProfile'");
try {
    delete user.fullName;
} catch (error) {
    console.error(error.message);
}
console.log('------------------------------------------------------');


console.log("Check #7: Try to add another field after 'lockProfile'");
try {
    user.someField = null
} catch (error) {
    console.error(error.message);
}
console.log('------------------------------------------------------');


console.log("Check #8: Invoke lockHard");
user.lockHard();
console.log('------------------------------------------------------');


console.log("Check #9: Try to enter another Full Name after 'lockHard'");

try {
    user.fullName = "Elis Cooper";
    console.log(user.fullName);
    console.log(Object.getOwnPropertyDescriptors(user));
} catch (error) {
    console.error(error.message);
}
console.log('------------------------------------------------------');


console.log("Check #10: Try to change createdAt  after 'lockHard'");
try {
    user.createdAt = 2000;
} catch (error) {
    console.error(error.message);
}
console.log('------------------------------------------------------');


console.log("Check #11: Try to delete Full Name  after 'lockHard'");
try {
    delete user.fullName;
} catch (error) {
    console.error(error.message);
}
console.log('------------------------------------------------------');


console.log("Check #12: Try to add another field  after 'lockHard'");

try {
    user.someField = null
} catch (error) {
    console.error(error.message);
}
console.log('------------------------------------------------------');