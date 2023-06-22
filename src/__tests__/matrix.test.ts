import { describe, it, expect, beforeEach } from "vitest";
import { e, Matrix } from "../lib";

/**
 * Test suite for "Matrix" class
 */
describe("Matrix", () => {
  let matrix: Matrix;

  beforeEach(() => {
    matrix = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });

  // ─── CONSTRUCTOR ─────────────────────────────────────────────────────────────

  /**
   * Test the constructor
   */
  describe("constructor", () => {
    it("should create a matrix with specified dimensions and default values", () => {
      matrix = new Matrix(3, 3);
      expect(matrix.data).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });

    it("should create a matrix with specified dimensions and data", () => {
      const data = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      matrix = new Matrix(3, 3, data);
      expect(matrix.rows).toBe(3);
      expect(matrix.columns).toBe(3);
      expect(matrix.data).toEqual(data);
    });

    it("should create a matrix without specified dimensions and data", () => {
      const data = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      matrix = new Matrix(data);
      expect(matrix.rows).toBe(3);
      expect(matrix.columns).toBe(3);
      expect(matrix.data).toEqual(data);
    });

    it("should create a matrix with n-dimension and data", () => {
      const data = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      matrix = new Matrix(3, data);
      expect(matrix.rows).toBe(3);
      expect(matrix.columns).toBe(3);
      expect(matrix.data).toEqual(data);
    });

    it("should create a matrix with n-dimension and default values", () => {
      matrix = new Matrix(3);
      expect(matrix.rows).toBe(3);
      expect(matrix.columns).toBe(3);
      expect(matrix.data).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });
  });

  // ─── ACCESSORS AND MUTATORS ─────────────────────────────────────────────────────────────

  /**
   * Test the "rows" getter
   */
  describe("rows", () => {
    it("should return the number of rows", () => {
      expect(matrix.rows).toBe(3);
    });
  });

  /**
   * Test the "columns" getter
   */
  describe("columns", () => {
    it("should return the number of columns", () => {
      expect(matrix.columns).toBe(3);
    });
  });

  /**
   * Test the "data" getter
   */
  describe("data", () => {
    it("should return the matrix data", () => {
      expect(matrix.data).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
    });
  });

  /**
   * Test the "shape" getter
   */
  describe("shape", () => {
    it("should return the shape of the matrix", () => {
      expect(matrix.shape).toEqual([3, 3]);
    });
  });

  /**
   * Test the "size" getter
   */
  describe("size", () => {
    it("should return the total number of elements in the matrix", () => {
      expect(matrix.size).toBe(9);
    });
  });

  // ─── PUBLIC METHODS ─────────────────────────────────────────────────────────────

  /**
   * Test the "setShape" method
   */
  describe("setShape", () => {
    it("should return the shape of the matrix", () => {
      matrix.setShape([5, 5]);
      expect(matrix.shape).toEqual([5, 5]);
    });
  });

  /**
   * Test the "at" mehtod
   */
  describe("at", () => {
    it("should return the value at the specified row and column", () => {
      expect(matrix.at(0, 1)).toBe(2);
      expect(matrix.at(1, 2)).toBe(6);
      expect(matrix.at(2, 0)).toBe(7);
    });

    it("should throw an error if the row or column is out of bounds", () => {
      expect(() => matrix.at(3, 0)).toThrowError(e.INDEX_OUT_OF_RANGE);
      expect(() => matrix.at(0, 3)).toThrowError(e.INDEX_OUT_OF_RANGE);
    });
  });

  /**
   * Test the "set" method
   */
  describe("set", () => {
    it("should set the value at the specified row and column", () => {
      matrix.set(0, 1, 10);
      expect(matrix.data[0][1]).toBe(10);
      matrix.set(2, 2, -5);
      expect(matrix.data[2][2]).toBe(-5);
    });

    it("should throw an error if the row or column is out of bounds", () => {
      expect(() => matrix.set(3, 0, 1)).toThrowError(e.INDEX_OUT_OF_RANGE);
      expect(() => matrix.set(0, 3, 2)).toThrowError(e.INDEX_OUT_OF_RANGE);
    });
  });

  /**
   * Test the "reset" method
   */
  describe("reset", () => {
    it("should reset all matrix values to 0", () => {
      matrix.reset();
      expect(matrix.data).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });
  });

  /**
   * Test the "clone" method
   */
  describe("clone", () => {
    it("should create a copy of the matrix", () => {
      const cloneMatrix = matrix.clone();
      expect(cloneMatrix).toEqual(matrix);
      expect(cloneMatrix).not.toBe(matrix);
    });
  });

  /**
   * Test the "setData" method
   */
  describe("setData", () => {
    it("should set the matrix data", () => {
      const data = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      matrix.setData(data, true);
      expect(matrix.data).toEqual(data);
    });

    it("should set the matrix data", () => {
      const data = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      expect(() => matrix.setData(data)).toThrowError(
        e.MATRIX_DIMENSION_MISMATCH()
      );
    });

    it("should set the matrix data", () => {
      const data = [
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1],
      ];
      matrix.setData(data);
      expect(matrix.data).toEqual(data);
    });
  });

  /**
   * Test the "add" method
   */
  describe("add", () => {
    it("should add two matrices element-wise", () => {
      const otherMatrix = new Matrix([
        [2, 4, 6],
        [8, 10, 12],
        [14, 16, 18],
      ]);
      const result = matrix.add(otherMatrix);
      expect(result.data).toEqual([
        [3, 6, 9],
        [12, 15, 18],
        [21, 24, 27],
      ]);
    });

    it("should throw an error if the matrices have different shapes", () => {
      const otherMatrix = new Matrix([
        [1, 2],
        [3, 4],
      ]);
      expect(() => matrix.add(otherMatrix)).toThrowError(
        e.MATRIX_DIMENSION_MISMATCH("addition")
      );
    });
  });

  /**
   * Test the "subtract" method
   */
  describe("subtract", () => {
    it("should subtract two matrices element-wise", () => {
      const otherMatrix = new Matrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      const result = matrix.subtract(otherMatrix);
      expect(result.data).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });

    it("should throw an error if the matrices have different shapes", () => {
      const otherMatrix = new Matrix([
        [1, 2],
        [3, 4],
      ]);
      expect(() => matrix.subtract(otherMatrix)).toThrowError(
        e.MATRIX_DIMENSION_MISMATCH("subtraction")
      );
    });
  });

  /**
   * Test the "multiply" method
   */
  describe("multiply", () => {
    it("should multiply the matrix by a scalar", () => {
      const scalar = 2;
      const result = matrix.multiply(scalar);
      expect(result.data).toEqual([
        [2, 4, 6],
        [8, 10, 12],
        [14, 16, 18],
      ]);
    });

    it("should multiply two matrices", () => {
      const otherMatrix = new Matrix([
        [2, 3],
        [4, 5],
        [6, 7],
      ]);
      const result = matrix.multiply(otherMatrix);
      expect(result.data).toEqual([
        [28, 34],
        [64, 79],
        [100, 124],
      ]);
    });

    it("should throw an error if the matrices have incompatible shapes", () => {
      const otherMatrix = new Matrix([
        [1, 2],
        [3, 4],
      ]);
      expect(() => matrix.multiply(otherMatrix)).toThrowError(
        e.MATRIX_DIMENSION_MISMATCH("multiplication")
      );
    });
  });

  /**
   * Test the "modulo" method
   */
  describe("modulo", () => {
    it("should perform modulo operation on the matrix elements", () => {
      const modulo = 5;
      const result = matrix.modulo(modulo);
      expect(result.data).toEqual([
        [1, 2, 3],
        [4, 0, 1],
        [2, 3, 4],
      ]);
    });
  });

  /**
   * Test the "isSquare" method
   */
  describe("isSquare", () => {
    it("should return true for a square matrix", () => {
      expect(matrix.isSquare()).toBe(true);
    });
  });

  /**
   * Test the "isSymmetric" method
   */
  describe("isSymmetric", () => {
    it("should return false for a non-symmetric matrix", () => {
      expect(matrix.isSymmetric()).toBe(false);
    });
  });

  /**
   * Test the "isIdentity" method
   */
  describe("isIdentity", () => {
    it("should return false for a non-identity matrix", () => {
      expect(matrix.isIdentity()).toBe(false);
    });
  });

  /**
   * Test the "setAsIdentity" method
   */
  describe("setAsIdentity", () => {
    it("should set the matrix as an identity matrix", () => {
      matrix.setAsIdentity();
      expect(matrix.data).toEqual([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]);
    });
  });

  /**
   * Test the "transpose" method
   */
  describe("transpose", () => {
    it("should transpose the matrix", () => {
      matrix = new Matrix([
        [1, 2, 3],
        [4, 5, 6],
      ]);
      const result = matrix.transpose();

      expect(result.data).toEqual([
        [1, 4],
        [2, 5],
        [3, 6],
      ]);
    });
  });

  /**
   * Test the "determinant" method
   */
  describe("determinant", () => {
    it("should return the determinant of the matrix", () => {
      matrix = new Matrix([
        [2, 4, 1, 3],
        [0, 1, 3, 2],
        [-1, 0, 2, -1],
        [3, 1, -2, 4],
      ]);
      expect(matrix.determinant()).toBe(14);
    });
  });

  /**
   * Test the "getCofactor" method
   */
  describe("getCofactor", () => {
    it("should calculate the cofactor of a position", () => {
      matrix = new Matrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      const cofactor = matrix.getCofactor(0, 0);
      expect(cofactor).toBe(-3);
    });
  });

  /**
   * Test the "getMinor" method
   */
  describe("getMinor", () => {
    it("should get the minor matrix of a position", () => {
      matrix = new Matrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      const minor = matrix.getMinor(1, 1);
      expect(minor.data).toEqual([
        [1, 3],
        [7, 9],
      ]);
    });
  });

  /**
   * Test the "trace" method
   */
  describe("trace", () => {
    it("should return the trace of the matrix", () => {
      const trace = matrix.trace();
      expect(trace).toBe(15);
    });

    it("should throw an error for non-square matrices", () => {
      const nonSquareMatrix = new Matrix([
        [1, 2],
        [3, 4],
        [5, 6],
      ]);
      expect(() => nonSquareMatrix.trace()).toThrowError(e.NON_SQUARE_MATRIX);
    });
  });

  /**
   * Test the "inverse" method
   */
  describe("inverse", () => {
    it(`should get the inverse matrix of a matrix`, () => {
      let m = new Matrix(2, 2);
      m.setData([
        [1, 2],
        [3, 4],
      ]);
      const inverse = m.inverse();
      expect(inverse.data).toEqual([
        [-2, 1],
        [1.5, -0.5],
      ]);
    });

    it("should throw an error for non-square matrices", () => {
      const nonSquareMatrix = new Matrix([
        [1, 2],
        [3, 4],
        [5, 6],
      ]);
      expect(() => nonSquareMatrix.inverse()).toThrowError(e.NON_SQUARE_MATRIX);
    });

    it("should throw an error if the matrix is not invertible", () => {
      const nonInvertibleMatrix = new Matrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      expect(() => nonInvertibleMatrix.inverse()).toThrowError(
        e.ZERO_MATRIX_DETERMINANT("inverse")
      );
    });
  });

  /**
   * Test the "rowSpace" method
   */
  describe("rowSpace", () => {
    it("should return the row space of the matrix", () => {
      const rowSpace = matrix.rowSpace();
      expect(rowSpace.data).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
    });
  });

  /**
   * Test the "colSpace" method
   */
  describe("colSpace", () => {
    it("should return the column space of the matrix", () => {
      const columnSpace = matrix.colSpace();
      expect(columnSpace.data).toEqual([
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ]);
    });
  });

  /**
   * Test the "rotate" method
   */
  describe("rotate", () => {
    it("should rotate the matrix by the specified angle", () => {
      const rotated = matrix.rotate(Math.PI / 2);
      expect(rotated.data).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ]);
    });

    it("should rotate the matrix by the specified angle", () => {
      const rotated = matrix.rotate(180);
      expect(rotated.data).toEqual([
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1],
      ]);
    });

    it("should rotate the matrix by the specified angle", () => {
      const rotated = matrix.rotate(270);
      expect(rotated.data).toEqual([
        [3, 6, 9],
        [2, 5, 8],
        [1, 4, 7],
      ]);
    });

    it("should rotate the matrix by the specified angle", () => {
      const rotated = matrix.rotate(360);
      expect(rotated.data).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
    });

    it("should rotate the matrix by the specified angle", () => {
      const rotated = matrix.rotate(450);
      expect(rotated.data).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ]);
    });

    it("should rotate the matrix by the specified angle", () => {
      const rotated = matrix.rotate(540);
      expect(rotated.data).toEqual([
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1],
      ]);
    });
  });

  /**
   * Test the "isSameOrder" method
   */
  describe("isSameOrder", () => {
    it("should return true if the matrices have the same shape", () => {
      const otherMatrix = new Matrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      expect(matrix.isSameOrder(otherMatrix)).toBe(true);
    });

    it("should return false if the matrices have different shapes", () => {
      const otherMatrix = new Matrix([
        [1, 2],
        [3, 4],
      ]);
      expect(matrix.isSameOrder(otherMatrix)).toBe(false);
    });
  });

  /**
   * Test the "equals" method
   */
  describe("equals", () => {
    it("should return true if two matrices are equal", () => {
      const otherMatrix = new Matrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      expect(matrix.equals(otherMatrix)).toBe(true);
    });

    it("should return false if two matrices are not equal", () => {
      const otherMatrix = new Matrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0],
      ]);
      expect(matrix.equals(otherMatrix)).toBe(false);
    });
  });
});
