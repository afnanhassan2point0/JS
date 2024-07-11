

import readline from 'readline'; // this module has standard input/output library/interface
const userInput = readline.createInterface({ // gets input & output operations
    valueIn: process.stdin,
    valueOut: process.stdout
});

userInput.question('Please enter Your name : ', (valueIn) => {
    const name = valueIn;
});