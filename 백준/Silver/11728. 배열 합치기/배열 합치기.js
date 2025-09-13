const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const arr2 = input[1].split(' ').map(Number);
const arr3 = input[2].split(' ').map(Number);

const finishArr = arr2.concat(arr3); // 그냥 합치기
console.log(finishArr.sort((a, b) => a - b).join(' '));
