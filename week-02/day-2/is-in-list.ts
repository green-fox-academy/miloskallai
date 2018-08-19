"use strict";
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(checkNums(listOfNumbers));

function checkNums(numbersToCheck: number[]) /*: boolean */ {
  let numbersToCompare: number[] = [4, 8, 12, 16];
  let resultArr: number[] = [];

  return numbersToCompare.every(function(value) {
    return numbersToCheck.indexOf(value) >= 0;
  });
}
