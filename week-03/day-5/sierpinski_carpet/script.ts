"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

let canvasSize = canvas.width;
let rectSize = canvasSize / 3;
let canvasCenter = canvasSize / 2;

drawDiagnonals();

ctx.fillRect(
  canvasCenter - rectSize / 2,
  canvasCenter - rectSize / 2,
  rectSize,
  rectSize
);









function drawDiagnonals() {
  ctx.beginPath();
  ctx.moveTo(0, canvasCenter);
  ctx.lineTo(canvasSize, canvasCenter);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(canvasCenter, 0);
  ctx.lineTo(canvasCenter, canvasSize);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, canvasCenter / 2);
  ctx.lineTo(canvasSize, canvasCenter / 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(canvasCenter / 2, 0);
  ctx.lineTo(canvasCenter / 2, canvasSize);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(canvasCenter / 2, 0);
  ctx.lineTo(canvasCenter / 2, canvasSize);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, canvasSize - canvasCenter / 2);
  ctx.lineTo(canvasSize, canvasSize - canvasCenter / 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(canvasSize - canvasCenter / 2, 0);
  ctx.lineTo(canvasSize - canvasCenter / 2, canvasSize);
  ctx.stroke();
}
