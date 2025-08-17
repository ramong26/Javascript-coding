// 입력을 한 줄씩 읽어와 배열로 저장
//const input = require("fs").readFileSync("input.txt", "utf-8").trim().split("\n");
 const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
  
let result = []
let a;
let b;
for(let i = 0; i <= input.length-1; i++) {
  let div = input[i].split(" ");
  a = Number(div[0]);
  b = Number(div[1]);
 
  if(a===0 && b===0) {
    break;
  } 
   if(b % a === 0) {
    result.push('factor');
  } else if(a % b === 0) {
    result.push('multiple');
  } else {
    result.push('neither');
  }
}
console.log(result.join("\n"));