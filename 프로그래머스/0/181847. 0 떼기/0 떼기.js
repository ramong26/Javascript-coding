function solution(n_str) {
    let str = n_str.split('');
    
    let i =0
    while(str[0] === '0') {
        str.splice(0, 1) // 0번째 요소부터 1개만 삭제
    }
    return str.join('');
}