
// Mapping of mathematical operators to their corresponding functional representation:
export const MathOps = new Map([
  ['+', (val1, val2) => val1 + val2], // Addition
  ['-', (val1, val2) => val1 - val2], // Subtraction
  ['*', (val1, val2) => val1 * val2], // Multiplication
  ['/', (val1, val2) => val1 / val2], // Division

  ['^', (val1, val2) => Math.pow(val1, val2)],  // "<VAL1> To the power of <VAL2>"
  ['**', (val1, val2) => Math.pow(val1, val2)]  // Exponentiation
]);


// Returns the reciprocal of a number or fraction:
export const reciprocal = (num = 1) => (1 / num);

// Returns the absolute value of the evaluated result of a contained input expression:
export const abs = (exp) => Math.abs(exp);

// Returns the arithmetic sum of a collection of values:
export const sum = (vals = []) => vals.reduce((memo, curr) => memo += Number(curr), 0);

// A variation of the native `.reduce()` method on the Array object, the `reducer()`
//  function is intended to further abstract the repetitive nature of scripting out
//  custom aggregation function by simply providing a list of values, the transform
//  function against which to effect said aggregation and, optionally, an initial
//  value <init>:
export const reducer = (vals = [], transform = (a, b) => a + b, init) =>
  vals.reduce((memo, curr) => transform(memo, curr), init);
