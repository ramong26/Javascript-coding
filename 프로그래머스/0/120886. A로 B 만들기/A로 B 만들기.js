function solution(before, after) {
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    before = before.split('').sort().join('');
    after = after.split('').sort().join('');
    // console.log(before)
    if (before === after) return 1
    else return 0
   
}