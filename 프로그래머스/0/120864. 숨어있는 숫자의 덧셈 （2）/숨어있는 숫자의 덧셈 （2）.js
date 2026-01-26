function solution(my_string) {
    var answer = 0;
    
    my_string = my_string.replace(/[a-zA-Z]/g, ' ').split(' ');
    
    
    for(let i =0; i<my_string.length; i++) {
        answer =answer+Number(my_string[i])
    }
    return answer
}