"use strict";
//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list
// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'

function subint(num: number, list: number[]) {
  let result: number[] = [];
  let numToCompare: string = num.toString();
  let listToString: string[] = list.map(String);

  listToString.forEach(function(element) {
    if (element.indexOf(numToCompare) > -1) {
      //console.log(listToString.indexOf(element));
      result.push(listToString.indexOf(element));
    }
  });
  return result;
}
