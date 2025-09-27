// https://www.acmicpc.net/problem/10825
// 10825번: 국영수 - 실버5 -

 const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const totalLength = Number(input[0]); // 총 학생 수 = 12
const studentsMap = input
  .slice(1)
  .map((line) =>
    line.split(' ').map((v, i) => (i === 0 ? String(v) : Number(v)))
  ); // 이름 문자열 나머지 숫자로 변환

// 국 -> 영 -> 수 -> 이름
// 감 -> 증 -> 감 -> 증

// 1. 일단 이름을 뒤로 빼고 나머지 국어, 영어, 수학을 차례대로 정렬
// 2. 그 다음 이름만 빼서 출력

const rearranged = studentsMap
  .map(([name, kor, eng, math]) => [kor, eng, math, name])
  .sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        if (a[2] === b[2]) {
          return a[3] < b[3] ? -1 : a[3] > b[3] ? 1 : 0;
        }
        return b[2] - a[2];
      }
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

console.log(rearranged.map((v) => v[3]).join('\n'));

// input 예시
// 12
// Junkyu 50 60 100
// Sangkeun 80 60 50
// Sunyoung 80 70 100
// Soong 50 60 90
// Haebin 50 60 100
// Kangsoo 60 80 100
// Donghyuk 80 60 100
// Sei 70 70 70
// Wonseob 70 70 90
// Sanghyun 70 70 80
// nsj 80 80 80
// Taewhan 50 60 90
