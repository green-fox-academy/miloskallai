'use strict'

import {isAnagram} from './anagram'
import {tape} from 'tape';

declare function require(path: string): any;

const test = require('tape');

test('function is returning true, if the given stirngs are anagrams', function(test){
  let expectedValue = true;
  let actualValue = isAnagram('horse', "eorsh");

  test.equal(actualValue, expectedValue);

  test.end();
})