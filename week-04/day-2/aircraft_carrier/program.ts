"use strict";
import { Aircraft } from "./aircraft";
import { F16 } from "./f16";
import { F35 } from "./f35";
import { Carrier } from "./carrier";

let fistCarrier = new Carrier(30, 20);
let f16 = new F16();
let f35 = new F35();
let ff16 = new F16();
let ff35 = new F35();

fistCarrier.add(f16);
fistCarrier.add(ff16);
fistCarrier.add(f35);
fistCarrier.add(ff35);

//console.log(fistCarrier.ammo);
//console.log(fistCarrier.allAircrafts);

console.log(fistCarrier.allAircrafts);
console.log(fistCarrier.ammo);
console.log(fistCarrier.fill());
console.log(fistCarrier.allAircrafts);
console.log(fistCarrier.ammo);