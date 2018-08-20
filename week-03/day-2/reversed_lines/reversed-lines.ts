"use strict";
declare function require(path: string): any;
const fs = require("fs");
// Create a method that decrypts reversed-lines.txt

function reverseLines(fileName: string) {
  let fileContent = fs.readFileSync(fileName, "utf-8");
  let result: string;

  let tempArr: string[] = fileContent.split("");
  result = tempArr.reverse().join("");
  
  return result;
}

console.log(reverseLines("reversed-lines.txt"));
