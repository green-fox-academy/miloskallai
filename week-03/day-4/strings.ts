// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

let xString: string = "saXgxgsfggyhygxhgyXgyxxxghXdxhgsdgxhpXxm";

function xToY(toChange: string): string {
  if (toChange.indexOf("x") !== -1) {
    toChange = toChange.replace("x", "y");
    return xToY(toChange);
  }
  return toChange;
}

console.log(xToY(xString));
