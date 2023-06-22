import { describe, it, expect } from "vitest";
import { e, handleError } from "../lib";

/**
 * Test suite for "handleError" function and "ERROR_MESSAGES" object
 */

/**
 * Test the "handleError" function
 */
describe("handleError", () => {
  it("should throw an error with the given message", () => {
    const errorMessage = "Test error message";

    expect(() => {
      handleError(errorMessage);
    }).toThrowError(errorMessage);
  });
  
  it("should throw an error with the default message if no message is provided", () => {
    const defaultMessage = "Default error message";

    expect(() => {
      handleError(defaultMessage);
    }).toThrowError(defaultMessage);
  });

  it("should not throw an error if the expression evaluates to false", () => {
    expect(() => {
      handleError("This error should not be thrown", false);
    }).not.toThrow();
  });
});

/**
 * Test the "ERROR_MESSAGES" object
 */
describe("ERROR_MESSAGES", () => {
  it("should have the correct value for INVALID_ROTATE_ANGLE", () => {
    expect(e.INVALID_ROTATE_ANGLE).toBe(
      "Invalid rotate angle: The angle required to be a multiples of 90 degrees."
    );
  });

  it("should have the correct value for INDEX_OUT_OF_RANGE", () => {
    expect(e.INDEX_OUT_OF_RANGE).toBe(
      "Index out of range: The indexes provided are out of range."
    );
  });
});
