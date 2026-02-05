'use strict';

class Student {

    firstName = null;
    lastName = null;
    birthYear = null;
    attendance = null;
    marks = null;

    constructor(firstName, lastName, birthYear, lessonsCount){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.attendance = Array.from({length: lessonsCount});
        this.marks = Array.from({length: lessonsCount});
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
        }

    getAge() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.birthYear;
        return age;
        }

    addValueToArray(array, value) {
        const indexOfEmptyLesson = array.indexOf(undefined);
        if (indexOfEmptyLesson === -1) {
            throw new Error ('Too much lessons!');
            // return 'Too many lessons!'
            }
            array[indexOfEmptyLesson] = value;
        }

    present() {
        this.addValueToArray(this.attendance, true);
        }

    absent() {
        this.addValueToArray(this.attendance, false);
        }

    mark(mark) {
        if (mark <0 || mark >10){
            throw new Error ('Mark must to be from 0 to 10!!!');
            // return 'Mark must be from 0 to 10!!!'
        }
        this.addValueToArray(this.marks, mark);
    }

    getAverageValue(array) {
        const fullArray = array.filter(element => element !== undefined);
        if (fullArray.length === 0){
            throw new Error ('Array is empty!')
            // return 'Array is empty!';
        }
        const sumOfValue = fullArray.reduce((accumulator, currentValue) => accumulator + +currentValue, 0);
        const averageValue = +((sumOfValue / fullArray.length).toFixed(1));
        return averageValue;
    }

    summary() {
        const averageValueOfMarks = this.getAverageValue(this.marks);
        const averageValueOfAttendance = this.getAverageValue(this.attendance);
        const goodMarks = averageValueOfMarks >= 9;
        const goodAttendance = averageValueOfAttendance >= 0.9;
        if (goodMarks && goodAttendance) {
            return `
                    Average marks: ${averageValueOfMarks};
                    Average attendance: ${averageValueOfAttendance};
                    Conclusion: Good job, Well done`;
        }
        if (goodMarks || goodAttendance) {
            return `
                    Average marks: ${averageValueOfMarks};
                    Average attendance: ${averageValueOfAttendance};
                    Conclusion: Normal, but it could be better!`;
        }
        return `
                    Average marks: ${averageValueOfMarks};
                    Average attendance: ${averageValueOfAttendance};
                    Conclusion: Bad job, You are radish!`;
    }
}

const student1 = new Student('John', 'Doe', 1986, 10);
console.log(student1);

const someArrayOfAttendance1  = [true, true, true, true, false, true, true, true, true, true]
someArrayOfAttendance1.forEach(element => {
    element ? student1.present() :  student1.absent();
});
const someArrayOfMarks1 = [10, 10, 9, 10, 8, 9, 10, 10, 9, 10];
someArrayOfMarks1.forEach(element => {
    student1.mark(element);
})

console.log(`
Student #1: ${student1.getFullName()};
Age: ${student1.getAge()};
Study results: ${student1.summary()}`);



const student2 = new Student('Kevin', 'Kline', 2003, 10);
console.log(student2);

const someArrayOfAttendance2  = [false, true, true, false, true, true, true, true, true, true]
someArrayOfAttendance2.forEach(element => {
    element ? student2.present() :  student2.absent();
});
const someArrayOfMarks2 = [10, 10, 9, 10, 10, 9, 10, 10, 9, 10];
someArrayOfMarks2.forEach(element => {
    student2.mark(element);
})

console.log(`
Student #2: ${student2.getFullName()};
Age: ${student2.getAge()};
Study results: ${student2.summary()}`);



const student3 = new Student('Sofi', 'Smith', 1996, 10);
console.log(student3);

const someArrayOfAttendance3  = [true, false, false, true, false, false, true, false, false, true]
someArrayOfAttendance3.forEach(element => {
    element ? student3.present() :  student3.absent();
});
const someArrayOfMarks3 = [10, 7, 0, 10, 0, 9, 10, 10, 8, 6];
someArrayOfMarks3.forEach(element => {
    student3.mark(element);
})

console.log(`
Student #3: ${student3.getFullName()};
Age: ${student3.getAge()};
Study results: ${student3.summary()}`);




















