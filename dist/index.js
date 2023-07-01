var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
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
class Matrix {
  // ─── CONSTRUCTOR ─────────────────────────────────────────────────────────────────
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
  constructor(rows, columns, data) {
    // ─── PROPERTIES ─────────────────────────────────────────────────────────────────
    __publicField(this, "_rows");
    __publicField(this, "_columns");
    __publicField(this, "_data");
    if (rows === void 0 && columns === void 0 && data === void 0) {
      this._initializeMatrix(1, 1, [[0]]);
    } else if (rows !== void 0 && typeof rows === "number") {
      if (Array.isArray(columns) && data === void 0) {
        this._initializeMatrix(rows, rows, columns);
      } else if (columns !== void 0 && typeof columns === "number") {
        if (Array.isArray(data)) {
          this._initializeMatrix(rows, columns, data);
        } else {
          this._initializeMatrix(rows, columns, []);
        }
      } else {
        this._initializeMatrix(rows, rows, []);
      }
    } else if (Array.isArray(rows) && columns === void 0 && data === void 0) {
      this._initializeMatrix(rows.length, rows[0].length, rows);
    } else {
      handleError(ERROR_MESSAGES.INVALID_ARGUMENTS);
    }
  }
  // ─── ACCESSORS AND MUTATORS ─────────────────────────────────────────────────────────────
  /**
   * Gets the rows of the matrix.
   *
   * @returns {number} The number of rows in the matrix.
   */
  get rows() {
    return this._rows;
  }
  /**
   * Gets the columns of the matrix.
   *
   * @returns {number} The number of columns in the matrix.
   */
  get columns() {
    return this._columns;
  }
  /**
   * Gets the data of the matrix.
   *
   * @returns {number[][]} The data of the matrix.
   */
  get data() {
    return this._data;
  }
  // ─── PUBLIC METHODS ────────────────────────────────────────────────────────────────
  // ────── Basic Matrix Operations
  /**
   * Gets the shape of the matrix.
   *
   * @returns {number[]} The shape of the matrix.
   * 
   * @example
   * const matrix = new Matrix(2, 3);
   * matrix.shape(); // [2, 3]
   */
  shape() {
    return [this._rows, this._columns];
  }
  /**
   * Gets the size of the matrix.
   *
   * @returns {number} The size of the matrix.
   * 
   * @example
   * const matrix = new Matrix(2, 3);
   * matrix.size(); // 6
   */
  size() {
    return this._rows * this._columns;
  }
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
  at(row, column) {
    this._isOutOfBounds(row, column);
    return this._data[row][column];
  }
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
  set(row, column, value) {
    this._isOutOfBounds(row, column);
    this._data[row][column] = value;
  }
  /**
   * Reset the matrix to all zeroes.
   *
   * @returns {Matrix} Returns the matrix with all zeroes.
   *
   * @example
   * const matrix = new Matrix(2, 3, [[1, 2, 3], [4, 5, 6]]);
   * matrix.reset();
   */
  reset() {
    this._data = this._data.map((row) => row.map(() => 0));
  }
  /**
   * Creates a clone of the matrix.
   *
   * @returns {Matrix} Returns a new matrix that is a clone of the current matrix.
   *
   * @example
   * const matrix = new Matrix(2, 3, [[1, 2, 3], [4, 5, 6]]);
   * const clonedMatrix = matrix.clone();
   */
  clone() {
    return new Matrix(this._rows, this._columns, this._data);
  }
  /**
   * Sets the data of the matrix
   * @description Sets the data of the matrix. If the data provided does not match the dimensions of the matrix, an error will be thrown.
   * If the override flag is set to true, the dimensions of the matrix will be changed to match the data provided.
   *
   * @param {number[][]} data - The data to set.
   * @param {boolean} [override=false] - Whether to override the dimensions of the matrix.
   */
  setData(data, override) {
    if (!override) {
      handleError(
        ERROR_MESSAGES.MATRIX_DIMENSION_MISMATCH(),
        data.length !== this._rows || data[0].length !== this._columns
      );
    } else {
      this._rows = data.length;
      this._columns = data[0].length;
    }
    this._data = [...data];
  }
  // ────── Matrix Arithmetic Operations
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
  add(matrix) {
    handleError(
      ERROR_MESSAGES.MATRIX_DIMENSION_MISMATCH("addition"),
      !this.isSameOrder(matrix)
    );
    const result = Array.from(
      { length: this._rows },
      (_, i) => Array.from(
        { length: this._columns },
        (_2, j) => this.at(i, j) + matrix.at(i, j)
      )
    );
    return new Matrix(this._rows, this._columns, result);
  }
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
  subtract(matrix) {
    handleError(
      ERROR_MESSAGES.MATRIX_DIMENSION_MISMATCH("subtraction"),
      !this.isSameOrder(matrix)
    );
    const result = Array.from(
      { length: this._rows },
      (_, i) => Array.from(
        { length: this._columns },
        (_2, j) => this.at(i, j) - matrix.at(i, j)
      )
    );
    return new Matrix(this._rows, this._columns, result);
  }
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
  multiply(matrixOrScalar) {
    if (typeof matrixOrScalar === "number") {
      const result = this._data.map(
        (row) => row.map((value) => value * matrixOrScalar)
      );
      return new Matrix(this._rows, this._columns, result);
    } else {
      handleError(
        ERROR_MESSAGES.MATRIX_DIMENSION_MISMATCH("multiplication"),
        this._columns !== matrixOrScalar.rows
      );
      const result = Array.from(
        { length: this._rows },
        (_, i) => Array.from(
          { length: matrixOrScalar.columns },
          (_2, j) => this._data[i].reduce(
            (sum, value, k) => sum + value * matrixOrScalar.at(k, j),
            0
          )
        )
      );
      return new Matrix(this._rows, matrixOrScalar.columns, result);
    }
  }
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
  modulo(modulo) {
    const result = this._data.map(
      (row) => row.map((value) => value % modulo)
    );
    return new Matrix(this._rows, this._columns, result);
  }
  // ────── Matrix Properties and Characteristics
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
  isSquare() {
    return this._rows === this._columns;
  }
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
  isSymmetric() {
    return !this.isSquare() ? false : this.equals(this.transpose());
  }
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
  isIdentity() {
    if (!this.isSquare()) {
      return false;
    }
    return this._data.every(
      (row, i) => row.every((value, j) => i === j ? value === 1 : value === 0)
    );
  }
  /**
   * Sets the shape of the matrix and initializes it with zeroes.
   *
   * @param {number[]} shape - The shape of the matrix.
   * @throws {Error} Invalid shape provided.
   */
  setShape(shape) {
    handleError(ERROR_MESSAGES.MATRIX_SHAPE_MISMATCH, shape.length !== 2);
    this._initializeMatrix(shape[0], shape[1], []);
  }
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
  setAsIdentity() {
    handleError(ERROR_MESSAGES.NON_SQUARE_MATRIX, !this.isSquare());
    this._data = this._data.map(
      (row, i) => row.map((_, j) => i === j ? 1 : 0)
    );
    return;
  }
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
  transpose() {
    const result = Array.from(
      { length: this._columns },
      (_, i) => this._data.reduce((column, row) => {
        column.push(row[i]);
        return column;
      }, [])
    );
    return new Matrix(this._columns, this._rows, result);
  }
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
  determinant() {
    handleError(ERROR_MESSAGES.NON_SQUARE_MATRIX, !this.isSquare());
    if (this._rows === 1) {
      return this.at(0, 0);
    } else if (this._rows === 2) {
      return this.at(0, 0) * this.at(1, 1) - this.at(0, 1) * this.at(1, 0);
    } else {
      let determinant = this._data[0].reduce(
        (sum, value, i) => sum + value * this.getCofactor(0, i),
        0
      );
      return determinant;
    }
  }
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
  getCofactor(row, column) {
    const minor = this.getMinor(row, column);
    return Math.pow(-1, row + column) * minor.determinant();
  }
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
  getMinor(row, column) {
    let result = this._data.filter((_, i) => i !== row).map((v) => v.filter((_, j) => j !== column));
    return new Matrix(result.length, result[0].length, result);
  }
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
  trace() {
    handleError(ERROR_MESSAGES.NON_SQUARE_MATRIX, !this.isSquare());
    let trace = Array.from(
      { length: this._rows },
      (_, i) => this.at(i, i)
    ).reduce((sum, current) => sum + current, 0);
    return trace;
  }
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
  inverse() {
    handleError(ERROR_MESSAGES.NON_SQUARE_MATRIX, !this.isSquare());
    const determinant = this.determinant();
    handleError(ERROR_MESSAGES.ZERO_MATRIX_DETERMINANT("inverse"), determinant === 0);
    const result = this._data.map(
      (v, i) => v.map((_, j) => this.getCofactor(i, j) / determinant)
    );
    return new Matrix(this._rows, this._columns, result).transpose();
  }
  // ────── Vector Spaces
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
  rowSpace() {
    const result = this._data.map((v) => v.slice());
    return new Matrix(this._rows, this._columns, result);
  }
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
  colSpace() {
    const result = this._data[0].map(
      (_, i) => this._data.map((v) => v[i])
    );
    return new Matrix(this._columns, this._rows, result);
  }
  // ────── Linear Transformations
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
  rotate(angle) {
    let angleInDegrees = Math.abs(angle) <= Math.PI ? angle * (180 / Math.PI) : angle;
    handleError(ERROR_MESSAGES.INVALID_ROTATE_ANGLE, angleInDegrees % 90 !== 0);
    const numberOfRotations = (angleInDegrees % 360 + 360) % 360 / 90;
    let result = this._data;
    for (let i = 0; i < numberOfRotations; i++) {
      result = rotate90DegreesClockwise(result);
    }
    return new Matrix(this._rows, this._columns, result);
  }
  // ────── Matrix Analysis Operations
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
  isSameOrder(matrix) {
    return this._rows === matrix.rows && this._columns === matrix.columns;
  }
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
  equals(matrix) {
    if (!this.isSameOrder(matrix)) {
      return false;
    }
    return this._data.every(
      (v, i) => v.every((_, j) => this.at(i, j) === matrix.at(i, j))
    );
  }
  // ─── PRIVATE METHODS ────────────────────────────────────────────────────────────────
  /** Retrieves the null space of the matrix.
   * @description Checks if the specified row and column indices are within the matrix boundaries.
   *
   * @param {number} row - The row index.
   * @param {number} column - The column index.
   * @throws {Error} Throws an error if the indices are out of bounds.
   *
   * @private
   */
  _isOutOfBounds(row, column) {
    handleError(
      ERROR_MESSAGES.INDEX_OUT_OF_RANGE,
      row < 0 || row >= this._rows || column < 0 || column >= this._columns
    );
  }
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
  _initializeMatrix(rows, columns, data) {
    this._rows = rows;
    this._columns = columns;
    this._data = data.length === rows && data[0].length === columns ? data : Array.from({ length: rows }, () => Array(columns).fill(0));
  }
}
function rotate90DegreesClockwise(array) {
  const result = [];
  for (let i = 0; i < array[0].length; i++) {
    result.push([]);
    for (let j = array.length - 1; j >= 0; j--) {
      result[i].push(array[j][i]);
    }
  }
  return result;
}
function handleError(msg, expression = true) {
  if (expression) {
    throw new Error(msg);
  }
}
const ERROR_MESSAGES = {
  INVALID_ARGUMENTS: "Invalid arguments provided",
  MATRIX_DIMENSION_MISMATCH: (method = "") => {
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
  NON_SQUARE_MATRIX: "Non-square matrix: The operation requires a square matrix.",
  MATRIX_SHAPE_MISMATCH: "Matrix shape mismatch: The dimensions of the matrices are incompatible.",
  ZERO_MATRIX_DETERMINANT: (method = "") => `Zero determinant: The matrix has a determinant of zero, and therefore does not have an ${method}.`,
  INVALID_ROTATE_ANGLE: "Invalid rotate angle: The angle required to be a multiples of 90 degrees.",
  INDEX_OUT_OF_RANGE: "Index out of range: The indexes provided are out of range."
};
export {
  Matrix,
  ERROR_MESSAGES as e,
  handleError,
  rotate90DegreesClockwise
};
