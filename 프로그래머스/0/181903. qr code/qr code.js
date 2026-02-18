function solution(q, r, code) {
    var answer = '';
    let qArray = [];
    
    for(let i =0; i<code.length; i= i+q){
        qArray.push(code.slice(i, i+q))
    }
    
    let resultArr=[]
    for(let k=0; k<qArray.length; k++){
        resultArr.push(qArray[k][r])
    }
    
    return resultArr.join('');
}