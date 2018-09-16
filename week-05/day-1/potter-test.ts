"use strict";
import { totalCost } from "./potter";
declare function require(path: any): any;

const test = require("tape");

test("totalCost returns a number", t => {
  t.equal(typeof totalCost("HP1"), typeof 8);
  t.end();
});

test("totalCost returns discount if you buy two books", t => {
  t.equal(totalCost("HP1"));
  t.end();
});
