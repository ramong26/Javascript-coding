function solution(array) {
    var answer = 0;
    
    
    for(let i =0; i<array.length; i++){
        let valueSplit = String(array[i]).split('')
        
        for(let j =0; j<valueSplit.length; j++){
            if(Number(valueSplit[j]) === 7) {
                answer++
            }
        }
        
    }
    return answer;
}