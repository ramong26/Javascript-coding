// https://www.acmicpc.net/problem/2751
// 2751번: 수 정렬하기 2 - 실버5
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const totalLength = Number(input[0]); // 총 카드 수 = 6
const cards = input.slice(1).map((v) => Number(v)); // 숫자로 변환
console.log(cards.sort((a, b) => a - b).join('\n')); // 오름차순 정렬 후 줄바꿈으로 구분하여 출력
