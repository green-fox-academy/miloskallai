"use strict";
import { Aircraft } from "./aircraft";

export class F35 extends Aircraft {
  
  constructor() {
    
    super();

    this.type = "F35";
    this.ammo = 0;
    this.maxAmmo = 12;
    this.baseDamage = 50;
    this.priority = true;

  }
}
