/* eslint-disable */
ArrayBuffer.prototype.split = function(sep) {
  const len = Buffer.from(sep).length;
  console.log('len', len)
  const ret = [];
  let start = 0;
  let offset = 0;
  while (offset = this.indexOf(sep, start) !== -1) {
    ret.push(this.slice(start, offset));
    start = offset + len;
  }
  ret.push(this.slice(start))
  return ret;
};

const b1 = '我吃西红柿，我吃大番茄，我吃大西瓜, 吃'
const b2 = b1.split('吃')
console.log(b2)