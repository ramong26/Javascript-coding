function solution(board) {
    var answer = 0;
    console.log(board)
    let findBoomIndex; 
    for(let i =0; i<board.length; i++){
        if(board[i].includes(1)){
            findBoomIndex = board[i]
        }
    }
    console.log(findBoomIndex)
    return answer;
}