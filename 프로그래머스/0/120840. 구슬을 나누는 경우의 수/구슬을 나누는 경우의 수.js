function solution(balls, share) {
    let mom = 1;
    let son = 1;
    for(let i = balls; i>balls-share; i--){
        mom = mom * i
    }
    for(let j = share; j>0; j--){
        son = son * j
    }
    return mom / son;
}