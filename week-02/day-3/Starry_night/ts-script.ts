
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0, 0, canvas.width, canvas.height);

let starA: number = 5;



function nightSky(numberOfStarts: number) {
    for(let i: number = 0; i < numberOfStarts; i++){

        let randomX: number = Math.floor(Math.random() * canvas.width);
        let randomY: number = Math.floor(Math.random() * canvas.height);

    ctx.fillStyle = "grey";
    ctx.fillRect(randomX, randomY, starA, starA);
    }
}

nightSky(40);