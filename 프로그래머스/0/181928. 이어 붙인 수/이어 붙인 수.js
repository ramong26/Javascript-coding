function solution(num_list) {
  
    
    let odd=[];
    let even=[];
    for(let i = 0; i<num_list.length; i++){
        if(num_list[i] % 2===0){
            even.push(num_list[i])
        } else {
            odd.push(num_list[i])
        }
    }
  
    odd = odd.join('')
    even = even.join('')
    return Number(odd) + Number(even);
}