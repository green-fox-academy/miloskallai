// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'
'use strict'

declare function require(path: string): any;

const fs = require('fs');

let fileContent = "Milos Kallai";
fs.writeFileSync('my-file.txt', fileContent);