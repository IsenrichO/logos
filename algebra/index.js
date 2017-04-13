
// Mapping of mathematical operators to their corresponding functional representation:
const MathOps = new Map([
  ['+', (val1, val2) => val1 + val2],
  ['-', (val1, val2) => val1 - val2],
  ['*', (val1, val2) => val1 * val2],
  ['/', (val1, val2) => val1 / val2],

  ['^', (val1, val2) => Math.pow(val1, val2)],
  ['**', (val1, val2) => Math.pow(val1, val2)]
]);


// Returns the reciprocal of a number or fraction:
const reciprocal = (num = 1) => (1 / num);
