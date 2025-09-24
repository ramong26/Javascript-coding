const fs = require('fs');
let [N, r, c] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

let answer = 0;
let size = 2 ** N;

while (size > 1) {
  size /= 2;
  if (r < size && c < size) {           // 왼쪽 위
    answer += 0;
  } else if (r < size && c >= size) {   // 오른쪽 위
    answer += size * size;
    c -= size;
  } else if (r >= size && c < size) {   // 왼쪽 아래
    answer += 2 * size * size;
    r -= size;
  } else {                              // 오른쪽 아래
    answer += 3 * size * size;
    r -= size;
    c -= size;
  }
}

console.log(answer);
