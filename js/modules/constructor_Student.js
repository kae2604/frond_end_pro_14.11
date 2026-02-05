
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
            throw new Error ('Too many lessons!');
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
        if (mark <0 || mark >100){
            throw new Error ('Mark must to be from 0 to 100!!!');
            // return 'Mark must be from 0 to 10!!!'
        }
        this.addValueToArray(this.marks, mark);
    }

    getAverageValue(array) {
        const fullArray = array.filter(element => element !== undefined);
        if (fullArray.length === 0){
            throw new Error ('Array is empty!');
            // return 'Array is empty!';
        }
        const sumOfValue = fullArray.reduce((accumulator, currentValue) => accumulator + +currentValue, 0);
        return +((sumOfValue / fullArray.length).toFixed(1));

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

export default Student;