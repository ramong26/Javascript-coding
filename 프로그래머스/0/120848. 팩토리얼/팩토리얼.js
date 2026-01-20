function solution(n) {
    var answer = 1;
    for(let i = 1; i<=Infinity; i++){
        answer = answer * i
        if(answer > n) {
            return i-1
        }
    }
    
    return answer;
}