function solution(num, total) {
    // num (a+1) = total
    let sum = 0
    for(let i =1; i<num; i++){
        sum = sum+ i
    }
    let a = (total - sum )/num
    
    let resultArr = []
    for(let i =0; i<num; i++){
        resultArr.push(a+i)
    }
    return resultArr;
}