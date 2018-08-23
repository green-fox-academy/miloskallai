"use strict";

//let numbers: number[] = [1, 2, 3, 4, 5]; //15

class DoThingsWithNumbers {
  
  

  sum(list: number[]) {
    let result: number = 0;
    list.forEach(function(element) {
      result += element;
    });
    return result;
  }
}

export let summariseArray = new DoThingsWithNumbers;

