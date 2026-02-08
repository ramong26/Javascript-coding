function solution(my_string, n) {
    
    let temp = my_string.slice(-n, my_string.length)
    console.log(temp)
    return temp;
}