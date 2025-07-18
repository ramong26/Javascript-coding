function solution(s) {
    if (!(s.length === 4 || s.length === 6)) return false;

    s = s.split('');
    let math = [];
    for(let i = 0; i <= s.length - 1; i++){
        math[i] = s[i] - 0;
    }
    for(let j = 0; j <= math.length - 1; j++){
        if (isNaN(math[j])) {
            return false;
        }
    }
    return true;
}
