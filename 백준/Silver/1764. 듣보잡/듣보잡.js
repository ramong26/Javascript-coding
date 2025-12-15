// https://www.acmicpc.net/problem/1764
// 듣보잡 - 실버 4

const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);

  const neverHeard = new Set();

  for (let i = 1; i <= N; i++) {
    neverHeard.add(input[i]);
  }

  const result = [];

  for (let i = N + 1; i <= N + M; i++) {
    if (neverHeard.has(input[i])) {
      result.push(input[i]);
    }
  }

  result.sort();

  let output = "";
  output += result.length + "\n";
  output += result.join("\n");

  return output;
}

console.log(solution(input));
