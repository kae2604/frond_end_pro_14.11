import Student from './constructor_Student.js';
import getRandomArray from './getRandomArray.js';

const student2 = new Student('Kevin', 'Kline', 2003, 25);
console.log(student2);

const ArrayOfAttendance2  = getRandomArray(25, 'attendance')
ArrayOfAttendance2.forEach(element => {
    element ? student2.present() :  student2.absent();
});

const ArrayOfMarks2 = getRandomArray(25, 'marks');
ArrayOfMarks2.forEach(element => {
    student2.mark(element);
})

const conclusion2 = `
Student #2: ${student2.getFullName()};
Age: ${student2.getAge()};
Study results: ${student2.summary()}`

console.log(conclusion2);