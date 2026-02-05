
const getRandomArray = function (lessonsCount, typeOfArray) {
    if (typeOfArray !=='attendance' && typeOfArray !=='marks'){
        console.log("typeOfArray is wrong");
        return [];
    }
    return Array.from({length: lessonsCount}, () => {
        if (typeOfArray === 'attendance') return !!Math.floor(Math.random() * 2)
        if (typeOfArray === 'marks') return Math.floor(Math.random() * 100) + 1;
    });
}
export default getRandomArray;