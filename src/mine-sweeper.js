const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if (!matrix || !matrix.length) return [];
  const w = matrix[0].length;
  const h = matrix.length;
  const res = new Array(h);
  for (let k = 0; k < h; k += 1) {
    res[k] = new Array(w).fill(0);
  }

  console.log('RES: ', res);

  for (let i = 0; i < w; i += 1) {
    for (let k = 0; k < h; k += 1) {
      console.log('MATRIX: ', matrix[k][i], k, i);
      let count = 0;
      if (k - 1 > -1) {
        if (i - 1 > -1 && matrix[k - 1][i - 1]) {
          count += 1;
        }
        if (matrix[k - 1][i]) {
          count += 1;
        }
        if (i + 1 < w && matrix[k - 1][i + 1]) {
          count += 1;
        }
      }
      if (i - 1 > -1 && matrix[k][i - 1]) {
        count += 1;
      }
      if (i + 1 < w && matrix[k][i + 1]) {
        count += 1;
      }
      if (k + 1 < h) {
        if (i - 1 > -1 && matrix[k + 1][i - 1]) {
          count += 1;
        }
        if (matrix[k + 1][i]) {
          count += 1;
        }
        if (i + 1 < w && matrix[k + 1][i + 1]) {
          count += 1;
        }
      }
      console.log('COUNT:', count);
      res[k][i] = count;
      console.log('RES: ', res);
    }
  }
  return res;
}

module.exports = {
  minesweeper,
};
