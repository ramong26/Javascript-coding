function solution(num_list) {
   
    let count = 0;
    for(let i =0; i<=num_list.length-1; i++){ // [12, 4, 15, 1, 14]
         let num = num_list[i];
     while(num !== 1){
        if(num % 2 === 0){
            num = num / 2;
            count++
        }else{
            num = (num - 1) / 2;
            count++
        }
      }
    }
    return count
}