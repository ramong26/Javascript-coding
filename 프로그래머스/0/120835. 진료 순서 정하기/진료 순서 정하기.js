function solution(emergency) {
   
    let sorted = [...emergency].sort((a, b) => b - a);
    
 
    let answer = emergency.map(e => sorted.indexOf(e) + 1);
    
    return answer;
}
