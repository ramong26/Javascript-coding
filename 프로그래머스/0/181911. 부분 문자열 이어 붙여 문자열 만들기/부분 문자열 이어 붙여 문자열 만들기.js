// https://school.programmers.co.kr/learn/courses/30/lessons/181911 - 문자열 slice

function solution(my_strings, parts) {
    let answerArr = []
    
    for(let i =0; i<my_strings.length; i++){
        answerArr.push(my_strings[i].slice(parts[i][0], parts[i][1]+1))
    }
    return answerArr.join('');
}