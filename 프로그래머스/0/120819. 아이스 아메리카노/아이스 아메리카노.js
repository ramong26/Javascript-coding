function solution(money) {
  let answer = [];
  

  let divie = Math.floor(money / 5500);
  

  let rest = money % 5500;
  

  answer.push(divie);
  answer.push(rest);
  
  return answer;
}