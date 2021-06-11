const fs = require('fs');

const wrs = fs.createWriteStream('./ex.txt');

function write(data, cb) {
  if (!wrs.write(data)) {
    wrs.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// 在回调函数被执行后再进行其他的写入。
write('hello', () => {
  console.log('完成写入，可以进行更多的写入');
});
