function solution(x) {
    x = x.toString().split('')
    let add=0;
    for(let i = 0; i<=x.length-1; i++){
        add = add + Number(x[i])
    }
    console.log(add)
    x=x.join('')
    return Number(x)%add===0 ? true: false;
}