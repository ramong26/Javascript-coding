const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const A = [];
const B = [];
const result = [];

let sum = 0;

for(let i = 1; i <= N; i++){
  A.push(input[i].split(" ").map(Number));
}
for(let i = N + 1; i <= 2 * N; i++){
  B.push(input[i].split(" ").map(Number));
}


for(let i = 0; i < A.length; i++) {
  for(let j = 0; j < A[i].length; j++) {
    sum =  A[i][j] + B[i][j];
   result.push(sum);
  }

}

for (let i = 0; i < result.length; i += 3) {
  console.log(result.slice(i, i + 3).join(' '));
}




