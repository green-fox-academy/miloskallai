// Given a non-negative int n, return the sum of its digits recursively (no loops).
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigits(n: number) {
  let lastDigit = n % 10;
  let middleDigit = Math.floor((n / 10) % 10);
  let firstDigit = Math.floor(n / 10 / 10);

  return firstDigit + middleDigit + lastDigit;
}

console.log(sumDigits(324));
