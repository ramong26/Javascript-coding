const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n"); 
const N = Number(input[0]);

let maxMoney = 0;
let T = [];
let P = [];

for (let i = 0; i < N; i++) {
  const [t, p] = input[i + 1].split(" ").map(Number);
  T.push(t);
  P.push(p);
}

function dfs(day, money) {
  if (day > N) return; 

  if (day === N) { 
    maxMoney = Math.max(maxMoney, money);
    return;
  }

  dfs(day + T[day], money + P[day]); 
  dfs(day + 1, money); 
}

dfs(0, 0);
console.log(maxMoney);
