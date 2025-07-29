function solution(array, height) {
    let count = [];
    
    for (let i = 0; i <=array.length-1; i++){
        if(array[i]>height){
            count.push([array[i]])
        }
    }
    
    return count.length;
}