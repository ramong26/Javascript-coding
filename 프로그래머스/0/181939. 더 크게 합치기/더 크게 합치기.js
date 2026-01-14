function solution(a, b) {
    var answer = 0;
    const test = String(a) + String(b)
    const test2 = String(b) + String(a);
    
    if(test >test2 ) return Number(test)
    else return Number(test2)

}