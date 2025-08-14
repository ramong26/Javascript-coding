function solution(array) {
  const max = Math.max(...array);       // 가장 큰 값
  const index = array.indexOf(max);     // 해당 값의 인덱스
  return [max, index];
}
