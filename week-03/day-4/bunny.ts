// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

let numberOfBunnies: number = 75;
let numberOfEars: number = 0;

function countEars(bunnies: number): number {
  if (0 < bunnies) {
    numberOfEars += 2;
    return countEars(bunnies - 1);
  }
  return numberOfEars;
}

console.log(countEars(numberOfBunnies));
