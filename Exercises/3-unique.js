'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
    const result = [];
    for (const element of array) {
        if (!result.includes(element)) {
            result.push(element);
        }
    }
    return result;
};

module.exports = { unique };
