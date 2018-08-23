"use strict";

function isAnagram(firstWord: string, secondWord: string) {
  firstWord = firstWord.toLowerCase();
  secondWord = secondWord.toLowerCase();

  let firstWordTempArray: string[] = firstWord.split("");
  let secondWordTempArray: string[] = secondWord.split("");

  if (firstWordTempArray.length === secondWordTempArray.length) {
    let result: string[] = [];

    for (let i: number = 0; i < firstWordTempArray.length; i++) {
      for (let j: number = 0; j < secondWordTempArray.length; j++) {
        if (firstWordTempArray[i] === secondWordTempArray[j]) {
          result.push(firstWordTempArray[i]);
        }
      }
    }

    if (result.length === firstWordTempArray.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(isAnagram("Was", "saw"));
console.log(isAnagram("har", "hsa"));
