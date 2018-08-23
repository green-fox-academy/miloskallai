'use strict'

import {Plant} from './plant'
import {Flower} from './flower'
import {Tree} from './tree'

export class Garden {
  trees: any[];
  flowers: any[];
  needsToBeWatered: any[];


  constructor(){
    this.trees = [];
    this.flowers = [];
    this.needsToBeWatered = [];
  }

  getPlant(plantName: any){ 
    if(plantName.plantType === 'tree'){
      this.trees.push(plantName);
      this.needsToBeWatered.push(plantName);
    } else if(plantName.plantType = 'flower') {
      this.flowers.push(plantName);
      this.needsToBeWatered.push(plantName);
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
        
          if(element.currentWaterAmount >= 5 && element.plantType === 'flower'){
          let index = needsToBeWatered.indexOf(element);
          element.needsWater = false;
          needsToBeWatered.splice(index, 1);
        } else if (element.currentWaterAmount >= 10 && element.plantType === 'tree'){
          let index = needsToBeWatered.indexOf(element);
          element.needsWater = false;
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
        if(element.currentWaterAmount >= 5 && element.plantType === 'flower'){
          let index = needsToBeWatered.indexOf(element);
          needsToBeWatered.splice(index, 1);
        } else if (element.currentWaterAmount >= 10 && element.plantType === 'tree'){
          let index = needsToBeWatered.indexOf(element);
          needsToBeWatered.splice(index, 1);
        }
        element.isItNeedsWater();
      }); 
    }

  }

}