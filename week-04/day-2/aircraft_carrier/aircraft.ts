"use strict";

export class Aircraft {
  protected type: string;
  protected ammo: number;
  protected maxAmmo: number;
  protected baseDamage: number;
  protected allDamage: number;
  protected priority: boolean;

  fight() {
      return this.ammo * this.baseDamage;;
      this.ammo = 0;
  }    

  refill(ammoToRefill: number) {
        if(ammoToRefill <= this.maxAmmo) {
            this.ammo + ammoToRefill - this.ammo;
        } else {
            this.ammo + this.maxAmmo;
        }  
  }

  getType() {
    return this.type;
  }

  getStatus() {
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${
      this.baseDamage
    }, All Damage: ${this.allDamage}`;
  }

  isPriority() {
    return this.priority;
  }
}
