'use strict'

import {summariseArray} from './sum'
import {test} from 'tape'

declare function require(path: string): any;

const test = require('tape');

test('output should be equal with the given array', function(t){
  let expectedSum: number = 15;
  let list: number[] = [1, 2, 3, 4, 5];
  t.equal(summariseArray.sum(list), expectedSum);
  t.end();
});


/*
test('output should be equal with the given array', function(t){
  let expectedSum: number = 15;
  t.equal(expectedSum, summariseArray.sum());
  t.end();
});
*/