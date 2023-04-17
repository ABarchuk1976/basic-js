const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw Error("'arr' parameter must be an instance of the Array!");
  const DN = '--double-next';
  const DP = '--double-prev';
  const DIN = '--discard-next';
  const DIP = '--discard-prev';
  const ACTIONS = [DN, DP, DIN, DIP];

  const transformedArr = [];
  let prev;
  let next = false;
  let nextDelete = false;
  arr.forEach((item) => {
    if (item === undefined) return;
    if (!ACTIONS.includes(item)) {
      if (nextDelete) {
        return;
      }
      transformedArr.push(item);
      if (next) {
        transformedArr.push(item);
        next = false;
      }
      prev = item;
      return;
    }
    if (item === DP && prev) {
      transformedArr.push(prev);
      return;
    }
    if (item === DN) {
      next = true;
    }
    if (item === DIP && prev) {
      transformedArr.pop();
      prev = transformedArr[transformedArr.length - 1];
    }
    if (item === DIN) {
      nextDelete = true;
      next = false;
    }
  });

  return transformedArr;
}

module.exports = {
  transform,
};
