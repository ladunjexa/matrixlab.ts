/**
 * @namespace Services
 * @description A collection of services.
 */

/**
 * @function handleError
 * @memberof Services
 *
 * @description Throws an error if the expression evaluates to true.
 *
 * @param {string} msg - The error message to throw.
 * @param {any} expression - The expression to evaluate.
 * @returns {void}
 *
 * @example
 * handleError("Invalid arguments provided");
 * // => Error: Invalid arguments provided
 */
export function handleError(msg: string, expression: any = true): void {
  if (expression) {
    throw new Error(msg);
  }
}

/**
 * @constant {type} ERROR_MESSAGES
 * @memberof Services
 *
 * @description An object containing error messages.
 *
 * @example
 * ERROR_MESSAGES.MATRIX_DIMENSION_MISMATCH("multiplication");
 * // => "Matrix dimension mismatch: The number of columns in the first matrix must be equal to the number of rows"
 *
 * ERROR_MESSAGES.INVALID_ROTATE_ANGLE;
 * // => "Invalid rotate angle: The angle required to be a multiples of 90 degrees."
 */
export const ERROR_MESSAGES = {
  INVALID_ARGUMENTS: "Invalid arguments provided",
  MATRIX_DIMENSION_MISMATCH: (method: string = "") => {
    switch (method) {
      case "multiplication":
        return "Matrix dimension mismatch: The number of columns in the first matrix must be equal to the number of rows";
      case "addition":
      case "subtraction":
        return "Matrix dimension mismatch: The matrices must have the same dimensions (n x m).";
      default:
        return "Matrix dimensions mismatch: The matrices must have compatible dimensions for this operation.";
    }
  },
  NON_SQUARE_MATRIX:
    "Non-square matrix: The operation requires a square matrix.",
  MATRIX_SHAPE_MISMATCH:
    "Matrix shape mismatch: The dimensions of the matrices are incompatible.",
  ZERO_MATRIX_DETERMINANT: (method: string = "") =>
    `Zero determinant: The matrix has a determinant of zero, and therefore does not have an ${method}.`,
  INVALID_ROTATE_ANGLE:
    "Invalid rotate angle: The angle required to be a multiples of 90 degrees.",
  INDEX_OUT_OF_RANGE:
    "Index out of range: The indexes provided are out of range.",
};
