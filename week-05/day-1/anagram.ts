'use strict';

export function checkAnagram(string1: string, string2: string){
  
let testArr1: string[] = string1.split('');
let testArr2: string[] = string2.split('');
  
  if(string1.length === string2.length){
    testArr1.sort();
    testArr2.sort();
    for(let i: number = 0; i < string1.length; i++){
      if(testArr1[i] === testArr2[i]){
        return true;
      } else {
        return false;
      }
    }

  } else {
    return false;
  }
  
}