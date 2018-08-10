'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let canvasSize: number = canvas.width;

let stepsThirdQuarter: number = 0;

for(let i: number = 0; i < canvasSize / 60; i++) {
    
    stepsThirdQuarter += 30;
  
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(canvasSize / 2, canvasSize - stepsThirdQuarter);
    ctx.lineTo(canvasSize / 2 - stepsThirdQuarter , canvasSize / 2);
    ctx.stroke();
    console.log(stepsThirdQuarter);
}

let stepsSecondQuarter: number = 0;

for(let i: number = 0; i < canvasSize / 60; i++) {
    
    stepsSecondQuarter += 30;
  
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(canvasSize / 2, canvasSize / 2 - stepsSecondQuarter);
    ctx.lineTo(canvasSize - stepsSecondQuarter , canvasSize / 2);
    ctx.stroke();
}   



let stepsFirstQuarter: number = 0;

for(let i: number = 0; i < canvasSize / 60; i++) {
    
    stepsFirstQuarter += 30;
  
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(canvasSize / 2 , canvasSize / 2 - stepsFirstQuarter);
    ctx.lineTo(stepsFirstQuarter, canvasSize / 2);
    ctx.stroke();
}  

let stepsFourthQuarter: number = 0;

for(let i: number = 0; i < canvasSize / 60; i++) {
    
    stepsFourthQuarter += 30;
  
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(canvasSize - stepsFourthQuarter, canvasSize / 2);
    ctx.lineTo(canvasSize / 2, canvasSize / 2 + stepsFourthQuarter);
    ctx.stroke();
}  
