const prompt = require('prompt-sync')({ sigint: true });


let input = prompt('Enter a string:')
let sum = input

// Continue looping as long as our number is not one...
while (sum.length <10) {
    
    sum = sum + input
    

    if (sum.length >= 10) {
        console.log(sum)
    }


}
console.log('Sum: ', sum)