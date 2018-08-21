'use strict'
import {Plant} from './plant'

export class Tree extends Plant  {

plantType: string;
needsWater: boolean;

  constructor(currentWaterAmount: number, color: string){
    super(currentWaterAmount, color);

    this.plantType = 'tree';
    if(currentWaterAmount >= 5){
      this.needsWater = false;
    } else {
      this.needsWater = true;
    }

  }

  isItNeedsWater(){
    if(this.needsWater === true){
      console.log(`The ${this.color} Tree needs water.`);
    } else {
      console.log(`The ${this.color} Tree doesn't need water.`);
    }
  }

}