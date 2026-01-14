function solution(age) {
    const stringAge = String(age);
    let answer = '';

    for (let i = 0; i < stringAge.length; i++) {
    
        const charCode = Number(stringAge[i]) + 97; 
        answer += String.fromCharCode(charCode);
    }

    return answer;
}