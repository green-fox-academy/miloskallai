'use strict'

import {Garden} from './garden'
import {Plant} from './plant'
import {Flower} from './flower'
import {Tree} from './tree'

let blueTree = new Tree(4,'blue');
let yellowFlower = new Flower(5,'yellow');

let testGarden = new Garden(blueTree, yellowFlower);
console.log(testGarden.needsToBeWatered);
console.log(testGarden.watering());
console.log(testGarden.needsToBeWatered);

