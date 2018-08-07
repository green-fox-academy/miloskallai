'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

let missingPart: string = 'always takes longer than';

let secondPart: string = quote.slice(21);
console.log(secondPart);

let fistPart: string = quote.slice(0, 21 - quote.length);
console.log(fistPart);

quote = fistPart + ' ' + missingPart + ' ' + secondPart;

console.log(quote);