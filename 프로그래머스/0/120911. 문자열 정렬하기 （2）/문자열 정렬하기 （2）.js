function solution(my_string) {
    var answer = [];
    for(let i =0; i<my_string.length; i++){
        answer.push(my_string[i].toLocaleLowerCase())
    }
    
    
    return answer.sort().join('');
}