function solution(my_string) {
    let answer = '';

    for (let i = 0; i < my_string.length; i++) {
        const ch = my_string[i];

        if (ch >= 'a' && ch <= 'z') {
            answer += ch.toUpperCase();
        } else {
            answer += ch.toLowerCase();
        }
    }

    return answer;
}
