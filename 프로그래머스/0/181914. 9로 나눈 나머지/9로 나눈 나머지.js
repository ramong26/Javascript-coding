function solution(number) {
    var answer = 0;
    let stringNumber = String(number)
    for(let i =0; i<stringNumber.length; i++) {
        answer = answer + Number(stringNumber[i])
    }

    return answer % 9;
}