"use strict";
// Given a string, compute recursively a new string where all the 'x' chars have been removed.

let xString: string = "saXgxgsfggyhygxhgyXgyxxxghXdxhgsdgxhpXxm";
let withoutX: string = "";
function removeX(toClean: string): string {
  toClean = toClean.toLowerCase();
  if (toClean.indexOf("x") !== -1) {
    toClean = toClean.replace("x", "");
    return removeX(toClean);
  }
  return toClean;
}

console.log(removeX(xString));
