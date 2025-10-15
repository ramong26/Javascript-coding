const fs = require("fs");
const [A, B, C, X, Y] = fs.readFileSync("/dev/stdin", "utf8")
    .trim().split(" ").map(Number);

let ans = Infinity;


for (let i = 0; i <= Math.max(X, Y); i++) {
    const cost = C * 2 * i + Math.max(0, X - i) * A + Math.max(0, Y - i) * B;
    if (cost < ans) ans = cost;
}

console.log(ans);
