const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {};
  if (!domains?.length) return dns;

  domains.forEach((domain) => {
    const parts = domain.split('.').reverse();
    let strPart = '';
    parts.forEach((part) => {
      strPart += `.${part}`;
      if (Object.keys(dns).includes(strPart)) {
        dns[strPart] += 1;
      } else {
        dns[strPart] = 1;
      }
    });
  });

  return dns;
}

module.exports = {
  getDNSStats,
};
