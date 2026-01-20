function solution(arr, queries) {
    const answer = [];

    for (let q = 0; q < queries.length; q++) {
        const [s, e, k] = queries[q];
        let minValue = Infinity;

        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minValue) {
                minValue = arr[i];
            }
        }

        answer.push(minValue === Infinity ? -1 : minValue);
    }

    return answer;
}
