'use strict'
// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

export{}

let numList: number [] = [1, 2, 3, 4, 5];

numList.splice(0, 2, numList[2] + 1);
console.log(numList[2]);