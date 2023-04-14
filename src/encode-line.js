const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';

  for (let idx = 0; idx < str.length; ) {
    const char = str[idx];
    let count = 0;
    while (str[idx] === char) {
      count += 1;
      idx += 1;
    }
    res += count === 1 ? char : count + char;
  }

  return res;
}

module.exports = {
  encodeLine,
};
