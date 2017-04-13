'use strict';


// Fallback `transform()` callback function for use in default parametrization:
const transform = (memo, curr) => memo += curr;


// Mapping of mathematical operators to their corresponding functional representation:
export const MathOps = new Map([
  ['+', (val1, val2) => val1 + val2], // Addition
  ['-', (val1, val2) => val1 - val2], // Subtraction
  ['*', (val1, val2) => val1 * val2], // Multiplication
  ['/', (val1, val2) => val1 / val2], // Division

  ['^', (val1, val2) => Math.pow(val1, val2)],  // "<VAL1> To the power of <VAL2>"
  ['**', (val1, val2) => Math.pow(val1, val2)], // Exponentiation

  ['^(-1)', (exp) => reciprocal(exp)],  // Reciprocal
  ['!', (num) => factorial(val)]        // Factorial
]);


// Returns the reciprocal of a number or fraction:
export const reciprocal = (exp = 1) => (1 / exp);

// Returns the absolute value of the evaluated result of a contained input expression:
export const abs = (exp) => Math.abs(exp);

// Returns the arithmetic sum of a collection of values:
export const sum = (vals = []) => vals.reduce((memo, curr) => memo += Number(curr), 0);

// A unary function that returns the factorial of the number against which the
//  function is applied:
export const factorial = (num = 0, total = Math.max(num, 1)) => {
  if (!Number.isInteger(num)) throw new Error(`Given number must be an integer-valud entity!`);
  if (num < 0) throw new Error(`The factorial function is only valid for non-negative-valued integers`);

  return (num === 0 || num === 1
    ? total
    : factorial(--num, total *= num));
};

// A variation of the native `.reduce()` method on the Array object, the `reducer()`
//  function is intended to further abstract the repetitive nature of scripting out
//  custom aggregation function by simply providing a list of values, the transform
//  function against which to effect said aggregation and, optionally, an initial
//  value <init>:
export const reducer = (vals = [], transform = transform, init = 0) =>
  vals.reduce(transform, init);


// Prototypal instantiation of ubiquitous helper methods:
Number.prototype.add = function(adder = 0) { return this + adder; };
Number.prototype.subt = function(subtractend = 0) { return this - subtractend; };
Number.prototype.mult = function(multiplier = 1) { return this * multiplier; };
Number.prototype.div = function(divisor = 1) { return (this / divisor); };
Number.prototype.abs = function() { return Math.abs(this); };
Number.prototype.sqrt = function() { return Math.sqrt(this); };
Number.prototype.cbrt = function() { return Math.pow(this, reciprocal(3)); };
Number.prototype.nthRoot = function(root = 2) { return Math.pow(this, reciprocal(root)); };
Number.prototype.square = function() { return Math.pow(this, 2); };
Number.prototype.cube = function() { return Math.pow(this, 3); };
Number.prototype.nthPower = function(power = 1) { return Math.pow(this, power); };


Array.prototype.numSort = function(ascending = true) {
  return this.sort((val1, val2) => !!ascending ? val1 - val2 : val2 - val1);
};

Array.prototype.prune = function(radix = 10) {
  return this.map(val => Number.parseInt(val, radix));
};

Array.prototype.reducer = function(transform = transform, init = 0) {
  return this.reduce(transform, init);
};

Array.prototype.reduceToHash = function(init = {}) {
  const transform = (memo = {}, curr) => {
    memo.hasOwnProperty(curr) ? memo[curr]++ : memo[curr] = 1;
    return memo;
  };
  return this.reducer(transform, init);
};

Array.prototype.zip = function(arr, transform = (val1, val2) => val1 + val2) {
  return Array.from(
    { length: Math.min(this.length, arr.length) },
    (_, i) => transform(this[i], arr[i])
  );
};


Object.prototype.reducer = function(transform, init = {}) {

};
