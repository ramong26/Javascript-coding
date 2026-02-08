function solution(my_string, is_suffix) {
    var answer = 0;
    let sliceArr = []
    
    for(let i =1; i<my_string.length+1;i++){
        sliceArr.push(my_string.slice(-i, my_string.length))
    }
    
    if(sliceArr.includes(is_suffix)) return 1
    else return 0
    
  
}