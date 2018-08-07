'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreThanFour(object: object[]): any{
    for(let i: number = 0; i < object.length; i++){
        if(object[i]['candies'] > 4){
            console.log(object[i]['name'] + ' has more than four candies');
        }
    }
}
moreThanFour(students);

function avarageCandies(object: object[]): any {
    let avarage;
    let avarageBase: number = 0;
    for(let i: number = 0; i < object.length; i++) {
        let sum: number = object[i]['candies'];
        //console.log(sum);
        avarageBase += sum;
    }
    return avarageBase / object.length;
}

console.log(avarageCandies(students));