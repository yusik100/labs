
const seq = (fn) => {
    const functions = []; 
    if (fn) functions.push(fn); 
    const chain = (nextFn) => {
        if (typeof nextFn === 'function') {
            functions.push(nextFn); 
            return chain; 
        } else {
            return functions.reduceRight((result, func) => func(result), nextFn);
        }
    }
    return chain;
}

console.log(
    seq(x => x + 7)(x => x * 2)(5)
); 

console.log(
    seq(x => x * 2)(x => x + 7)(5)
); 

console.log(
    seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)
); 