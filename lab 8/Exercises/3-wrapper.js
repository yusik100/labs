'use strict';

const contract = (fn, ...types) => {
    return function (...args) {
        if (args.length !== types.length - 1) {
            throw new TypeError ('Invalid number of arguments');
        }

        for (let i = 0; i < args.length; i++) {
            if (!(args[i] instanceof types[i] || typeof args[i] === types[i].name.toLowerCase())) {
                throw new TypeError(`Argument ${i} is not of type ${types[i].name}`);
              }
            }
            const result = fn(...args);

            const resultType = types[types.length - 1];
            if (!(result instanceof resultType || typeof result === resultType.name.toLowerCase())) {
                throw new TypeError(`Return value is not of type ${resultType.name}`);
            }
            return result;
    }
};

module.exports = { contract };
