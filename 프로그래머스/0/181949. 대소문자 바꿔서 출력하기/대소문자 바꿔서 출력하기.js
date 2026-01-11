const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close', function () {
    const str = input[0];
    const chars = str.split('');

    let answer = '';

    for (let i = 0; i < chars.length; i++) {
        const ch = chars[i];

        if (ch === ch.toUpperCase()) {
            answer += ch.toLowerCase();
        } else {
            answer += ch.toUpperCase();
        }
    }

    console.log(answer);
});
