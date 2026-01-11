const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    
    let eo = ''
    if(n % 2 === 0) {
         eo = 'even';
        console.log(`${n} is ${eo}`)
    } else {
         eo = 'odd';
        console.log(`${n} is ${eo}`)
    }
});