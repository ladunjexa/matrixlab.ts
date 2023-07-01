<div align="center">
<h1>matrixlab.ts</h1>
<p>A TypeScript matrix math library</p>

[![ladunjexa](https://custom-icon-badges.demolab.com/badge/made%20by%20-ladunjexa-556bf2?style=flat-square&logo=github&logoColor=white&labelColor=101827)](https://github.com/ladunjexa) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ladunjexa/matrixlab.ts/blob/master/LICENSE) [![Deploy
  Status](https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg)](https://github.com/ladunjexa/matrixlab.ts/actions?query=workflow%3ADeploy) [![npm version](https://img.shields.io/npm/v/matrixlab.ts.svg?style=flat)](https://www.npmjs.com/package/matrixlab.ts) [![matrixlab](https://img.shields.io/static/v1?label=typescript&message=matrixlab&color=007acc&logo=typescript&link=https://www.npmjs.com/package/matrixlab.ts)](https://www.npmjs.com/package/matrixlab.ts) [![Maintained](https://img.shields.io/badge/Maintained%3F-Yes-pink.svg)](https://github.com/ladunjexa/matrixlab.ts) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/ladunjexa/matrixlab.ts/blob/master/CONTRIBUTING.md)

</div>

`matrixlab.ts` is a matrix math library written in TypeScript with _no dependencies_.

## How to install it

Using `npm`

```bash
npm install --save matrixlab.ts
```

Or add the [unpkg](https://unpkg.com/) cdn link to your html

```html
<script src="https://unpkg.com/matrixlab.ts">
```

## Usage

Import the module, from TypeScript or ES6 JavaScript

```javascript
import { Matrix } from "matrixlab.ts";
```

The library is built as an ECMAScript module (`.mjs` file), but it also exports a UMD version if needed.

Then use the methods as you want

```javascript
const m1 = new Matrix(2, 2, [
  [1, 2],
  [3, 4],
]);
m1.multiply(2);
// ==>
// Matrix {
//   rows: 2,
//   cols: 2,
//   values: [ [ 2, 4 ], [ 6, 8 ] ]
// }
m1.set(0, 0, 5);
m1.at(0, 0); // ==> 5
```

---

## Documentation

### Constructor

| constructor                     | description                                                                  |
| ------------------------------- | ---------------------------------------------------------------------------- |
| new Matrix()                    | Creates a 1x1 matrix with zero value                                         |
| new Matrix(n)                   | Creates an _nxn_ matrix with zeroes                                          |
| new Matrix(data)                | Creates a matrix from the specified 2D array                                 |
| new Matrix(rows, columns)       | Creates an _mxn_ matrix with zeroes                                          |
| new Matrix(rows, columns, data) | Creates a matrix from the specified 2D array (with the specified dimensions) |
| new Matrix(n, data)             | Creates an _nxn_ matrix from the specified 2D array                          |

### Accessors and Mutators

| member  | description                                   |
| ------- | --------------------------------------------- |
| rows    | Retrieves the number of rows in the matrix    |
| columns | Retrieves the number of columns in the matrix |
| data    | Gets the data of the matrix                   |

### Public Methods

| method                    | description                                                            |
| ------------------------- | ---------------------------------------------------------------------- |
| shape                     | Gets the shape of the matrix                                           |
| size                      | Gets the size of the matrix                                            |
| set(row, column, value)   | Sets the value at the specified row and column indices                 |
| at(row, column)           | Retrieves the value at the specified row and column indices            |
| reset()                   | Sets all matrix values to 0                                            |
| clone()                   | Returns a new instance of the matrix                                   |
| setData(array)            | Copies data from the specified 2D array to the matrix                  |
| add(matrix)               | Adds the specified matrix to the current matrix                        |
| subtract(matrix)          | Subtracts the specified matrix from the current matrix                 |
| multiply(Matrix / Scalar) | Multiplies the current matrix by the specified matrix or scalar        |
| modulo(modulus)           | Modulos the current matrix by the specified modulus                    |
| isSquare()                | Checks if the matrix is square                                         |
| isSymmetric()             | Checks if the matrix is symmetric                                      |
| isIdentity()              | Checks if the matrix is identity                                       |
| setShape(array)           | Sets the shape of the matrix                                           |
| setAsIdentity()           | Sets the matrix as an identity matrix                                  |
| transpose()               | Transposes the matrix                                                  |
| determinant()             | Calculates the determinant of the matrix                               |
| getCofactor(row, column)  | Calculates the cofactor of the matrix for the specified row and column |
| getMinor(row, column)     | Calculates the minor of the matrix for the specified row and column    |
| trace()                   | Calculates the trace of the matrix                                     |
| inverse()                 | Calculates the inverse of the matrix                                   |
| rowSpace()                | Calculates the row space of the matrix                                 |
| colSpace()                | Calculates the column space of the matrix                              |
| isSameOrder(matrix)       | Checks if the matrix has the same order as the specified matrix        |
| equals()                  | Checks if the matrix is equal to the specified matrix                  |

### Private Methods

| method                    | description                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| \_isOutOfMatrix(row, col) | Checks if the specified row and column indices are out of the matrix's bounds |
| \_initializeMatrix()      | Initializes the matrix with the specified dimensions and data                 |

For more information, please refer to the [_Matrix_ Class documentation](https://ladunjexa.github.io/matrixlab.ts/Matrix.html)

# Contributing

<a href="https://github.com/ladunjexa/matrixlab.ts/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ladunjexa/matrixlab.ts" />
</a>

Contributions are always welcome!

See [`contributing.md`](https://contributing.md/) for ways to get started.

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

# License

The _MatrixLab_ is open source and distributed under the [MIT License](LICENSE).

# Contact

If you want to contact me, you can reach me at [@ladunjexa](https://t.me/ladunjexa).
