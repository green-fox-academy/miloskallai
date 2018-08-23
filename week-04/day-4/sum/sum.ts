"use strict";

//let numbers: number[] = [1, 2, 3, 4, 5]; //15

class DoThingsWithNumbers {
  numbers: number[] = [1, 2, 3, 4, 5];

  sum() {
    let result: number = 0;
    this.numbers.forEach(function(element) {
      result += element;
    });
    return result;
  }
}

export let summariseArray = new DoThingsWithNumbers;

