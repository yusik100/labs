'use strict';

const inc = (n) => ++n;

//test
const a = 5; 
const b = inc(a); 
console.dir({a, b});

module.exports = { inc };