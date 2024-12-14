'use strict';

const store = (x) => {
    return function () {
        return x;
    }
};

module.exports = { store };
