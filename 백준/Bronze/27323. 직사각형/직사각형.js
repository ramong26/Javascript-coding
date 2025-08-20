// 입력을 한 줄씩 읽어와 배열로 저장
//const input = require("fs").readFileSync("input.txt", "utf-8").trim().split("\n");
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const line = input.map(line => line.trim());
const basic = line.map((v) => v.split(" ").map(Number));

console.log(basic[0] * basic[1])