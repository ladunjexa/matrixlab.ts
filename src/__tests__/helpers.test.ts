import { describe, it, expect } from "vitest";
import { rotate90DegreesClockwise } from "../lib";

/**
 * Test suite for "rotate90DegreesClockwise" function
 */
describe("rotate90DegreesClockwise", () => {
  it("should rotate a 2x2 matrix by 90 degree", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const expected = [
      [3, 1],
      [4, 2],
    ];
    expect(rotate90DegreesClockwise(matrix)).toEqual(expected);
  });

  it("should rotate a 3x3 matrix by 90 degree", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];
    expect(rotate90DegreesClockwise(matrix)).toEqual(expected);
  });
});
