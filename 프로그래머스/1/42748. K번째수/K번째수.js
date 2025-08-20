function solution(array, commands) {
   
    let resultArray = []
    for(let i = 0; i<=commands.length-1; i++){ // 0~2
         let newArray = []
        for(let j = commands[i][0]-1; j<=commands[i][1]-1; j++){ // 1~4
            newArray.push(array[j])
        }
        newArray.sort((a,b) => a-b)
        console.log(newArray)
        resultArray.push(newArray[commands[i][2]-1])
    }
    console.log(resultArray)
    return resultArray;
}