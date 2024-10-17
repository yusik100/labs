'use strict';

const array = [true, 'hello', 5, 12, -200, false, false, 'word', 32432, 'python', true, -58, { a: 4 }, null, undefined];

const types = { number: 0, string: 0, boolean: 0, object: 0, undefined: 0 };

for (const element of array) {
    types[typeof element] += 1
};

//test
console.dir(types);




