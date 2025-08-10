const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

for(let i = 0; i < 100; i++) {
  if(input[i] === undefined) return
  const string = input[i].trim();
  console.log(string);
}
