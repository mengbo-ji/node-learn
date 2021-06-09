const fs = require('fs');
const { pipeline } = require('stream');
const zlib = require('zlib');

/**
 * pipeline 方法的作用类似于链式调用 pipe() 方法 ，在管道内传输多个流，在管道任务结束后提供回调
  stream.pipeline(source[, ...transforms], destination, callback)
  1. source：可读流
  2. ...tranforms：双工流
  3. destination：可写流
  4. callback：当管道完全地完成时调用
*/

pipeline(
  fs.createReadStream('./through2.js'),
  zlib.createGzip(),
  fs.createWriteStream('through2.gz'),
  err => {
    if (err) {
      console.error('管道传送失败', err);
    } else {
      console.log('管道传送成功');
    }
  }
);
