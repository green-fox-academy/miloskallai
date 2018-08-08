'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
 function drawing(x: number, y: number){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 50);
    ctx.stroke();
 }
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

for(let i: number = 0; i < 3; i++) {
    let randomX: number = Math.floor(Math.random() * (canvas.width - 50));
    let randomY = Math.floor(Math.random() * (canvas.height - 50));
        drawing(randomX, randomY);
}