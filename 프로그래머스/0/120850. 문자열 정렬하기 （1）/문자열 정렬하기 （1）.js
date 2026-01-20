function solution(my_string) {
    var answer = [];
    for(let i = 0; i<my_string.length; i++) {
        if(my_string[i] % 1== 0){
            answer.push(Number(my_string[i]))
        }
    }
    return answer.sort((a,b) => a-b);
}