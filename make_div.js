const prompt = require('prompt-sync')({ sigint: true });


let num1 = Number(prompt('Enter 1st number: '))
let num2 = Number(prompt('Enter 2nd number: '))

// Continue looping as long as our number is not one...
while (num1 % num2 !== 0) {
    
    num1 = num1 +1;

}
console.log(num1, ' is divisible by ', num2)