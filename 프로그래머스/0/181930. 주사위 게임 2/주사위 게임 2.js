function solution(a, b, c) {
    var answer = 0;
    
    const diceSet = new Set([a, b, c])
    
    if(diceSet.size === 3) {
        answer = (a + b + c)
    } else if (diceSet.size === 1) {
        answer = (a + b + c) * (a*a + b*b + c*c ) * (a*a*a + b*b*b + c*c*c )
    } else {
        answer = (a + b + c) * (a*a + b*b + c*c )
    }
    return answer;
}