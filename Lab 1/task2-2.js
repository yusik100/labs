'use strict';

const array = [true, 'hello', 5, 12, -200, false, false, 'word', 32432, 'python', true, -58, { a: 4 }, null, undefined];

const types = {};

const countTypes = (array) => {
    for (const element of array) {
        const type = typeof element;
        const count = types[type] || 0;
        types[type] = count + 1;
  }
    return types;
};

module.exports = { countTypes };

//test
const result = countTypes(array);
console.dir(result);