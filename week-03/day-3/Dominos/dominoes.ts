import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  let dominoesArray: any[] = [];
  dominoes.forEach(function(value) {
    console.log(value);
    dominoesArray.push(value.values);
  });

  console.log(dominoesArray);

  let dominoesResoult: number[][] = [];

  for (let i: number = 0; i < dominoesArray.length; i++) {
    for (let j: number = 0; j < dominoesArray.length; j++) {
      if (dominoesArray[i][1] === dominoesArray[j][0]) {
        dominoesResoult.push(dominoesArray[i], dominoesArray[j]);
      }
    }
  }
  console.log(dominoesResoult);
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

print(dominoes);

/*
compare: 
  - dominoes

*/
