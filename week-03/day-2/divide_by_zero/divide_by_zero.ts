"use strict";

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideTen(num: number): number {
  try {
    if (num === 0) {
      throw new Error("fail");
    } else {
      return 10 / num;
    }
  } catch (e) {
    console.log(e);
  }
}

console.log(divideTen(0));
