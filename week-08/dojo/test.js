'use strict';

const source = require('./poker-checker');
const tape = require('tape');
const test = tape();

test.test('can I have a green test?', t => {
  const result = 2;

  source.asd();
  t.equals(result, source.addTwoNumbers(1, 1));
  t.end();
});
