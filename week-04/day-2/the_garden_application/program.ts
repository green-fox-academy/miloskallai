'use strict'

import {Garden} from './garden'
import {Plant} from './plant'
import {Flower} from './flower'
import {Tree} from './tree'

let orangeTree = new Tree(0,'orange');
let purpleTree = new Tree(0,'purple');

let yellowFlower = new Flower(0,'yellow');
let blueFlower = new Flower(0, 'blue');

let testGarden = new Garden(purpleTree, yellowFlower);

console.log(testGarden.gardenState())

/*
console.log(purpleTree.currentWaterAmount);
console.log(testGarden.watering());
console.log(purpleTree.currentWaterAmount);
*/