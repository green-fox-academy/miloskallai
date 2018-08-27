"use strict";
import { checkAnagram } from "./anagram";

declare function require(path: string): any;

const test = require("tape");

test("Check if strings are equal", t => {
  let string1: string = "a";
  let string2: string = "a";
  t.equal(checkAnagram(string1, string2), true);
  t.end();
});

test("Check if length is equal", t => {
  let string1: string = "aaa";
  let string2: string = "aaa";
  t.equal(checkAnagram(string1, string2), true);
  t.end();
});

test("Check if chars are equal if ordering is different", t => {
  let string1: string = "baa";
  let string2: string = "aab";
  t.equal(checkAnagram(string1, string2), true);
  t.end();
});
