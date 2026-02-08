function solution(my_string, s, e) {
    let first = my_string.slice(0, s)
    let tempSliceArr = my_string.slice(s,e+1).split('').reverse().join('')
    let last = my_string.slice(e+1, my_string.legnth)
    
    
    return first + tempSliceArr + last
}