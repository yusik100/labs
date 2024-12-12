'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
    return array1.filter(item => !array2.includes(item));
};

module.exports = { difference };
