'use strict'
import {Plant} from './plant'

export class Flower extends Plant  {

plantType: string;
needsWater: boolean;

  constructor(color: string){
    super(color);
    this.needsWater = true;
    this.plantType = 'flower';

    if(this.currentWaterAmount >= 5){
      this.needsWater = false;
    } else {
      this.needsWater = true;
    }

  }

  isItNeedsWater(){
    if(this.needsWater === true){
      console.log(`The ${this.color} Flower needs water.`);
    } else {
      console.log(`The ${this.color} Flower doesn't need water.`);
    }
  }

}