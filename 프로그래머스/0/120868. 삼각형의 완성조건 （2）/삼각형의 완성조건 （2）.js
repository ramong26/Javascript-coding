function solution(sides) {
    let answer = 0;
    
    const a = sides[0];
    const b = sides[1];
    
    for (let x = 1; x <= a + b; x++) {
        if (Math.abs(a - b) < x && x < a + b) {
            answer++;
        }
    }
    
    return answer;
}
