// const Module =  require('./local-1');

// console.log(Module.add(1,2));


const {result, add} =  require('./local-1');
const {result: result2, add: add2} =  require('./local-2');

console.log(result);
console.log(result2);