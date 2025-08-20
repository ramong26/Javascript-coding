function solution(hp) {
    
    
    let first = Math.floor(hp/5)
    let firstRest = hp % 5
    let second = Math.floor(firstRest/3)
    let third = firstRest % 3    
    
    
    return first + second + third;
}