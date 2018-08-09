;'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function purpleSteps(){
    let startingCoordinate = 1;
    for (let i = 1; i < 20; i++){
        
        startingCoordinate = i * 10;
        ctx.fillStyle = 'purple';
        ctx.fillRect(startingCoordinate, startingCoordinate, 10, 10);
    }       
} 
purpleSteps();