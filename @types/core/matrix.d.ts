/**
 * @class Matrix
 * @classdesc A TypeScript matrix math library for matrix operations and calculations.
 *
 * @property {number} rows - The number of rows in the matrix.
 * @property {number} columns - The number of columns in the matrix.
 * @property {number[][]} data - The data of the matrix.
 *
 * @version 1.0.0
 * @author Liron Abutbul (ladunjexa)
 * @license MIT
 * @see {@link https://en.wikipedia.org/wiki/Matrix_(mathematics)|Matrix (Wikipedia)}
 */
export default class Matrix {
    private _rows;
    private _columns;
    private _data;
    /**
     * Creates an instance of matrix with the specified number of rows and columns, initialized with the provided data or with zeroes.
     *
     * @param {number} rows - The number of rows in the matrix.
     * @param {number} columns - The number of columns in the matrix.
     * @param {number[][]} data - The initial data to populate the matrix (optional).
     *
     * @example
     * // Initialize a 1x1 matrix with zero
     * const matrix = new Matrix();
     *
     * // Initialize a 3x3 matrix with zeroes
     * const matrix = new Matrix(3, 3);
     *
     * // Initialize a 3x3 matrix with provided data
     * const matrix = new Matrix(3, 3, data);
     *
     * // Initialize a 3x3 matrix with provided data
     * const matrix = new Matrix(data);
     *
     * // Initialize a nxn matrix with provided data
     * const matrix = new Matrix(3, data);
     *
     * // Initialize a nxn matrix with zeroes
     * const matrix = new Matrix(3);
     */
    constructor(rows?: number | number[][], columns?: number | number[][], data?: number[][]);
    /**
     * Gets the rows of the matrix.
     *
     * @returns {number} The number of rows in the matrix.
     */
    get rows(): number;
    /**
     * Gets the columns of the matrix.
     *
     * @returns {number} The number of columns in the matrix.
     */
    get columns(): number;
    /**
     * Gets the data of the matrix.
     *
     * @returns {number[][]} The data of the matrix.
     */
    get data(): number[][];
    /**
     * Gets the shape of the matrix.
     *
     * @returns {number[]} The shape of the matrix.
     */
    get shape(): number[];
    /**
     * Gets the size of the matrix.
     *
     * @returns {number} The size of the matrix.
     */
    get size(): number;
    /**
     * Retrieves the value at the specified row and column indices.
     *
     * @param {number} row - The row index.
     * @param {number} column - The column index.
     * @returns {number} Returns the value at the specified indices.
     *
     * @example
     * const matrix = new Matrix(2, 3, [[1, 2, 3], [4, 5, 6]]);
     * matrix.at(0, 0); // 1
     * matrix.at(0, 1); // 2
     */
    at(row: number, column: number): number;
    /**
     * Sets the value at the specified row and column indices.
     *
     * @param {number} row - The row index.
     * @param {number} column - The column index.
     * @param {number} value - The value to set.
     *
     * @example
     * const matrix = new Matrix(2, 3);
     * matrix.set(0, 0, 1);
     * matrix.set(0, 1, 2);
     */
    set(row: number, column: number, value: number): void;
    /**
     * Reset the matrix to all zeroes.
     *
     * @returns {Matrix} Returns the matrix with all zeroes.
     *
     * @example
     * const matrix = new Matrix(2, 3, [[1, 2, 3], [4, 5, 6]]);
     * matrix.reset();
     */
    reset(): void;
    /**
     * Creates a clone of the matrix.
     *
     * @returns {Matrix} Returns a new matrix that is a clone of the current matrix.
     *
     * @example
     * const matrix = new Matrix(2, 3, [[1, 2, 3], [4, 5, 6]]);
     * const clonedMatrix = matrix.clone();
     */
    clone(): Matrix;
    /**
     * Sets the data of the matrix
     * @description Sets the data of the matrix. If the data provided does not match the dimensions of the matrix, an error will be thrown.
     * If the override flag is set to true, the dimensions of the matrix will be changed to match the data provided.
     *
     * @param {number[][]} data - The data to set.
     * @param {boolean} [override=false] - Whether to override the dimensions of the matrix.
     */
    setData(data: number[][], override?: boolean): void;
    /**
     * Adds the specified matrix to the current matrix.
     *
     * @param {Matrix} matrix - The matrix to add.
     * @returns {Matrix} Returns the resulting matrix.
     * @throws {Error} Throws an error if the matrix dimensions are not same.
     *
     * @example
     * const matrix1 = new Matrix(2, 3, [[1, 2, 3], [4, 5, 6]]);
     * const matrix2 = new Matrix(2, 3, [[1, 2, 3], [4, 5, 6]]);
     * matrix1.add(matrix2); // [[2, 4, 6], [8, 10, 12]]
     *
     * @see {@link https://en.wikipedia.org/wiki/Matrix_addition}
     */
    add(matrix: Matrix): Matrix;
    /**
     * Subtracts the specified matrix from the current matrix.
     *
     * @param {Matrix} matrix - The matrix to subtract.
     * @returns {Matrix} Returns the resulting matrix.
     * @throws {Error} Throws an error if the matrix dimensions are not same.
     *
     * @example
     * const matrix1 = new Matrix(2, 3, [[1, 2, 3], [4, 5, 6]]);
     * const matrix2 = new Matrix(2, 3, [[1, 2, 3], [4, 5, 6]]);
     * matrix1.subtract(matrix2); // [[0, 0, 0], [0, 0, 0]]
     *
     * @see {@link https://en.wikipedia.org/wiki/Matrix_addition}
     */
    subtract(matrix: Matrix): Matrix;
    /**
     * Multiplies the current matrix with the specified matrix or scalar.
     * If the specified value is a scalar, it is multiplied with each element of the matrix.
     * If the specified value is a matrix, it is multiplied with the current matrix.
     *
     * @param {Matrix | number} matrixOrScalar - The matrix or scalar to multiply with.
     * @returns {Matrix} Returns the resulting matrix.
     * @throws {Error} Throws an error if the matrix dimensions are not compatible.
     *
     * @example
     * const matrix1 = new Matrix(2, 3, [[1, 2, 3], [4, 5, 6]]);
     * const matrix2 = new Matrix(3, 2, [[1, 2], [3, 4], [5, 6]]);
     * matrix1.multiply(matrix2); // [[22, 28], [49, 64]]
     * matrix1.multiply(2); // [[2, 4, 6], [8, 10, 12]]
     *
     * @see {@link https://en.wikipedia.org/wiki/Matrix_multiplication}
     * @see {@link https://en.wikipedia.org/wiki/Scalar_multiplication}
     */
    multiply(matrixOrScalar: Matrix | number): Matrix;
    /**
     * Applies the modulo operation to each element in the matrix.
     *
     * @param {number} modulo - The modulo to apply.
     * @returns {Matrix} Returns the matrix with the modulo applied.
     *
     * @description
     * This method performs the modulo operation on each element of the matrix,
     * using the specified modulo value. The modulo operation calculates the
     * remainder when dividing each element by the modulo value.
     *
     * @example
     * const matrix = new Matrix(2, 2, [
     *  [1, 2],
     *  [3, 4]
     * ]);
     * matrix.modulo(3);
     * // => Matrix {
     * //  rows: 2,
     * //  columns: 2,
     * //  data: [
     * //    [ 1, 2 ],
     * //    [ 0, 1 ]
     * //  ]
     * // }
     *
     * @see {@link https://en.wikipedia.org/wiki/Modulo_operation}
     */
    modulo(modulo: number): Matrix;
    /**
     * Checks if the matrix is square.
     *
     * @returns {boolean} Returns `true` if the matrix is square, `false` otherwise.
     *
     * @example
     * const matrix = new Matrix(3, 3, [
     *  [1, 2, 3],
     *  [2, 4, 5],
     *  [3, 5, 6]
     * ]);
     * matrix.isSquare(); // true
     *
     * @see {@link https://en.wikipedia.org/wiki/Square_matrix}
     */
    isSquare(): boolean;
    /**
     * Checks if the matrix is symmetric.
     *
     * @returns {boolean} Returns `true` if the matrix is symmetric, `false` otherwise.
     *
     * @example
     * const matrix = new Matrix(3, 3, [
     *  [1, 2, 3],
     *  [2, 4, 5],
     *  [3, 5, 6]
     * ]);
     * matrix.isSymmetric(); // true
     *
     * @see {@link https://en.wikipedia.org/wiki/Symmetric_matrix}
     */
    isSymmetric(): boolean;
    /**
     * Checks if the matrix is identity.
     *
     * @description
     * An identity matrix is a square matrix with ones on the main diagonal.
     *
     * @returns {boolean} Returns `true` if the matrix is identity, `false` otherwise.
     *
     * @example
     * const matrix = new Matrix(3, 3, [
     * [1, 0, 0],
     * [0, 1, 0],
     * [0, 0, 1]
     * ]);
     *
     * matrix.isIdentity(); // true
     *
     * @see {@link https://en.wikipedia.org/wiki/Identity_matrix}
     */
    isIdentity(): boolean;
    /**
     * Sets the shape of the matrix and initializes it with zeroes.
     *
     * @param {number[]} shape - The shape of the matrix.
     * @throws {Error} Invalid shape provided.
     */
    setShape(shape: number[]): void;
    /**
     * Sets the matrix as identity matrix.
     * @description An identity matrix is a square matrix with ones on the main diagonal.
     *
     * @throws {Error} Matrix must be square.
     *
     * @example
     * const matrix = new Matrix(3, 3);
     * matrix.setAsIdentity();
     * matrix.data; // [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
     *
     * @see {@link https://en.wikipedia.org/wiki/Identity_matrix}
     */
    setAsIdentity(): void;
    /**
     * Transposes the matrix.
     *
     * @returns {Matrix} Returns the transposed matrix.
     *
     * @example
     * const matrix = new Matrix(2, 3, [
     *  [1, 2, 3],
     *  [4, 5, 6]
     * ]);
     * const result = matrix.transpose();
     * console.log(result);
     *
     * // => Matrix {
     * //  rows: 3,
     * //  columns: 2,
     * //  data: [
     * //    [ 1, 4 ],
     * //    [ 2, 5 ],
     * //    [ 3, 6 ]
     * //  ]
     * // }
     *
     * @see {@link https://en.wikipedia.org/wiki/Transpose}
     */
    transpose(): Matrix;
    /**
     * Calculates the determinant of the matrix.
     *
     * @returns {number} Returns the determinant of the matrix.
     * @throws {Error} Throws an error if the matrix is not square.
     *
     * @example
     * const matrix = new Matrix(3, 3, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
     * const result = matrix.determinant();
     * console.log(result);
     * // => 0
     *
     * @see {@link https://en.wikipedia.org/wiki/Determinant}
     */
    determinant(): number;
    /**
     * Calculates the cofactor of the matrix for the specified row and column.
     *
     * @param {number} row - The row index.
     * @param {number} column - The column index.
     * @returns {number} Returns the cofactor of the matrix for the specified row and column.
     *
     * @example
     * const matrix = new Matrix(3, 3, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
     * const result = matrix.getCofactor(0, 0);
     * console.log(result);
     * // => 0
     *
     * @see {@link https://en.wikipedia.org/wiki/Cofactor_(linear_algebra)}
     */
    getCofactor(row: number, column: number): number;
    /**
     * Calculates the minor of the matrix for the specified row and column.
     *
     * @param {number} row - The row index.
     * @param {number} column - The column index.
     * @returns {Matrix} Returns the minor matrix.
     *
     * @example
     * const matrix = new Matrix(3, 3, [
     *  [1, 2, 3],
     *  [4, 5, 6],
     *  [7, 8, 9]
     * ]);
     * const result = matrix.getMinor(0, 0);
     * console.log(result);
     * // => Matrix {
     * //  rows: 2,
     * //  columns: 2,
     * //  data: [
     * //    [ 5, 6 ],
     * //    [ 8, 9 ]
     * //  ]
     * // }
     *
     * @see {@link https://en.wikipedia.org/wiki/Minor_(linear_algebra)}
     */
    getMinor(row: number, column: number): Matrix;
    /**
     * Calculates the trace of the matrix.
     *
     * @returns {number} Returns the trace of the matrix.
     * @throws {Error} Throws an error if the matrix is not square.
     *
     * @example
     * const matrix = new Matrix(3, 3, [
     *  [1, 2, 3],
     *  [4, 5, 6],
     *  [7, 8, 9]
     * ]);
     *
     * matrix.trace(); // 15
     *
     * @see {@link https://en.wikipedia.org/wiki/Trace_(linear_algebra)}
     */
    trace(): number;
    /**
     * Inverse the matrix.
     *
     * @returns {Matrix} Returns the inverse of the matrix.
     * @throws {Error} Throws an error if the matrix is not square.
     * @throws {Error} Throws an error if the matrix is not invertible.
     *
     * @example
     * const matrix = new Matrix(3, 3, [
     *  [1, 2, 3],
     *  [0, 1, 4],
     *  [5, 6, 0]
     * ]);
     * matrix.inverse();
     * // => Matrix {
     * //  rows: 3,
     * //  columns: 3,
     * //  data: [
     * //    [ -24, 18, 5 ],
     * //    [ 20, -15, -4 ],
     * //    [ -5, 4, 1 ]
     * //  ]
     * // }
     *
     * @see {@link https://en.wikipedia.org/wiki/Invertible_matrix}
     */
    inverse(): Matrix;
    /**
     * Retrieves the row space of the matrix.
     * @description The row space of a matrix is the collection of all linear combinations of its row vectors.
     *
     * @returns {number[][]} The row space of the matrix.
     *
     * @example
     * const matrix = new Matrix(3, 3, [
     *  [1, 2, 3],
     *  [0, 1, 4],
     *  [5, 6, 0]
     * ]);
     * matrix.rowSpace();
     * // => [
     * //  [1, 2, 3],
     * //  [0, 1, 4],
     * //  [5, 6, 0]
     * // ]
     *
     * @see {@link https://en.wikipedia.org/wiki/Row_and_column_spaces}
     */
    rowSpace(): Matrix;
    /**
     * Retrieves the column space of the matrix.
     * @description The column space of a matrix is the collection of all linear combinations of its column vectors.
     *
     * @returns {number[][]} The column space of the matrix.
     *
     * @example
     * const matrix = new Matrix(3, 3, [
     *  [1, 2, 3],
     *  [0, 1, 4],
     *  [5, 6, 0]
     * ]);
     * matrix.colSpace();
     * // => [
     * //  [1, 0, 5],
     * //  [2, 1, 6],
     * //  [3, 4, 0]
     * // ]
     *
     * @see {@link https://en.wikipedia.org/wiki/Row_and_column_spaces}
     */
    colSpace(): Matrix;
    /**
     * Rotate the matrix by a given angle.
     *
     * @param {number} angle - The angle to rotate the matrix by, in radians.
     * @returns {Matrix} Returns the rotated matrix.
     * @throws {Error} Throws an error if the angle is not a multiple of 90 degrees.
     *
     * @example
     * const matrix = new Matrix(2, 2, [
     *  [1, 2],
     *  [3, 4]
     * ]);
     * matrix.rotate(Math.PI / 2);
     *
     * // => Matrix {
     * //  rows: 2,
     * //  columns: 2,
     * //  data: [
     * //    [ 3, 1 ],
     * //    [ 4, 2 ]
     * //  ]
     * // }
     *
     * @see {@link https://en.wikipedia.org/wiki/Rotation_matrix}
     */
    rotate(angle: number): Matrix;
    /**
     * Checks if the matrix has the same order as the specified matrix.
     *
     * @param {Matrix} matrix - The matrix to compare against.
     * @returns {boolean} Returns `true` if the matrices have the same order, `false` otherwise.
     *
     * @example
     * const matrix1 = new Matrix(2, 3, [[1, 2, 3], [4, 5, 6]]);
     * const matrix2 = new Matrix(2, 3, [[7, 8, 9], [10, 11, 12]]);
     * const result = matrix1.isSameOrder(matrix2);
     * console.log(result);
     * // => true
     *
     * @see {@link https://en.wikipedia.org/wiki/Matrix_(mathematics)#Equality_and_inequality}
     */
    isSameOrder(matrix: Matrix): boolean;
    /**
     * Checks if the matrix is equal to another matrix.
     *
     * @param {Matrix} matrix - The matrix to compare.
     * @returns {boolean} Returns true if the matrix is equal to another matrix, false otherwise.
     *
     * @example
     * const matrix = new Matrix(3, 3, [
     *  [1, 2, 3],
     *  [0, 1, 4],
     *  [5, 6, 0]
     * ]);
     * const otherMatrix = new Matrix(3, 3, [
     *  [1, 2, 3],
     *  [0, 1, 4],
     *  [5, 6, 0]
     * ]);
     * matrix.equals(otherMatrix); // true
     */
    equals(matrix: Matrix): boolean;
    /** Retrieves the null space of the matrix.
     * @description Checks if the specified row and column indices are within the matrix boundaries.
     *
     * @param {number} row - The row index.
     * @param {number} column - The column index.
     * @throws {Error} Throws an error if the indices are out of bounds.
     *
     * @private
     */
    private _isOutOfBounds;
    /**
     * Initializes the matrix.
     * @description Checks if the specified row and column indices are within the matrix boundaries.
     * If the data is provided, it is used to initialize the matrix.
     * Otherwise, the matrix is initialized with zeroes.
     *
     * @param {number} rows - The number of rows.
     * @param {number} columns - The number of columns.
     * @param {number[][]} data - The data of the matrix.
     *
     * @private
     */
    private _initializeMatrix;
}
