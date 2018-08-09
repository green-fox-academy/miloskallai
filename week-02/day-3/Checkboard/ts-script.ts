'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

    let rowSize: number = 0;
    for(let j: number = 1; j < canvas.width / 100; j++) {
        rowSize += 100;
        if (j === 1) {
            ctx.fillRect(0, 0, 100, 100);
        } else if(j % 2 === 0) {
            ctx.fillRect(rowSize, 0, 100, 100);
        }  
    }


  