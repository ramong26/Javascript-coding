function solution(lines) {
    let count = Array(201).fill(0); 

    for (let [start, end] of lines) {
        for (let i = start; i < end; i++) {
            count[i + 100]++; 
        }
    }

    let answer = 0;
    for (let c of count) {
        if (c >= 2) answer++;
    }

    return answer;
}
