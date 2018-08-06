'use strict'

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

//First Solution
/*
let abc: string[] = ['Arthur', 'Boe', 'Chloe'];

console.log(abc.reverse());
*/
//Second Solution
let abc: string[] = ['Arthur', 'Boe', 'Chloe'];

let abcTempA = abc[0];
let abcTempB = abc[2];

abc.shift();
abc.pop();

abc.unshift(abcTempB);
abc.push(abcTempA);

console.log(abc);

