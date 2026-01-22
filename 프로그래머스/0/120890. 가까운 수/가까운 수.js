function solution(array, n) {
    var answer = Infinity;
    const deleteArray = []
    
    for(let i =0; i<array.length; i++) {
        deleteArray.push(Math.abs((n-array[i])))
    }
    
    let findIdx = deleteArray.indexOf(Math.min(...deleteArray));
    for(let k =0; k<deleteArray.length; k++){
        if(deleteArray[k] === deleteArray[findIdx]){
            answer = Math.min(answer, array[k]);
        }
    }
   
     return answer; 
}