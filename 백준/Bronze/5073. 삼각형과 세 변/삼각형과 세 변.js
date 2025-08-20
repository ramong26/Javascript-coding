// 입력을 한 줄씩 읽어와 배열로 저장
//const input = require("fs").readFileSync("input.txt", "utf-8").trim().split("\n");
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const line = input.map(line => line.trim());
const basic = line.map((v) => v.split(" ").map(Number));

let cleanLine = []
// const cleanLine = basic[0].sort((a, b) => (a - b));
for(let i = 0; i<=basic.length-1; i++) {
  cleanLine.push(basic[i].sort((a, b) => (a - b)));
}

for(let i = 0; i<basic.length-1; i++){
 if (cleanLine[i].length < 3) {
    console.log('Invalid');
    continue;
  }
  if(cleanLine[i][0] + cleanLine[i][1] > cleanLine[i][2]) {
    if(cleanLine[i][0] === cleanLine[i][1] && cleanLine[i][1] === cleanLine[i][2]) {
      console.log("Equilateral");
    } else if(cleanLine[i][0] !== cleanLine[i][1] && cleanLine[i][1] !== cleanLine[i][2] && cleanLine[i][0] !== cleanLine[i][2]) {
      console.log("Scalene");
    } else {
      console.log("Isosceles");
    }
  } else {
    console.log('Invalid');
  }
}

