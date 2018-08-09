'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

let xOffset: number = - 100;
let yOffset: number = - 100;
let squareSize: number = 100;

for (let lines: number = 0; lines < canvas.height / squareSize; lines++) {

    yOffset += squareSize;
    xOffset = - squareSize;

    if (lines % 2 === 0) {
        xOffset += squareSize;
    } 
    
    for (let j: number = 0; j < canvas.width / squareSize; j++) {
        xOffset += squareSize;
        //console.log(begining);
        if (j % 2 === 0) {
            ctx.fillRect(xOffset, yOffset, squareSize, squareSize);
            console.log(xOffset);squareSize
        } 
    }
}