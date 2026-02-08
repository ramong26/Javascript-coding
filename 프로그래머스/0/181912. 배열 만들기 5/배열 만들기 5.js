function solution(intStrs, k, s, l) {
    var answer = [];
    let tempArr = []
    
    for(let i =0; i<intStrs.length; i++){
        intStrs[i] = String(intStrs[i])
            
        tempArr.push(intStrs[i].slice(s, s+l))
    }
    
    for(let i =0; i<tempArr.length; i++){
        if(Number(tempArr[i])>k){
            answer.push(Number(tempArr[i]))
        }
    }
    return answer;
}