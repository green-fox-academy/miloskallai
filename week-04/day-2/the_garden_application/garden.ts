'use strict'

import {Plant} from './plant'
import {Flower} from './flower'
import {Tree} from './tree'

export class Garden {
  trees: any[];
  flowers: any[];
  needsToBeWatered: any[];

    constructor(tree: any, flower: any){
      this.trees = [];
      this.flowers = [];
  
      this.trees.push(tree);
      this.flowers.push(flower);

      this.needsToBeWatered = [];

      if(tree.needsWater === true){
        this.needsToBeWatered.push(tree)
      } else if(flower.needsToBeWatered === true){
        this.needsToBeWatered.push(flower);
      }

  }

  gardenState(){
    this.trees.forEach(function(element){
      element.isItNeedsWater();
    });

    this.flowers.forEach(function(element){
      element.isItNeedsWater();
    });
  }

  watering(){

    wateringWithForty(this.needsToBeWatered);
    wateringWithSeventy(this.needsToBeWatered);

    function wateringWithForty(needsToBeWatered: any[]){
      let waterPerPlant = 40 / needsToBeWatered.length;

      needsToBeWatered.forEach(function(element){
        if(element.plantType === 'tree'){
          element.currentWaterAmount += waterPerPlant * 0.4;
        } else if(element.plantType === 'flower'){
          element.currentWaterAmount += waterPerPlant * 0.75;
        }
          if(element.currentWaterAmount >= 5){
          let index = needsToBeWatered.indexOf(element);
          needsToBeWatered.splice(index, 1);
        }
        element.isItNeedsWater();
      }); 
    }

    function wateringWithSeventy(needsToBeWatered: any[]){
      let waterPerPlant = 70 / needsToBeWatered.length;

      needsToBeWatered.forEach(function(element){
        if(element.plantType === 'tree'){
          element.currentWaterAmount += waterPerPlant * 0.4;
        } else if(element.plantType === 'flower'){
          element.currentWaterAmount += waterPerPlant * 0.75;
        }
          if(element.currentWaterAmount >= 5){
          let index = needsToBeWatered.indexOf(element);
          console.log(index);
          needsToBeWatered.splice(index, 1);
        }
        element.isItNeedsWater();
      }); 
    }

  }

}