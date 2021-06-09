const Writable = require('stream').Writable;

class OutputStream extends Writable {
  _write(chunk, enc, done) {
    process.stdout.write(chunk.toString().toUpperCase());
    // process.nextTick(done);
    // 故意延缓通知继续传递数据的时间，造成写入速度慢的现象
    setTimeout(done, 1000);
  }
}

module.exports = OutputStream;
