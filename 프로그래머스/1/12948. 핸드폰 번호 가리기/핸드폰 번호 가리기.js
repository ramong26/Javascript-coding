function solution(phone_number) {
    let answer = phone_number.split('').reverse();
    for(let i =4; i<=answer.length-1; i++){
        answer[i] = '*';
    }
    console.log(answer)
    return answer.reverse().join('');
}