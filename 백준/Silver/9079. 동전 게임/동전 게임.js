const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);
let idx = 1;

// 주어진 연산(행, 열, 대각선)으로 보드 뒤집기
function flip(board, ops) {
  const b = board.map(row => row.slice());
  for (const op of ops) {
    switch (op) {
      // 행 뒤집기
      case 0: b[0] = b[0].map(c => c === 'H' ? 'T' : 'H'); break;
      case 1: b[1] = b[1].map(c => c === 'H' ? 'T' : 'H'); break;
      case 2: b[2] = b[2].map(c => c === 'H' ? 'T' : 'H'); break;
      // 열 뒤집기
      case 3: for (let i=0;i<3;i++) b[i][0]=b[i][0]==='H'?'T':'H'; break;
      case 4: for (let i=0;i<3;i++) b[i][1]=b[i][1]==='H'?'T':'H'; break;
      case 5: for (let i=0;i<3;i++) b[i][2]=b[i][2]==='H'?'T':'H'; break;
      // 대각선 뒤집기
      case 6: for (let i=0;i<3;i++) b[i][i]=b[i][i]==='H'?'T':'H'; break;
      case 7: for (let i=0;i<3;i++) b[i][2-i]=b[i][2-i]==='H'?'T':'H'; break;
    }
  }
  return b;
}

// 모두 같은 면인지 확인
function isAllSame(board) {
  const first = board[0][0];
  return board.every(row => row.every(c => c === first));
}

for (let t = 0; t < T; t++) {
  // 테스트케이스 가져오기
  const board = input.slice(idx, idx + 3).map(line => line.split(' '));
  idx += 3;

  let minOps = Infinity;

  // 8가지 연산의 모든 조합 
  for (let mask = 0; mask < 256; mask++) {
    const ops = [];
    for (let i = 0; i < 8; i++) {
      if (mask & (1 << i)) ops.push(i);
    }

    const newBoard = flip(board, ops);
    if (isAllSame(newBoard)) minOps = Math.min(minOps, ops.length);
  }

  console.log(minOps === Infinity ? -1 : minOps);
}
