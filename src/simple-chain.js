const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  length: 0,
  chain: [],
  getLength() {
    return this.length;
  },

  addLink(value) {
    this.length += 1;
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.length)
      throw new Error("You can't remove incorrect link!");
    else {
      position -= 1;

      for (let idx = position; idx < this.length - 1; idx += 1) {
        this.chain[idx] = this.chain[idx + 1];
      }
      this.chain.pop();
    }
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    return this.chain.join('~~');
  },
};

module.exports = {
  chainMaker,
};
