const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const input = [];

rl.on('line', (line) => {
  input.push(line.trim());
  if (input.length === 3) rl.close();
});

rl.on('close', () => {
  const N = Number(input[0]);
  let arr = input[1].split(' ').map(s => (s === '' ? undefined : Number(s)));
  const v = Number(input[2]);

  // undefined 제거
  let i = [];
  for (let j = 0; j < N; j++) {
    if (arr[j] !== undefined) {
      i.push(arr[j]);
    }
  }

  // v의 개수 세기 (문제 의도)
  let count = 0;
  for (let k = 0; k < i.length; k++) {
    if (i[k] === v) {
      count++;
    }
  }

  console.log(count);
});
