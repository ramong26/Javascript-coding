function solution(n) {
    var answer = [];
    
    let i =2;
    
    while(true){
        if(n % i === 0){
            n = n / i;
            answer.push(i)
        } else if (n ===1){
            break;
        } else {
            i++
        }
    }
    
    return [...new Set(answer)];
}