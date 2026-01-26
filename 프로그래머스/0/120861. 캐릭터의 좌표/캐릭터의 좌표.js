function solution(keyinput, board) {
    let x = 0;
    let y =0;
    
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    
    for(let i =0; i<keyinput.length; i++){
        if(keyinput[i] === 'up' && y<maxY) y++
        else if (keyinput[i] === 'down' && y>-maxY) y--
        else if(keyinput[i] === 'left' && x>-maxX) x--
        else if (keyinput[i] === 'right' && x<maxX) x++
    }
    return [x, y];
}