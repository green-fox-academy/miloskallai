'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

let centerX: number = canvasWidth / 2;
let centerY: number = canvasHeight / 2;

function createLine(startingX: number, startingY: number){
    ctx.beginPath();
    ctx.moveTo(startingX,startingY);
    ctx.lineTo(centerX, centerY);
    ctx.stroke();
}

let fromTop: number = - 20;
    for(let i: number = 0; i <= canvasWidth / 20; i++) {
        console.log('canvas:' + canvasWidth);
        fromTop += 20;
        createLine(fromTop,0);
    }
    
    let fromBottom: number = - 20;
    for(let i: number = 0; i <= canvasWidth / 20; i++) {
        fromBottom += 20;
        console.log(fromBottom);
        createLine(fromBottom, canvasHeight);
    }
    
    let fromLeft: number = - 20;
    for(let i: number = 0; i <= canvasHeight / 20; i++) {
        console.log('canvas:' + canvasHeight);
        fromLeft += 20;
        createLine(0,fromLeft);
    }
    
    let fromRight: number = - 20;
    for(let i: number = 0; i <= canvasHeight / 20; i++) {
        fromRight += 20;
        console.log(fromRight);
        createLine(canvasWidth, fromRight);
    }