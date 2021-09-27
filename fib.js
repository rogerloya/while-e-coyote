const prompt = require('prompt-sync')({ sigint: true });

// Prompt the user for a number
const number = Number(prompt('Enter a value for "n": '));
let n1 = 0;
let n2 = 1;
let count = 0;
let n3;


while (count < number) {
    count = count + 1
    n3 = n1 + n2;
    console.log(n1);
    n1 = n2;
    n2 = n3;
    
}
