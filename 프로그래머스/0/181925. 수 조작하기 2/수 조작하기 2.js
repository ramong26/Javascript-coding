function solution(numLog) {
    var answer = [];
    for(let i = 0; i< numLog.length; i++) {
        if(numLog[i + 1] === numLog[i] + 1) answer.push('w')
        else if (numLog[i + 1] === numLog[i] - 1) answer.push('s')
        else if (numLog[i + 1] === numLog[i] + 10) answer.push('d')
        else answer.push('a')
    }
    return answer.slice(0, answer.length-1).join('');
}