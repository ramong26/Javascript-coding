function solution(num, k) {
    var answer = 0;
    let arr = String(num).split('').map(Number);
    
    for(let i =0; i<arr.length; i++){
       
        if(arr[i]===k) {
          return i +1
        } 
    }
    
    return -1
}