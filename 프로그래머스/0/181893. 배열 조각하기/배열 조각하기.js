function solution(arr, query) {
    // var answer = [];
    
    for(let i =0; i<query.length; i++) {
        if (i % 2 === 0) {  
            arr= arr.slice(0, query[i]+1)
            console.log(arr)
        } else {
            arr= arr.slice(query[i], query[query.length])
            console.log(arr)
        }
    }
    
    // console.log(arr)
    return arr;
}