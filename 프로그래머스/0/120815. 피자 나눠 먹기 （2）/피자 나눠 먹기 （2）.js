function solution(n) {
    let i = 1
    while((n * i) % 6 !== 0) {
        i++
        console.log(i)
    }
    return (n * i) % 6 
}
// function solution(n) {
//     let i = n // 10
//     if(i % 6 === 0){ 
//        return n / 6 
//     } else {
//         i++
//     }
    
// }