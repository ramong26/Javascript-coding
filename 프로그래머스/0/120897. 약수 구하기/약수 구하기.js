function solution(n) {
    var answer = [];
    
    for(let i =1; i<=n; i++){
      
        if((n % i === 0) && (answer.some(item => item === i) === false)) {
            console.log(n % i === 0)
            answer.push(i)
        }
        
    }
    console.log(answer)
    return answer;
}