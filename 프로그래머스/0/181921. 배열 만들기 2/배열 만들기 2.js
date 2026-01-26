function solution(l, r) {
    var answer = [];
    
    let fiveL = l
    while(fiveL <= r) {
        let newfiveL = String(fiveL).split('')
        let isValid = true;
        
        for(let i =0; i<newfiveL.length; i++){
            if (newfiveL[i] !== '0' && newfiveL[i] !== '5') {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            answer.push(fiveL);
        }
        
        fiveL++; 
    }
    return answer.length === 0 ? [-1] : answer;;
}