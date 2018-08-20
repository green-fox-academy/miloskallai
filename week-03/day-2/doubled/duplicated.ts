// Create a method that decrypts duplicated-chars.txt

"use strict";
declare function require(path: string): any;
const fs = require("fs");

console.log(removeDoubleCharacters("duplicated-chars.txt"));

function removeDoubleCharacters(fileName: string): string {
  let fileContent = fs.readFileSync(fileName, "utf-8");
  let tempArr: string[] = fileContent.split("");
  let result: string;

  for (let i: number = 0; i < tempArr.length; i++) {
    if (tempArr.indexOf(tempArr[i]) === tempArr.indexOf(tempArr[i - 1])) {
      tempArr.splice(i, 1);
    }
  }

  result = tempArr.join("");

  return result;
}
