    // https://www.acmicpc.net/problem/2422
// 한윤정이 이탈리아에 가서 아이스크림을 사먹는데 - 골드 4

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);

  const bad = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));

  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    bad[a][b] = true;
    bad[b][a] = true;
  }

  let answer = 0;

  for (let i = 1; i <= N - 2; i++) {
    for (let j = i + 1; j <= N - 1; j++) {
      if (bad[i][j]) continue;
      for (let k = j + 1; k <= N; k++) {
        if (bad[i][k] || bad[j][k]) continue;
        answer++;
      }
    }
  }

  return answer;
}
console.log(solution(input));

// input 예시
// 5 3
// 1 2
// 3 4
// 1 3
