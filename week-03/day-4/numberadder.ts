// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addNumbers(n: number): number {
  if (0 < n) {
    return n + addNumbers(n - 1);
  }
  return n;
}

console.log(addNumbers(3));
