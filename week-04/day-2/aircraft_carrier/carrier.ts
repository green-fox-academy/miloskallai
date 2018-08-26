"use strict";

export class Carrier {
  allAircrafts: any[];
  ammo: number;
  healthPoints: number;

  constructor(initialAmmo: number, healthPoints: number) {
    this.ammo = initialAmmo;
    this.healthPoints = healthPoints;
    this.allAircrafts = [];
  }

  add(aircraftName: any) {
    this.allAircrafts.push(aircraftName);
  }

  fill(): any {
    let aircraftsMaxAmmo: number = 0;

    if (this.ammo <= 0) {
      return "No ammo";
    } else {
      this.allAircrafts.forEach(function(element) {
        aircraftsMaxAmmo += element.maxAmmo;
      });

      if (this.ammo <= aircraftsMaxAmmo) {
        for (let i: number = 0; i < this.allAircrafts.length; i++) {
          if (this.allAircrafts[i].priority) {
            this.allAircrafts[i].refill(this.ammo);
            this.ammo -= this.allAircrafts[i].ammo;
          }
        }
      }

      if (this.ammo <= aircraftsMaxAmmo) {
        for (let i: number = 0; i < this.allAircrafts.length; i++) {
          if (!this.allAircrafts[i].priority) {
            this.allAircrafts[i].refill(this.ammo);
            this.ammo -= this.allAircrafts[i].ammo;
          }
        }
      }
    }
  }

  fight() {}

  getStatus() {}
}
