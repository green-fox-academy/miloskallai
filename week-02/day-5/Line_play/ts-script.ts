'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let growingNum: number = 0;
for(let i: number = 0; i < canvas.width; i++) {
    growingNum += 30;
  
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(growingNum, 5);
    ctx.lineTo(canvas.width - 5, growingNum);
    ctx.stroke();
}

let growingNum2: number = 0;
for(let i: number = 0; i < canvas.width; i++) {
    growingNum2 += 30;
  
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(5, growingNum2);
    ctx.lineTo(growingNum2 , canvas.height - 5);
    ctx.stroke();
}