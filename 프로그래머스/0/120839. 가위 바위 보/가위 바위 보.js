function solution(rsp) {
    let splitRsp = rsp.split('') // [ '2', '0', '5' ]
    let answer = [];
  
    for(let i = 0; i<splitRsp.length; i++){
        
        if(splitRsp[i] === '2'){
          
            answer.push('0')
        } else if(splitRsp[i] === '0'){
           
            answer.push('5')
        } else if(splitRsp[i] === '5'){
           
            answer.push('2')
        } else {
            break;
        }
    }
    // console.log(answer)
    return answer.join('');
}