function solution(n) {
   n=n.toString().split('')
    let answer = 0;
    
    for(let i = 0; i<=n.length-1; i++){
        answer = answer + Number(n[i])
          
    }

    return answer;
}