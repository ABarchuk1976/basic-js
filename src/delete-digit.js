const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');

  return arr.reduce((acc, current, idx) => {
    const arrN = [...arr];
    arrN.splice(idx, 1);
    const num = Number(arrN.join(''));
    acc = num > acc ? num : acc;

    return acc;
  }, 0);
}

module.exports = {
  deleteDigit,
};
