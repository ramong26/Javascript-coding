function solution(s) {
  const answer = {};

  for (const ch of s) {
    answer[ch] = (answer[ch] || 0) + 1;
  }

  return Object.keys(answer)
    .filter(ch => answer[ch] === 1)
    .sort()
    .join('');
}
