function solution(num_list) {
    let multi = 1;
    let square = 0;
    
    for(let i =0; i<num_list.length; i++){
        multi = multi * num_list[i]
        square = num_list[i] + square
    }
    return multi < square *square  ? 1 : 0;
}