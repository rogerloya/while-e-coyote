const prompt = require('prompt-sync')({ sigint: true });


let input = prompt('Enter a number or done:')
let sum = 0

// Continue looping as long as our number is not one...
while (input !== 'done') {
    
    sum = sum + Number(input)
    
    input = prompt('Enter a number or done:')

}
console.log('Sum: ', sum)