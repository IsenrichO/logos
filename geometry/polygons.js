'use strict';


// Returns the perimeter of any generic polygon given a list of its side lengths:
export const getPerimeter = (...sides = []) => sides.reduce((memo, curr) => memo += curr);

// Returns the semiperimeter as used in the calculation of the area of a triangle
//  using Heron's formula:
export const semiperimeter = (side1 = 1, side2 = 1, side3 = 1) =>
  (side1 + side2 + side3).div(2);


/* Circles
–––––––––––––––––––––––––––––––––––––––––––––––––– */

// Returns the circumference of a circle as a function of its radius `r`:
export const P_circ = (r = 1) => (2 * Math.PI * r);


// Returns the area of a circular face given its radius `r`:
export const A_circ = (r = 1) => (Math.PI * r.squared());



/* Triangles
–––––––––––––––––––––––––––––––––––––––––––––––––– */

// The well-known formula whereby the area of a triangular face is given to be the
//  the product of the the length of its base `b` and the its height `h` then halved:
export const A_triangle = (b = 1, h = 1) => (0.5 * b * h);

// Heron's formula:
export const A_Heron = (side1 = 1, side2 = 1, side3 = 1) => {
  const semiperim = semiperimeter(side1, side2, side3);
  return (
    semiperim * (semiperim - side1) * (semiperim - side2) * (semiperim - side3)
  ).sqrt();
};



/* Quadrilaterals
–––––––––––––––––––––––––––––––––––––––––––––––––– */

// Returns the perimeter of any generic rectangular quadrilateral:
export const P_rect = (s1 = 1, s2 = 1) => (2 * (s1 + s2));

// The area of any arbitrary rectangular quadrilateral having two pairs of parallel,
//  congruent sides whose lengths can arbitrarily be denoted `s1` and `s2`:
export const A_rect = (s1 = 1, s2 = 1) => (s1 * s2);


// Returns the perimeter of a rectangle for the special case of the square, wherein
//  all sides are of equal length, `s1` ≡ `s` ≡ `s2`:
export const P_square = (s = 1) => (s * 4);

// Returns the area of a rectangle for the special case of the square:
export const A_square = (s = 1) => s.squared();
