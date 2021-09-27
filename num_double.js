const prompt = require('prompt-sync')({ sigint: true });

// Prompt the user for a number
console.log('Enter a number:');
let number = Number(prompt(''));

// Continue looping as long as our number is not one...
while (number < 100) {

  // Show the user the number
  console.log(number);

  // If our number is even...
  if (number % 2 === 0) {

    // Divide our number by 2
    number = number * 2;
  }

}

console.log(number);
console.log('Done.');