'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let canvasWidth: number = canvas.width;

let canvasHeight: number = canvas.height;

let unit: number = canvasHeight / 6;


function drawBaseTriangle() {

ctx.beginPath();
ctx.moveTo(0, canvasHeight - unit);
ctx.lineTo(canvasWidth, canvasHeight - unit);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, canvasHeight - unit);
ctx.lineTo(canvasWidth / 2, unit);
ctx.stroke();



let xGrowing = 0;
let yDescending = canvasHeight - unit;

for (let i: number = 0; i <= canvasWidth; i++){
    
    xGrowing += 25;
    yDescending -= 20;
    
    ctx.beginPath();
    ctx.moveTo(xGrowing, canvasHeight - unit);
    ctx.lineTo(canvasWidth / 2, unit);
    ctx.stroke();
}


}

drawBaseTriangle();

