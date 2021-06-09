const fs = require('fs');
const throuhg2 = require('through2');

// 实现功能 > 读取 ex.txt 内容，把字符 a 转成字符 z，输出到文件 out.txt 中
fs.createReadStream('./ex.txt')
  .pipe(throuhg2(function(chunk, enc, callback) {
    for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] === 97) {
        chunk[i] = 122; // swap 'a' for 'z'
      }
    }

    this.push(chunk); // 内容放到输出流，必须在 callback 之前调用，可以调用多次

    callback(); // 最后不要忘记调用
  }))
  .pipe(fs.createWriteStream('./out.txt'))
  .on('finish', () => console.log('结束之前做些什么吧'));
