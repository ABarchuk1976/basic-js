const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  if (!matrix || !matrix.length) return res;

  for (let i = 0; i < matrix[0]?.length; i += 1) {
    for (let k = 0; k < matrix.length; k += 1) {
      const current = matrix[k][i];
      if (!current) break;
      res += current;
    }
  }

  return res;
}

module.exports = {
  getMatrixElementsSum,
};
