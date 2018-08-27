"use strict";
import { convert } from "./number-converter";

declare function require(path: string): any;

const test = require("tape");

test("check if input number returns string", t => {
  t.equal(typeof convert(1), typeof "1");
  t.end();
});

test("check if input number returns one number string", t => {
  t.equal(convert(1), "one");
  t.end();
});

test("check if input number returns two number string", t => {
  t.equal(convert(21), "twenty-one");
  t.end();
});

test("check if input number returns two number string less than 20", t => {
  t.equal(convert(19), "nineteen");
  t.end();
});

test("check if function converts string to number", t => {
  t.equal(typeof convert("one"), typeof 1);
  t.end();
});

test("check if function converts string to correct number", t => {
  t.equal(convert("thirty-three"), 33);
  t.end();
});
