'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

function drawRectangles(squareSize: number){
    let color: string[] = ['blue', 'red', 'yellow', 'pink'];
    for(let i: number = 1; i <= 4; i++) {
        ctx.fillStyle = color[i - 1];
        let doubledSize: number = i * squareSize * 2;
        let power = squareSize * Math.pow(2, i);
        let fourthCase = (squareSize * Math.pow(2, i)) - squareSize * 2
        if(i === 4) {
            ctx.fillRect(fourthCase, fourthCase, doubledSize, doubledSize);
        } else {
            ctx.fillRect(power, power, doubledSize, doubledSize);
        }
    }
}

drawRectangles(10);