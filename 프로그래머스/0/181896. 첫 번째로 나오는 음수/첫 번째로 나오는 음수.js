function solution(num_list) {
    
    let i =0;
    while(num_list[i]>0){
        i++
    }
    console.log(i)
    return i===num_list.length ?  -1 : i
    
}