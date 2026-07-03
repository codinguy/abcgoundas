import assert from "node:assert/strict";
import test from "node:test";
import {
  calculateLcmResult,
  greatestCommonDivisor,
  leastCommonMultiple,
  parsePositiveInteger,
} from "../lcm-math.js";

test("parsePositiveInteger accepts only whole numbers greater than 1", () => {
  assert.equal(parsePositiveInteger("2"), 2);
  assert.equal(parsePositiveInteger("1"), null);
  assert.equal(parsePositiveInteger("2.5"), null);
  assert.equal(parsePositiveInteger("abc"), null);
});

test("greatestCommonDivisor calculates common factors", () => {
  assert.equal(greatestCommonDivisor(24, 36), 12);
  assert.equal(greatestCommonDivisor(17, 13), 1);
});

test("leastCommonMultiple calculates multiples efficiently", () => {
  assert.equal(leastCommonMultiple(12, 18), 36);
  assert.equal(leastCommonMultiple(21, 6), 42);
});

test("calculateLcmResult returns friendly validation messages", () => {
  assert.equal(calculateLcmResult("", "4"), "Please enter 2 numbers.");
  assert.equal(
    calculateLcmResult("2.5", "4"),
    "Please enter whole numbers greater than 1.",
  );
  assert.equal(calculateLcmResult("12", "18"), 36);
});
