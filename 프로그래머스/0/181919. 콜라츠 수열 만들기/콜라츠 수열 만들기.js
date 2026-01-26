function solution(n) {
    var answer = [];
    let result = n
    answer.push(result)
    while (result !==1){
        
        if(result % 2 === 0) {
            result = result /2
            answer.push(result)
        } else {
            result = result * 3 + 1
            answer.push(result)
        }
    }
    return answer;
}