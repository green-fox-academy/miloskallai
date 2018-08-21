'use strict'
import {Plant} from './plant'

export class Flower extends Plant  {

plantType: string;
needsWater: boolean;

  constructor(currentWaterAmount: number, color: string){
    super(currentWaterAmount, color);

    this.plantType = 'flower';
    if(currentWaterAmount >= 5){
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