'use strict'
import {apple} from './apples';

declare function require(path: string): any;

const test = require('tape');

import {test} from 'tape';

test('object returns apple', function(test){
  let expectedString = 'apple';
  let actualString = apple.getApple();

  test.equal(expectedString, actualString);

  test.end();
})