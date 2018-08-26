"use strict";

export class Aircraft {
  protected type: string;
    ammo: number;
  protected maxAmmo: number;
  protected baseDamage: number;
  protected allDamage: number;
  protected priority: boolean;

  fight(): number {
    return this.ammo * this.baseDamage;
    this.ammo = 0;
  }

  refill(ammoToRefill: number): number {

    if (ammoToRefill <= this.maxAmmo) {
      this.ammo += ammoToRefill;
    } else {
      this.ammo += this.maxAmmo;
    }
    return ammoToRefill - this.ammo;
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${
      this.baseDamage
    }, All Damage: ${this.allDamage}`;
  }

  isPriority(): boolean {
    return this.priority;
  }
}
