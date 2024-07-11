/* eslint-disable no-undef */
// Provide an array of strings, eg: [`a`, `ab`, `abc`, `cd`, `def, `gh`]. Write a function to
// find the strings length that appear most in this array. Writing the unit test function
// and provide some test-cases. The result for example array is [`ab`, `cd`, `gh`]

const arr = [`a`, `ab`, `abc`, `cd`, `def`, `gh`];

const findStringLength = (arr) => {
  const lengthCounts = {};
  for (let str of arr) {
    const len = str.length;
    lengthCounts[len] = (lengthCounts[len] || 0) + 1;
  }
  console.log(lengthCounts);
  let maxCount = 0;
  for (let count of Object.values(lengthCounts)) {
    if (count > maxCount) {
      maxCount = count;
    }
  }

  const mostFrequentStrings = [];
  for (let str of arr) {
    if (lengthCounts[str.length] === maxCount) {
      mostFrequentStrings.push(str);
    }
  }

  return mostFrequentStrings;
};

// Provide an array of integers, eg: [1, 4, 2, 3, 5]. Write a function to find sum of
// integers on top 2. Writing the unit test function and provide some test-cases. The
// result for the example array is 9

const numArr = [1, 4, 2, 3, 5];
const findTop2Sum = (numArr) => {
  if (numArr.length < 2) {
    throw new Error("Array must contain at least two elements");
  }
  numArr.sort((a, b) => b - a);
  let sum = numArr[0] + numArr[1];
  return sum;
};
module.exports = {
  findStringLength,
  findTop2Sum,
};
