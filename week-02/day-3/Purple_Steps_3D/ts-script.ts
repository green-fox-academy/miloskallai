'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function drawPurpleSteps(){
   
    for(let i: number = 1; i <= 6; i++) {
        ctx.fillStyle = 'purple';
        let doubledSize: number = i * 5 * 2;
        let power = 5 * Math.pow(2, i);
        let fourthCase = (5 * Math.pow(2, i)) - 5 * 2;
        let fifthCase = (5 * Math.pow(2, i)) - 5 * 10;
        let sixthCase = (5 * Math.pow(2, i)) - 5 * 32;
        console.log(fourthCase, fifthCase, sixthCase);
        if(i === 4) {
          ctx.fillRect(fourthCase, fourthCase, doubledSize, doubledSize);
            } else if (i === 5) {
            ctx.fillRect(fifthCase, fifthCase, doubledSize, doubledSize);
            } else if (i === 6) {
                ctx.fillRect(sixthCase, sixthCase, doubledSize, doubledSize);
        } else {
            ctx.fillRect(power, power, doubledSize, doubledSize);
        }
    }
}

drawPurpleSteps();
