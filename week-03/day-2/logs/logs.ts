"use strict";

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

declare function require(sourceFile: string): any;

const fs = require("fs");

let fileContent = fs.readFileSync("log.txt", "utf-8");

function getPostRatio(file): number {
  let result = file.split(" ");

  let post = 0;
  let get = 0;

  for (let i: number = 0; i < result.length; i++) {
    if (result[i] === "POST") {
      post += 1;
    } else if (result[i] === "GET") {
      get += 1;
    }
  }
  return get / post;
}

console.log(getPostRatio(fileContent));

function uniqueIPAdresses(file) {
  let result = file.split("   ");
  let IPadresses: string[] = [];
  for (let i: number = 0; i < result.length; i++) {
    if (i % 2 !== 0) {
      IPadresses.push(result[i]);
    }
  }


  console.log(IPadresses);
}

uniqueIPAdresses(fileContent);
