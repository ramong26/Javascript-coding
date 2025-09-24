// https://www.acmicpc.net/problem/1780
// 1780번: 종이의 개수 - 실버2

 const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const totalLength = Number(input[0]);
const numberMap = input.slice(1).map((line) => line.split(' ').map(Number));

// 카운트 변수
let minusOneCount = 0;
let zeroCount = 0;
let oneCount = 0;

// 영역이 모두 같은지 확인하는 함수
function same(x, y, size, paper) {
  const first = paper[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (paper[i][j] !== first) return false;
    }
  }
  return true;
}

// 분할 정복 함수
function solve(x, y, size, paper) {
  if (same(x, y, size, paper)) {
    const value = paper[x][y];
    if (value === -1) minusOneCount++;
    else if (value === 0) zeroCount++;
    else oneCount++;
    return;
  }

  const newSize = size / 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      solve(x + i * newSize, y + j * newSize, newSize, paper);
    }
  }
}

// 실행
solve(0, 0, totalLength, numberMap);

console.log(minusOneCount);
console.log(zeroCount);
console.log(oneCount);

// input 예시
// 9
// 0 0 0 1 1 1 -1 -1 -1
// 0 0 0 1 1 1 -1 -1 -1
// 0 0 0 1 1 1 -1 -1 -1
// 1 1 1 0 0 0 0 0 0
// 1 1 1 0 0 0 0 0 0
// 1 1 1 0 0 0 0 0 0
// 0 1 -1 0 1 -1 0 1 -1
// 0 -1 1 0 1 -1 0 1 -1
// 0 1 -1 1 0 -1 0 1 -1
