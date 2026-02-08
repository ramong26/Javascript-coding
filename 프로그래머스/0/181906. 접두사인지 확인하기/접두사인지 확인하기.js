function solution(my_string, is_prefix) {
    var answer = 0;
    let sliceArr = []
    
    for(let i =1; i<=my_string.length; i++){
        sliceArr.push(my_string.slice(0,i))
    }
    if(sliceArr.includes(is_prefix)) return 1
    else return 0
}