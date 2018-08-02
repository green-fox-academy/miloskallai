/*
console.log
('Hello World');
console.log('Hello Milos');


// Modify this program to console.log Humpty Dumpty riddle correctly
console.log('Humpty Dumpty sat on a wall,');
console.log('Humpty Dumpty had a great fall.');
console.log('Couldn\'t put Humpty together again.');

// Greet 3 of your classmates with this program, in three separate lines like:

console.log('Hello Márk');
console.log('Hello Gergő');
console.log('Hello Jenő');
console.log('All the king\'s horses and all the king\'s men');

//Print several types to terminal
let helloWorld: string = 'Hello Wrold';
let fortyTwo: number = 420;
let pi: number = 3.141592;
let trueValue: boolean = true;

console.log(helloWorld);
console.log(fortyTwo);
console.log(pi);
console.log(trueValue);

// Positive, negative and zero
console.log(42); // Prints 42
console.log(-1); // Prints -1
console.log(0); // Prints 0

console.log(12341234123412341234); // 12341234123412340000
// In JavaScript numbers are rounded over a limit
// The maximal number that is not rounded (the maximum safe integer) is:
// 9007199254740991
// The reasoning behind that number is that JavaScript uses double-precision
// floating-point format numbers
// Link: http://en.wikipedia.org/wiki/Double_precision_floating-point_format

console.log('Milos');
console.log(26);
console.log(1.8);

// Create a program that prints a few operations on two numbers: 22 and 13
let twentyTwo: number = 22;
let thirtTeen: number = 13;
// Print the result of 13 added to 22
console.log(twentyTwo + thirtTeen);
// Print the result of 13 substracted from 22
console.log(twentyTwo - thirtTeen);
// Print the result of 22 multiplied by 13
console.log(twentyTwo * thirtTeen);
// Print the result of 22 divided by 13 (as a decimal fraction)
console.log(twentyTwo / thirtTeen);
// Print the reminder of 22 divided by 13
console.log(twentyTwo % thirtTeen);

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.

let allCodingHours: number = 17 * 5 * 6;
console.log(allCodingHours);
let weeklyCodingHours: number = 5 * 6;
console.log(weeklyCodingHours);
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let codingHoursPercentage: number =  (weeklyCodingHours / 52) * 100;
console.log(codingHoursPercentage);

// Store your favorite number in a variable (as a number)
// And print it like this: 'My favorite number is: 8'
let favoriteNumber: number = 10;

console.log("My favorite number is " + favoriteNumber);
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Swap the values of these variables
let a: number = 123;
let b: number = 526;

let tmpA: number = b;
let tmpB: number = a;

let a: number = tmpA;
let b: number = tmpB;

console.log(a);
console.log(b);
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

let massInKg: number = 81.2;
let heightInM: number = 1.78;

let bodyMassIndex: number = (massInKg / heightInM) / heightInM;

console.log(bodyMassIndex);

// Define several things as a variable, then print their values
// Your name as a string
let myName: string = 'Milos Kallai';
console.log(myName);
// Your age as an integer
let myAge: number = 26;
console.log(myAge);
// Your height in meters as a float
let myHeight: number = 1.8;
console.log(myHeight); 
// Whether you are married or not as a boolean
let isMarried: boolean = false;
console.log(isMarried);
*/
/*
let a: number = 3;
// make it bigger by 10
a = a + 10;
console.log(a);

let b: number = 100;
// make it smaller by 7
b = b - 7;
console.log(b);

let c: number = 44;
// double c's value
c = c * 2;

console.log(c);

let d: number = 125;
// divide d's value by 5
d = d / 3;
console.log(d);

let e: number = 8;
// what's the cube of e's value?
e = e * e * e;
console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)

console.log(f1 > f2);

let g1: number = 350;
let g2: number = 200;

console.log(g2 * 2 > g1);
// tell if the double of g2 is bigger than g1 (pras a boolean)

let h: number = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)

console.log(h % 11 === 0);

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

console.log((i2 * i2) < i1  && i1 < (i2 * i2 * i2));

let j: number = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)

console.log((j % 3 === 0) || (j % 3 === 0));

let k: string = 'Apple';
// fill the k variable with its content 4 times
console.log(k = k + k + k + k);

// Write a program that stores 3 sides of a cuboid as variables (floats)

let firstSide: number = 3;
let secondSide: number = 6;
let thirdrstSide: number = 2;

// The program should write the surface area and volume of the cuboid like:
let surfaceArea: number = 2 * (firstSide * secondSide + secondSide * thirdrstSide + firstSide * secondSide);

console.log(surfaceArea);

let volume: number = firstSide * secondSide * thirdrstSide;

console.log(volume);

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

console.log(((24 - currentHours) * 60 *60) + (60 - currentMinutes) * 60 + 60 - currentSeconds);

let a: number = 24;
let out: number = 0;

if(a % 2 === 0) {
    out++;
}

// if a is even increment out by one
console.log(out);

let b: number = 13;
let out2: string = '';

if ( 10 < b  && b < 20) {
    out2 = 'Sweet';
} else if (b < 10) {
    out2 = 'Less!'
} else if (b > 20) {
    out2 = 'More!'
}
// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"
console.log(out2);

// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if (credits >= 50 && isBonus === false) {
    c - 2;
} else if (credits < 50 && isBonus === false){
    c - 1;
} else if (isBonus) {
    console.log(c);
}
console.log(c);

let d: number =  8;
let time: number = 120;
let out3: string = '';

if (d % 4 === 0 && time <= 200) {
    out3 = 'check';
} else if (time > 200) {
    out3 = 'Time out';
} else {
    out3 = 'Run Forest Run!';
}
// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"

console.log(out3);
*/
