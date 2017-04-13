'use strict';
import { reducer } from '../algebra/index';


// Generic `Point` class:
class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.coords = [this.x, this.y, this.z];
  }

  static getOrigin() {
    return new Point(0, 0, 0);
  }

  static getDistanceFromOrigin() {
    return reducer(this.coords, (memo, curr) => memo += curr.squared()).sqrt();
  }

  static getDistanceFromPoint(point) {
    return reducer(
      this.coords.zip(point.coords, (pt1, pt2) => Math.abs(pt2 - pt1)),
      (memo, curr) => memo += curr.squared()
    ).sqrt();
  }
}

export { Point };


// Returns the computed slope between two lines:
export const getSlope = (pt1, pt2) => ((pt2.y - pt1.y) / (pt2.x - pt1.x));

// Returns the coordinates of the midpoint of a line segment as specified by
//  the supplied endpoint (`ep`) inputs:
export const getMidpoint = (ep1, ep2) => ({
  x: ((ep1.x + ep2.x) / 2),
  y: ((ep1.y + ep2.y) / 2)
});

// Return the equation of a line in slope-intercept form (y = mx + b):
export const slopeInterceptForm = (pt1, pt2) => {
  const slope = getSlope(pt1, pt2),
        yIntercept = pt1.y - (slope * pt1.x);
  console.log(
    `Slope-Intercept Form Linear Equation:\n\
    \`y = ${slope}x + ${yIntercept}\``
  );
  return (x) => (slope * x) + yIntercept;
};

// Return the equation of a line in standard form (Ax + By = C, s.t. A >= 1):
export const standardForm = (pt1, pt2) => {
  const slope = getSlope(pt1, pt2),
        yIntercept = pt1.y - (slope * pt1.x);
  const coefficientA = slope * (m > 0 ? -1 : 1),
        coefficientB = (m > 0 ? -1 : 1),
        coefficientC = yIntercept * (m > 0 ? -1 : 1);
  console.log(
    `Standard Form Linear Equation:\n\
    \`${coefficientA}x + ${coefficientB}y = ${coefficientC}\``
  );
};
