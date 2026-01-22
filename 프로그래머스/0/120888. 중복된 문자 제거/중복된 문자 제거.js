function solution(my_string) {
  let answer = '';
  let myStringNewSet = new Set(my_string);

  myStringNewSet.forEach((item) => {
    answer = answer + item;
  });

  return answer;
}

