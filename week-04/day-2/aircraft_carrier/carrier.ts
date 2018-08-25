"use strict";

export class Carrier {
  allAircrafts: string[];
  ammo: number;
  healthPoints: number;

  constructor(initialAmmo: number, healthPoints: number) {
    this.ammo = initialAmmo;
    this.healthPoints = healthPoints;
  }

  add() {}

  fill() {}

  fight() {}

  getStatus() {}
}
