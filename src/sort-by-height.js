const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filteredArr = arr.filter((item) => item !== -1);
  const newArr = filteredArr.map((item) => Number(item)).sort((a, b) => a - b);

  let i = 0;
  const res = arr.map((item) => {
    if (item === -1) return -1;
    const k = i;
    i += 1;
    return newArr[k];
  });
  return res;
}

module.exports = {
  sortByHeight,
};
