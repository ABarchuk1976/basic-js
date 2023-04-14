const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  const arr = [...arr1];

  return arr.reduce((acc, current, idx) => {
    const idx2 = arr2.findIndex((item) => item === current);
    if (idx2 > -1) {
      acc += 1;
      arr1.splice(idx, 1);
      arr2.splice(idx2, 1);
    }

    console.log('arr1: ', arr1);
    console.log('arr2: ', arr2);
    console.log('acc: ', acc);
    return acc;
  }, 0);
}

module.exports = {
  getCommonCharacterCount,
};
