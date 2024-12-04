
const range = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}

console.log(range(15, 30));

const rangeOdd = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 1) {
            arr.push(i);
        } 
    }
    return arr;
}

console.log(rangeOdd(15, 30));