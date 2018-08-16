// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

let numberOfBunnies: number = 6;
let numberOfEars: number = 0;

function countMutantBunnies(bunnies: number): number {
  if (0 < bunnies && bunnies % 2 === 0) {
    numberOfEars += 2;
    return countMutantBunnies(bunnies - 1);
  } else if (0 < bunnies) {
    numberOfEars += 3;
    return countMutantBunnies(bunnies - 1);
  }
  return numberOfEars;
}

console.log(countMutantBunnies(numberOfBunnies));
