'use strict';
import { sum, reducer } from '../algebra/index';


// Calculates the average, or arithmetic mean, of a collection of values:
export const mean = (vals = []) => (sum(vals) / vals.length);

// Returns the median of a collection of input values. When the given input
//  consists of an even-numbered list of values, the median is calculated as
//  the average of the two "most median" values (i.e., splits the difference)
//  while odd-numbered lists of values return the single median:
export const median = (vals = []) => {
  const [numVals, sortedVals] = [vals.length, vals.numSort()],
        midIndex = ((numVals - 1) / 2);
  return (!!(numVals % 2)
    ? sortedVals[midIndex]
    : mean([ sortedVals[Math.floor(midIndex)], sortedVals[Math.ceil(midIndex)] ]));
};

// Returns the mode, or most frequent value(s), from a collection of input values.
//  Should there be multiple inputs having an equal and greatest frequency, all
//  are returned as an array of objects denoting the value and its frequency:
export const mode = (vals = []) => {
  const sortedFreqs = Object
    .entries(vals.reduceToHash())
    .map(entry => { value: entry[0], frequency: entry[1] })
    .sort((entry1, entry2) => entry1.frequency - entry2.frequency);
  const maxFreq = sortedFreqs[sortedFreqs.length - 1].frequency;
  return sortedFreqs.filter(entry => entry.frequency === maxFreq);
};

// Calculates the variance, equal to the standard deviation squared, for a
//  collection of values:
export const variance = (vals = []) => {
  const smplMean = mean(vals);
  return reducer(vals, (memo, curr) => memo += Math.pow(curr - smplMean, 2)) / (vals.length - 1);
};

// Returns the sample standard deviation, equal to the square root of the variance,
//  for a collection of values:
export const std_dev = (vals = []) => Math.sqrt(variance(vals));
