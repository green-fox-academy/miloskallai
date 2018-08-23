"use strict";

import { Plant } from "./plant";
import { Flower } from "./flower";
import { Tree } from "./tree";

export class Garden {
  trees: any[];
  flowers: any[];
  needsToBeWatered: any[];

  constructor() {
    this.trees = [];
    this.flowers = [];
    this.needsToBeWatered = [];
  }

  getPlant(plantName: any) {
    if (plantName.plantType === "tree") {
      this.trees.push(plantName);
      this.needsToBeWatered.push(plantName);
    } else if (plantName.plantType === "flower") {
      this.flowers.push(plantName);
      this.needsToBeWatered.push(plantName);
    }
  }

  gardenState() {
    this.trees.forEach(function(element) {
      element.isItNeedsWater();
    });

    this.flowers.forEach(function(element) {
      element.isItNeedsWater();
    });
  }

  watering(waterAmount: number) {
    let waterPerPlant = waterAmount / this.needsToBeWatered.length;

    this.needsToBeWatered.forEach(function(element) {
      if (element.currentWaterAmount < 10 && element.plantType === "tree") {
        element.currentWaterAmount += waterPerPlant * 0.4;
      } else if (
        element.currentWaterAmount < 5 &&
        element.plantType === "flower"
      ) {
        element.currentWaterAmount += waterPerPlant * 0.75;
      }
    });

    this.needsToBeWatered.forEach(function(element) {
      if (element.currentWaterAmount > 5 && element.plantType === "flower") {
        element.needsWater = false;
      }
    });

    this.needsToBeWatered.forEach(function(element) {
      if (element.currentWaterAmount > 10 && element.plantType === "tree") {
        element.needsWater = false;
      }
    });
  }
}
