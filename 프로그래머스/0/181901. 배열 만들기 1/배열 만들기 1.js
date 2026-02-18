function solution(n, k) {
    var answer = [];
    
    let i = 1;
    
    while (true) {
        if (k * i <= n) {
            answer.push(k * i);
            i++;
        } else {
            break;
        }
    }
    return answer;
}