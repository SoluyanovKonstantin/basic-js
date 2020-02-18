const chainMaker = {
  length : 0,
  arr : [], 
  getLength() {
    return this.length;
  },
  addLink(value) {
    this.length++;
    this.arr.push(value);

    return this;
  },
  removeLink(position) {
    if (position > this.length || position <= 0 || typeof(position) != 'number') {
      this.length = 0;
      this.arr = [];
      throw 'removing wrong link';
      // remove line with error and write your code here
    } else {
      position--;
      for (let i = position; i<this.length-1; i++) {
        this.arr[i] = this.arr[i+1];
      }
      this.arr.pop();
      this.length--;
    }

    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    for (let i=0; i < this.length; i++) {
        str += '( ' + this.arr[i] + ' )~~'; 
    }
    str = str.slice(0, str.length - 2);
    this.arr = [];
    this.length = 0;
    return str;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
