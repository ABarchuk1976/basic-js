const { VigenereCipheringMachine } = require('./src/vigenere-cipher');

const encoded = new VigenereCipheringMachine();

console.log(encoded.decrypt('AEIHQX SX DLLU!', 'alphonse'));
