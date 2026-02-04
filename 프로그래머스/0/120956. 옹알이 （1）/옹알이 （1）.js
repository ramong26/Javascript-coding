function solution(babbling) {
  const pronunciation = ['aya', 'ye', 'woo', 'ma'];
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    const splitBabbling = babbling[i].match(/(aya|ye|woo|ma)/g);

    if (!splitBabbling) continue;

    if (splitBabbling.join('') === babbling[i]) {
      answer++;
    }
  }

  return answer;
}
