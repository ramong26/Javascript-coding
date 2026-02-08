function solution(my_string) {
    var answer = [];
    for(let i =1; i<my_string.length+1; i++){
        answer.push(my_string.slice(-i, my_string.length))
    }
    return answer.sort();
}