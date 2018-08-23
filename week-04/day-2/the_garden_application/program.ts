'use strict'

import {Garden} from './garden'
import {Plant} from './plant'
import {Flower} from './flower'
import {Tree} from './tree'

let testGarden = new Garden();

let orangeTree = new Tree('orange');
let purpleTree = new Tree('purple');
let yellowFlower = new Flower('yellow');
let blueFlower = new Flower('blue');

testGarden.getPlant(orangeTree);
testGarden.getPlant(purpleTree);
testGarden.getPlant(yellowFlower);
testGarden.getPlant(blueFlower);

console.log(testGarden.gardenState());

console.log(testGarden.watering(40));
console.log(testGarden.gardenState());

console.log(testGarden.watering(70));
console.log(testGarden.gardenState());