'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

//console.log(makingMatches(girls, boys));
//console.log(girls[0]);

function matchMaking(arr1: string[], arr2: string[]): string[] {
    let result: string[] = [];
    for (let i: number = 0; i < arr1.length; i++) {
        
        result.push(arr1[i]); 
        result.push(arr2[i]);
          
    }
    
    return result; 
}

console.log(matchMaking(girls, boys));
