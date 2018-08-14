"use strict";
// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

declare function require(sourceFile: string): any;

const fs = require("fs");

function copyFile(sourceFile: string, destinationFile: string): boolean {
  if (fs.existsSync(sourceFile, destinationFile)) {
    fs.copyFileSync(sourceFile, destinationFile);
    return 1 < 2;
  } else {
    return 1 > 2;
  }
}

console.log(copyFile("source.txt", "destination.txt"));
