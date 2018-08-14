// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'
"use strict";

declare function require(path: string): any;

const fs = require("fs");

function writeMyName(fileName: string, name: string) {
  try {
    if (fs.existsSync(fileName)) {
      fs.writeFileSync(fileName, name);
    } else {
      throw new Error("Unable to write file: my-file.txt");
    }
  } catch (e) {
    console.log(e.message);
  }
}

writeMyName("my-fsdfsdfdssdffile.txt", "Milos Kallai");
