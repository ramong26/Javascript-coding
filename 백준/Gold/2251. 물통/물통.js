// https://www.acmicpc.net/problem/2251
// 2251 - 물통 - 골드 4

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// 접근 : 물통의 상태를 BFS로 탐색하면서 가능한 모든 상태를 구함
// 처음 C는 무조건 차있으니 처음은 더한 상태로 시작

function solution(input) {
  const [A, B, C] = input[0].split(" ").map(Number); // 8 9 10

  const visited = Array.from({ length: A + 1 }, () =>
    Array.from({ length: B + 1 }, () => false)
  );
  const result = new Set();

  const queue = [];
  queue.push([0, 0, C]); // 처음 상태

  while (queue.length) {
    const [a, b, c] = queue.shift();

    if (visited[a][b]) continue;
    visited[a][b] = true;

    if (a === 0) {
      result.add(c);
    }

    // A -> B
    let move = Math.min(a, B - b);
    queue.push([a - move, b + move, c]);

    // A -> C
    move = Math.min(a, C - c);
    queue.push([a - move, b, c + move]);

    // B -> A
    move = Math.min(b, A - a);
    queue.push([a + move, b - move, c]);

    // B -> C
    move = Math.min(b, C - c);
    queue.push([a, b - move, c + move]);

    // C -> A
    move = Math.min(c, A - a);
    queue.push([a + move, b, c - move]);

    // C -> B
    move = Math.min(c, B - b);
    queue.push([a, b + move, c - move]);
  }

  input = Array.from(result)
    .sort((a, b) => a - b)
    .join(" ");
  return input;
}

console.log(solution(input));
// input 예시
// 8 9 10
