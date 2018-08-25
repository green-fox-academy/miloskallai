"use strict";
import { Aircraft } from "./aircraft";

export class F16 extends Aircraft {
  constructor() {
    super();

    this.type = "F16";
    this.ammo = 0;
    this.maxAmmo = 8;
    this.baseDamage = 30;
    this.priority = false;
  }
}
