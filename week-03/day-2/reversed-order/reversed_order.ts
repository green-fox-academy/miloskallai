// Create a method that decrypts reversed-order.txt
"use strict";
declare function require(path: string): any;
const fs = require("fs");

function reversedOrder(fileName: string) {
  let fileContent = fs.readFileSync(fileName, "utf-8");
  let tempArr = fileContent.split("\n");
  let result: string = tempArr.reverse().join("\n");

  return result;
}

console.log(reversedOrder("reversed-order.txt"));
