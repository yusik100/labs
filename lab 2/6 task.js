
const average = (a, b) => {return (a+b)/2}

const square = (a) => {return a*a}

const cube = (a) => {return a*a*a}

const calculate = (a, b) => {
    let arr = [];
    for (i = a; i <= b; i++) {
        element = average(square(i), cube(i));
        arr.push(element);
    }
    return arr;
}

console.log(calculate(0, 9));
