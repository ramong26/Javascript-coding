function solution(A, B) {
    
    if(A === B) return 0;
    
    A = A.split('');  
    
    for(let i = 1; i <= A.length; i++){
        let APop = A.pop();            
        let joyA = A.join('');          
        let AConcat = APop + joyA;     
        // console.log(AConcat);
        
        A = AConcat.split('');  
        
        if(AConcat === B) return i;  
    }
    
    return -1;
}
