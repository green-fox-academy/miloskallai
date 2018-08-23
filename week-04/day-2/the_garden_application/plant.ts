"use strict";

export class Plant {
  currentWaterAmount: number;
  color: string;

  constructor(color: string) {
    this.currentWaterAmount = 0;
    this.color = color;
  }
}
