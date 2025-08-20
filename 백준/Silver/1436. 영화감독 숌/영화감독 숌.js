// 입력을 한 줄씩 읽어와 배열로 저장
//const input = Number(require("fs").readFileSync("input.txt", "utf-8").trim().split("\n"));
 const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
//const line = input.map(line => line.trim());
// const basic = line.map((v) => v.split(" ").map(Number));
const N = Number(input);
let count = 0;
let num = 666;

while (true) {
  if (String(num).includes('666')) {
    count++;
    if (count === N) {
      console.log(num);
      break;
    }
  }
  num++;
}