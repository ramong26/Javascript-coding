function solution(a, d, included) {
    var answer = 0;
    
    let plusArr= []
    let diffResult = a
    plusArr.push(a)
    
    
    for(let i = 0; i<included.length; i++){
        diffResult = diffResult + d 
        plusArr.push(diffResult)
        
        if(included[i] === true){
            answer = answer + plusArr[i]
        }
        
    }
    
    return answer;
}