/**
 * @namespace Helpers
 * @description A collection of helper functions.
 */

/**
 * @private
 * @function rotate90DegreesClockwise
 * @memberof Helpers
 *
 * @description Rotates a 2D array 90 degrees clockwise.
 *
 * @param {number[][]} array The array to rotate.
 * @returns {number[][]} The rotated array.
 *
 * @example
 * rotate90DegreesClockwise([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
 * // => [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
 */
export function rotate90DegreesClockwise(array: number[][]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < array[0].length; i++) {
    result.push([]);
    for (let j = array.length - 1; j >= 0; j--) {
      result[i].push(array[j][i]);
    }
  }

  return result;
}
