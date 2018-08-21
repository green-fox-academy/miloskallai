'use strict'

import {Garden} from './garden'
import {Plant} from './plant'
import {Flower} from './flower'
import {Tree} from './tree'

let orangeTree = new Tree(2,'orange');
let purpleTree = new Tree(4,'purple');

let yellowFlower = new Flower(5,'yellow');
let blueFlowe = new Flower(3, 'blue');


let testGarden = new Garden(purpleTree, yellowFlower);

console.log(testGarden.gardenState());