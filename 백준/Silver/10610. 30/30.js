const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input[0]; // 80875542
let splitNumber = N.split('');
// 30의 배수가 될려면 10과 3의 배수여야함
// 10의 배수 = 0으로 끝남
// 3의 배수 = 각 자리수의 합이 3의 배수

function solution() {
  if (!splitNumber.includes('0')) return -1;

  let sum = splitNumber.reduce((a, b) => a + Number(b), 0);
  if (sum % 3 !== 0) return -1;

  return splitNumber.sort((a, b) => b - a).join('');
}

console.log(solution());
