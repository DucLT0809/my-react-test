/* eslint-disable no-undef */
const { findStringLength, findTop2Sum } = require("./solution1");

test("finds strings with most frequent lengths", () => {
  const arr = ["a", "ab", "abc", "cd", "def", "gh"];
  expect(findStringLength(arr)).toEqual(["ab", "cd", "gh"]);
});

test("empty string", () => {
  const arr = [];
  expect(findStringLength(arr)).toEqual([]);
});
test("handles single string input", () => {
  const arr = ["single"];
  expect(findStringLength(arr)).toEqual(["single"]);
});

test("handles all strings of same length", () => {
  const arr = ["one", "two", "six", "ten"];
  expect(findStringLength(arr)).toEqual(["one", "two", "six", "ten"]);
});

test("handles different frequencies", () => {
  const arr = ["a", "bb", "cc", "ddd", "eee", "ffff", "gggg"];
  expect(findStringLength(arr)).toEqual([
    "bb",
    "cc",
    "ddd",
    "eee",
    "ffff",
    "gggg",
  ]);
});

test("handles multiple max frequencies", () => {
  const arr = ["a", "b", "cc", "dd", "eee", "fff", "ggg"];
  expect(findStringLength(arr)).toEqual(["eee", "fff", "ggg"]);
});

//  TODO:2

test("finds sum of top two integers", () => {
  const arr = [1, 4, 2, 3, 5];
  expect(findTop2Sum(arr)).toEqual(9);
});

test("handles array with exactly two elements", () => {
  const arr = [10, 20];
  expect(findTop2Sum(arr)).toEqual(30);
});

test("throws error for array with less than two elements", () => {
  const arr = [5];
  expect(() => findTop2Sum(arr)).toThrow(
    "Array must contain at least two elements"
  );
});

test("handles array with negative numbers", () => {
  const arr = [-1, -4, -2, -3, -5];
  expect(findTop2Sum(arr)).toEqual(-3);
});

test("handles array with mixed positive and negative numbers", () => {
  const arr = [1, -4, 2, 3, -5];
  expect(findTop2Sum(arr)).toEqual(5);
});

test("throws error for empty array", () => {
  const arr = [];
  expect(() => findTop2Sum(arr)).toThrow(
    "Array must contain at least two elements"
  );
});
