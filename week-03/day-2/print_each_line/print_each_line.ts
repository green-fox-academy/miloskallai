// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'
"use strict";
declare function require(path: string): any;

const fs = require("fs");

function readFile(fileName: string): string {
  try {
    if (fs.existsSync(fileName)) {
      const fileContent = fs.readFileSync(fileName, "utf-8");
      return fileContent;
    } else {
      throw new Error("Unable to read file: " + fileName);
    }
  } catch (e) {
    console.log(e.message);
  }
}

console.log(readFile("my-fifsdfle.txt"));
