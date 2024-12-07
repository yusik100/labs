
const array = () => {
    const data = [];

    function arr(index) {
        return data[index];
    }

    arr.push = function (value) {
        data.push(value);
    };

    arr.pop = function () {
        return data.pop();
    };

    return arr; 
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Виводить: first
console.log(arr(1)); // Виводить: second
console.log(arr(2)); // Виводить: third

console.log(arr.pop()); // Виводить: third
console.log(arr.pop()); // Виводить: second
console.log(arr.pop()); // Виводить: first

console.log(arr.pop()); // Виводить: undefined