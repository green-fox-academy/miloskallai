'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let centerX: number = canvas.width / 2;
let centerY: number = canvas.height / 2;

ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(centerX, centerY);
ctx.stroke();