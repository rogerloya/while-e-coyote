const prompt = require('prompt-sync')({ sigint: true });

// Prompt the user for a number
const number = Number(prompt('Enter a value for "n": '));
let n1 = 0, n2 = 1, nextNum;


for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
}