'use strict';

const inc = (num) => {
  num.n++;
};

//test
const obj = { n: 5 }; 
inc(obj); 
console.dir(obj);

module.exports = { inc };
