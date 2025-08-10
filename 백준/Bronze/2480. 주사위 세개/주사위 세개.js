 const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
 const a = Number(input[0]);
 const b = Number(input[1]);
const c = Number(input[2]);
if(a === b && b === c){
  console.log(10000 + a * 1000);
} else if ( a === b || a === c || b === c) {
  const repeated = a === b ? a : (a === c ? a : b);
  console.log(1000 + repeated * 100);
} else {
  console.log(Math.max(a, b, c) * 100);
}



