'use strict';


// Zero, 0, the basis upon which the number field of integers, ℤ, can be divided
//  into those with positive (+) sign and those with negative (-) sign. It fulfills
//  a central mathematical role for its allowance of the additive identity (a + 0 = a):
const ZERO = 0;

// (Positive) one, +1, (also known as unity or the unit value) and the fundamental
//  unit of the field of natural numbers, ℕ, and another core player in the theoretic
//   underpinnings of mathematics vís-a-vís the multiplicative identity (a * 1 = a):
const ONE = 1;

// (Negative) one, -1, the first item of the (ordered) field of negative integers,
//  ℤ-, which can be dually seen as the additive inverse of 1 as well as the unique
//  value from which all other negative integers are simple multiples thereof:
const NEG_ONE = -1;

export { ZERO, ONE, NEG_ONE };


// The Archimedean ratio, π, (also known as Ludolph's number) given to be the
//  ratio of the circumference of a circle to the diamater of the same (C/d):
const PI = 3.14159,                                   // 5 d.p.
      PI_EXP = 3.14159265358979323846264338327950288, // 35 d.p.
      PI_JS = Math.PI;                                // JS representation

// The natural logarithm base `e`, otherwise known as Euler's number and/or
//  Napier's constant:
const EULER_NUM = 2.718,                                      // 3 d.p.
      EULER_NUM_EXP = 2.71828182845904523536028747135266249,  // 35 d.p.
      EULER_NUM_JS = Math.E;                                  // JS representation

// The Euler-Mascheroni constant, γ, also known as Euler's constant (though not to be
//  confused with the aforementioned Euler's number), is a recurring constant
//  pervasive in the fields of analysis and number theory:
const EULER_MASCHERONI = 0.577,                                     // 3 d.p.
      EULER_MASCHERONI_EXP = 0.57721566490153286060651209008240243; // 35 d.p.

// The imaginary unit, `i`, or unit imaginary value:
const IMAGINARY_UNIT = Math.sqrt(-1);

export {
  PI, PI_EXP, PI_JS,
  EULER_NUM, EULER_NUM_EXP, EULER_NUM_JS,
  EULER_MASCHERONI, EULER_MASCHERONI_EXP,
  IMAGINARY_UNIT
};


// The natural logarithm of two, ln(2):
const LN_2 = 0.693,                   // 3 d.p.
      LN_2_EXP = 0.6931471805599453,  // 16 d.p.
      LN_2_JS = Math.LN2;             // JS representation

// The natural logarithm of ten, ln(10):
const LN_10 = 2.303,                  // 3 d.p.
      LN_10_EXP = 2.302585092994046,  // 15 d.p.
      LN_10_JS = Math.LN10;           // JS representation

// The base-2 logarithm of Euler's number, log_2(e):
const LOG_2_E = 1.443,                  // 3 d.p.
      LOG_2_E_EXP = 1.4426950408889634, // 16 d.p.
      LOG_2_E_JS = Math.LOG2E;          // JS representation

// The base-10 logarithm of Euler's number, log_10(e):
const LOG_10_E = 0.434,                   // 3 d.p.
      LOG_10_E_EXP = 0.4342944819032518,  // 16 d.p.
      LOG_10_E_JS = Math.LOG10E;          // JS representation

export {
  LN_2, LN_2_EXP, LN_2_JS,
  LN_10, LN_10_EXP, LN_10_JS,
  LOG_2_E, LOG_2_E_EXP, LOG_2_E_JS,
  LOG_10_E, LOG_10_E_EXP, LOG_10_E_JS
};


// The square root of one-half, given equivalently as the reciprocal of the square
//  root of 2 (sqrt(1/2) === 1/sqrt(2));
const SQRT_1_2 = 0.707,                   // 3 d.p.
      SQRT_1_2_EXP = 0.7071067811865476,  // 16 d.p.
      SQRT_1_2_ID = (1 / Math.SQRT2),     // Identity expression
      SQRT_1_2_JS = Math.SQRT1_2;         // JS representation

// Pythagoras' constant, given as the principal square root of two and that, when
//  multiplied by itself, returns the integer value 2:
const SQRT_2 = 1.414,                                     // 3 d.p.
      SQRT_2_EXP = 1.41421356237309504880168872420969807, // 35 d.p.
      SQRT_2_ID = Math.sqrt(2),                           // Identity expression
      SQRT_2_JS = Math.SQRT2;                             // JS representation

// Theodorus' constant, given as the principal square root of three and that, when
//  multiplied by itself, returns the integer value 3:
const SQRT_3 = 1.732,                                       // 3 d.p.
      SQRT_3_EXP = 1.73205080756887729352744634150587236,   // 35 d.p.
      SQRT_3_ID = Math.sqrt(3);                             // Identity expression

// The principal square root of five, an irrational algebraic constant whose use
//  is profound within contexts surrounding the Golden Ratio:
const SQRT_5 = 2.236,                                     // 3 d.p.
      SQRT_5_EXP = 2.23606797749978969640917366873127623, // 35 d.p.
      SQRT_5_ID = Math.sqrt(5);                           // Identity expression

export {
  SQRT_1_2, SQRT_1_2_EXP, SQRT_1_2_ID, SQRT_1_2_JS,
  SQRT_2, SQRT_2_EXP, SQRT_2_ID, SQRT_2_JS,
  SQRT_3, SQRT_3_EXP, SQRT_3_ID,
  SQRT_5, SQRT_5_EXP, SQRT_5_ID
};


// The Golden Ratio, φ, a recurring and significant constant with algebraic as well
//  as geometric interpretations. Its occurrence is especially profound for the
//  domain of sacred geometry:
const GOLDEN_RATIO = 1.618,                                       // 3 d.p.
      GOLDEN_RATIO_EXP = 1.61803398874989484820458683436563811;   // 35 d.p.

export { GOLDEN_RATIO, GOLDEN_RATIO_EXP };
