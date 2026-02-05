import Student from './constructor_Student.js';
import getRandomArray from './getRandomArray.js';

const student3 = new Student('Sofi', 'Smith', 1996, 25);
console.log(student3);

const ArrayOfAttendance3  = getRandomArray(25, 'attendance')
ArrayOfAttendance3.forEach(element => {
    element ? student3.present() :  student3.absent();
});

const ArrayOfMarks3 = getRandomArray(25, 'marks');
ArrayOfMarks3.forEach(element => {
    student3.mark(element);
})

const conclusion3 = `
Student #1: ${student3.getFullName()};
Age: ${student3.getAge()};
Study results: ${student3.summary()}`

console.log(conclusion3);