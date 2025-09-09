const fs = require('fs');
const s = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0] || '';

const parts = s.split('-').map(part =>
  part.split('+').reduce((sum, num) => sum + Number(num), 0)
);

// parts[0] 에서 나머지 parts들을 전부 빼기
const result = parts.slice(1).reduce((acc, val) => acc - val, parts[0] || 0);
console.log(result);
