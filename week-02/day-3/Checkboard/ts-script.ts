'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

let rowCount = 0;
for(let z = 0; z < 2; z++){

    
    console.log(rowCount);
     
    let firstRowSize: number = 0;
    for(let j: number = 1; j < 7; j++) {
        firstRowSize += 100;
        if (j === 1) {
            ctx.fillRect(0, 0, 100, 100);
        } else if(j % 2 === 0) {
            ctx.fillRect(firstRowSize, rowCount, 100, 100);
        }  
    }
    
    let secondRowSize: number = 1;
    for(let k: number = 1; k < 6; k++) {
        secondRowSize += 100;
        if(k % 2 !== 0) {
            ctx.fillRect(secondRowSize, rowCount+= 100, 100, 100);
        }  
    }
   
}

/*
let thirdRowSize: number = 0;
for(let i: number = 1; i < 7; i++) {
    thirdRowSize += 100;
    if (i === 1) {
        ctx.fillRect(0, 200, 100, 100);
    } else if(i % 2 === 0) {
        ctx.fillRect(thirdRowSize, 200, 100, 100);
    }  
}

let fourthRowSize: number = 1;
for(let j: number = 1; j < 6; j++) {
    fourthRowSize += 100;
    if(j % 2 !== 0) {
        ctx.fillRect(fourthRowSize, 300, 100, 100);
    }  
}
*/