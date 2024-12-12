// 1) цикл for

const sum1 = (...args) => {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

console.log(sum1(1, 2, 3));

// 2) цикл for..of

const sum2 = (...args) => {
    let result = 0;
    for (const element of args) {
        result += element;
    }
    return result;
}

console.log(sum2(0, 6, 1));

// 3) цикл while

const sum3 = (...args) => {
    let result = 0;
    let i = 0;
    while (i < args.length) {
        result += args[i]
        i++;
    }
    return result;
}

console.log(sum3(4, 7, 1));

// 4) цикл do...while

const sum4 = (...args) => {
    let result = 0;
    let i = 0;
    do {
        result += args[i];
        i++;
    } while (i < args.length);
    return result;
}

console.log(sum4(8, 9));

// 5) цикл Array.prototype.reduce()

const sum5 = (...args) => {
    return args.reduce((acc, num) => acc + num, 0);
}

console.log(sum5(4, 8, 2, 1));
