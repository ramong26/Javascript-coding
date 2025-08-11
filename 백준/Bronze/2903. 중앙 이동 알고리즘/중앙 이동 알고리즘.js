const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = Number(input);
const side = Math.pow(2, N) + 1;
console.log(side * side);