function solution(a, b) {
    function gcd(x, y) {
        while (y !== 0) {
            let temp = x % y;
            x = y;
            y = temp;
        }
        return x;
    }

    let g = gcd(a, b);
    b = b / g;

    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;

    return b === 1 ? 1 : 2;
}
