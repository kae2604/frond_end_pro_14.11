import Student from './constructor_Student.js';
import getRandomArray from './getRandomArray.js';

const student1 = new Student('John', 'Doe', 1986, 25);
console.log(student1);

const ArrayOfAttendance1  = getRandomArray(25, 'attendance')
ArrayOfAttendance1.forEach(element => {
    element ? student1.present() :  student1.absent();
});

const ArrayOfMarks1 = getRandomArray(25, 'marks');
ArrayOfMarks1.forEach(element => {
    student1.mark(element);
})

const conclusion1 = `
Student #1: ${student1.getFullName()};
Age: ${student1.getAge()};
Study results: ${student1.summary()}`

console.log(conclusion1);




