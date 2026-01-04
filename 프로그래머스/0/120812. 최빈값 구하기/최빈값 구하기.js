function solution(array) {
    let map = new Map();

    for (let i = 0; i < array.length; i++) {
        map.set(array[i], (map.get(array[i]) || 0) + 1);
    }

    let maxCount = 0;
    let answer = -1;
    let isDuplicate = false;

    for (let [num, count] of map.entries()) {
        if (count > maxCount) {
            maxCount = count;
            answer = num;
            isDuplicate = false;
        } else if (count === maxCount) {
            isDuplicate = true;
        }
    }

    return isDuplicate ? -1 : answer;
}