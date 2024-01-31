'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the challenge below.
 */

function main() {
    const N = parseInt(readLine().trim(), 10);
        if(N % 2 !== 0 || (N >= 6 && N<= 20)) {
        console.log("Weird")
    } else {
        console.log("Not Weird")
    }
}
