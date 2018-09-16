'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let size = canvas.width;
let quarter = size / 3;


function drawGrid(canvasSize:number, canvasQuarter:number){
   
    ctx.beginPath();
    ctx.moveTo(0, canvasQuarter);
    ctx.lineTo(canvasSize, canvasQuarter);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(0, 2 * canvasQuarter);
    ctx.lineTo(canvasSize, 2 * canvasQuarter);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvasQuarter, 0);
    ctx.lineTo(canvasQuarter, canvasSize);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(2 * canvasQuarter, 0);
    ctx.lineTo(2 * canvasQuarter, canvasSize);
    ctx.stroke();

}

/*
function drawMicroGrid(canvasSize:number, canvasQuarter:number){
   
    ctx.beginPath();
    ctx.moveTo(0, canvasQuarter * 3);
    ctx.lineTo(canvasSize - canvasQuarter * 3, canvasQuarter * 3);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(0, 2 * canvasQuarter * 3);
    ctx.lineTo(canvasSize - canvasQuarter * 3, 2 * canvasQuarter * 3);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvasQuarter * 3, 0);
    ctx.lineTo(canvasQuarter * 3, canvasSize - canvasQuarter * 3);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(2 * canvasQuarter * 3, 0);
    ctx.lineTo(2 * canvasQuarter * 3, canvasSize - canvasQuarter * 3);
    ctx.stroke();

    drawMicroGrid(canvasSize / 3, canvasQuarter / 3);

}
*/

drawGrid(size, quarter);
drawMicroGrid(size * 3, quarter * 3);

function drawMicroGrid(canvasSize:number, canvasQuarter:number){
    ctx.beginPath();
    ctx.moveTo(quarter * 3, canvasQuarter);
    ctx.lineTo(canvasSize / 3, canvasQuarter);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(quarter, 2 * canvasQuarter);
    ctx.lineTo(canvasSize / 3, 2 * canvasQuarter);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvasQuarter, quarter * 3);
    ctx.lineTo(canvasQuarter, canvasSize / 3);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(2 * canvasQuarter, quarter * 3);
    ctx.lineTo(2 * canvasQuarter, canvasSize / 3);
    ctx.stroke();

    drawMicroGrid(size **3, quarter * 3);

}