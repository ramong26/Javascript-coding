const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let str = input[0];
    let string = str.split('');
    
    for(let i = 0; i<string.length; i++) {
        console.log(string[i]);
    }
});