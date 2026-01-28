function solution(board) {
  var answer = 0;
  const n = board.length;
  const danger = Array.from({ length: n }, () => Array(n).fill(0));

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        danger[i][j] = 1;

        for (let dir of directions) {
          const nx = i + dir[0];
          const ny = j + dir[1];
          //   console.log(nx, ny);
          if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
            danger[nx][ny] = 1;
          }
        }
      }
    }
  }

  answer = danger.flat().filter((x) => x === 0).length;

  return answer;
}
