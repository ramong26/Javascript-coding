s = '10 Z 20 Z 1';

function solution(s) {
  s = s.split(' ');
  let sArray = [];
  var answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'Z') {
      sArray.pop(s[i - 1]);
    }
    sArray.push(Number(s[i]));
  }
  console.log(sArray);
  for (let k = 0; k < sArray.length; k++) {
    if (sArray[k] >= 0 && sArray[k] < 0) {
      answer = answer + sArray[k];
    }
  }
console.log(answer)
  return answer;
}

