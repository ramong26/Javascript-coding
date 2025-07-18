function solution(n) {
    let string = [];
  
    for(let i =0; i<=n-1; i++){
        if(i%2===0){
            string.push('수')
        }else{
            string.push('박')
        }
    }
    
    return string.join('');
}