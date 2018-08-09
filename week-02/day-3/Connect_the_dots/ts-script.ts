
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]]

let box: number[][] = [[10, 10], [290,  10], [290, 290], [10, 290]];
let shape: number [][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectTheDots(dots:number[][]) {
    
}

connectTheDots(box);

let boxXCoordinates: number[] = [];
let boxYCoordinates: number[] = [];
for(let i: number = 0; i < box.length; i++) {
  
    boxXCoordinates.push(box[i][0]);
    boxYCoordinates.push(box[i][1]);
}

let shapeXCoordinates: number[] = [];
let shapeYCoordinates: number[] = [];
for(let i: number = 0; i < shape.length; i++) {
  
    shapeXCoordinates.push(shape[i][0]);
    shapeYCoordinates.push(shape[i][1]);
}

for(let i = 0; i < boxXCoordinates.length; i++) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(boxXCoordinates[i], boxYCoordinates[i]);
    ctx.lineTo(boxXCoordinates[i], boxYCoordinates[i]);
    console.log(boxXCoordinates[i], boxYCoordinates[i]);
    ctx.stroke();
}

