const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");;

const arr = input.map(line => {
  const [a, b] = line.split(" ").map(Number);
  return [a, b];
});

for(let i = 0; i < arr.length; i++) {
  const [a, b] = arr[i];
  console.log(a + b);
}
