const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  const repeatTimes = options?.repeatTimes ? options.repeatTimes : 1;
  const separator = options?.separator ? options.separator : '+';
  const addition =
    options?.addition ||
    options?.addition === false ||
    options?.addition === null
      ? String(options.addition)
      : '';
  const additionRepeatTimes = options?.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  const additionSeparator = options?.additionSeparator
    ? options.additionSeparator
    : '|';

  const additionArr = addition
    ? new Array(additionRepeatTimes).fill(addition)
    : '';

  const additionDivider = additionArr
    ? additionArr.join(additionSeparator)
    : '';

  const repeatArr = new Array(repeatTimes).fill(str.concat(additionDivider));

  console.log('repetArr: ', repeatArr);

  return repeatArr.join(separator);
}

module.exports = {
  repeater,
};
