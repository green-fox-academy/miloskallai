"use strict";

import { summariseArray } from "./sum";
import { test } from "tape";

declare function require(path: string): any;

const test = require("tape");

test("output should be equal with the given array", function(t) {
  let expectedSum: number = 15;
  let list: number[] = [1, 2, 3, 4, 5];
  t.equal(summariseArray.sum(list), expectedSum);
  t.end();
});

test("output should be equal with the given array", function(t) {
  let expectedSum: number = 0;
  let list: number[] = [];
  t.equal(summariseArray.sum(list), expectedSum);
  t.end();
});

test("output should be equal with the given array", function(t) {
  let expectedSum: number = 4;
  let list: number[] = [4];
  t.equal(summariseArray.sum(list), expectedSum);
  t.end();
});

test("output should be equal with the given array", function(t) {
  let expectedSum: number = 7;
  let list: number[] = [4, 3];
  t.equal(summariseArray.sum(list), expectedSum);
  t.end();
});

test("output should be equal with the given array", function(t) {
  let expectedSum: number = null;
  let list: number[] = [null];
  t.equal(summariseArray.sum(list), expectedSum);
  t.end();
});

test("output should be equal with the given array", function(t) {
  let expectedSum: string = "this is a string";
  let list: string[] = ["this is a string"];
  t.equal(summariseArray.sum(list), expectedSum);
  t.end();
});


