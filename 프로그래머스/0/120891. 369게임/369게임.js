function solution(order) {
    let count = 0;
    for(let i = 0; i<String(order).length; i++) {
        if(String(order)[i] === "3" || String(order)[i] === '6' || String(order)[i] === '9'){
            count ++
        }
    }
    return count
}