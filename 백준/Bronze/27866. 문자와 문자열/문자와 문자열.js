const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const string = input[0].trim().split("");
const N = Number(input[1]);

console.log(string[N-1]);


