function solution(M, N) {

    var answer = 0;
    let squareArr = [M, N].sort()
    
    let diven = squareArr[0]
   
    answer = squareArr[0]-1 + diven*(squareArr[1] -1)
// console.log(answer)
    return answer;
}