function solution(a, b) {
    const test = 2 * a * b;
    const test2 = String(a) + String(b);
    
    if(test>Number(test2)) return test
    else return Number(test2)
}