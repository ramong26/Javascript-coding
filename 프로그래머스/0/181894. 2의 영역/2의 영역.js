function solution(arr) {
    var answer = [];
    let tempArr = []
    
    for(let i =0; i<arr.length; i++){
        if(arr[i] === 2) tempArr.push(i)
    }
    
    for(let i =tempArr[0]; i<=tempArr[tempArr.length-1]; i++){
        answer.push(arr[i])
    }
    

    if (answer.length === 0)  {
        answer.push(-1)
    }
    // console.log(answer)
    return answer;
}