const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = [];
let resultScore = [];
let result = [];

for (let i = 0; i < input.length; i++) {
  if (!input[i] || input[i].length < 2) continue;

  const string = input[i].trim();
  const parts = string.split(" ");

  const subject = parts[0];  
  const creditStr = parts[1]; 
  const gradeStr = parts[2];

  if (gradeStr === "P") continue;  

  const score = parseFloat(creditStr);
  const grade = gradeStr;

  arr.push(grade);
  resultScore.push(score);
}

let sumResultScore = 0;
for(let s = 0; s < resultScore.length; s++) {
  sumResultScore += resultScore[s];
}

for (let i = 0; i < arr.length; i++) {
  switch (arr[i]) {
    case "A+":
      result.push(4.5);
      break;
    case "A0":
      result.push(4.0);
      break;
    case "B+":
      result.push(3.5);
      break;
    case "B0":
      result.push(3.0);
      break;
    case "C+":
      result.push(2.5);
      break;
    case "C0":
      result.push(2.0);
      break;
    case "D+":
      result.push(1.5);
      break;
    case "D0":
      result.push(1.0);
      break;
    case "F":
      result.push(0.0);
      break;
    default:
      result.push(0.0);
      break;
  }
}

let sum = 0;
for(let k = 0; k < result.length; k++) {
  sum += result[k] * resultScore[k];
}

const average = sum / sumResultScore;
console.log(average.toFixed(6));
