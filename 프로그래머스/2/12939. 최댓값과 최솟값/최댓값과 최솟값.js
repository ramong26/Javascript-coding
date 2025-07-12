function solution(s) {
    let result = [];
    let answer = s.split(' ').map(Number); 
    let min = answer[0];
    let max = answer[0];

    for (let i = 1; i < answer.length; i++) {
        if (answer[i] < min) min = answer[i];
        if (answer[i] > max) max = answer[i];
    }

    result = [min, max];

    console.log(answer);
    console.log(result);

    return result.join(' ');
}
