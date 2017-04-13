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
    return reducer(this.coords, (memo, curr) => memo += curr.square()).sqrt();
  }

  static getDistanceFromPoint(point) {
    return reducer(
      this.coords.zip(point.coords, (pt1, pt2) => Math.abs(pt2 - pt1)),
      (memo, curr) => memo += curr.square()
    ).sqrt();
  }
}
