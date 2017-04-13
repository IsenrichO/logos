'use strict';
import { sum } from '../algebra/index';


// Calculates the average, or arithmetic mean, of a collection of values:
export const mean = (vals = []) => (sum(vals) / vals.length);

// Calculates the standard deviation of a collection of values:
export const std_dev = (vals = []) => {
  const smplMean = mean(vals);
  return Math.sqrt(
    vals.reduce((memo, curr) => memo += Math.pow((curr - smplMean), 2)) / (vals.length)
  );
};
