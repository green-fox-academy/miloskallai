// Write a recursive function that takes one parameter: n and counts down from n.

function counter(n: number): number {
  if (1 < n) {
    console.log(n);
    return counter(n - 1);
  }
  return n;
}

console.log(counter(10));
