function solution(i, j, k) {
    var answer = 0;
    
    for(let p=i; p <= j; p++){
        // console.log(p)
        let splitP = String(p)
        // console.log(splitP)
        if(splitP.includes(k)){
            splitP = splitP.split('')
            // console.log(splitP)
            
            for(let s=0; s<splitP.length; s++ ) {
                
                if(splitP[s].includes(k)) {
                    // console.log(splitP[s] )
                    answer++
                }
            }
        }
    }
    return answer;
}