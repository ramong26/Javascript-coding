function solution(arr, queries) {
    for (const [s, e, k] of queries) {
        for (let i = s; i <= e; i++) {
            if (k === 0) {
                if (i === 0) arr[i] += 1;
            } else {
                if (i % k === 0) arr[i] += 1;
            }
        }
    }
    return arr;
}