/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  encrypt(str, key) {
    if (!str || !key) {
      new Error('Incorrect arguments!');
    }
    const strArr = str.toUpperCase().split('');
    const keyArr = key.toUpperCase().split('');
    const newArr = [];

    for (let idx = 0, idxK = 0; idx < strArr.length; idx += 1) {
      const l = strArr[idx].charCodeAt();
      const lK = keyArr[idxK].charCodeAt();
      if (l < 65 || l > 90) {
        newArr.push(strArr[idx]);
        continue;
      } else {
        const encCharCode = (l + lK - 65 * 2) % 26;
        console.log('PARAMS: ', l, lK, encCharCode);
        newArr.push(String.fromCharCode(encCharCode + 65));
        idxK = (idxK + 1) % keyArr.length;
      }

      console.log('NEW: ', newArr, idxK);
    }

    return newArr.join('');
  }

  decrypt(str, key) {
    if (!str || !key) {
      new Error('Incorrect arguments!');
    }
    const strArr = str.toUpperCase().split('');
    const keyArr = key.toUpperCase().split('');
    const newArr = [];

    for (let idx = 0, idxK = 0; idx < strArr.length; idx += 1) {
      const l = strArr[idx].charCodeAt();
      const lK = keyArr[idxK].charCodeAt();
      if (l < 65 || l > 90) {
        newArr.push(strArr[idx]);
        continue;
      } else {
        const encCharCode = l - lK > 0 ? (l - lK) % 26 : (l + 26 - lK) % 26;

        newArr.push(String.fromCharCode(encCharCode + 65));
        idxK = (idxK + 1) % keyArr.length;
      }

      console.log('NEW: ', newArr, idxK);
    }

    return newArr.join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
