const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const cardMap = new Map();

for (let i = 1; i <= N; i++) {
  const card = input[i]; // 문자열로 처리
  cardMap.set(card, (cardMap.get(card) || 0) + 1);
}

const sorted = [...cardMap.entries()].sort(
  (a, b) => b[1] - a[1] || (BigInt(a[0]) < BigInt(b[0]) ? -1 : 1)
);

console.log(sorted[0][0]);