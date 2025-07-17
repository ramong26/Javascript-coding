function solution(n) {  
    let str = n.toString();          
    let array = str.split('');      
    let answer = 0; 

    for(let i = 0; i < array.length; i++){
       answer += Number(array[i]); 
    }

    return answer;
}