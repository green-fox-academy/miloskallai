// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

"use strct";

declare function require(path: string): any;
const fs = require("fs");

function countLines(filename: string): any {
  let fileContent = fs.readFileSync(filename, "utf-8");

  let toCountArry = fileContent.split("\n");
  return toCountArry.length;
}

console.log(countLines("test-file.txt"));
