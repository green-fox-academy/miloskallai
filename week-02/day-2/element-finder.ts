"use strict";

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

function containsSeven(numbers: number[]): string {
  let result: string;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
      result = "Hooray";
    } else {
      result = "Noooooo";
    }
  }
  return result;
}

const animals: string[] = ["lion", "goat", "dog", "bird"];

console.log(isGoat(animals));

function isGoat(animals: string[]): string {
  let result: string;

  for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "goat") {
      result = "Hooray";
    } else {
      result = "Noooooo";
    }
  }
  return result;
}
