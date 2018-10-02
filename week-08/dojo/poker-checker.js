'use strict'
/*
const addTwoNumbers = (a, b) => {
  return a + b;
}

const ad = () => {
  return 'asd';
}
*/
let deck = [
  '2C', '2D', '2H', '2S',
  '3C', '3D', '3H', '3S',
  '4C', '4D', '4H', '4S',
  '5C', '5D', '5H', '5S',
  '6C', '6D', '6H', '6S',
  '7C', '7D', '7H', '7S',  
  '8C', '8D', '8H', '8S',
  '9C', '9D', '9H', '9S',
  '10C', '10D', '10H', '10S',
  'JC', 'JD', 'JH', 'JS',
  'QC', 'QD', 'QH', 'QS',
  'KC', 'KD', 'KH', 'KS',
  'AC', 'AD', 'AH', 'AS'
];

const highCards = ['JC', 'JD', 'JH', 'JS', 'QC', 'QD', 'QH', 'QS', 'KC', 'KD', 'KH', 'KS', 'AC', 'AD', 'AH', 'AS'];

let blackHand = ['2H', '3D', '5S', '9C', 'KD'];
let whiteHand = ['2C', '3H', '4S', '8C', 'AH'];

const isHighCard = (hand, cards) => {
  let found = hand.some(r => cards.includes(r));
 if(found === true){
   return 1;
 } else {
   return 0;
 }
}

function compare(a, b){
  if(a > b){
    return 'A wins';
  } else if(a === b){
    return 'equals';
  } else {
    return 'B wins';
  }
}

console.log(compare(isHighCard(blackHand, highCards),isHighCard(whiteHand, highCards) ))
//module.exports = {addTwoNumbers, asd};

//number color object 
//convert 
