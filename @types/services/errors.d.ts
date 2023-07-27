/**
 * @namespace Services
 * @description A collection of services.
 */
/**
 * @private
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
export declare function handleError(msg: string, expression?: any): void;
/**
 * @private
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
export declare const ERROR_MESSAGES: {
    INVALID_ARGUMENTS: string;
    MATRIX_DIMENSION_MISMATCH: (method?: string) => "Matrix dimension mismatch: The number of columns in the first matrix must be equal to the number of rows" | "Matrix dimension mismatch: The matrices must have the same dimensions (n x m)." | "Matrix dimensions mismatch: The matrices must have compatible dimensions for this operation.";
    NON_SQUARE_MATRIX: string;
    MATRIX_SHAPE_MISMATCH: string;
    ZERO_MATRIX_DETERMINANT: (method?: string) => string;
    INVALID_ROTATE_ANGLE: string;
    INDEX_OUT_OF_RANGE: string;
};
