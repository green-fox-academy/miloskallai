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

      for (let i: number = 0; i < this.allAircrafts.length; i++) {
        if (this.allAircrafts[i].priority) {
          this.allAircrafts[i].refill(this.ammo);
          this.ammo -= this.allAircrafts[i].ammo;
        }
      }

      for (let i: number = 0; i < this.allAircrafts.length; i++) {
        if (!this.allAircrafts[i].priority) {
          this.allAircrafts[i].refill(this.ammo);
          this.ammo -= this.allAircrafts[i].ammo;
        }
      }
    }
  }

  fight(opponentCarrier: any) {
    let totalDamage = 0;
    for (let i: number = 0; i < this.allAircrafts.length; i++) {
      totalDamage += this.allAircrafts[i].fight();
    }
    return opponentCarrier.healthPoints -= totalDamage;
  }

  getStatus() {
    let totalDamage = 0;
    for (let i: number = 0; i < this.allAircrafts.length; i++) {
      totalDamage += this.allAircrafts[i].fight();
    }

    console.log(
      `HP: ${this.healthPoints}, Aircraft count: ${
        this.allAircrafts.length
      }, Ammo storage: ${this.ammo}, Total damage: ${totalDamage}`
    );
    if (this.healthPoints <= 0) {
      console.log(`It's dead, Jim :(`);
    }
  }
}
